/* 手机号码*/
export function validateMobile(str: string) {
  const reg = /^1\d{10}$/;
  return reg.test(str);
}

/* 合法uri*/
export function validateURL(str: string) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return reg.test(str);
}

/* 小写字母*/
export function validateLowerCase(str: string) {
  const reg = /^[a-z]+$/;
  return reg.test(str);
}

/* 大写字母*/
export function validateUpperCase(str: string) {
  const reg = /^[A-Z]+$/;
  return reg.test(str);
}

/* 大小写字母*/
export function validateAlphabets(str: string) {
  const reg = /^[A-Za-z]+$/;
  return reg.test(str);
}

// 验证正整数 x > 0
export function isPositiveInteger(str: string) {
  const reg = /^[1-9]\d*$/;
  return reg.test(str);
}

// 验证大于等于0自然数
export function isNaturalNumber(str: string) {
  const reg = /^[0-9]\d*$/;
  return reg.test(str);
}

// 验证小数 限制 x >= 0.00
export function isPositiveFloatLimit(str: string) {
  const reg = /^\d+\.?\d{0,2}$/;
  return reg.test(str);
}

// 验证 0~100 小数
export function isPositiveHundredFloat(str: string) {
  const reg = /^\d+\.?\d{0,2}$/;
  const flag = reg.test(str) && Number(str) < 100;
  return flag;
}

// 判断手机操作系统(ios或者是Android)
export function isIOS() {
  return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}

// 验证是否是身份证号码
export function isCardNo(str: string) {
  const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(str);
}

// 银行卡号格式验证
export function isBank(str: string) {
  const reg = /^([1-9]{1})(\d{8,20})$/;
  return reg.test(str);
}

// 是否是网站链接地址
export function isWebUrl(url: string) {
  const reg = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+).)+([A-Za-z0-9-~\/])+$/;
  return reg.test(url);
}

// 是否是邮箱地址
export function isMail(txt: string) {
  const reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return reg.test(txt);
}
