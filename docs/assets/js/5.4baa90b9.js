(window.webpackJsonp=window.webpackJsonp||[]).push([[5,16,18,28],{434:function(t,e,a){},435:function(t,e,a){"use strict";a(434)},436:function(t,e,a){"use strict";a.r(e);var l={components:{SwitchLocale:a(437).default}},n=a(43),s=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("b-navbar-nav",[t._l(this.$themeConfig.locales[this.$localePath].nav,(function(a){return e("b-nav-item",{key:a.link,attrs:{href:a.link}},[t._v(t._s(a.text))])})),t._v(" "),e("switch-locale")],2)}),[],!1,null,null,null);e.default=s.exports},437:function(t,e,a){"use strict";a.r(e);a(87),a(11),a(35),a(88);var l={computed:{languages(){let t=this.$themeConfig.locales;return Object.keys(t).map(e=>({localePath:e,selectText:t[e].selectText,label:t[e].label,ariaLabel:t[e].ariaLabel}))}},methods:{changeLocale(t){let e=this.$localePath,a=this.$page.path,l=t+this.removeLocaleFromUrl(a,e);window.location=l},doesPageExist(t){let e=this.$page.path,a=this.removeLocaleFromUrl(e,this.$localePath);return this.$site.pages.reduce((e,l)=>e||l.path==t+a,!1)},removeLocaleFromUrl:(t,e)=>t.substring(e.length,t.length)}},n=(a(435),a(43)),s=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("b-nav-item-dropdown",{attrs:{text:this.$themeConfig.locales[this.$localePath].selectText}},t._l(this.languages,(function(a){return e("b-dropdown-item",{key:a.localePath,attrs:{href:"#",disabled:!t.doesPageExist(a.localePath)},on:{click:function(e){return t.changeLocale(a.localePath)}}},[t._v("\n    "+t._s(a.label)+"\n  ")])})),1)}),[],!1,null,"45d574f1",null);e.default=s.exports},438:function(t,e,a){"use strict";a.r(e);var l={components:{NavOptions:a(436).default}},n=a(43),s=Object(n.a)(l,(function(){var t=this._self._c;return t("b-navbar",{staticClass:"bg-transparent",attrs:{toggleable:"md",type:"dark"}},[t("b-navbar-brand",{attrs:{href:this.$localePath}},[this._v("@alberttocastro")]),this._v(" "),t("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),this._v(" "),t("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[t("nav-options",{staticClass:"ml-auto"})],1)],1)}),[],!1,null,null,null);e.default=s.exports},638:function(t,e,a){"use strict";a.r(e);var l={components:{MyNav:a(438).default}},n=a(43),s=Object(n.a)(l,(function(){var t=this._self._c;return t("div",[t("my-nav"),this._v(" "),t("Content")],1)}),[],!1,null,"5ffa900c",null);e.default=s.exports}}]);