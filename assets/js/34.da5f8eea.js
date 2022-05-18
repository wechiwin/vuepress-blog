(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{596:function(_,v,a){"use strict";a.r(v);var t=a(17),e=Object(t.a)({},(function(){var _=this,v=_.$createElement,a=_._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h2",{attrs:{id:"_1-单行注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-单行注释"}},[_._v("#")]),_._v(" 1）单行注释")]),_._v(" "),a("p",[_._v("//………")]),_._v(" "),a("h2",{attrs:{id:"_2-多行注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-多行注释"}},[_._v("#")]),_._v(" 2）多行注释")]),_._v(" "),a("p",[_._v("多行注释可以嵌套单行注释，但是不能嵌套多行注释。")]),_._v(" "),a("p",[_._v("原因：")]),_._v(" "),a("p",[_._v("> 链接：https://www.nowcoder.com/questionTerminal/730f76303be9487dbcafad54f2f61824")]),_._v(" "),a("p",[_._v("> Java中规定，多行注释可以嵌套单行注释，但是不能嵌套多行注释。")]),_._v(" "),a("p",[_._v("> 不太能理解原因的朋友不妨这样想，如果多行注释/"),a("em",[_._v("A//B")]),_._v("/完全可以将内部的A//B作为普通字符串来理解，没有所谓单行不单行之说，所以可以嵌套单行注释。")]),_._v(" "),a("p",[_._v("> 但是如果是嵌套多行注释呢可以看看/"),a("em",[_._v("A/"),a("em",[_._v("B")]),_._v("/C")]),_._v("/，到编译器遇到多行注释的时候会以’/"),a("em",[_._v("A/"),a("em",[_._v("B")]),_._v("/’来作为匹配的字符串，从而C")]),_._v("/会被理解为程序语句，而C*/显然不符合程序语法，因此这样想就能理解为什么不能多行注释嵌套多行注释了。")]),_._v(" "),a("p",[_._v("格式如下。")]),_._v(" "),a("p",[_._v("/*")]),_._v(" "),a("p",[_._v("…")]),_._v(" "),a("p",[_._v("…")]),_._v(" "),a("p",[_._v("…")]),_._v(" "),a("p",[_._v("*/")]),_._v(" "),a("h2",{attrs:{id:"_3-文档注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-文档注释"}},[_._v("#")]),_._v(" 3）文档注释")]),_._v(" "),a("p",[_._v("Javadoc注释，这种注释是比较专业的注释，该注释信息会被 javadoc.exe 工具解析提取并生成帮助文档。")]),_._v(" "),a("p",[_._v("/**")]),_._v(" "),a("p",[_._v("* …")]),_._v(" "),a("p",[_._v("* …")]),_._v(" "),a("p",[_._v("* …")]),_._v(" "),a("p",[_._v("*/")]),_._v(" "),a("h2",{attrs:{id:"_4-注释真的不会被执行吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-注释真的不会被执行吗"}},[_._v("#")]),_._v(" 4）注释真的不会被执行吗？")]),_._v(" "),a("p",[_._v("不会被执行，可以通过反编译程序打开class文件，里面是没有注释的。")]),_._v(" "),a("h2",{attrs:{id:"_5-优秀的程序员真的不写注释吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-优秀的程序员真的不写注释吗"}},[_._v("#")]),_._v(" 5）优秀的程序员真的不写注释吗")]),_._v(" "),a("p",[_._v("不可能，注释是一定要写的。")])])}),[],!1,null,null,null);v.default=e.exports}}]);