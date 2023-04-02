(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{329:function(_,t,v){"use strict";v.r(t);var s=v(7),r=Object(s.a)({},(function(){var _=this,t=_._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"程序执行原理-科普"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#程序执行原理-科普"}},[_._v("#")]),_._v(" 程序执行原理（科普）")]),_._v(" "),t("h2",{attrs:{id:"目标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目标"}},[_._v("#")]),_._v(" 目标")]),_._v(" "),t("ul",[t("li",[_._v("计算机中的 "),t("strong",[_._v("三大件")])]),_._v(" "),t("li",[_._v("程序执行的原理")]),_._v(" "),t("li",[_._v("程序的作用")])]),_._v(" "),t("h2",{attrs:{id:"_01-计算机中的三大件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_01-计算机中的三大件"}},[_._v("#")]),_._v(" 01. 计算机中的三大件")]),_._v(" "),t("p",[_._v("计算机中包含有较多的硬件，但是一个程序要运行，有 "),t("strong",[_._v("三个")]),_._v(" 核心的硬件，分别是：")]),_._v(" "),t("ol",[t("li",[t("strong",[_._v("CPU")]),_._v(" "),t("ul",[t("li",[_._v("中央处理器，是一块超大规模的集成电路")]),_._v(" "),t("li",[_._v("负责 "),t("strong",[_._v("处理数据")]),_._v("／"),t("strong",[_._v("计算")])])])]),_._v(" "),t("li",[t("strong",[_._v("内存")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("临时")]),_._v(" 存储数据（断电之后，数据会消失）")]),_._v(" "),t("li",[_._v("速度快")]),_._v(" "),t("li",[_._v("空间小（单位价格高）")])])]),_._v(" "),t("li",[t("strong",[_._v("硬盘")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("永久")]),_._v(" 存储数据")]),_._v(" "),t("li",[_._v("速度慢")]),_._v(" "),t("li",[_._v("空间大（单位价格低）")])])])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"center"}},[_._v("CPU")]),_._v(" "),t("th",{staticStyle:{"text-align":"center"}},[_._v("内存")]),_._v(" "),t("th",{staticStyle:{"text-align":"center"}},[_._v("硬盘")])])]),_._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"center"}},[t("img",{attrs:{src:"media/14951694921910/CPU.jpg",alt:"CPU-w200"}})]),_._v(" "),t("td",{staticStyle:{"text-align":"center"}},[t("img",{attrs:{src:"media/14951694921910/%E5%86%85%E5%AD%98%E6%9D%A1.png",alt:"内存条-w200"}})]),_._v(" "),t("td",{staticStyle:{"text-align":"center"}},[t("img",{attrs:{src:"media/14951694921910/%E7%A1%AC%E7%9B%98.jpg",alt:"硬盘-w200"}})])])])]),_._v(" "),t("h3",{attrs:{id:"思考题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#思考题"}},[_._v("#")]),_._v(" 思考题")]),_._v(" "),t("ol",[t("li",[_._v("计算机中哪一个硬件设备负责执行程序？\n"),t("ul",[t("li",[t("strong",[_._v("CPU")])])])]),_._v(" "),t("li",[t("strong",[_._v("内存")]),_._v(" 的速度快还是 "),t("strong",[_._v("硬盘")]),_._v(" 的速度快？\n"),t("ul",[t("li",[t("strong",[_._v("内存")])])])]),_._v(" "),t("li",[_._v("我们的程序是安装在内存中的，还是安装在硬盘中的？\n"),t("ul",[t("li",[_._v("硬盘")])])]),_._v(" "),t("li",[t("strong",[_._v("我买了一个内存条，有 500G 的空间！！！")]),_._v("，这句话对吗？\n"),t("ul",[t("li",[_._v("不对，内存条通常只有 "),t("code",[_._v("4G")]),_._v(" / "),t("code",[_._v("8G")]),_._v(" / "),t("code",[_._v("16G")]),_._v(" / "),t("code",[_._v("32G")])])])]),_._v(" "),t("li",[t("strong",[_._v("计算机关机之后，内存中的数据都会消失")]),_._v("，这句话对吗？\n"),t("ul",[t("li",[_._v("正确")])])])]),_._v(" "),t("h2",{attrs:{id:"_02-程序执行的原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_02-程序执行的原理"}},[_._v("#")]),_._v(" 02. 程序执行的原理")]),_._v(" "),t("p",[t("img",{attrs:{src:"media/14951694921910/001_%E7%A8%8B%E5%BA%8F%E6%89%A7%E8%A1%8C%E7%A4%BA%E6%84%8F%E5%9B%BE.png",alt:"001_程序执行示意图-w"}})]),_._v(" "),t("ol",[t("li",[_._v("程序 "),t("strong",[_._v("运行之前")]),_._v("，程序是 "),t("strong",[_._v("保存在硬盘")]),_._v(" 中的")]),_._v(" "),t("li",[_._v("当要运行一个程序时\n"),t("ul",[t("li",[_._v("操作系统会首先让 "),t("strong",[_._v("CPU")]),_._v(" 把程序复制到 "),t("strong",[_._v("内存")]),_._v(" 中")]),_._v(" "),t("li",[t("strong",[_._v("CPU")]),_._v(" 执行 "),t("strong",[_._v("内存")]),_._v(" 中的 "),t("strong",[_._v("程序代码")])])])])]),_._v(" "),t("blockquote",[t("p",[t("strong",[_._v("程序要执行，首先要被加载到内存")])])]),_._v(" "),t("h3",{attrs:{id:"_2-1-python-程序执行原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-python-程序执行原理"}},[_._v("#")]),_._v(" 2.1 Python 程序执行原理")]),_._v(" "),t("p",[t("img",{attrs:{src:"media/14951694921910/003_Python%E7%A8%8B%E5%BA%8F%E6%89%A7%E8%A1%8C%E7%A4%BA%E6%84%8F%E5%9B%BE.png",alt:"003_Python程序执行示意图"}})]),_._v(" "),t("ol",[t("li",[_._v("操作系统会首先让 "),t("strong",[_._v("CPU")]),_._v(" 把 "),t("strong",[_._v("Python 解释器")]),_._v(" 的程序复制到 "),t("strong",[_._v("内存")]),_._v(" 中")]),_._v(" "),t("li",[t("strong",[_._v("Python 解释器")]),_._v(" 根据语法规则，"),t("strong",[_._v("从上向下")]),_._v(" 让 "),t("strong",[_._v("CPU")]),_._v(" 翻译 "),t("strong",[_._v("Python 程序中的代码")])]),_._v(" "),t("li",[t("strong",[_._v("CPU")]),_._v(" 负责执行翻译完成的代码")])]),_._v(" "),t("h4",{attrs:{id:"python-的解释器有多大"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#python-的解释器有多大"}},[_._v("#")]),_._v(" Python 的解释器有多大？")]),_._v(" "),t("ul",[t("li",[_._v("执行以下终端命令可以查看 Python 解释器的大小")])]),_._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[_._v("# 1. 确认解释器所在位置")]),_._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[_._v("which")]),_._v(" python\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[_._v("# 2. 查看 python 文件大小(只是一个软链接)")]),_._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[_._v("ls")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[_._v("-lh")]),_._v(" /usr/bin/python\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[_._v("# 3. 查看具体文件大小")]),_._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[_._v("ls")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[_._v("-lh")]),_._v(" /usr/bin/python2.7\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br"),t("span",{staticClass:"line-number"},[_._v("2")]),t("br"),t("span",{staticClass:"line-number"},[_._v("3")]),t("br"),t("span",{staticClass:"line-number"},[_._v("4")]),t("br"),t("span",{staticClass:"line-number"},[_._v("5")]),t("br"),t("span",{staticClass:"line-number"},[_._v("6")]),t("br"),t("span",{staticClass:"line-number"},[_._v("7")]),t("br"),t("span",{staticClass:"line-number"},[_._v("8")]),t("br")])]),t("blockquote",[t("p",[_._v("提示：建立 "),t("strong",[_._v("软链接")]),_._v(" 的目的，是为了方便使用者不用记住使用的解释器是 "),t("strong",[_._v("哪一个具体版本")])])]),_._v(" "),t("h2",{attrs:{id:"_03-程序的作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_03-程序的作用"}},[_._v("#")]),_._v(" 03. 程序的作用")]),_._v(" "),t("blockquote",[t("p",[_._v("程序就是 "),t("strong",[_._v("用来处理数据")]),_._v(" 的！")])]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("新闻软件")]),_._v(" 提供的 "),t("strong",[_._v("新闻内容、评论……")]),_._v(" 是数据")]),_._v(" "),t("li",[t("strong",[_._v("电商软件")]),_._v(" 提供的 "),t("strong",[_._v("商品信息、配送信息……")]),_._v(" 是数据")]),_._v(" "),t("li",[t("strong",[_._v("运动类软件")]),_._v(" 提供的 "),t("strong",[_._v("运动数据……")]),_._v(" 是数据")]),_._v(" "),t("li",[t("strong",[_._v("地图类软件")]),_._v(" 提供的 "),t("strong",[_._v("地图信息、定位信息、车辆信息……")]),_._v(" 是数据")]),_._v(" "),t("li",[t("strong",[_._v("即时通讯软件")]),_._v(" 提供的 "),t("strong",[_._v("聊天信息、好友信息……")]),_._v(" 是数据")]),_._v(" "),t("li",[_._v("……")])]),_._v(" "),t("h3",{attrs:{id:"_3-1-思考-qq-程序的启动过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-思考-qq-程序的启动过程"}},[_._v("#")]),_._v(" 3.1 思考 QQ 程序的启动过程")]),_._v(" "),t("ol",[t("li",[_._v("QQ 在"),t("strong",[_._v("运行之前")]),_._v("，是保存在 "),t("strong",[_._v("硬盘")]),_._v(" 中的")]),_._v(" "),t("li",[t("strong",[_._v("运行之后")]),_._v("，QQ 程序就会被加载到 "),t("strong",[_._v("内存")]),_._v(" 中了")])]),_._v(" "),t("p",[t("img",{attrs:{src:"media/14951694921910/003_QQ%E7%99%BB%E9%99%86%E7%95%8C%E9%9D%A2.png",alt:"003_QQ登陆界面-w248"}})]),_._v(" "),t("h3",{attrs:{id:"_3-2-思考-qq-程序的-登录-过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-思考-qq-程序的-登录-过程"}},[_._v("#")]),_._v(" 3.2 思考 QQ 程序的 "),t("strong",[_._v("登录")]),_._v(" 过程")]),_._v(" "),t("ol",[t("li",[_._v("读取用户输入的 "),t("strong",[_._v("QQ 号码")])]),_._v(" "),t("li",[_._v("读取用户输入的 "),t("strong",[_._v("QQ 密码")])]),_._v(" "),t("li",[_._v("将 "),t("strong",[_._v("QQ 号码")]),_._v(" 和 "),t("strong",[_._v("QQ 密码")]),_._v(" 发送给腾讯的服务器，等待服务器确认用户信息")])]),_._v(" "),t("h4",{attrs:{id:"思考-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#思考-1"}},[_._v("#")]),_._v(" 思考 1")]),_._v(" "),t("blockquote",[t("p",[_._v("在 QQ 这个程序将 "),t("strong",[_._v("QQ 号码")]),_._v(" 和 "),t("strong",[_._v("QQ 密码")]),_._v(" 发送给服务器之前，"),t("strong",[_._v("是否需要先存储一下 QQ 号码 和 密码?")])])]),_._v(" "),t("p",[t("strong",[_._v("答案")])]),_._v(" "),t("p",[_._v("肯定需要！—— 否则 QQ 这个程序就不知道把什么内容发送给服务器了！")]),_._v(" "),t("h4",{attrs:{id:"思考-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#思考-2"}},[_._v("#")]),_._v(" 思考 2")]),_._v(" "),t("blockquote",[t("p",[_._v("QQ 这个程序把 "),t("strong",[_._v("QQ 号码")]),_._v(" 和 "),t("strong",[_._v("QQ 密码")]),_._v(" 保存在哪里？")])]),_._v(" "),t("p",[t("strong",[_._v("答案")])]),_._v(" "),t("p",[_._v("保存在 "),t("strong",[_._v("内存")]),_._v(" 中，因为 QQ 程序自己就在内存中")]),_._v(" "),t("h4",{attrs:{id:"思考-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#思考-3"}},[_._v("#")]),_._v(" 思考 3")]),_._v(" "),t("blockquote",[t("p",[_._v("QQ 这个程序是怎么保存用户的 "),t("strong",[_._v("QQ 号码")]),_._v(" 和 "),t("strong",[_._v("QQ 密码")]),_._v(" 的？")])]),_._v(" "),t("p",[t("strong",[_._v("答案")])]),_._v(" "),t("ol",[t("li",[_._v("在内存中为 "),t("strong",[_._v("QQ 号码")]),_._v(" 和 "),t("strong",[_._v("QQ 密码")]),_._v(" 各自分配一块空间\n"),t("ul",[t("li",[_._v("在 QQ 程序结束之前，这两块空间是由 QQ 程序负责管理的，其他任何程序都不允许使用")]),_._v(" "),t("li",[_._v("在 QQ 自己使用完成之前，这两块空间始终都只负责保存 "),t("strong",[_._v("QQ 号码")]),_._v(" 和 "),t("strong",[_._v("QQ 密码")])])])]),_._v(" "),t("li",[_._v("使用一个 "),t("strong",[_._v("别名")]),_._v(" 标记 "),t("strong",[_._v("QQ 号码")]),_._v(" 和 "),t("strong",[_._v("QQ 密码")]),_._v(" 在内存中的位置")])]),_._v(" "),t("p",[t("img",{attrs:{src:"media/14951694921910/004_QQ%E5%8F%B7%E7%A0%81%E5%92%8C%E5%AF%86%E7%A0%81%E5%86%85%E5%AD%98%E7%A4%BA%E6%84%8F%E5%9B%BE.png",alt:"004_QQ号码和密码内存示意图"}})]),_._v(" "),t("blockquote",[t("ul",[t("li",[_._v("在程序内部，为 "),t("strong",[_._v("QQ 号码")]),_._v(" 和 "),t("strong",[_._v("QQ 密码")]),_._v(" 在内存中分配的空间就叫做 "),t("strong",[_._v("变量")])]),_._v(" "),t("li",[t("strong",[_._v("程序就是用来处理数据的，而变量就是用来存储数据的")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);