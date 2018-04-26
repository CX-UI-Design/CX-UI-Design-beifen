import {errorMap} from "../error/error"
import $store from '@/store/index'
import {getQuery} from "../../utils/index"

const prodEnv_API = require('../../../config/prod.env').API_ROOT;

//eventTemp
export const eventTemp = {
  "resultCode": "200",
  "resultMsg": "模板自动表单请求数据操作成功",
  "resultData": {
    //v-model 绑定字段对象
    "modelData": {
      "upload": [
        {"fileName": "test-picture", "fileUrl": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"}
      ],
      "name": "Broccoli spring( 高仓雄 - gcx )",
      "mobile": "",//移动电话
      "cardType": "",//证件类型
      "cardNum": "",//证件号码
      "company": "",//工作单位
      "companyTel": "",//单位电话
      "companyAddress": "",//单位地址
      "email": "",//电子邮箱

    },
    //表单信息
    "info": {
      "funcinfoFormlabelwidth": 100,
      "funcinfoFormcols": 2    //表单所占列数
    },
    //表单控件循环信息
    "fields": [
      //group - (客户姓名/移动电话/证件类型/证件号码)
      {
        "resourcefieldXtype": "group",    //表单类型
        "resourcefieldCode": "group",  //表单model字段名称
        "resourcefieldName": "group",   //表单字段 lable 名称
        "isfieldRequired": false, //是否必填 required
        "resourcefieldBinding": null,//必填出错 提示信息
        "resourcefieldAllowblankexp": null,//内容验证规则
        "resourcefieldVtype": null,//验证字段的内容类型
        "resourcefieldOtherconfigObject": {
          "secondXtype": null,//表单控件分支小类type,如input=>input-text,input-textere
          "min": undefined,//min
          "max": undefined,//max
          "label-width": 120,//表单字段 lable 宽度
          "dynamicUrl": "",
        },
        "resourcefieldEmptytext": null,//placeholder的值
        "isResourcefieldRemoved": false,//是否禁用
        "isResourcefieldReadonly": false,//是否只读
        "fieldWidth": 350,//表单元素部分宽度
        "fieldHeight": null,//表单元素部分高度
        "resourcefieldStep": null,//step 步长
        "resourcefieldRowspan": 1,//row 值 - 所占 行数 （textarea / avatar / span ......）
        "resourcefieldFieldcls": null,//表单控件图标
        "isResourcefieldEditable": false,//是否可编辑
        "resourcefieldColspan": 1,//所占列数
        "items": null,//表单控件内容部分（checkbox，radio......）
        "resourcefieldGroupname": "xx", //分组名称
        "isResourcefieldHidden": false,      //是否隐藏
        "resourcefieldBindingfnList": [],
        "resourcefieldConfiginfo": 1,//分组框内部最大列数
        "children": [
          //客户姓名 - input
          {
            "resourcefieldXtype": "input",    //表单类型
            "resourcefieldCode": "name",  //表单model字段名称
            "resourcefieldName": "姓名",   //表单字段 lable 名称
            "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
            "isfieldRequired": false, //是否必填 required
            "resourcefieldBinding": "请输入姓名",//必填出错 提示信息
            "resourcefieldAllowblankexp": null,//内容验证规则
            "resourcefieldVtype": "string",//验证字段的 内容类型
            "resourcefieldOtherconfigObject": {
              "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
              "min": undefined,//min
              "max": 10,//max
            },
            "resourcefieldEmptytext": "请输入姓名",//placeholder的值
            "isResourcefieldRemoved": false,//是否禁用
            "isResourcefieldReadonly": false,//是否只读
            "fieldWidth": 350,//表单元素部分宽度
            "fieldHeight": 32,//表单元素部分高度
            "resourcefieldStep": null,//step 步长
            "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
            "resourcefieldFieldcls": null,//表单控件图标
            "isResourcefieldEditable": false,//是否可编辑
            "resourcefieldColspan": 1,//所占列数
            "items": null,//表单控件内容部分（checkbox，radio......）
            "resourcefieldGroupname": "base-info", //分组名称
            "isResourcefieldHidden": false,       //是否隐藏
            "resourcefieldBindingfnList": [],//事件名称集合
          },
          //移动电话 - input
          {
            "resourcefieldXtype": "input",    //表单类型
            "resourcefieldCode": "mobile",  //表单model字段名称
            "resourcefieldName": "移动电话",   //表单字段 lable 名称
            "isfieldRequired": false, //是否必填 required
            "resourcefieldBinding": "请输入移动电话",//必填出错 提示信息
            "resourcefieldAllowblankexp": null,//内容验证规则
            "resourcefieldVtype": "string",//验证字段的 内容类型
            "resourcefieldOtherconfigObject": {
              "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
              "min": undefined,//min
              "max": undefined,//max
            },
            "resourcefieldEmptytext": "请输入移动电话",//placeholder的值
            "isResourcefieldRemoved": false,//是否禁用
            "isResourcefieldReadonly": false,//是否只读
            "fieldWidth": 350,//表单元素部分宽度
            "fieldHeight": 32,//表单元素部分高度
            "resourcefieldStep": null,//step 步长
            "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
            "resourcefieldFieldcls": null,//表单控件图标
            "isResourcefieldEditable": false,//是否可编辑
            "resourcefieldColspan": 1,//所占列数
            "items": null,//表单控件内容部分（checkbox，radio......）
            "resourcefieldGroupname": "base-info", //分组名称
            "isResourcefieldHidden": false,       //是否隐藏
            "resourcefieldBindingfnList": [],//事件名称集合
          },
          //证件类型 - select
          {
            "resourcefieldXtype": "select",    //表单类型
            "resourcefieldCode": "cardType",  //表单model字段名称
            "resourcefieldName": "证件类型",   //表单字段 lable 名称
            "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
            "isfieldRequired": false, //是否必填 required
            "resourcefieldBinding": "请选择证件类型",//必填出错 提示信息
            "resourcefieldAllowblankexp": null,//内容验证规则
            "resourcefieldVtype": "string",//验证字段的 内容类型
            "resourcefieldOtherconfigObject": {
              "secondXtype": "normal",//表单控件分支小类type,如input=>input-text,input-textere
              "min": undefined,//min
              "max": undefined,//max
              "dynamicUrl": null, //请求地址
              "dynamicQuery": null,//请求参数
              "clearable": 'false'
            },
            "resourcefieldEmptytext": "请选择证件类型",//placeholder的值
            "isResourcefieldRemoved": false,//是否禁用
            "isResourcefieldReadonly": false,//是否只读
            "fieldWidth": 350,//表单元素部分宽度
            "fieldHeight": 32,//表单元素部分高度
            "resourcefieldStep": null,//step 步长
            "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
            "resourcefieldFieldcls": null,//表单控件图标
            "isResourcefieldEditable": false,//是否可编辑
            "resourcefieldColspan": 1,//所占列数
            "items": [
              {"label": "身份证", "value": "carded"},
              {"label": "学生证", "value": "studentCard"},
              {"label": "驾驶证", "value": "driverCard"},
              {"label": "残疾证", "value": "disabilityCard"}
            ],//表单控件内容部分（checkbox，radio......）
            "resourcefieldGroupname": "base-info", //分组名称
            "isResourcefieldHidden": false,       //是否隐藏
            "resourcefieldBindingfnList": [],//事件名称集合
          },
          //证件号码 - input
          {
            "resourcefieldXtype": "input",    //表单类型
            "resourcefieldCode": "cardNum",  //表单model字段名称
            "resourcefieldName": "证件号码",   //表单字段 lable 名称
            "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
            "isfieldRequired": false, //是否必填 required
            "resourcefieldBinding": "请输入证件号码",//必填出错 提示信息
            "resourcefieldAllowblankexp": null,//内容验证规则
            "resourcefieldVtype": "string",//验证字段的 内容类型
            "resourcefieldOtherconfigObject": {
              "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
              "min": undefined,//min
              "max": undefined,//max
            },
            "resourcefieldEmptytext": "请输入证件号码",//placeholder的值
            "isResourcefieldRemoved": false,//是否禁用
            "isResourcefieldReadonly": false,//是否只读
            "fieldWidth": 350,//表单元素部分宽度
            "fieldHeight": 32,//表单元素部分高度
            "resourcefieldStep": null,//step 步长
            "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
            "resourcefieldFieldcls": null,//表单控件图标
            "isResourcefieldEditable": false,//是否可编辑
            "resourcefieldColspan": 1,//所占列数
            "items": null,//表单控件内容部分（checkbox，radio......）
            "resourcefieldGroupname": "base-info", //分组名称
            "isResourcefieldHidden": false,       //是否隐藏
            "resourcefieldBindingfnList": ['change-eventTemp'],//事件名称集合
          },
        ]
      },
      //upload
      {
        "resourcefieldXtype": "upload",    //表单类型
        "resourcefieldCode": "upload",  //表单model字段名称
        "resourcefieldName": "",   //表单字段 lable 名称
        "isfieldRequired": false, //是否必填 required
        "resourcefieldBinding": null,//必填出错 提示信息
        "resourcefieldAllowblankexp": null,//内容验证规则
        "resourcefieldVtype": null,//验证字段的内容类型
        "resourcefieldOtherconfigObject": {
          "label-width": 100,
          "secondXtype": "picture-single",//表单控件分支小类type,如input=>input-text,input-textere
          "dynamicUrl": "http://192.168.1.31/api/fastdfs/fastdfs/uploadFile",
          "min": undefined,//min
          "max": undefined,//max
          "scale": 1,//表单元素（图片/上传控件图片），宽度高度比例（ 宽度 / 高度 ）
        },
        "resourcefieldEmptytext": null,//placeholder的值
        "isResourcefieldRemoved": false,//是否禁用
        "isResourcefieldReadonly": false,//是否只读
        "fieldWidth": 300,//表单元素部分宽度
        "fieldHeight": 188,//表单元素部分高度
        "resourcefieldStep": null,//step 步长
        "resourcefieldRowspan": 1,//row 值 - 所占 行数 （textarea / avatar / span ......）
        "resourcefieldFieldcls": null,//表单控件图标
        "isResourcefieldEditable": false,//是否可编辑
        "resourcefieldColspan": 1,//所占列数
        "items": null,//表单控件内容部分（checkbox，radio......）
        "resourcefieldGroupname": "before", //分组名称
        "isResourcefieldHidden": false,      //是否隐藏
        "resourcefieldBindingfnList": [],
      },
      /*==================== group 2 ==================== */
      //group2 - (省市区/居住形态/工作单位/单位电话/单位地址/电子邮箱/QQ号码/紧急联系人/紧急联系人电话)
      {
        "resourcefieldXtype": "group",    //表单类型
        "resourcefieldCode": "group3",  //表单model字段名称
        "resourcefieldName": "group",   //表单字段 lable 名称
        "label-width": 120,//表单字段 lable 宽度
        "isfieldRequired": false, //是否必填 required
        "resourcefieldBinding": null,//必填出错 提示信息
        "resourcefieldAllowblankexp": null,//内容验证规则
        "resourcefieldVtype": null,//验证字段的内容类型
        "resourcefieldOtherconfigObject": {
          "secondXtype": null,//表单控件分支小类type,如input=>input-text,input-textere
          "min": undefined,//min
          "max": undefined,//max
        },
        "resourcefieldEmptytext": null,//placeholder的值
        "isResourcefieldRemoved": false,//是否禁用
        "isResourcefieldReadonly": false,//是否只读
        "fieldWidth": 700,//表单元素部分宽度
        "fieldHeight": null,//表单元素部分高度
        "resourcefieldStep": null,//step 步长
        "resourcefieldRowspan": 1,//row 值 - 所占 行数 （textarea / avatar / span ......）
        "resourcefieldFieldcls": null,//表单控件图标
        "isResourcefieldEditable": false,//是否可编辑
        "resourcefieldColspan": 2,//所占列数
        "items": null,//表单控件内容部分（checkbox，radio......）
        "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
        "resourcefieldGroupname": "more-info", //分组名称
        "isResourcefieldHidden": false,      //是否隐藏
        "resourcefieldBindingfnList": [],
        "resourcefieldConfiginfo": 2,//分组框内部最大列数
        "children": [
          //填写更多 - separator
          {
            "resourcefieldXtype": "separator",    //表单类型
            "resourcefieldCode": null,  //表单model字段名称
            "resourcefieldName": "填写更多",   //表单字段 lable 名称
            "isfieldRequired": false, //是否必填 required
            "resourcefieldBinding": null,//必填出错 提示信息
            "resourcefieldAllowblankexp": null,//内容验证规则
            "resourcefieldVtype": null,//验证字段的内容类型
            "resourcefieldOtherconfigObject": {
              "secondXtype": "more",//表单控件分支小类type,如input=>input-text,input-textere
              "min": undefined,//min
              "max": undefined,//max
            },
            "resourcefieldEmptytext": null,//placeholder的值
            "isResourcefieldRemoved": false,//是否禁用
            "isResourcefieldReadonly": false,//是否只读
            "fieldWidth": 700,//表单元素部分宽度
            "fieldHeight": 32,//表单元素部分高度
            "resourcefieldStep": null,//step 步长
            "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
            "resourcefieldFieldcls": null,//表单控件图标
            "isResourcefieldEditable": false,//是否可编辑
            "resourcefieldColspan": 2,//所占列数
            "items": null,//表单控件内容部分（checkbox，radio......）
            "resourcefieldGroupname": "more-info", //分组名称
            "isResourcefieldHidden": false,       //是否隐藏
            "resourcefieldBindingfnList": ["click-groupSwitch"],//事件名称集合
          },
          //工作单位 - input
          {
            "resourcefieldXtype": "input",    //表单类型
            "resourcefieldCode": "company",  //表单model字段名称
            "resourcefieldName": "工作单位",   //表单字段 lable 名称
            "isfieldRequired": false, //是否必填 required
            "resourcefieldBinding": "请输入工作单位",//必填出错 提示信息
            "resourcefieldAllowblankexp": null,//内容验证规则
            "resourcefieldVtype": "string",//验证字段的 内容类型
            "resourcefieldOtherconfigObject": {
              "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
              "min": undefined,//min
              "max": undefined,//max
            },
            "resourcefieldEmptytext": "请输入工作单位",//placeholder的值
            "isResourcefieldRemoved": false,//是否禁用
            "isResourcefieldReadonly": false,//是否只读
            "fieldWidth": 350,//表单元素部分宽度
            "fieldHeight": 32,//表单元素部分高度
            "resourcefieldStep": null,//step 步长
            "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
            "resourcefieldFieldcls": null,//表单控件图标
            "isResourcefieldEditable": false,//是否可编辑
            "resourcefieldColspan": 1,//所占列数
            "items": null,//表单控件内容部分（checkbox，radio......）
            "resourcefieldGroupname": "more-info", //分组名称
            "isResourcefieldHidden": true,       //是否隐藏
            "resourcefieldBindingfnList": [],//事件名称集合
          },
          //单位电话 - input
          {
            "resourcefieldXtype": "input",    //表单类型
            "resourcefieldCode": "companyTel",  //表单model字段名称
            "resourcefieldName": "单位电话",   //表单字段 lable 名称
            "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
            "isfieldRequired": false, //是否必填 required
            "resourcefieldBinding": "请输入单位电话",//必填出错 提示信息
            "resourcefieldAllowblankexp": "tel",//内容验证规则
            "resourcefieldVtype": "string",//验证字段的 内容类型
            "resourcefieldOtherconfigObject": {
              "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
              "min": undefined,//min
              "max": undefined,//max
            },
            "resourcefieldEmptytext": "请输入单位电话",//placeholder的值
            "isResourcefieldRemoved": false,//是否禁用
            "isResourcefieldReadonly": false,//是否只读
            "fieldWidth": 350,//表单元素部分宽度
            "fieldHeight": 32,//表单元素部分高度
            "resourcefieldStep": null,//step 步长
            "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
            "resourcefieldFieldcls": null,//表单控件图标
            "isResourcefieldEditable": false,//是否可编辑
            "resourcefieldColspan": 1,//所占列数
            "items": null,//表单控件内容部分（checkbox，radio......）
            "resourcefieldGroupname": "more-info", //分组名称
            "isResourcefieldHidden": true,       //是否隐藏
            "resourcefieldBindingfnList": [],//事件名称集合
          },
          //单位地址 - input
          {
            "resourcefieldXtype": "input",    //表单类型
            "resourcefieldCode": "companyAddress",  //表单model字段名称
            "resourcefieldName": "单位地址",   //表单字段 lable 名称
            "isfieldRequired": false, //是否必填 required
            "resourcefieldBinding": "请输入单位地址",//必填出错 提示信息
            "resourcefieldAllowblankexp": null,//内容验证规则
            "resourcefieldVtype": "string",//验证字段的 内容类型
            "resourcefieldOtherconfigObject": {
              "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
              "min": undefined,//min
              "max": undefined,//max
            },
            "resourcefieldEmptytext": "请输入单位地址",//placeholder的值
            "isResourcefieldRemoved": false,//是否禁用
            "isResourcefieldReadonly": false,//是否只读
            "fieldWidth": 700,//表单元素部分宽度
            "fieldHeight": 32,//表单元素部分高度
            "resourcefieldStep": null,//step 步长
            "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
            "resourcefieldFieldcls": null,//表单控件图标
            "isResourcefieldEditable": false,//是否可编辑
            "resourcefieldColspan": 2,//所占列数
            "items": null,//表单控件内容部分（checkbox，radio......）
            "resourcefieldGroupname": "more-info", //分组名称
            "isResourcefieldHidden": true,       //是否隐藏
            "resourcefieldBindingfnList": [],//事件名称集合
          },
          //电子邮箱 - input
          {
            "resourcefieldXtype": "input",    //表单类型
            "resourcefieldCode": "email",  //表单model字段名称
            "resourcefieldName": "电子邮箱",   //表单字段 lable 名称
            "isfieldRequired": false, //是否必填 required
            "resourcefieldBinding": "请输入电子邮箱",//必填出错 提示信息
            "resourcefieldAllowblankexp": "email",//内容验证规则
            "resourcefieldVtype": "string",//验证字段的 内容类型
            "resourcefieldOtherconfigObject": {
              "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
              "min": undefined,//min
              "max": undefined,//max
            },
            "resourcefieldEmptytext": "请输入电子邮箱",//placeholder的值
            "isResourcefieldRemoved": false,//是否禁用
            "isResourcefieldReadonly": false,//是否只读
            "fieldWidth": 350,//表单元素部分宽度
            "fieldHeight": 32,//表单元素部分高度
            "resourcefieldStep": null,//step 步长
            "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
            "resourcefieldFieldcls": null,//表单控件图标
            "isResourcefieldEditable": false,//是否可编辑
            "resourcefieldColspan": 1,//所占列数
            "items": null,//表单控件内容部分（checkbox，radio......）
            "resourcefieldGroupname": "more-info", //分组名称
            "isResourcefieldHidden": true,       //是否隐藏
            "resourcefieldBindingfnList": [],//事件名称集合
          },
        ]
      }
    ],
  }
}


export default {
  autoform: (config) => {
    const api = prodEnv_API.substring(1, prodEnv_API.length - 1);//前缀域名地址
    const u = config.url.indexOf(api + '/mock/autoForm/event') >= 0;
    const query = getQuery(config.url, "id"); //query
    const requestFormId = $store.state.Form.store.requestFormId;//当前自定义表单请求的ID值

    if (u && requestFormId === "formEventTemp") {
      return eventTemp;
    }
    else {
      return errorMap.error;
    }
  },
}
