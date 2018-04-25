//code temple
export const code = {
  local: '<template>\n' +
  '  <cx-auto-form autoFormID="localFormTemplate"\n' +
  '                :isLocal="true"\n' +
  '                :localData="loaclFormdata"\n' +
  '                :cover-data="coverData"\n' +
  '                cue-type="only-error"\n' +
  '  ></cx-auto-form>\n' +
  '</template>\n' +
  '\n' +
  '<script>\n' +
  '  import {dynamicAndLocal} from \'../../mock/Form/template-auto-form\';//引入本地数据\n' +
  '  import pickerOptionsMap from \'../../static-data/form/picker-options\';//引入本地时间日期控件的修改配置\n' +
  '\n' +
  '  export default {\n' +
  '    data() {\n' +
  '      return {\n' +
  '        loaclFormdata: dynamicAndLocal.resultData,\n' +
  '        coverData: {\n' +
  '          pickerOptions: {\n' +
  '            birthday: pickerOptionsMap[\'date-point\'].birthday,\n' +
  '          },\n' +
  '        },\n' +
  '      }\n' +
  '    },\n' +
  '    created() {\n' +
  '      //注册渲染表单\n' +
  '      this.$CX.autoForm.formController.set(this, \'localFormTemplate\', {\n' +
  '        show: true,\n' +
  '      });\n' +
  '    },\n' +
  '  }\n' +
  '</script>',
  dynamic: '<template>\n' +
  '  <cx-auto-form autoFormID="dynamicFormTemplate"\n' +
  '                request-url="/mock/autoForm/dynamic"\n' +
  '                :query="{}"\n' +
  '                :cover-data="coverData"\n' +
  '                cue-type="only-error"\n' +
  '  ></cx-auto-form>\n' +
  '</template>\n' +
  '\n' +
  '<script>\n' +
  '  import pickerOptionsMap from \'../../static-data/form/picker-options\';//引入本地时间日期控件的修改配置\n' +
  '\n' +
  '  export default {\n' +
  '    data() {\n' +
  '      return {\n' +
  '        coverData: {\n' +
  '          pickerOptions: {\n' +
  '            birthday: pickerOptionsMap[\'date-point\'].birthday,\n' +
  '          },\n' +
  '        },\n' +
  '      }\n' +
  '    },\n' +
  '    created() {\n' +
  '      //注册渲染表单\n' +
  '      this.$CX.autoForm.formController.set(this, \'localFormTemplate\', {\n' +
  '        show: true,\n' +
  '      });\n' +
  '    },\n' +
  '  }\n' +
  '</script>',
  formDataJson: ' //v-model 绑定字段对象的属性及值\n' +
  '    "modelData": {\n' +
  '      "name": "高仓雄",\n' +
  '      "mobile": "",//移动电话\n' +
  '      "cardType": "",//证件类型\n' +
  '      "cardNum": "",//证件号码\n' +
  '      "sex": "1",//性别\n' +
  '      "birthday": "",//出生日期\n' +
  '      "origin": "",//籍贯\n' +
  '      "nation": "",//民族\n' +
  '      "hobby": [],//兴趣爱好\n' +
  '    },\n' +
  '    //表单信息\n' +
  '    "info": {\n' +
  '      "funcinfoFormlabelwidth": 100,\n' +
  '      "funcinfoFormcols": 2    //表单所占列数\n' +
  '    },\n' +
  '    //表单控件循环信息\n' +
  '    "fields": [\n' +
  '      //客户姓名 - input\n' +
  '      {\n' +
  '        "resourcefieldXtype": "input",    //表单类型\n' +
  '        "resourcefieldCode": "name",  //表单model字段名称\n' +
  '        "resourcefieldName": "姓名",   //表单字段 lable 名称\n' +
  '        "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度\n' +
  '        "isfieldRequired": true, //是否必填 required\n' +
  '        "resourcefieldBinding": "请输入姓名",//必填出错 提示信息\n' +
  '        "resourcefieldAllowblankexp": "numEn-",//内容验证规则\n' +
  '        "resourcefieldVtype": "string",//验证字段的 内容类型\n' +
  '        "resourcefieldOtherconfigObject": {\n' +
  '          "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere\n' +
  '          "min": undefined,//min\n' +
  '          "max": 10,//max\n' +
  '        },\n' +
  '        "resourcefieldEmptytext": "请输入姓名",//placeholder的值\n' +
  '        "isResourcefieldRemoved": false,//是否禁用\n' +
  '        "isResourcefieldReadonly": false,//是否只读\n' +
  '        "fieldWidth": 350,//表单元素部分宽度\n' +
  '        "fieldHeight": 32,//表单元素部分高度\n' +
  '        "resourcefieldStep": null,//step 步长\n' +
  '        "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）\n' +
  '        "resourcefieldFieldcls": "add",//表单控件图标\n' +
  '        "isResourcefieldEditable": false,//是否可编辑\n' +
  '        "resourcefieldColspan": 1,//所占列数\n' +
  '        "items": null,//表单控件内容部分（checkbox，radio......）\n' +
  '        "resourcefieldGroupname": "base-info", //分组名称\n' +
  '        "isResourcefieldHidden": false,       //是否隐藏\n' +
  '        "resourcefieldBindingfnList": [],//事件名称集合\n' +
  '      },\n' +
  '      //移动电话 - input\n' +
  '      {\n' +
  '        "resourcefieldXtype": "input",    //表单类型\n' +
  '        "resourcefieldCode": "mobile",  //表单model字段名称\n' +
  '        "resourcefieldName": "移动电话",   //表单字段 lable 名称\n' +
  '        "isfieldRequired": true, //是否必填 required\n' +
  '        "resourcefieldBinding": "请输入移动电话",//必填出错 提示信息\n' +
  '        "resourcefieldAllowblankexp": "mobile",//内容验证规则\n' +
  '        "resourcefieldVtype": "string",//验证字段的 内容类型\n' +
  '        "resourcefieldOtherconfigObject": {\n' +
  '          "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere\n' +
  '          "min": undefined,//min\n' +
  '          "max": undefined,//max\n' +
  '        },\n' +
  '        "resourcefieldEmptytext": "请输入移动电话",//placeholder的值\n' +
  '        "isResourcefieldRemoved": false,//是否禁用\n' +
  '        "isResourcefieldReadonly": false,//是否只读\n' +
  '        "fieldWidth": 350,//表单元素部分宽度\n' +
  '        "fieldHeight": 32,//表单元素部分高度\n' +
  '        "resourcefieldStep": null,//step 步长\n' +
  '        "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）\n' +
  '        "resourcefieldFieldcls": null,//表单控件图标\n' +
  '        "isResourcefieldEditable": false,//是否可编辑\n' +
  '        "resourcefieldColspan": 1,//所占列数\n' +
  '        "items": null,//表单控件内容部分（checkbox，radio......）\n' +
  '        "resourcefieldGroupname": "base-info", //分组名称\n' +
  '        "isResourcefieldHidden": false,       //是否隐藏\n' +
  '        "resourcefieldBindingfnList": [],//事件名称集合\n' +
  '      },\n' +
  '      //证件类型 - select\n' +
  '      {\n' +
  '        "resourcefieldXtype": "select",    //表单类型\n' +
  '        "resourcefieldCode": "cardType",  //表单model字段名称\n' +
  '        "resourcefieldName": "证件类型",   //表单字段 lable 名称\n' +
  '        "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度\n' +
  '        "isfieldRequired": true, //是否必填 required\n' +
  '        "resourcefieldBinding": "请选择证件类型",//必填出错 提示信息\n' +
  '        "resourcefieldAllowblankexp": null,//内容验证规则\n' +
  '        "resourcefieldVtype": "string",//验证字段的 内容类型\n' +
  '        "resourcefieldOtherconfigObject": {\n' +
  '          "secondXtype": "normal",//表单控件分支小类type,如input=>input-text,input-textere\n' +
  '          "min": undefined,//min\n' +
  '          "max": undefined,//max\n' +
  '          "dynamicUrl": null, //请求地址\n' +
  '          "dynamicQuery": null,//请求参数\n' +
  '          "clearable": \'false\'\n' +
  '        },\n' +
  '        "resourcefieldEmptytext": "请选择证件类型",//placeholder的值\n' +
  '        "isResourcefieldRemoved": false,//是否禁用\n' +
  '        "isResourcefieldReadonly": false,//是否只读\n' +
  '        "fieldWidth": 350,//表单元素部分宽度\n' +
  '        "fieldHeight": 32,//表单元素部分高度\n' +
  '        "resourcefieldStep": null,//step 步长\n' +
  '        "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）\n' +
  '        "resourcefieldFieldcls": null,//表单控件图标\n' +
  '        "isResourcefieldEditable": false,//是否可编辑\n' +
  '        "resourcefieldColspan": 1,//所占列数\n' +
  '        "items": [\n' +
  '          {"label": "身份证", "value": "carded"},\n' +
  '          {"label": "学生证", "value": "studentCard"},\n' +
  '          {"label": "驾驶证", "value": "driverCard"},\n' +
  '          {"label": "残疾证", "value": "disabilityCard"}\n' +
  '        ],//表单控件内容部分（checkbox，radio......）\n' +
  '        "resourcefieldGroupname": "base-info", //分组名称\n' +
  '        "isResourcefieldHidden": false,       //是否隐藏\n' +
  '        "resourcefieldBindingfnList": ["change-cardTypeFuncTest"],//事件名称集合\n' +
  '      },\n' +
  '      //证件号码 - input\n' +
  '      {\n' +
  '        "resourcefieldXtype": "input",    //表单类型\n' +
  '        "resourcefieldCode": "cardNum",  //表单model字段名称\n' +
  '        "resourcefieldName": "证件号码",   //表单字段 lable 名称\n' +
  '        "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度\n' +
  '        "isfieldRequired": true, //是否必填 required\n' +
  '        "resourcefieldBinding": "请输入证件号码",//必填出错 提示信息\n' +
  '        "resourcefieldAllowblankexp": "carded",//内容验证规则\n' +
  '        "resourcefieldVtype": "string",//验证字段的 内容类型\n' +
  '        "resourcefieldOtherconfigObject": {\n' +
  '          "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere\n' +
  '          "min": undefined,//min\n' +
  '          "max": undefined,//max\n' +
  '        },\n' +
  '        "resourcefieldEmptytext": "请输入证件号码",//placeholder的值\n' +
  '        "isResourcefieldRemoved": false,//是否禁用\n' +
  '        "isResourcefieldReadonly": false,//是否只读\n' +
  '        "fieldWidth": 350,//表单元素部分宽度\n' +
  '        "fieldHeight": 32,//表单元素部分高度\n' +
  '        "resourcefieldStep": null,//step 步长\n' +
  '        "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）\n' +
  '        "resourcefieldFieldcls": null,//表单控件图标\n' +
  '        "isResourcefieldEditable": false,//是否可编辑\n' +
  '        "resourcefieldColspan": 1,//所占列数\n' +
  '        "items": null,//表单控件内容部分（checkbox，radio......）\n' +
  '        "resourcefieldGroupname": "base-info", //分组名称\n' +
  '        "isResourcefieldHidden": false,       //是否隐藏\n' +
  '        "resourcefieldBindingfnList": [],//事件名称集合\n' +
  '      },\n' +
  '      //性别 - select\n' +
  '      {\n' +
  '        "resourcefieldXtype": "select",    //表单类型\n' +
  '        "resourcefieldCode": "sex",  //表单model字段名称\n' +
  '        "resourcefieldName": "性别",   //表单字段 lable 名称\n' +
  '        "isfieldRequired": true, //是否必填 required\n' +
  '        "resourcefieldBinding": "请选择性别",//必填出错 提示信息\n' +
  '        "resourcefieldAllowblankexp": null,//内容验证规则\n' +
  '        "resourcefieldVtype": "string",//验证字段的 内容类型\n' +
  '        "resourcefieldOtherconfigObject": {\n' +
  '          "secondXtype": "normal",//表单控件分支小类type,如input=>input-text,input-textere\n' +
  '          "dynamicUrl": null, //请求地址\n' +
  '          "dynamicQuery": "sex",//请求参数\n' +
  '          "min": undefined,//min\n' +
  '          "max": undefined,//max\n' +
  '        },\n' +
  '        "resourcefieldEmptytext": "请选择性别",//placeholder的值\n' +
  '        "isResourcefieldRemoved": false,//是否禁用\n' +
  '        "isResourcefieldReadonly": false,//是否只读\n' +
  '        "fieldWidth": 350,//表单元素部分宽度\n' +
  '        "fieldHeight": 32,//表单元素部分高度\n' +
  '        "resourcefieldStep": null,//step 步长\n' +
  '        "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）\n' +
  '        "resourcefieldFieldcls": null,//表单控件图标\n' +
  '        "isResourcefieldEditable": false,//是否可编辑\n' +
  '        "resourcefieldColspan": 1,//所占列数\n' +
  '        "items": [\n' +
  '          {\n' +
  '            "label": "男",\n' +
  '            "value": "0"\n' +
  '          },\n' +
  '          {\n' +
  '            "label": "女",\n' +
  '            "value": "1"\n' +
  '          }\n' +
  '        ],//表单控件内容部分（checkbox，radio......）\n' +
  '        "resourcefieldGroupname": "base-info", //分组名称\n' +
  '        "isResourcefieldHidden": false,       //是否隐藏\n' +
  '        "resourcefieldBindingfnList": ["visibleChange-sexFuncTest"],//事件名称集合\n' +
  '      },\n' +
  '      //出生日期 - datepicker\n' +
  '      {\n' +
  '        "resourcefieldXtype": "datepicker",    //表单类型\n' +
  '        "resourcefieldCode": "birthday",  //表单model字段名称\n' +
  '        "resourcefieldName": "出生日期",   //表单字段 lable 名称\n' +
  '        "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度\n' +
  '        "isfieldRequired": true, //是否必填 required\n' +
  '        "resourcefieldBinding": "请选择出生日期",//必填出错 提示信息\n' +
  '        "resourcefieldAllowblankexp": null,//内容验证规则\n' +
  '        "resourcefieldVtype": "date",//验证字段的 内容类型\n' +
  '        "resourcefieldOtherconfigObject": {\n' +
  '          "secondXtype": "datetime",//表单控件分支小类type,如input=>input-text,input-textere\n' +
  '          "min": undefined,//min\n' +
  '          "max": undefined,//max\n' +
  '          "format": "yyyy 年 MM 月 dd 日",\n' +
  '          "value-format": "yyyy-MM-dd",\n' +
  '        },\n' +
  '        "resourcefieldEmptytext": "请选择出生日期",//placeholder的值\n' +
  '        "isResourcefieldRemoved": false,//是否禁用\n' +
  '        "isResourcefieldReadonly": false,//是否只读\n' +
  '        "fieldWidth": 350,//表单元素部分宽度\n' +
  '        "fieldHeight": 32,//表单元素部分高度\n' +
  '        "resourcefieldStep": null,//step 步长\n' +
  '        "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）\n' +
  '        "resourcefieldFieldcls": null,//表单控件图标\n' +
  '        "isResourcefieldEditable": false,//是否可编辑\n' +
  '        "resourcefieldColspan": 1,//所占列数\n' +
  '        "items": null,//表单控件内容部分（checkbox，radio......）\n' +
  '        "resourcefieldGroupname": "base-info", //分组名称\n' +
  '        "isResourcefieldHidden": false,       //是否隐藏\n' +
  '        "resourcefieldBindingfnList": [],//事件名称集合\n' +
  '      },\n' +
  '      //籍贯 - input\n' +
  '      {\n' +
  '        "resourcefieldXtype": "input",    //表单类型\n' +
  '        "resourcefieldCode": "origin",  //表单model字段名称\n' +
  '        "resourcefieldName": "籍贯",   //表单字段 lable 名称\n' +
  '        "isfieldRequired": true, //是否必填 required\n' +
  '        "resourcefieldBinding": "请输入籍贯",//必填出错 提示信息\n' +
  '        "resourcefieldAllowblankexp": null,//内容验证规则\n' +
  '        "resourcefieldVtype": "string",//验证字段的 内容类型\n' +
  '        "resourcefieldOtherconfigObject": {\n' +
  '          "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere\n' +
  '          "min": undefined,//min\n' +
  '          "max": undefined,//max\n' +
  '        },\n' +
  '        "resourcefieldEmptytext": "请输入籍贯",//placeholder的值\n' +
  '        "isResourcefieldRemoved": false,//是否禁用\n' +
  '        "isResourcefieldReadonly": false,//是否只读\n' +
  '        "fieldWidth": 350,//表单元素部分宽度\n' +
  '        "fieldHeight": 32,//表单元素部分高度\n' +
  '        "resourcefieldStep": null,//step 步长\n' +
  '        "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）\n' +
  '        "resourcefieldFieldcls": null,//表单控件图标\n' +
  '        "isResourcefieldEditable": false,//是否可编辑\n' +
  '        "resourcefieldColspan": 1,//所占列数\n' +
  '        "items": null,//表单控件内容部分（checkbox，radio......）\n' +
  '        "resourcefieldGroupname": "base-info", //分组名称\n' +
  '        "isResourcefieldHidden": false,       //是否隐藏\n' +
  '        "resourcefieldBindingfnList": [],//事件名称集合\n' +
  '      },\n' +
  '      //民族 - input\n' +
  '      {\n' +
  '        "resourcefieldXtype": "input",    //表单类型\n' +
  '        "resourcefieldCode": "nation",  //表单model字段名称\n' +
  '        "resourcefieldName": "民族",   //表单字段 lable 名称\n' +
  '        "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度\n' +
  '        "isfieldRequired": true, //是否必填 required\n' +
  '        "resourcefieldBinding": "请输入民族",//必填出错 提示信息\n' +
  '        "resourcefieldAllowblankexp": null,//内容验证规则\n' +
  '        "resourcefieldVtype": "string",//验证字段的 内容类型\n' +
  '        "resourcefieldOtherconfigObject": {\n' +
  '          "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere\n' +
  '          "min": undefined,//min\n' +
  '          "max": undefined,//max\n' +
  '        },\n' +
  '        "resourcefieldEmptytext": "请输入民族",//placeholder的值\n' +
  '        "isResourcefieldRemoved": false,//是否禁用\n' +
  '        "isResourcefieldReadonly": false,//是否只读\n' +
  '        "fieldWidth": 350,//表单元素部分宽度\n' +
  '        "fieldHeight": 32,//表单元素部分高度\n' +
  '        "resourcefieldStep": null,//step 步长\n' +
  '        "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）\n' +
  '        "resourcefieldFieldcls": null,//表单控件图标\n' +
  '        "isResourcefieldEditable": false,//是否可编辑\n' +
  '        "resourcefieldColspan": 1,//所占列数\n' +
  '        "items": null,//表单控件内容部分（checkbox，radio......）\n' +
  '        "resourcefieldGroupname": "base-info", //分组名称\n' +
  '        "isResourcefieldHidden": false,       //是否隐藏\n' +
  '        "resourcefieldBindingfnList": [],//事件名称集合\n' +
  '      },\n' +
  '      //兴趣爱好 - checkbox\n' +
  '      {\n' +
  '        "resourcefieldXtype": "checkbox",    //表单类型\n' +
  '        "resourcefieldCode": "hobby",  //表单model字段名称\n' +
  '        "resourcefieldName": "兴趣爱好",   //表单字段 lable 名称\n' +
  '        "isfieldRequired": true, //是否必填 required\n' +
  '        "resourcefieldBinding": "请选择兴趣爱好",//必填出错 提示信息\n' +
  '        "resourcefieldAllowblankexp": null,//内容验证规则\n' +
  '        "resourcefieldVtype": "array",//验证字段的 内容类型\n' +
  '        "resourcefieldOtherconfigObject": {\n' +
  '          "secondXtype": "normal",//表单控件分支小类type,如input=>input-text,input-textere\n' +
  '          "min": 0,//min\n' +
  '          "max": 5,//max\n' +
  '        },\n' +
  '        "resourcefieldEmptytext": null,//placeholder的值\n' +
  '        "isResourcefieldRemoved": false,//是否禁用\n' +
  '        "isResourcefieldReadonly": false,//是否只读\n' +
  '        "fieldWidth": 700,//表单元素部分宽度\n' +
  '        "fieldHeight": 32,//表单元素部分高度\n' +
  '        "resourcefieldStep": null,//step 步长\n' +
  '        "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）\n' +
  '        "resourcefieldFieldcls": null,//表单控件图标\n' +
  '        "isResourcefieldEditable": false,//是否可编辑\n' +
  '        "resourcefieldColspan": 2,//所占列数\n' +
  '        "items": [\n' +
  '          {"label": "美食", "value": "meishi"},\n' +
  '          {"label": "交友", "value": "jiaoyou"},\n' +
  '          {"label": "音乐", "value": "yinyue"},\n' +
  '          {"label": "阅读", "value": "yuedu"},\n' +
  '          {"label": "手工", "value": "shougong", "disabled": true},\n' +
  '          {"label": "棋牌", "value": "qipai"},\n' +
  '          {"label": "上网", "value": "shangwang"},\n' +
  '          {"label": "收藏", "value": "shoucang"},\n' +
  '          {"label": "奢侈品", "value": "shechipin"},\n' +
  '          {"label": "旅游", "value": "lvyou"},\n' +
  '          {"label": "摄影", "value": "sheying"},\n' +
  '          {"label": "书法", "value": "shufa"},\n' +
  '          {"label": "绘图", "value": "huitu"},\n' +
  '          {"label": "舞蹈", "value": "wudao"},\n' +
  '          {"label": "其他", "value": "other"}\n' +
  '        ],//表单控件内容部分（checkbox，radio......）\n' +
  '        "resourcefieldGroupname": "base-info", //分组名称\n' +
  '        "isResourcefieldHidden": false,       //是否隐藏\n' +
  '        "resourcefieldBindingfnList": [],//事件名称集合\n' +
  '      },\n' +
  '    ],'
}

