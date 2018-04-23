//code temple
export const code = {
  normal: "<template>\n" +
  "  <cx-input v-model=\"inputModel\" placeholder=\"请输入内容\" :width=\"200\" height=\"32px\"></cx-input>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "  export default {\n" +
  "    data() {\n" +
  "      return {\n" +
  "        inputModel: ''\n" +
  "      }\n" +
  "    },\n" +
  "  }\n" +
  "</script>",
  disabled: "<template>\n" +
  "  <cx-input v-model=\"inputModel\" placeholder=\"请输入内容\" :width=\"200\" :height=\"32\" disabled></cx-input>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "  export default {\n" +
  "    data() {\n" +
  "      return {\n" +
  "        inputModel: 'CX-UI Design'\n" +
  "      }\n" +
  "    },\n" +
  "  }\n" +
  "</script>",
  readonly: "<template>\n" +
  "  <cx-input v-model=\"inputModel\" placeholder=\"请输入内容\" :width=\"200\" readonly></cx-input>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "  export default {\n" +
  "    data() {\n" +
  "      return {\n" +
  "        inputModel: 'CX-UI Design'\n" +
  "      }\n" +
  "    },\n" +
  "  }\n" +
  "</script>",
  type: "<template>\n" +
  "  <div>\n" +
  "    <cx-input v-model=\"inputModel1\" placeholder=\"请输入内容\" type=\"textarea\" :width=\"600\" :height=\"64\" style=\"margin-bottom: 30px\"></cx-input>\n" +
  "    <cx-input v-model=\"inputModel2\" placeholder=\"请输入内容\" type=\"textarea\" :width=\"600\" :rows=\"5\" :minlength=\"10\" :maxlength=\"20\"></cx-input>\n" +
  "  </div>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "  export default {\n" +
  "    data() {\n" +
  "      return {\n" +
  "        inputModel1: '',\n" +
  "        inputModel2: ''\n" +
  "      }\n" +
  "    },\n" +
  "  }\n" +
  "</script>",
  icon: "<template>\n" +
  "  <div>\n" +
  "    <cx-input v-model=\"inputModel1\" placeholder=\"请输入内容\" :width=\"200\" customIcon=\"fangchan\"></cx-input>\n" +
  "    <cx-input v-model=\"inputModel2\" placeholder=\"请输入内容\" :width=\"200\" customIcon=\"baobiao\" @iconClick=\"iconClick(inputModel2)\"></cx-input>\n" +
  "  </div>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "  export default {\n" +
  "    data() {\n" +
  "      return {\n" +
  "        inputModel1: '',\n" +
  "        inputModel2: '点击图标事件'\n" +
  "      }\n" +
  "    },\n" +
  "    methods: {\n" +
  "      iconClick(value) {\n" +
  "        alert('this is input icon click, value is :' + value)\n" +
  "      }\n" +
  "    }\n" +
  "  }\n" +
  "</script>"
}
//data information
export const dataInfo = {
  inputModel1: '',
  inputModel2: 'CX-UI Design',
  inputModel3: 'CX-UI Design',
  inputModel4: '',
  inputModel5: '',
  inputModel6: '',
  inputModel7: '点击图标事件',
}
//attributes
export const attributes = [
  {attr: 'type', explain: '类型', type: 'string', value: 'text / textarea', default: 'text'},
  {attr: 'placeholder', explain: '输入框占位文本', type: 'string', value: '-', default: '-'},
  {attr: 'disabled', explain: '是否禁用', type: 'boolean', value: '-', default: 'false'},
  {attr: 'readonly', explain: '原生属性，是否只读', type: 'boolean', value: '-', default: 'false'},
  {attr: 'width', explain: 'Input 模块整体的宽度', type: 'string / number', value: '-', default: '100%'},
  {attr: 'height', explain: 'Input 模块整体的高度', type: 'string / number', value: '-', default: '32px / auto'},
  {attr: 'minlength', explain: '最小输入长度', type: 'number / string', value: '-', default: '-'},
  {attr: 'maxlength', explain: '最大输入长度', type: 'number / string', value: '-', default: '300'},
  {attr: 'customIcon', explain: '输入框尾部图标', type: 'string', value: '-', default: '-'},
  {attr: 'rows', explain: '输入框行数，只对 type="textarea" 有效', type: 'number', value: '-', default: '3'},
  {attr: 'name', explain: '原生属性', type: 'string', value: '-', default: '-'},
  {attr: 'autofocus', explain: '原生属性，自动获取焦点', type: 'boolean', value: 'true, false', default: 'false'},
  {attr: 'size', explain: '输入框尺寸，只在 type!="textarea" 时，且没有设置输入框高度的情况下有效,', type: 'string', value: 'medium / small / mini', default: '-'},
]
//events
export const events = [
  {event: 'change', explain: '当绑定值变化时触发的事件', callback: '(event: Event)'},
  {event: 'focus', explain: '在 Input 获得焦点时触发', callback: '(event: Event)'},
  {event: 'blur', explain: '在 Input 值改变时触发', callback: '(value: string | number)'},
  {event: 'iconClick', explain: '在 Input 图标点击时触发', callback: '(value: string | number)'},
]
