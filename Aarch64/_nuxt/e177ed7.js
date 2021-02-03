(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{383:function(t){t.exports=JSON.parse('{"history":{}}')},384:function(t,e,n){"use strict";n.r(e);n(47),n(33),n(46),n(45),n(28),n(34),n(35),n(63),n(355);var r=n(60);n(359),n(362),n(32),n(14),n(345),n(51),n(52),n(363);function o(t){return Math.round(Math.exp(t.reduce((function(t,e){return t+Math.log(e)}),0)/t.length))}function l(t,e,n){console.debug("Calculating average slowdown ratio of ".concat(t," to ").concat(e),n);for(var r=[],l=[],c=0,m=Object.keys(n.results);c<m.length;c++){var f=m[c],d=n.results[f];d[t]&&d[e]?(r.push(d[t].mean),l.push(d[e].mean)):console.warn("Missing ".concat(f," results for either ").concat(t," or ").concat(e," (timestamp: ").concat(n.meta.timestamp,"):"),n.results)}return o(r)/o(l)}function c(t,e){if(Object.keys(e.meta.runtimes).includes(t)){for(var n=e.meta.reference_runtime,r={},o=0,l=Object.keys(e.results);o<l.length;o++){var c=l[o];r[c]={};for(var m=0,f=Object.keys(e.results[c]);m<f.length;m++){var rt=f[m];rt!==t&&rt!==n||(r[c][rt]=e.results[c][rt])}}return{meta:e.meta,runtime:t,results:r}}return null}function m(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var d={props:["loading","history","runtimes","suites","benchmarks"],computed:{filtered_items:function(){var t=this;console.debug("Computing filtered items");var e=Object.values(this.history),n=0,o=Number.MAX_SAFE_INTEGER;return this.date_begin&&(n=new Date(this.date_begin).getTime()),this.date_end&&(o=new Date(this.date_end).getTime()),n>0&&o>0&&n<o&&(e=e.filter((function(t){return t.meta.timestamp>=n&&t.meta.timestamp<=o}))),this.suite&&(e=e.filter((function(e){return e.meta.suite===t.suite}))),this.benchmark&&(e=e.map((function(e){return{meta:e.meta,results:Object(r.a)({},t.benchmark,e.results[t.benchmark])}}))),e=(e=e.flatMap((function(e){return t.runtime?[c(t.runtime,e)]:t.runtimes.map((function(rt){return c(rt,e)}))}))).filter((function(t){return t}))},tabledata:function(){var t,e=[],n=m(this.filtered_items);try{for(n.s();!(t=n.n()).done;){var r=t.value;e.push({timestamp:r.meta.timestamp,runtime:r.runtime,suite:r.meta.suite,git:r.meta.runtimes[r.runtime],giturl:"".concat(r.meta.runtimes[r.runtime].repo,"/commits/").concat(r.meta.runtimes[r.runtime].commit),slowdown:l(r.runtime,r.meta.reference_runtime,r)})}}catch(t){n.e(t)}finally{n.f()}return e},chartdata:function(){var t=this;if(console.debug("Computing chart data"),this.plot_all){var e,n={},r=m(this.filtered_items);try{for(r.s();!(e=r.n()).done;)for(var o=e.value,c=0,f=Object.keys(o.results);c<f.length;c++)for(var d=f[c],v=0,h=Object.keys(o.results[d]);v<h.length;v++){var _=h[v],y="".concat(d,"-").concat(_);n[y]=n[y]||{name:y,data:{}};var k=o.results[d][_].mean/o.results[d][o.meta.reference_runtime].mean,w=o.meta.timestamp.toISOString();n[y].data[w]=k}}catch(t){r.e(t)}finally{r.f()}return Object.values(n)}var x,O=[],S=m(this.runtimes);try{var j=function(){var e,n=x.value,r={name:n,data:{}},o=m(t.filtered_items.filter((function(t){return t.runtime===n})));try{for(o.s();!(e=o.n()).done;){var c=e.value,f=l(n,c.meta.reference_runtime,c),d=c.meta.timestamp.toISOString();r.data[d]=f}}catch(t){o.e(t)}finally{o.f()}O.push(r)};for(S.s();!(x=S.n()).done;)j()}catch(t){S.e(t)}finally{S.f()}return O}},data:function(){return{pagination:{sortBy:"meta.ts",descending:!0},suite:null,benchmark:null,runtime:null,plot_all:!1,menu_begin:!1,date_begin:null,menu_end:!1,date_end:null,headers:[{text:"Date Measured",align:"left",sortable:!0,value:"timestamp"},{text:"Runtime",align:"left",sortable:!0,value:"runtime"},{text:"Suite",align:"left",sortable:!0,value:"suite"},{text:"Commit",align:"left",sortable:!0,value:"git"},{text:"Slowdown Ratio (lower is better)",align:"left",sortable:!0,value:"slowdown"}]}}},v=n(29),h=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-flex",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-autocomplete",{attrs:{label:"Test:",items:t.benchmarks,"menu-props":"auto",clearable:"",placeholder:"Display only results from a specific benchmark test"},model:{value:t.benchmark,callback:function(e){t.benchmark=e},expression:"benchmark"}}),t._v(" "),n("v-autocomplete",{attrs:{label:"Suite:",items:t.suites,"menu-props":"auto",clearable:"",placeholder:"Display only results from a specific benchmark suite"},model:{value:t.suite,callback:function(e){t.suite=e},expression:"suite"}}),t._v(" "),n("v-autocomplete",{attrs:{label:"Runtime:",items:t.runtimes,"menu-props":"auto",clearable:"",placeholder:"Display only results from a specific runtime"},model:{value:t.runtime,callback:function(e){t.runtime=e},expression:"runtime"}}),t._v(" "),n("v-flex",{attrs:{sm4:""}},[n("v-switch",{attrs:{label:"Plot all tests"},model:{value:t.plot_all,callback:function(e){t.plot_all=e},expression:"plot_all"}})],1)],1),t._v(" "),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{sm4:""}},[n("v-menu",{ref:"menu_begin",attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-right":40,"min-width":"290px","return-value":t.date_begin},on:{"update:returnValue":function(e){t.date_begin=e},"update:return-value":function(e){t.date_begin=e}},model:{value:t.menu_begin,callback:function(e){t.menu_begin=e},expression:"menu_begin"}},[n("v-text-field",{attrs:{slot:"activator",label:"Start date","prepend-icon":"event",readonly:""},slot:"activator",model:{value:t.date_begin,callback:function(e){t.date_begin=e},expression:"date_begin"}}),t._v(" "),n("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.date_begin,callback:function(e){t.date_begin=e},expression:"date_begin"}},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.menu_begin=!1}}},[t._v("Cancel")]),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){return t.$refs.menu_begin.save(t.date_begin)}}},[t._v("OK")])],1)],1)],1),t._v(" "),n("v-flex",{attrs:{sm4:""}},[n("v-menu",{ref:"menu_end",attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-right":40,"min-width":"290px","return-value":t.date_end},on:{"update:returnValue":function(e){t.date_end=e},"update:return-value":function(e){t.date_end=e}},model:{value:t.menu_end,callback:function(e){t.menu_end=e},expression:"menu_end"}},[n("v-text-field",{attrs:{slot:"activator",label:"End date","prepend-icon":"event",readonly:""},slot:"activator",model:{value:t.date_end,callback:function(e){t.date_end=e},expression:"date_end"}}),t._v(" "),n("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.date_end,callback:function(e){t.date_end=e},expression:"date_end"}},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.menu_end=!1}}},[t._v("Cancel")]),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){return t.$refs.menu_end.save(t.date_end)}}},[t._v("OK")])],1)],1)],1)],1)],1),t._v(" "),n("line-chart",{attrs:{data:t.chartdata}}),t._v(" "),n("v-data-table",{staticClass:"elevation-1",attrs:{pagination:t.pagination,headers:t.headers,items:t.tabledata,loading:t.loading,"rows-per-page-items":[10,25,50,{text:"All",value:-1}]},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"items",fn:function(e){return[n("td",[t._v("\n        "+t._s(t._f("formatDate")(e.item.timestamp))+"\n      ")]),t._v(" "),n("td",[t._v("\n        "+t._s(e.item.runtime)+"\n      ")]),t._v(" "),n("td",[t._v("\n        "+t._s(e.item.suite)+"\n      ")]),t._v(" "),n("td",[n("a",{attrs:{href:e.item.giturl}},[t._v(t._s(t._f("truncate")(e.item.git.commit,8)))]),t._v("\n        "+t._s(t._f("truncate")(e.item.git.message,30))+" ("+t._s(e.item.git.author)+")\n      ")]),t._v(" "),n("td",[t._v("\n        "+t._s(t._f("truncateNumber")(e.item.slowdown))+"\n      ")])]}}])})],1)}),[],!1,null,null,null).exports,_=(n(366),n(383)),y="http://localhost:8001/history";y||(y="http://"+window.location.hostname+":8001/history"),console.log("Process.target: static"),console.log("Host_history: "+y);var k={components:{SGCommits:h},created:function(){var t;this.loading=!1,this.history=(t=_.history,Object.values(t).map((function(t){return t.meta.timestamp=new Date(1e3*t.meta.timestamp)})),t),this.benchmarks=function(t){var e=new Set;return Object.values(t).map((function(t){return Object.keys(t.results).map((function(b){return e.add(b)}))})),Array.from(e)}(this.history),this.suites=function(t){var e=new Set;return Object.values(t).map((function(t){return e.add(t.meta.suite)})),Array.from(e)}(this.history),this.runtimes=function(t){var e=new Set;return Object.values(t).map((function(t){return Object.keys(t.meta.runtimes).map((function(rt){return e.add(rt)}))})),Array.from(e)}(this.history)},data:function(){return{loading:!0,history:{},runtimes:[],suites:[],benchmarks:[],errors:[]}}},w=Object(v.a)(k,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"container"},[this._m(0),this._v(" "),e("SGCommits",{attrs:{loading:this.loading,history:this.history,benchmarks:this.benchmarks,suites:this.suites,runtimes:this.runtimes}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",{staticClass:"subtitle"},[this._v("\n      SightGlass viewer\n    ")])])}],!1,null,null,null);e.default=w.exports}}]);