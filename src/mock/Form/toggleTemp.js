import {errorMap} from "../error/error"
import $store from '@/store/index'
import {getQuery} from "../../utils/index"

const prodEnv_API = require('../../../config/prod.env').API_ROOT;


//changed form1
export const changedFormTemplate1 = {
  "resultCode": "200",
  "resultMsg": "模板自动表单请求数据操作成功",
  "resultData": {
    //v-model 绑定字段对象的属性及值
    "modelData": {
      "name": "Broccoli spring( 高仓雄 - gcx )",
      "mobile": "18768183457",//移动电话
      "cardType": "",//证件类型
      "cardNum": "330106199110224000",//证件号码
      "sex": "",//性别
      "birthday": "",//出生日期
      "origin": "",//籍贯
      "nation": "",//民族
      "hobby": [],//兴趣爱好
    },
    //表单信息
    "info": {
      "funcinfoFormlabelwidth": 100,
      "funcinfoFormcols": 2    //表单所占列数
    },
    //表单控件循环信息
    "fields": [
      //客户姓名 - input
      {
        "resourcefieldXtype": "input",    //表单类型
        "resourcefieldCode": "name",  //表单model字段名称
        "resourcefieldName": "姓名",   //表单字段 lable 名称
        "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
        "isfieldRequired": true, //是否必填 required
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
        "resourcefieldFieldcls": "add",//表单控件图标
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
        "isfieldRequired": true, //是否必填 required
        "resourcefieldBinding": "请输入移动电话",//必填出错 提示信息
        "resourcefieldAllowblankexp": "mobile",//内容验证规则
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
          "clearable": false,
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
        "isfieldRequired": true, //是否必填 required
        "resourcefieldBinding": "请输入证件号码",//必填出错 提示信息
        "resourcefieldAllowblankexp": "carded",//内容验证规则
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
        "resourcefieldBindingfnList": [],//事件名称集合
      },
      //性别 - select
      {
        "resourcefieldXtype": "select",    //表单类型
        "resourcefieldCode": "sex",  //表单model字段名称
        "resourcefieldName": "性别",   //表单字段 lable 名称
        "isfieldRequired": true, //是否必填 required
        "resourcefieldBinding": "请选择性别",//必填出错 提示信息
        "resourcefieldAllowblankexp": null,//内容验证规则
        "resourcefieldVtype": "string",//验证字段的 内容类型
        "resourcefieldOtherconfigObject": {
          "secondXtype": "normal",//表单控件分支小类type,如input=>input-text,input-textere
          "dynamicUrl": null, //请求地址
          "dynamicQuery": "sex",//请求参数
          "min": undefined,//min
          "max": undefined,//max
        },
        "resourcefieldEmptytext": "请选择性别",//placeholder的值
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
          {
            "label": "男",
            "value": "0"
          },
          {
            "label": "女",
            "value": "1"
          }
        ],//表单控件内容部分（checkbox，radio......）
        "resourcefieldGroupname": "base-info", //分组名称
        "isResourcefieldHidden": false,       //是否隐藏
        "resourcefieldBindingfnList": [],//事件名称集合
      },
      //出生日期 - datepicker
      {
        "resourcefieldXtype": "datepicker",    //表单类型
        "resourcefieldCode": "birthday",  //表单model字段名称
        "resourcefieldName": "出生日期",   //表单字段 lable 名称
        "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
        "isfieldRequired": true, //是否必填 required
        "resourcefieldBinding": "请选择出生日期",//必填出错 提示信息
        "resourcefieldAllowblankexp": null,//内容验证规则
        "resourcefieldVtype": "date",//验证字段的 内容类型
        "resourcefieldOtherconfigObject": {
          "secondXtype": "datetime",//表单控件分支小类type,如input=>input-text,input-textere
          "min": undefined,//min
          "max": undefined,//max
          "format": "yyyy 年 MM 月 dd 日",
          "value-format": "yyyy-MM-dd",
        },
        "resourcefieldEmptytext": "请选择出生日期",//placeholder的值
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
      //籍贯 - input
      {
        "resourcefieldXtype": "input",    //表单类型
        "resourcefieldCode": "origin",  //表单model字段名称
        "resourcefieldName": "籍贯",   //表单字段 lable 名称
        "isfieldRequired": true, //是否必填 required
        "resourcefieldBinding": "请输入籍贯",//必填出错 提示信息
        "resourcefieldAllowblankexp": null,//内容验证规则
        "resourcefieldVtype": "string",//验证字段的 内容类型
        "resourcefieldOtherconfigObject": {
          "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
          "min": undefined,//min
          "max": undefined,//max
        },
        "resourcefieldEmptytext": "请输入籍贯",//placeholder的值
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
      //民族 - input
      {
        "resourcefieldXtype": "input",    //表单类型
        "resourcefieldCode": "nation",  //表单model字段名称
        "resourcefieldName": "民族",   //表单字段 lable 名称
        "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
        "isfieldRequired": false, //是否必填 required
        "resourcefieldBinding": "请输入民族",//必填出错 提示信息
        "resourcefieldAllowblankexp": null,//内容验证规则
        "resourcefieldVtype": "string",//验证字段的 内容类型
        "resourcefieldOtherconfigObject": {
          "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
          "min": undefined,//min
          "max": undefined,//max
        },
        "resourcefieldEmptytext": "请输入民族",//placeholder的值
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
      //兴趣爱好 - checkbox
      {
        "resourcefieldXtype": "checkbox",    //表单类型
        "resourcefieldCode": "hobby",  //表单model字段名称
        "resourcefieldName": "兴趣爱好",   //表单字段 lable 名称
        "isfieldRequired": false, //是否必填 required
        "resourcefieldBinding": "请选择兴趣爱好",//必填出错 提示信息
        "resourcefieldAllowblankexp": null,//内容验证规则
        "resourcefieldVtype": "array",//验证字段的 内容类型
        "resourcefieldOtherconfigObject": {
          "secondXtype": "normal",//表单控件分支小类type,如input=>input-text,input-textere
          "min": 0,//min
          "max": 5,//max
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
        "items": [
          {"label": "美食", "value": "meishi"},
          {"label": "交友", "value": "jiaoyou"},
          {"label": "音乐", "value": "yinyue"},
          {"label": "阅读", "value": "yuedu"},
          {"label": "手工", "value": "shougong", "disabled": true},
          {"label": "棋牌", "value": "qipai"},
          {"label": "上网", "value": "shangwang"},
          {"label": "收藏", "value": "shoucang"},
          {"label": "奢侈品", "value": "shechipin"},
          {"label": "旅游", "value": "lvyou"},
          {"label": "摄影", "value": "sheying"},
          {"label": "书法", "value": "shufa"},
          {"label": "绘图", "value": "huitu"},
          {"label": "舞蹈", "value": "wudao"},
          {"label": "其他", "value": "other"}
        ],//表单控件内容部分（checkbox，radio......）
        "resourcefieldGroupname": "base-info", //分组名称
        "isResourcefieldHidden": false,       //是否隐藏
        "resourcefieldBindingfnList": [],//事件名称集合
      },
    ],
  }
}
//changed form2
export const changedFormTemplate2 = {
  "resultCode": "200",
  "resultMsg": "模板自动表单请求数据操作成功",
  "resultData": {
    //v-model 绑定字段对象的属性及值
    "modelData": {
      "name": "Broccoli spring( 高仓雄 - gcx )",
      "mobile": "18768183457",//移动电话
      "cardType": "",//证件类型
      "cardNum": "330106199110224000",//证件号码
      "sex": "",//性别
      "birthday": "",//出生日期
      "origin": "",//籍贯
      "nation": "",//民族
      "isMarried": false,//是否结婚
      "isPregnant": false,//是否有孕
    },
    //表单信息
    "info": {
      "funcinfoFormlabelwidth": 100,
      "funcinfoFormcols": 2    //表单所占列数
    },
    //表单控件循环信息
    "fields": [
      //客户姓名 - input
      {
        "resourcefieldXtype": "input",    //表单类型
        "resourcefieldCode": "name",  //表单model字段名称
        "resourcefieldName": "姓名",   //表单字段 lable 名称
        "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
        "isfieldRequired": true, //是否必填 required
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
        "resourcefieldFieldcls": "add",//表单控件图标
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
        "isfieldRequired": true, //是否必填 required
        "resourcefieldBinding": "请输入移动电话",//必填出错 提示信息
        "resourcefieldAllowblankexp": "mobile",//内容验证规则
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
          "clearable": false,
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
        "isfieldRequired": true, //是否必填 required
        "resourcefieldBinding": "请输入证件号码",//必填出错 提示信息
        "resourcefieldAllowblankexp": "carded",//内容验证规则
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
        "resourcefieldBindingfnList": [],//事件名称集合
      },
      //性别 - select
      {
        "resourcefieldXtype": "select",    //表单类型
        "resourcefieldCode": "sex",  //表单model字段名称
        "resourcefieldName": "性别",   //表单字段 lable 名称
        "isfieldRequired": true, //是否必填 required
        "resourcefieldBinding": "请选择性别",//必填出错 提示信息
        "resourcefieldAllowblankexp": null,//内容验证规则
        "resourcefieldVtype": "string",//验证字段的 内容类型
        "resourcefieldOtherconfigObject": {
          "secondXtype": "normal",//表单控件分支小类type,如input=>input-text,input-textere
          "dynamicUrl": null, //请求地址
          "dynamicQuery": "sex",//请求参数
          "min": undefined,//min
          "max": undefined,//max
        },
        "resourcefieldEmptytext": "请选择性别",//placeholder的值
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
          {
            "label": "男",
            "value": "0"
          },
          {
            "label": "女",
            "value": "1"
          }
        ],//表单控件内容部分（checkbox，radio......）
        "resourcefieldGroupname": "base-info", //分组名称
        "isResourcefieldHidden": false,       //是否隐藏
        "resourcefieldBindingfnList": [],//事件名称集合
      },
      //出生日期 - datepicker
      {
        "resourcefieldXtype": "datepicker",    //表单类型
        "resourcefieldCode": "birthday",  //表单model字段名称
        "resourcefieldName": "出生日期",   //表单字段 lable 名称
        "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
        "isfieldRequired": true, //是否必填 required
        "resourcefieldBinding": "请选择出生日期",//必填出错 提示信息
        "resourcefieldAllowblankexp": null,//内容验证规则
        "resourcefieldVtype": "date",//验证字段的 内容类型
        "resourcefieldOtherconfigObject": {
          "secondXtype": "datetime",//表单控件分支小类type,如input=>input-text,input-textere
          "min": undefined,//min
          "max": undefined,//max
          "format": "yyyy 年 MM 月 dd 日",
          "value-format": "yyyy-MM-dd",
        },
        "resourcefieldEmptytext": "请选择出生日期",//placeholder的值
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
      //籍贯 - input
      {
        "resourcefieldXtype": "input",    //表单类型
        "resourcefieldCode": "origin",  //表单model字段名称
        "resourcefieldName": "籍贯",   //表单字段 lable 名称
        "isfieldRequired": true, //是否必填 required
        "resourcefieldBinding": "请输入籍贯",//必填出错 提示信息
        "resourcefieldAllowblankexp": null,//内容验证规则
        "resourcefieldVtype": "string",//验证字段的 内容类型
        "resourcefieldOtherconfigObject": {
          "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
          "min": undefined,//min
          "max": undefined,//max
        },
        "resourcefieldEmptytext": "请输入籍贯",//placeholder的值
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
      //民族 - input
      {
        "resourcefieldXtype": "input",    //表单类型
        "resourcefieldCode": "nation",  //表单model字段名称
        "resourcefieldName": "民族",   //表单字段 lable 名称
        "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
        "isfieldRequired": false, //是否必填 required
        "resourcefieldBinding": "请输入民族",//必填出错 提示信息
        "resourcefieldAllowblankexp": null,//内容验证规则
        "resourcefieldVtype": "string",//验证字段的 内容类型
        "resourcefieldOtherconfigObject": {
          "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
          "min": undefined,//min
          "max": undefined,//max
        },
        "resourcefieldEmptytext": "请输入民族",//placeholder的值
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
      //是否结婚 - switch
      {
        "resourcefieldXtype": "switch",    //表单类型
        "resourcefieldCode": "isMarried",  //表单model字段名称
        "resourcefieldName": "是否结婚",   //表单字段 lable 名称
        "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
        "isfieldRequired": false, //是否必填 required
        "resourcefieldBinding": "是否结婚",//必填出错 提示信息
        "resourcefieldAllowblankexp": null,//内容验证规则
        "resourcefieldVtype": "boolean",//验证字段的内容类型
        "resourcefieldOtherconfigObject": {
          "secondXtype": null,//表单控件分支小类type,如input=>input-text,input-textere
          "min": undefined,//min
          "max": undefined,//max
        },
        "resourcefieldEmptytext": null,//placeholder的值
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
        "isResourcefieldHidden": false,       //是否隐藏
        "resourcefieldBindingfnList": [],//事件名称集合
      },
      //是否有孕 - switch
      {
        "resourcefieldXtype": "switch",    //表单类型
        "resourcefieldCode": "isPregnant",  //表单model字段名称
        "resourcefieldName": "是否有孕",   //表单字段 lable 名称
        "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
        "isfieldRequired": false, //是否必填 required
        "resourcefieldBinding": "是否有孕",//必填出错 提示信息
        "resourcefieldAllowblankexp": null,//内容验证规则
        "resourcefieldVtype": "boolean",//验证字段的内容类型
        "resourcefieldOtherconfigObject": {
          "secondXtype": null,//表单控件分支小类type,如input=>input-text,input-textere
          "min": undefined,//min
          "max": undefined,//max
        },
        "resourcefieldEmptytext": null,//placeholder的值
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
        "isResourcefieldHidden": false,       //是否隐藏
        "resourcefieldBindingfnList": [],//事件名称集合
      },
    ],
  }
}


export default {
  autoform: (config) => {
    const api = prodEnv_API.substring(1, prodEnv_API.length - 1);//前缀域名地址
    const u = config.url.indexOf(api + '/mock/autoForm/changed') >= 0;
    const query = getQuery(config.url, "id"); //query
    const requestFormId = $store.state.Form.store.requestFormId;//当前自定义表单请求的ID值

    if (u && query === "man") {
      return changedFormTemplate1;
    }
    else if (u && query === "woman") {
      return changedFormTemplate2;
    }
    else {
      return errorMap.error;
    }
  },
}
