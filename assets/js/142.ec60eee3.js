(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{461:function(t,s,a){"use strict";a.r(s);var r=a(10),v=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"大会员操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#大会员操作"}},[t._v("#")]),t._v(" 大会员操作")]),t._v(" "),s("h2",{attrs:{id:"兑换卡券"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#兑换卡券"}},[t._v("#")]),t._v(" 兑换卡券")]),t._v(" "),s("blockquote",[s("p",[t._v("https://api.bilibili.com/x/vip/privilege/receive")])]),t._v(" "),s("p",[s("em",[t._v("请求方式：POST")])]),t._v(" "),s("p",[t._v("认证方式：Cookie (SESSDATA)")]),t._v(" "),s("p",[s("strong",[t._v("正文参数 (application/x-www-form-urlencoded)：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("必要性")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("type")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("兑换类型")]),t._v(" "),s("td",[t._v("必要")]),t._v(" "),s("td",[t._v("1：B币券"),s("br"),t._v("2：会员购优惠券"),s("br"),t._v("3：漫画福利券"),s("br"),t._v("4：会员购包邮券"),s("br"),t._v("5：漫画商城优惠券")])]),t._v(" "),s("tr",[s("td",[t._v("csrf")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("CSRF Token (位于cookie)")]),t._v(" "),s("td",[t._v("Cookie 方式必要")]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("strong",[t._v("json回复：")])]),t._v(" "),s("p",[t._v("根对象：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("code")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("返回值")]),t._v(" "),s("td",[t._v("-101：账号未登录"),s("br"),t._v("-111：csrf 校验失败"),s("br"),t._v("-400：请求错误"),s("br"),t._v("69800：网络繁忙 请稍后再试"),s("br"),t._v("69801：你已领取过该权益"),s("br"),t._v("0：成功")])]),t._v(" "),s("tr",[s("td",[t._v("message")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("错误信息")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("ttl")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("strong",[t._v("示例：")])]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://api.bilibili.com/x/vip/privilege/receive'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-b")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SESSDATA=xxx'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'type=1'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'csrf=xxx'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("details",[s("summary",[t._v("查看响应示例：")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ttl"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])])])])}),[],!1,null,null,null);s.default=v.exports}}]);