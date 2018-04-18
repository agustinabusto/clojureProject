// Compiled by ClojureScript 1.7.107 {}
goog.provide('gf_client.utils');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('ajax.core');
cljs.core.enable_console_print_BANG_.call(null);
/**
 * returns a type 4 random UUID: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
 */
gf_client.utils.uuid = (function gf_client$utils$uuid(){
var r = cljs.core.repeatedly.call(null,(30),(function (){
return cljs.core.rand_int.call(null,(16)).toString((16));
}));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,cljs.core.take.call(null,(8),r),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-"], null),cljs.core.take.call(null,(4),cljs.core.drop.call(null,(8),r)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-4"], null),cljs.core.take.call(null,(3),cljs.core.drop.call(null,(12),r)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((8) | ((3) & cljs.core.rand_int.call(null,(15)))).toString((16))], null),cljs.core.take.call(null,(3),cljs.core.drop.call(null,(15),r)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-"], null),cljs.core.take.call(null,(12),cljs.core.drop.call(null,(18),r))));
});
/**
 * returns a channel with the result of the json request to uri with a map of pars parameters
 *   channel entries are of the form {:success true/false :response response/error-text}
 */
gf_client.utils.ajax_get = (function gf_client$utils$ajax_get(url,pars){
var out = cljs.core.async.chan.call(null);
ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","text/plain"], null),new cljs.core.Keyword(null,"params","params",710516235),pars,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (out){
return (function (p1__24679_SHARP_){
return cljs.core.async.put_BANG_.call(null,out,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"response","response",-1068424192),p1__24679_SHARP_], null));
});})(out))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (out){
return (function (p1__24681_SHARP_,p2__24680_SHARP_){
return cljs.core.async.put_BANG_.call(null,out,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"response","response",-1068424192),p2__24680_SHARP_], null));
});})(out))
], null));

return out;
});
/**
 * mounts the component cmp with properties props at dom-id
 *   e.g., (mount-component maze1.logger/logger-coponent myprop "logger")
 */
gf_client.utils.mount_component = (function gf_client$utils$mount_component(cmp,props,dom_id){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cmp,props], null),document.getElementById(dom_id));
});

//# sourceMappingURL=utils.js.map?rel=1472152819276