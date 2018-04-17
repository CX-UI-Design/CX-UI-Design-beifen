const sideBarData = {
  main: [
    //主页
    {
      "groupName": "主页",
      "icon": "shezhi-",
      "firstIndex": "1",
      "children": [
        {
          "id": "1-1",
          "groupName": "主页",
          "secondIndex": "1",
          "path": "/home/dashboard"
        },
      ]
    },
    {
      "groupName": "Basic",
      "icon": "shezhi-",
      "firstIndex": "2",
      "children": [
        {
          "id": "2-1",
          "groupName": "button",
          "secondIndex": "1",
          "path": "/Basic/buttonTest"
        },
        {
          "id": "2-2",
          "groupName": "Icon",
          "secondIndex": "2",
          "path": "/Basic/iconTest"
        }
      ]
    },
    {
      "groupName": "Form",
      "icon": "shezhi-",
      "firstIndex": "3",
      "children": [
        {
          "id": "3-1",
          "groupName": "radio",
          "secondIndex": "1",
          "path": "/Form/radioTest"
        },
        {
          "id": "3-2",
          "groupName": "checkbox",
          "secondIndex": "2",
          "path": "/Form/checkboxTest"
        },
        {
          "id": "3-3",
          "groupName": "select",
          "secondIndex": "3",
          "path": "/Form/selectTest"
        },
        {
          "id": "3-4",
          "groupName": "input",
          "secondIndex": "4",
          "path": "/Form/inputTest"
        },
        {
          "id": "3-5",
          "groupName": "cascader",
          "secondIndex": "5",
          "path": "/Form/cascaderTest"
        },
        {
          "id": "3-6",
          "groupName": "switch",
          "secondIndex": "6",
          "path": "/Form/switchTest"
        },
        {
          "id": "3-7",
          "groupName": "slider",
          "secondIndex": "7",
          "path": "/Form/sliderTest"
        },
        {
          "id": "3-8",
          "groupName": "form",
          "secondIndex": "8",
          "path": "/Form/formTest"
        }
      ]
    },
    {
      "groupName": "Data",
      "icon": "shezhi-",
      "firstIndex": "4",
      "children": [
        {
          "id": "4-1",
          "groupName": "progress",
          "secondIndex": "1",
          "path": "/Data/progressTest"
        },
        {
          "id": "4-2",
          "groupName": "badge",
          "secondIndex": "2",
          "path": "/Data/badgeTest"
        }
      ]
    },
    {
      "groupName": "Notice",
      "icon": "shezhi-",
      "firstIndex": "5",
      "children": [
        {
          "id": "5-1",
          "groupName": "alert",
          "secondIndex": "1",
          "path": "/Notice/alertTest"
        }
      ]
    },
    {
      "groupName": "Navigation",
      "icon": "shezhi-",
      "firstIndex": "6",
      "children": [
        {
          "id": "6-1",
          "groupName": "dropDown",
          "secondIndex": "1",
          "path": "/Navigation/dropDownTest"
        },
        {
          "id": "6-2",
          "groupName": "tabs",
          "secondIndex": "2",
          "path": "/Navigation/tabsTest"
        },
        {
          "id": "6-3",
          "groupName": "steps",
          "secondIndex": "3",
          "path": "/Navigation/stepsTest"
        }
      ]
    },
    {
      "groupName": "自动表单",
      "icon": "shezhi-",
      "firstIndex": "7",
      "children": [
        {
          "id": "7-1",
          "groupName": "说明",
          "secondIndex": "1",
          "path": "/autoForm/index"
        },
        {
          "id": "7-2",
          "groupName": "概览",
          "secondIndex": "2",
          "path": "/autoForm/overview"
        },
      ]
    }
  ],
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
