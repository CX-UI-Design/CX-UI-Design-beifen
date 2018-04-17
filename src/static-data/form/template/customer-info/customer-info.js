//form-template customer-information 自动表单-选人控件示例 本地数据
const rolegroup = {
  //v-model 绑定字段对象
  "modelData": {
    "customerVo":
      {
        address: "天堂软件园 ",
        age: 0,
        areaId: null,
        areaName: null,
        autoForm: null,
        birthday: "1991-06-08",
        certificate: "330106199106086666",
        certificateType: "11",
        certificateTypeName: "护照",
        cityId: null,
        cityName: null,
        company: "新视窗",
        companyAddress: "天堂软件园",
        companyPhone: "18768183457",
        companyProperyty: "0",
        customerResultId: null,
        education: "4",
        educationName: "本科",
        email: "398755817@qq.com",
        emergencyContact: "朱莉莉",
        emergencyContactPhone: "13634110454",
        enterpriseId: 1,
        familyInfoVo: null,
        fax: "",
        gender: "1",
        genderName: "女",
        handlerId: null,
        interestsIdList: null,
        interestsIds: "0,9,2",
        interestsNames: "美食,旅游,音乐",
        legalRepresentative: "",
        linkman: "",
        linkmanPhone: "",
        mainHouseList: null,
        maritalStatus: "0",
        maritalStatusName: "未婚",
        mobile: "13634110454",
        nation: "10",
        nationName: "汉族",
        nativePlace: "浙江杭州",
        organizationId: 3,
        ownerBaseInfoOwnerId: null,
        ownerId: 68,
        ownerLevel: "0",
        ownerLevelName: "VIP",
        ownerName: "朱莉莉",
        ownerProperty: "0",
        ownerPropertyName: "业主",
        ownerRelationship: null,
        ownerType: "0",
        ownerTypeName: "个人",
        peopleCounts: 0,
        phone: "0714-88888888",
        picUrl: "http://192.168.1.200:81/M00/00/01/wKgByFo7dheANPp5AACfVU2HxiU455.jpg",
        pictures: null,
        precinctHouse: null,
        precinctId: 0,
        projectId: 0,
        provinceCityArea: null,
        provinceId: null,
        provinceName: null,
        qq: "771401093",
        region: "0",
        regionName: "中国",
        regionalInfo: "",
        registeredAddress: "",
        remark: "前端匠心铸造者",
        streetId: null,
        streetName: null,
        tradeId: "0",
        tradeName: "",
      },
    //select - 信息联动（ 选人控件 ）
    "customerVo2": 68,//select -（ 选人控件 ）单个
  },
  //表单信息
  "info": {
    "funcinfoFormlabelwidth": 100,
    "funcinfoFormcols": 1    //表单所占列数
  },
  //表单控件循环信息
  "fields": [
    //select - 信息联动（ 选人控件 ）
    {
      "resourcefieldXtype": "select",    //表单类型
      "resourcefieldCode": "customerVo",  //表单model字段名称
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
    //选人控件-单个模糊查询下拉框 - select
    {
      "resourcefieldXtype": "select",    //表单类型
      "resourcefieldCode": "customerVo2",  //表单model字段名称
      "resourcefieldName": "客户姓名",   //表单字段 lable 名称
      "isfieldRequired": true, //是否必填 required
      "resourcefieldBinding": "请选择客户姓名",//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": 'string',//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": "customer-info-single",//表单控件分支小类type,如input=>input-text,input-textere
        "thirdXtype": "vehicle",//控件-业务划分 三级分类
        "dynamicUrl": "owner/customer/list-customer-search",
        "min": undefined,//min
        "max": undefined,//max
      },
      "resourcefieldEmptytext": "请输入客户姓名",//placeholder的值
      "isResourcefieldRemoved": false,//是否禁用
      "isResourcefieldReadonly": false,//是否只读
      "fieldWidth": 350,//表单元素部分宽度
      "fieldHeight": 64,//表单元素部分高度
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
  ],
}

export default rolegroup;
