//form-template test 自动表单-测试调试
const test1 = {
  //v-model 绑定字段对象
  "modelData": {
    "userAvatar": "http://otaflb4oo.bkt.clouddn.com/mimo/banner/banner3.jpg",//用户头像
    // "name": "",//客户姓名
    "info": {
      "ownerName": "这是我做的一个自动表单的示例，参数部分及使用方法请详见代码和使用文档",
      "ownerId": 0
    },//说明
    "upload": [
      {"fileName": "test-picture", "fileUrl": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"}
    ],
    "name": "高仓雄",
    "mobile": "",//移动电话
    "cardType": "",//证件类型
    "cardNum": "",//证件号码
    "sex": "1",//性别
    "birthday": "",//出生日期
    "ownerType": "",//客户类型
    "tel": "",//家庭电话
    "ownerProperty": "",//客户性质
    "customerLevel": "",//客户等级
    "marriage": "",//婚姻状况
    "education": "",//文化程度
    "nationality": "",//国籍/地区
    "industry": "",//行业
    "origin": "",//籍贯
    "nation": "",//民族
    "rolegroup": "",//角色组 - select
    "roleEmployee": [],//员工角色 - select
    "roleFnBtn": [],//功能按钮权限 - checkbox
    "addAuthorizer": [1, 2, 3], //新增授权人 - transfer
    "searchInfo": "",//搜寻信息
    "hobby": [],//兴趣爱好
    "mainHouseList": [
      {"ownerPrecinct": "姓名", "ownerHouse": "",},
      {"ownerPrecinct": "主副房号", "ownerHouse": "桃李春风-单元-单元1606（业主）"},
      {"ownerPrecinct": "手机", "ownerHouse": ""},
      {"ownerPrecinct": "固定电话", "ownerHouse": ""},
      {"ownerPrecinct": "身份证", "ownerHouse": ""},
      {"ownerPrecinct": "邮箱", "ownerHouse": ""},
      {"ownerPrecinct": "备注", "ownerHouse": ""}
    ],//所属项目（表格）
    "remarks": "",//备注
    "provinceCityArea": {
      "province": 33,
      "city": 3301,
      "district": 330106,
    }, //省市区
    "address": "",//地址
    "company": "",//工作单位
    "companyTel": "",//单位电话
    "companyAddress": "",//单位地址
    "email": "",//电子邮箱
    "QQ": "",//QQ号码
    "emergency": "",//紧急联系人
    "emergencyTel": "",//紧急联系人电话
    "registered": "",//户口所在地
    "liveState": "",//居住形态
    "specialIdentity": "",//特殊身份
    "isloan": false,//是否贷款
    "loanMonery": [8, 20],//还款金额
    "houseMoney": 500,//购房金融
  },
  //表单信息
  "info": {
    "funcinfoFormlabelwidth": 100,
    "funcinfoFormcols": 2    //表单所占列数
  },
  //表单控件循环信息
  "fields": [
    //搜索信息 - select-remote
    {
      "resourcefieldXtype": "select",    //表单类型
      "resourcefieldCode": "searchInfo",  //表单model字段名称
      "resourcefieldName": "搜寻信息",   //表单字段 lable 名称
      "isfieldRequired": false, //是否必填 required
      "resourcefieldBinding": "请搜寻",//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": "string",//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": "remote",//表单控件分支小类type,如input=>input-text,input-textere
        "thirdXtype": "template",//控件-业务划分 三级分类
        "dynamicUrl": "form/select/remoteTest",
        "dynamicQuery": null,
        "min": undefined,//min
        "max": undefined,//max
      },
      "resourcefieldEmptytext": "请搜寻",//placeholder的值
      "isResourcefieldRemoved": false,//是否禁用
      "isResourcefieldReadonly": false,//是否只读
      "fieldWidth": 350,//表单元素部分宽度
      "fieldHeight": 32,//表单元素部分高度
      "resourcefieldStep": null,//step 步长
      "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
      "resourcefieldFieldcls": null,//表单控件图标
      "isResourcefieldEditable": false,//是否可编辑
      "resourcefieldColspan": 1,//所占列数
      "items": [],//表单控件内容部分（checkbox，radio......）
      "resourcefieldGroupname": "base-info", //分组名称
      "isResourcefieldHidden": false,       //是否隐藏
      "resourcefieldBindingfnList": [],//事件名称集合
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

export default test1;
