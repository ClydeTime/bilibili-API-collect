(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{436:function(s,t,a){"use strict";a.r(t);var e=a(10),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"检查昵称是否可注册"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检查昵称是否可注册"}},[s._v("#")]),s._v(" 检查昵称是否可注册")]),s._v(" "),t("h2",{attrs:{id:"检查昵称"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检查昵称"}},[s._v("#")]),s._v(" 检查昵称")]),s._v(" "),t("blockquote",[t("p",[s._v("https://passport.bilibili.com/web/generic/check/nickname")])]),s._v(" "),t("p",[t("em",[s._v("请求方式:GET")])]),s._v(" "),t("p",[s._v("也可用于判断指定昵称的用户是否存在")]),s._v(" "),t("p",[t("strong",[s._v("url参数：")])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("参数名")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("内容")]),s._v(" "),t("th",[s._v("必要性")]),s._v(" "),t("th",[s._v("备注")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("nickName")]),s._v(" "),t("td",[s._v("str")]),s._v(" "),t("td",[s._v("目标昵称")]),s._v(" "),t("td",[s._v("必要")]),s._v(" "),t("td",[s._v("最长为16字符")])])])]),s._v(" "),t("p",[t("strong",[s._v("json回复：")])]),s._v(" "),t("p",[s._v("根对象：")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("字段")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("内容")]),s._v(" "),t("th",[s._v("备注")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("code")]),s._v(" "),t("td",[s._v("num")]),s._v(" "),t("td",[s._v("状态码")]),s._v(" "),t("td",[s._v("-400：请求错误"),t("br"),s._v("-500：服务器端异常"),t("br"),t("strong",[s._v("详细说明见下一表格")])])]),s._v(" "),t("tr",[t("td",[s._v("message")]),s._v(" "),t("td",[s._v("str")]),s._v(" "),t("td",[s._v("错误详情")]),s._v(" "),t("td",[s._v("若昵称可用，则不返回message")])])])]),s._v(" "),t("p",[t("code",[s._v("code")]),s._v("状态码：")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("值")]),s._v(" "),t("th",[s._v("含义")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("0")]),s._v(" "),t("td",[s._v("昵称未被注册")])]),s._v(" "),t("tr",[t("td",[s._v("2001")]),s._v(" "),t("td",[s._v("该昵称已被他人使用")])]),s._v(" "),t("tr",[t("td",[s._v("40002")]),s._v(" "),t("td",[s._v("昵称包含敏感信息")])]),s._v(" "),t("tr",[t("td",[s._v("40004")]),s._v(" "),t("td",[s._v("昵称不可包含除-和_以外的特殊字符")])]),s._v(" "),t("tr",[t("td",[s._v("40005")]),s._v(" "),t("td",[s._v("昵称过长（超过16字符）")])]),s._v(" "),t("tr",[t("td",[s._v("40006")]),s._v(" "),t("td",[s._v("昵称过短（少于2字符）")])]),s._v(" "),t("tr",[t("td",[s._v("40014")]),s._v(" "),t("td",[s._v("昵称已存在")])])])]),s._v(" "),t("p",[t("strong",[s._v("示例：")])]),s._v(" "),t("p",[s._v("查询昵称 "),t("code",[s._v("xijinping")]),s._v(" 是否被使用：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-G")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://passport.bilibili.com/web/generic/check/nickname'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--data-urlencode "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'nickName=xijinping'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("details",[t("summary",[s._v("查看响应示例：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"code"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("40002")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"message"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"昵称包含敏感信息"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])]),s._v(" "),t("p",[s._v("查询昵称 "),t("code",[s._v("//")]),s._v(" 是否被使用：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-G")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://passport.bilibili.com/web/generic/check/nickname'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--data-urlencode "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'nickName=//'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("details",[t("summary",[s._v("查看响应示例：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"code"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("40004")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"message"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"昵称不可包含除-和_以外的特殊字符"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])]),s._v(" "),t("p",[s._v("查询昵称 "),t("code",[s._v("test0000000000000")]),s._v(" 是否被使用：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-G")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://passport.bilibili.com/web/generic/check/nickname'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--data-urlencode "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'nickName=test0000000000000 '")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("details",[t("summary",[s._v("查看响应示例：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"code"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("40005")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"message"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"昵称过长"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])]),s._v(" "),t("p",[s._v("查询昵称 "),t("code",[s._v("0")]),s._v(" 是否被使用：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-G")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://passport.bilibili.com/web/generic/check/nickname'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--data-urlencode "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'nickName=0'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("details",[t("summary",[s._v("查看响应示例：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"code"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("40006")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"message"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"昵称过短"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])]),s._v(" "),t("p",[s._v("查询昵称 "),t("code",[s._v("test")]),s._v(" 是否被使用：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-G")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://passport.bilibili.com/web/generic/check/nickname'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--data-urlencode "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'nickName=test'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("details",[t("summary",[s._v("查看响应示例：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"code"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("40014")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"message"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"昵称已存在"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);