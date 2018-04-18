// Compiled by ClojureScript 1.7.107 {}
goog.provide('gf_client.components');
goog.require('cljs.core');
goog.require('gf_client.events');
goog.require('reforms.table');
goog.require('clojure.set');
goog.require('reagent.core');
goog.require('cljs.pprint');
goog.require('secretary.core');
goog.require('reagent.session');
goog.require('reforms.core');
goog.require('gf_client.components.lists_tables');
goog.require('cljs.core.async');
goog.require('gf_client.api');
goog.require('gf_client.utils');
goog.require('gf_client.taskservice');
goog.require('reforms.reagent');
gf_client.components.page_header = (function gf_client$components$page_header(title,message){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jumbotron","div.jumbotron",-1632448673),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),message], null)], null);
});
gf_client.components.inspect = (function gf_client$components$inspect(data){
var sb__19693__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_26213_26215 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_26214_26216 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_26213_26215,_STAR_print_fn_STAR_26214_26216,sb__19693__auto__){
return (function (x__19694__auto__){
return sb__19693__auto__.append(x__19694__auto__);
});})(_STAR_print_newline_STAR_26213_26215,_STAR_print_fn_STAR_26214_26216,sb__19693__auto__))
;

try{cljs.pprint.pprint.call(null,data);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26214_26216;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26213_26215;
}
return [cljs.core.str(sb__19693__auto__)].join('');
});
gf_client.components.inspector_view = (function gf_client$components$inspector_view(var_args){
var args__19784__auto__ = [];
var len__19777__auto___26221 = arguments.length;
var i__19778__auto___26222 = (0);
while(true){
if((i__19778__auto___26222 < len__19777__auto___26221)){
args__19784__auto__.push((arguments[i__19778__auto___26222]));

var G__26223 = (i__19778__auto___26222 + (1));
i__19778__auto___26222 = G__26223;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((1) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((1)),(0))):null);
return gf_client.components.inspector_view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19785__auto__);
});

gf_client.components.inspector_view.cljs$core$IFn$_invoke$arity$variadic = (function (data,p__26219){
var vec__26220 = p__26219;
var path = cljs.core.nth.call(null,vec__26220,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.inspector","pre.inspector",1880304562),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"inspector-view"], null),gf_client.components.inspect.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,data),path))], null);
});

gf_client.components.inspector_view.cljs$lang$maxFixedArity = (1);

gf_client.components.inspector_view.cljs$lang$applyTo = (function (seq26217){
var G__26218 = cljs.core.first.call(null,seq26217);
var seq26217__$1 = cljs.core.next.call(null,seq26217);
return gf_client.components.inspector_view.cljs$core$IFn$_invoke$arity$variadic(G__26218,seq26217__$1);
});
/**
 * generates a navbar given a map with :brand :items list with each item having a :label and :url
 */
gf_client.components.navbar = (function gf_client$components$navbar(props){
var brand = new cljs.core.Keyword(null,"brand","brand",557863343).cljs$core$IFn$_invoke$arity$1(props);
var items = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(props);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar.navbar-inverse.navbar-default","div.navbar.navbar-inverse.navbar-default",-1872718639),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-header","div.navbar-header",-515823511),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-brand","a.navbar-brand",691442118),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),brand], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-collapse.collapse","div.navbar-collapse.collapse",-1723910318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.navbar-nav","ul.nav.navbar-nav",1805559761),cljs.core.doall.call(null,(function (){var iter__19491__auto__ = ((function (brand,items){
return (function gf_client$components$navbar_$_iter__26228(s__26229){
return (new cljs.core.LazySeq(null,((function (brand,items){
return (function (){
var s__26229__$1 = s__26229;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__26229__$1);
if(temp__4425__auto__){
var s__26229__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26229__$2)){
var c__19489__auto__ = cljs.core.chunk_first.call(null,s__26229__$2);
var size__19490__auto__ = cljs.core.count.call(null,c__19489__auto__);
var b__26231 = cljs.core.chunk_buffer.call(null,size__19490__auto__);
if((function (){var i__26230 = (0);
while(true){
if((i__26230 < size__19490__auto__)){
var nav_item = cljs.core._nth.call(null,c__19489__auto__,i__26230);
cljs.core.chunk_append.call(null,b__26231,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),gf_client.utils.uuid.call(null),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(nav_item),reagent.session.get.call(null,new cljs.core.Keyword(null,"page","page",849072397))))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__26230,nav_item,c__19489__auto__,size__19490__auto__,b__26231,s__26229__$2,temp__4425__auto__,brand,items){
return (function (){
return secretary.core.dispatch_BANG_.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(nav_item));
});})(i__26230,nav_item,c__19489__auto__,size__19490__auto__,b__26231,s__26229__$2,temp__4425__auto__,brand,items))
], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(nav_item)], null)], null));

var G__26232 = (i__26230 + (1));
i__26230 = G__26232;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26231),gf_client$components$navbar_$_iter__26228.call(null,cljs.core.chunk_rest.call(null,s__26229__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26231),null);
}
} else {
var nav_item = cljs.core.first.call(null,s__26229__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),gf_client.utils.uuid.call(null),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(nav_item),reagent.session.get.call(null,new cljs.core.Keyword(null,"page","page",849072397))))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (nav_item,s__26229__$2,temp__4425__auto__,brand,items){
return (function (){
return secretary.core.dispatch_BANG_.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(nav_item));
});})(nav_item,s__26229__$2,temp__4425__auto__,brand,items))
], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(nav_item)], null)], null),gf_client$components$navbar_$_iter__26228.call(null,cljs.core.rest.call(null,s__26229__$2)));
}
} else {
return null;
}
break;
}
});})(brand,items))
,null,null));
});})(brand,items))
;
return iter__19491__auto__.call(null,items);
})())], null)], null)], null)], null);
});
/**
 * subscribes to state channel and updates ref-list with new items and deletes old items
 */
