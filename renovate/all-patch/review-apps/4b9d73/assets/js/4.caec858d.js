(window.webpackJsonp=window.webpackJsonp||[]).push([[4,21,23],{254:function(t,e,n){},262:function(t,e,n){"use strict";n(254)},264:function(t,e,n){"use strict";n.r(e);var i=n(263),a=n(249),s={name:"NavLinks",components:{NavLink:n(251).default,DropdownLink:i.default},computed:{userNav(){const t=this.$page.path.split(".html")[0],e=t.split("/")[1];if(""==e)return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[];const n={en:"fr",fr:"en"}[e],i=[{en:"/",fr:"/"},{en:"/en/",fr:"/fr/"},{en:"/en/start",fr:"/fr/commencer"},{en:"/en/send",fr:"/fr/envoyer"},{en:"/en/status",fr:"/fr/etat"},{en:"/en/testing",fr:"/fr/essai"},{en:"/en/keys",fr:"/fr/cles"},{en:"/en/limits",fr:"/fr/limites"},{en:"/en/callbacks",fr:"/fr/rappel"},{en:"/en/architecture",fr:"/fr/architecture"},{en:"/en/clients",fr:"/fr/clients"},{en:"/en/_api_endpoints",fr:"/fr/clients"},{en:"/en/_arg_template_id",fr:"/fr/_arg_template_id"}].find(n=>n[e]==t);return[{text:"fr"==e?"English":"Français",link:i[n],type:"link",items:[]}]},nav(){return this.userNav},userLinks(){return(this.nav||[]).map(t=>Object.assign(Object(a.j)(t),{items:(t.items||[]).map(a.j)}))},repoLink(){const{repo:t}=this.$site.themeConfig;return t?/^https?:/.test(t)?t:"https://github.com/"+t:null},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"];for(let n=0;n<e.length;n++){const i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}},r=(n(262),n(4)),o=Object(r.a)(s,(function(){var t=this,e=t._self._c;return t.userLinks.length||t.repoLink?e("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return e("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?e("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),e("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null);e.default=o.exports},267:function(t,e,n){},281:function(t,e,n){"use strict";n(267)},289:function(t,e,n){},290:function(t,e,n){"use strict";n.r(e);var i={name:"Home",mounted(){"fr"===(void 0===navigator.languages?[navigator.language]:navigator.languages)[0].substring(0,2)?window.location.replace(window.location.href+"fr/"):window.location.replace(window.location.href+"en/")}},a=n(4),s=Object(a.a)(i,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null);e.default=s.exports},291:function(t,e,n){"use strict";n.r(e);var i=n(279),a=n(284),s=n(277),r=n(264);function o(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var l={name:"Navbar",components:{SidebarButton:s.default,NavLinks:r.default,SearchBox:a.a,AlgoliaSearchBox:i.a},data:()=>({linksWrapMaxWidth:null}),computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName},siteSubTitle(){return this.$themeLocaleConfig.siteSubtitle},logo(){return this.$themeLocaleConfig.logo||this.$site.themeConfig.logo}},mounted(){const t=parseInt(o(this.$el,"paddingLeft"))+parseInt(o(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)}},u=(n(281),n(4)),c=Object(u.a)(l,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"navbar"},[e("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),e("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.logo?e("img",{staticClass:"logo",attrs:{src:t.$withBase(t.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?e("div",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.logo}},[t._v(t._s(t.$siteTitle))]):t._e(),t._v(" "),t.siteSubTitle?e("div",{ref:"siteSubTitle",staticClass:"site-subtitle"},[t._v(t._s(t.siteSubTitle))]):t._e()]),t._v(" "),e("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?e("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?e("SearchBox"):t._e(),t._v(" "),e("NavLinks",{staticClass:"can-hide nav-links"})],1)],1)}),[],!1,null,null,null);e.default=c.exports},298:function(t,e,n){"use strict";n(289)},311:function(t,e,n){"use strict";n.r(e);var i=n(306),a=n(251),s={name:"Layout",components:{ParentLayout:i.a,ParentNavLink:a.default},computed:{backToLink(){return this.$themeLocaleConfig.backToNotifyLink},backToText(){return this.$themeLocaleConfig.backToNotifyText}}},r=(n(298),n(4)),o=Object(r.a)(s,(function(){var t=this,e=t._self._c;return e("ParentLayout",{scopedSlots:t._u([{key:"sidebar-top",fn:function(){return[e("div",{staticClass:"back-to-notify"},[t.backToText?e("ParentNavLink",{attrs:{item:{link:t.backToLink,text:t.backToText}}}):t._e()],1)]},proxy:!0}])})}),[],!1,null,null,null);e.default=o.exports}}]);