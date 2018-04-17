import {param2Obj} from "@/utils"
import {errorMap} from "@/utils/mock/error/error"

const formMap = {
  //新增收房
  "autoFormTemplate": {
    "resultCode": "200",
    "resultMsg": "模板自动表单请求数据操作成功",
    "resultData": {
      //v-model 绑定字段对象
      "modelData": {
        "houseName": "天泓山庄-香山苑-1幢-1单元-102",//房产名称
        "ownerId": "滨江天泓山庄有限公司",//开发商
        "newOwner": "刘秀峰",//新业主
        "certificate": "360823199001010456",//证件号码
        "mobile": "13738102644",//移动电话
        "isMainHouse": "",//是否主房产
        "salesDate": "",//售楼日期
        "takeDate": "",//收房日期
        "stayDate": "",//入住日期
        "remarks": "",//备注
      },
      //表单信息
      "info": {
        "funcinfoFormlabelwidth": 150,
        "funcinfoFormcols": 2    //表单所占列数
      },
      //表单控件循环信息
      "fields": [
        //separator
        {
          "resourcefieldXtype": "separator",    //表单类型
          "resourcefieldNameEn": "info",  //表单model字段名称
          "resourcefieldName": "新增收房",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": null,//验证字段的内容类型
          "resourcefieldOtherconfig": {
            "secondXtype": "simple",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 700,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": 1,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "before", //分组名称
          "isResourcefieldHidden": false,      //是否隐藏
          "resourcefieldBindingfnList": []
        },
        //房产名称
        {
          "resourcefieldXtype": "text",    //表单类型
          "resourcefieldNameEn": "houseName",  //表单model字段名称
          "resourcefieldName": "房产名称",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": null,//验证字段的内容类型
          "resourcefieldOtherconfig": {
            "secondXtype": "span",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 700,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": 1,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "before", //分组名称
          "isResourcefieldHidden": false,      //是否隐藏
          "resourcefieldBindingfnList": []
        },
        //开发商
        {
          "resourcefieldXtype": "text",    //表单类型
          "resourcefieldNameEn": "ownerId",  //表单model字段名称
          "resourcefieldName": "开发商",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": null,//验证字段的内容类型
          "resourcefieldOtherconfig": {
            "secondXtype": "span",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 700,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": 1,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "before", //分组名称
          "isResourcefieldHidden": false,      //是否隐藏
          "resourcefieldBindingfnList": []
        },
        //新业主 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldNameEn": "newOwner",  //表单model字段名称
          "resourcefieldName": "新业主",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请输入新业主姓名",//必填出错 提示信息
          "resourcefieldAllowblankexp": "NumEn",//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": "请输入新业主姓名",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
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
        //新增 - select
        {
          "resourcefieldXtype": "select",    //表单类型
          "resourcefieldNameEn": null,  //表单model字段名称
          "resourcefieldName": "",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": {
            "label-width": 10,
          },
          "resourcefieldEmptytext": "新增",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 110,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 1,//所占列数
          "items": [
            {"label": "个人", "value": "personal"},
            {"label": "企业", "value": "company"}
          ],//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        //是否主房产- checkbox
        {
          "resourcefieldXtype": "radio",    //表单类型
          "resourcefieldNameEn": "isMainHouse",  //表单model字段名称
          "resourcefieldName": "是否主房产",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "array",//验证字段的 内容类型
          "resourcefieldOtherconfig": {
            "secondXtype": "normal",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 700,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": 0,//min
          "resourcefieldMaxvalue": 1,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": [
            {"label": "是", "value": "true"},
            {"label": "否", "value": "false"},
          ],//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
        },
        //证件号码 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldNameEn": "certificate",  //表单model字段名称
          "resourcefieldName": "证件号码",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": "carded",//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": "请输入证件号码",//placeholder的值
          "isResourcefieldRemoved": true,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
        },
        //移动电话 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldNameEn": "mobile",  //表单model字段名称
          "resourcefieldName": "移动电话",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请输入移动电话",//必填出错 提示信息
          "resourcefieldAllowblankexp": "mobile",//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": "请输入移动电话",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
        },
        //售楼日期 - datepicker
        {
          "resourcefieldXtype": "datepicker",    //表单类型
          "resourcefieldNameEn": "salesDate",  //表单model字段名称
          "resourcefieldName": "售楼日期",   //表单字段 lable 名称
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请选择售楼日期",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "date",//验证字段的 内容类型
          "resourcefieldOtherconfig": {
            "secondXtype": "datetime",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
        },
        //收房日期 - datepicker
        {
          "resourcefieldXtype": "datepicker",    //表单类型
          "resourcefieldNameEn": "takeDate",  //表单model字段名称
          "resourcefieldName": "收房日期",   //表单字段 lable 名称
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请选择收房日期",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "date",//验证字段的 内容类型
          "resourcefieldOtherconfig": {
            "secondXtype": "datetime",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
        },
        //入住日期 - datepicker
        {
          "resourcefieldXtype": "datepicker",    //表单类型
          "resourcefieldNameEn": "stayDate",  //表单model字段名称
          "resourcefieldName": "入住日期",   //表单字段 lable 名称
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请选择入住日期",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "date",//验证字段的 内容类型
          "resourcefieldOtherconfig": {
            "secondXtype": "datetime",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
        },
        //备注 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldNameEn": "remarks",  //表单model字段名称
          "resourcefieldName": "备注",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请输入备注信息",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": {
            "secondXtype": "textarea",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": "",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 600,//表单元素部分宽度
          "fieldHeight": 64,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": 2,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
        }
      ]
    }
  },
}

export default {
  autoform: () => {
    return formMap.autoFormTemplate
  },
}