gf_client.components.go_task_update = (function gf_client$components$go_task_update(state,ref_list){
var chan_data = cljs.core.async.chan.call(null);
cljs.core.async.sub.call(null,gf_client.events.get_event_que.call(null),new cljs.core.Keyword(null,"service-task-update","service-task-update",1707498699),chan_data);

var c__22433__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22433__auto__,chan_data){
return (function (){
var f__22434__auto__ = (function (){var switch__22368__auto__ = ((function (c__22433__auto__,chan_data){
return (function (state_26314){
var state_val_26315 = (state_26314[(1)]);
if((state_val_26315 === (7))){
var inst_26309 = (state_26314[(2)]);
var state_26314__$1 = (function (){var statearr_26316 = state_26314;
(statearr_26316[(7)] = inst_26309);

return statearr_26316;
})();
var statearr_26317_26335 = state_26314__$1;
(statearr_26317_26335[(2)] = null);

(statearr_26317_26335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26315 === (1))){
var state_26314__$1 = state_26314;
var statearr_26318_26336 = state_26314__$1;
(statearr_26318_26336[(2)] = null);

(statearr_26318_26336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26315 === (4))){
var inst_26287 = (state_26314[(8)]);
var inst_26286 = (state_26314[(2)]);
var inst_26287__$1 = new cljs.core.Keyword(null,"event-data","event-data",-1726012139).cljs$core$IFn$_invoke$arity$1(inst_26286);
var inst_26288 = cljs.core.deref.call(null,ref_list);
var inst_26289 = cljs.core.first.call(null,inst_26288);
var inst_26290 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(inst_26287__$1);
var inst_26291 = cljs.core._EQ_.call(null,state,inst_26290);
var state_26314__$1 = (function (){var statearr_26319 = state_26314;
(statearr_26319[(8)] = inst_26287__$1);

(statearr_26319[(9)] = inst_26289);

return statearr_26319;
})();
if(inst_26291){
var statearr_26320_26337 = state_26314__$1;
(statearr_26320_26337[(1)] = (5));

} else {
var statearr_26321_26338 = state_26314__$1;
(statearr_26321_26338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26315 === (6))){
var inst_26287 = (state_26314[(8)]);
var inst_26289 = (state_26314[(9)]);
var inst_26295 = (inst_26289 == null);
var inst_26296 = cljs.core.not.call(null,inst_26295);
var inst_26297 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_26287);
var inst_26298 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_26289);
var inst_26299 = cljs.core._EQ_.call(null,inst_26297,inst_26298);
var inst_26300 = (inst_26296) && (inst_26299);
var state_26314__$1 = state_26314;
if(cljs.core.truth_(inst_26300)){
var statearr_26322_26339 = state_26314__$1;
(statearr_26322_26339[(1)] = (8));

} else {
var statearr_26323_26340 = state_26314__$1;
(statearr_26323_26340[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26315 === (3))){
var inst_26312 = (state_26314[(2)]);
var state_26314__$1 = state_26314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26314__$1,inst_26312);
} else {
if((state_val_26315 === (2))){
var state_26314__$1 = state_26314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26314__$1,(4),chan_data);
} else {
if((state_val_26315 === (9))){
var state_26314__$1 = state_26314;
var statearr_26324_26341 = state_26314__$1;
(statearr_26324_26341[(2)] = null);

(statearr_26324_26341[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26315 === (5))){
var inst_26287 = (state_26314[(8)]);
var inst_26293 = cljs.core.swap_BANG_.call(null,ref_list,cljs.core.conj,inst_26287);
var state_26314__$1 = state_26314;
var statearr_26325_26342 = state_26314__$1;
(statearr_26325_26342[(2)] = inst_26293);

(statearr_26325_26342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26315 === (10))){
var inst_26307 = (state_26314[(2)]);
var state_26314__$1 = state_26314;
var statearr_26326_26343 = state_26314__$1;
(statearr_26326_26343[(2)] = inst_26307);

(statearr_26326_26343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26315 === (8))){
var inst_26302 = cljs.core.deref.call(null,ref_list);
var inst_26303 = cljs.core.subvec.call(null,inst_26302,(1));
var inst_26304 = cljs.core.reset_BANG_.call(null,ref_list,inst_26303);
var state_26314__$1 = state_26314;
var statearr_26327_26344 = state_26314__$1;
(statearr_26327_26344[(2)] = inst_26304);

(statearr_26327_26344[(1)] = (10));


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
});})(c__22433__auto__,chan_data))
;
return ((function (switch__22368__auto__,c__22433__auto__,chan_data){
return (function() {
var gf_client$components$go_task_update_$_state_machine__22369__auto__ = null;
var gf_client$components$go_task_update_$_state_machine__22369__auto____0 = (function (){
var statearr_26331 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26331[(0)] = gf_client$components$go_task_update_$_state_machine__22369__auto__);

(statearr_26331[(1)] = (1));

return statearr_26331;
});
var gf_client$components$go_task_update_$_state_machine__22369__auto____1 = (function (state_26314){
while(true){
var ret_value__22370__auto__ = (function (){try{while(true){
var result__22371__auto__ = switch__22368__auto__.call(null,state_26314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22371__auto__;
}
break;
}
}catch (e26332){if((e26332 instanceof Object)){
var ex__22372__auto__ = e26332;
var statearr_26333_26345 = state_26314;
(statearr_26333_26345[(5)] = ex__22372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26346 = state_26314;
state_26314 = G__26346;
continue;
} else {
return ret_value__22370__auto__;
}
break;
}
});
gf_client$components$go_task_update_$_state_machine__22369__auto__ = function(state_26314){
switch(arguments.length){
case 0:
return gf_client$components$go_task_update_$_state_machine__22369__auto____0.call(this);
case 1:
return gf_client$components$go_task_update_$_state_machine__22369__auto____1.call(this,state_26314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gf_client$components$go_task_update_$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$0 = gf_client$components$go_task_update_$_state_machine__22369__auto____0;
gf_client$components$go_task_update_$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$1 = gf_client$components$go_task_update_$_state_machine__22369__auto____1;
return gf_client$components$go_task_update_$_state_machine__22369__auto__;
})()
;})(switch__22368__auto__,c__22433__auto__,chan_data))
})();
var state__22435__auto__ = (function (){var statearr_26334 = f__22434__auto__.call(null);
(statearr_26334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22433__auto__);

return statearr_26334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22435__auto__);
});})(c__22433__auto__,chan_data))
);

return c__22433__auto__;
});
/**
 * Muestra las ordenes de servicio en un panel
 */
gf_client.components.ordenes_servicio_panel = (function gf_client$components$ordenes_servicio_panel(name,state){
var cname = (function (){var pred__26350 = cljs.core._EQ_;
var expr__26351 = state;
if(cljs.core.truth_(pred__26350.call(null,new cljs.core.Keyword(null,"new","new",-2085437848),expr__26351))){
return "panel-info";
} else {
if(cljs.core.truth_(pred__26350.call(null,new cljs.core.Keyword(null,"scheduled","scheduled",553898551),expr__26351))){
return "panel-warning";
} else {
if(cljs.core.truth_(pred__26350.call(null,new cljs.core.Keyword(null,"completed","completed",-486056503),expr__26351))){
return "panel-success";
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26351)].join('')));
}
}
}
})();
return ((function (cname){
return (function (){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("panel "),cljs.core.str(cname)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.panel-title","h3.panel-title",530261929),name], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.badge","span.badge",-1410699734)," ",cljs.core.count.call(null,cljs.core.deref.call(null,gf_client.api.solicitud_person_data))], null)], null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),((cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,gf_client.api.solicitud_person_data)))?[cljs.core.str(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fax","fax",1179363650),"No existen Ordenes de Servicio para el proveedor."], null))].join(''):gf_client.components.lists_tables.tabla_solicitudes.call(null,cljs.core.deref.call(null,gf_client.api.solicitud_person_data)))], null);
});
;})(cname))
});
/**
 * muestra lso datos del cliente
 */
