(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{401:function(t,a,e){"use strict";e.r(a);var _=e(49),v=Object(_.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"操作栏配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作栏配置"}},[t._v("#")]),t._v(" 操作栏配置")]),t._v(" "),e("h2",{attrs:{id:"operations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#operations"}},[t._v("#")]),t._v(" operations")]),t._v(" "),e("ul",[e("li",[t._v("操作列")]),t._v(" "),e("li",[t._v("类型: "),e("code",[t._v("interface Operation[]")])]),t._v(" "),e("li",[t._v("默认: "),e("code",[t._v("[]")])])]),t._v(" "),e("h3",{attrs:{id:"参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),e("h4",{attrs:{id:"_1-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-type"}},[t._v("#")]),t._v(" 1. type")]),t._v(" "),e("ul",[e("li",[t._v("类型")]),t._v(" "),e("li",[t._v("类型: "),e("code",[t._v("enum OperationType")])]),t._v(" "),e("li",[t._v("参考: "),e("a",{attrs:{href:"https://github.com/van-fe/vue-table-view/blob/main/src/config/operation.ts#L1",target:"_blank",rel:"noopener noreferrer"}},[t._v("OperationType"),e("OutboundLink")],1)])]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" OperationType "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Button"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 按钮")]),t._v("\n  ButtonWithIcon"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 有icon的按钮")]),t._v("\n  Link"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 链接")]),t._v("\n  LinkWithoutUnderline"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 没有下划线的链接")]),t._v("\n  ButtonMore"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 按钮形式的 更多")]),t._v("\n  ButtonWithIconMore"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 按钮形式有icon的 更多")]),t._v("\n  LinkMore"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 链接形式的 更多")]),t._v("\n  LinkWithoutUnderlineMore"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 没有下划线的链接形式的 更多")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h4",{attrs:{id:"_2-status"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-status"}},[t._v("#")]),t._v(" 2. status")]),t._v(" "),e("ul",[e("li",[t._v("按钮/链接的状态，会直接以 "),e("code",[t._v("prop")]),t._v(" 传入组件")]),t._v(" "),e("li",[t._v("类型: "),e("code",[t._v("string")])]),t._v(" "),e("li",[t._v("可选值:\n"),e("ul",[e("li",[e("code",[t._v("'primary'")])]),t._v(" "),e("li",[e("code",[t._v("'success'")])]),t._v(" "),e("li",[e("code",[t._v("'info'")])]),t._v(" "),e("li",[e("code",[t._v("'warning'")])]),t._v(" "),e("li",[e("code",[t._v("'danger'")])])])])]),t._v(" "),e("h4",{attrs:{id:"_3-hovertoshowtext"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-hovertoshowtext"}},[t._v("#")]),t._v(" 3. hoverToShowText")]),t._v(" "),e("ul",[e("li",[t._v("鼠标悬浮式展示的文字")]),t._v(" "),e("li",[t._v("类型: "),e("code",[t._v("string")])])]),t._v(" "),e("h4",{attrs:{id:"_4-disabled"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-disabled"}},[t._v("#")]),t._v(" 4. disabled")]),t._v(" "),e("ul",[e("li",[t._v("是否禁用")]),t._v(" "),e("li",[t._v("类型: "),e("code",[t._v("(row: Row) => boolean")])])]),t._v(" "),e("h4",{attrs:{id:"_5-disappear"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-disappear"}},[t._v("#")]),t._v(" 5. disappear")]),t._v(" "),e("ul",[e("li",[t._v("是否显示")]),t._v(" "),e("li",[t._v("类型: "),e("code",[t._v("(row: Row) => boolean")])])]),t._v(" "),e("h4",{attrs:{id:"_6-onclick"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-onclick"}},[t._v("#")]),t._v(" 6. onClick")]),t._v(" "),e("ul",[e("li",[t._v("点击事件回调")]),t._v(" "),e("li",[t._v("类型: "),e("code",[t._v("(row: Row) => void")])])]),t._v(" "),e("h4",{attrs:{id:"_7-label"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-label"}},[t._v("#")]),t._v(" 7. label")]),t._v(" "),e("ul",[e("li",[t._v("当使用 "),e("strong",[t._v("除")]),t._v(" "),e("code",[t._v("ButtonWithIcon")]),t._v(" | "),e("code",[t._v("ButtonWithIconMore")]),t._v(" 时内部文字内容")]),t._v(" "),e("li",[t._v("类型: "),e("code",[t._v("string")])])]),t._v(" "),e("h4",{attrs:{id:"_8-icon"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-icon"}},[t._v("#")]),t._v(" 8. icon")]),t._v(" "),e("ul",[e("li",[t._v("当使用 "),e("code",[t._v("ButtonWithIcon")]),t._v(" | "),e("code",[t._v("ButtonWithIconMore")]),t._v(" 时的 "),e("code",[t._v("icon")]),t._v("，会传入 "),e("code",[t._v("el-button")]),t._v(" 的 "),e("code",[t._v("icon")]),t._v(" 中")]),t._v(" "),e("li",[t._v("类型: "),e("code",[t._v("string")])])]),t._v(" "),e("h4",{attrs:{id:"_9-divided"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-divided"}},[t._v("#")]),t._v(" 9. divided")]),t._v(" "),e("ul",[e("li",[t._v("这个是在使用 更多类型 的时候，对 "),e("code",[t._v("dropMenu")]),t._v(" 的 "),e("code",[t._v("divided")]),t._v(" 参数的处理")]),t._v(" "),e("li",[t._v("类型: "),e("code",[t._v("boolean")])])]),t._v(" "),e("h4",{attrs:{id:"_10-children"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-children"}},[t._v("#")]),t._v(" 10. children")]),t._v(" "),e("ul",[e("li",[t._v("这个是在使用 "),e("code",[t._v("更多类型")]),t._v(" 的时候，"),e("strong",[t._v("但注意的是，目前不支持多级菜单")])]),t._v(" "),e("li",[t._v("类型: "),e("code",[t._v("interface Operation[]")])])]),t._v(" "),e("h2",{attrs:{id:"headertitle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#headertitle"}},[t._v("#")]),t._v(" headerTitle")]),t._v(" "),e("ul",[e("li",[t._v("操作列标题名称")]),t._v(" "),e("li",[t._v("类型: "),e("code",[t._v("string")])]),t._v(" "),e("li",[t._v("默认: "),e("code",[t._v("'Operator'")])])]),t._v(" "),e("h2",{attrs:{id:"width"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#width"}},[t._v("#")]),t._v(" width")]),t._v(" "),e("ul",[e("li",[t._v("操作列宽度")]),t._v(" "),e("li",[t._v("类型: "),e("code",[t._v("string | number")])]),t._v(" "),e("li",[t._v("默认: "),e("code",[t._v("'auto'")])])]),t._v(" "),e("h2",{attrs:{id:"minwidth"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#minwidth"}},[t._v("#")]),t._v(" minWidth")]),t._v(" "),e("ul",[e("li",[t._v("操作列最小宽度（建议）")]),t._v(" "),e("li",[t._v("类型: "),e("code",[t._v("string | number")])]),t._v(" "),e("li",[t._v("默认: "),e("code",[t._v("'auto'")])])]),t._v(" "),e("h2",{attrs:{id:"surroundbybuttongroup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#surroundbybuttongroup"}},[t._v("#")]),t._v(" surroundByButtonGroup")]),t._v(" "),e("ul",[e("li",[t._v("操作列内容是否使用 "),e("code",[t._v("<el-button-group>")]),t._v(" 包裹，对于所有的 "),e("code",[t._v("operations")]),t._v(" 都是 "),e("code",[t._v("button | button-with-icon")]),t._v(" 类型时显示比较友好")]),t._v(" "),e("li",[t._v("类型: "),e("code",[t._v("boolean")])]),t._v(" "),e("li",[t._v("默认: "),e("code",[t._v("false")])])])])}),[],!1,null,null,null);a.default=v.exports}}]);