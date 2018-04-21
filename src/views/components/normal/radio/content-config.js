//code temple
export const code = {
  normal: "<template>\n" +
  "  <cx-radio v-model=\"radioModel\" :items=\"radioItem\"></cx-radio>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "  export default {\n" +
  "    data() {\n" +
  "      return {\n" +
  "        radioModel: 'item1',\n" +
  "        radioItem: [\n" +
  "          {label: '选项一', value: 'item1', disabled: false},\n" +
  "          {label: '选项二', value: 'item2', disabled: false},\n" +
  "          {label: '选项三', value: 'item3', disabled: false}\n" +
  "        ],\n" +
  "      }\n" +
  "    },\n" +
  "  }\n" +
  "</script>",
  disabled: "<template>\n" +
  "  <cx-radio v-model=\"radioModel1\" :items=\"radioItem1\"></cx-radio>\n" +
  "  <cx-radio v-model=\"radioModel2\" :items=\"radioItem2\" disabled></cx-radio>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "  export default {\n" +
  "    data() {\n" +
  "      return {\n" +
  "        radioModel1: 'item1',\n" +
  "        radioItem1: [\n" +
  "          {label: '选项一', value: 'item1', disabled: false},\n" +
  "          {label: '选项二', value: 'item2', disabled: false},\n" +
  "          {label: '选项三', value: 'item3', disabled: false}\n" +
  "        ],\n" +
  "        radioModel2: 'item1',\n" +
  "        radioItem2: [\n" +
  "          {label: '选项一', value: 'item1', disabled: false},\n" +
  "          {label: '选项二', value: 'item2', disabled: true},\n" +
  "          {label: '选项三', value: 'item3', disabled: false}\n" +
  "        ],\n" +
  "      }\n" +
  "    },\n" +
  "  }\n" +
  "</script>",
  type: "<template>\n" +
  "  <cx-radio v-model=\"radioModel\" :items=\"radioItem\" type=\"button\"></cx-radio>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "  export default {\n" +
  "    data() {\n" +
  "      return {\n" +
  "        radioModel: 'item1',\n" +
  "        radioItem: [\n" +
  "          {label: '选项一', value: 'item1', disabled: false},\n" +
  "          {label: '选项二', value: 'item2', disabled: false},\n" +
  "          {label: '选项三', value: 'item3', disabled: false}\n" +
  "        ],\n" +
  "      }\n" +
  "    },\n" +
  "  }\n" +
  "</script>"
}
//radio information
export const dataInfo = {
  radioInfo1: {
    radioModel: 'item1',
    radioItem: [
      {label: '选项一', value: 'item1', disabled: false},
      {label: '选项二', value: 'item2', disabled: false},
      {label: '选项三', value: 'item3', disabled: false}
    ],
  },
  radioInfo2: {
    radioModel: 'item1',
    radioItem: [
      {label: '选项一', value: 'item1', disabled: false},
      {label: '选项二', value: 'item2', disabled: false},
      {label: '选项三', value: 'item3', disabled: false}
    ],
  },
  radioInfo3: {
    radioModel: 'item1',
    radioItem: [
      {label: '选项一', value: 'item1', disabled: false},
      {label: '选项二', value: 'item2', disabled: true},
      {label: '选项三', value: 'item3', disabled: false}
    ],
  },
  radioInfo4: {
    radioModel: 'item1',
    radioItem: [
      {label: '选项一', value: 'item1', disabled: false},
      {label: '选项二', value: 'item2', disabled: false},
      {label: '选项三', value: 'item3', disabled: false}
    ],
  },
}
//attributes
export const attributes = [
  {attr: 'items', explain: 'Radio 的 items', type: 'Array', value: '-', default: '-'},
  {attr: 'disabled', explain: '是否禁用', type: 'boolean', value: '-', default: 'false'},
  {attr: 'type', explain: 'Radio 的展现类型', type: 'string', value: 'normal / button', default: 'normal'},
  {attr: 'width', explain: 'Radio 模块整体的宽度', type: 'string / number', value: '-', default: '100%'},
  {attr: 'height', explain: 'Radio 模块整体的高度', type: 'string / number', value: '-', default: '32px'},

]
//events
export const events = [
  {event: 'change', explain: '绑定值变化时触发的事件', callback: '绑定值变化时触发的事'},
]
