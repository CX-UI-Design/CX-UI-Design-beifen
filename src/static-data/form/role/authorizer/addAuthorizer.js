//form-tem addAuthorizer 自动表单示例 - 新增授权人-穿梭框表单组件 本地数据
const addAuthorizer = {
  //v-model 绑定字段对象
  "modelData": {
    "addAuthorizer": [1, 2, 3]
  },
  //表单信息
  "info": {
    "funcinfoFormlabelwidth": 100,
    "funcinfoFormcols": 2    //表单所占列数
  },
  //表单控件循环信息
  "fields": [
    //新增授权人 - transfer
    {
      "resourcefieldXtype": "transfer",    //表单类型
      "resourcefieldCode": "addAuthorizer",  //表单model字段名称
      "resourcefieldName": "授权人",   //表单字段 lable 名称
      "isfieldRequired": false, //是否必填 required
      "resourcefieldBinding": "请选择授权人",//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": 'array',//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": "authorizer",//表单控件分支小类type,如input=>input-text,input-textere
        "min": undefined,//min
        "max": undefined,//max
      },
      "resourcefieldEmptytext": "请选择授权人",//placeholder的值
      "isResourcefieldRemoved": false,//是否禁用
      "isResourcefieldReadonly": false,//是否只读
      "fieldWidth": 600,//表单元素部分宽度
      "fieldHeight": null,//表单元素部分高度
      "min": undefined,//min
      "max": undefined,//max
      "resourcefieldStep": null,//step 步长
      "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
      "resourcefieldFieldcls": null,//表单控件图标
      "isResourcefieldEditable": false,//是否可编辑
      "resourcefieldColspan": 2,//所占列数
      "items": null,//表单控件内容部分（checkbox，radio......）
      "resourcefieldGroupname": "group-addHolder", //分组名称
      "isResourcefieldHidden": false,       //是否隐藏
      "resourcefieldBindingfnList": [],//事件名称集合
    },
  ]
}

export default addAuthorizer;
