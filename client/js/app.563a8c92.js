(function(t){function e(e){for(var a,n,r=e[0],l=e[1],c=e[2],u=0,d=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&d.push(s[n][0]),s[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],a=!0,n=1;n<i.length;n++){var r=i[n];0!==s[r]&&(a=!1)}a&&(o.splice(e--,1),t=l(l.s=i[0]))}return t}var a={},n={app:0},s={app:0},o=[];function r(t){return l.p+"js/"+({"admin~voter":"admin~voter",admin:"admin",voter:"voter"}[t]||t)+"."+{"admin~voter":"c4215e32",admin:"256e7d8d",voter:"92c9e0e8"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.e=function(t){var e=[],i={"admin~voter":1,voter:1};n[t]?e.push(n[t]):0!==n[t]&&i[t]&&e.push(n[t]=new Promise((function(e,i){for(var a="css/"+({"admin~voter":"admin~voter",admin:"admin",voter:"voter"}[t]||t)+"."+{"admin~voter":"2d143d23",admin:"31d6cfe0",voter:"dc59dc54"}[t]+".css",s=l.p+a,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var c=o[r],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===s))return e()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){c=d[r],u=c.getAttribute("data-href");if(u===a||u===s)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete n[t],p.parentNode.removeChild(p),i(o)},p.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){n[t]=0})));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,i){a=s[t]=[e,i]}));e.push(a[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=r(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(p);var i=s[t];if(0!==i){if(i){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",d.name="ChunkLoadError",d.type=a,d.request=n,i[1](d)}s[t]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,i){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(i,a,function(e){return t[e]}.bind(null,a));return i},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var p=u;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("cd49")},9298:function(t,e,i){},cd49:function(t,e,i){"use strict";i.r(e);i("109d");var a=i("e832"),n=i("072b"),s=i("4af9"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-content",[i("Navbar",{attrs:{app:""}}),i("v-container",{class:{"pa-0":t.$vuetify.breakpoint.xs},attrs:{fluid:"","fill-height":t.$vuetify.breakpoint.smAndUp}},[i("v-layout",{staticClass:"pt-2",attrs:{"justify-center":""}},[i("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[i("v-card",{attrs:{flat:t.$vuetify.breakpoint.xs,tile:t.$vuetify.breakpoint.xs}},[i("v-card-title",{attrs:{"primary-title":""}},[t._v("\n            Daftar Quick Count\n          ")]),i("v-list",t._l(t.list,(function(e,a){return i("v-list-item",{key:a,attrs:{to:"/result/"+e.id}},[i("v-list-item-avatar",[i("v-icon",{directives:[{name:"show",rawName:"v-show",value:e.fetched,expression:"item.fetched"}],class:e.statusClass,domProps:{textContent:t._s(e.statusIcon)}}),i("v-progress-circular",{directives:[{name:"show",rawName:"v-show",value:!e.fetched,expression:"!item.fetched"}],attrs:{indeterminate:""}})],1),i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:t._s(e.name)}}),i("v-list-item-subtitle",{domProps:{textContent:t._s(e.status)}})],1)],1)})),1)],1),i("v-card",{staticClass:"pt-5",attrs:{flat:"",color:"transparent"}},[i("ListSponsor",{attrs:{hide:"true"}})],1)],1)],1)],1)],1)},r=[],l=i("6dbe"),c=i("95ad"),u=i("d178"),d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.list=[],e.statusIcon={Selesai:"mdi-check-all","Belum Dimulai":"mdi-alarm-off",Dihitung:"mdi-alarm"},e.statusClass={Selesai:"success white--text","Belum Dimulai":"grey white--text",Dihitung:"warning white--text"},e.fetch=function(t,i,a){var n=0,s=function(a){var s=t.locations[a];fetch(e.$api.url+"/public/"+i+"-"+a+".json").then((function(t){404==t.status?e.$set(s,"status","Belum Dimulai"):t.json().then((function(t){e.$set(s,"status",t.finished?"Selesai":"Dihitung")}))})).finally((function(){e.$set(s,"statusIcon",e.statusIcon[s.status]),e.$set(s,"statusClass",e.statusClass[s.status]),e.$set(s,"fetched",!0),++n==t.locations.length&&e.onAllTpsFetched(t)}))};for(var o in t.locations)s(o)},e}return Object(l["d"])(e,t),e.prototype.created=function(){var t=this;this.$api.listQuickcount().then((function(e){t.list=e.filter((function(t,e){return t.id=e,!t.hide})),e.forEach(t.fetch)}))},e.prototype.onAllTpsFetched=function(t){var e=t.locations.reduce((function(t,e){return t[e.status]++,t}),{Selesai:0,Dihitung:0,"Belum Dimulai":0});this.$set(t,"status",Object.keys(e).reduce((function(i,a,n){return e[a]==t.locations.length?a:i}),"Dihitung")),this.$set(t,"statusIcon",this.statusIcon[t.status]),this.$set(t,"statusClass",this.statusClass[t.status]),this.$set(t,"allStatus",e),this.$set(t,"fetched",!0)},e=Object(l["c"])([Object(c["a"])({name:"Home",components:{Navbar:u["a"]}})],e),e}(c["c"]),p=d,m=p,v=i("a6c2"),h=i("411c"),f=i.n(h),b=i("d58c"),g=i("e47e"),y=i("f56c"),x=i("d0fe"),_=i("04f4"),k=i("b503"),C=i("6a74"),V=i("add5"),j=i("d751"),S=i("c772"),w=i("27a3"),O=i("2d4e"),L=Object(v["a"])(m,o,r,!1,null,null,null),P=L.exports;f()(L,{VCard:b["a"],VCardTitle:g["c"],VContainer:y["a"],VContent:x["a"],VFlex:_["a"],VIcon:k["a"],VLayout:C["a"],VList:V["a"],VListItem:j["a"],VListItemAvatar:S["a"],VListItemContent:w["b"],VListItemSubtitle:w["c"],VListItemTitle:w["d"],VProgressCircular:O["a"]});var T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-content",[i("Navbar",{attrs:{back:"",title:"About"}}),i("v-container",{class:{"pa-0":t.$vuetify.breakpoint.xs},attrs:{fluid:"","fill-height":t.$vuetify.breakpoint.smAndUp}},[i("v-layout",{attrs:{"align-center":"","justify-center":""}},[i("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[i("v-card",{attrs:{flat:t.$vuetify.breakpoint.xs,tile:t.$vuetify.breakpoint.xs}},[i("v-card-title",{attrs:{"primary-title":""}},[t._v("Aplikasi QuickCount")]),i("v-card-text",[t._v("\n            Aplikasi QuickCount ini dibuat dengan tujuan untuk mendukung\n            transparasi dalam proses pemilihan umum.\n          ")]),i("v-card-text",[i("p",[t._v("\n              Kami tidak menjamin bahwa data yang kami sajikan 100% akurat,\n              karena kesalahan input mungkin saja terjadi.\n            ")]),i("p",[t._v("\n              Website ini hanya bersifat sebagai "),i("i",[t._v("referensi")]),t._v(" dan\n              keputusan hasil akhir tetap berada pada pihak penyelenggara.\n            ")]),i("p",[i("b",[t._v("Keluhan, Kritik dan Saran:")]),i("a",{attrs:{href:"mailto:klampok.child@gmail.com"}},[t._v("\n                klampok.child@gmail.com\n              ")])])]),i("v-divider"),i("ListSponsor")],1)],1)],1)],1)],1)},$=[],I=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(l["d"])(e,t),e=Object(l["c"])([Object(c["a"])({name:"About",components:{Navbar:u["a"]}})],e),e}(c["c"]),D=I,A=D,R=i("224b"),E=Object(v["a"])(A,T,$,!1,null,null,null),N=E.exports;f()(E,{VCard:b["a"],VCardText:g["b"],VCardTitle:g["c"],VContainer:y["a"],VContent:x["a"],VDivider:R["a"],VFlex:_["a"],VLayout:C["a"]});var B=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-content",[i("Navbar",{attrs:{back:"",color:t.color,title:t.title}}),i("v-container",{class:{"pa-0":t.$vuetify.breakpoint.xs},attrs:{"grid-list-md":""}},[t.ready?i("v-layout",{attrs:{wrap:""}},[i("v-flex",{attrs:{xs12:"",sm6:"",md4:"",xl4:""}},[i("v-card",{attrs:{flat:t.$vuetify.breakpoint.xs,tile:t.$vuetify.breakpoint.xs,height:"100%"}},[i("v-list-item",{attrs:{"two-line":""}},[i("v-list-item-content",[i("v-list-item-title",{staticClass:"headline"},[t._v("\n                Perolehan Suara\n              ")]),i("v-list-item-subtitle",[t._v("\n                Diurutkan berdasarkan jumlah pemilih\n              ")])],1)],1),t.sortedResults.length?i("ResultBoard",{attrs:{list:t.sortedResults},on:{click:t.candidateClick}}):""==t.status?i("v-card-text",{staticClass:"text-center"},[i("v-progress-circular",{attrs:{color:t.color,large:"",size:"100",indeterminate:""}})],1):i("v-alert",{attrs:{color:t.color,dark:"",tile:""}},[t._v("Belum Tersedia")])],1)],1),i("v-flex",{attrs:{xs12:"",sm6:"",md4:"",xl4:""}},[i("v-card",{attrs:{flat:t.$vuetify.breakpoint.xs,tile:t.$vuetify.breakpoint.xs,height:"100%"}},[i("v-list-item",{attrs:{"two-line":""}},[i("v-list-item-content",[i("v-list-item-title",{staticClass:"headline",domProps:{textContent:t._s(t.name)}}),i("v-list-item-subtitle",{domProps:{textContent:t._s(t.desc)}})],1)],1),i("v-card-text",[i("v-layout",{attrs:{"align-center":""}},[i("v-flex",{attrs:{xs6:"","text-center":""}},[i("div",{staticClass:"display-3",domProps:{textContent:t._s(t.total||"?")}}),i("div",{staticClass:"subtitle"},[t._v("Suara")])]),i("v-flex",{attrs:{xs6:"","text-center":""}},[i("v-progress-circular",{attrs:{rotate:180,size:120,width:15,value:t.percent,color:t.color}},[t._v("\n                  "+t._s(t.percent)+"%\n                ")])],1)],1)],1),i("v-list",{staticClass:"transparent"},[i("v-list-item",[i("v-list-item-title",[t._v("Status")]),i("v-list-item-subtitle",{staticClass:"text-right"},[i("v-chip",{attrs:{color:t.color},domProps:{textContent:t._s(t.status)}})],1)],1),i("v-list-item",[i("v-list-item-title",{staticStyle:{"flex-basis":"auto"}},[t._v("Dimulai")]),i("v-list-item-subtitle",{staticClass:"text-right",staticStyle:{"flex-basis":"auto"}},[i("v-chip",{attrs:{color:t.color},domProps:{textContent:t._s(t.startedDate)}})],1)],1),i("v-list-item",[i("v-list-item-title",{staticStyle:{"flex-basis":"auto"}},[t._v("Diupdate")]),i("v-list-item-subtitle",{staticClass:"text-right",staticStyle:{"flex-basis":"auto"}},[i("v-chip",{attrs:{color:t.color},domProps:{textContent:t._s(t.updatedDate)}})],1)],1),i("v-list-item",[i("v-list-item-title",[t._v("Jumlah Kandidat")]),i("v-list-item-subtitle",{staticClass:"text-right"},[i("v-chip",{attrs:{color:t.color},domProps:{textContent:t._s(t.candidates.length)}})],1)],1)],1)],1)],1),i("v-flex",{attrs:{xs12:"",sm6:"",md4:"",xl4:""}},[i("ResultDetail",{attrs:{locations:t.locations,candidates:t.candidates,details:t.details}})],1),i("v-flex",{attrs:{xs12:"",sm6:"",md4:"",xl4:""}},[i("v-card",{attrs:{flat:t.$vuetify.breakpoint.xs,tile:t.$vuetify.breakpoint.xs}},[i("v-list-item",{attrs:{"two-line":""}},[i("v-list-item-content",[i("v-list-item-title",{staticClass:"headline"},[t._v("\n                Ringkasan Setiap TPS\n              ")]),i("v-list-item-subtitle",[t._v("\n                Data pada setiap TPS\n              ")])],1)],1),i("v-list",t._l(t.locations,(function(e){return i("v-list-group",{key:e.name,attrs:{"no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:t._s(e.name)}}),i("v-list-item-subtitle",[t._v("Suara Masuk: "+t._s(e.total)+" ("+t._s((100/e.participant*e.total).toFixed(2))+"%)")])],1),i("v-list-item-action",[i("v-list-item-action-text",[i("v-chip",{class:t.statusClass[e.status]},[t._v(t._s(e.status))])],1)],1)]},proxy:!0}],null,!0)},[i("ResultBoard",{attrs:{list:e.sortedResults,locationName:e.name},on:{click:t.candidateClick}})],1)})),1)],1)],1)],1):i("v-layout",{attrs:{"align-center":"","justify-center":""}},[i("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[i("v-sheet",{staticClass:"text-center pa-5 elevation-3",attrs:{flat:t.$vuetify.breakpoint.xs,tile:t.$vuetify.breakpoint.xs,dark:"",color:t.color}},[i("v-progress-circular",{attrs:{large:"",indeterminate:""}}),i("h1",{staticClass:"title"},[t._v("Please Wait")])],1)],1)],1)],1),i("v-dialog",{ref:"dialog",attrs:{"max-width":"500",scrollable:""},model:{value:t.dialogVisible,callback:function(e){t.dialogVisible=e},expression:"dialogVisible"}},[i("ResultCandidate",t._b({on:{click:function(e){t.dialogVisible=!1}}},"ResultCandidate",t.dialogData,!1))],1)],1)},F=[],M=function(t,e){var i=e._c;return i("v-card",{staticClass:"d-flex",staticStyle:{"flex-direction":"column"},attrs:{height:"100%",flat:e.parent.$vuetify.breakpoint.xs,tile:e.parent.$vuetify.breakpoint.xs}},[i("v-list-item",{staticStyle:{flex:"0"},attrs:{"two-line":""}},[i("v-list-item-content",[i("v-list-item-title",{staticClass:"headline"},[e._v("\n        Statistik Total\n      ")]),i("v-list-item-subtitle",[e._v("\n        Informasi perhitungan rinci\n      ")])],1)],1),i("v-list",e._l(e.props.details,(function(t,a){return i("v-list-item",{key:a},[i("v-list-item-title",{staticStyle:{"flex-basis":"auto"}},[e._v(e._s(a))]),i("v-list-item-subtitle",{staticClass:"text-right",staticStyle:{"flex-basis":"auto"}},[e._v("\n        "+e._s(t)+"\n      ")])],1)})),1),i("v-divider"),i("v-card-actions",{staticStyle:{flex:"1 0 auto"},attrs:{"text-center":""}},[i("v-container",{attrs:{"fill-height":"","pa-0":""}},[i("v-layout",{attrs:{"justify-center":"","align-center":""}},[i("ResultLogs",{attrs:{locations:e.props.locations,candidates:e.props.candidates}})],1)],1)],1)],1)},U=[],Q={},q=Object(v["a"])(Q,M,U,!0,null,null,null),G=q.exports;f()(q,{VCard:b["a"],VCardActions:g["a"],VContainer:y["a"],VDivider:R["a"],VLayout:C["a"],VList:V["a"],VListItem:j["a"],VListItemContent:w["b"],VListItemSubtitle:w["c"],VListItemTitle:w["d"]});var H=function(t,e){var i=e._c;return i("v-list",e._l(e.props.list,(function(t,a){return i("v-list-item",{key:a,on:{click:function(i){return e.listeners.click(t,e.props.locationName)}}},[i("v-list-item-avatar",{staticClass:"white--text",attrs:{color:e.color}},[i("span",{staticStyle:{position:"absolute"}},[e._v(e._s(a+1))]),t.image?i("v-img",{attrs:{src:t.image}}):e._e()],1),i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:e._s(t.name)}})],1),i("v-list-item-action",[i("v-icon",{attrs:{"v-show":!!t.move,color:t.moveColor},domProps:{textContent:e._s(t.move)}})],1),i("v-list-item-action",[i("v-chip",[e._v(e._s(t.count))])],1)],1)})),1)},K=[],W=(i("e925"),i("7c2d")),z=i("1331"),J=i("3a41"),X={},Y=Object(v["a"])(X,H,K,!0,null,null,null),Z=Y.exports;f()(Y,{VChip:W["a"],VIcon:k["a"],VImg:z["a"],VList:V["a"],VListItem:j["a"],VListItemAction:J["a"],VListItemAvatar:S["a"],VListItemContent:w["b"],VListItemTitle:w["d"]});var tt=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.name=null,e.desc=null,e.hide=void 0,e.candidates=[],e.locations=[],e.started=0,e.startedDate="",e.updated=0,e.updatedDate="",e.status="",e.accepted=0,e.declined=0,e.total=0,e.participant=0,e.results=[],e.sortedResults=[],e.id=0,e.ready=!1,e._timer=0,e.statusIcon={Selesai:"mdi-check-all","Belum Dimulai":"mdi-alarm-off",Dihitung:"mdi-alarm"},e.statusClass={Selesai:"success white--text","Belum Dimulai":"grey white--text",Dihitung:"warning white--text"},e.dialogVisible=!1,e.dialogData={item:{},locationName:null,locations:null},e}var i;return Object(l["d"])(e,t),i=e,Object.defineProperty(e.prototype,"details",{get:function(){return{"Total TPS":this.locations.length,"Total Pemilih":this.participant,"Suara Sah":this.accepted,"Suara Tidak Sah":this.declined,"Suara Total":this.total}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"title",{get:function(){return this.status?this.name+": "+this.status:this.name},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"color",{get:function(){switch(this.status){case"Selesai":return"success";case"Belum Dimulai":return"grey";case"Dihitung":return"warning";default:return"primary"}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"percent",{get:function(){return(100/this.participant*this.total).toFixed(2)},enumerable:!0,configurable:!0}),e.prototype.statusChanged=function(t,e){console.log("StatusCHanged",t,e)},e.prototype.candidateClick=function(t,e){var i=this;console.log("candidateClick",t,e),this.dialogData.item=t,e?(this.dialogData.locationName=e,this.dialogData.locations=null):(this.dialogData.locationName="Total",this.dialogData.locations=this.locations),this.$nextTick((function(){return i.dialogVisible=!0}))},e.prototype.getDate=function(t,e){var i;if(void 0===e&&(e=!1),this.locations&&(i=this.locations.filter((function(e){return!isNaN(e[t])&&e[t]>0}))).length){var a=i.reduce((function(i,a){return(e?i<a[t]:i>a[t])?a[t]:i||a[t]}),null);return this[t]=a,new Date(a).toLocaleString()}return"-"},e.prototype.created=function(){var t=this;this.id=parseInt(this.$route.params.id),this.$api.listQuickcount().then((function(e){if(!e[t.id])return t.$router.push("/");var i=e[t.id];if(i.id=t.id,i.hide)return t.$router.replace("/");for(var a in i)t[a]=i[a];t.candidates.forEach((function(e,i){e.id=i,t.$set(e,"count","?"),t.$set(e,"pos",e.number),t.$set(e,"move",""),t.$set(e,"moveColor","")})),t.results=t.candidates,t.locations.forEach((function(e,i){"string"==typeof e.participant&&(e.participant=parseInt(e.participant)),e.id=i,t.$set(e,"started",0),t.$set(e,"accepted",0),t.$set(e,"declined",0),t.$set(e,"total",0),t.$set(e,"results",[]),t.$set(e,"updated",0),t.$set(e,"status",null),t.$set(e,"sortedResults",[]);var a=e;t.candidates.forEach((function(e,i){for(var n in t.$set(a.results,i,{}),e)t.$set(a.results[i],n,e[n])})),t.participant+=e.participant})),t.ready=!0,t.$nextTick((function(){console.log("Tick Load results"),t.loadResult()}))}))},e.prototype.beforeDestroy=function(){clearTimeout(this.$data._timer),this.$data._timer=void 0},e.prototype.loadResult=function(){var t=this;"Selesai"!=this.status?this.loadTps().then((function(e){console.log("resolved",e),t.status=Object.keys(e).reduce((function(i,a,n){return e[a]==t.locations.length?a:i}),"Dihitung"),t.accepted=t.locations.reduce((function(t,e){return t+e.accepted}),0),t.declined=t.locations.reduce((function(t,e){return t+e.declined}),0),t.total=t.accepted+t.declined,t.startedDate=t.getDate("started"),t.updatedDate=t.getDate("updated",!0),t.candidates.forEach((function(e,i){e.count=t.locations.reduce((function(t,e,a){return t+(isNaN(e.results[i].count)?0:e.results[i].count)}),0)})),i.sortResults.call(t),"undefined"!=typeof t.$data._timer&&(t.$data._timer=setTimeout((function(){t.loadResult()}),1e4))})).catch(console.error):console.log("Status selesain, runtime checker off")},e.prototype.loadTps=function(){var t=this;return new Promise((function(e,a){var n=0,s=Date.now().toString(36)+"="+Date.now().toString(36),o=function(a){var o=t.$api.url+"/public/"+t.id+"-"+a+".json?"+s,r=t.locations[a];fetch(o).then((function(a){return Object(l["b"])(t,void 0,void 0,(function(){var t;return Object(l["e"])(this,(function(s){switch(s.label){case 0:return a.status<400?[4,a.json().then((function(t){for(var e in t.results.forEach((function(t,e){return r.results[e].count=t})),delete t.results,t)r[e]=t[e];r.status=t.finished?"Selesai":"Dihitung",i.sortResults.call(r)}))]:[3,2];case 1:return s.sent(),[3,3];case 2:r.status="Belum Dimulai",s.label=3;case 3:return++n==this.locations.length&&(t=this.locations.reduce((function(t,e){return t[e.status]++,t}),{Selesai:0,Dihitung:0,"Belum Dimulai":0}),e(t)),[2]}}))}))})).catch((function(t){return console.log(t.message)}))};for(var r in t.locations)o(r)}))},e.sortResults=function(){var t=this;this.sortedResults=this.results.slice().sort((function(t,e){return e.count-t.count})).map((function(e,i){return"Belum Dimulai"!=t.status&&(e.move=i+1==e.pos?"":i+1>e.pos?"mdi-arrow-down":"mdi-arrow-up",e.moveColor=i+1==e.pos?"":i+1>e.pos?"error":"success",e.pos=i+1),e}))},Object(l["c"])([Object(c["d"])("status")],e.prototype,"statusChanged",null),e=i=Object(l["c"])([Object(c["a"])({name:"Result",components:{Navbar:u["a"],ResultDetail:G,ResultBoard:Z}})],e),e}(c["c"]),et=tt,it=et,at=i("36c4"),nt=i("c56b"),st=i("9efb"),ot=i("db2c"),rt=Object(v["a"])(it,B,F,!1,null,null,null),lt=rt.exports;f()(rt,{VAlert:at["a"],VCard:b["a"],VCardText:g["b"],VChip:W["a"],VContainer:y["a"],VContent:x["a"],VDialog:nt["a"],VFlex:_["a"],VLayout:C["a"],VList:V["a"],VListGroup:st["a"],VListItem:j["a"],VListItemAction:J["a"],VListItemActionText:w["a"],VListItemContent:w["b"],VListItemSubtitle:w["c"],VListItemTitle:w["d"],VProgressCircular:O["a"],VSheet:ot["a"]}),a["default"].use(s["a"]);var ct=new s["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:P},{path:"/result/:id",name:"result",component:lt},{path:"/about",name:"about",component:N},{path:"/voter",component:function(){return Promise.all([i.e("admin~voter"),i.e("voter")]).then(i.bind(null,"4336"))},children:[{path:"",name:"voter-login",component:function(){return Promise.all([i.e("admin~voter"),i.e("voter")]).then(i.bind(null,"5fea"))}},{path:"dash/:id/:tps",name:"voter-dash",component:function(){return Promise.all([i.e("admin~voter"),i.e("voter")]).then(i.bind(null,"5be1"))}}]},{path:"/admin",component:function(){return Promise.all([i.e("admin~voter"),i.e("admin")]).then(i.bind(null,"4336"))},children:[{path:"",name:"admin-login",component:function(){return Promise.all([i.e("admin~voter"),i.e("admin")]).then(i.bind(null,"676a"))}},{path:"dash",name:"admin-dash",component:function(){return Promise.all([i.e("admin~voter"),i.e("admin")]).then(i.bind(null,"e240"))}}]}]});ct.beforeEach((function(t,e,i){if(console.log("Router Check",t.name,t.path,t.fullPath),!t.fullPath.match(/^\/admin/))return i();$api.isLogin().then((function(e){if(console.log("Login state",e),"admin-login"==t.name){if(e)return console.log("In login page but is logged in"),i({name:"admin-dash"})}else if(!e)return i({name:"admin-login"});return i()}))}));var ut=ct,dt=i("b189"),pt=i.n(dt);i("ccd0");a["default"].use(pt.a);var mt=new pt.a({icons:{iconfont:"mdi"}}),vt=i("50a9");function ht(t){return ht="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ht(t)}var ft=function(){function t(t){var e=this;this.defaultHeaders={},this.beforeFetch=[],this.afterFetch=[],this._isLogin=null,this._cache={},t&&Object.keys(t).forEach((function(i){return e[i]=t[i]})),this.url?this.url.match(/^https?:/)||(this.url=location.protocol+"//"+location.host+"/"+this.url.replace(/^\/+/,"")):this.url="/api",this.beforeFetch.push((function(){return loading.counter++})),this.afterFetch.push((function(){return loading.counter--}))}return t.install=function(e,i){return e.prototype.$api=window.$api=new t(i)},t.prototype.listQuickcount=function(t){var e,i=this;return void 0===t&&(t=!1),t&&this._cache["data.json"]?Promise.resolve(this._cache["data.json"]):this.sendGet("/public/data.json",(e={},e[Date.now().toString(36)]=Date.now().toString(36),e)).then((function(t){return i._cache["data.json"]=t}))},t.prototype.voterCheck=function(t,e,i){return this.send("POST","voter/check",{id:t,location:e,passcode:i})},t.prototype.adminListQuickcount=function(){return this.sendGet("/admin/quickcount")},t.prototype.adminAddQuickcount=function(t){return this.send("PUT","/admin/quickcount",t)},t.prototype.adminPatchQuickcount=function(t,e){return this.send("PATCH","/admin/quickcount/"+t,e)},t.prototype.adminUpload=function(t){return this.fetch(this.getDirectUrl("admin/upload/"+t.name),"POST",t)},t.prototype.getDirectUrl=function(t){return void 0===t&&(t=""),(this.direct_url||this.url)+"/"+t.replace(/^\/+/,"")},t.prototype.isLogin=function(){return Object(l["b"])(this,void 0,Promise,(function(){return Object(l["e"])(this,(function(t){return"boolean"!=typeof this._isLogin?(console.log("Login Check"),void 0!=ht(localStorage.passcode)?[2,this.adminLogin(localStorage.passcode)]:(console.log("No passcode to check"),[2,this._isLogin=!1])):[2,this._isLogin]}))}))},t.prototype.adminLogin=function(t){var e=this;return this.send("POST","admin",{passcode:t}).then((function(i){return i&&i.valid?(e.passcode=localStorage.passcode=t,e._isLogin=!0):(localStorage.removeItem("passcode"),e.passcode=null,e._isLogin=!1)}))},t.prototype.sendGet=function(t,e,i){return this.send("GET",t,null,e,i)},t.prototype.send=function(t,e,i,a,n){return this.fetch(this.url+"/"+e.replace(/^\/+/,""),t,i,a,n)},t.prototype.fetch=function(t,e,i,a,n){var s=this;n=new Headers(n?Object(l["a"])(Object(l["a"])({},this.defaultHeaders),n):this.defaultHeaders);var o={method:e.toUpperCase(),headers:n};if(this.beforeFetch.forEach((function(t){return t()})),i&&"object"==ht(i))if("GET"==e||"HEAD"==e||"OPTIONS"==e){if(a)return Promise.reject("Cannot use booth body and query params!");a=i,i=null}else i instanceof File?(n.append("Content-Type",i.type),o.body=i):(o.body=JSON.stringify(i),n.append("Content-Type","application/json"));return a&&Object.values(a).filter((function(t){return t}))&&(t+="?"+Object(vt["encode"])(a)),this.passcode&&n.append("Authorization","Passcode "+this.passcode),fetch(t,o).finally((function(){return s.afterFetch.forEach((function(t){return t()}))})).then((function(t){if((t.headers.get("content-type")||"").match(/json/i)){var e=t.json();return e.error?Promise.reject(e):e}return Promise.reject({message:"Response is not JSON!"})}))},t}(),bt=function(t,e){var i=e._c;return i("v-card",[i("v-toolbar",{attrs:{dense:""}},[i("v-toolbar-title",{domProps:{textContent:e._s(e.props.item.name)}}),i("v-spacer"),i("v-toolbar-items",[i("v-btn",{staticStyle:{float:"right"},attrs:{icon:""},on:{click:e.listeners.click}},[i("v-icon",[e._v("mdi-close")])],1)],1)],1),i("v-card-text",{staticClass:"pa-0"},[e.props.item.image?i("v-img",{staticClass:"grey--text",attrs:{"max-height":"400px",position:"center 20%",src:e.props.item.image}}):e._e(),i("v-list",{attrs:{dense:""}},[i("v-list-item",[i("v-list-item-title",[e._v("Suara\n          "+e._s(e.props.locationName))]),i("v-list-item-subtitle",{staticClass:"text-right"},[i("v-chip",{domProps:{textContent:e._s(e.props.item.count)}})],1)],1),i("v-list-item",[i("v-list-item-title",[e._v("Peringkat")]),i("v-list-item-subtitle",{staticClass:"text-right"},[i("v-chip",{domProps:{textContent:e._s(e.props.item.pos)}})],1)],1),i("v-list-item",[i("v-list-item-title",[e._v("Nomor Urut")]),i("v-list-item-subtitle",{staticClass:"text-right"},[i("v-chip",{domProps:{textContent:e._s(e.props.item.number)}})],1)],1),e.props.locations?[i("v-subheader",[e._v("Hasil di TPS")]),i("v-list-item-group",{attrs:{color:"primary"},model:{value:e.item,callback:function(t){e.item=t},expression:"item"}},e._l(e.props.locations,(function(t,a){return i("v-list-item",{key:a},[i("v-list-item-title",{domProps:{textContent:e._s(t.name)}}),i("v-list-item-subtitle",{staticClass:"text-right"},[i("v-chip",{domProps:{textContent:e._s(t.results[e.props.item.id].count)}})],1)],1)})),1)]:e._e()],2)],1)],1)},gt=[],yt=i("9c46"),xt=i("9ab2"),_t=i("61ac"),kt=i("47cf"),Ct=i("1ae9"),Vt=i("79b8"),jt={},St=Object(v["a"])(jt,bt,gt,!0,null,null,null),wt=St.exports;f()(St,{VBtn:yt["a"],VCard:b["a"],VCardText:g["b"],VChip:W["a"],VIcon:k["a"],VImg:z["a"],VList:V["a"],VListItem:j["a"],VListItemGroup:xt["a"],VListItemSubtitle:w["c"],VListItemTitle:w["d"],VSpacer:_t["a"],VSubheader:kt["a"],VToolbar:Ct["a"],VToolbarItems:Vt["a"],VToolbarTitle:Vt["b"]});var Ot=function(t,e){var i=e._c;return i("v-list",{attrs:{subheader:"",color:"transparent"}},[i("v-subheader",[e._v("\n    Aplikasi ini didukung oleh:\n  ")]),i("v-list-item",{directives:[{name:"show",rawName:"v-show",value:!e.props.hide,expression:"!props.hide"}],attrs:{href:"https://www.facebook.com/klampokchild?ref=qc.kiraboshi.co.id",target:"_blank"}},[i("v-list-item-avatar",[i("img",{attrs:{src:"https://scontent-sin2-2.xx.fbcdn.net/v/t1.0-1/p160x160/1150924_10204959966338835_6533470334909406723_n.jpg?_nc_cat=101&_nc_oc=AQkUc6I7ImI5zhtOwWnE4Dt2p9u0KL9SjCUduftqxYZ_WkgsVnZ9gtMeVzNPMrMmeX4&_nc_ht=scontent-sin2-2.xx&oh=f08b397bead6fa750b4483c76f19d519&oe=5DDAFD95"}})]),i("v-list-item-content",[i("v-list-item-title",[e._v("Mochamad Arifin")]),i("v-list-item-subtitle",[e._v("Programmer")])],1)],1),i("v-list-item",{attrs:{href:"https://www.facebook.com/Light-cctv-klampok-347276432868896/",target:"_blank"}},[i("v-list-item-avatar",[i("img",{attrs:{src:"https://scontent-sin2-2.xx.fbcdn.net/v/t1.0-1/c65.0.200.200a/p200x200/65191082_347278419535364_5421131261726949376_n.png?_nc_cat=110&_nc_oc=AQldR9KObyigCXoOEVayqWZj8nMuqbhBVilpWZV0C7qX-4hxUMY3g9ExqcoN-mGCwFM&_nc_ht=scontent-sin2-2.xx&oh=71b548ddcd2012f603bf2c7bc5d3358f&oe=5DE73F43"}})]),i("v-list-item-content",[i("v-list-item-title",[e._v("LightCCTV")]),i("v-list-item-subtitle",[e._v("Sponsor")])],1)],1),i("v-list-item",{attrs:{href:"https://www.facebook.com/kiraboshilpk",target:"_blank"}},[i("v-list-item-avatar",[i("img",{attrs:{src:"https://scontent-sin2-2.xx.fbcdn.net/v/t1.0-1/p160x160/47573270_2106123336368613_7451100197871943680_n.jpg?_nc_cat=106&_nc_oc=AQmOVJ05S6GfdoT3guLIX_lMkDKu_LWT4RzMzadbgEv5pWFTsGxWFY1lpJWTACo9u_0&_nc_ht=scontent-sin2-2.xx&oh=caa3db0bd050495785e7b0545327e69e&oe=5DEA6C33"}})]),i("v-list-item-content",[i("v-list-item-title",[e._v("LPK Kiraboshi")]),i("v-list-item-subtitle",[e._v("Sponsor")])],1)],1)],1)},Lt=[],Pt={},Tt=Object(v["a"])(Pt,Ot,Lt,!0,null,null,null),$t=Tt.exports;f()(Tt,{VList:V["a"],VListItem:j["a"],VListItemAvatar:S["a"],VListItemContent:w["b"],VListItemSubtitle:w["c"],VListItemTitle:w["d"],VSubheader:kt["a"]});var It=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{scrollable:"","full-width":"",fullscreen:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;e.value;return[i("v-btn",t._g({attrs:{text:""}},a),[t._v("Lihat Log")])]}}]),model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[i("v-card",[i("v-toolbar",{attrs:{dense:"",flat:""}},[i("v-toolbar-items",[i("v-select",{attrs:{flat:"","hide-details":"",solo:"",items:t.items,label:"Pilih TPS"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),i("v-spacer"),i("v-toolbar-items",[i("v-btn",{staticStyle:{float:"right"},attrs:{small:"",text:"",icon:""},on:{click:t.loadItems}},[i("v-icon",[t._v("mdi-reload")])],1),i("v-btn",{staticStyle:{float:"right"},attrs:{small:"",text:"",icon:""},on:{click:function(e){t.visible=!1}}},[i("v-icon",[t._v("mdi-close")])],1)],1)],1),i("v-alert",{attrs:{value:!!t.message},domProps:{textContent:t._s(t.message)}}),t.loading?i("v-card-text",{staticClass:"text-center"},[i("v-progress-circular",{attrs:{indeterminate:""}})],1):t._e(),t.timelines?i("v-card-text",{staticClass:"pa-0"},[i("v-timeline",{staticClass:"pa-0",attrs:{"align-top":"",dense:""}},t._l(t.timelines,(function(e){return i("v-timeline-item",{key:e.key,attrs:{"fill-dot":"",left:"",color:e.color},scopedSlots:t._u([{key:"icon",fn:function(){return[i("span",{staticClass:"white--text",domProps:{textContent:t._s(e.icon)}})]},proxy:!0}],null,!0)},[i("v-layout",{attrs:{"justify-space-between":"","pr-2":"",wrap:""}},[i("v-flex",{class:e.color+"--text",attrs:{xs12:"",sm7:""},domProps:{textContent:t._s(e.value)}},[t._v("\n            >")]),i("v-flex",{attrs:{xs12:"",sm5:"","text-right":""},domProps:{textContent:t._s(e.time)}})],1)],1)})),1)],1):t._e()],1)],1)},Dt=[],At=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.selected=-1,e.loading=!1,e.message="",e.lines=[],e.timelines=[],e.visible=!1,e.id=-1,e}return Object(l["d"])(e,t),Object.defineProperty(e.prototype,"items",{get:function(){return this.locations?this.locations.map((function(t){return{text:t.name,value:t.id}})):["Loading.."]},enumerable:!0,configurable:!0}),e.prototype.visibleChanged=function(t,e){console.log("Visible changed",t),t&&this.loadItems()},e.prototype.selectedChanged=function(t,e){console.log("selected changed",t),this.loadItems()},e.prototype.mounted=function(){console.log("DISPLAYIT",this.$route.params),this.id=parseInt(this.$route.params.id)},e.prototype.loadItems=function(){var t=this;if(!(this.selected<0||this.id<0)){this.message="Memuat data..";var e,i=this.$api.url.replace(/\/+$/,"")+"/public/"+this.id+"-"+this.selected+".log",a=/^(\d+)\s(\w+)\s(.*)$/,n=new Date;this.timelines=[],fetch(i).then((function(i){if(i.ok){t.message="";var s=["purple","indigo","teal","orange","lime"];t.readResponse(i).then((function(i){t.timelines=i.map((function(i,o){if(e=a.exec(i)){var r=e[1],l=e[3],c=(t.id,e[2]),u="#",d="primary";if(n.setTime(e[1]),"VOTE"==c){var p=l.match(/(-?\d+)\s+(-?\d+)/);if(p){var m=parseInt(p[1]),v=parseInt(p[2]);if(l=v<0?v:"+"+v,m>=0){var h=t.candidates[m];u=h.number,l=h.name+" "+l,d=s[m]||"success"}else u="X",l="Tidak Sah "+l,d="error"}}var f={timestamp:r,time:n.toLocaleTimeString(),type:c,value:l,icon:u,color:d};if("#"==f.icon){p=f.value.match(/([\d.]+)\s(.*)/);p&&(f.ip=p[1],f.browser=p[2],f.value="...",fetch("http://api.userstack.com/detect?access_key=a8e73e6f1c9b50d7e5769d634ad23946&ua="+encodeURI(f.browser)).then((function(t){return t.json().then((function(t){f.value=f.ip+" "+t.brand+" "+t.name+" "+(t.os?t.os.name:"")}))})).catch(console.error))}return f}})).reverse()}))}else t.message="Belum ada data"})).catch((function(e){return t.message=e.message}))}},e.prototype.readResponse=function(t){return Object(l["b"])(this,void 0,void 0,(function(){var e,i,a,n,s,o,r,c,u;return Object(l["e"])(this,(function(l){switch(l.label){case 0:return e=new TextDecoder("utf-8"),null==t.body?(console.log("Response body is null"),[2,[]]):(i=[],a=t.body.getReader(),[4,a.read()]);case 1:n=l.sent(),s=n.value?e.decode(n.value):"",o=/\n|\r|\r\n/gm,r=0,l.label=2;case 2:return c=o.exec(s),c?[3,4]:n.done?[3,6]:(u=s.substr(r),[4,a.read()]);case 3:return n=l.sent(),s=u+(n.value?e.decode(n.value):""),r=o.lastIndex=0,[3,5];case 4:i.push(s.substring(r,c.index)),r=o.lastIndex,l.label=5;case 5:return[3,2];case 6:return r<s.length&&i.push(s.substr(r)),[2,i]}}))}))},Object(l["c"])([Object(c["b"])()],e.prototype,"locations",void 0),Object(l["c"])([Object(c["b"])()],e.prototype,"candidates",void 0),Object(l["c"])([Object(c["d"])("visible")],e.prototype,"visibleChanged",null),Object(l["c"])([Object(c["d"])("selected")],e.prototype,"selectedChanged",null),e=Object(l["c"])([Object(c["a"])({name:"ResultLogs"})],e),e}(c["c"]),Rt=At,Et=Rt,Nt=i("47fa"),Bt=i("6905"),Ft=i("1e89"),Mt=Object(v["a"])(Et,It,Dt,!1,null,null,null),Ut=Mt.exports;f()(Mt,{VAlert:at["a"],VBtn:yt["a"],VCard:b["a"],VCardText:g["b"],VDialog:nt["a"],VFlex:_["a"],VIcon:k["a"],VLayout:C["a"],VProgressCircular:O["a"],VSelect:Nt["a"],VSpacer:_t["a"],VTimeline:Bt["a"],VTimelineItem:Ft["a"],VToolbar:Ct["a"],VToolbarItems:Vt["a"]}),window["fetch"]||(console.log("Using Fetch polyfills"),i("2206")),a["default"].config.productionTip=!1,a["default"].use(ft,{url:"/api",direct_url:"http://localhost:8888/api"}),a["default"].component("ResultCandidate",wt),a["default"].component("ListSponsor",$t),a["default"].component("ResultLogs",Ut),new a["default"]({router:ut,vuetify:mt,render:function(t){return t(n["a"],[t("RouterView")])},mounted:function(){loading.counter-=1}}).$mount("#app")},d178:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app-bar",{attrs:{color:t.color,dark:"",dense:""}},[i("v-btn",{attrs:{icon:""},on:{click:t.iconClick}},[i("v-icon",{domProps:{textContent:t._s(t.icon)}})],1),i("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),i("v-spacer"),i("v-menu",{attrs:{left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[i("v-btn",t._g({attrs:{icon:""}},a),[i("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[i("v-list",{attrs:{dense:""}},[i("v-list-item",{attrs:{to:"/about"}},[i("v-list-item-icon",[i("v-icon",[t._v("mdi-information-outline")])],1),i("v-list-item-title",[t._v("Tentang")])],1),i("v-list-item",{attrs:{to:"/voter"}},[i("v-list-item-icon",[i("v-icon",[t._v("mdi-account-check")])],1),i("v-list-item-title",[t._v("Voters")])],1),i("v-divider"),i("v-list-item",{attrs:{to:"/"}},[i("v-list-item-icon",[i("v-icon",[t._v("mdi-home")])],1),i("v-list-item-title",[t._v("Go Home")])],1)],1)],1)],1)},n=[],s=i("6dbe"),o=i("95ad"),r=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(s["d"])(e,t),Object.defineProperty(e.prototype,"icon",{get:function(){return this.back?"mdi-arrow-left":"mdi-poll"},enumerable:!0,configurable:!0}),e.prototype.iconClick=function(){this.back?this.$router.back():"/"==this.$router.currentRoute.fullPath?this.$router.push("/about"):this.$router.push("/")},Object(s["c"])([Object(o["b"])({default:"deep-purple accent-4"})],e.prototype,"color",void 0),Object(s["c"])([Object(o["b"])({default:"QuickCount"})],e.prototype,"title",void 0),Object(s["c"])([Object(o["b"])({default:!1,type:Boolean})],e.prototype,"back",void 0),e=Object(s["c"])([Object(o["a"])({name:"Navbar"})],e),e}(o["c"]),l=r,c=l,u=i("a6c2"),d=i("411c"),p=i.n(d),m=i("cc63"),v=i("9c46"),h=i("224b"),f=i("b503"),b=i("add5"),g=i("d751"),y=i("79c7"),x=i("27a3"),_=i("2b75"),k=i("61ac"),C=i("79b8"),V=Object(u["a"])(c,a,n,!1,null,null,null);e["a"]=V.exports;p()(V,{VAppBar:m["a"],VBtn:v["a"],VDivider:h["a"],VIcon:f["a"],VList:b["a"],VListItem:g["a"],VListItemIcon:y["a"],VListItemTitle:x["d"],VMenu:_["a"],VSpacer:k["a"],VToolbarTitle:C["b"]})},e925:function(t,e,i){"use strict";var a=i("9298"),n=i.n(a);n.a}});