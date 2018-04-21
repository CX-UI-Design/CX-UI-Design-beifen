//code temple
export const code = {
  normal: "<template>\n" +
  "  <cx-checkbox v-model=\"checkboxModel\" :items=\"checkboxItem\"></cx-checkbox>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "  export default {\n" +
  "    data() {\n" +
  "      return {\n" +
  "        checkboxModel: ['item1'],\n" +
  "        checkboxItem: [\n" +
  "          {label: '选项一', value: 'item1', disabled: false},\n" +
  "          {label: '选项二', value: 'item2', disabled: false},\n" +
  "          {label: '选项三', value: 'item3', disabled: false}\n" +
  "        ],\n" +
  "      }\n" +
  "    },\n" +
  "  }\n" +
  "</script>",
  disabled: "<template>\n" +
  "  <cx-checkbox v-model=\"checkboxModel1\" :items=\"checkboxItem1\"></cx-checkbox>\n" +
  "  <cx-checkbox v-model=\"checkboxModel2\" :items=\"checkboxItem2\" disabled></cx-checkbox>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "  export default {\n" +
  "    data() {\n" +
  "      return {\n" +
  "        checkboxModel1: ['item1'],\n" +
  "        checkboxModel2: ['item1'],\n" +
  "        checkboxItem1: [\n" +
  "          {label: '选项一', value: 'item1', disabled: false},\n" +
  "          {label: '选项二', value: 'item2', disabled: true},\n" +
  "          {label: '选项三', value: 'item3', disabled: false}\n" +
  "        ],\n" +
  "        checkboxItem2: [\n" +
  "          {label: '选项一', value: 'item1', disabled: false},\n" +
  "          {label: '选项二', value: 'item2', disabled: false},\n" +
  "          {label: '选项三', value: 'item3', disabled: false}\n" +
  "        ],\n" +
  "      }\n" +
  "    },\n" +
  "  }\n" +
  "</script>",
  type: "<template>\n" +
  "  <cx-checkbox v-model=\"checkboxModel\" :items=\"checkboxItem\" type=\"button\"></cx-checkbox>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "  export default {\n" +
  "    data() {\n" +
  "      return {\n" +
  "        checkboxModel: ['item1'],\n" +
  "        checkboxItem: [\n" +
  "          {label: '选项一', value: 'item1', disabled: false},\n" +
  "          {label: '选项二', value: 'item2', disabled: false},\n" +
  "          {label: '选项三', value: 'item3', disabled: false}\n" +
  "        ],\n" +
  "      }\n" +
  "    },\n" +
  "  }\n" +
  "</script>",
  indeterminate: "<template>\n" +
  "  <cx-checkbox v-model=\"checkboxModel\" :items=\"checkboxItem\" indeterminate></cx-checkbox>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "  export default {\n" +
  "    data() {\n" +
  "      return {\n" +
  "        checkboxModel: ['item1'],\n" +
  "        checkboxItem: [\n" +
  "          {label: '选项一', value: 'item1', disabled: false},\n" +
  "          {label: '选项二', value: 'item2', disabled: false},\n" +
  "          {label: '选项三', value: 'item3', disabled: false}\n" +
  "        ],\n" +
  "      }\n" +
  "    },\n" +
  "  }"
}
//data information
export const dataInfo = {
  checkboxInfo1: {
    checkboxModel: ['item1'],
    checkboxItem: [
      {label: '选项一', value: 'item1', disabled: false},
      {label: '选项二', value: 'item2', disabled: false},
      {label: '选项三', value: 'item3', disabled: false}
    ],
  },
  checkboxInfo2: {
    checkboxModel: ['item1'],
    checkboxItem: [
      {label: '选项一', value: 'item1', disabled: false},
      {label: '选项二', value: 'item2', disabled: false},
      {label: '选项三', value: 'item3', disabled: false}
    ],
  },
  checkboxInfo3: {
    checkboxModel: ['item1'],
    checkboxItem: [
      {label: '选项一', value: 'item1', disabled: false},
      {label: '选项二', value: 'item2', disabled: true},
      {label: '选项三', value: 'item3', disabled: false}
    ],
  },
  checkboxInfo4: {
    checkboxModel: ['item1'],
    checkboxItem: [
      {label: '选项一', value: 'item1', disabled: false},
      {label: '选项二', value: 'item2', disabled: false},
      {label: '选项三', value: 'item3', disabled: false}
    ],
  },
  checkboxInfo5: {
    checkboxModel: ['item2'],
    checkboxItem: [
      {label: '选项一', value: 'item1', disabled: false},
      {label: '选项二', value: 'item2', disabled: false},
      {label: '选项三', value: 'item3', disabled: false}
    ],
  },
}
//attributes
export const attributes = [
  {attr: 'items', explain: 'Checkbox 的 items', type: 'Array', value: '-', default: '-'},
  {attr: 'disabled', explain: '是否禁用', type: 'boolean', value: '-', default: 'false'},
  {attr: 'type', explain: 'Checkbox 的展现类型', type: 'string', value: 'normal / button', default: 'normal'},
  {attr: 'width', explain: 'Checkbox 模块整体的宽度', type: 'string / number', value: '-', default: '100%'},
  {attr: 'height', explain: 'Checkbox 模块整体的高度', type: 'string / number', value: '-', default: '32px'},
  {attr: 'min', explain: '可被勾选的 checkbox 的最小数量', type: 'number', value: '-', default: '-'},
  {attr: 'max', explain: '可被勾选的 checkbox 的最大数量', type: 'number', value: '-', default: '-'},
  {attr: 'indeterminate', explain: '设置 indeterminate 状态，只负责样式控制123123123123123123', type: 'boolean', value: '-', default: 'false'},
  {attr: 'text-color', explain: '按钮形式的 Checkbox 激活时的文本颜色', type: 'string', value: '-', default: '-'},
  {attr: 'fill', explain: '按钮形式的 Checkbox 激活时的填充色和边框色', type: 'string', value: '-', default: '#666'},
  {attr: 'size', explain: '多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效', type: 'string', value: 'medium / small / mini', default: '-'},
]
//events
export const events = [
  {event: 'change', explain: '当绑定值变化时触发的事件', callback: '绑定值变化时触发的事'},
]
