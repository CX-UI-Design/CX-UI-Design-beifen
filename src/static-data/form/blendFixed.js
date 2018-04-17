//售楼登记
const blendFixedMap = {
  salesRegister: {
    fixed: {
      //v-model 绑定字段对象
      "modelData": {
        "houseName": "天泓山庄-香山苑-1幢-1单元-101",//房产名称 - text
        // ======== 新业主 =======
        "newOwnerName": "",//新业主 - input
        "AddNewInfo": "",//新增 - select
        "isMainHouse": false,//是否主房产 - switch
        "newOwnerCertificate": "",//新业主证件号码 - input
        "newOwnerMobile": "",//新业主移动电话 - input
        // ======== 新增按钮 =======
        "addHolder": "新增共有产权人",//新增共有产权人 - button
        "newDelHolder": "删除",//删除 - delect - Holder
        // ======== 产权人 =======
        // "Holder2": "",//产权人
        // "addHolderInfo2": "",//新增 - select
        // "relationship2": "",//产权人于业主关系 select
        // "Holder2Carded": "",//产权人证件号码 - input
        // "Holder2Mobile": "",//产权人移动电话 - input
      },
      //表单信息
      "info": {
        "funcinfoFormlabelwidth": 150,
        "funcinfoFormcols": 2    //表单所占列数
      },
      //表单控件循环信息
      "fields": [
        //房产名称 - text
        {
          "resourcefieldXtype": "text",    //表单类型
          "resourcefieldCode": "houseName",  //表单model字段名称
          "resourcefieldSecondCode": "ownerName",  //表单model二级字段名称
          "resourcefieldName": "房产名称",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 0,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": null,//验证字段的内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "span",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 800,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": 1,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "before", //分组名称
          "isResourcefieldHidden": false,      //是否隐藏
          "resourcefieldBindingfnList": []
        },
        //开发商 - text
        {
          "resourcefieldXtype": "text",    //表单类型
          "resourcefieldCode": "developer",  //表单model字段名称
          "resourcefieldName": "开发商",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 0,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": null,//验证字段的内容类型
          "resourcefieldOtherconfigObject": {
            "resourcefieldSecondCode": "ownerName",  //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
            "secondXtype": "span",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 800,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": 1,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "before", //分组名称
          "isResourcefieldHidden": false,      //是否隐藏
          "resourcefieldBindingfnList": []
        },
        //group-newOwner - (新业主模块)
        {
          "resourcefieldXtype": "group",    //表单类型
          "resourcefieldCode": "group-newOwner",  //表单model字段名称
          "resourcefieldName": "group",   //表单字段 lable 名称
          "label-width": 120,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": null,//验证字段的内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": null,//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 800,//表单元素部分宽度
          "fieldHeight": null,//表单元素部分高度
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": 1,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "group-newOwner", //分组名称
          "isResourcefieldHidden": false,      //是否隐藏
          "resourcefieldBindingfnList": [],
          "resourcefieldConfiginfo": 2,//分组框内部最大列数
          "children": [
            //新业主 - select
            {
              "resourcefieldXtype": "select",    //表单类型
              "resourcefieldCode": "newOwnerName",  //表单model字段名称
              "resourcefieldName": "新业主",   //表单字段 lable 名称
              "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
              "isfieldRequired": true, //是否必填 required
              "resourcefieldBinding": "请输入新业主",//必填出错 提示信息
              "resourcefieldAllowblankexp": null,//内容验证规则
              "resourcefieldVtype": null,//验证字段的 内容类型
              "resourcefieldOtherconfigObject": {
                "secondXtype": "remote",//表单控件分支小类type,如input=>input-text,input-textere
                "thirdXtype": "customerSearch",//控件-业务划分 三级分类
                "dynamicUrl": "owner/customer/list-customer-search",
                "freedom": true,//el-form-item / cx-muster-item 自由宽度开关 （ 其宽度有实际子内容宽度决定，不再由基础最大宽度控制 ），浮动依次排列
                "min": undefined,//min
                "max": undefined,//max
              },
              "resourcefieldEmptytext": "请输入新业主",//placeholder的值
              "isResourcefieldRemoved": false,//是否禁用
              "isResourcefieldReadonly": false,//是否只读
              "fieldWidth": 350,//表单元素部分宽度
              "fieldHeight": 32,//表单元素部分高度
              "resourcefieldStep": null,//step 步长
              "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
              "resourcefieldFieldcls": null,//表单控件图标
              "isResourcefieldEditable": false,//是否可编辑
              "resourcefieldColspan": 1,//所占列数
              "items": null,//表单控件内容部分（checkbox，radio......）
              "resourcefieldGroupname": "group-newOwner", //分组名称
              "isResourcefieldHidden": false,       //是否隐藏
              "resourcefieldBindingfnList": ['change-customerSearchLinkage'],//事件名称集合
            },
            //新增 add - select
            {
              "resourcefieldXtype": "select",    //表单类型
              "resourcefieldCode": "AddNewInfo",  //表单model字段名称
              "resourcefieldName": "",   //表单字段 lable 名称
              "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
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
              "resourcefieldGroupname": "group-newOwner", //分组名称
              "isResourcefieldHidden": false,       //是否隐藏
              "resourcefieldBindingfnList": ['change-AddNewOwnerOrHolder'],//事件名称集合
            },
            //是否主房产 - switch
            {
              "resourcefieldXtype": "switch",    //表单类型
              "resourcefieldCode": "isMainHouse",  //表单model字段名称
              "resourcefieldName": "是否主房产",   //表单字段 lable 名称
              "isfieldRequired": false, //是否必填 required
              "resourcefieldBinding": "是否贷款",//必填出错 提示信息
              "resourcefieldAllowblankexp": null,//内容验证规则
              "resourcefieldVtype": "boolean",//验证字段的内容类型
              "resourcefieldOtherconfigObject": {
                "label-width": 175,
                "secondXtype": null,//表单控件分支小类type,如input=>input-text,input-textere
                "freedom": true,//el-form-item / cx-muster-item 自由宽度开关 （ 其宽度有实际子内容宽度决定，不再由基础最大宽度控制 ），浮动依次排列
                "min": undefined,//min
                "max": undefined,//max
              },
              "resourcefieldEmptytext": null,//placeholder的值
              "isResourcefieldRemoved": false,//是否禁用
              "isResourcefieldReadonly": false,//是否只读
              "fieldWidth": 360,//表单元素部分宽度
              "fieldHeight": 32,//表单元素部分高度
              "resourcefieldStep": null,//step 步长
              "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
              "resourcefieldFieldcls": null,//表单控件图标
              "isResourcefieldEditable": false,//是否可编辑
              "resourcefieldColspan": 1,//所占列数
              "items": null,//表单控件内容部分（checkbox，radio......）
              "resourcefieldGroupname": "group-newOwner", //分组名称
              "isResourcefieldHidden": false,       //是否隐藏
              "resourcefieldBindingfnList": [],//事件名称集合
            },
            //证件号码- input
            {
              "resourcefieldXtype": "input",    //表单类型
              "resourcefieldCode": "newOwnerCertificate",  //表单model字段名称
              "resourcefieldName": "证件号码",   //表单字段 lable 名称
              "isfieldRequired": false, //是否必填 required
              "resourcefieldBinding": "请输入证件号码",//必填出错 提示信息
              "resourcefieldAllowblankexp": null,//内容验证规则
              "resourcefieldVtype": "string",//验证字段的 内容类型
              "resourcefieldOtherconfigObject": {
                "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
                "freedom": true,//el-form-item / cx-muster-item 自由宽度开关 （ 其宽度有实际子内容宽度决定，不再由基础最大宽度控制 ），浮动依次排列
                "min": undefined,//min
                "max": undefined,//max
              },
              "resourcefieldEmptytext": "请输入证件号码",//placeholder的值
              "isResourcefieldRemoved": false,//是否禁用
              "isResourcefieldReadonly": false,//是否只读
              "fieldWidth": 350,//表单元素部分宽度
              "fieldHeight": 32,//表单元素部分高度
              "resourcefieldStep": null,//step 步长
              "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
              "resourcefieldFieldcls": null,//表单控件图标
              "isResourcefieldEditable": false,//是否可编辑
              "resourcefieldColspan": 1,//所占列数
              "items": null,//表单控件内容部分（checkbox，radio......）
              "resourcefieldGroupname": "group-addHolder2", //分组名称
              "isResourcefieldHidden": false,       //是否隐藏
              "resourcefieldBindingfnList": [],//事件名称集合
            },
            //移动电话 - input
            {
              "resourcefieldXtype": "input",    //表单类型
              "resourcefieldCode": "newOwnerMobile",  //表单model字段名称
              "resourcefieldName": "移动电话",   //表单字段 lable 名称
              "isfieldRequired": false, //是否必填 required
              "resourcefieldBinding": "请输入移动电话",//必填出错 提示信息
              "resourcefieldAllowblankexp": null,//内容验证规则
              "resourcefieldVtype": "string",//验证字段的 内容类型
              "resourcefieldOtherconfigObject": {
                "label-width": 250,
                "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
                "freedom": true,//el-form-item / cx-muster-item 自由宽度开关 （ 其宽度有实际子内容宽度决定，不再由基础最大宽度控制 ），浮动依次排列
                "min": undefined,//min
                "max": undefined,//max
              },
              "resourcefieldEmptytext": "请输入移动电话",//placeholder的值
              "isResourcefieldRemoved": false,//是否禁用
              "isResourcefieldReadonly": false,//是否只读
              "fieldWidth": 450,//表单元素部分宽度
              "fieldHeight": 32,//表单元素部分高度
              "resourcefieldStep": null,//step 步长
              "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
              "resourcefieldFieldcls": null,//表单控件图标
              "isResourcefieldEditable": false,//是否可编辑
              "resourcefieldColspan": 1,//所占列数
              "items": null,//表单控件内容部分（checkbox，radio......）
              "resourcefieldGroupname": "group-addHolder2", //分组名称
              "isResourcefieldHidden": false,       //是否隐藏
              "resourcefieldBindingfnList": [],//事件名称集合
            },
          ]
        },
        //新增共有产权人 - button
        {
          "resourcefieldXtype": "button",    //表单类型
          "resourcefieldCode": "addHolder",  //表单model字段名称
          "resourcefieldName": "",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "label-width": 600,
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 800,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": []
        },
      ]
    },
    add: {
      "resourcefieldXtype": "group",    //表单类型
      "resourcefieldCode": "group-holder2",  //表单model字段名称
      "resourcefieldName": "group",   //表单字段 lable 名称
      "isfieldRequired": false, //是否必填 required
      "resourcefieldBinding": null,//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": null,//验证字段的内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": null,//表单控件分支小类type,如input=>input-text,input-textere
        "min": undefined,//min
        "max": undefined,//max
      },
      "resourcefieldEmptytext": null,//placeholder的值
      "isResourcefieldRemoved": false,//是否禁用
      "isResourcefieldReadonly": false,//是否只读
      "fieldWidth": 900,//表单元素部分宽度
      "fieldHeight": null,//表单元素部分高度
      "resourcefieldStep": null,//step 步长
      "resourcefieldRowspan": 1,//row 值 - 所占 行数 （textarea / avatar / span ......）
      "resourcefieldFieldcls": null,//表单控件图标
      "isResourcefieldEditable": false,//是否可编辑
      "resourcefieldColspan": 2,//所占列数
      "items": null,//表单控件内容部分（checkbox，radio......）
      "resourcefieldGroupname": "group-addHolder2", //分组名称
      "isResourcefieldHidden": false,      //是否隐藏
      "resourcefieldBindingfnList": [],
      "resourcefieldConfiginfo": 2,//分组框内部最大列数
      "children": [
        //产权人 - select
        {
          "resourcefieldXtype": "select",    //表单类型
          "resourcefieldCode": "holder",  //表单model字段名称
          "resourcefieldName": "产权人",   //表单字段 lable 名称
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请输入产权人",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": 'number',//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "remote",//表单控件分支小类type,如input=>input-text,input-textere
            "thirdXtype": "customerSearch",//控件-业务划分 三级分类
            "dynamicUrl": "owner/customer/list-customer-search",
            "freedom": true,//el-form-item / cx-muster-item 自由宽度开关 （ 其宽度有实际子内容宽度决定，不再由基础最大宽度控制 ），浮动依次排列
            "min": undefined,//min
            "max": undefined,//max

          },
          "resourcefieldEmptytext": "请输入产权人",//placeholder的值
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
          "resourcefieldBindingfnList": ['change-customerSearchLinkage'],//事件名称集合
        },
        //新增 add - select
        {
          "resourcefieldXtype": "select",    //表单类型
          "resourcefieldCode": "addHolderInfo",  //表单model字段名称
          "resourcefieldName": "",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
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
        //删除 - button
        {
          "resourcefieldXtype": "button",    //表单类型
          "resourcefieldCode": "newDelHolder",  //表单model字段名称
          "resourcefieldName": "",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "label-width": 10,
            "freedom": true,//el-form-item / cx-muster-item 自由宽度开关 （ 其宽度有实际子内容宽度决定，不再由基础最大宽度控制 ），浮动依次排列
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 90,//表单元素部分宽度
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
          "resourcefieldBindingfnList": ["click-deleteGroup"],//事件名称集合
        },
        //与业主关系 - select
        {
          "resourcefieldXtype": "select",    //表单类型
          "resourcefieldCode": "relationship",  //表单model字段名称
          "resourcefieldName": "与业主关系",   //表单字段 lable 名称
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请选择与业主关系",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "label-width": 170,
            "secondXtype": "normal",//表单控件分支小类type,如input=>input-text,input-textere
            "freedom": true,//el-form-item / cx-muster-item 自由宽度开关 （ 其宽度有实际子内容宽度决定，不再由基础最大宽度控制 ），浮动依次排列
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": "请选择与业主关系",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 370,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
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
        //证件号码- input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "newHolderCertificate",  //表单model字段名称
          "resourcefieldName": "证件号码",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请输入证件号码",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
            "freedom": true,//el-form-item / cx-muster-item 自由宽度开关 （ 其宽度有实际子内容宽度决定，不再由基础最大宽度控制 ），浮动依次排列
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": "请输入证件号码",//placeholder的值
          "isResourcefieldRemoved": true,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
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
        //移动电话 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "holderMobile",  //表单model字段名称
          "resourcefieldName": "移动电话",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请输入移动电话",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "label-width": 350,
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
            "freedom": true,//el-form-item / cx-muster-item 自由宽度开关 （ 其宽度有实际子内容宽度决定，不再由基础最大宽度控制 ），浮动依次排列
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": "请输入移动电话",//placeholder的值
          "isResourcefieldRemoved": true,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 550,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
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
      ]
    }
  }
}

export default blendFixedMap;
