/**
 * token template
 * https://www.npmjs.com/package/js-cookie
 */
import Cookies from "js-cookie";

const TokenKey = "token";

const Token = {
  get() {
    return Cookies.get(TokenKey);
  },

  set(value) {
    const options = {
      //   domain: window.location.host,
      //   path: '/',
      expires: 7, // 天
    };

    return Cookies.set(TokenKey, value, options);
  },

  remove() {
    return Cookies.remove(TokenKey);
  },
};

export default Token;