gf_client.components.cliente = (function gf_client$components$cliente(item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"well animated shake"], null),[cljs.core.str(new cljs.core.Keyword(null,"fax","fax",1179363650).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"tel","tel",224138159).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"codigo","codigo",-1240468462).cljs$core$IFn$_invoke$arity$1(item))].join('')], null);
});
/**
 * muestra lo datos del proveedor
 */
gf_client.components.proveedor = (function gf_client$components$proveedor(item){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"well"], null),((cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,item)))?[cljs.core.str("No hay datos para el proveedor logueado.")].join(''):new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),"Proveedor : ",(item["nombre"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),"TEL : ",(item["tel"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),"Condicion Tributaria : ",(item["condiciontributaria"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),"Direccion : ",(item["direccionlegal"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),"E-mail : ",(item["email"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),"Cuenta Deposito : ",(item["cuentadeposito"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),"Fecha Alta : ",(item["fechaalta"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),"Codigo : ",(item["codigo"])], null)], null))], null);
});
});
/**
 * Muestra los datos del Proveedor que hizo login
 */
gf_client.components.login_panel = (function gf_client$components$login_panel(name){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("panel "),cljs.core.str("panel-info")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.panel-title","h3.panel-title",530261929),name], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),((cljs.core.empty_QMARK_.call(null,(cljs.core.deref.call(null,gf_client.api.proveedor_person_data)["nombre"])))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),"No se encontraron datos para el proveedor indicado"], null)], null):new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),"Proveedor : ",(cljs.core.deref.call(null,gf_client.api.proveedor_person_data)["nombre"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),"TEL : ",(cljs.core.deref.call(null,gf_client.api.proveedor_person_data)["tel"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),"Condicion Tributaria : ",(cljs.core.deref.call(null,gf_client.api.proveedor_person_data)["condiciontributaria"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),"Direccion : ",(cljs.core.deref.call(null,gf_client.api.proveedor_person_data)["direccionlegal"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),"E-mail : ",(cljs.core.deref.call(null,gf_client.api.proveedor_person_data)["email"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),"Cuenta Deposito : ",(cljs.core.deref.call(null,gf_client.api.proveedor_person_data)["cuentadeposito"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),"Fecha Alta : ",(cljs.core.deref.call(null,gf_client.api.proveedor_person_data)["fechaalta"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),"Codigo : ",(cljs.core.deref.call(null,gf_client.api.proveedor_person_data)["codigo"])], null)], null))], null)], null);
});
});
/**
 * Panel de los datos del cliente
 */
