//自动表单示例 test2
const test2 = {
  //v-model 绑定字段对象
  "modelData": {
    "customerInfo": null,
    "roleOrganization": 3,//所属部门 - select -（ 模拟下拉，内含树状数据 ）
    "rolegroup": 97,//角色组 - select
    "roleEmployee": [],//员工角色 - select
    //功能按钮权限 - checkbox
    "roleFnBtn": [
      {
        "jeCoreMenuId": "1",
        "functionVos": [
          {"jeCoreFuncinfoId": "1-1", "buttonIds": ["search1", "edit1"]},
          {"jeCoreFuncinfoId": "1-2", "buttonIds": []}
        ]
      },
      {
        "jeCoreMenuId": "2",
        "functionVos": [
          {"jeCoreFuncinfoId": "2-1", "buttonIds": []},
          {"jeCoreFuncinfoId": "2-2", "buttonIds": []}
        ]
      }
    ],
  },
  //表单信息
  "info": {
    "funcinfoFormlabelwidth": 150,
    "funcinfoFormcols": 1,    //表单所占列数
    "width-supply": 100,//宽度补足值
  },
  //表单控件循环信息
  "fields": [
    //select -（ 输入客户/企业姓名，联动客户/企业相关信息 ）
    {
      "resourcefieldXtype": "select",    //表单类型
      "resourcefieldCode": "customerInfo",  //表单model字段名称
      "resourcefieldName": "",   //表单字段 lable 名称
      "isfieldRequired": true, //是否必填 required
      "resourcefieldBinding": "请输入车主姓名",//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": 'object',//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": "customer-info-linkage",//表单控件分支小类type,如input=>input-text,input-textere
        "thirdXtype": "vehicle",//控件-业务划分 三级分类
        "label-width": 0,
        "dynamicUrl": "owner/customer/list-customer-search",
        "min": undefined,//min
        "max": undefined,//max
      },
      "resourcefieldEmptytext": "请输入车主姓名",//placeholder的值
      "isResourcefieldRemoved": false,//是否禁用
      "isResourcefieldReadonly": false,//是否只读
      "fieldWidth": 350,//表单元素部分宽度
      "fieldHeight": null,//表单元素部分高度
      "min": undefined,//min
      "max": undefined,//max
      "resourcefieldStep": null,//step 步长
      "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
      "resourcefieldFieldcls": null,//表单控件图标
      "isResourcefieldEditable": false,//是否可编辑
      "resourcefieldColspan": 1,//所占列数
      "items": null,//表单控件内容部分（checkbox，radio......）
      "resourcefieldGroupname": "group-addHolder", //分组名称
      "isResourcefieldHidden": false,       //是否隐藏
      "resourcefieldBindingfnList": [],//事件名称集合
    },
    //新增 add - select
    {
      "resourcefieldXtype": "select",    //表单类型
      "resourcefieldCode": "addHolderInfo",  //表单model字段名称
      "resourcefieldName": "",   //表单字段 lable 名称
      "isfieldRequired": false, //是否必填 required
      "resourcefieldBinding": "",//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": "string",//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "label-width": 10,
        "secondXtype": "normal",//表单控件分支小类type,如input=>input-text,input-textere
        "freedom": true,//el-form-item / cx-muster-item 自由宽度开关 （ 其宽度有实际子内容宽度决定，不再由基础最大宽度控制 ），浮动依次排列
        "min": undefined,//min
        "max": undefined,//max
      },
      "resourcefieldEmptytext": "新增",//placeholder的值
      "isResourcefieldRemoved": false,//是否禁用
      "isResourcefieldReadonly": false,//是否只读
      "fieldWidth": 90,//表单元素部分宽度
      "fieldHeight": 32,//表单元素部分高度
      "resourcefieldStep": null,//step 步长
      "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
      "resourcefieldFieldcls": null,//表单控件图标
      "isResourcefieldEditable": false,//是否可编辑
      "resourcefieldColspan": 1,//所占列数
      "items": [{"label": "个人", "value": "personalOwner"}, {"label": "企业", "value": "companyOwner"}],//表单控件内容部分（checkbox，radio......）
      "resourcefieldGroupname": "group-addHolder", //分组名称
      "isResourcefieldHidden": false,       //是否隐藏
      "resourcefieldBindingfnList": ['change-AddNewOwnerOrHolder'],//事件名称集合
    },
    //所属部门 - select -（ 模拟下拉，内含树状数据 ）
    {
      "resourcefieldXtype": "select",    //表单类型
      "resourcefieldCode": "roleOrganization",  //表单model字段名称
      "resourcefieldName": "所属部门22222222",   //表单字段 lable 名称
      "isfieldRequired": true, //是否必填 required
      "resourcefieldBinding": "请选择所属部门",//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": 'number',//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": "role-organization",//表单控件分支小类type,如input=>input-text,input-textere
        "min": undefined,//min
        "max": undefined,//max
      },
      "resourcefieldEmptytext": "请选择所属部门",//placeholder的值
      "isResourcefieldRemoved": false,//是否禁用
      "isResourcefieldReadonly": false,//是否只读
      "fieldWidth": 350,//表单元素部分宽度
      "fieldHeight": 32,//表单元素部分高度
      "min": undefined,//min
      "max": undefined,//max
      "resourcefieldStep": null,//step 步长
      "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
      "resourcefieldFieldcls": null,//表单控件图标
      "isResourcefieldEditable": false,//是否可编辑
      "resourcefieldColspan": 1,//所占列数
      "items": null,//表单控件内容部分（checkbox，radio......）
      "resourcefieldGroupname": "group-addHolder", //分组名称
      "isResourcefieldHidden": false,       //是否隐藏
      "resourcefieldBindingfnList": [],//事件名称集合
    },
    //角色组 - select
    {
      "resourcefieldXtype": "select",    //表单类型
      "resourcefieldCode": "rolegroup",  //表单model字段名称
      "resourcefieldName": "角色组",   //表单字段 lable 名称
      "isfieldRequired": true, //是否必填 required
      "resourcefieldBinding": "请输入角色组",//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": 'number',//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": "role-group",//表单控件分支小类type,如input=>input-text,input-textere
        "min": undefined,//min
        "max": undefined,//max
      },
      "resourcefieldEmptytext": "请输入角色组",//placeholder的值
      "isResourcefieldRemoved": false,//是否禁用
      "isResourcefieldReadonly": false,//是否只读
      "fieldWidth": 350,//表单元素部分宽度
      "fieldHeight": 32,//表单元素部分高度
      "min": undefined,//min
      "max": undefined,//max
      "resourcefieldStep": null,//step 步长
      "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
      "resourcefieldFieldcls": null,//表单控件图标
      "isResourcefieldEditable": false,//是否可编辑
      "resourcefieldColspan": 1,//所占列数
      "items": null,//表单控件内容部分（checkbox，radio......）
      "resourcefieldGroupname": "group-addHolder", //分组名称
      "isResourcefieldHidden": false,       //是否隐藏
      "resourcefieldBindingfnList": [],//事件名称集合
    },
    //员工角色 - select
    {
      "resourcefieldXtype": "select",    //表单类型
      "resourcefieldCode": "roleEmployee",  //表单model字段名称
      "resourcefieldName": "员工角色",   //表单字段 lable 名称
      "isfieldRequired": true, //是否必填 required
      "resourcefieldBinding": "请输入员工角色",//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": 'array',//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": "role-employee",//表单控件分支小类type,如input=>input-text,input-textere
        "min": undefined,//min
        "max": undefined,//max
      },
      "resourcefieldEmptytext": "请输入员工角色",//placeholder的值
      "isResourcefieldRemoved": false,//是否禁用
      "isResourcefieldReadonly": false,//是否只读
      "fieldWidth": 350,//表单元素部分宽度
      "fieldHeight": 32,//表单元素部分高度
      "min": undefined,//min
      "max": undefined,//max
      "resourcefieldStep": null,//step 步长
      "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
      "resourcefieldFieldcls": null,//表单控件图标
      "isResourcefieldEditable": false,//是否可编辑
      "resourcefieldColspan": 1,//所占列数
      "items": null,//表单控件内容部分（checkbox，radio......）
      "resourcefieldGroupname": "group-addHolder", //分组名称
      "isResourcefieldHidden": false,       //是否隐藏
      "resourcefieldBindingfnList": [],//事件名称集合
    },
    //功能按钮权限 - checkbox
    // {
    //   "resourcefieldXtype": "checkbox",    //表单类型
    //   "resourcefieldCode": "roleFnBtn",  //表单model字段名称
    //   "resourcefieldName": "功能按钮权限",   //表单字段 lable 名称
    //   "isfieldRequired": true, //是否必填 required
    //   "resourcefieldBinding": "请选择功能按钮权限",//必填出错 提示信息
    //   "resourcefieldAllowblankexp": null,//内容验证规则
    //   "resourcefieldVtype": 'array',//验证字段的 内容类型
    //   "resourcefieldOtherconfigObject": {
    //     "secondXtype": "roleFnBtn",//表单控件分支小类type,如input=>input-text,input-textere
    //     "min": undefined,//min
    //     "max": undefined,//max
    //   },
    //   "resourcefieldEmptytext": "请选择功能按钮权限",//placeholder的值
    //   "isResourcefieldRemoved": false,//是否禁用
    //   "isResourcefieldReadonly": false,//是否只读
    //   "fieldWidth": 800,//表单元素部分宽度
    //   "fieldHeight": null,//表单元素部分高度
    //   "min": undefined,//min
    //   "max": undefined,//max
    //   "resourcefieldStep": null,//step 步长
    //   "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
    //   "resourcefieldFieldcls": null,//表单控件图标
    //   "isResourcefieldEditable": false,//是否可编辑
    //   "resourcefieldColspan": 2,//所占列数
    //   "items": null,//表单控件内容部分（checkbox，radio......）
    //   "resourcefieldGroupname": "group-addHolder", //分组名称
    //   "isResourcefieldHidden": false,       //是否隐藏
    //   "resourcefieldBindingfnList": [],//事件名称集合
    // },
  ]
}

export default test2;
