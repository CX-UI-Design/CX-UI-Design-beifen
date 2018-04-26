//code temple
export const code = {
  Interacting: '<template>\n' +
  '  <div>\n' +
  '    <!-- 表单一 -->\n' +
  '    <cx-auto-form autoFormID="changedForm-man"\n' +
  '                  request-url="/mock/autoForm/changed"\n' +
  '                  :query="{id: \'man\'}"\n' +
  '                  :cover-data="coverData2"\n' +
  '                  cue-type="only-error"\n' +
  '                  @afterRequest="afterRequest1"\n' +
  '    >\n' +
  '      <!--按钮插槽模块-->\n' +
  '      <div slot="operation">\n' +
  '        <cx-auto-form-operation type="form" :buttonInfo="buttonInfo" autoFormID="changedForm-man"></cx-auto-form-operation>\n' +
  '      </div>\n' +
  '    </cx-auto-form>\n' +
  '    <!-- 表单二 -->\n' +
  '    <cx-auto-form autoFormID="changedForm-woman"\n' +
  '                  request-url="/mock/autoForm/changed"\n' +
  '                  :query="{id: \'woman\'}"\n' +
  '                  :cover-data="coverData2"\n' +
  '                  cue-type="only-error"\n' +
  '                  @afterRequest="afterRequest2"\n' +
  '    >\n' +
  '      <div slot="operation">\n' +
  '        <cx-auto-form-operation type="form" :buttonInfo="buttonInfo" autoFormID="changedForm-woman"></cx-auto-form-operation>\n' +
  '      </div>\n' +
  '    </cx-auto-form>\n' +
  '  </div>\n' +
  '</template>\n' +
  '\n' +
  '<script>\n' +
  '  import pickerOptionsMap from \'../../static-data/form/picker-options\';//引入本地时间日期控件的修改配置\n' +
  '\n' +
  '  export default {\n' +
  '    data() {\n' +
  '      return {\n' +
  '        //表单提交地址\n' +
  '        submitUrl: \'/mock/autoForm/submit\',\n' +
  '        //表单按钮信息\n' +
  '        buttonInfo: [\n' +
  '          {name: \'确定\', style: \'primary\', event: this.autoFormSubmit},\n' +
  '          {name: \'取消\', style: \'\', event: this.autoFormCancel},\n' +
  '        ],\n' +
  '        /* ===================== 覆盖/补充自动表单数据：=====================\n' +
  '          书写格式：{\n' +
  '             xxx（属性名称）：{\n' +
  '                 formitemkey（表单元素字段名，同v-model字段名一致） ： value （值）\n' +
  '             }\n' +
  '          }\n' +
  '          只要这个属性名是可配置的，都可以修改，具体实现规则详见源码\n' +
  '       * =================================================================\n' +
  '       */\n' +
  '        coverData2: {\n' +
  '          //覆盖属性-绑定事件\n' +
  '          resourcefieldBindingfnList: {\n' +
  '            sex: (params) => {\n' +
  '              //当事件为 \'change\' ，且不为 \'visibleChange\' 时\n' +
  '              if (params.type === \'change\' && params.type !== \'visibleChange\') {\n' +
  '                const val = params.formData.modelData[params.modelKey];\n' +
  '                //选择男性时\n' +
  '                if (val === \'0\') {\n' +
  '                  //销毁表单 \'changedForm-woman\'\n' +
  '                  this.$CX.autoForm.formController.delete(this, \'changedForm-woman\');\n' +
  '                  //注册表单 \'changedForm-man\'\n' +
  '                  this.$CX.autoForm.formController.set(this, \'changedForm-man\', {\n' +
  '                    show: true,\n' +
  '                  });\n' +
  '                }\n' +
  '                //选择女性时\n' +
  '                if (val === \'1\') {\n' +
  '                  //销毁表单 \'changedForm-man\'\n' +
  '                  this.$CX.autoForm.formController.delete(this, \'changedForm-man\');\n' +
  '                  //注册表单 \'changedForm-woman\'\n' +
  '                  this.$CX.autoForm.formController.set(this, \'changedForm-woman\', {\n' +
  '                    show: true,\n' +
  '                  })\n' +
  '                }\n' +
  '              }\n' +
  '            }\n' +
  '          },\n' +
  '        },\n' +
  '      }\n' +
  '    },\n' +
  '    created() {\n' +
  '      //注册渲染表单\n' +
  '      this.$CX.autoForm.formController.set(this, \'changedForm-man\', {\n' +
  '        show: true,\n' +
  '      })\n' +
  '    },\n' +
  '    methods: {\n' +
  '      //自动表单请求获取数据 之后 操作\n' +
  '      afterRequest1(vm, data) {\n' +
  '        //..............................  逻辑代码书写\n' +
  '        data.modelData.sex = \'0\';//修改 origin 字段值为 \'浙江-杭州\'\n' +
  '      },\n' +
  '      //自动表单请求获取数据 之后 操作\n' +
  '      afterRequest2(vm, data) {\n' +
  '        //..............................  逻辑代码书写\n' +
  '        data.modelData.sex = \'1\';//修改 origin 字段值为 \'浙江-杭州\'\n' +
  '      },\n' +
  '\n' +
  '      /**\n' +
  '       * auto-form submit  ( 提交按钮事件操作 )\n' +
  '       * @param vm\n' +
  '       * @param formName       button-info\n' +
  '       */\n' +
  '      autoFormSubmit(vm, formName) {\n' +
  '        this.formSubmitData = [];\n' +
  '        this.$CX.autoForm.validate(vm, formName).then(\n' +
  '          params => {\n' +
  '            this.formNotify(\'可在提交前注入交互行为\');\n' +
  '            //..............................  逻辑代码书写 ①\n' +
  '            const query = params.formData.modelData;\n' +
  '            //submit request\n' +
  '            this.$CX.autoForm.submit(this.submitUrl, query, () => {\n' +
  '              //..............................  逻辑代码书写 ②\n' +
  '              this.$message({message: \'保存成功\', type: \'success\', duration: 2000});\n' +
  '            })\n' +
  '          }\n' +
  '        ).catch(err => {\n' +
  '            //..............................  逻辑代码书写 ③\n' +
  '            console.log(err)\n' +
  '          }\n' +
  '        )\n' +
  '      },\n' +
  '      /**\n' +
  '       * auto-form Cancel  ( 取消按钮事件操作 )\n' +
  '       * @param vm\n' +
  '       * @param formName       button-info\n' +
  '       */\n' +
  '      autoFormCancel(vm, formName) {\n' +
  '        this.$CX.autoForm.resetForm(vm, formName).then(\n' +
  '          params => {\n' +
  '            this.formSubmitData = [];\n' +
  '            //..............................  逻辑代码书写 ①\n' +
  '            this.formNotify(\'可在重置前注入交互行为\');\n' +
  '            this.$message({message: \'重置成功\', type: \'success\', duration: 2000});\n' +
  '          }\n' +
  '        )\n' +
  '      },\n' +
  '      /**\n' +
  '       * form notify\n' +
  '       * @param msg\n' +
  '       */\n' +
  '      formNotify(msg) {\n' +
  '        const h = this.$createElement;\n' +
  '        this.$notify({\n' +
  '          title: \'注入交互行为\',\n' +
  '          message: h(\'i\', {style: \'color: teal\'}, msg)\n' +
  '        });\n' +
  '      }\n' +
  '    }\n' +
  '  }\n' +
  '</script>',
  event: '<template>\n' +
  '  <cx-auto-form autoFormID="formEventTemp"\n' +
  '                request-url="/mock/autoForm/event"\n' +
  '                :query="{}"\n' +
  '                :cover-data="coverData"\n' +
  '                cue-type="only-error"\n' +
  '  >\n' +
  '  </cx-auto-form>\n' +
  '</template>\n' +
  '\n' +
  '<script>\n' +
  '  export default {\n' +
  '    data() {\n' +
  '      return {\n' +
  '        /* ===================== 覆盖/补充自动表单数据：=====================\n' +
  '          书写格式：{\n' +
  '             xxx（属性名称）：{\n' +
  '                 formitemkey（表单元素字段名，同v-model字段名一致） ： value （值）\n' +
  '             }\n' +
  '          }\n' +
  '          只要这个属性名是可配置的，都可以修改，具体实现规则详见源码\n' +
  '       * =================================================================\n' +
  '       */\n' +
  '        coverData: {\n' +
  '          //覆盖属性-绑定事件\n' +
  '          resourcefieldBindingfnList: {\n' +
  '            //这里不用es6 箭头函数做示例，稍微复杂一点\n' +
  '            cardType: function (params) {\n' +
  '              //当事件为 \'change\' ，且不为 \'visibleChange\' 时\n' +
  '              if (params.type === \'change\' && params.type !== \'visibleChange\') {\n' +
  '                //获取this指向\n' +
  '                const _this = params.vm\n' +
  '                //获取我们在 created 钩子函数中存储的当前页面的实例对象\n' +
  '                const formVm = _this.$CX.autoForm.formerVm.get(_this, \'interacting-view\');\n' +
  '                //弹出提示\n' +
  '                formVm.formNotify(formVm, \'证件类型改变了，你也可以自行在其中加入表单交互的相关逻辑\')\n' +
  '              }\n' +
  '            }\n' +
  '          },\n' +
  '        },\n' +
  '      }\n' +
  '    },\n' +
  '    created() {\n' +
  '      //存储当前页面的实例对象\n' +
  '      this.$CX.autoForm.formerVm.set(this, \'interacting-view\', this);\n' +
  '      //注册表单 \'formEventTemp\'\n' +
  '      this.$CX.autoForm.formController.set(this, \'formEventTemp\', {\n' +
  '        show: true,\n' +
  '      })\n' +
  '    },\n' +
  '    methods: {\n' +
  '      /**\n' +
  '       * form notify\n' +
  '       * @param vm\n' +
  '       * @param msg\n' +
  '       */\n' +
  '      formNotify(vm, msg) {\n' +
  '        const h = vm.$createElement;\n' +
  '        vm.$notify({\n' +
  '          title: \'注入交互行为\',\n' +
  '          message: h(\'i\', {style: \'color: teal\'}, msg)\n' +
  '        });\n' +
  '      }\n' +
  '    }\n' +
  '  }\n' +
  '</script>\n'
}
export const tip = {
  event: '将项目中自定义的事件挂载到 组件插件的 formEvent 的属性上，即可在表单控件的事件上配置使用该方法\n' +
  '如: resourcefieldBindingfnList(该字段可改变):[\'temp\']\n' +
  'import CxEasyForm from \'cx-easy-form\';\n' +
  '\n' +
  '//add new event\n' +
  'let FormEvent = {\n' +
  '  temp: (params) => {\n' +
  '    console.log(params);\n' +
  '    const h = params.vm.$createElement;\n' +
  '    const msg = \'这是新加入的交互提示，你也可以自行在其中加入表单交互的相关逻辑\'\n' +
  '    params.vm.$notify({\n' +
  '      title: \'新的交互行为\',\n' +
  '      message: h(\'i\', {style: \'color: teal\'}, msg)\n' +
  '    });\n' +
  '  },\n' +
  '}\n' +
  '\n' +
  'Vue.use(CxEasyForm.body, {\n' +
  '  stageName: \'cx\',         //stage name\n' +
  '  formEvent: FormEvent,    //挂载方法\n' +
  '})'
}

// 将项目中自定义的事件挂载到 组件插件的 formEvent 的属性上，即可在表单控件的事件上配置使用该方法
// 如: resourcefieldBindingfnList(该字段可改变):['temp']
// import CxEasyForm from 'cx-easy-form';
//
// //add new event
// let FormEvent = {
//   temp: (params) => {
//     console.log(params);
//     const h = params.vm.$createElement;
//     const msg = '这是新加入的交互提示，你也可以自行在其中加入表单交互的相关逻辑'
//     params.vm.$notify({
//       title: '新的交互行为',
//       message: h('i', {style: 'color: teal'}, msg)
//     });
//   },
// }
//
// Vue.use(CxEasyForm.body, {
//   stageName: 'cx',         //stage name
//   formEvent: FormEvent,    //挂载方法
// })
