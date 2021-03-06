// Compiled by ClojureScript 1.7.107 {}
goog.provide('figwheel.client.utils');
goog.require('cljs.core');
goog.require('clojure.string');
figwheel.client.utils._STAR_print_debug_STAR_ = false;
figwheel.client.utils.html_env_QMARK_ = (function figwheel$client$utils$html_env_QMARK_(){
return goog.inHtmlDocument_;
});
figwheel.client.utils.node_env_QMARK_ = (function figwheel$client$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
figwheel.client.utils.base_url_path = (function figwheel$client$utils$base_url_path(){
return clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__34552_SHARP_,p2__34551_SHARP_){
return [cljs.core.str(p2__34551_SHARP_)].join('');
}));
});
figwheel.client.utils.host_env_QMARK_ = (function figwheel$client$utils$host_env_QMARK_(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"html","html",-998796897);
} else {
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"node","node",581201198);
} else {
return new cljs.core.Keyword(null,"html","html",-998796897);

}
}
});
figwheel.client.utils.debug_prn = (function figwheel$client$utils$debug_prn(o){
if(cljs.core.truth_(figwheel.client.utils._STAR_print_debug_STAR_)){
var o__$1 = (((cljs.core.map_QMARK_.call(null,o)) || (cljs.core.seq_QMARK_.call(null,o)))?cljs.core.prn_str.call(null,o):o);
return console.log(o__$1);
} else {
return null;
}
});
figwheel.client.utils.log = (function figwheel$client$utils$log(var_args){
var args34557 = [];
var len__19777__auto___34563 = arguments.length;
var i__19778__auto___34564 = (0);
while(true){
if((i__19778__auto___34564 < len__19777__auto___34563)){
args34557.push((arguments[i__19778__auto___34564]));

var G__34565 = (i__19778__auto___34564 + (1));
i__19778__auto___34564 = G__34565;
continue;
} else {
}
break;
}

var G__34559 = args34557.length;
switch (G__34559) {
case 1:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34557.length)].join('')));

}
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1 = (function (x){
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),x);
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2 = (function (level,arg){
var f = (function (){var pred__34560 = cljs.core._EQ_;
var expr__34561 = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?level:new cljs.core.Keyword(null,"info","info",-317069002));
if(cljs.core.truth_(pred__34560.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),expr__34561))){
return ((function (pred__34560,expr__34561){
return (function (p1__34553_SHARP_){
return console.warn(p1__34553_SHARP_);
});
;})(pred__34560,expr__34561))
} else {
if(cljs.core.truth_(pred__34560.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),expr__34561))){
return ((function (pred__34560,expr__34561){
return (function (p1__34554_SHARP_){
return console.debug(p1__34554_SHARP_);
});
;})(pred__34560,expr__34561))
} else {
if(cljs.core.truth_(pred__34560.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__34561))){
return ((function (pred__34560,expr__34561){
return (function (p1__34555_SHARP_){
return console.error(p1__34555_SHARP_);
});
;})(pred__34560,expr__34561))
} else {
return ((function (pred__34560,expr__34561){
return (function (p1__34556_SHARP_){
return console.log(p1__34556_SHARP_);
});
;})(pred__34560,expr__34561))
}
}
}
})();
return f.call(null,arg);
});

figwheel.client.utils.log.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=utils.js.map?rel=1472152837885