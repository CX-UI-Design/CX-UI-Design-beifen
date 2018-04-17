import {errorMap} from "@/utils/mock/error/error"

const formMap = {
  "autoform": {
    "resultCode": "200",
    "resultMsg": "操作成功。",
    "resultData": {
      //v-model 绑定字段对象
      "modelData": {
        "info": "",//说明
        "name": "",//客户姓名
        "legalPerson":"",//法人代表
        "companyNature":"",//企业性质
        "mobile": "",//移动电话
        "cardType": "",//证件类型
        "cardNum": "",//证件号码
        "ownerType": "",//客户类型
        "contacts":"",//联系人
        "ownerProperty": "",//客户性质
        "contactsMobile":"",//联系人电话
        "customerLevel": "",//客户等级
        "number":"",//公司人数
        "industry":"",//行业

        "mainHouseList": [
          {"ownerPrecinct": "天泓山庄", "ownerHouse": "天泓山庄-香山苑-9幢-2单元-701（租户）"},
          {"ownerPrecinct": "桃李春风", "ownerHouse": "桃李春风-商铺-商铺1310（租户）"}

        ],//所属项目（表格）
        "remarks": "",//备注
        "provincialandcity": [],//省市区
        "company": "",//工作单位
        "companyTel": "",//单位电话
        "companyAddress": "",//单位地址

        "registered": "",//户口所在地
        "liveState": "",//居住形态
        "specialIdentity": "",//特殊身份

      },
      //表单信息
      "info": {
        "funcinfoFormcols": 2    //表单所占列数
      },
      //表单控件循环信息
      "fields": [
        //span
        {
          "resourcefieldXtype": "span",    //表单类型
          "resourcefieldNameEn": "info",  //表单model字段名称
          "resourcefieldName": "客户详细信息",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 100,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": null,//验证字段的内容类型
          "resourcefieldOtherconfig": null,//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 600,//表单元素部分宽度
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
          "resourcefieldOtherconfig": 'simple',//表单控件分支小类type,如input=>input-text,input-textere
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
          "resourcefieldBindingfnList": ['click-groupSwitch']//事件名称集合
        },

        //客户名称 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldNameEn": "name",  //表单model字段名称
          "resourcefieldName": "客户名称",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": null, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请输入客户名称",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 550,//表单元素部分宽度
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
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        //法人代表 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldNameEn": "legalPerson",  //表单model字段名称
          "resourcefieldName": "法人代表",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": null, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请输入法人代表",//placeholder的值
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
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        //企业性质 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldNameEn": "companyNature",  //表单model字段名称
          "resourcefieldName": "企业性质",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": null, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请输入企业性质",//placeholder的值
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
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        //证件类型 - select
        {
          "resourcefieldXtype": "select",    //表单类型
          "resourcefieldNameEn": "cardType",  //表单model字段名称
          "resourcefieldName": "证件类型",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": null, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请选择证件类型",//placeholder的值
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
          "items": [
            {"value": "carded", "label": "身份证"},
            {"value": "studentCard", "label": "学生证"},
            {"value": "driverCard", "label": "驾驶证"},
            {"value": "disabilityCard", "label": "残疾证"},
          ],//表单控件内容部分（checkbox，radio......）
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "dynamicUrl": "system/dictionary/select", //请求地址
          "dynamicQuery": "cardType",//请求参数

        },
        //证件号码 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldNameEn": "cardNum",  //表单model字段名称
          "resourcefieldName": "证件号码",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": null, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请输入证件号码",//placeholder的值
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
          "src": "",//图片操作地址（获取地址，上传地址）
        },
       //客户类型 - select
        {
          "resourcefieldXtype": "select",    //表单类型
          "resourcefieldNameEn": "ownerType",  //表单model字段名称
          "resourcefieldName": "客户类型",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": null, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请选择客户类型",//placeholder的值
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
          "items": [
            {"label": "个人", "value": "personal"},
            {"label": "企业", "value": "enterprise"}
          ],//表单控件内容部分（checkbox，radio......）
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "dynamicUrl": "system/dictionary/select", //请求地址
          "dynamicQuery": "ownerType",//请求参数
        },
         //联系人 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldNameEn": "contacts",  //表单model字段名称
          "resourcefieldName": "联系人",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请输入联系人",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请输入联系人",//placeholder的值
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
          "src": "",//图片操作地址（获取地址，上传地址）
        },
         //客户性质 - select
        {
          "resourcefieldXtype": "select",    //表单类型
          "resourcefieldNameEn": "ownerProperty",  //表单model字段名称
          "resourcefieldName": "客户性质",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": null, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请选择客户性质",//placeholder的值
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
          "items": [
            {
              "label": "业主",
              "value": "owner"
            },
            {
              "label": "租户",
              "value": "tenant"
            }
          ],//表单控件内容部分（checkbox，radio......）
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "dynamicUrl": "system/dictionary/select", //请求地址
          "dynamicQuery": "ownerProperty",//请求参数
        },


        //联系人电话 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldNameEn": "contactsMobile",  //表单model字段名称
          "resourcefieldName": "联系人电话",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请输入联系人电话",//必填出错 提示信息
          "resourcefieldAllowblankexp": "mobile",//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请输入联系人电话",//placeholder的值
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
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        //客户等级 - select
        {
          "resourcefieldXtype": "select",    //表单类型
          "resourcefieldNameEn": "customerLevel",  //表单model字段名称
          "resourcefieldName": "客户等级",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": null, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请选择客户等级",//placeholder的值
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
          "items": [
            {
              "label": "VIP",
              "value": "VIP"
            },
            {
              "label": "NORMAL",
              "value": "NORMAL"
            }
          ],//表单控件内容部分（checkbox，radio......）
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "dynamicUrl": "system/dictionary/select", //请求地址
          "dynamicQuery": "customerLevel",//请求参数
        },
        //公司人数 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldNameEn": "number",  //表单model字段名称
          "resourcefieldName": "联系人电话",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": null, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请输入公司人数 ",//placeholder的值
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
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        //行业 - select
        {
          "resourcefieldXtype": "select",    //表单类型
          "resourcefieldNameEn": "industry",  //表单model字段名称
          "resourcefieldName": "行业",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": null, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请选择行业",//placeholder的值
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
          "items": [
            {
              "label": "软件和信息技术服务",
              "value": "software"
            },
            {
              "label": "法律",
              "value": "Law"
            },
            {
              "label": "医疗",
              "value": "medical"
            },
            {
              "label": "教育",
              "value": "education"
            },
            {
              "label": "机械制造",
              "value": "machinery"
            },
            {
              "label": "其他",
              "value": "other"
            }
          ],//表单控件内容部分（checkbox，radio......）
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "dynamicUrl": "system/dictionary/select", //请求地址
          "dynamicQuery": "industry",//请求参数
        },


        //所属项目（表格）- baseTable
        {
          "resourcefieldXtype": "baseTable",    //表单类型
          "resourcefieldNameEn": "mainHouseList",  //表单model字段名称
          "resourcefieldName": "",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 100,//表单字段 lable 宽度
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请输入民族",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "object",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请输入民族",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 600,//表单元素部分宽度
          "fieldHeight": null,//表单元素部分高度
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
        //备注 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldNameEn": "remarks",  //表单model字段名称
          "resourcefieldName": "备注",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 100,//表单字段 lable 宽度
          "isfieldRequired": null, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'textarea',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请输入备注信息",//placeholder的值
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
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        /*==================== group 2 ==================== */
        //填写更多 - separator

        {
          "resourcefieldXtype": "separator",    //表单类型
          "resourcefieldNameEn": null,  //表单model字段名称
          "resourcefieldName": "填写更多",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 0,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": null,//验证字段的内容类型
          "resourcefieldOtherconfig": 'more',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 700,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": "fangchan",//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": ['click-groupSwitch'],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        {
          "resourcefieldXtype": "separator",    //表单类型
          "resourcefieldNameEn": null,  //表单model字段名称
          "resourcefieldName": "联系信息",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 0,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": null,//验证字段的内容类型
          "resourcefieldOtherconfig": 'simple',//表单控件分支小类type,如input=>input-text,input-textere
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
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": true,       //是否隐藏
          "resourcefieldBindingfnList": ['click-groupSwitch']//事件名称集合
        },
        //省市区 - cascader
        {
          "resourcefieldXtype": "cascader",//表单类型
          "resourcefieldNameEn": "provincialandcity",//表单model字段名称
          "resourcefieldName": "省市区",//表单字段 lable 名称
          "funcinfoFormlabelwidth": 100,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请选择省市区",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "array",//验证字段的 内容类型
          "resourcefieldOtherconfig": "normal",//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 200,
          "fieldHeight": 32,
          "resourcefieldMinvalue": null,
          "resourcefieldMaxvalue": null,
          "resourcefieldStep": null,
          "resourcefieldRowspan": null,
          "resourcefieldFieldcls": "search",
          "isResourcefieldEditable": false,
          "resourcefieldColspan": 1,
          "items": [
            {
              "value": "Mercedes",
              "label": "浙江",
              "children": [
                {
                  "value": "Car",
                  "label": "杭州",
                  "children": [
                    {
                      "value": "S-class",
                      "label": "西湖区"
                    },
                    {
                      "value": "E-class",
                      "label": "上城区"
                    }
                  ]
                },
                {
                  "value": "SUV",
                  "label": "宁波",
                  "children": [
                    {
                      "value": "gle",
                      "label": "鄞州区",
                      "isResourcefieldRemoved": true
                    },
                    {
                      "value": "glc",
                      "label": "江东区"
                    }
                  ]
                }
              ]
            },
            {
              "value": "BMW",
              "label": "江苏",
              "children": [
                {
                  "value": "Car",
                  "label": "苏州",
                  "children": [
                    {
                      "value": "7-class",
                      "label": "xxx"
                    },
                    {
                      "value": "5-class",
                      "label": "yyy"
                    }
                  ]
                },
                {
                  "value": "无锡",
                  "label": "无锡",
                  "children": [
                    {
                      "value": "X5",
                      "label": "xxx"
                    },
                    {
                      "value": "X3",
                      "label": "yyy"
                    }
                  ]
                }
              ]
            },
            {
              "value": "广东省",
              "label": "广东省",
              "children": [
                {
                  "value": "Car",
                  "label": "广州",
                  "children": [
                    {
                      "value": "A8-class",
                      "label": "xxx"
                    },
                    {
                      "value": "A6-class",
                      "label": "yyy"
                    }
                  ]
                },
                {
                  "value": "SUV",
                  "label": "深圳",
                  "children": [
                    {
                      "value": "Q7",
                      "label": "xxx"
                    },
                    {
                      "value": "Q5",
                      "label": "yyy"
                    }
                  ]
                }
              ]
            }
          ],
          "ddcode": null,
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": true,       //是否隐藏
          "resourcefieldBindingfnList": []//事件名称集合
        },
         //单位电话 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldNameEn": "companyTel",  //表单model字段名称
          "resourcefieldName": "单位电话",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请输入单位电话",//必填出错 提示信息
          "resourcefieldAllowblankexp": "tel",//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请输入单位电话",//placeholder的值
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
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": true,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
         //公司传真 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldNameEn": "fax",  //表单model字段名称
          "resourcefieldName": "公司传真",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 100,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请输入电子邮箱",//必填出错 提示信息
          "resourcefieldAllowblankexp": "email",//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请输入电子邮箱",//placeholder的值
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
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": true,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },


        //单位地址 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldNameEn": "companyAddress",  //表单model字段名称
          "resourcefieldName": "单位地址",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 100,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请输入单位地址",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请输入单位地址",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 600,//表单元素部分宽度
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
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": true,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },




        //========================================
        //separator
        {
          "resourcefieldXtype": "separator",    //表单类型
          "resourcefieldNameEn": null,  //表单model字段名称
          "resourcefieldName": "其他信息",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 0,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": null,//验证字段的内容类型
          "resourcefieldOtherconfig": 'simple',//表单控件分支小类type,如input=>input-text,input-textere
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
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": true,       //是否隐藏
          "resourcefieldBindingfnList": ['click-groupSwitch']//事件名称集合
        },
        //户口所在地 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldNameEn": "registered",  //表单model字段名称
          "resourcefieldName": "户口所在地",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 100,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请输入户口所在地",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请输入户口所在地",//placeholder的值
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
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": true,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        //居住形态 - radio
        {
          "resourcefieldXtype": "radio",    //表单类型
          "resourcefieldNameEn": "liveState",  //表单model字段名称
          "resourcefieldName": "居住形态",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 100,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请选择居住形态",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'normal',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请选择居住形态",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 250,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 1,//所占列数
          "items": [
            {"label": "独居", "value": "duju"},
            {"label": "夫妻", "value": "fuqi"},
            {"label": "和子女", "value": "hezinv"}
          ],//表单控件内容部分（checkbox，radio......）
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": true,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        //特殊身份 - select
        {
          "resourcefieldXtype": "select",    //表单类型
          "resourcefieldNameEn": "specialIdentity",  //表单model字段名称
          "resourcefieldName": "特殊身份",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 100,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请输入特殊身份",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请输入特殊身份",//placeholder的值
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
          "items": [
            {"label": "雷神", "value": "thor"},
            {"label": "蜘蛛侠", "value": "spoderman"},
            {"label": "超人", "value": "superman"}
          ],//表单控件内容部分（checkbox，radio......）
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": true,       //是否隐藏
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
