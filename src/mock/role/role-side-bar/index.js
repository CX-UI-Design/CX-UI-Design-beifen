export const sideBarData = {
  main: [
    //更新日志
    {
      "groupName": "更新日志",
      "icon": "",
      "firstIndex": "1",
      "path": "/home/dashboard",
      "level": 1,
    },
    //开发指南
    {
      "groupName": "开发指南",
      "icon": "",
      "firstIndex": "2",
      "level": 2,
      "children": [
        {
          "groupName": "安装",
          "icon": "",
          "secondIndex": "1",
          "path": "/home/dashboard"
        },
        {
          "groupName": "快速上手",
          "icon": "",
          "secondIndex": "2",
          "path": "/home/dashboard"
        },
        {
          "groupName": "国际化",
          "icon": "",
          "secondIndex": "3",
          "path": "/home/dashboard"
        },
      ]
    },
    //总览
    {
      "groupName": "总览",
      "icon": "",
      "firstIndex": "3",
      "level": 2,
      "children": [
        {
          "groupName": "演示",
          "icon": "",
          "secondIndex": "1",
          "path": "/home/dashboard"
        },
        {
          "groupName": "快速构",
          "icon": "",
          "secondIndex": "2",
          "path": "/home/dashboard"
        },
      ]
    },
    //组件
    {
      "groupName": "组件",
      "icon": "",
      "firstIndex": "4",
      "level": 3,
      "children": [
        //Basic
        {
          "groupName": "Basic",
          "icon": "",
          "secondIndex": "1",
          "path": "/components/basic",
          "children": [
            {"groupName": "图标", "thirdIndex": "1", "path": "/components/basic/icon", "icon": ""},
            {"groupName": "按钮", "thirdIndex": "2", "path": "/components/basic/button", "icon": ""},
          ]
        },
        //normal
        {
          "groupName": "normal",
          "secondIndex": "2",
          "path": "/components/normal",
          "children": [
            {"groupName": "Radio 单选框", "thirdIndex": "1", "path": "/components/normal/radio", "icon": ""},
            {"groupName": "Checkbox 多选框", "thirdIndex": "2", "path": "/components/normal/checkbox", "icon": "",},
            {"groupName": "Input 输入框", "thirdIndex": "3", "path": "/components/normal/input", "icon": "",},
            {"groupName": "Select 选择器", "thirdIndex": "4", "path": "/components/normal/select", "icon": "",},
            {"groupName": "Cascader 级联选择器", "thirdIndex": "5", "path": "/components/normal/cascader", "icon": "",},
            {"groupName": "Switch 开关", "thirdIndex": "6", "path": "/components/normal/switch", "icon": "",},
            {"groupName": "Slider 滑块", "thirdIndex": "7", "path": "/components/normal/slider", "icon": "",},
            {"groupName": "TimePicker 时间选择器", "thirdIndex": "8", "path": "/components/normal/timePicker", "icon": "",},
            {"groupName": "DatePicker 日期选择器", "thirdIndex": "9", "path": "/components/normal/datePicker", "icon": "",},
            {"groupName": "DateTimePicker 日期时间选择器", "thirdIndex": "10", "path": "/components/normal/dateTimePicker", "icon": "",},
            {"groupName": "Upload 上传", "thirdIndex": "11", "path": "/components/normal/upload", "icon": "",},
            {"groupName": "Transfer 穿梭框", "thirdIndex": "12", "path": "/components/normal/transfer", "icon": "",},
          ]
        },
        //extra
        {
          "groupName": "extra",
          "secondIndex": "3",
          "path": "/components/extra",
          "children": [
            {"groupName": "Avatar 头像图片", "thirdIndex": "1", "path": "/components/extra/avatar", "icon": ""},
            {"groupName": "Separator 分割操作线", "thirdIndex": "2", "path": "/components/extra/separator", "icon": ""},
            {"groupName": "base-table 基础表单", "thirdIndex": "3", "path": "/components/extra/base-table", "icon": ""},
            {"groupName": "Text 文字标签", "thirdIndex": "4", "path": "/components/extra/text", "icon": ""},
          ]
        },
        //business
        {
          "groupName": "business",
          "secondIndex": "4",
          "path": "/components/business",
          "children": [
            {"groupName": "Role-check-btn 按钮权限", "thirdIndex": "1", "path": "/components/business/role-check-btn", "icon": ""},
            {"groupName": "Role-manage-range 数据权限范围", "thirdIndex": "2", "path": "/components/business/role-manage-range", "icon": ""},
            {"groupName": "Role-employee 员工角色", "thirdIndex": "3", "path": "/components/business/role-employee", "icon": ""},
            {"groupName": "Role-group 角色组操作", "thirdIndex": "4", "path": "/components/business/role-group", "icon": ""},
            {"groupName": "Role-authorizer 授权人操作", "thirdIndex": "5", "path": "/components/business/role-authorizer", "icon": ""},
            {"groupName": "Simple-tree 简单树状组件", "thirdIndex": "6", "path": "/components/business/simple-tree", "icon": ""},
            {"groupName": "Simple-tree-select 下拉内置树状组件", "thirdIndex": "7", "path": "/components/business/simple-tree-select", "icon": ""},
            {"groupName": "Area-linkage 地域选择", "thirdIndex": "8", "path": "/components/business/area-linkage", "icon": ""},
            {"groupName": "Customer-info-linkage 选人信息联动", "thirdIndex": "9", "path": "/components/business/customer-info-linkage", "icon": ""},
            {"groupName": "Customer-info-single 搜索选人", "thirdIndex": "10", "path": "/components/business/customer-info-single", "icon": ""},
            {"groupName": "Time-interval 时间频率", "thirdIndex": "11", "path": "/components/business/time-interval", "icon": ""},
          ]
        },
        //Other
        {
          "groupName": "Other",
          "icon": "",
          "secondIndex": "5",
          "path": "/components/other",
          "children": [
            {"groupName": "Dialog 对话框", "thirdIndex": "1", "path": "/components/other/dialog", "icon": ""},
          ]
        },
        //Form
        {
          "groupName": "form",
          "icon": "",
          "secondIndex": "6",
          "path": "/components/form",
          "children": [
            {"groupName": "动/静态数据表单", "thirdIndex": "1", "path": "/components/form/dynamicAndLocal", "icon": ""},
            {"groupName": "表单数据修改", "thirdIndex": "2", "path": "/components/form/modify", "icon": ""},
            {"groupName": "表单行为交互", "thirdIndex": "3", "path": "/components/form/interacting", "icon": ""},
            {"groupName": "提交与重置", "thirdIndex": "4", "path": "/components/form/submitAndReset", "icon": ""},
          ]
        },
      ]
    },

    {
      "groupName": "自动表单",
      "icon": "",
      "firstIndex": "5",
      "level": 2,
      "children": [
        {
          "groupName": "说明",
          "icon": "",
          "secondIndex": "1",
          "path": "/autoForm/index"
        },
        {
          "groupName": "概览",
          "icon": "",
          "secondIndex": "2",
          "path": "/autoForm/overview"
        },
      ]
    }
  ]
}


