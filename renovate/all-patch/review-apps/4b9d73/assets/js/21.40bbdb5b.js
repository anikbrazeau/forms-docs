(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{254:function(e,t,n){},262:function(e,t,n){"use strict";n(254)},264:function(e,t,n){"use strict";n.r(t);var r=n(263),i=n(249),s={name:"NavLinks",components:{NavLink:n(251).default,DropdownLink:r.default},computed:{userNav(){const e=this.$page.path.split(".html")[0],t=e.split("/")[1];if(""==t)return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[];const n={en:"fr",fr:"en"}[t],r=[{en:"/",fr:"/"},{en:"/en/",fr:"/fr/"},{en:"/en/start",fr:"/fr/commencer"},{en:"/en/send",fr:"/fr/envoyer"},{en:"/en/status",fr:"/fr/etat"},{en:"/en/testing",fr:"/fr/essai"},{en:"/en/keys",fr:"/fr/cles"},{en:"/en/limits",fr:"/fr/limites"},{en:"/en/callbacks",fr:"/fr/rappel"},{en:"/en/architecture",fr:"/fr/architecture"},{en:"/en/clients",fr:"/fr/clients"},{en:"/en/_api_endpoints",fr:"/fr/clients"},{en:"/en/_arg_template_id",fr:"/fr/_arg_template_id"}].find(n=>n[t]==e);return[{text:"fr"==t?"English":"Français",link:r[n],type:"link",items:[]}]},nav(){return this.userNav},userLinks(){return(this.nav||[]).map(e=>Object.assign(Object(i.j)(e),{items:(e.items||[]).map(i.j)}))},repoLink(){const{repo:e}=this.$site.themeConfig;return e?/^https?:/.test(e)?e:"https://github.com/"+e:null},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const e=this.repoLink.match(/^https?:\/\/[^/]+/)[0],t=["GitHub","GitLab","Bitbucket"];for(let n=0;n<t.length;n++){const r=t[n];if(new RegExp(r,"i").test(e))return r}return"Source"}}},a=(n(262),n(4)),f=Object(a.a)(s,(function(){var e=this,t=e._self._c;return e.userLinks.length||e.repoLink?t("nav",{staticClass:"nav-links"},[e._l(e.userLinks,(function(e){return t("div",{key:e.link,staticClass:"nav-item"},["links"===e.type?t("DropdownLink",{attrs:{item:e}}):t("NavLink",{attrs:{item:e}})],1)})),e._v(" "),e.repoLink?t("a",{staticClass:"repo-link",attrs:{href:e.repoLink,target:"_blank",rel:"noopener noreferrer"}},[e._v("\n    "+e._s(e.repoLabel)+"\n    "),t("OutboundLink")],1):e._e()],2):e._e()}),[],!1,null,null,null);t.default=f.exports}}]);