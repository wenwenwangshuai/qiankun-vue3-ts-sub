# qiankun-dome

## 命名规范

interface IApp { ... } // interface命名需要首部插入【I】进行区分
├─api              // 接口请求
├─assets           // 图片资源文件
├─components       // 全局组件
├─config           // 配置文件
├─interface        // interface定义
├─router           // 路由
│  ├─index.ts
│  └─permission.ts
├─store            // 状态管理
│  ├─modules
│  ├─getters.ts
│  └─index.ts
├─styles           // sass样式文件
│  ├─icon.scss
│  ├─index.scss
│  └─mixin.scss
├─utils
│  ├─global
│  └─pages
└─views