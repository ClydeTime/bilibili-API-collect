(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{469:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"用户注册"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户注册"}},[t._v("#")]),t._v(" 用户注册")]),t._v(" "),s("h2",{attrs:{id:"人机验证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#人机验证"}},[t._v("#")]),t._v(" 人机验证")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/docs/login/login_action/#验证登录"}},[t._v("完成人机验证(参考验证登录)")])],1),t._v(" "),s("p",[t._v("完成后得到"),s("code",[t._v("key")]),t._v(", "),s("code",[t._v("challenge")]),t._v(", "),s("code",[t._v("validate")]),t._v(", "),s("code",[t._v("seccode")]),t._v("四个参数")]),t._v(" "),s("h2",{attrs:{id:"发送短信验证码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发送短信验证码"}},[t._v("#")]),t._v(" 发送短信验证码")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/docs/login/login_action/SMS.html#发送短信验证码（web端）"}},[t._v("发送短信验证码(参考短信登录)")])],1),t._v(" "),s("p",[s("strong",[t._v("注意不同的是这里type=1而非21")]),t._v(",推测此参数决定短信内容")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://passport.bilibili.com/web/sms/general/v2/send'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" \n    --data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key=6eeb28e7bbd64b389da2be3a2778c7e3'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'captchaType=6'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'type=1'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cid=1'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tel=13888888888'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'challenge=c52148f88a28b6011db52bb213483ee8'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'validate=a98841cd6ea58e1b1f5783fca73cddb6'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'seccode=a98841cd6ea58e1b1f5783fca73cddb6|jordan'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("details",[s("summary",[t._v("查看示例")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"验证码短信已下发"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])])]),t._v(" "),s("h2",{attrs:{id:"提交注册请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提交注册请求"}},[t._v("#")]),t._v(" 提交注册请求")]),t._v(" "),s("blockquote",[s("p",[t._v("https://passport.bilibili.com/web/reg/tel")])]),t._v(" "),s("p",[s("em",[t._v("请求方式：POST")])]),t._v(" "),s("p",[s("strong",[t._v("正文参数（ application/x-www-form-urlencoded ）：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("必要性")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("cid")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("国际冠字码")]),t._v(" "),s("td",[t._v("必要")]),t._v(" "),s("td",[t._v("可以从 "),s("RouterLink",{attrs:{to:"/docs/login/login_action/SMS.html#获取国际冠字码_web端"}},[t._v("获取国际冠字码")]),t._v(" 接口中获取")],1)]),t._v(" "),s("tr",[s("td",[t._v("tel")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("手机号码")]),t._v(" "),s("td",[t._v("必要")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("code")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("短信验证码")]),t._v(" "),s("td",[t._v("必要")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("nickName")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("昵称")]),t._v(" "),s("td",[t._v("必要")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("pwd")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("密码")]),t._v(" "),s("td",[t._v("必要")]),t._v(" "),s("td",[t._v("密码为明文")])]),t._v(" "),s("tr",[s("td",[t._v("plat")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("必要")]),t._v(" "),s("td",[t._v("平台？")])]),t._v(" "),s("tr",[s("td",[t._v("gourl")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("注册成功跳转地址")]),t._v(" "),s("td",[t._v("非必要")]),t._v(" "),s("td",[t._v("默认为主页"),s("code",[t._v("https://www.bilibili.com/")])])])])]),t._v(" "),s("p",[s("strong",[t._v("json回复：")])]),t._v(" "),s("p",[t._v("根对象：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("code")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("返回值")]),t._v(" "),s("td",[t._v("0：成功"),s("br"),t._v("1005：验证码错误"),s("br"),t._v("1007：验证码过期")])]),t._v(" "),s("tr",[s("td",[t._v("message")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("错误信息")]),t._v(" "),s("td",[t._v("成功时无此字段")])]),t._v(" "),s("tr",[s("td",[t._v("data")]),t._v(" "),s("td",[t._v("obj")]),t._v(" "),s("td",[t._v("信息本体")]),t._v(" "),s("td",[t._v("只在成功时存在")])])])]),t._v(" "),s("p",[s("code",[t._v("data")]),t._v("对象：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("redirectUrl")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("跳转链接")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("hint")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v('"注册成功"')]),t._v(" "),s("td",[t._v("成功后不提示成功还能提示什么?")])]),t._v(" "),s("tr",[s("td",[t._v("in_reg_audit")]),t._v(" "),s("td",[t._v("num")]),t._v(" "),s("td",[t._v("(?)")]),t._v(" "),s("td")])])]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://passport.bilibili.com/web/reg/tel'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'plat=0'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cid=1'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tel=13888888888'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'code=121314'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nickName=萌系小妹纸わ'")]),t._v("\n    --data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pwd=Password1234'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --data-urlencode "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gourl=https://www.bilibili.com'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("details",[s("summary",[t._v("查看示例")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"redirectUrl"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.bilibili.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hint"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"注册成功"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"in_reg_audit"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);