gf_client.components.datos_cliente_panel = (function gf_client$components$datos_cliente_panel(name,state,init_datos_cliente){
var cname = (function (){var pred__26360 = cljs.core._EQ_;
var expr__26361 = state;
if(cljs.core.truth_(pred__26360.call(null,new cljs.core.Keyword(null,"new","new",-2085437848),expr__26361))){
return "panel-info";
} else {
if(cljs.core.truth_(pred__26360.call(null,new cljs.core.Keyword(null,"scheduled","scheduled",553898551),expr__26361))){
return "panel-warning";
} else {
if(cljs.core.truth_(pred__26360.call(null,new cljs.core.Keyword(null,"completed","completed",-486056503),expr__26361))){
return "panel-success";
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26361)].join('')));
}
}
}
})();
var datos_cliente = reagent.core.atom.call(null,init_datos_cliente);
gf_client.components.go_task_update.call(null,state,datos_cliente);

return ((function (cname,datos_cliente){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("panel "),cljs.core.str(cname)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.panel-title","h3.panel-title",530261929),name,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.badge","span.badge",-1410699734)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),((cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,datos_cliente)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gf_client.components.cliente,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"No existe el cliente"], null)], null):(function (){var iter__19491__auto__ = ((function (cname,datos_cliente){
return (function gf_client$components$datos_cliente_panel_$_iter__26363(s__26364){
return (new cljs.core.LazySeq(null,((function (cname,datos_cliente){
return (function (){
var s__26364__$1 = s__26364;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__26364__$1);
if(temp__4425__auto__){
var s__26364__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26364__$2)){
var c__19489__auto__ = cljs.core.chunk_first.call(null,s__26364__$2);
var size__19490__auto__ = cljs.core.count.call(null,c__19489__auto__);
var b__26366 = cljs.core.chunk_buffer.call(null,size__19490__auto__);
if((function (){var i__26365 = (0);
while(true){
if((i__26365 < size__19490__auto__)){
var t = cljs.core._nth.call(null,c__19489__auto__,i__26365);
cljs.core.chunk_append.call(null,b__26366,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gf_client.components.cliente,t], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(t)], null)));

var G__26367 = (i__26365 + (1));
i__26365 = G__26367;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26366),gf_client$components$datos_cliente_panel_$_iter__26363.call(null,cljs.core.chunk_rest.call(null,s__26364__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26366),null);
}
} else {
var t = cljs.core.first.call(null,s__26364__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gf_client.components.cliente,t], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(t)], null)),gf_client$components$datos_cliente_panel_$_iter__26363.call(null,cljs.core.rest.call(null,s__26364__$2)));
}
} else {
return null;
}
break;
}
});})(cname,datos_cliente))
,null,null));
});})(cname,datos_cliente))
;
return iter__19491__auto__.call(null,cljs.core.deref.call(null,datos_cliente));
})())], null)], null);
});
;})(cname,datos_cliente))
});
/**
 * new task form
 */
