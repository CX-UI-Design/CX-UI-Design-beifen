//form-template customer-information 自动表单-选人控件示例 本地数据
const rolegroup = {
  //v-model 绑定字段对象
  "modelData": {
    "roleFnBtn": [
      {
        "jeCoreMenuId": "2",
        "functionVos": [
          {"jeCoreFuncinfoId": "2-1", "buttonIds": []},
          {"jeCoreFuncinfoId": "2-2", "buttonIds": []}
        ]
      },
      {
        "jeCoreMenuId": "1",
        "functionVos": [
          {"jeCoreFuncinfoId": "1-1", "buttonIds": ["search1", "edit1"]},
          {"jeCoreFuncinfoId": "1-2", "buttonIds": []}
        ]
      },
    ],//功能按钮权限 - checkbox
    // "roleFnBtn":[],
  },
  //表单信息
  "info": {
    "funcinfoFormlabelwidth": 150,
    "funcinfoFormcols": 2    //表单所占列数
  },
  //表单控件循环信息
  "fields": [
    //功能按钮权限 - checkbox
    {
      "resourcefieldXtype": "checkbox",    //表单类型
      "resourcefieldCode": "roleFnBtn",  //表单model字段名称
      "resourcefieldName": "功能按钮权限",   //表单字段 lable 名称
      "isfieldRequired": false, //是否必填 required
      "resourcefieldBinding": "请选择功能按钮权限",//必填出错 提示信息
      "resourcefieldAllowblankexp": 'roleFnBtn',//内容验证规则
      "resourcefieldVtype": 'array',//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": "roleFnBtn",//表单控件分支小类type,如input=>input-text,input-textere
      },
      "resourcefieldEmptytext": "请选择功能按钮权限",//placeholder的值
      "isResourcefieldRemoved": false,//是否禁用
      "isResourcefieldReadonly": false,//是否只读
      "fieldWidth": 700,//表单元素部分宽度
      "fieldHeight": null,//表单元素部分高度
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
  ],
}

export default rolegroup;
