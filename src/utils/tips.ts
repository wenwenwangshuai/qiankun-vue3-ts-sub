import { ElMessage, ElMessageBox, ElLoading } from 'element-plus';
import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type';

let loadingInstance: ILoadingInstance;
export default class elmTips {
  // 弹出框
  static alert(content: string, fnOk?: () => void, btnText?: string) {
    ElMessageBox.alert(content, '', {
      confirmButtonText: btnText || '确认',
      callback: fnOk
    });
  }

  // 二次确认框
  static confirm(
    content: string,
    fnOk: () => void,
    fnCancel?: () => void,
    confirmButtonText?: string,
    cancelButtonText?: string,
    title?: string
  ) {
    ElMessageBox.confirm(content, title || '', {
      confirmButtonText: confirmButtonText || '确定',
      cancelButtonText: cancelButtonText || '取消',
      type: 'warning'
    })
      .then(() => {
        typeof fnOk === 'function' && fnOk();
      })
      .catch(() => {
        typeof fnCancel === 'function' && fnCancel();
      });
  }

  // 操作成功提示框
  static success(content: string, callBack?: () => void) {
    ElMessage.success({
      message: content,
      type: 'success',
      onClose: callBack
    });
  }

  // 操作失败提示框
  static error(content: string, callBack?: () => void) {
    ElMessage.error({
      message: content,
      type: 'error',
      onClose: callBack
    });
  }

  // 整页加载提示
  static loading(isShow: boolean, loadingText?: string) {
    if (isShow) {
      loadingInstance = ElLoading.service({
        lock: true,
        text: loadingText || 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
    } else {
      loadingInstance && loadingInstance.close();
    }
  }
}