gf_client.components.login_usuario = (function gf_client$components$login_usuario(){
var task_data = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"desc","desc",2093485764),null], null));
return ((function (task_data){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.form-vertical","form.form-vertical",493208252),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.col-sm-2.form-group","span.col-sm-2.form-group",-201889482),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#taskName.form-control","input#taskName.form-control",-1730183112),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Usuario",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,task_data)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (task_data){
return (function (p1__26368_SHARP_){
return cljs.core.swap_BANG_.call(null,task_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null),p1__26368_SHARP_.target.value);
});})(task_data))
], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.col-sm-2.form-group","span.col-sm-2.form-group",-201889482),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#taskDesc.form-control","input#taskDesc.form-control",13140293),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Password",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"desc","desc",2093485764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,task_data)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (task_data){
return (function (p1__26369_SHARP_){
return cljs.core.swap_BANG_.call(null,task_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"desc","desc",2093485764)], null),p1__26369_SHARP_.target.value);
});})(task_data))
], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.col-sm-2","span.col-sm-2",-1130178783),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-info.btn-raised","a.btn.btn-info.btn-raised",1840023504),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (task_data){
return (function (e){
var temp__4425__auto___26370 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,task_data));
if(cljs.core.truth_(temp__4425__auto___26370)){
var __26371 = temp__4425__auto___26370;
gf_client.api.service_login.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,task_data)),new cljs.core.Keyword(null,"desc","desc",2093485764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,task_data)));

