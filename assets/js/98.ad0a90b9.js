(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{409:function(t,s,a){"use strict";a.r(s);var v=a(10),_=Object(v.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"漫画任务操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漫画任务操作"}},[t._v("#")]),t._v(" 漫画任务操作")]),t._v(" "),s("h2",{attrs:{id:"分享漫画"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分享漫画"}},[t._v("#")]),t._v(" 分享漫画")]),t._v(" "),s("blockquote",[s("p",[t._v("https://manga.bilibili.com/twirp/activity.v1.Activity/ShareComic")])]),t._v(" "),s("p",[s("em",[t._v("请求方式：POST")])]),t._v(" "),s("p",[t._v("认证方式：Cookie（SESSDATA）/ APP")]),t._v(" "),s("p",[s("strong",[t._v("正文参数（ application/x-www-form-urlencoded ）：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("必要性")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("platform")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("平台")]),t._v(" "),s("td",[t._v("必要")]),t._v(" "),s("td",[t._v("android")])])])]),t._v(" "),s("p",[s("strong",[t._v("json 回复：")])]),t._v(" "),s("p",[t._v("根对象：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("code")]),t._v(" "),s("td",[t._v("num / str")]),t._v(" "),s("td",[t._v("返回值")]),t._v(" "),s("td",[t._v("见对应表格")])]),t._v(" "),s("tr",[s("td",[t._v("msg")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("错误信息")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("meta")]),t._v(" "),s("td",[t._v("obj")]),t._v(" "),s("td",[t._v("错误信息")]),t._v(" "),s("td",[t._v("invalid_argument 时存在，例如 "),s("code",[t._v('{"argument":"platform"}')])])]),t._v(" "),s("tr",[s("td",[t._v("data")]),t._v(" "),s("td",[t._v("obj")]),t._v(" "),s("td"),t._v(" "),s("td",[s("code",[t._v("code")]),t._v(" 为 0，"),s("code",[t._v("msg")]),t._v(" 为空时存在")])])])]),t._v(" "),s("p",[s("code",[t._v("code")]),t._v(" - "),s("code",[t._v("msg")]),t._v(" 对应表：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("code")]),t._v(" "),s("th",[t._v("code 类型")]),t._v(" "),s("th",[t._v("msg")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("0")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("空")]),t._v(" "),s("td",[t._v("分享成功，"),s("code",[t._v("data")]),t._v(" 存在")])]),t._v(" "),s("tr",[s("td",[t._v("0")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("今日已分享")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("invalid_argument")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("xxxx must be valid")]),t._v(" "),s("td",[t._v("xxxx 字段为必须，"),s("code",[t._v("meta")]),t._v("存在")])]),t._v(" "),s("tr",[s("td",[t._v("unauthenticated")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("must login")]),t._v(" "),s("td",[t._v("必须登录才能分享")])])])]),t._v(" "),s("p",[s("code",[t._v("data")]),t._v(" 对象：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("point")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("获取积分")]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("strong",[t._v("示例：")])]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" POST https://manga.bilibili.com/twirp/activity.v1.Activity/ShareComic "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-b")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SESSDATA=xxxxx"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'platform=android'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("details",[s("summary",[t._v("分享成功：")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"msg"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"point"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])])]),t._v(" "),s("details",[s("summary",[t._v("今日已分享：")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"msg"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"今日已分享"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])])])])}),[],!1,null,null,null);s.default=_.exports}}]);