import Vue from 'vue'
import CxEasyForm from 'cx-easy-form'
import 'cx-easy-form/dist/cx-easy-form.min.css';
import formEvent from './utils/formEvent'//导入自定义挂载事件
import ALL_keyRefer from './ALL_keyRefer'//导入字段属性名配置

Vue.use(CxEasyForm.body, {
  stageName: 'cx',                                //自定义标签前缀+方法名
  stageNamelink: '-',                             //标签前缀连接符
  lan: 'ZH',                                      //语言
  log: false,                                     //是否显示调试辅助信息
  formEvent: formEvent,                           //外部导入自定义挂载事件
  mock: true,                                     //是否开启本地测试模式
  requestHead: {                                  //自定义请求头部
    'appId': '07d8737811434732',
    "appClientType": "pc",
    "Set-Cookie": Cookies.get('token'),
  },
  keyRefer: ALL_keyRefer                          //字段属性名配置
})

let former = {
  stageName: 'gcx',//stage name config
  stageNamelink: '-',//stage name link config
  lan: 'ZH',//language config
  mock: true,//mock data
  log: false,//log information show
  requestHead: {},//request head config for all components
  formEvent: {},//binding form component interaction method （click / change / blur / fouce ... and so on）
  keyRefer: ALL_keyRefer//keyRefer config
}

import Vue from 'vue';
import CxEasyForm from 'cx-easy-form'
import App from './App.vue';

Vue.use(CxEasyForm);

new Vue({
  el: '#app',
  render: h => h(App)
});

import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});

//FormEvent.js 文件中
const FormEvent = {
  //在表单交互行为示例页面，作为典型案例
  eventTemp: (params) => {
    console.log(params);
    alert('这是新加入的外置事件，将这个事件对象输出挂载到 formEvent 属性上吧')
  }
}
export default FormEvent;

// ================================ 分割线 =============================

import FormEvent from './FormEvent.js'
import CxEasyForm from 'cx-easy-form'

Vue.use(CxEasyForm.body, {
  formEvent: formEvent,                           //外部导入自定义挂载事件
})

//ALL_keyRefer.js 文件中
export const ALL_keyRefer = {
  "auto-form": AFTemp,               //自动表单配置字段

  //其他一些控件配置字段
  "roleCheckBtn": Temp,
  "role-employee": Temp,
  "role-group": Temp,
  "role-authorizer": Temp,
  "simple-tree-select": Temp,
  "role-manage-range": Temp,
  .............
}
//只需要对应的把 auto-for 属性所对应的值替换掉即可

const AFTemp = {
  info: {
    "label-width": "funcinfoFormlabelwidth",//表单整体 lable 宽度
    "form-cols": "funcinfoFormcols",
    "width-supply": "width-supply",//表单宽度补足
  },
  fields: {
    //字段
    "model-key": "resourcefieldCode",  //表单model字段名称
    "secondModelKey": "resourcefieldSecondCode",  //二级表单model字段名称

    //类型
    "item-type": "resourcefieldXtype",//控件item 一级分类
    "second-type": "secondXtype",//控件 二级分类
    "third-type": 'thirdXtype',//控件-业务 三级分类

    //尺寸
    width: "fieldWidth",//表单元素部分宽度
    height: "fieldHeight",//表单元素部分高度
    label: "resourcefieldName",//表单字段 lable 名称
    "label-width": "label-width",//表单字段 lable 宽度
    "freedom": "freedom",//el-form-item / cx-muster-item 自由宽度开关 （ 其宽度有实际子内容宽度决定，不再由基础最大宽度控制 ），浮动依次排列

    //验证
    required: "isfieldRequired",//是否必填 required
    "require-msg": "resourcefieldBinding",//必填出错 提示信息
    "rules-regulation": "resourcefieldAllowblankexp",//内容验证规则
    "rules-type": "resourcefieldVtype",//验证字段的内容类型

    //编辑
    placeholder: "resourcefieldEmptytext",//placeholder的值
    disabled: "isResourcefieldRemoved",//是否禁用
    readonly: "isResourcefieldReadonly",//是否只读
    editable: "isResourcefieldEditable",//是否可编辑
    clearable: "clearable",//是否支持清空选项
    multiple: "multiple",

    //行 列
    colspan: "resourcefieldColspan",//所占列数
    rowspan: "resourcefieldRowspan",//所占行数 row 值 - 所占 行数 （textarea / avatar / span ......）

    //表单控件内容（ checkbox/radio/select/Cascader... ）
    items: "items",//表单控件内容部分（array格式）（checkbox，radio......）
    initItems: "itemsObj",//表单控件内容部分（object格式) - (省市区专用）

    //其他
    max: "max",//max
    min: "min",//min
    step: "resourcefieldStep",//step 步长
    icon: "resourcefieldFieldcls",//表单控件图标
    "group-name": "resourcefieldGroupname",//Groupname 分组名称
    hidden: "isResourcefieldHidden",//hidden 显示/隐藏属性
    scale: "scale",//表单元素（图片/上传控件图片），宽度高度比例（ 宽度 / 高度 ）
    range: "range",//是否为范围选择
    tableHead: "tableHead",//表头

    pickerOptions: "pickerOptions",
    format: "format",//显示在输入框中的格式
    "value-format": "value-format",//时间日期绑定值格式，不指定则绑定Data对象


    //请求交互
    dynamicUrl: "dynamicUrl",
    dynamicQuery: "dynamicQuery",
    dynamicSrc: "dynamicSrc",

    //事件集合
    fnList: "resourcefieldBindingfnList",
    //补充字段
    "other-config": "resourcefieldOtherconfigObject",

    groupMaxColspan: "resourcefieldConfiginfo",//分组框内部最大列数

    children: "children",//子集元素

    cueType: "cueType",//验证提示样式
  },
  components: {
    upload: {
      url: 'fileUrl'
    }
  }
};

================================ 分割线 =============================

//再将 ALL_keyRefer 对象输出挂载到 keyRefer 属性上即可

import FormEvent from './FormEvent.js'
import CxEasyForm from 'cx-easy-form'
import {ALL_keyRefer} from './ALL_keyRefer.js'

Vue.use(CxEasyForm.body, {
  keyRefer: ALL_keyRefer,                           //外部导入自定义挂载事件
})