cljs.core.reset_BANG_.call(null,task_data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"desc","desc",2093485764),null], null));
} else {
}

return secretary.core.dispatch_BANG_.call(null,"/bandejaentrada");
});})(task_data))
], null),"INICIAR SESION"], null)], null)], null)], null);
});
;})(task_data))
});
gf_client.components.panel_solicitante_os = (function gf_client$components$panel_solicitante_os(name){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("panel "),cljs.core.str("panel-info")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.panel-title","h3.panel-title",530261929),name], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),((cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,gf_client.api.solicitud_seleccionada_person_data)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),"La orden de Servicio Seleccionada no posee informacion disponible."], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),"Nombre y Apellido : ",cljs.core.get.call(null,cljs.core.deref.call(null,gf_client.api.solicitud_seleccionada_person_data),new cljs.core.Keyword(null,"nombreapellido","nombreapellido",-67482226))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),"Lugar de Entrega : ",cljs.core.get.call(null,cljs.core.deref.call(null,gf_client.api.solicitud_seleccionada_person_data),new cljs.core.Keyword(null,"lugarentrega","lugarentrega",559254090))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),"Fecha de Solicitud : ",cljs.core.get.call(null,cljs.core.deref.call(null,gf_client.api.solicitud_seleccionada_person_data),new cljs.core.Keyword(null,"fechaemision","fechaemision",-1826973688))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),"Fecha de Entrega : ",cljs.core.get.call(null,cljs.core.deref.call(null,gf_client.api.solicitud_seleccionada_person_data),new cljs.core.Keyword(null,"fechaentrega","fechaentrega",2094095670))], null)], null))], null)], null);
});
});
gf_client.components.panel_orden_compra = (function gf_client$components$panel_orden_compra(name){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("panel "),cljs.core.str("panel-info")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.panel-title","h3.panel-title",530261929),name], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),((cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,gf_client.api.solicitud_seleccionada_person_data)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),"La orden de Servicio Seleccionada no posee informacion disponible."], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),"Nro. de Orden de Compra : ",cljs.core.get.call(null,cljs.core.deref.call(null,gf_client.api.solicitud_seleccionada_person_data),new cljs.core.Keyword(null,"nroordencompra","nroordencompra",1631929478))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),"Fecha de Emision : ",cljs.core.get.call(null,cljs.core.deref.call(null,gf_client.api.solicitud_seleccionada_person_data),new cljs.core.Keyword(null,"fechaemision","fechaemision",-1826973688))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),"Cantidad : ",cljs.core.get.call(null,cljs.core.deref.call(null,gf_client.api.solicitud_seleccionada_person_data),new cljs.core.Keyword(null,"cantidad","cantidad",-99126213))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),"Precio por Unidad $ ",cljs.core.get.call(null,cljs.core.deref.call(null,gf_client.api.solicitud_seleccionada_person_data),new cljs.core.Keyword(null,"preciounitario","preciounitario",-287120753))], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),"Importe $ ",cljs.core.get.call(null,cljs.core.deref.call(null,gf_client.api.solicitud_seleccionada_person_data),new cljs.core.Keyword(null,"importe","importe",25575552))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),"Total Orden de Compra $ ",cljs.core.get.call(null,cljs.core.deref.call(null,gf_client.api.solicitud_seleccionada_person_data),new cljs.core.Keyword(null,"totaloc","totaloc",-205240928))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),"Total Sin Impuesto $ ",cljs.core.get.call(null,cljs.core.deref.call(null,gf_client.api.solicitud_seleccionada_person_data),new cljs.core.Keyword(null,"netosiva","netosiva",1184601362))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),"Total Con Impuesto $ ",cljs.core.get.call(null,cljs.core.deref.call(null,gf_client.api.solicitud_seleccionada_person_data),new cljs.core.Keyword(null,"totalciva","totalciva",-5218334))], null)], null)], null))], null)], null);
});
});

//# sourceMappingURL=components.js.map?rel=1472152822426