(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{OPH6:function(t,e,n){},QfWi:function(t,e,n){"use strict";n.r(e);n("OPH6");var o={input:document.querySelector(".form-control"),button:document.querySelector(".button-more"),gallery:document.querySelector(".gallery"),form:document.querySelector("#search-form")},l=n("y+TE"),a=n.n(l),r=(n("JBxO"),n("FdtR"),n("wCa+"),n("QJ3N")),i=(n("bzha"),n("zrP5"),{alertStackOptions:new r.Stack({dir1:"down",firstpos1:200,firstpos2:15,maxStrategy:"close",maxClosureCausesWait:!1,sticker:!1}),alertOptions:{sticker:!1,closer:!1,delay:2e3},emptyQueryInput:function(){notice(Object.assign({title:"The input field is empty.",text:"Start typing the country name.",stack:this.alertStackOptions},this.alertOptions))},errorNotFound:function(){Object(r.error)(Object.assign({title:"Not found.",text:"Please enter a more specific query!",stack:this.alertStackOptions},this.alertOptions))}});var s=function(t,e){return fetch("https://pixabay.com/api/?image_type=photo&orientation=horizontal&q="+t+"&page="+e+"&per_page=12&key=21643539-8a39d318f8dc12da0f0bd24ac").then((function(t){return t.json()})).then((function(t){return t.hits})).catch((function(t){if(0===t.hits)return i.errorNotFound;i.errorNotFound()}))},c=0;var u=n("dcBu");n("PzF0");var d=function(t){if(t.preventDefault(),"IMG"===t.target.nodeName){var e="<img src="+t.target.dataset.source+' alt="icon" />';u.create(e).show((function(){return console.log("lightbox now visible")}))}};o.form.addEventListener("submit",(function(t){var e;t.preventDefault(),e=o.input.value,c=1,o.gallery.innerHTML="",s(e,c).then((function(t){if(o.gallery.insertAdjacentHTML("beforeend",a()(t)),0===t.length)return i.errorNotFound;12===t.length&&o.button.classList.remove("is-hiden")}))})),o.button.addEventListener("click",(function(t){var e;t.preventDefault(),e=o.input.value,s(e,c).then((function(t){c+=1,o.gallery.insertAdjacentHTML("beforeend",a()(t)),12!==t.length&&o.button.classList.add("is-hiden"),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))})),o.gallery.addEventListener("click",d);n("cr5K")},cr5K:function(t,e){document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector("#toTop");window.addEventListener("scroll",(function(){pageYOffset>100?t.classList.add("show"):t.classList.remove("show")})),t.onclick=function(t){t.preventDefault(),function(t,e){void 0===e&&(e=700);var n=document.scrollingElement||document.documentElement,o=n.scrollTop,l=t-o,a=+new Date;!function r(){var i,s,c,u=+new Date-a;n.scrollTop=parseInt((i=u,s=o,c=l,(i/=e/2)<1?c/2*i*i+s:-c/2*(--i*(i-2)-1)+s)),u<e?requestAnimationFrame(r):n.scrollTop=t}()}(0,400)}}))},"y+TE":function(t,e,n){var o=n("mp5j");t.exports=(o.default||o).template({1:function(t,e,n,o,l){var a,r=null!=e?e:t.nullContext||{},i=t.hooks.helperMissing,s="function",c=t.escapeExpression,u=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return'<div class="photo-card">\r\n    <img class="photo" width="380" height="250" src="'+c(typeof(a=null!=(a=u(n,"webformatURL")||(null!=e?u(e,"webformatURL"):e))?a:i)===s?a.call(r,{name:"webformatURL",hash:{},data:l,loc:{start:{line:3,column:53},end:{line:3,column:69}}}):a)+'" data-source='+c(typeof(a=null!=(a=u(n,"largeImageURL")||(null!=e?u(e,"largeImageURL"):e))?a:i)===s?a.call(r,{name:"largeImageURL",hash:{},data:l,loc:{start:{line:3,column:83},end:{line:3,column:100}}}):a)+' alt="'+c(typeof(a=null!=(a=u(n,"tags")||(null!=e?u(e,"tags"):e))?a:i)===s?a.call(r,{name:"tags",hash:{},data:l,loc:{start:{line:3,column:106},end:{line:3,column:114}}}):a)+'" />\r\n\r\n    <div class="stats">\r\n        <p class="stats-item">\r\n            <i class="material-icons">thumb_up</i>\r\n            '+c(typeof(a=null!=(a=u(n,"likes")||(null!=e?u(e,"likes"):e))?a:i)===s?a.call(r,{name:"likes",hash:{},data:l,loc:{start:{line:8,column:12},end:{line:8,column:21}}}):a)+'\r\n        </p>\r\n        <p class="stats-item">\r\n            <i class="material-icons">visibility</i>\r\n            '+c(typeof(a=null!=(a=u(n,"views")||(null!=e?u(e,"views"):e))?a:i)===s?a.call(r,{name:"views",hash:{},data:l,loc:{start:{line:12,column:12},end:{line:12,column:21}}}):a)+'\r\n        </p>\r\n        <p class="stats-item">\r\n            <i class="material-icons">comment</i>\r\n           '+c(typeof(a=null!=(a=u(n,"comments")||(null!=e?u(e,"comments"):e))?a:i)===s?a.call(r,{name:"comments",hash:{},data:l,loc:{start:{line:16,column:11},end:{line:16,column:23}}}):a)+'\r\n        </p>\r\n        <p class="stats-item">\r\n            <i class="material-icons">cloud_download</i>\r\n           '+c(typeof(a=null!=(a=u(n,"downloads")||(null!=e?u(e,"downloads"):e))?a:i)===s?a.call(r,{name:"downloads",hash:{},data:l,loc:{start:{line:20,column:11},end:{line:20,column:24}}}):a)+"\r\n        </p>\r\n    </div>\r\n</div>\r\n"},compiler:[8,">= 4.3.0"],main:function(t,e,n,o,l){var a;return(null!=(a=(t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]})(n,"each").call(null!=e?e:t.nullContext||{},e,{name:"each",hash:{},fn:t.program(1,l,0),inverse:t.noop,data:l,loc:{start:{line:1,column:0},end:{line:24,column:9}}}))?a:"")+"\r\n"},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.17f141b28c24abf713c4.js.map