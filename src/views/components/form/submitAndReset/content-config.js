//code temple
export const code = {
  main: '<template>\n' +
  '  <div>\n' +
  '    <cx-auto-form autoFormID="dynamicFormTemplate"\n' +
  '                  request-url="/mock/autoForm/template"\n' +
  '                  :query="{}"\n' +
  '                  :cover-data="coverData"\n' +
  '                  cue-type="only-error"\n' +
  '                  @afterRequest="afterRequest"\n' +
  '    ></cx-auto-form>\n' +
  '    <!--button handle-->\n' +
  '    <cx-auto-form-operation type="form" :buttonInfo="buttonInfo" autoFormID="dynamicFormTemplate">\n' +
  '    </cx-auto-form-operation>\n' +
  '  </div>\n' +
  '</template>\n' +
  '\n' +
  '<script>\n' +
  '  import pickerOptionsMap from \'../../static-data/form/picker-options\';//引入本地时间日期控件的修改配置\n' +
  '\n' +
  '  export default {\n' +
  '    data() {\n' +
  '      return {\n' +
  '        //表单提交的请求地址\n' +
  '        submitUrl: \'/mock/autoForm/submit\',\n' +
  '        //表单表单按钮信息\n' +
  '        buttonInfo: [\n' +
  '          {name: \'确定\', style: \'primary\', event: this.autoFormSubmit},\n' +
  '          {name: \'取消\', style: \'\', event: this.autoFormCancel},\n' +
  '        ],\n' +
  '        //表单覆盖数据或方法\n' +
  '        coverData: {\n' +
  '          pickerOptions: {\n' +
  '            birthday: pickerOptionsMap[\'date-point\'].birthday,\n' +
  '          },\n' +
  '        },\n' +
  '      }\n' +
  '    },\n' +
  '    created() {\n' +
  '      //注册渲染表单\n' +
  '      this.$CX.autoForm.formController.set(this, \'dynamicFormTemplate\', {\n' +
  '        show: true,\n' +
  '      });\n' +
  '    },\n' +
  '    methods: {\n' +
  '      //自动表单请求获取数据之后操作\n' +
  '      afterRequest(vm, data) {\n' +
  '        //..............................  逻辑代码书写 ①\n' +
  '      },\n' +
  '      /**\n' +
  '       * auto-form submit  ( 提交按钮事件操作 )\n' +
  '       * @param vm\n' +
  '       * @param formName       button-info\n' +
  '       */\n' +
  '      autoFormSubmit(vm, formName) {\n' +
  '        this.$CX.autoForm.validate(vm, formName).then(\n' +
  '          params => {\n' +
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
  '            //..............................  逻辑代码书写 ①\n' +
  '            this.$message({message: \'重置成功\', type: \'success\', duration: 2000});\n' +
  '          }\n' +
  '        )\n' +
  '      },\n' +
  '    }\n' +
  '  }\n' +
  '</script>\n' +
  '\n' +
  '<style rel="stylesheet/scss" lang="scss">\n' +
  '\n' +
  '</style>\n'
}

