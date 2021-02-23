/**
 * permission.js 权限指令
 * Vue.use(permission);
 */

// 获取用户权限列表, 可以从cookie中获取
function getUserPermissions() {
  return ["user", "editor"];
}

// 校验用户权限，传入一个数组或字符串
function hasPermission(role) {
  let roles = Array.isArray(role) ? role : [role];

  let useRoles = getUserPermissions();

  return useRoles.some((val) => roles.includes(val));
}

// 权限指令
const permission = {
  inserted(el, binding) {
    // 获取到 v-permission的值
    if (!hasPermission(binding.value)) {
      // 没有权限 移除Dom元素
      el.parentNode && el.parentNode.removeChild(el);
    }
  },
};

export default {
  install: (vue) => {
    vue.directive("permission", permission);
    vue.prototype.$_has = hasPermission;
  },
};
