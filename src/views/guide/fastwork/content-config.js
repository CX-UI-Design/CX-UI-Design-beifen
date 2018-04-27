//code temple
export const code = {
  //rely on
  relyOn: 'import ElementUI from \'element-ui\';\n' +
  'import \'element-ui/lib/theme-chalk/index.css\';\n' +
  '\n' +
  'Vue.use(ElementUI);',

  //loading
  loading: 'import Vue from \'vue\';\n' +
  'import CxEasyForm from \'cx-easy-form\'\n' +
  'import App from \'./App.vue\';\n' +
  '\n' +
  'Vue.use(CxEasyForm);\n' +
  '\n' +
  'new Vue({\n' +
  '  el: \'#app\',\n' +
  '  render: h => h(App)\n' +
  '});',

  //UI
  css: 'import \'cx-easy-form/dist/cx-easy-form.min.css\';',

  //globalConf
  globalConf: 'import Vue from \'vue\'\n' +
  'import CxEasyForm from \'cx-easy-form\'\n' +
  'import \'cx-easy-form/dist/cx-easy-form.min.css\';\n' +
  'import formEvent from \'./utils/formEvent\'//导入自定义挂载事件\n' +
  'import ALL_keyRefer from \'./ALL_keyRefer\'//导入字段属性名配置\n' +
  '\n' +
  'Vue.use(CxEasyForm.body, {\n' +
  '  stageName: \'cx\',                                //自定义标签前缀+方法名\n' +
  '  stageNamelink: \'-\',                             //标签前缀连接符\n' +
  '  lan: \'ZH\',                                      //语言\n' +
  '  log: false,                                     //是否显示调试辅助信息\n' +
  '  formEvent: formEvent,                           //外部导入自定义挂载事件\n' +
  '  mock: true,                                     //是否开启本地测试模式\n' +
  '  requestHead: {                                  //自定义请求头部\n' +
  '    \'appId\': \'07d8737811434732\',\n' +
  '    "appClientType": "pc",\n' +
  '    "Set-Cookie": Cookies.get(\'token\'),\n' +
  '  },\n' +
  '  keyRefer: ALL_keyRefer                          //字段属性名配置\n' +
  '})',

  //formEvent template
  formEvent: '//FormEvent.js 文件中\n' +
  'const FormEvent = {\n' +
  '  //在表单交互行为示例页面，作为典型案例\n' +
  '  eventTemp: (params) => {\n' +
  '    console.log(params);\n' +
  '    alert(\'这是新加入的外置事件，将这个事件对象输出挂载到 formEvent 属性上吧\')\n' +
  '  }\n' +
  '}\n' +
  'export default FormEvent;\n' +
  '\n' +
  '// ================================ 分割线 =============================\n' +
  '\n' +
  'import FormEvent from \'./FormEvent.js\'\n' +
  'import CxEasyForm from \'cx-easy-form\'\n' +
  '\n' +
  'Vue.use(CxEasyForm.body, {\n' +
  '  formEvent: formEvent,                           //外部导入自定义挂载事件\n' +
  '})',

  //keyRefer template
  keyRefer: '//ALL_keyRefer.js 文件中\n' +
  'export const ALL_keyRefer = {\n' +
  '  "auto-form": AFTemp,               //自动表单配置字段\n' +
  '\n' +
  '  //其他一些控件配置字段\n' +
  '  "roleCheckBtn": Temp,\n' +
  '  "role-employee": Temp,\n' +
  '  "role-group": Temp,\n' +
  '  "role-authorizer": Temp,\n' +
  '  "simple-tree-select": Temp,\n' +
  '  "role-manage-range": Temp,\n' +
  '  .............\n' +
  '}\n' +
  '//只需要对应的把 auto-for 属性所对应的值替换掉即可\n' +
  '\n' +
  'const AFTemp = {\n' +
  '  info: {\n' +
  '    "label-width": "funcinfoFormlabelwidth",//表单整体 lable 宽度\n' +
  '    "form-cols": "funcinfoFormcols",\n' +
  '    "width-supply": "width-supply",//表单宽度补足\n' +
  '  },\n' +
  '  fields: {\n' +
  '    //字段\n' +
  '    "model-key": "resourcefieldCode",  //表单model字段名称\n' +
  '    "secondModelKey": "resourcefieldSecondCode",  //二级表单model字段名称\n' +
  '\n' +
  '    //类型\n' +
  '    "item-type": "resourcefieldXtype",//控件item 一级分类\n' +
  '    "second-type": "secondXtype",//控件 二级分类\n' +
  '    "third-type": \'thirdXtype\',//控件-业务 三级分类\n' +
  '\n' +
  '    //尺寸\n' +
  '    width: "fieldWidth",//表单元素部分宽度\n' +
  '    height: "fieldHeight",//表单元素部分高度\n' +
  '    label: "resourcefieldName",//表单字段 lable 名称\n' +
  '    "label-width": "label-width",//表单字段 lable 宽度\n' +
  '    "freedom": "freedom",//el-form-item / cx-muster-item 自由宽度开关 （ 其宽度有实际子内容宽度决定，不再由基础最大宽度控制 ），浮动依次排列\n' +
  '\n' +
  '    //验证\n' +
  '    required: "isfieldRequired",//是否必填 required\n' +
  '    "require-msg": "resourcefieldBinding",//必填出错 提示信息\n' +
  '    "rules-regulation": "resourcefieldAllowblankexp",//内容验证规则\n' +
  '    "rules-type": "resourcefieldVtype",//验证字段的内容类型\n' +
  '\n' +
  '    //编辑\n' +
  '    placeholder: "resourcefieldEmptytext",//placeholder的值\n' +
  '    disabled: "isResourcefieldRemoved",//是否禁用\n' +
  '    readonly: "isResourcefieldReadonly",//是否只读\n' +
  '    editable: "isResourcefieldEditable",//是否可编辑\n' +
  '    clearable: "clearable",//是否支持清空选项\n' +
  '    multiple: "multiple",\n' +
  '\n' +
  '    //行 列\n' +
  '    colspan: "resourcefieldColspan",//所占列数\n' +
  '    rowspan: "resourcefieldRowspan",//所占行数 row 值 - 所占 行数 （textarea / avatar / span ......）\n' +
  '\n' +
  '    //表单控件内容（ checkbox/radio/select/Cascader... ）\n' +
  '    items: "items",//表单控件内容部分（array格式）（checkbox，radio......）\n' +
  '    initItems: "itemsObj",//表单控件内容部分（object格式) - (省市区专用）\n' +
  '\n' +
  '    //其他\n' +
  '    max: "max",//max\n' +
  '    min: "min",//min\n' +
  '    step: "resourcefieldStep",//step 步长\n' +
  '    icon: "resourcefieldFieldcls",//表单控件图标\n' +
  '    "group-name": "resourcefieldGroupname",//Groupname 分组名称\n' +
  '    hidden: "isResourcefieldHidden",//hidden 显示/隐藏属性\n' +
  '    scale: "scale",//表单元素（图片/上传控件图片），宽度高度比例（ 宽度 / 高度 ）\n' +
  '    range: "range",//是否为范围选择\n' +
  '    tableHead: "tableHead",//表头\n' +
  '\n' +
  '    pickerOptions: "pickerOptions",\n' +
  '    format: "format",//显示在输入框中的格式\n' +
  '    "value-format": "value-format",//时间日期绑定值格式，不指定则绑定Data对象\n' +
  '\n' +
  '    //请求交互\n' +
  '    dynamicUrl: "dynamicUrl",\n' +
  '    dynamicQuery: "dynamicQuery",\n' +
  '    dynamicSrc: "dynamicSrc",\n' +
  '\n' +
  '    //事件集合\n' +
  '    fnList: "resourcefieldBindingfnList",\n' +
  '    //补充字段\n' +
  '    "other-config": "resourcefieldOtherconfigObject",\n' +
  '\n' +
  '    groupMaxColspan: "resourcefieldConfiginfo",//分组框内部最大列数\n' +
  '\n' +
  '    children: "children",//子集元素\n' +
  '\n' +
  '    cueType: "cueType",//验证提示样式\n' +
  '  },\n' +
  '  components: {\n' +
  '    upload: {\n' +
  '      url: \'fileUrl\'\n' +
  '    }\n' +
  '  }\n' +
  '};\n' +
  '\n' +
  '//================================ 分割线 =============================\n' +
  '  \n' +
  '//再将 ALL_keyRefer 对象输出挂载到 keyRefer 属性上即可\n' +
  '\n' +
  'import FormEvent from \'./FormEvent.js\'\n' +
  'import CxEasyForm from \'cx-easy-form\'\n' +
  'import {ALL_keyRefer} from \'./ALL_keyRefer.js\'\n' +
  '\n' +
  'Vue.use(CxEasyForm.body, {\n' +
  '  keyRefer: ALL_keyRefer,\n' +
  '})',

}

//options config
export const optionsConf = [
  {attr: 'stageName', explain: '自定义标签前缀+方法名', type: 'string', value: '-', default: 'cx'},
  {attr: 'stageNamelink', explain: '标签前缀连接符', type: 'string', value: '-', default: '-'},
  {attr: 'lan', explain: '语言', type: 'boolean', value: '-', default: 'ZH'},
  {attr: 'log', explain: '是否显示调试辅助信息', type: 'boolean', value: '-', default: 'false'},
  {attr: 'mock', explain: '外部导入自定义挂载事件', type: 'boolean', value: '-', default: 'true'},
  {attr: 'requestHead', explain: '是否开启本地测试模式', type: 'object', value: '-', default: '-'},
  {attr: 'formEvent', explain: '自定义请求头部', type: 'object', value: '-', default: '-'},
  {attr: 'keyRefer', explain: '字段属性名配置', type: 'object', value: '-', default: '-'},
]
