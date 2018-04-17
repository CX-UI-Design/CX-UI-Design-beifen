/*
 * Created by Broccoli spring( gcx ) on 2017/9/19.
 * Routing configuration for the UI interface, this project selects element-ui as the UI framework.
 */
import Cookies from 'js-cookie';
import Highlight from '../utils/highlight/index'
/* ---------------- css / less /sass ----------------*/
require('../assets/css/animate/animate.css');
import '../assets/css/reset.css'
import '../assets/css/element-ui/theme-default/index.css'
import '../assets/css/public.scss'//public css
import '../utils/svgConfig'//iconfont - config
//ele cover css
import '../assets/css/element-ui/theme-cover/base.scss'
import '../assets/css/element-ui/theme-cover/data.scss'

import '../assets/css/element-ui/theme-cover/navigation.scss'
import '../assets/css/element-ui/theme-cover/notice.scss'
import '../assets/css/element-ui/theme-cover/other.scss'

import '../assets/css/element-ui/theme-cover/form.scss'

//bench index style
import '../assets/css/modules/layout/layout.scss'
//front
import '../assets/css/modules/front/front.scss'


/* ---------------- js ( Framework or auxiliary function ) ---------------- */
import Vue from 'vue'
import ElementUI from 'element-ui'
import vueWaves from '../directive/waves';// waves command
import formEvent from '../utils/formEvent'

// import CxEasyForm from 'cx-easy-form';
// import 'cx-easy-form/dist/cx-easy-form.min.css';

import CxEasyForm from 'ns-form-components';
import 'ns-form-components/dist/ns-form-components.min.css';

Vue.use(ElementUI);
Vue.use(vueWaves);
Vue.use(Highlight)
Vue.use(CxEasyForm.body, {
  stageName: 'gcx',//stage name
  log: false,//show log information
  formEvent: formEvent,//binding form component interaction method （click / change / blur / fouce ... and so on）
  requestHead: {
    'appId': '07d8737811434732',
    "appClientType": "pc",
    "Set-Cookie": Cookies.get('token'),
  },
})

new Vue({
  ElementUI,
});
