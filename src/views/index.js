/*
 * Created by Broccoli spring( gcx ) on 2017/9/19.
 * Routing configuration for the UI interface, this project selects element-ui as the UI framework.
 */
import Cookies from 'js-cookie';
import Highlight from '../utils/highlight/index'
/* ---------------- css / less /sass ----------------*/
import 'cx-theme/dist/cx-theme.min.css'
import '../assets/css/theme-cover.scss'//ele cover css
import '../assets/css/public.scss'//public css
import '../assets/css/modules/layout/layout.scss'//bench index style
import '../assets/css/modules/front/front.scss'//front
import '../utils/svgConfig'//iconfont - config

/* ---------------- js ( Framework or auxiliary function ) ---------------- */
import Vue from 'vue'
import ElementUI from 'element-ui'
import vueWaves from '../directive/waves';// waves command
import formEvent from '../utils/formEvent'

import CxEasyForm from '../../../cx-easy-form/dist/cx-easy-form.min';
import '../../../cx-easy-form/dist/cx-easy-form.min.css';

Vue.use(ElementUI);
Vue.use(vueWaves);
Vue.use(Highlight)
Vue.use(CxEasyForm.body, {
  stageName: 'cx',//stage name
  log: false,//show log information
  formEvent: formEvent,//binding form component interaction method （click / change / blur / fouce ... and so on）
  mock: true,
  requestHead: {
    'appId': '07d8737811434732',
    "appClientType": "pc",
    "Set-Cookie": Cookies.get('token'),
  },
})

new Vue({
  ElementUI,
});
