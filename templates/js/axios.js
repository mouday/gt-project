/**
 * axios template
 */
import Axios from "axios";

export const instance = Axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 毫秒
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  () => {
    console.log("请求出错");
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  () => {
    console.log("响应出错");
  }
);

// 请求接口
const dataApi = {
  getUserName: "/userName",
};

// 包装请求方法的容器
const Http = {};

for (const [name, url] of Object.entries(dataApi)) {
  Http[name] = async function (data) {
    return await instance.request({
      method: "POST", // 与后端约定，所有请求方式都是POST
      url: url,
      data: data,
    });
  };
}

export default Http;
