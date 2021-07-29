import { App } from 'vue';
import { hasFn } from './properties';

// 全局注册自定义指令
export default {
  install(Vue: App) {
    Vue.directive('has', {
      mounted(el, binding) {
        if (!hasFn(binding.value)) {
          el.style.display = 'none';
        }
      }
    });
  }
};
