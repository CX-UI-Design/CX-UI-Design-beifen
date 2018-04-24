//code temple
export const code = {
  modification: '<template>\n' +
  '  <cx-auto-form autoFormID="dynamicFormTemplate"\n' +
  '                request-url="/mock/autoForm/template"\n' +
  '                :query="{}"\n' +
  '                :cover-data="coverData"\n' +
  '                cue-type="only-error"\n' +
  '                @afterRequest="afterRequest"\n' +
  '  ></cx-auto-form>\n' +
  '</template>\n' +
  '\n' +
  '<script>\n' +
  '  import pickerOptionsMap from \'../../static-data/form/picker-options\';//引入本地时间日期控件的修改配置\n' +
  '\n' +
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
  '          //覆盖属性-pickerOptions的属性值\n' +
  '          pickerOptions: {\n' +
  '            birthday: pickerOptionsMap[\'date-point\'].birthday,//修改出生日期的组件 pickerOptions的属性值（修改为只能获取当前时间点之前的时间）\n' +
  '          },\n' +
  '          //覆盖属性-宽度\n' +
  '          fieldWidth: {\n' +
  '            origin: 700,//覆盖改变 - 籍贯字段的组件 宽度为700\n' +
  '            nation: 700,//覆盖改变 - 民族字段的组件 宽度为700\n' +
  '          },\n' +
  '          //覆盖属性-所占列数\n' +
  '          resourcefieldColspan: {\n' +
  '            origin: 2,   //覆盖改变 - 籍贯字段的组件 所占列数为2\n' +
  '            nation: 2,   //覆盖改变 - 民族字段的组件 所占列数为2\n' +
  '          },\n' +
  '          //覆盖属性-请求地址\n' +
  '          dynamicUrl: {\n' +
  '            cardType: \'system/dictionary/select\', //修改证件类型组件的 请求地址\n' +
  '          },\n' +
  '          //覆盖属性-请求数据\n' +
  '          dynamicQuery: {\n' +
  '            cardType: \'cardType\',//修改证件类型组件的 请求数据\n' +
  '          },\n' +
  '          //覆盖属性-可清空功能\n' +
  '          clearable: {\n' +
  '            cardType: true,//开启证件类型组件的 可清空功能\n' +
  '          }\n' +
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
  '        data.modelData.origin = \'浙江-杭州\';//修改 origin 字段值为 \'浙江-杭州\'\n' +
  '      },\n' +
  '    }\n' +
  '  }\n' +
  '</script>\n',
}

export const tip = {
  modification: '书写格式：{\n' +
  '           xxx（ 属性名称 ）：{\n' +
  '           formitemkey（ 表单元素字段名，同 v-model字段名一致 ） ： value （ 值 ）\n' +
  '        }\n' +
  '}\n' +
  '只要这个属性名是可配置的，都可以修改，具体实现规则详见源码'
}
