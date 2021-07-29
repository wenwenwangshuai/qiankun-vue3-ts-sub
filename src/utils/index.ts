import Tips from './tips';

// 时间戳、文本、对象 转换时间文本
export function parseTime(
  time: Object | string | number,
  cFormat = '{y}-{m}-{d} {h}:{i}:{s}'
): string {
  if (arguments.length === 0) {
    return '';
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  let date;
  if (typeof time === 'object') {
    date = time;
  } else {
    let timeNum: number = 0;
    if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
      timeNum = parseInt(time);
    }
    if (typeof time === 'number' && time.toString().length === 10) {
      timeNum = time * 1000;
    }
    date = new Date(timeNum);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value];
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value;
    }
    return value || 0;
  });
  return time_str;
}

// 输入金额转换，最多为两位小数
export const inputPriceConvert = (num) => {
  if (!+num) {
    return 0;
  }
  return Math.floor(+num * 100) / 100;
};

/**
 * @method parseStringBySymbols
 * @description 描述：根据传入特定符号生成解析字符串函数
 * @param {string} symbols
 * @return {function}
 * @example parseStringBySymbols('&')
 */
function parseStringBySymbols(
  splitSymbols: string,
  url: string,
  equalSymbols: string = '='
): { [key: string]: any } {
  const paraString = url.split(splitSymbols);
  let [result, key, value]: [string[], string, string] = [[], '', ''];
  const obj = {};
  for (let i = 0, length = paraString.length; i < length; i++) {
    result = paraString[i].split(equalSymbols);
    key = result[0];
    value = result[1];
    obj[key] = value;
  }
  return obj;
}

/**
 * @method loadScript
 * @description 描述：加载script
 * @param {String} url:script文件地址
 * @param {String} ObjName:加载完毕后挂载到的对象名称
 * @return Function
 */
const loadFlag:string[] = [];
export const loadScript = (url:string, ObjName: string) => {
  return () => {
    return new Promise((resolve, reject) => {
      // 防止重复加载
      if (
        typeof window[ObjName] !== 'undefined' ||
        loadFlag.includes(ObjName)
      ) {
        const resolveFun = () => {
          setTimeout(() => {
            if (window[ObjName]) {
              resolve(window[ObjName]);
            } else {
              resolveFun();
            }
          }, 0);
        };
        resolveFun();
      } else {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.onerror = () => {
          console.warn(url + '加载失败');
          reject(window[ObjName]);
        };
        loadFlag.push(ObjName);
        if (url.includes('callback')) {
          const callbackName: string = parseStringBySymbols('&', url).callback;
          script.src = url;
          window[callbackName] = () => {
            resolve(window[ObjName]);
          };
        } else {
          script.src = url;
          script.onload = () => {
            // 这个setTimeout不能删 onload 加载完成的时候不代表整个js文件执行完成
            setTimeout(() => {
              resolve(window[ObjName]);
            }, 100);
          };
        }
        document.head.appendChild(script);
      }
    });
  };
};
