//form-template test 自动表单-测试调试
const rolegroup = {
  //v-model 绑定字段对象
  "modelData": {
    "interval": {
      type: 'mounth',//选择类型
      mounthAndDay: '',//第几个月第几号
      day: '',//当月几号号
      week: '',//星期几
      time: ''//时间
    },
  },
  //表单信息
  "info": {
    "funcinfoFormlabelwidth": 150,
    "funcinfoFormcols": 1    //表单所占列数
  },
  //表单控件循环信息
  "fields": [
    //出生日期 - datepicker
    {
      "resourcefieldXtype": "date",    //表单类型
      "resourcefieldCode": "interval",  //表单model字段名称
      "resourcefieldName": "执行频率",   //表单字段 lable 名称
      "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
      "isfieldRequired": true, //是否必填 required
      "resourcefieldBinding": "请选择出生日期",//必填出错 提示信息
      "resourcefieldAllowblankexp": 'time-interval',//内容验证规则
      "resourcefieldVtype": "object",//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": "interval",//表单控件分支小类type,如input=>input-text,input-textere
        "min": undefined,//min
        "max": undefined,//max
      },
      "resourcefieldEmptytext": "请选择出生日期",//placeholder的值
      "isResourcefieldRemoved": false,//是否禁用
      "isResourcefieldReadonly": false,//是否只读
      "fieldWidth": 700,//表单元素部分宽度
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
  ],
}

export default rolegroup;
