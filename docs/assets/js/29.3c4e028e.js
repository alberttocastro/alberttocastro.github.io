(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{645:function(t,o,s){"use strict";s.r(o);s(11),s(28);var e={data:()=>({blogPosts:[]}),mounted:function(){let t=this.$site.pages;t=t.filter((function(t){return t.frontmatter.blogpost})),t=t.sort((function(t,o){return t.frontmatter.date==o.frontmatter.date?0:t.frontmatter.date>o.frontmatter.date?-1:1})),this.blogPosts=t}},r=s(43),n=Object(r.a)(e,(function(){var t=this,o=t._self._c;return o("div",[this.blogPosts.length>0?o("b-list-group",t._l(this.blogPosts,(function(s){return o("b-list-group-item",{key:s.key,staticClass:"post-list-item",attrs:{href:s.path}},[o("h1",[t._v(t._s(s.title))]),t._v(" "),o("p",[t._v(t._s(s.frontmatter.description))])])})),1):o("blockquote",{staticClass:"blockquote"},[t._t("no-article")],2)],1)}),[],!1,null,"365f313a",null);o.default=n.exports}}]);