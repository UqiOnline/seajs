/*
Copyright 2011, SeaJS v0.2.0
MIT Licensed
build time: Jan 15 23:19
*/
var module=module||{};module.version="0.2.0";
(function(h){function g(f){return f==null?String(f):l[Object.prototype.toString.call(f)]||"object"}for(var m=["Boolean","Number","String","Function","Array","Date","RegExp","Object"],l={},j,n=0;j=m[n++];)l["[object "+j+"]"]=j.toLowerCase();h.type=g;h.isBoolean=function(f){return g(f)==="boolean"};h.isNumber=function(f){return g(f)==="number"};h.isString=function(f){return g(f)==="string"};h.isFunction=function(f){return g(f)==="function"};h.isArray=Array.isArray?Array.isArray:function(f){return g(f)===
"array"};h.indexOf=Array.prototype.indexOf?function(f,o){return f.indexOf(o)}:function(f,o){for(var p=0,u=f.length;p<u;p++)if(f[p]===o)return p;return-1};h.inArray=function(f,o){return h.indexOf(f,o)>-1};h.now=Date.now||function(){return(new Date).getTime()}})(module._={});
(function(h,g){function m(a,b){b.id=a;b.dependencies=z(b.dependencies,a);v[w(a)]=b}function l(a){for(var b=[],d=0,c=a.length,e;d<c;d++){e=a[d];v[w(e)]||b.push(e)}return b}function j(a){a=a||{deps:[]};return function(b){b=z(b,a.id);var d;if(!g.inArray(a.deps,b)||!(d=v[w(b)]))throw"Invalid module id: "+b;if(n(a,b)){var c=a;if(h.console)for(b=b;c;){b+=" <-- "+c.id;c=c.parent}return d.exports}if(!d.exports){c=d;b=a;var e=c.factory;if(g.isFunction(e)){if(b=e.call(c,new j({id:c.id,parent:b,deps:c.dependencies}),
c.exports={},c))c.exports=b}else c.exports=e||{}}return d.exports}}function n(a,b){if(a.id===b)return true;if(a.parent)return n(a.parent,b);return false}function f(a,b,d){function c(){if(b)b(d?undefined:new j({id:"provide(["+a+"])",deps:a}))}a=l(z(a));if(a.length===0)return c();for(var e=0,i=a.length,q=i;e<i;e++)(function(E){o(E,function(){var x=(v[w(E)]||0).dependencies||[],A=x.length;if(A){x=l(x);q+=A;f(x,function(){q-=A;q===0&&c()},true)}--q===0&&c()})})(a[e])}function o(a,b){function d(){if(r){m(a,
r);r=null}s[c]&&delete s[c];b&&b()}var c=w(a);if(s[c])u(s[c],d);else{if(B)t={id:a,timestamp:g.now()};s[c]=p(c,d)}}function p(a,b){var d=document.createElement("script");u(d,function(){b&&b.call(d);try{if(d.clearAttributes)d.clearAttributes();else for(var c in d)delete d[c]}catch(e){}y.removeChild(d)});d.async=true;d.src=a;return y.insertBefore(d,y.firstChild)}function u(a,b){a.addEventListener("load",b,false);a.addEventListener("error",function(){b()},false)}function F(a){return(a=a.split("/").slice(0,
-1).join("/"))?a:"."}function C(a){var b=a.split("/"),d=[],c,e,i;e=0;for(i=b.length;e<i;e++){c=b[e];if(c==".."){if(d.length===0)throw"Invalid module path: "+a;d.pop()}else c!=="."&&d.push(c)}return d.join("/")}function w(a){if(a===""||a.indexOf("://")!==-1)return a;if(a.charAt(0)==="/")a=a.substring(1);return C(D+"/"+a)+".js"}function z(a,b){var d,c=b?F(b)+"/":"";if(g.isArray(a)){var e=0,i=a.length;for(d=[];e<i;e++)d.push(C(a[e].indexOf(".")===0?c+a[e]:a[e]))}else if(g.isString(a))d=C(a.indexOf(".")===
0?c+a:a);return d}var s={},r=null,t=null,B=!+"\v1",v={},k=document.getElementsByTagName("script");k=k[k.length-1];var D=F(k.hasAttribute?k.src:k.getAttribute("src",4)),y=document.getElementsByTagName("head")[0];if(B)u=function(a,b){a.attachEvent("onreadystatechange",function(){var d=a.readyState;if(d==="loaded"||d==="complete")b()})};(k=k.getAttribute("data-main"))&&f([k]);module.provide=f;module.declare=function(a,b,d){if(g.isArray(a)){d=b;b=a;a=""}if(B){if(!a){var c;a:{c=y.getElementsByTagName("script");
for(var e,i=0,q=c.length;i<q;i++){e=c[i];if(e.readyState==="interactive"){c=e;break a}}c=void 0}if(c)a=c.src.replace(D+"/","").replace(/\.js.*$/,"");else if(t)if(g.now()-t.timestamp<10)a=t.id}t=null}b={dependencies:b,factory:d};if(a){m(a,b);r=null}else r=b};module.reset=function(a){s={};v={};t=r=null;if(a)D=a}})(this,module._);(function(h){module.declare("lang",[],function(g,m){m.mix=function(l,j){for(var n in j)if(j.hasOwnProperty(n))l[n]=j[n];return l};m.mix(m,h)})})(module._);delete module._;
