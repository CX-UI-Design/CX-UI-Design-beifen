// 菜单栏本地数据
export default {
  main: [
    //主页
    {
      "funcId": 'index',
      "menuMenuname": "管理",
      "menuMenusubname": "home",
      "menuIconcls": "gailan-",
      "syOrderindex": "0",
      "childMenus": [
        {
          "funcId": 1,
          "menuMenuname": "主页",
          "menuMenusubname": "dashboard",
          "menuIconcls": null,
          "syOrderindex": "1"
        }
      ]
    },
    //业户
    {
      "funcId": 'owner',
      "menuMenuname": "业户",
      "menuMenusubname": "owner",
      "menuIconcls": "fangchan",
      "syOrderindex": "1",
      "childMenus": [
        {
          "funcId": "RplXtNfjaiYzi40LZQM",
          "menuMenuname": "房产管理",
          "menuMenusubname": "houseManagement",
          "menuIconcls": null,
          "syOrderindex": "1"
        },
        {
          "funcId": "yvtmxbbP1Uvyw4aew1l",
          "menuMenuname": "客户管理",
          "menuMenusubname": "customerManagement",
          "menuIconcls": null,
          "syOrderindex": "2"
        },
        {
          "funcId": "ctSP2CVb8C7n4oHBrM8",
          "menuMenuname": "售楼管理",
          "menuMenusubname": "salesHouseRegister",
          "menuIconcls": null,
          "syOrderindex": "3"
        },
        {
          "funcId": "kiYHvxxMF35FhPbElEt",
          "menuMenuname": "收房管理",
          "menuMenusubname": "receiveHouseManagement",
          "menuIconcls": null,
          "syOrderindex": "4"
        },
        {
          "funcId": "vdzgR4RlUmLWQM4t3Ty",
          "menuMenuname": "装修管理",
          "menuMenusubname": "decorationManagement",
          "menuIconcls": null,
          "syOrderindex": "5"
        },
        {
          "funcId": "SvN6NzPXy3tn1HC1QNn",
          "menuMenuname": "入住管理",
          "menuMenusubname": "liveManagement",
          "menuIconcls": null,
          "syOrderindex": "6"
        },
        {
          "funcId": "jEPUz2IsbrpbTF0H4JO",
          "menuMenuname": "出租管理",
          "menuMenusubname": "leaseManagement",
          "menuIconcls": null,
          "syOrderindex": "7"
        },
        {
          "funcId": "YPzKQYdkSpylirYTFaH",
          "menuMenuname": "车辆管理",
          "menuMenusubname": "carManagement",
          "menuIconcls": null,
          "syOrderindex": "8"
        },
      ]
    },
    //报表中心
    {
      "funcId": 5,
      "menuMenuname": "报表中心",
      "menuMenusubname": "reporting",
      "menuIconcls": "shezhi-",
      "syOrderindex": "2",
      "childMenus": [
        {
          "funcId": 1,
          "menuMenuname": "房产信息",
          "menuMenusubname": "houseInfoReport",
          "menuIconcls": null,
          "syOrderindex": "1"
        },
        {
          "funcId": 2,
          "menuMenuname": "变动信息",
          "menuMenusubname": "changeInfoReport",
          "menuIconcls": null,
          "syOrderindex": "2"
        },
      ]
    },
    //系统
    {
      "funcId": 'system',
      "menuMenuname": "系统",
      "menuMenusubname": "system",
      "menuIconcls": "shezhi-",
      "syOrderindex": "3",
      "childMenus": [
        {
          "funcId": 'QEPbzP61apaxqC34rp5',
          "menuMenuname": "角色与权限",
          "menuMenusubname": "systemRolePermission",
          "menuIconcls": null,
          "syOrderindex": "1"
        },
        {
          "funcId": '2DEJjvjOcDM5caR4bce',
          "menuMenuname": "部门员工",
          "menuMenusubname": "systemOrgEmployee",
          "menuIconcls": null,
          "syOrderindex": "2"
        },
        {
          "funcId": 'cpZKRalyjMljdbsgAC4',
          "menuMenuname": "数据字典",
          "menuMenusubname": "systemDataDictionary",
          "menuIconcls": null,
          "syOrderindex": "3"
        },
        {
          "funcId": 'V7bSlogvocamZ5cK23j',
          "menuMenuname": "设计同步",
          "menuMenusubname": "designSync",
          "menuIconcls": null,
          "syOrderindex": "4"
        }
      ]
    },
  ],
  debug: [
    //自动表单
    {
      "funcId": "form-template",
      "menuMenuname": "自动表单",
      "menuMenusubname": "template",
      "menuIconcls": "bianji-",
      "syOrderindex": "90",
      "childMenus": [
        {
          "funcId": "autoFormTemplate",
          "menuMenuname": "自动表单",
          "menuMenusubname": "form/autoForm",
          "menuIconcls": null,
          "syOrderindex": "1"
        },
        {
          "funcId": "autoFormBreak",
          "menuMenuname": "分离动静表单",
          "menuMenusubname": "form/autoFormBreak",
          "menuIconcls": null,
          "syOrderindex": "2"
        },
        {
          "funcId": "blendAutoForm",
          "menuMenuname": "混合表单",
          "menuMenusubname": "form/blendAutoForm",
          "menuIconcls": null,
          "syOrderindex": "3"
        },
        {
          "funcId": "autoFormCheck",
          "menuMenuname": "表单数据检测",
          "menuMenusubname": "form/autoFormCheck",
          "menuIconcls": null,
          "syOrderindex": "4"
        },
        {
          "funcId": "form-template--addAuthorizer",
          "menuMenuname": "穿梭框控件",
          "menuMenusubname": "form/addAuthorizer",
          "menuIconcls": null,
          "syOrderindex": "5"
        },
        {
          "funcId": "form-template-roleGroup",
          "menuMenuname": "角色组控件",
          "menuMenusubname": "form/roleGroupTemp",
          "menuIconcls": null,
          "syOrderindex": "6"
        },
        {
          "funcId": "form-template-customerInfoTemp",
          "menuMenuname": "查询选人控件",
          "menuMenusubname": "form/customerInfoTemp",
          "menuIconcls": null,
          "syOrderindex": "7"
        },
        {
          "funcId": "form-template-baseTableTemp",
          "menuMenuname": "表格组件示例",
          "menuMenusubname": "form/baseTableTemp",
          "menuIconcls": null,
          "syOrderindex": "8"
        },
        {
          "funcId": "form-template-areaLinkageTemp",
          "menuMenuname": "区域选择控件",
          "menuMenusubname": "form/areaLinkageTemp",
          "menuIconcls": null,
          "syOrderindex": "9"
        },
        {
          "funcId": "form-template-roleFnBtnTemp",
          "menuMenuname": "功能菜单按钮",
          "menuMenusubname": "form/roleFnBtnTemp",
          "menuIconcls": null,
          "syOrderindex": "10"
        },
        {
          "funcId": "form-template-roleOrganizationTemp",
          "menuMenuname": "组织树形下拉",
          "menuMenusubname": "form/roleOrganizationTemp",
          "menuIconcls": null,
          "syOrderindex": "11"
        },

        {
          "funcId": "form-template-testTemp",
          "menuMenuname": "测试演示",
          "menuMenusubname": "form/testTemp",
          "menuIconcls": null,
          "syOrderindex": "12"
        },


        {
          "funcId": "base-input",
          "menuMenuname": "基础-input",
          "menuMenusubname": "form/formInput",
          "menuIconcls": null,
          "syOrderindex": "13"
        },
        {
          "funcId": "base-other",
          "menuMenuname": "基础-other",
          "menuMenusubname": "form/formOther",
          "menuIconcls": null,
          "syOrderindex": "14"
        },
        {
          "funcId": "musterItems",
          "menuMenuname": "item三合一",
          "menuMenusubname": "form/musterItems",
          "menuIconcls": null,
          "syOrderindex": "15"
        },
        {
          "funcId": 'dynamicAndLocal-Select',
          "menuMenuname": "动态-Select",
          "menuMenusubname": "form/select-dynamicAndLocal",
          "menuIconcls": null,
          "syOrderindex": "16"
        }
      ]
    },
    //other
    {
      "funcId": "other-template",
      "menuMenuname": "辅助示例",
      "menuMenusubname": "template",
      "menuIconcls": "bianji-",
      "syOrderindex": "91",
      "childMenus": [
        {
          "funcId": "genertorLpolling",
          "menuMenuname": "senior-async",
          "menuMenusubname": "other/genertorLpolling",
          "menuIconcls": null,
          "syOrderindex": "1"
        },
        {
          "funcId": "decorators",
          "menuMenuname": "decorators",
          "menuMenusubname": "other/decorators",
          "menuIconcls": null,
          "syOrderindex": "2"
        },
      ]
    },
    //review
    {
      "funcId": "review",
      "menuMenuname": "review",
      "menuMenusubname": "template",
      "menuIconcls": "shoufeicopy",
      "syOrderindex": "92",
      "childMenus": [
        {
          "funcId": "web1",
          "menuMenuname": "web1",
          "menuMenusubname": "review/web1",
          "menuIconcls": null,
          "syOrderindex": "1"
        },
        {
          "funcId": "web",
          "menuMenuname": "web",
          "menuMenusubname": "review/web",
          "menuIconcls": null,
          "syOrderindex": "2"
        },
        {
          "funcId": "muBan",
          "menuMenuname": "muBan",
          "menuMenusubname": "review/muBan",
          "menuIconcls": null,
          "syOrderindex": "3"
        }
      ]
    },
    //test
    {
      "funcId": "template",
      "menuMenuname": "测试",
      "menuMenusubname": "template",
      "menuIconcls": "",
      "syOrderindex": "93",
      "childMenus": [
        {
          "funcId": 'test1',
          "menuMenuname": "测试页面1",
          "menuMenusubname": "test/test1",
          "menuIconcls": null,
          "syOrderindex": "1"
        },
        {
          "funcId": 'test2',
          "menuMenuname": "测试页面2",
          "menuMenusubname": "test/test2",
          "menuIconcls": null,
          "syOrderindex": "2"
        },
        {
          "funcId": 'test3',
          "menuMenuname": "测试页面3",
          "menuMenusubname": "test/test3",
          "menuIconcls": null,
          "syOrderindex": "3"
        },
        {
          "funcId": 'test4',
          "menuMenuname": "测试页面4",
          "menuMenusubname": "test/test4",
          "menuIconcls": null,
          "syOrderindex": "4"
        },
        {
          "funcId": 'test5',
          "menuMenuname": "测试页面5",
          "menuMenusubname": "test/test5",
          "menuIconcls": null,
          "syOrderindex": "5"
        },
        {
          "funcId": 'test6',
          "menuMenuname": "测试页面6",
          "menuMenusubname": "test/test6",
          "menuIconcls": null,
          "syOrderindex": "6"
        },
        {
          "funcId": 'test7',
          "menuMenuname": "测试页面7",
          "menuMenusubname": "test/test7",
          "menuIconcls": null,
          "syOrderindex": "7"
        },
        {
          "funcId": 'test8',
          "menuMenuname": "测试页面8",
          "menuMenusubname": "test/test8",
          "menuIconcls": null,
          "syOrderindex": "8"
        },
        {
          "funcId": 'test9',
          "menuMenuname": "测试页面9",
          "menuMenusubname": "test/test9",
          "menuIconcls": null,
          "syOrderindex": "9"
        },
        {
          "funcId": 'test10',
          "menuMenuname": "测试页面10",
          "menuMenusubname": "test/test10",
          "menuIconcls": null,
          "syOrderindex": "10"
        },
        {
          "funcId": 'test11',
          "menuMenuname": "测试页面11",
          "menuMenusubname": "test/test11",
          "menuIconcls": null,
          "syOrderindex": "11"
        },
        {
          "funcId": 'test12',
          "menuMenuname": "测试页面12",
          "menuMenusubname": "test/test12",
          "menuIconcls": null,
          "syOrderindex": "12"
        },
        {
          "funcId": 'test13',
          "menuMenuname": "测试页面13",
          "menuMenusubname": "test/test13",
          "menuIconcls": null,
          "syOrderindex": "13"
        },
      ]
    },
  ]
}
