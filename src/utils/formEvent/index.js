import {invert} from '../index'

const FormEvent = {
  /**
   * group-witch (show or hide) for auto-form
   * @param params
   */
  groupSwitch: (params) => {
    const fieldsRefer = params.keyRefer.fields; //指代属性集合
    const initiator = 'separator';
    const formItem = params.formItem;
    //judge initiator is 'separator' or not ， because only 'separator' can handle form-items hide or show
    if (formItem[fieldsRefer["item-type"]] !== initiator) return;
    params.formItemFather.map((item, index) => {
      /*Exclude the object(initiator) whitch is handle(has clicked) itself by index, and target-groupname equals(is) initiator-groupname*/
      if (index !== params.index && item[fieldsRefer["group-name"]] === formItem[fieldsRefer["group-name"]]) {
        item[fieldsRefer["hidden"]] = invert(item[fieldsRefer["hidden"]]);
      }
    })
  },
  //在表单交互行为示例页面，作为典型案例
  eventTemp: (params) => {
    console.log(params);
    const h = params.vm.$createElement;
    const msg = '这是新加入的交互提示，你也可以自行在其中加入表单交互的相关逻辑'
    params.vm.$notify({
      title: '新的交互行为',
      message: h('i', {style: 'color: teal'}, msg)
    });
  }
}
export default FormEvent;
