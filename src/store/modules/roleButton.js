import {isEmpty} from '../../utils/index'
import Cookies from 'js-cookie';
import {Cookie} from "../../utils/index";

const Stroe = {
  state: {
    roleButtonList: +Cookies.get('roleButtonList'),//所有权限按钮信息
  },

  mutations: {
    /* =================== core data =================== */
    //set role button list
    SETROLEBUTTONLISTHANDLE: (state, data) => {
      state.roleButtonList = !data || isEmpty(data) ? [] : data;
      Cookie.set('roleButtonList', state.roleButtonList, 7);
    },
  },
  actions: {
    //set page info list handle
    setRoleButtonListHandle: ({commit}, data) => {
      commit('SETROLEBUTTONLISTHANDLE', data)
    },
  }
};

export default Stroe;
