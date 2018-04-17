import Mock from "mockjs";
import * as store from "@/utils/nsQuery/nsStore"
import {errorMap} from "../../error/error"

/*
* 字段解释
* resourcebuttonCode - 按钮编码
* resourcebuttonName - 按钮名称
* resourcebuttonNameEn - 按钮英文名称
* resourcebuttonType - 按钮类型
* syOrderindex - 排序号
* */
const roleMap = {
  buttonList: {
    "resultCode": "200",
    "resultMsg": "操作成功。",
    "resultData": [
      //ACTION 类型按钮
      {resourcebuttonCode: 'actionAddBtn', resourcebuttonName: '新增', resourcebuttonNameEn: '', resourcebuttonType: 'ACTION', resourcebuttonBigiconcls: 'single', syOrderindex: 1},
      {resourcebuttonCode: 'actionRemoveBtn', resourcebuttonName: '删除', resourcebuttonNameEn: '', resourcebuttonType: 'ACTION', resourcebuttonBigiconcls: 'single', syOrderindex: 2},
      {resourcebuttonCode: 'actionEditBtn', resourcebuttonName: '批量删除', resourcebuttonNameEn: '', resourcebuttonType: 'ACTION', resourcebuttonBigiconcls: 'single', syOrderindex: 4},

      {resourcebuttonCode: 'actionSearchBtn', resourcebuttonName: '查询', resourcebuttonNameEn: '', resourcebuttonType: 'ACTION', resourcebuttonBigiconcls: 'single', syOrderindex: 5},

      {resourcebuttonCode: 'actionBatchRemoveBtn', resourcebuttonName: '编辑', resourcebuttonNameEn: '', resourcebuttonType: 'ACTION', resourcebuttonBigiconcls: 'single', syOrderindex: 6},
      {resourcebuttonCode: 'actionSubmitBtn', resourcebuttonName: '提交', resourcebuttonNameEn: 'submit', resourcebuttonType: 'ACTION', resourcebuttonBigiconcls: 'single', syOrderindex: 7},
      {resourcebuttonCode: 'actionSubmitBtn', resourcebuttonName: '提交', resourcebuttonNameEn: 'submit', resourcebuttonType: 'ACTION', resourcebuttonBigiconcls: 'single', syOrderindex: 8},
      //GRID 类型按钮
      {resourcebuttonCode: 'gridAddBtn', resourcebuttonName: '新增', resourcebuttonNameEn: 'submit', resourcebuttonType: 'GRID', resourcebuttonBigiconcls: 'single', syOrderindex: 1},
      {resourcebuttonCode: 'gridRemoveBtn', resourcebuttonName: '删除', resourcebuttonNameEn: 'submit', resourcebuttonType: 'GRID', resourcebuttonBigiconcls: 'single', syOrderindex: 2},
      {resourcebuttonCode: 'gridEditBtn', resourcebuttonName: '编辑', resourcebuttonNameEn: 'submit', resourcebuttonType: 'GRID', resourcebuttonBigiconcls: 'single', syOrderindex: 3},
      {resourcebuttonCode: 'gridSeeBtn', resourcebuttonName: '查看', resourcebuttonNameEn: 'submit', resourcebuttonType: 'GRID', resourcebuttonBigiconcls: 'single', syOrderindex: 4},
      {resourcebuttonCode: 'actionSubmitBtn', resourcebuttonName: '提交', resourcebuttonNameEn: 'submit', resourcebuttonType: 'GRID', resourcebuttonBigiconcls: 'single', syOrderindex: 5},
      {resourcebuttonCode: 'actionSubmitBtn', resourcebuttonName: '提交', resourcebuttonNameEn: 'submit', resourcebuttonType: 'GRID', resourcebuttonBigiconcls: 'single', syOrderindex: 6},
      //FORM 类型按钮
      {resourcebuttonCode: 'formConfirmBtn', resourcebuttonName: '确定', resourcebuttonNameEn: 'submit', resourcebuttonType: 'FORM', resourcebuttonBigiconcls: 'single', syOrderindex: 1},
      {resourcebuttonCode: 'formCancelBtn', resourcebuttonName: '取消', resourcebuttonNameEn: 'submit', resourcebuttonType: 'FORM', resourcebuttonBigiconcls: 'single', syOrderindex: 2},
      {resourcebuttonCode: 'formEditBtn', resourcebuttonName: '编辑', resourcebuttonNameEn: 'submit', resourcebuttonType: 'FORM', resourcebuttonBigiconcls: 'single', syOrderindex: 3},


    ]
  }
}
export default {
  buttonList: config => {
    const funcId = store.funcId.get();
    if (funcId) {
      return roleMap.buttonList;
    }
    else {
      return errorMap.role.roleButtonList;
    }

  },

}