export default {
  sidebar: config => {
    return {
      "resultCode": "200",
      "resultMsg": "操作成功。",
      "resultData": sideBarData.main
    }
  },
}

// //主页
// {
//   "groupName": "主页",
//   "icon": "",
//   "firstIndex": "1",
//   "children": [
//   {
//     "id": "1-1",
//     "groupName": "主页",
//     "secondIndex": "1",
//     "path": "/home/dashboard"
//   },
// ]
// },
// {
//   "groupName": "Basic",
//   "icon": "",
//   "firstIndex": "2",
//   "children": [
//   {
//     "id": "2-1",
//     "groupName": "button",
//     "secondIndex": "1",
//     "path": "/Basic/buttonTest"
//   },
//   {
//     "id": "2-2",
//     "groupName": "Icon",
//     "secondIndex": "2",
//     "path": "/Basic/iconTest"
//   }
// ]
// },
// {
//   "groupName": "Form",
//   "icon": "",
//   "firstIndex": "3",
//   "children": [
//   {
//     "id": "3-1",
//     "groupName": "radio",
//     "secondIndex": "1",
//     "path": "/Form/radioTest"
//   },
//   {
//     "id": "3-2",
//     "groupName": "checkbox",
//     "secondIndex": "2",
//     "path": "/Form/checkboxTest"
//   },
//   {
//     "id": "3-3",
//     "groupName": "select",
//     "secondIndex": "3",
//     "path": "/Form/selectTest"
//   },
//   {
//     "id": "3-4",
//     "groupName": "input",
//     "secondIndex": "4",
//     "path": "/Form/inputTest"
//   },
//   {
//     "id": "3-5",
//     "groupName": "cascader",
//     "secondIndex": "5",
//     "path": "/Form/cascaderTest"
//   },
//   {
//     "id": "3-6",
//     "groupName": "switch",
//     "secondIndex": "6",
//     "path": "/Form/switchTest"
//   },
//   {
//     "id": "3-7",
//     "groupName": "slider",
//     "secondIndex": "7",
//     "path": "/Form/sliderTest"
//   },
//   {
//     "id": "3-8",
//     "groupName": "form",
//     "secondIndex": "8",
//     "path": "/Form/formTest"
//   }
// ]
// },
// {
//   "groupName": "Data",
//   "icon": "",
//   "firstIndex": "4",
//   "children": [
//   {
//     "id": "4-1",
//     "groupName": "progress",
//     "secondIndex": "1",
//     "path": "/Data/progressTest"
//   },
//   {
//     "id": "4-2",
//     "groupName": "badge",
//     "secondIndex": "2",
//     "path": "/Data/badgeTest"
//   }
// ]
// },
// {
//   "groupName": "Notice",
//   "icon": "",
//   "firstIndex": "5",
//   "children": [
//   {
//     "id": "5-1",
//     "groupName": "alert",
//     "secondIndex": "1",
//     "path": "/Notice/alertTest"
//   }
// ]
// },
// {
//   "groupName": "Navigation",
//   "icon": "",
//   "firstIndex": "6",
//   "children": [
//   {
//     "id": "6-1",
//     "groupName": "dropDown",
//     "secondIndex": "1",
//     "path": "/Navigation/dropDownTest"
//   },
//   {
//     "id": "6-2",
//     "groupName": "tabs",
//     "secondIndex": "2",
//     "path": "/Navigation/tabsTest"
//   },
//   {
//     "id": "6-3",
//     "groupName": "steps",
//     "secondIndex": "3",
//     "path": "/Navigation/stepsTest"
//   }
// ]
// },
