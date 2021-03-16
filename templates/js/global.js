//  global.js文件 Vue.use(global);

// 查找同级目录下以vue结尾的组件
const Context = require.context("./", false, /\.vue$/);

const install = (Vue) => {
  for (const filename of Context.keys()) {
    let component = Context(filename).default;
    Vue.component(component.name, component);
  }
};

export default {
  // 对外暴露install方法
  install,
};
