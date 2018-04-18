// Compiled by ClojureScript 1.7.107 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.reload_file_STAR_;

figwheel.client.file_reloading.resolve_ns;
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__34569_SHARP_,p2__34570_SHARP_){
var and__18707__auto__ = p1__34569_SHARP_;
if(cljs.core.truth_(and__18707__auto__)){
return p2__34570_SHARP_;
} else {
return and__18707__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18719__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18719__auto__){
return or__18719__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__18719__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__18719__auto__){
return or__18719__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__18719__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__18719__auto__)){
return or__18719__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__19632__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19633__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19634__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19635__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19636__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19636__auto__,method_table__19632__auto__,prefer_table__19633__auto__,method_cache__19634__auto__,cached_hierarchy__19635__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__34571){
var map__34572 = p__34571;
var map__34572__$1 = ((((!((map__34572 == null)))?((((map__34572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34572):map__34572);
var file = cljs.core.get.call(null,map__34572__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__34574){
var map__34575 = p__34574;
var map__34575__$1 = ((((!((map__34575 == null)))?((((map__34575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34575):map__34575);
var namespace = cljs.core.get.call(null,map__34575__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__19632__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19633__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19634__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19635__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19636__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19636__auto__,method_table__19632__auto__,prefer_table__19633__auto__,method_cache__19634__auto__,cached_hierarchy__19635__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e34577){if((e34577 instanceof Error)){
var e = e34577;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34577;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(var_args){
var args34578 = [];
var len__19777__auto___34581 = arguments.length;
var i__19778__auto___34582 = (0);
while(true){
if((i__19778__auto___34582 < len__19777__auto___34581)){
args34578.push((arguments[i__19778__auto___34582]));

var G__34583 = (i__19778__auto___34582 + (1));
i__19778__auto___34582 = G__34583;
continue;
} else {
}
break;
}

var G__34580 = args34578.length;
switch (G__34580) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34578.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34585,callback){
var map__34588 = p__34585;
var map__34588__$1 = ((((!((map__34588 == null)))?((((map__34588.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34588.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34588):map__34588);
var file_msg = map__34588__$1;
var request_url = cljs.core.get.call(null,map__34588__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34588,map__34588__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34588,map__34588__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34590){
var map__34593 = p__34590;
var map__34593__$1 = ((((!((map__34593 == null)))?((((map__34593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34593):map__34593);
var file_msg = map__34593__$1;
var namespace = cljs.core.get.call(null,map__34593__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__34593__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__18719__auto__ = meta_data;
if(cljs.core.truth_(or__18719__auto__)){
return or__18719__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__18707__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__18707__auto__){
var or__18719__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18719__auto__)){
return or__18719__auto__;
} else {
var or__18719__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18719__auto____$1)){
return or__18719__auto____$1;
} else {
var and__18707__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__18707__auto____$1){
var or__18719__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__18719__auto____$2){
return or__18719__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__18707__auto____$1;
}
}
}
} else {
return and__18707__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34595,callback){
var map__34598 = p__34595;
var map__34598__$1 = ((((!((map__34598 == null)))?((((map__34598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34598):map__34598);
var file_msg = map__34598__$1;
var request_url = cljs.core.get.call(null,map__34598__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34598__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22433__auto___34686 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22433__auto___34686,out){
return (function (){
var f__22434__auto__ = (function (){var switch__22368__auto__ = ((function (c__22433__auto___34686,out){
return (function (state_34668){
var state_val_34669 = (state_34668[(1)]);
if((state_val_34669 === (1))){
var inst_34646 = cljs.core.nth.call(null,files,(0),null);
var inst_34647 = cljs.core.nthnext.call(null,files,(1));
var inst_34648 = files;
var state_34668__$1 = (function (){var statearr_34670 = state_34668;
(statearr_34670[(7)] = inst_34647);

(statearr_34670[(8)] = inst_34646);

(statearr_34670[(9)] = inst_34648);

return statearr_34670;
})();
var statearr_34671_34687 = state_34668__$1;
(statearr_34671_34687[(2)] = null);

(statearr_34671_34687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34669 === (2))){
var inst_34651 = (state_34668[(10)]);
var inst_34648 = (state_34668[(9)]);
var inst_34651__$1 = cljs.core.nth.call(null,inst_34648,(0),null);
var inst_34652 = cljs.core.nthnext.call(null,inst_34648,(1));
var inst_34653 = (inst_34651__$1 == null);
var inst_34654 = cljs.core.not.call(null,inst_34653);
var state_34668__$1 = (function (){var statearr_34672 = state_34668;
(statearr_34672[(10)] = inst_34651__$1);

(statearr_34672[(11)] = inst_34652);

return statearr_34672;
})();
if(inst_34654){
var statearr_34673_34688 = state_34668__$1;
(statearr_34673_34688[(1)] = (4));

} else {
var statearr_34674_34689 = state_34668__$1;
(statearr_34674_34689[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34669 === (3))){
var inst_34666 = (state_34668[(2)]);
var state_34668__$1 = state_34668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34668__$1,inst_34666);
} else {
if((state_val_34669 === (4))){
var inst_34651 = (state_34668[(10)]);
var inst_34656 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34651);
var state_34668__$1 = state_34668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34668__$1,(7),inst_34656);
} else {
if((state_val_34669 === (5))){
var inst_34662 = cljs.core.async.close_BANG_.call(null,out);
var state_34668__$1 = state_34668;
var statearr_34675_34690 = state_34668__$1;
(statearr_34675_34690[(2)] = inst_34662);

(statearr_34675_34690[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34669 === (6))){
var inst_34664 = (state_34668[(2)]);
var state_34668__$1 = state_34668;
var statearr_34676_34691 = state_34668__$1;
(statearr_34676_34691[(2)] = inst_34664);

(statearr_34676_34691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34669 === (7))){
var inst_34652 = (state_34668[(11)]);
var inst_34658 = (state_34668[(2)]);
var inst_34659 = cljs.core.async.put_BANG_.call(null,out,inst_34658);
var inst_34648 = inst_34652;
var state_34668__$1 = (function (){var statearr_34677 = state_34668;
(statearr_34677[(12)] = inst_34659);

(statearr_34677[(9)] = inst_34648);

return statearr_34677;
})();
var statearr_34678_34692 = state_34668__$1;
(statearr_34678_34692[(2)] = null);

(statearr_34678_34692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__22433__auto___34686,out))
;
return ((function (switch__22368__auto__,c__22433__auto___34686,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22369__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22369__auto____0 = (function (){
var statearr_34682 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34682[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22369__auto__);

(statearr_34682[(1)] = (1));

return statearr_34682;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22369__auto____1 = (function (state_34668){
while(true){
var ret_value__22370__auto__ = (function (){try{while(true){
var result__22371__auto__ = switch__22368__auto__.call(null,state_34668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22371__auto__;
}
break;
}
}catch (e34683){if((e34683 instanceof Object)){
var ex__22372__auto__ = e34683;
var statearr_34684_34693 = state_34668;
(statearr_34684_34693[(5)] = ex__22372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34694 = state_34668;
state_34668 = G__34694;
continue;
} else {
return ret_value__22370__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22369__auto__ = function(state_34668){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22369__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22369__auto____1.call(this,state_34668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22369__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22369__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22369__auto__;
})()
;})(switch__22368__auto__,c__22433__auto___34686,out))
})();
var state__22435__auto__ = (function (){var statearr_34685 = f__22434__auto__.call(null);
(statearr_34685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22433__auto___34686);

return statearr_34685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22435__auto__);
});})(c__22433__auto___34686,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__34695,p__34696){
var map__34701 = p__34695;
var map__34701__$1 = ((((!((map__34701 == null)))?((((map__34701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34701):map__34701);
var opts = map__34701__$1;
var url_rewriter = cljs.core.get.call(null,map__34701__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__34702 = p__34696;
var map__34702__$1 = ((((!((map__34702 == null)))?((((map__34702.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34702.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34702):map__34702);
var file_msg = map__34702__$1;
var file = cljs.core.get.call(null,map__34702__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34705){
var map__34709 = p__34705;
var map__34709__$1 = ((((!((map__34709 == null)))?((((map__34709.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34709.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34709):map__34709);
var eval_body__$1 = cljs.core.get.call(null,map__34709__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34709__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18707__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18707__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18707__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e34711){var e = e34711;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34716,p__34717){
var map__34944 = p__34716;
var map__34944__$1 = ((((!((map__34944 == null)))?((((map__34944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34944):map__34944);
var opts = map__34944__$1;
var before_jsload = cljs.core.get.call(null,map__34944__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34944__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__34944__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__34945 = p__34717;
var map__34945__$1 = ((((!((map__34945 == null)))?((((map__34945.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34945.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34945):map__34945);
var msg = map__34945__$1;
var files = cljs.core.get.call(null,map__34945__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__22433__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22433__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34945,map__34945__$1,msg,files){
return (function (){
var f__22434__auto__ = (function (){var switch__22368__auto__ = ((function (c__22433__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34945,map__34945__$1,msg,files){
return (function (state_35085){
var state_val_35086 = (state_35085[(1)]);
if((state_val_35086 === (7))){
var inst_34958 = (state_35085[(7)]);
var inst_34959 = (state_35085[(8)]);
var inst_34960 = (state_35085[(9)]);
var inst_34961 = (state_35085[(10)]);
var inst_34966 = cljs.core._nth.call(null,inst_34959,inst_34961);
var inst_34967 = figwheel.client.file_reloading.eval_body.call(null,inst_34966);
var inst_34968 = (inst_34961 + (1));
var tmp35087 = inst_34958;
var tmp35088 = inst_34959;
var tmp35089 = inst_34960;
var inst_34958__$1 = tmp35087;
var inst_34959__$1 = tmp35088;
var inst_34960__$1 = tmp35089;
var inst_34961__$1 = inst_34968;
var state_35085__$1 = (function (){var statearr_35090 = state_35085;
(statearr_35090[(7)] = inst_34958__$1);

(statearr_35090[(8)] = inst_34959__$1);

(statearr_35090[(9)] = inst_34960__$1);

(statearr_35090[(10)] = inst_34961__$1);

(statearr_35090[(11)] = inst_34967);

return statearr_35090;
})();
var statearr_35091_35170 = state_35085__$1;
(statearr_35091_35170[(2)] = null);

(statearr_35091_35170[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (20))){
var inst_35008 = (state_35085[(12)]);
var inst_35004 = (state_35085[(13)]);
var inst_35003 = (state_35085[(14)]);
var inst_35010 = (state_35085[(15)]);
var inst_35007 = (state_35085[(16)]);
var inst_35013 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35015 = (function (){var all_files = inst_35003;
var files_SINGLEQUOTE_ = inst_35004;
var res_SINGLEQUOTE_ = inst_35007;
var res = inst_35008;
var files_not_loaded = inst_35010;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35008,inst_35004,inst_35003,inst_35010,inst_35007,inst_35013,state_val_35086,c__22433__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34945,map__34945__$1,msg,files){
return (function (p__35014){
var map__35092 = p__35014;
var map__35092__$1 = ((((!((map__35092 == null)))?((((map__35092.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35092.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35092):map__35092);
var namespace = cljs.core.get.call(null,map__35092__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35092__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35008,inst_35004,inst_35003,inst_35010,inst_35007,inst_35013,state_val_35086,c__22433__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34945,map__34945__$1,msg,files))
})();
var inst_35016 = cljs.core.map.call(null,inst_35015,inst_35008);
var inst_35017 = cljs.core.pr_str.call(null,inst_35016);
var inst_35018 = figwheel.client.utils.log.call(null,inst_35017);
var inst_35019 = (function (){var all_files = inst_35003;
var files_SINGLEQUOTE_ = inst_35004;
var res_SINGLEQUOTE_ = inst_35007;
var res = inst_35008;
var files_not_loaded = inst_35010;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35008,inst_35004,inst_35003,inst_35010,inst_35007,inst_35013,inst_35015,inst_35016,inst_35017,inst_35018,state_val_35086,c__22433__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34945,map__34945__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35008,inst_35004,inst_35003,inst_35010,inst_35007,inst_35013,inst_35015,inst_35016,inst_35017,inst_35018,state_val_35086,c__22433__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34945,map__34945__$1,msg,files))
})();
var inst_35020 = setTimeout(inst_35019,(10));
var state_35085__$1 = (function (){var statearr_35094 = state_35085;
(statearr_35094[(17)] = inst_35013);

(statearr_35094[(18)] = inst_35018);

return statearr_35094;
})();
var statearr_35095_35171 = state_35085__$1;
(statearr_35095_35171[(2)] = inst_35020);

(statearr_35095_35171[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (27))){
var state_35085__$1 = state_35085;
var statearr_35096_35172 = state_35085__$1;
(statearr_35096_35172[(2)] = false);

(statearr_35096_35172[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (1))){
var inst_34950 = (state_35085[(19)]);
var inst_34948 = before_jsload.call(null,files);
var inst_34949 = (function (){return ((function (inst_34950,inst_34948,state_val_35086,c__22433__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34945,map__34945__$1,msg,files){
return (function (p1__34712_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34712_SHARP_);
});
;})(inst_34950,inst_34948,state_val_35086,c__22433__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34945,map__34945__$1,msg,files))
})();
var inst_34950__$1 = cljs.core.filter.call(null,inst_34949,files);
var inst_34951 = cljs.core.not_empty.call(null,inst_34950__$1);
var state_35085__$1 = (function (){var statearr_35097 = state_35085;
(statearr_35097[(19)] = inst_34950__$1);

(statearr_35097[(20)] = inst_34948);

return statearr_35097;
})();
if(cljs.core.truth_(inst_34951)){
var statearr_35098_35173 = state_35085__$1;
(statearr_35098_35173[(1)] = (2));

} else {
var statearr_35099_35174 = state_35085__$1;
(statearr_35099_35174[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (24))){
var state_35085__$1 = state_35085;
var statearr_35100_35175 = state_35085__$1;
(statearr_35100_35175[(2)] = null);

(statearr_35100_35175[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (39))){
var state_35085__$1 = state_35085;
var statearr_35101_35176 = state_35085__$1;
(statearr_35101_35176[(2)] = null);

(statearr_35101_35176[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (4))){
var inst_34995 = (state_35085[(2)]);
var inst_34996 = (function (){return ((function (inst_34995,state_val_35086,c__22433__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34945,map__34945__$1,msg,files){
return (function (p1__34713_SHARP_){
var and__18707__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34713_SHARP_);
if(cljs.core.truth_(and__18707__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34713_SHARP_));
} else {
return and__18707__auto__;
}
});
;})(inst_34995,state_val_35086,c__22433__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34945,map__34945__$1,msg,files))
})();
var inst_34997 = cljs.core.filter.call(null,inst_34996,files);
var state_35085__$1 = (function (){var statearr_35102 = state_35085;
(statearr_35102[(21)] = inst_34997);

(statearr_35102[(22)] = inst_34995);

return statearr_35102;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_35103_35177 = state_35085__$1;
(statearr_35103_35177[(1)] = (16));

} else {
var statearr_35104_35178 = state_35085__$1;
(statearr_35104_35178[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (15))){
var inst_34985 = (state_35085[(2)]);
var state_35085__$1 = state_35085;
var statearr_35105_35179 = state_35085__$1;
(statearr_35105_35179[(2)] = inst_34985);

(statearr_35105_35179[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (21))){
var state_35085__$1 = state_35085;
var statearr_35106_35180 = state_35085__$1;
(statearr_35106_35180[(2)] = null);

(statearr_35106_35180[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (31))){
var inst_35042 = (state_35085[(2)]);
var state_35085__$1 = state_35085;
var statearr_35107_35181 = state_35085__$1;
(statearr_35107_35181[(2)] = inst_35042);

(statearr_35107_35181[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (32))){
var inst_35030 = (state_35085[(23)]);
var inst_35047 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35030);
var state_35085__$1 = state_35085;
var statearr_35108_35182 = state_35085__$1;
(statearr_35108_35182[(2)] = inst_35047);

(statearr_35108_35182[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (40))){
var inst_35053 = (state_35085[(24)]);
var inst_35071 = (state_35085[(2)]);
var inst_35072 = cljs.core.not_empty.call(null,inst_35053);
var state_35085__$1 = (function (){var statearr_35109 = state_35085;
(statearr_35109[(25)] = inst_35071);

return statearr_35109;
})();
if(cljs.core.truth_(inst_35072)){
var statearr_35110_35183 = state_35085__$1;
(statearr_35110_35183[(1)] = (41));

} else {
var statearr_35111_35184 = state_35085__$1;
(statearr_35111_35184[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (33))){
var inst_35030 = (state_35085[(23)]);
var state_35085__$1 = state_35085;
var statearr_35112_35185 = state_35085__$1;
(statearr_35112_35185[(2)] = inst_35030);

(statearr_35112_35185[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (13))){
var inst_34971 = (state_35085[(26)]);
var inst_34975 = cljs.core.chunk_first.call(null,inst_34971);
var inst_34976 = cljs.core.chunk_rest.call(null,inst_34971);
var inst_34977 = cljs.core.count.call(null,inst_34975);
var inst_34958 = inst_34976;
var inst_34959 = inst_34975;
var inst_34960 = inst_34977;
var inst_34961 = (0);
var state_35085__$1 = (function (){var statearr_35113 = state_35085;
(statearr_35113[(7)] = inst_34958);

(statearr_35113[(8)] = inst_34959);

(statearr_35113[(9)] = inst_34960);

(statearr_35113[(10)] = inst_34961);

return statearr_35113;
})();
var statearr_35114_35186 = state_35085__$1;
(statearr_35114_35186[(2)] = null);

(statearr_35114_35186[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (22))){
var inst_35010 = (state_35085[(15)]);
var inst_35023 = (state_35085[(2)]);
var inst_35024 = cljs.core.not_empty.call(null,inst_35010);
var state_35085__$1 = (function (){var statearr_35115 = state_35085;
(statearr_35115[(27)] = inst_35023);

return statearr_35115;
})();
if(cljs.core.truth_(inst_35024)){
var statearr_35116_35187 = state_35085__$1;
(statearr_35116_35187[(1)] = (23));

} else {
var statearr_35117_35188 = state_35085__$1;
(statearr_35117_35188[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (36))){
var state_35085__$1 = state_35085;
var statearr_35118_35189 = state_35085__$1;
(statearr_35118_35189[(2)] = null);

(statearr_35118_35189[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (41))){
var inst_35053 = (state_35085[(24)]);
var inst_35074 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35053);
var inst_35075 = cljs.core.pr_str.call(null,inst_35074);
var inst_35076 = [cljs.core.str("not required: "),cljs.core.str(inst_35075)].join('');
var inst_35077 = figwheel.client.utils.log.call(null,inst_35076);
var state_35085__$1 = state_35085;
var statearr_35119_35190 = state_35085__$1;
(statearr_35119_35190[(2)] = inst_35077);

(statearr_35119_35190[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (43))){
var inst_35080 = (state_35085[(2)]);
var state_35085__$1 = state_35085;
var statearr_35120_35191 = state_35085__$1;
(statearr_35120_35191[(2)] = inst_35080);

(statearr_35120_35191[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (29))){
var state_35085__$1 = state_35085;
var statearr_35121_35192 = state_35085__$1;
(statearr_35121_35192[(2)] = true);

(statearr_35121_35192[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (6))){
var inst_34992 = (state_35085[(2)]);
var state_35085__$1 = state_35085;
var statearr_35122_35193 = state_35085__$1;
(statearr_35122_35193[(2)] = inst_34992);

(statearr_35122_35193[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (28))){
var inst_35045 = (state_35085[(2)]);
var state_35085__$1 = state_35085;
if(cljs.core.truth_(inst_35045)){
var statearr_35123_35194 = state_35085__$1;
(statearr_35123_35194[(1)] = (32));

} else {
var statearr_35124_35195 = state_35085__$1;
(statearr_35124_35195[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (25))){
var inst_35083 = (state_35085[(2)]);
var state_35085__$1 = state_35085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35085__$1,inst_35083);
} else {
if((state_val_35086 === (34))){
var inst_35051 = (state_35085[(28)]);
var inst_35050 = (state_35085[(2)]);
var inst_35051__$1 = cljs.core.get.call(null,inst_35050,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35052 = cljs.core.get.call(null,inst_35050,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_35053 = cljs.core.get.call(null,inst_35050,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35054 = cljs.core.not_empty.call(null,inst_35051__$1);
var state_35085__$1 = (function (){var statearr_35125 = state_35085;
(statearr_35125[(29)] = inst_35052);

(statearr_35125[(28)] = inst_35051__$1);

(statearr_35125[(24)] = inst_35053);

return statearr_35125;
})();
if(cljs.core.truth_(inst_35054)){
var statearr_35126_35196 = state_35085__$1;
(statearr_35126_35196[(1)] = (35));

} else {
var statearr_35127_35197 = state_35085__$1;
(statearr_35127_35197[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (17))){
var inst_34997 = (state_35085[(21)]);
var state_35085__$1 = state_35085;
var statearr_35128_35198 = state_35085__$1;
(statearr_35128_35198[(2)] = inst_34997);

(statearr_35128_35198[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (3))){
var state_35085__$1 = state_35085;
var statearr_35129_35199 = state_35085__$1;
(statearr_35129_35199[(2)] = null);

(statearr_35129_35199[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (12))){
var inst_34988 = (state_35085[(2)]);
var state_35085__$1 = state_35085;
var statearr_35130_35200 = state_35085__$1;
(statearr_35130_35200[(2)] = inst_34988);

(statearr_35130_35200[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (2))){
var inst_34950 = (state_35085[(19)]);
var inst_34957 = cljs.core.seq.call(null,inst_34950);
var inst_34958 = inst_34957;
var inst_34959 = null;
var inst_34960 = (0);
var inst_34961 = (0);
var state_35085__$1 = (function (){var statearr_35131 = state_35085;
(statearr_35131[(7)] = inst_34958);

(statearr_35131[(8)] = inst_34959);

(statearr_35131[(9)] = inst_34960);

(statearr_35131[(10)] = inst_34961);

return statearr_35131;
})();
var statearr_35132_35201 = state_35085__$1;
(statearr_35132_35201[(2)] = null);

(statearr_35132_35201[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (23))){
var inst_35008 = (state_35085[(12)]);
var inst_35004 = (state_35085[(13)]);
var inst_35003 = (state_35085[(14)]);
var inst_35010 = (state_35085[(15)]);
var inst_35007 = (state_35085[(16)]);
var inst_35030 = (state_35085[(23)]);
var inst_35026 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35029 = (function (){var all_files = inst_35003;
var files_SINGLEQUOTE_ = inst_35004;
var res_SINGLEQUOTE_ = inst_35007;
var res = inst_35008;
var files_not_loaded = inst_35010;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35008,inst_35004,inst_35003,inst_35010,inst_35007,inst_35030,inst_35026,state_val_35086,c__22433__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34945,map__34945__$1,msg,files){
return (function (p__35028){
var map__35133 = p__35028;
var map__35133__$1 = ((((!((map__35133 == null)))?((((map__35133.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35133.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35133):map__35133);
var meta_data = cljs.core.get.call(null,map__35133__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35008,inst_35004,inst_35003,inst_35010,inst_35007,inst_35030,inst_35026,state_val_35086,c__22433__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34945,map__34945__$1,msg,files))
})();
var inst_35030__$1 = cljs.core.group_by.call(null,inst_35029,inst_35010);
var inst_35032 = (inst_35030__$1 == null);
var inst_35033 = cljs.core.not.call(null,inst_35032);
var state_35085__$1 = (function (){var statearr_35135 = state_35085;
(statearr_35135[(30)] = inst_35026);

(statearr_35135[(23)] = inst_35030__$1);

return statearr_35135;
})();
if(inst_35033){
var statearr_35136_35202 = state_35085__$1;
(statearr_35136_35202[(1)] = (26));

} else {
var statearr_35137_35203 = state_35085__$1;
(statearr_35137_35203[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (35))){
var inst_35051 = (state_35085[(28)]);
var inst_35056 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35051);
var inst_35057 = cljs.core.pr_str.call(null,inst_35056);
var inst_35058 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_35057)].join('');
var inst_35059 = figwheel.client.utils.log.call(null,inst_35058);
var state_35085__$1 = state_35085;
var statearr_35138_35204 = state_35085__$1;
(statearr_35138_35204[(2)] = inst_35059);

(statearr_35138_35204[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (19))){
var inst_35008 = (state_35085[(12)]);
var inst_35004 = (state_35085[(13)]);
var inst_35003 = (state_35085[(14)]);
var inst_35007 = (state_35085[(16)]);
var inst_35007__$1 = (state_35085[(2)]);
var inst_35008__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35007__$1);
var inst_35009 = (function (){var all_files = inst_35003;
var files_SINGLEQUOTE_ = inst_35004;
var res_SINGLEQUOTE_ = inst_35007__$1;
var res = inst_35008__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_35008,inst_35004,inst_35003,inst_35007,inst_35007__$1,inst_35008__$1,state_val_35086,c__22433__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34945,map__34945__$1,msg,files){
return (function (p1__34715_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34715_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_35008,inst_35004,inst_35003,inst_35007,inst_35007__$1,inst_35008__$1,state_val_35086,c__22433__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34945,map__34945__$1,msg,files))
})();
var inst_35010 = cljs.core.filter.call(null,inst_35009,inst_35007__$1);
var inst_35011 = cljs.core.not_empty.call(null,inst_35008__$1);
var state_35085__$1 = (function (){var statearr_35139 = state_35085;
(statearr_35139[(12)] = inst_35008__$1);

(statearr_35139[(15)] = inst_35010);

(statearr_35139[(16)] = inst_35007__$1);

return statearr_35139;
})();
if(cljs.core.truth_(inst_35011)){
var statearr_35140_35205 = state_35085__$1;
(statearr_35140_35205[(1)] = (20));

} else {
var statearr_35141_35206 = state_35085__$1;
(statearr_35141_35206[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (11))){
var state_35085__$1 = state_35085;
var statearr_35142_35207 = state_35085__$1;
(statearr_35142_35207[(2)] = null);

(statearr_35142_35207[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (9))){
var inst_34990 = (state_35085[(2)]);
var state_35085__$1 = state_35085;
var statearr_35143_35208 = state_35085__$1;
(statearr_35143_35208[(2)] = inst_34990);

(statearr_35143_35208[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (5))){
var inst_34960 = (state_35085[(9)]);
var inst_34961 = (state_35085[(10)]);
var inst_34963 = (inst_34961 < inst_34960);
var inst_34964 = inst_34963;
var state_35085__$1 = state_35085;
if(cljs.core.truth_(inst_34964)){
var statearr_35144_35209 = state_35085__$1;
(statearr_35144_35209[(1)] = (7));

} else {
var statearr_35145_35210 = state_35085__$1;
(statearr_35145_35210[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (14))){
var inst_34971 = (state_35085[(26)]);
var inst_34980 = cljs.core.first.call(null,inst_34971);
var inst_34981 = figwheel.client.file_reloading.eval_body.call(null,inst_34980);
var inst_34982 = cljs.core.next.call(null,inst_34971);
var inst_34958 = inst_34982;
var inst_34959 = null;
var inst_34960 = (0);
var inst_34961 = (0);
var state_35085__$1 = (function (){var statearr_35146 = state_35085;
(statearr_35146[(7)] = inst_34958);

(statearr_35146[(8)] = inst_34959);

(statearr_35146[(9)] = inst_34960);

(statearr_35146[(10)] = inst_34961);

(statearr_35146[(31)] = inst_34981);

return statearr_35146;
})();
var statearr_35147_35211 = state_35085__$1;
(statearr_35147_35211[(2)] = null);

(statearr_35147_35211[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (26))){
var inst_35030 = (state_35085[(23)]);
var inst_35035 = inst_35030.cljs$lang$protocol_mask$partition0$;
var inst_35036 = (inst_35035 & (64));
var inst_35037 = inst_35030.cljs$core$ISeq$;
var inst_35038 = (inst_35036) || (inst_35037);
var state_35085__$1 = state_35085;
if(cljs.core.truth_(inst_35038)){
var statearr_35148_35212 = state_35085__$1;
(statearr_35148_35212[(1)] = (29));

} else {
var statearr_35149_35213 = state_35085__$1;
(statearr_35149_35213[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (16))){
var inst_34997 = (state_35085[(21)]);
var inst_34999 = (function (){var all_files = inst_34997;
return ((function (all_files,inst_34997,state_val_35086,c__22433__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34945,map__34945__$1,msg,files){
return (function (p1__34714_SHARP_){
return cljs.core.update_in.call(null,p1__34714_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_34997,state_val_35086,c__22433__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34945,map__34945__$1,msg,files))
})();
var inst_35000 = cljs.core.map.call(null,inst_34999,inst_34997);
var state_35085__$1 = state_35085;
var statearr_35150_35214 = state_35085__$1;
(statearr_35150_35214[(2)] = inst_35000);

(statearr_35150_35214[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (38))){
var inst_35052 = (state_35085[(29)]);
var inst_35065 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35052);
var inst_35066 = cljs.core.pr_str.call(null,inst_35065);
var inst_35067 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_35066)].join('');
var inst_35068 = figwheel.client.utils.log.call(null,inst_35067);
var state_35085__$1 = state_35085;
var statearr_35151_35215 = state_35085__$1;
(statearr_35151_35215[(2)] = inst_35068);

(statearr_35151_35215[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (30))){
var state_35085__$1 = state_35085;
var statearr_35152_35216 = state_35085__$1;
(statearr_35152_35216[(2)] = false);

(statearr_35152_35216[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (10))){
var inst_34971 = (state_35085[(26)]);
var inst_34973 = cljs.core.chunked_seq_QMARK_.call(null,inst_34971);
var state_35085__$1 = state_35085;
if(inst_34973){
var statearr_35153_35217 = state_35085__$1;
(statearr_35153_35217[(1)] = (13));

} else {
var statearr_35154_35218 = state_35085__$1;
(statearr_35154_35218[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (18))){
var inst_35004 = (state_35085[(13)]);
var inst_35003 = (state_35085[(14)]);
var inst_35003__$1 = (state_35085[(2)]);
var inst_35004__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_35003__$1);
var inst_35005 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35004__$1);
var state_35085__$1 = (function (){var statearr_35155 = state_35085;
(statearr_35155[(13)] = inst_35004__$1);

(statearr_35155[(14)] = inst_35003__$1);

return statearr_35155;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35085__$1,(19),inst_35005);
} else {
if((state_val_35086 === (42))){
var state_35085__$1 = state_35085;
var statearr_35156_35219 = state_35085__$1;
(statearr_35156_35219[(2)] = null);

(statearr_35156_35219[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (37))){
var inst_35052 = (state_35085[(29)]);
var inst_35062 = (state_35085[(2)]);
var inst_35063 = cljs.core.not_empty.call(null,inst_35052);
var state_35085__$1 = (function (){var statearr_35157 = state_35085;
(statearr_35157[(32)] = inst_35062);

return statearr_35157;
})();
if(cljs.core.truth_(inst_35063)){
var statearr_35158_35220 = state_35085__$1;
(statearr_35158_35220[(1)] = (38));

} else {
var statearr_35159_35221 = state_35085__$1;
(statearr_35159_35221[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35086 === (8))){
var inst_34971 = (state_35085[(26)]);
var inst_34958 = (state_35085[(7)]);
var inst_34971__$1 = cljs.core.seq.call(null,inst_34958);
var state_35085__$1 = (function (){var statearr_35160 = state_35085;
(statearr_35160[(26)] = inst_34971__$1);

return statearr_35160;
})();
if(inst_34971__$1){
var statearr_35161_35222 = state_35085__$1;
(statearr_35161_35222[(1)] = (10));

} else {
var statearr_35162_35223 = state_35085__$1;
(statearr_35162_35223[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22433__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34945,map__34945__$1,msg,files))
;
return ((function (switch__22368__auto__,c__22433__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34945,map__34945__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22369__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22369__auto____0 = (function (){
var statearr_35166 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35166[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22369__auto__);

(statearr_35166[(1)] = (1));

return statearr_35166;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22369__auto____1 = (function (state_35085){
while(true){
var ret_value__22370__auto__ = (function (){try{while(true){
var result__22371__auto__ = switch__22368__auto__.call(null,state_35085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22371__auto__;
}
break;
}
}catch (e35167){if((e35167 instanceof Object)){
var ex__22372__auto__ = e35167;
var statearr_35168_35224 = state_35085;
(statearr_35168_35224[(5)] = ex__22372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35225 = state_35085;
state_35085 = G__35225;
continue;
} else {
return ret_value__22370__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22369__auto__ = function(state_35085){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22369__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22369__auto____1.call(this,state_35085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22369__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22369__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22369__auto__;
})()
;})(switch__22368__auto__,c__22433__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34945,map__34945__$1,msg,files))
})();
var state__22435__auto__ = (function (){var statearr_35169 = f__22434__auto__.call(null);
(statearr_35169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22433__auto__);

return statearr_35169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22435__auto__);
});})(c__22433__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__34945,map__34945__$1,msg,files))
);

return c__22433__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35228,link){
var map__35231 = p__35228;
var map__35231__$1 = ((((!((map__35231 == null)))?((((map__35231.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35231.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35231):map__35231);
var file = cljs.core.get.call(null,map__35231__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__35231,map__35231__$1,file){
return (function (p1__35226_SHARP_,p2__35227_SHARP_){
if(cljs.core._EQ_.call(null,p1__35226_SHARP_,p2__35227_SHARP_)){
return p1__35226_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__35231,map__35231__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35237){
var map__35238 = p__35237;
var map__35238__$1 = ((((!((map__35238 == null)))?((((map__35238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35238):map__35238);
var match_length = cljs.core.get.call(null,map__35238__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35238__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35233_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35233_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args35240 = [];
var len__19777__auto___35243 = arguments.length;
var i__19778__auto___35244 = (0);
while(true){
if((i__19778__auto___35244 < len__19777__auto___35243)){
args35240.push((arguments[i__19778__auto___35244]));

var G__35245 = (i__19778__auto___35244 + (1));
i__19778__auto___35244 = G__35245;
continue;
} else {
}
break;
}

var G__35242 = args35240.length;
switch (G__35242) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35240.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__35247){
var map__35250 = p__35247;
var map__35250__$1 = ((((!((map__35250 == null)))?((((map__35250.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35250.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35250):map__35250);
var f_data = map__35250__$1;
var file = cljs.core.get.call(null,map__35250__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__35250__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__18719__auto__ = request_url;
if(cljs.core.truth_(or__18719__auto__)){
return or__18719__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35252,files_msg){
var map__35275 = p__35252;
var map__35275__$1 = ((((!((map__35275 == null)))?((((map__35275.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35275.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35275):map__35275);
var opts = map__35275__$1;
var on_cssload = cljs.core.get.call(null,map__35275__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__35277_35297 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__35278_35298 = null;
var count__35279_35299 = (0);
var i__35280_35300 = (0);
while(true){
if((i__35280_35300 < count__35279_35299)){
var f_35301 = cljs.core._nth.call(null,chunk__35278_35298,i__35280_35300);
figwheel.client.file_reloading.reload_css_file.call(null,f_35301);

var G__35302 = seq__35277_35297;
var G__35303 = chunk__35278_35298;
var G__35304 = count__35279_35299;
var G__35305 = (i__35280_35300 + (1));
seq__35277_35297 = G__35302;
chunk__35278_35298 = G__35303;
count__35279_35299 = G__35304;
i__35280_35300 = G__35305;
continue;
} else {
var temp__4425__auto___35306 = cljs.core.seq.call(null,seq__35277_35297);
if(temp__4425__auto___35306){
var seq__35277_35307__$1 = temp__4425__auto___35306;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35277_35307__$1)){
var c__19522__auto___35308 = cljs.core.chunk_first.call(null,seq__35277_35307__$1);
var G__35309 = cljs.core.chunk_rest.call(null,seq__35277_35307__$1);
var G__35310 = c__19522__auto___35308;
var G__35311 = cljs.core.count.call(null,c__19522__auto___35308);
var G__35312 = (0);
seq__35277_35297 = G__35309;
chunk__35278_35298 = G__35310;
count__35279_35299 = G__35311;
i__35280_35300 = G__35312;
continue;
} else {
var f_35313 = cljs.core.first.call(null,seq__35277_35307__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_35313);

var G__35314 = cljs.core.next.call(null,seq__35277_35307__$1);
var G__35315 = null;
var G__35316 = (0);
var G__35317 = (0);
seq__35277_35297 = G__35314;
chunk__35278_35298 = G__35315;
count__35279_35299 = G__35316;
i__35280_35300 = G__35317;
continue;
}
} else {
}
}
break;
}

var c__22433__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22433__auto__,map__35275,map__35275__$1,opts,on_cssload){
return (function (){
var f__22434__auto__ = (function (){var switch__22368__auto__ = ((function (c__22433__auto__,map__35275,map__35275__$1,opts,on_cssload){
return (function (state_35287){
var state_val_35288 = (state_35287[(1)]);
if((state_val_35288 === (1))){
var inst_35281 = cljs.core.async.timeout.call(null,(100));
var state_35287__$1 = state_35287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35287__$1,(2),inst_35281);
} else {
if((state_val_35288 === (2))){
var inst_35283 = (state_35287[(2)]);
var inst_35284 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_35285 = on_cssload.call(null,inst_35284);
var state_35287__$1 = (function (){var statearr_35289 = state_35287;
(statearr_35289[(7)] = inst_35283);

return statearr_35289;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35287__$1,inst_35285);
} else {
return null;
}
}
});})(c__22433__auto__,map__35275,map__35275__$1,opts,on_cssload))
;
return ((function (switch__22368__auto__,c__22433__auto__,map__35275,map__35275__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__22369__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__22369__auto____0 = (function (){
var statearr_35293 = [null,null,null,null,null,null,null,null];
(statearr_35293[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__22369__auto__);

(statearr_35293[(1)] = (1));

return statearr_35293;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__22369__auto____1 = (function (state_35287){
while(true){
var ret_value__22370__auto__ = (function (){try{while(true){
var result__22371__auto__ = switch__22368__auto__.call(null,state_35287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22371__auto__;
}
break;
}
}catch (e35294){if((e35294 instanceof Object)){
var ex__22372__auto__ = e35294;
var statearr_35295_35318 = state_35287;
(statearr_35295_35318[(5)] = ex__22372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35319 = state_35287;
state_35287 = G__35319;
continue;
} else {
return ret_value__22370__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__22369__auto__ = function(state_35287){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__22369__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__22369__auto____1.call(this,state_35287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__22369__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__22369__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__22369__auto__;
})()
;})(switch__22368__auto__,c__22433__auto__,map__35275,map__35275__$1,opts,on_cssload))
})();
var state__22435__auto__ = (function (){var statearr_35296 = f__22434__auto__.call(null);
(statearr_35296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22433__auto__);

return statearr_35296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22435__auto__);
});})(c__22433__auto__,map__35275,map__35275__$1,opts,on_cssload))
);

return c__22433__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1472152838256