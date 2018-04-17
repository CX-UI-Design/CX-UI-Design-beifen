import { errorMap } from "@/utils/mock/error/error"

const formMap = {
	"autoform": {
		"resultCode": "200",
		"resultMsg": "操作成功。",
		"resultData": {
			//v-model 绑定字段对象
			"modelData": {
				"info": "", //title
				"houseName": "", //房产名称
				"ownerName": "", //业主名称
				"lesseeName": "", //租户名称
				"lesseeCertificate": "", //证件号码
				"lesseeMobile": "", //移动电话
				"provincialandcity": "", //省市区
				"streetId": "", //街道
				"applyDate": "", //申请时间
				"remark": "", //备注

			},
			//表单信息
			"info": {
				"funcinfoFormlabelwidth": 150,
				"funcinfoFormcols": 2 //表单所占列数
			},
			//表单控件循环信息
			"fields": [

				//span
				{
					"resourcefieldXtype": "separator", //表单类型
					"resourcefieldNameEn": "info", //表单model字段名称
					"resourcefieldName": "新增退租", //表单字段 lable 名称
					"funcinfoFormlabelwidth": 100, //表单字段 lable 宽度
					"isfieldRequired": false, //是否必填 required
					"resourcefieldBinding": null, //必填出错 提示信息
					"resourcefieldAllowblankexp": null, //内容验证规则
					"resourcefieldVtype": null, //验证字段的内容类型
					"resourcefieldOtherconfig": null, //表单控件分支小类type,如input=>input-text,input-textere
					"resourcefieldEmptytext": null, //placeholder的值
					"isResourcefieldRemoved": false, //是否禁用
					"isResourcefieldReadonly": false, //是否只读
					"fieldWidth": 600, //表单元素部分宽度
					"fieldHeight": 32, //表单元素部分高度
					"resourcefieldMinvalue": null, //min
					"resourcefieldMaxvalue": null, //max
					"resourcefieldStep": null, //step 步长
					"resourcefieldRowspan": 1, //row 值 - 所占 行数 （textarea / avatar / span ......）
					"resourcefieldFieldcls": null, //表单控件图标
					"isResourcefieldEditable": false, //是否可编辑
					"resourcefieldColspan": 1, //所占列数
					"items": null, //表单控件内容部分（checkbox，radio......）
					"ddcode": null, //表单控件分布加载内容，请求值,(在select,cascader......中应用)
					"resourcefieldGroupname": "before", //分组名称
					"isResourcefieldHidden": false, //是否隐藏
					"resourcefieldBindingfnList": [], //事件名称集合
				},
				//房产名称
				{
					"resourcefieldXtype": "span", //表单类型
					"resourcefieldNameEn": "houseName", //表单model字段名称
					"resourcefieldName": "房产名称", //表单字段 lable 名称
					"funcinfoFormlabelwidth": 150, //表单字段 lable 宽度
					"isfieldRequired": false, //是否必填 required
					"resourcefieldBinding": null, //必填出错 提示信息
					"resourcefieldAllowblankexp": null, //内容验证规则
					"resourcefieldVtype": null, //验证字段的内容类型
					"resourcefieldOtherconfig": null, //表单控件分支小类type,如input=>input-text,input-textere
					"resourcefieldEmptytext": null, //placeholder的值
					"isResourcefieldRemoved": false, //是否禁用
					"isResourcefieldReadonly": false, //是否只读
					"fieldWidth": 600, //表单元素部分宽度
					"fieldHeight": 32, //表单元素部分高度
					"resourcefieldMinvalue": null, //min
					"resourcefieldMaxvalue": null, //max
					"resourcefieldStep": null, //step 步长
					"resourcefieldRowspan": 1, //row 值 - 所占 行数 （textarea / avatar / span ......）
					"resourcefieldFieldcls": null, //表单控件图标
					"isResourcefieldEditable": false, //是否可编辑
					"resourcefieldColspan": 1, //所占列数
					"items": null, //表单控件内容部分（checkbox，radio......）
					"ddcode": null, //表单控件分布加载内容，请求值,(在select,cascader......中应用)
					"resourcefieldGroupname": "before", //分组名称
					"isResourcefieldHidden": false, //是否隐藏
					"resourcefieldBindingfnList": [], //事件名称集合
				},
				//业主
				{
					"resourcefieldXtype": "span", //表单类型
					"resourcefieldNameEn": "ownerName", //表单model字段名称
					"resourcefieldName": "业主", //表单字段 lable 名称
					"funcinfoFormlabelwidth": 150, //表单字段 lable 宽度
					"isfieldRequired": false, //是否必填 required
					"resourcefieldBinding": null, //必填出错 提示信息
					"resourcefieldAllowblankexp": null, //内容验证规则
					"resourcefieldVtype": null, //验证字段的内容类型
					"resourcefieldOtherconfig": null, //表单控件分支小类type,如input=>input-text,input-textere
					"resourcefieldEmptytext": null, //placeholder的值
					"isResourcefieldRemoved": false, //是否禁用
					"isResourcefieldReadonly": false, //是否只读
					"fieldWidth": 600, //表单元素部分宽度
					"fieldHeight": 32, //表单元素部分高度
					"resourcefieldMinvalue": null, //min
					"resourcefieldMaxvalue": null, //max
					"resourcefieldStep": null, //step 步长
					"resourcefieldRowspan": 1, //row 值 - 所占 行数 （textarea / avatar / span ......）
					"resourcefieldFieldcls": null, //表单控件图标
					"isResourcefieldEditable": false, //是否可编辑
					"resourcefieldColspan": 1, //所占列数
					"items": null, //表单控件内容部分（checkbox，radio......）
					"ddcode": null, //表单控件分布加载内容，请求值,(在select,cascader......中应用)
					"resourcefieldGroupname": "before", //分组名称
					"isResourcefieldHidden": false, //是否隐藏
					"resourcefieldBindingfnList": [], //事件名称集合
				},
				/*==================== group 1 ==================== */
				//separator
				{
					"resourcefieldXtype": "separator", //表单类型
					"resourcefieldNameEn": null, //表单model字段名称
					"resourcefieldName": "", //表单字段 lable 名称
					"funcinfoFormlabelwidth": 0, //表单字段 lable 宽度
					"isfieldRequired": false, //是否必填 required
					"resourcefieldBinding": null, //必填出错 提示信息
					"resourcefieldAllowblankexp": null, //内容验证规则
					"resourcefieldVtype": null, //验证字段的内容类型
					"resourcefieldOtherconfig": 'simple', //表单控件分支小类type,如input=>input-text,input-textere
					"resourcefieldEmptytext": null, //placeholder的值
					"isResourcefieldRemoved": false, //是否禁用
					"isResourcefieldReadonly": false, //是否只读
					"fieldWidth": 700, //表单元素部分宽度
					"fieldHeight": 32, //表单元素部分高度
					"resourcefieldMinvalue": null, //min
					"resourcefieldMaxvalue": null, //max
					"resourcefieldStep": null, //step 步长
					"resourcefieldRowspan": null, //row 值 - 所占 行数 （textarea / avatar / span ......）
					"resourcefieldFieldcls": "gailan", //表单控件图标
					"isResourcefieldEditable": false, //是否可编辑
					"resourcefieldColspan": 1, //所占列数
					"items": null, //表单控件内容部分（checkbox，radio......）
					"ddcode": null, //表单控件分布加载内容，请求值,(在select,cascader......中应用)
					"resourcefieldGroupname": "base-info", //分组名称
					"isResourcefieldHidden": false, //是否隐藏
					"resourcefieldBindingfnList": ['click-groupSwitch'] //事件名称集合
				},

				//租户名称 - input
				{
					"resourcefieldXtype": "input", //表单类型
					"resourcefieldNameEn": "lesseeName", //表单model字段名称
					"resourcefieldName": "租户", //表单字段 lable 名称
					"funcinfoFormlabelwidth": 150, //表单字段 lable 宽度
					"isfieldRequired": true, //是否必填 required
					"resourcefieldBinding": "请输入姓名", //必填出错 提示信息
					"resourcefieldAllowblankexp": "NumEn", //内容验证规则
					"resourcefieldVtype": "string", //验证字段的 内容类型
					"resourcefieldOtherconfig": 'text', //表单控件分支小类type,如input=>input-text,input-textere
					"resourcefieldEmptytext": "请输入姓名", //placeholder的值
					"isResourcefieldRemoved": false, //是否禁用
					"isResourcefieldReadonly": false, //是否只读
					"fieldWidth": 200, //表单元素部分宽度
					"fieldHeight": 32, //表单元素部分高度
					"resourcefieldMinvalue": null, //min
					"resourcefieldMaxvalue": null, //max
					"resourcefieldStep": null, //step 步长
					"resourcefieldRowspan": null, //row 值 - 所占 行数 （textarea / avatar / span ......）
					"resourcefieldFieldcls": null, //表单控件图标
					"isResourcefieldEditable": false, //是否可编辑
					"resourcefieldColspan": 1, //所占列数
					"items": null, //表单控件内容部分（checkbox，radio......）
					"ddcode": null, //表单控件分布加载内容，请求值,(在select,cascader......中应用)
					"resourcefieldGroupname": "base-info", //分组名称
					"isResourcefieldHidden": false, //是否隐藏
					"resourcefieldBindingfnList": [], //事件名称集合
					"src": "", //图片操作地址（获取地址，上传地址）
				},
				//证件号码 - input
				{
					"resourcefieldXtype": "input", //表单类型
					"resourcefieldNameEn": "lesseeCertificate", //表单model字段名称
					"resourcefieldName": "证件号码", //表单字段 lable 名称
					"funcinfoFormlabelwidth": 150, //表单字段 lable 宽度
					"isfieldRequired": false, //是否必填 required
					"resourcefieldBinding": null, //必填出错 提示信息
					"resourcefieldAllowblankexp": null, //内容验证规则
					"resourcefieldVtype": "string", //验证字段的 内容类型
					"resourcefieldOtherconfig": 'text', //表单控件分支小类type,如input=>input-text,input-textere
					"resourcefieldEmptytext": "请输入证件号码", //placeholder的值
					"isResourcefieldRemoved": false, //是否禁用
					"isResourcefieldReadonly": false, //是否只读
					"fieldWidth": 200, //表单元素部分宽度
					"fieldHeight": 32, //表单元素部分高度
					"resourcefieldMinvalue": null, //min
					"resourcefieldMaxvalue": null, //max
					"resourcefieldStep": null, //step 步长
					"resourcefieldRowspan": null, //row 值 - 所占 行数 （textarea / avatar / span ......）
					"resourcefieldFieldcls": null, //表单控件图标
					"isResourcefieldEditable": false, //是否可编辑
					"resourcefieldColspan": 1, //所占列数
					"items": null, //表单控件内容部分（checkbox，radio......）
					"ddcode": null, //表单控件分布加载内容，请求值,(在select,cascader......中应用)
					"resourcefieldGroupname": "base-info", //分组名称
					"isResourcefieldHidden": false, //是否隐藏
					"resourcefieldBindingfnList": [], //事件名称集合
					"src": "", //图片操作地址（获取地址，上传地址）
				},
				//移动电话 - input
				{
					"resourcefieldXtype": "input", //表单类型
					"resourcefieldNameEn": "lesseeMobile", //表单model字段名称
					"resourcefieldName": "移动电话", //表单字段 lable 名称
					"funcinfoFormlabelwidth": 150, //表单字段 lable 宽度
					"isfieldRequired": false, //是否必填 required
					"resourcefieldBinding": null, //必填出错 提示信息
					"resourcefieldAllowblankexp": null, //内容验证规则
					"resourcefieldVtype": "string", //验证字段的 内容类型
					"resourcefieldOtherconfig": 'text', //表单控件分支小类type,如input=>input-text,input-textere
					"resourcefieldEmptytext": "请输入移动电话", //placeholder的值
					"isResourcefieldRemoved": false, //是否禁用
					"isResourcefieldReadonly": false, //是否只读
					"fieldWidth": 200, //表单元素部分宽度
					"fieldHeight": 32, //表单元素部分高度
					"resourcefieldMinvalue": null, //min
					"resourcefieldMaxvalue": null, //max
					"resourcefieldStep": null, //step 步长
					"resourcefieldRowspan": null, //row 值 - 所占 行数 （textarea / avatar / span ......）
					"resourcefieldFieldcls": null, //表单控件图标
					"isResourcefieldEditable": false, //是否可编辑
					"resourcefieldColspan": 1, //所占列数
					"items": null, //表单控件内容部分（checkbox，radio......）
					"ddcode": null, //表单控件分布加载内容，请求值,(在select,cascader......中应用)
					"resourcefieldGroupname": "base-info", //分组名称
					"isResourcefieldHidden": false, //是否隐藏
					"resourcefieldBindingfnList": [], //事件名称集合

				},
				//省市区 - cascader
				{
					"resourcefieldXtype": "cascader", //表单类型
					"resourcefieldNameEn": "provincialandcity", //表单model字段名称
					"resourcefieldName": "详细地址", //表单字段 lable 名称
					"funcinfoFormlabelwidth": 150, //表单字段 lable 宽度
					"isfieldRequired": false, //是否必填 required
					"resourcefieldBinding": "请选择省市区", //必填出错 提示信息
					"resourcefieldAllowblankexp": null, //内容验证规则
					"resourcefieldVtype": "array", //验证字段的 内容类型
					"resourcefieldOtherconfig": "normal", //表单控件分支小类type,如input=>input-text,input-textere
					"resourcefieldEmptytext": null, //placeholder的值
					"isResourcefieldRemoved": false, //是否禁用
					"isResourcefieldReadonly": false, //是否只读
					"fieldWidth": 200,
					"fieldHeight": 32,
					"resourcefieldMinvalue": null,
					"resourcefieldMaxvalue": null,
					"resourcefieldStep": null,
					"resourcefieldRowspan": null,
					"resourcefieldFieldcls": "search",
					"isResourcefieldEditable": false,
					"resourcefieldColspan": 1,
					"items": [{
							"value": "Mercedes",
							"label": "浙江",
							"children": [{
									"value": "Car",
									"label": "杭州",
									"children": [{
											"value": "S-class",
											"label": "西湖区"
										},
										{
											"value": "E-class",
											"label": "上城区"
										}
									]
								},
								{
									"value": "SUV",
									"label": "宁波",
									"children": [{
											"value": "gle",
											"label": "鄞州区",
											"isResourcefieldRemoved": true
										},
										{
											"value": "glc",
											"label": "江东区"
										}
									]
								}
							]
						},
						{
							"value": "BMW",
							"label": "江苏",
							"children": [{
									"value": "Car",
									"label": "苏州",
									"children": [{
											"value": "7-class",
											"label": "xxx"
										},
										{
											"value": "5-class",
											"label": "yyy"
										}
									]
								},
								{
									"value": "无锡",
									"label": "无锡",
									"children": [{
											"value": "X5",
											"label": "xxx"
										},
										{
											"value": "X3",
											"label": "yyy"
										}
									]
								}
							]
						},
						{
							"value": "广东省",
							"label": "广东省",
							"children": [{
									"value": "Car",
									"label": "广州",
									"children": [{
											"value": "A8-class",
											"label": "xxx"
										},
										{
											"value": "A6-class",
											"label": "yyy"
										}
									]
								},
								{
									"value": "SUV",
									"label": "深圳",
									"children": [{
											"value": "Q7",
											"label": "xxx"
										},
										{
											"value": "Q5",
											"label": "yyy"
										}
									]
								}
							]
						}
					],
					"ddcode": null,
					"resourcefieldGroupname": "base-info", //分组名称
					"isResourcefieldHidden": false, //是否隐藏
					"resourcefieldBindingfnList": [] //事件名称集合
				},

				//退租日期 - datepicker
				{
					"resourcefieldXtype": "datepicker", //表单类型
					"resourcefieldNameEn": "applyDate", //表单model字段名称
					"resourcefieldName": "退租日期 ", //表单字段 lable 名称
					"funcinfoFormlabelwidth": 150, //表单字段 lable 宽度
					"isfieldRequired": true, //是否必填 required
					"resourcefieldBinding": "请选择开始日期 ", //必填出错 提示信息
					"resourcefieldAllowblankexp": null, //内容验证规则
					"resourcefieldVtype": "date", //验证字段的 内容类型
					"resourcefieldOtherconfig": "datetime", //表单控件分支小类type,如input=>input-text,input-textere
					"resourcefieldEmptytext": null, //placeholder的值
					"isResourcefieldRemoved": false, //是否禁用
					"isResourcefieldReadonly": false, //是否只读
					"fieldWidth": 200, //表单元素部分宽度
					"fieldHeight": 32, //表单元素部分高度
					"resourcefieldMinvalue": null, //min
					"resourcefieldMaxvalue": null, //max
					"resourcefieldStep": null, //step 步长
					"resourcefieldRowspan": null, //row 值 - 所占 行数 （textarea / avatar / span ......）
					"resourcefieldFieldcls": null, //表单控件图标
					"isResourcefieldEditable": false, //是否可编辑
					"resourcefieldColspan": 1, //所占列数
					"items": null, //表单控件内容部分（checkbox，radio......）
					"ddcode": null, //表单控件分布加载内容，请求值,(在select,cascader......中应用)
					"resourcefieldGroupname": "base-info", //分组名称
					"isResourcefieldHidden": false, //是否隐藏
					"resourcefieldBindingfnList": [], //事件名称集合
					"src": "", //图片操作地址（获取地址，上传地址）
				},

				//备注 - input
				{
					"resourcefieldXtype": "input", //表单类型
					"resourcefieldNameEn": "remark", //表单model字段名称
					"resourcefieldName": "备注", //表单字段 lable 名称
					"funcinfoFormlabelwidth": 150, //表单字段 lable 宽度
					"isfieldRequired": false, //是否必填 required
					"resourcefieldBinding": "请输入备注信息", //必填出错 提示信息
					"resourcefieldAllowblankexp": null, //内容验证规则
					"resourcefieldVtype": "string", //验证字段的 内容类型
					"resourcefieldOtherconfig": 'textarea', //表单控件分支小类type,如input=>input-text,input-textere
					"resourcefieldEmptytext": "", //placeholder的值
					"isResourcefieldRemoved": false, //是否禁用
					"isResourcefieldReadonly": false, //是否只读
					"fieldWidth": 475, //表单元素部分宽度
					"fieldHeight": 64, //表单元素部分高度
					"resourcefieldMinvalue": null, //min
					"resourcefieldMaxvalue": null, //max
					"resourcefieldStep": null, //step 步长
					"resourcefieldRowspan": 2, //row 值 - 所占 行数 （textarea / avatar / span ......）
					"resourcefieldFieldcls": null, //表单控件图标
					"isResourcefieldEditable": false, //是否可编辑
					"resourcefieldColspan": 1, //所占列数
					"items": null, //表单控件内容部分（checkbox，radio......）
					"ddcode": null, //表单控件分布加载内容，请求值,(在select,cascader......中应用)
					"resourcefieldGroupname": "base-info", //分组名称
					"isResourcefieldHidden": false, //是否隐藏
					"resourcefieldBindingfnList": [], //事件名称集合
					"src": "", //图片操作地址（获取地址，上传地址）
				},

			]
		}
	},
}

export default {
	autoform: () => {
		return formMap.autoform
	},
}
