import "./public-path";
import '@/styles/index.scss' // 引入全局样式
import { lifeCycle, render } from "./life-cycle";

/**
 * @name 导出微应用生命周期
 */
const { bootstrap, mount, unmount } = lifeCycle();
export { bootstrap, mount, unmount };

/**
 * @name 单独环境直接实例化vue
 */
const temp: any = window;
const __qiankun__ = temp.__POWERED_BY_QIANKUN__;
__qiankun__ || render();
