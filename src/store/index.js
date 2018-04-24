import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import tabView from './modules/tabView';
import SideBar from './modules/SideBar';
import roleButton from './modules/roleButton';
import test from './modules/test';


import getters from './getters';

import CxEasyForm from '../../../cx-easy-form/dist/cx-easy-form.min';

let Form = CxEasyForm.store;


Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    Form,
    tabView,
    SideBar,
    roleButton,
    user,
    test
  },
  getters
});


export default store
