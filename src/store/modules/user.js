// import {loginByEmail, logout, getInfo} from 'api/login';
import Cookies from 'js-cookie';
import CryptoJS from 'crypto-js'
import {Cookie, crypto} from "../../utils/index";

import sw from '@/switch'


const lifetime = 7;
const cookieName = 'userInfo'
const cookieKey = 'userPass';

/**
 * avatar data mock
 * @param baseUrl
 * @returns {string,null}
 * @private
 */
function _avatar_mock(baseUrl) {
  const type = ".jpg-thumb_m2.2_s200.200";
  const random = parseInt(Math.random() * 200);
  const bu = 'http://otaflb4oo.bkt.clouddn.com/mimo/p/avatar/cartoon/avatar';
  return sw['local-debug'] ? baseUrl : baseUrl ? baseUrl : null;
}

/**
 * deCrypto user-information data in cookie
 * @returns {{}}
 * @private
 */
function _deCryptoUserInfo() {
  return Cookies.get(cookieName) ?
    JSON.parse(CryptoJS.AES.decrypt(Cookies.get(cookieName), cookieKey).toString(CryptoJS.enc.Utf8)) : {}
}

const user = {
  state: {
    info: {
      token: +Cookies.get('token'),
      loginTime: '',
      maxage: '',
      userId: _deCryptoUserInfo().userId,
      userName: _deCryptoUserInfo().userName,
      avatar: _deCryptoUserInfo().avatar,
      roles: [],
    }
  },
  mutations: {
    //login and set/store - token info
    LOGIN: (state, data) => {
      Cookie.set('token', data.token, lifetime);
      //user information by login
      state.info.loginTime = data.loginTime;
      state.info.maxage = data.maxage;
      state.info.userId = data.userId;
      state.info.userName = data.userName;
      state.info.avatar = _avatar_mock(data.avatar);//avatar data mock
      //cookie store - token info
      crypto.cryptoCookie(cookieName, {
        loginTime: data.loginTime,
        maxage: data.maxage,
        userId: data.userId,
        userName: data.userName,
        avatar: _avatar_mock(data.avatar)
      }, cookieKey, lifetime);
    },
    //login-out
    LOGOUT: () => {
      Cookie.delete('token');
      Cookie.delete(cookieName);
      Cookie.delete('layout');
      Cookie.delete('visitedViews');
    },
  },

  actions: {
    //login 鐧诲綍
    Login({commit}, data) {
      commit('LOGIN', data);
    },
    //login-out 鐧诲嚭锛屾竻闄tore-token锛寀serInfo锛屽拰localStorage-token
    LogOut({commit}) {
      commit('LOGOUT')
    },
  }
};

export default user;
