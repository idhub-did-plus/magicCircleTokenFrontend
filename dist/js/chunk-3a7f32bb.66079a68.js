(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a7f32bb","chunk-056e9cfa"],{"026e":function(e,t,a){},"0471":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"list"},[a("div",[a("table",[e._m(0),e._l(e.tokenList,(function(t){return a("tr",{key:t.id},[a("td",[a("a",{on:{click:function(a){return e.toDetail(t.address)}}},[e._v(e._s(t.name))])]),a("td",[e._v(e._s(t.symbol))]),a("td",[e._v(e._s(t.address))])])}))],2)])])},d=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",[a("th",[e._v("Token Name")]),a("th",[e._v("Symbol")]),a("th",[e._v("Token Address")])])}],n={data:function(){return{tokenList:[{id:1,name:"Demo_IdentiyHubSecurityToken",symbol:"DIDH_ST",address:"0x189c398be0d95defeec71afdb725ba190069bbcb"},{id:2,name:"Demo_MagicCircleSecurityToken  ",symbol:"DMC_ST ",address:"0xf7f9bb90fe43886a1b459071ebadd3a625b4486c"},{id:3,name:"Demo_Apple,Inc.SecurityToken",symbol:"DAAPL_ST",address:"0xfb62598385eb545ba258e7f19a0dcf2dffca65e8"},{id:4,name:"Demo_Alphabet,Inc.SecurityToken",symbol:"DGOOG_ST",address:"0xae624cf3239a21deb8deb4e7ed5f9db82052912a"},{id:5,name:"Demo_AmazonSecurityToken",symbol:"DAMZN_ST",address:"0xe82016723aff3b29a6362af88b7644af83623d6f"},{id:6,name:"Demo_Facebook,Inc.SecurityToken",symbol:"DFB_ST",address:"0x1cda98775f075cbd6e287fc76ab469b18e45bfb0"},{id:7,name:"Demo_AlibabaGroupHoldingLtdST",symbol:"DBABA_ST",address:"0xf63155093e63886b8616ee5a827f18fe9a47c722"}]}},methods:{toDetail:function(e){""!=this.Addr&&this.$router.push({path:"detail",query:{addr:e}})}}},r=n,i=(a("cd96"),a("2877")),o=Object(i["a"])(r,s,d,!1,null,null,null);t["default"]=o.exports},"402c":function(e,t,a){"use strict";var s=a("026e"),d=a.n(s);d.a},"4e22":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"search"},[a("Header"),a("List")],1)},d=[],n=a("0471"),r=a("71c2"),i={components:{List:n["default"],Header:r["a"]}},o=i,c=a("2877"),u=Object(c["a"])(o,s,d,!1,null,null,null);t["default"]=u.exports},"534f":function(e,t,a){e.exports=a.p+"img/logo1.5ba340f8.png"},"71c2":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"header"},[s("div",{attrs:{id:"headerBox"}},[s("div",{staticClass:"head"},[s("div",{attrs:{id:"logoBox"}},[s("img",{attrs:{src:a("534f"),alt:""},on:{click:e.home}})]),s("div",{attrs:{id:"searchBox"}},[s("form",{attrs:{action:"",autocomplete:"off"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],attrs:{type:"text",id:"text",placeholder:"Search by Address"},domProps:{value:e.address},on:{input:function(t){t.target.composing||(e.address=t.target.value)}}}),s("button",{on:{click:e.detail}},[s("img",{attrs:{src:a("eb5c"),alt:""}})])])])])])])},d=[],n={data:function(){return{address:""}},methods:{detail:function(){""!=this.address&&this.$router.push({path:"detail",query:{addr:this.address}})},home:function(){this.$router.push({path:"search"})}}},r=n,i=(a("402c"),a("2877")),o=Object(i["a"])(r,s,d,!1,null,"6309d3b8",null);t["a"]=o.exports},b4f6:function(e,t,a){},cd96:function(e,t,a){"use strict";var s=a("b4f6"),d=a.n(s);d.a},eb5c:function(e,t,a){e.exports=a.p+"img/放大镜.da5fbd93.png"}}]);
//# sourceMappingURL=chunk-3a7f32bb.66079a68.js.map