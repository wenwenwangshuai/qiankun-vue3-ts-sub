import tips from '@/utils/tips';
import { App } from 'vue';
import store from '@/store/index';
// 默认每页数量
const limit = 10;
export const hasFn = (permission: string) => {
  if (!permission) {
    return false;
  }
  return Object.prototype.hasOwnProperty.call(store.getters.userInfo.permission || {}, permission);
};

// 全局方法
export default {
  install(Vue: App) {
    // 消息提示
    Vue.config.globalProperties.$tips = tips;
    // 操作权限判定
    Vue.config.globalProperties.$has = hasFn;
    // 每页数量
    Vue.config.globalProperties.$limit = limit;
  }
};
