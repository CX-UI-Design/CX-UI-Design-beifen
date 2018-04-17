import {param2Obj} from "@/utils"
import {errorMap} from "@/utils/mock/error/error"

const formMap = {
  "autoform": {
    "resultCode": "200",
    "resultMsg": "操作成功。",
    "resultData": {
      //v-model 绑定字段对象
      "modelData": {
        "parentNode":"新世纪物业-浙江-天泓山庄-香山苑",
        "houseName":"",
        "houseShortName":"",
        "houseNumber":"",
        "remark":"",
      },
      //表单信息
      "info": {
        "funcinfoFormcols": 2    //表单所占列数
      },
      //表单控件循环信息
      "fields": [
        /*==================== group 1 ==================== */
        //separator
        {
          "resourcefieldXtype": "separator",    //表单类型
          "resourcefieldNameEn": null,  //表单model字段名称
          "resourcefieldName": "基本信息",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 0,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": null,//验证字段的内容类型
          "resourcefieldOtherconfig": "simple",//表单控件分支小类type,如input=>input-text,input-textarea
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 700,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": "gailan",//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": ["click-groupSwitch"]//事件名称集合
        },
        //父节点
        {
          "resourcefieldXtype": "span",    //表单类型
          "resourcefieldNameEn": "parentNode",  //表单model字段名称
          "resourcefieldName": "父节点",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": null,//验证字段的 内容类型
          "resourcefieldOtherconfig": null,//表单控件分支小类type,如input=>input-text,input-textarea
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 500,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": 1,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "before", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
        },
        //楼栋名称 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldNameEn": "houseName",  //表单model字段名称
          "resourcefieldName": "楼栋名称",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请输入楼栋名称",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": null,//验证字段的 内容类型
          "resourcefieldOtherconfig": null,//表单控件分支小类type,如input=>input-text,input-textarea
          "resourcefieldEmptytext": "请输入楼栋名称",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 200,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
        },
        //楼栋简称 - input
        {
         "resourcefieldXtype": "input",    //表单类型
          "resourcefieldNameEn": "houseShortName",  //表单model字段名称
          "resourcefieldName": "楼栋简称",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请输入楼栋名称",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": null,//验证字段的 内容类型
          "resourcefieldOtherconfig": null,//表单控件分支小类type,如input=>input-text,input-textarea
          "resourcefieldEmptytext": "请输入楼栋名称",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 200,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 1,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
        },
        //楼栋编号 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldNameEn": "houseNumber",  //表单model字段名称
          "resourcefieldName": "楼栋编号",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 100,//表单字段 lable 宽度
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请输入楼栋名称",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": null,//验证字段的 内容类型
          "resourcefieldOtherconfig": null,//表单控件分支小类type,如input=>input-text,input-textarea
          "resourcefieldEmptytext": "请输入楼栋名称",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 200,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 1,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
        },
        //remark - textarea
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldNameEn": "remark",  //表单model字段名称
          "resourcefieldName": "备注",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请输入备注信息",//必填出错 提示信息
          "resourcefieldAllowblankexp": "carded",//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": "textarea",//表单控件分支小类type,如input=>input-text,input-textarea
          "resourcefieldEmptytext": "请输入备注信息",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 525,//表单元素部分宽度
          "fieldHeight": "auto",//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": 5,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },

      ]
    }
  },
}

export default {
  autoform: () => {
    return formMap.autoform
  },
}
