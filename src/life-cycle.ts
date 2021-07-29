import { createApp, App as IVueApp } from 'vue';
import { createRouter, createWebHashHistory, Router } from 'vue-router';
import App from './App.vue';
import store from './store';
import selfRoutes from './router/index';
import routerPermission from './router/permission'
import ElementPlus from 'element-plus';
import directive from '@/utils/global/directive';
import properties from '@/utils/global/properties';
// import components from '@/utils/global/components';
import 'element-plus/lib/theme-chalk/index.css';
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn'

const temp: any = window;
const __qiankun__ = temp.__POWERED_BY_QIANKUN__;
let router: Router | null = null;
let instance: IVueApp | null;

/**
 * @name 导出生命周期函数
 */
const lifeCycle = () => {
  return {
    /**
     * @name 微应用初始化
     * @param {Object} props 主应用下发的props
     * @description  bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发
     * @description 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等
     */
    async bootstrap(props: any) {
      console.log('props:', props);
    },
    /**
     * @name 实例化微应用
     * @param {Object} props 主应用下发的props
     * @description 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
     */
    async mount(props: any) {
      // 注册微应用实例化函数
      render(props);
    },
    /**
     * @name 微应用卸载/切出
     */
    async unmount() {
      instance && instance.unmount?.();
      instance = null;
      router = null;
    },
    /**
     * @name 手动加载微应用触发的生命周期
     * @param {Object} props 主应用下发的props
     * @description 可选生命周期钩子，仅使用 loadMicroApp 方式手动加载微应用时生效
     */
    async update(props: any) {
      console.log('update props', props);
    }
  };
};

/**
 * @name 子应用实例化函数
 * @param {Object} props param0 qiankun将用户添加信息和自带信息整合，通过props传给子应用
 * @description {String} 子应用路由前缀 主应用请求获取注册表后，从服务端拿到路由数据
 */
const render = ({ routerBase, container }: any = {}) => {
  router = createRouter({
    history: createWebHashHistory(__qiankun__ ? routerBase : '/'),
    routes: selfRoutes
  });
  // 路由拦截
  routerPermission(router)
  instance = createApp(App);
  instance
    .use(router)
    .use(store)
    .use(properties)
    .use(directive)
    // .use(components)
    .use(ElementPlus, { locale })
    .mount(container ? container.querySelector('#app') : '#app');
};

export { lifeCycle, render };
