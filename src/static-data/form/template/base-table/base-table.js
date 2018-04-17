//form-template base-table 自动表单-表格组件示例 本地数据
const rolegroup = {
  //v-model 绑定字段对象
  "modelData": {
    "name": "高仓雄",
    "sex": "0",//性别
    "mainHouseList": [
      {"ownerPrecinct": "天泓山庄", "ownerHouse": "桃李春风-商铺-商铺1310（租户）"},
      {"ownerPrecinct": "桃李春风", "ownerHouse": ""}
    ],//所属项目（表格）
    "mainHouseList2": [
      {"ownerPrecinct": "姓名", "ownerHouse": "",},
      {"ownerPrecinct": "主副房号", "ownerHouse": "桃李春风-单元-单元1606（业主）"},
      {"ownerPrecinct": "手机", "ownerHouse": ""},
      {"ownerPrecinct": "固定电话", "ownerHouse": ""},
      {"ownerPrecinct": "身份证", "ownerHouse": ""},
      {"ownerPrecinct": "邮箱", "ownerHouse": ""},
      {"ownerPrecinct": "备注", "ownerHouse": ""}
    ],//所属项目（表格2）
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
      "resourcefieldAllowblankexp": "numEn-",//内容验证规则
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
      "resourcefieldBindingfnList": ["visibleChange-sexFuncTest"],//事件名称集合
    },
    //所属项目（表格）- baseTable
    {
      "resourcefieldXtype": "baseTable",    //表单类型
      "resourcefieldCode": "mainHouseList",  //表单model字段名称
      "resourcefieldName": "",   //表单字段 lable 名称
      "isfieldRequired": true, //是否必填 required
      "resourcefieldBinding": "请输入民族",//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": "object",//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": null,//表单控件分支小类type,如input=>input-text,input-textere
        "tableHead": "enterpriseManage",
        "label-width": 0,
        "min": undefined,//min
        "max": undefined,//max
      },
      "resourcefieldEmptytext": "请输入民族",//placeholder的值
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
      "resourcefieldGroupname": "base-info", //分组名称
      "isResourcefieldHidden": false,       //是否隐藏
      "resourcefieldBindingfnList": [],//事件名称集合
    },
    //所属项目（表格）- baseTable
    {
      "resourcefieldXtype": "baseTable",    //表单类型
      "resourcefieldCode": "mainHouseList2",  //表单model字段名称
      "resourcefieldName": "",   //表单字段 lable 名称
      "isfieldRequired": true, //是否必填 required
      "resourcefieldBinding": "请输入民族",//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": "object",//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": null,//表单控件分支小类type,如input=>input-text,input-textere
        "tableHead": "autoFormTest",
        "min": undefined,//min
        "max": undefined,//max
      },
      "resourcefieldEmptytext": "请输入民族",//placeholder的值
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
      "resourcefieldGroupname": "base-info", //分组名称
      "isResourcefieldHidden": false,       //是否隐藏
      "resourcefieldBindingfnList": [],//事件名称集合
    },
  ],
  //表格中表单控件items的内容
  "tableItems": [
    //主房号
    {
      "key": "ownerHouse",          //表头对应内容key
      "formItemData": [
        {
          "index": 0,
          "items": [
            {"label": "桃李春风-单元-单元1606（业主）", "value": "桃李春风-单元-单元1606（业主）"},
            {"label": "桃李春风-单元-单元0806（业主）", "value": "桃李春风-单元-单元0806（业主）"},
            {"label": "桃李春风-单元-单元1212（业主）", "value": "桃李春风-单元-单元1212（业主）"},
            {"label": "桃李春风-商铺-商铺1310（租户）", "value": "桃李春风-商铺-商铺1310（租户）"},
            {"label": "桃李春风-商铺-商铺1311（租户）", "value": "桃李春风-商铺-商铺1311（租户）"},
          ],
        },
        {
          "index": 1,
          "items": [
            {"label": "桃李春风-单元-单元1606（业主）", "value": "桃李春风-单元-单元1606（业主）"},
            {"label": "桃李春风-单元-单元0806（业主）", "value": "桃李春风-单元-单元0806（业主）"},
            {"label": "桃李春风-单元-单元1212（业主）", "value": "桃李春风-单元-单元1212（业主）"},
            {"label": "桃李春风-商铺-商铺1310（租户）", "value": "桃李春风-商铺-商铺1310（租户）"},
            {"label": "桃李春风-商铺-商铺1311（租户）", "value": "桃李春风-商铺-商铺1311（租户）"},
          ],
        }
      ]//表头对应内容区域 items 内容
    },
  ]
}

export default rolegroup;
