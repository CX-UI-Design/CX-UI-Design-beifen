const sideBarData = {
  main: [
    //更新日志
    {
      "groupName": "更新日志",
      "icon": "shezhi-",
      "firstIndex": "1",
      "path": "/home/dashboard",
      "level": 1,
    },
    //开发指南
    {
      "groupName": "开发指南",
      "icon": "shezhi-",
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
      "icon": "shezhi-",
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
      "icon": "shezhi-",
      "firstIndex": "4",
      "level": 3,
      "children": [
        //Basic
        {
          "groupName": "Basic",
          "icon": "",
          "secondIndex": "1",
          "path": "/home/dashboard",
          "children": [
            {
              "groupName": "图标",
              "icon": "",
              "thirdIndex": "1",
              "path": "/home/dashboard",
            },
            {
              "groupName": "按钮",
              "icon": "",
              "thirdIndex": "2",
              "path": "/home/dashboard"
            },
          ]
        },
        //normal
        {
          "groupName": "normal",
          "secondIndex": "2",
          "path": "/home/dashboard",
          "children": [
            {
              "groupName": "图标",
              "icon": "",
              "thirdIndex": "1",
              "path": "/home/dashboard",
            },
            {
              "groupName": "按钮",
              "icon": "",
              "thirdIndex": "2",
              "path": "/home/dashboard"
            },
          ]
        }
      ]
    },

    {
      "groupName": "自动表单",
      "icon": "shezhi-",
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
//   "icon": "shezhi-",
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
//   "icon": "shezhi-",
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
//   "icon": "shezhi-",
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
//   "icon": "shezhi-",
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
//   "icon": "shezhi-",
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
//   "icon": "shezhi-",
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
