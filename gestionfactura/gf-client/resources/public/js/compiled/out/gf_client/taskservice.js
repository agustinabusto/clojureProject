// Compiled by ClojureScript 1.7.107 {}
goog.provide('gf_client.taskservice');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('gf_client.events');
goog.require('gf_client.utils');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof gf_client.taskservice.taskque !== 'undefined'){
} else {
gf_client.taskservice.taskque = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof gf_client.taskservice.taskque_prov !== 'undefined'){
} else {
gf_client.taskservice.taskque_prov = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof gf_client.taskservice.taskque_sol !== 'undefined'){
} else {
gf_client.taskservice.taskque_sol = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
/**
 * returns min index in taskque for given state, -1 if state not found
 */
gf_client.taskservice.get_min_index = (function gf_client$taskservice$get_min_index(state){
var task_ndx = cljs.core.map_indexed.call(null,(function (p1__25263_SHARP_,p2__25262_SHARP_){
if(cljs.core._EQ_.call(null,state,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(p2__25262_SHARP_))){
return p1__25263_SHARP_;
} else {
return (999999);
}
}),cljs.core.deref.call(null,gf_client.taskservice.taskque));
var min_ndx = cljs.core.apply.call(null,cljs.core.min,task_ndx);
if(cljs.core._EQ_.call(null,(999999),min_ndx)){
return (-1);
} else {
return min_ndx;
}
});
/**
 * returns all tasks in queue
 */
gf_client.taskservice.find_proveedor = (function gf_client$taskservice$find_proveedor(){
var iter__19491__auto__ = (function gf_client$taskservice$find_proveedor_$_iter__25268(s__25269){
return (new cljs.core.LazySeq(null,(function (){
var s__25269__$1 = s__25269;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__25269__$1);
if(temp__4425__auto__){
var s__25269__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25269__$2)){
var c__19489__auto__ = cljs.core.chunk_first.call(null,s__25269__$2);
var size__19490__auto__ = cljs.core.count.call(null,c__19489__auto__);
var b__25271 = cljs.core.chunk_buffer.call(null,size__19490__auto__);
if((function (){var i__25270 = (0);
while(true){
if((i__25270 < size__19490__auto__)){
var item_tasque = cljs.core._nth.call(null,c__19489__auto__,i__25270);
cljs.core.chunk_append.call(null,b__25271,(function (){
if(cljs.core._EQ_.call(null,":prov-ui-task",cljs.core.filter.call(null,new cljs.core.Keyword(null,"event-type","event-type",319722813),cljs.core.deref.call(null,gf_client.taskservice.taskque)))){
cljs.core.println.call(null,"Entre por prov-ui-task");

cljs.core.reset_BANG_.call(null,cljs.core.deref.call(null,gf_client.taskservice.taskque_prov),item_tasque);
} else {
}

return cljs.core.println.call(null,"NO Entro por prov-ui-task");
})()
);

var G__25272 = (i__25270 + (1));
i__25270 = G__25272;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25271),gf_client$taskservice$find_proveedor_$_iter__25268.call(null,cljs.core.chunk_rest.call(null,s__25269__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25271),null);
}
} else {
var item_tasque = cljs.core.first.call(null,s__25269__$2);
return cljs.core.cons.call(null,(function (){
if(cljs.core._EQ_.call(null,":prov-ui-task",cljs.core.filter.call(null,new cljs.core.Keyword(null,"event-type","event-type",319722813),cljs.core.deref.call(null,gf_client.taskservice.taskque)))){
cljs.core.println.call(null,"Entre por prov-ui-task");

cljs.core.reset_BANG_.call(null,cljs.core.deref.call(null,gf_client.taskservice.taskque_prov),item_tasque);
} else {
}

return cljs.core.println.call(null,"NO Entro por prov-ui-task");
})()
,gf_client$taskservice$find_proveedor_$_iter__25268.call(null,cljs.core.rest.call(null,s__25269__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19491__auto__.call(null,cljs.core.deref.call(null,gf_client.taskservice.taskque));
});
/**
 * retorna los datos del proveedor
 */
gf_client.taskservice.find_all_task = (function gf_client$taskservice$find_all_task(){
return cljs.core.deref.call(null,gf_client.taskservice.taskque);
});
/**
 * adds the task to the taskque
 */
gf_client.taskservice.new_task = (function gf_client$taskservice$new_task(task){
var new_task__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),gf_client.utils.uuid.call(null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"new","new",-2085437848)], null),task);
cljs.core.swap_BANG_.call(null,gf_client.taskservice.taskque,cljs.core.conj,new_task__$1);

return gf_client.events.post_event.call(null,(new gf_client.events.AppEvent(new cljs.core.Keyword(null,"service-task-update","service-task-update",1707498699),new cljs.core.Keyword(null,"service","service",-1963054559),new_task__$1,null,null,null)));
});
/**
 * schedules next task in que
 */
gf_client.taskservice.schedule_task = (function gf_client$taskservice$schedule_task(){
var idx = gf_client.taskservice.get_min_index.call(null,new cljs.core.Keyword(null,"new","new",-2085437848));
if((idx > (-1))){
cljs.core.swap_BANG_.call(null,gf_client.taskservice.taskque,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,new cljs.core.Keyword(null,"state","state",-1988618099)], null),cljs.core.constantly.call(null,new cljs.core.Keyword(null,"scheduled","scheduled",553898551)));

return gf_client.events.post_event.call(null,(new gf_client.events.AppEvent(new cljs.core.Keyword(null,"service-task-update","service-task-update",1707498699),new cljs.core.Keyword(null,"service","service",-1963054559),cljs.core.get.call(null,cljs.core.deref.call(null,gf_client.taskservice.taskque),idx),null,null,null)));
} else {
return null;
}
});
/**
 * completes next task in que
 */
gf_client.taskservice.complete_task = (function gf_client$taskservice$complete_task(){
var idx = gf_client.taskservice.get_min_index.call(null,new cljs.core.Keyword(null,"scheduled","scheduled",553898551));
if((idx > (-1))){
cljs.core.swap_BANG_.call(null,gf_client.taskservice.taskque,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,new cljs.core.Keyword(null,"state","state",-1988618099)], null),cljs.core.constantly.call(null,new cljs.core.Keyword(null,"completed","completed",-486056503)));

return gf_client.events.post_event.call(null,(new gf_client.events.AppEvent(new cljs.core.Keyword(null,"service-task-update","service-task-update",1707498699),new cljs.core.Keyword(null,"service","service",-1963054559),cljs.core.get.call(null,cljs.core.deref.call(null,gf_client.taskservice.taskque),idx),null,null,null)));
} else {
return null;
}
});
/**
 * empties all tasks in queue
 */
gf_client.taskservice.purge_task_que = (function gf_client$taskservice$purge_task_que(){
return cljs.core.println.call(null,"prging taskque");
});
/**
 * resets tasks in que with random tasks
 */
gf_client.taskservice.reset_task_queue = (function gf_client$taskservice$reset_task_queue(){
return cljs.core.println.call(null,"reset taskquee with random tasks:");
});
/**
 * event handler for new task events
 */
gf_client.taskservice.go_new_tasks = (function gf_client$taskservice$go_new_tasks(){
var chan_new_task = cljs.core.async.chan.call(null);
cljs.core.async.sub.call(null,gf_client.events.get_event_que.call(null),new cljs.core.Keyword(null,"new-ui-task","new-ui-task",-1431035496),chan_new_task);

var c__22433__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22433__auto__,chan_new_task){
return (function (){
var f__22434__auto__ = (function (){var switch__22368__auto__ = ((function (c__22433__auto__,chan_new_task){
return (function (state_25303){
var state_val_25304 = (state_25303[(1)]);
if((state_val_25304 === (1))){
var state_25303__$1 = state_25303;
var statearr_25305_25315 = state_25303__$1;
(statearr_25305_25315[(2)] = null);

(statearr_25305_25315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25304 === (2))){
var state_25303__$1 = state_25303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25303__$1,(4),chan_new_task);
} else {
if((state_val_25304 === (3))){
var inst_25301 = (state_25303[(2)]);
var state_25303__$1 = state_25303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25303__$1,inst_25301);
} else {
if((state_val_25304 === (4))){
var inst_25296 = (state_25303[(2)]);
var inst_25297 = new cljs.core.Keyword(null,"event-data","event-data",-1726012139).cljs$core$IFn$_invoke$arity$1(inst_25296);
var inst_25298 = gf_client.taskservice.new_task.call(null,inst_25297);
var state_25303__$1 = (function (){var statearr_25306 = state_25303;
(statearr_25306[(7)] = inst_25298);

return statearr_25306;
})();
var statearr_25307_25316 = state_25303__$1;
(statearr_25307_25316[(2)] = null);

(statearr_25307_25316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__22433__auto__,chan_new_task))
;
return ((function (switch__22368__auto__,c__22433__auto__,chan_new_task){
return (function() {
var gf_client$taskservice$go_new_tasks_$_state_machine__22369__auto__ = null;
var gf_client$taskservice$go_new_tasks_$_state_machine__22369__auto____0 = (function (){
var statearr_25311 = [null,null,null,null,null,null,null,null];
(statearr_25311[(0)] = gf_client$taskservice$go_new_tasks_$_state_machine__22369__auto__);

(statearr_25311[(1)] = (1));

return statearr_25311;
});
var gf_client$taskservice$go_new_tasks_$_state_machine__22369__auto____1 = (function (state_25303){
while(true){
var ret_value__22370__auto__ = (function (){try{while(true){
var result__22371__auto__ = switch__22368__auto__.call(null,state_25303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22371__auto__;
}
break;
}
}catch (e25312){if((e25312 instanceof Object)){
var ex__22372__auto__ = e25312;
var statearr_25313_25317 = state_25303;
(statearr_25313_25317[(5)] = ex__22372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25318 = state_25303;
state_25303 = G__25318;
continue;
} else {
return ret_value__22370__auto__;
}
break;
}
});
gf_client$taskservice$go_new_tasks_$_state_machine__22369__auto__ = function(state_25303){
switch(arguments.length){
case 0:
return gf_client$taskservice$go_new_tasks_$_state_machine__22369__auto____0.call(this);
case 1:
return gf_client$taskservice$go_new_tasks_$_state_machine__22369__auto____1.call(this,state_25303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gf_client$taskservice$go_new_tasks_$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$0 = gf_client$taskservice$go_new_tasks_$_state_machine__22369__auto____0;
gf_client$taskservice$go_new_tasks_$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$1 = gf_client$taskservice$go_new_tasks_$_state_machine__22369__auto____1;
return gf_client$taskservice$go_new_tasks_$_state_machine__22369__auto__;
})()
;})(switch__22368__auto__,c__22433__auto__,chan_new_task))
})();
var state__22435__auto__ = (function (){var statearr_25314 = f__22434__auto__.call(null);
(statearr_25314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22433__auto__);

return statearr_25314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22435__auto__);
});})(c__22433__auto__,chan_new_task))
);

return c__22433__auto__;
});
/**
 * event handler for new task events for login (AJB)
 */
gf_client.taskservice.go_new_tasks_prov = (function gf_client$taskservice$go_new_tasks_prov(){
var chan_new_task = cljs.core.async.chan.call(null);
cljs.core.async.sub.call(null,gf_client.events.get_event_que.call(null),new cljs.core.Keyword(null,"prov-ui-task","prov-ui-task",293660748),chan_new_task);

var c__22433__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22433__auto__,chan_new_task){
return (function (){
var f__22434__auto__ = (function (){var switch__22368__auto__ = ((function (c__22433__auto__,chan_new_task){
return (function (state_25349){
var state_val_25350 = (state_25349[(1)]);
if((state_val_25350 === (1))){
var state_25349__$1 = state_25349;
var statearr_25351_25361 = state_25349__$1;
(statearr_25351_25361[(2)] = null);

(statearr_25351_25361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25350 === (2))){
var state_25349__$1 = state_25349;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25349__$1,(4),chan_new_task);
} else {
if((state_val_25350 === (3))){
var inst_25347 = (state_25349[(2)]);
var state_25349__$1 = state_25349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25349__$1,inst_25347);
} else {
if((state_val_25350 === (4))){
var inst_25342 = (state_25349[(2)]);
var inst_25343 = new cljs.core.Keyword(null,"event-data","event-data",-1726012139).cljs$core$IFn$_invoke$arity$1(inst_25342);
var inst_25344 = gf_client.taskservice.new_task.call(null,inst_25343);
var state_25349__$1 = (function (){var statearr_25352 = state_25349;
(statearr_25352[(7)] = inst_25344);

return statearr_25352;
})();
var statearr_25353_25362 = state_25349__$1;
(statearr_25353_25362[(2)] = null);

(statearr_25353_25362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__22433__auto__,chan_new_task))
;
return ((function (switch__22368__auto__,c__22433__auto__,chan_new_task){
return (function() {
var gf_client$taskservice$go_new_tasks_prov_$_state_machine__22369__auto__ = null;
var gf_client$taskservice$go_new_tasks_prov_$_state_machine__22369__auto____0 = (function (){
var statearr_25357 = [null,null,null,null,null,null,null,null];
(statearr_25357[(0)] = gf_client$taskservice$go_new_tasks_prov_$_state_machine__22369__auto__);

(statearr_25357[(1)] = (1));

return statearr_25357;
});
var gf_client$taskservice$go_new_tasks_prov_$_state_machine__22369__auto____1 = (function (state_25349){
while(true){
var ret_value__22370__auto__ = (function (){try{while(true){
var result__22371__auto__ = switch__22368__auto__.call(null,state_25349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22371__auto__;
}
break;
}
}catch (e25358){if((e25358 instanceof Object)){
var ex__22372__auto__ = e25358;
var statearr_25359_25363 = state_25349;
(statearr_25359_25363[(5)] = ex__22372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25364 = state_25349;
state_25349 = G__25364;
continue;
} else {
return ret_value__22370__auto__;
}
break;
}
});
gf_client$taskservice$go_new_tasks_prov_$_state_machine__22369__auto__ = function(state_25349){
switch(arguments.length){
case 0:
return gf_client$taskservice$go_new_tasks_prov_$_state_machine__22369__auto____0.call(this);
case 1:
return gf_client$taskservice$go_new_tasks_prov_$_state_machine__22369__auto____1.call(this,state_25349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gf_client$taskservice$go_new_tasks_prov_$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$0 = gf_client$taskservice$go_new_tasks_prov_$_state_machine__22369__auto____0;
gf_client$taskservice$go_new_tasks_prov_$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$1 = gf_client$taskservice$go_new_tasks_prov_$_state_machine__22369__auto____1;
return gf_client$taskservice$go_new_tasks_prov_$_state_machine__22369__auto__;
})()
;})(switch__22368__auto__,c__22433__auto__,chan_new_task))
})();
var state__22435__auto__ = (function (){var statearr_25360 = f__22434__auto__.call(null);
(statearr_25360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22433__auto__);

return statearr_25360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22435__auto__);
});})(c__22433__auto__,chan_new_task))
);

return c__22433__auto__;
});
/**
 * event handler for update task events
 */
gf_client.taskservice.go_update_tasks = (function gf_client$taskservice$go_update_tasks(){
var chan_new_task = cljs.core.async.chan.call(null);
cljs.core.async.sub.call(null,gf_client.events.get_event_que.call(null),new cljs.core.Keyword(null,"update-ui-task","update-ui-task",-665791252),chan_new_task);

var c__22433__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22433__auto__,chan_new_task){
return (function (){
var f__22434__auto__ = (function (){var switch__22368__auto__ = ((function (c__22433__auto__,chan_new_task){
return (function (state_25438){
var state_val_25439 = (state_25438[(1)]);
if((state_val_25439 === (7))){
var inst_25433 = (state_25438[(2)]);
var state_25438__$1 = (function (){var statearr_25440 = state_25438;
(statearr_25440[(7)] = inst_25433);

return statearr_25440;
})();
var statearr_25441_25459 = state_25438__$1;
(statearr_25441_25459[(2)] = null);

(statearr_25441_25459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25439 === (1))){
var state_25438__$1 = state_25438;
var statearr_25442_25460 = state_25438__$1;
(statearr_25442_25460[(2)] = null);

(statearr_25442_25460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25439 === (4))){
var inst_25415 = (state_25438[(8)]);
var inst_25414 = (state_25438[(2)]);
var inst_25415__$1 = new cljs.core.Keyword(null,"event-data","event-data",-1726012139).cljs$core$IFn$_invoke$arity$1(inst_25414);
var inst_25419 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"schedule","schedule",349275266),inst_25415__$1);
var state_25438__$1 = (function (){var statearr_25443 = state_25438;
(statearr_25443[(8)] = inst_25415__$1);

return statearr_25443;
})();
if(inst_25419){
var statearr_25444_25461 = state_25438__$1;
(statearr_25444_25461[(1)] = (5));

} else {
var statearr_25445_25462 = state_25438__$1;
(statearr_25445_25462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25439 === (6))){
var inst_25415 = (state_25438[(8)]);
var inst_25423 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"complete","complete",-500388775),inst_25415);
var state_25438__$1 = state_25438;
if(inst_25423){
var statearr_25446_25463 = state_25438__$1;
(statearr_25446_25463[(1)] = (8));

} else {
var statearr_25447_25464 = state_25438__$1;
(statearr_25447_25464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25439 === (3))){
var inst_25436 = (state_25438[(2)]);
var state_25438__$1 = state_25438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25438__$1,inst_25436);
} else {
if((state_val_25439 === (2))){
var state_25438__$1 = state_25438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25438__$1,(4),chan_new_task);
} else {
if((state_val_25439 === (9))){
var inst_25415 = (state_25438[(8)]);
var inst_25427 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_25415)].join('');
var inst_25428 = (new Error(inst_25427));
var inst_25429 = (function(){throw inst_25428})();
var state_25438__$1 = state_25438;
var statearr_25448_25465 = state_25438__$1;
(statearr_25448_25465[(2)] = inst_25429);

(statearr_25448_25465[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25439 === (5))){
var inst_25421 = gf_client.taskservice.schedule_task.call(null);
var state_25438__$1 = state_25438;
var statearr_25449_25466 = state_25438__$1;
(statearr_25449_25466[(2)] = inst_25421);

(statearr_25449_25466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25439 === (10))){
var inst_25431 = (state_25438[(2)]);
var state_25438__$1 = state_25438;
var statearr_25450_25467 = state_25438__$1;
(statearr_25450_25467[(2)] = inst_25431);

(statearr_25450_25467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25439 === (8))){
var inst_25425 = gf_client.taskservice.complete_task.call(null);
var state_25438__$1 = state_25438;
var statearr_25451_25468 = state_25438__$1;
(statearr_25451_25468[(2)] = inst_25425);

(statearr_25451_25468[(1)] = (10));


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
});})(c__22433__auto__,chan_new_task))
;
return ((function (switch__22368__auto__,c__22433__auto__,chan_new_task){
return (function() {
var gf_client$taskservice$go_update_tasks_$_state_machine__22369__auto__ = null;
var gf_client$taskservice$go_update_tasks_$_state_machine__22369__auto____0 = (function (){
var statearr_25455 = [null,null,null,null,null,null,null,null,null];
(statearr_25455[(0)] = gf_client$taskservice$go_update_tasks_$_state_machine__22369__auto__);

(statearr_25455[(1)] = (1));

return statearr_25455;
});
var gf_client$taskservice$go_update_tasks_$_state_machine__22369__auto____1 = (function (state_25438){
while(true){
var ret_value__22370__auto__ = (function (){try{while(true){
var result__22371__auto__ = switch__22368__auto__.call(null,state_25438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22371__auto__;
}
break;
}
}catch (e25456){if((e25456 instanceof Object)){
var ex__22372__auto__ = e25456;
var statearr_25457_25469 = state_25438;
(statearr_25457_25469[(5)] = ex__22372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25470 = state_25438;
state_25438 = G__25470;
continue;
} else {
return ret_value__22370__auto__;
}
break;
}
});
gf_client$taskservice$go_update_tasks_$_state_machine__22369__auto__ = function(state_25438){
switch(arguments.length){
case 0:
return gf_client$taskservice$go_update_tasks_$_state_machine__22369__auto____0.call(this);
case 1:
return gf_client$taskservice$go_update_tasks_$_state_machine__22369__auto____1.call(this,state_25438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gf_client$taskservice$go_update_tasks_$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$0 = gf_client$taskservice$go_update_tasks_$_state_machine__22369__auto____0;
gf_client$taskservice$go_update_tasks_$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$1 = gf_client$taskservice$go_update_tasks_$_state_machine__22369__auto____1;
return gf_client$taskservice$go_update_tasks_$_state_machine__22369__auto__;
})()
;})(switch__22368__auto__,c__22433__auto__,chan_new_task))
})();
var state__22435__auto__ = (function (){var statearr_25458 = f__22434__auto__.call(null);
(statearr_25458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22433__auto__);

return statearr_25458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22435__auto__);
});})(c__22433__auto__,chan_new_task))
);

return c__22433__auto__;
});
/**
 * initializes task service by starting all event handlers
 */
gf_client.taskservice.initialize_task_service = (function gf_client$taskservice$initialize_task_service(){
gf_client.taskservice.go_new_tasks.call(null);

gf_client.taskservice.go_new_tasks_prov.call(null);

return gf_client.taskservice.go_update_tasks.call(null);
});

//# sourceMappingURL=taskservice.js.map?rel=1472152820967