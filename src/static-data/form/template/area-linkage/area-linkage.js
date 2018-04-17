//form-template area-linkage 省市区-区域选择控件示例 本地数据
const rolegroup = {
  //v-model 绑定字段对象
  "modelData": {
    "provinceCityArea": {
      "province": 33,
      "city": 3301,
      "district": 330106,
    }, //省市区
  },
  //表单信息
  "info": {
    "funcinfoFormlabelwidth": 100,
    "funcinfoFormcols": 2    //表单所占列数
  },
  //表单控件循环信息
  "fields": [
    //省市区 - cascader
    {
      "resourcefieldXtype": "select",//表单类型
      "resourcefieldCode": "provinceCityArea",//表单model字段名称
      "resourcefieldName": "省市区",//表单字段 lable 名称
      "isfieldRequired": true, //是否必填 required
      "resourcefieldBinding": "请选择省市区",//必填出错 提示信息
      "resourcefieldAllowblankexp": 'area',//内容验证规则
      "resourcefieldVtype": "object",//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": "area",//表单控件分支小类type,如input=>input-text,input-textere
        "dynamicUrl": "/owner/customer/initProvinceCityArea",
        "dynamicQuery": '',
        "min": null,
        "max": null,
      },
      "resourcefieldEmptytext": null,//placeholder的值
      "isResourcefieldRemoved": false,//是否禁用
      "isResourcefieldReadonly": false,//是否只读
      "fieldWidth": 700,
      "fieldHeight": 32,
      "resourcefieldStep": null,
      "resourcefieldRowspan": null,
      "resourcefieldFieldcls": "search",
      "isResourcefieldEditable": false,
      "resourcefieldColspan": 2,
      "items": [],
      "resourcefieldGroupname": "more-info", //分组名称
      "isResourcefieldHidden": false,       //是否隐藏
      "resourcefieldBindingfnList": []//事件名称集合
    },
  ],
}

export default rolegroup;
