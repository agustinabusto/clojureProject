// Compiled by ClojureScript 1.7.107 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33514__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__33514 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33515__i = 0, G__33515__a = new Array(arguments.length -  0);
while (G__33515__i < G__33515__a.length) {G__33515__a[G__33515__i] = arguments[G__33515__i + 0]; ++G__33515__i;}
  args = new cljs.core.IndexedSeq(G__33515__a,0);
} 
return G__33514__delegate.call(this,args);};
G__33514.cljs$lang$maxFixedArity = 0;
G__33514.cljs$lang$applyTo = (function (arglist__33516){
var args = cljs.core.seq(arglist__33516);
return G__33514__delegate(args);
});
G__33514.cljs$core$IFn$_invoke$arity$variadic = G__33514__delegate;
return G__33514;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__33517){
var map__33520 = p__33517;
var map__33520__$1 = ((((!((map__33520 == null)))?((((map__33520.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33520.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33520):map__33520);
var message = cljs.core.get.call(null,map__33520__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__33520__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18719__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18719__auto__)){
return or__18719__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18707__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18707__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18707__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__22433__auto___33650 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22433__auto___33650,ch){
return (function (){
var f__22434__auto__ = (function (){var switch__22368__auto__ = ((function (c__22433__auto___33650,ch){
return (function (state_33624){
var state_val_33625 = (state_33624[(1)]);
if((state_val_33625 === (7))){
var inst_33620 = (state_33624[(2)]);
var state_33624__$1 = state_33624;
var statearr_33626_33651 = state_33624__$1;
(statearr_33626_33651[(2)] = inst_33620);

(statearr_33626_33651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33625 === (1))){
var state_33624__$1 = state_33624;
var statearr_33627_33652 = state_33624__$1;
(statearr_33627_33652[(2)] = null);

(statearr_33627_33652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33625 === (4))){
var inst_33588 = (state_33624[(7)]);
var inst_33588__$1 = (state_33624[(2)]);
var state_33624__$1 = (function (){var statearr_33628 = state_33624;
(statearr_33628[(7)] = inst_33588__$1);

return statearr_33628;
})();
if(cljs.core.truth_(inst_33588__$1)){
var statearr_33629_33653 = state_33624__$1;
(statearr_33629_33653[(1)] = (5));

} else {
var statearr_33630_33654 = state_33624__$1;
(statearr_33630_33654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33625 === (13))){
var state_33624__$1 = state_33624;
var statearr_33631_33655 = state_33624__$1;
(statearr_33631_33655[(2)] = null);

(statearr_33631_33655[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33625 === (6))){
var state_33624__$1 = state_33624;
var statearr_33632_33656 = state_33624__$1;
(statearr_33632_33656[(2)] = null);

(statearr_33632_33656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33625 === (3))){
var inst_33622 = (state_33624[(2)]);
var state_33624__$1 = state_33624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33624__$1,inst_33622);
} else {
if((state_val_33625 === (12))){
var inst_33595 = (state_33624[(8)]);
var inst_33608 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33595);
var inst_33609 = cljs.core.first.call(null,inst_33608);
var inst_33610 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_33609);
var inst_33611 = console.warn("Figwheel: Not loading code with warnings - ",inst_33610);
var state_33624__$1 = state_33624;
var statearr_33633_33657 = state_33624__$1;
(statearr_33633_33657[(2)] = inst_33611);

(statearr_33633_33657[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33625 === (2))){
var state_33624__$1 = state_33624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33624__$1,(4),ch);
} else {
if((state_val_33625 === (11))){
var inst_33604 = (state_33624[(2)]);
var state_33624__$1 = state_33624;
var statearr_33634_33658 = state_33624__$1;
(statearr_33634_33658[(2)] = inst_33604);

(statearr_33634_33658[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33625 === (9))){
var inst_33594 = (state_33624[(9)]);
var inst_33606 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_33594,opts);
var state_33624__$1 = state_33624;
if(cljs.core.truth_(inst_33606)){
var statearr_33635_33659 = state_33624__$1;
(statearr_33635_33659[(1)] = (12));

} else {
var statearr_33636_33660 = state_33624__$1;
(statearr_33636_33660[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33625 === (5))){
var inst_33588 = (state_33624[(7)]);
var inst_33594 = (state_33624[(9)]);
var inst_33590 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_33591 = (new cljs.core.PersistentArrayMap(null,2,inst_33590,null));
var inst_33592 = (new cljs.core.PersistentHashSet(null,inst_33591,null));
var inst_33593 = figwheel.client.focus_msgs.call(null,inst_33592,inst_33588);
var inst_33594__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_33593);
var inst_33595 = cljs.core.first.call(null,inst_33593);
var inst_33596 = figwheel.client.reload_file_state_QMARK_.call(null,inst_33594__$1,opts);
var state_33624__$1 = (function (){var statearr_33637 = state_33624;
(statearr_33637[(8)] = inst_33595);

(statearr_33637[(9)] = inst_33594__$1);

return statearr_33637;
})();
if(cljs.core.truth_(inst_33596)){
var statearr_33638_33661 = state_33624__$1;
(statearr_33638_33661[(1)] = (8));

} else {
var statearr_33639_33662 = state_33624__$1;
(statearr_33639_33662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33625 === (14))){
var inst_33614 = (state_33624[(2)]);
var state_33624__$1 = state_33624;
var statearr_33640_33663 = state_33624__$1;
(statearr_33640_33663[(2)] = inst_33614);

(statearr_33640_33663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33625 === (10))){
var inst_33616 = (state_33624[(2)]);
var state_33624__$1 = (function (){var statearr_33641 = state_33624;
(statearr_33641[(10)] = inst_33616);

return statearr_33641;
})();
var statearr_33642_33664 = state_33624__$1;
(statearr_33642_33664[(2)] = null);

(statearr_33642_33664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33625 === (8))){
var inst_33595 = (state_33624[(8)]);
var inst_33598 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33599 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_33595);
var inst_33600 = cljs.core.async.timeout.call(null,(1000));
var inst_33601 = [inst_33599,inst_33600];
var inst_33602 = (new cljs.core.PersistentVector(null,2,(5),inst_33598,inst_33601,null));
var state_33624__$1 = state_33624;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33624__$1,(11),inst_33602);
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
});})(c__22433__auto___33650,ch))
;
return ((function (switch__22368__auto__,c__22433__auto___33650,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22369__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22369__auto____0 = (function (){
var statearr_33646 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33646[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22369__auto__);

(statearr_33646[(1)] = (1));

return statearr_33646;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22369__auto____1 = (function (state_33624){
while(true){
var ret_value__22370__auto__ = (function (){try{while(true){
var result__22371__auto__ = switch__22368__auto__.call(null,state_33624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22371__auto__;
}
break;
}
}catch (e33647){if((e33647 instanceof Object)){
var ex__22372__auto__ = e33647;
var statearr_33648_33665 = state_33624;
(statearr_33648_33665[(5)] = ex__22372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33666 = state_33624;
state_33624 = G__33666;
continue;
} else {
return ret_value__22370__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22369__auto__ = function(state_33624){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22369__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22369__auto____1.call(this,state_33624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22369__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22369__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22369__auto__;
})()
;})(switch__22368__auto__,c__22433__auto___33650,ch))
})();
var state__22435__auto__ = (function (){var statearr_33649 = f__22434__auto__.call(null);
(statearr_33649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22433__auto___33650);

return statearr_33649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22435__auto__);
});})(c__22433__auto___33650,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__33667_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__33667_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_33674 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_33674){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_33672 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_33673 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_33672,_STAR_print_newline_STAR_33673,base_path_33674){
return (function() { 
var G__33675__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__33675 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33676__i = 0, G__33676__a = new Array(arguments.length -  0);
while (G__33676__i < G__33676__a.length) {G__33676__a[G__33676__i] = arguments[G__33676__i + 0]; ++G__33676__i;}
  args = new cljs.core.IndexedSeq(G__33676__a,0);
} 
return G__33675__delegate.call(this,args);};
G__33675.cljs$lang$maxFixedArity = 0;
G__33675.cljs$lang$applyTo = (function (arglist__33677){
var args = cljs.core.seq(arglist__33677);
return G__33675__delegate(args);
});
G__33675.cljs$core$IFn$_invoke$arity$variadic = G__33675__delegate;
return G__33675;
})()
;})(_STAR_print_fn_STAR_33672,_STAR_print_newline_STAR_33673,base_path_33674))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_33673;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_33672;
}}catch (e33671){if((e33671 instanceof Error)){
var e = e33671;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_33674], null));
} else {
var e = e33671;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_33674))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__33678){
var map__33685 = p__33678;
var map__33685__$1 = ((((!((map__33685 == null)))?((((map__33685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33685):map__33685);
var opts = map__33685__$1;
var build_id = cljs.core.get.call(null,map__33685__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__33685,map__33685__$1,opts,build_id){
return (function (p__33687){
var vec__33688 = p__33687;
var map__33689 = cljs.core.nth.call(null,vec__33688,(0),null);
var map__33689__$1 = ((((!((map__33689 == null)))?((((map__33689.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33689.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33689):map__33689);
var msg = map__33689__$1;
var msg_name = cljs.core.get.call(null,map__33689__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33688,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__33688,map__33689,map__33689__$1,msg,msg_name,_,map__33685,map__33685__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__33688,map__33689,map__33689__$1,msg,msg_name,_,map__33685,map__33685__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__33685,map__33685__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__33695){
var vec__33696 = p__33695;
var map__33697 = cljs.core.nth.call(null,vec__33696,(0),null);
var map__33697__$1 = ((((!((map__33697 == null)))?((((map__33697.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33697.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33697):map__33697);
var msg = map__33697__$1;
var msg_name = cljs.core.get.call(null,map__33697__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33696,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__33699){
var map__33709 = p__33699;
var map__33709__$1 = ((((!((map__33709 == null)))?((((map__33709.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33709.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33709):map__33709);
var on_compile_warning = cljs.core.get.call(null,map__33709__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__33709__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__33709,map__33709__$1,on_compile_warning,on_compile_fail){
return (function (p__33711){
var vec__33712 = p__33711;
var map__33713 = cljs.core.nth.call(null,vec__33712,(0),null);
var map__33713__$1 = ((((!((map__33713 == null)))?((((map__33713.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33713.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33713):map__33713);
var msg = map__33713__$1;
var msg_name = cljs.core.get.call(null,map__33713__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33712,(1));
var pred__33715 = cljs.core._EQ_;
var expr__33716 = msg_name;
if(cljs.core.truth_(pred__33715.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__33716))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__33715.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__33716))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__33709,map__33709__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22433__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22433__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22434__auto__ = (function (){var switch__22368__auto__ = ((function (c__22433__auto__,msg_hist,msg_names,msg){
return (function (state_33917){
var state_val_33918 = (state_33917[(1)]);
if((state_val_33918 === (7))){
var inst_33851 = (state_33917[(2)]);
var state_33917__$1 = state_33917;
var statearr_33919_33960 = state_33917__$1;
(statearr_33919_33960[(2)] = inst_33851);

(statearr_33919_33960[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33918 === (20))){
var inst_33879 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_33917__$1 = state_33917;
if(cljs.core.truth_(inst_33879)){
var statearr_33920_33961 = state_33917__$1;
(statearr_33920_33961[(1)] = (22));

} else {
var statearr_33921_33962 = state_33917__$1;
(statearr_33921_33962[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33918 === (27))){
var inst_33891 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33892 = figwheel.client.heads_up.display_warning.call(null,inst_33891);
var state_33917__$1 = state_33917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33917__$1,(30),inst_33892);
} else {
if((state_val_33918 === (1))){
var inst_33839 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_33917__$1 = state_33917;
if(cljs.core.truth_(inst_33839)){
var statearr_33922_33963 = state_33917__$1;
(statearr_33922_33963[(1)] = (2));

} else {
var statearr_33923_33964 = state_33917__$1;
(statearr_33923_33964[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33918 === (24))){
var inst_33907 = (state_33917[(2)]);
var state_33917__$1 = state_33917;
var statearr_33924_33965 = state_33917__$1;
(statearr_33924_33965[(2)] = inst_33907);

(statearr_33924_33965[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33918 === (4))){
var inst_33915 = (state_33917[(2)]);
var state_33917__$1 = state_33917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33917__$1,inst_33915);
} else {
if((state_val_33918 === (15))){
var inst_33867 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33868 = figwheel.client.format_messages.call(null,inst_33867);
var inst_33869 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33870 = figwheel.client.heads_up.display_error.call(null,inst_33868,inst_33869);
var state_33917__$1 = state_33917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33917__$1,(18),inst_33870);
} else {
if((state_val_33918 === (21))){
var inst_33909 = (state_33917[(2)]);
var state_33917__$1 = state_33917;
var statearr_33925_33966 = state_33917__$1;
(statearr_33925_33966[(2)] = inst_33909);

(statearr_33925_33966[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33918 === (31))){
var inst_33898 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33917__$1 = state_33917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33917__$1,(34),inst_33898);
} else {
if((state_val_33918 === (32))){
var state_33917__$1 = state_33917;
var statearr_33926_33967 = state_33917__$1;
(statearr_33926_33967[(2)] = null);

(statearr_33926_33967[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33918 === (33))){
var inst_33903 = (state_33917[(2)]);
var state_33917__$1 = state_33917;
var statearr_33927_33968 = state_33917__$1;
(statearr_33927_33968[(2)] = inst_33903);

(statearr_33927_33968[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33918 === (13))){
var inst_33857 = (state_33917[(2)]);
var inst_33858 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33859 = figwheel.client.format_messages.call(null,inst_33858);
var inst_33860 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33861 = figwheel.client.heads_up.display_error.call(null,inst_33859,inst_33860);
var state_33917__$1 = (function (){var statearr_33928 = state_33917;
(statearr_33928[(7)] = inst_33857);

return statearr_33928;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33917__$1,(14),inst_33861);
} else {
if((state_val_33918 === (22))){
var inst_33881 = figwheel.client.heads_up.clear.call(null);
var state_33917__$1 = state_33917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33917__$1,(25),inst_33881);
} else {
if((state_val_33918 === (29))){
var inst_33905 = (state_33917[(2)]);
var state_33917__$1 = state_33917;
var statearr_33929_33969 = state_33917__$1;
(statearr_33929_33969[(2)] = inst_33905);

(statearr_33929_33969[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33918 === (6))){
var inst_33847 = figwheel.client.heads_up.clear.call(null);
var state_33917__$1 = state_33917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33917__$1,(9),inst_33847);
} else {
if((state_val_33918 === (28))){
var inst_33896 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_33917__$1 = state_33917;
if(cljs.core.truth_(inst_33896)){
var statearr_33930_33970 = state_33917__$1;
(statearr_33930_33970[(1)] = (31));

} else {
var statearr_33931_33971 = state_33917__$1;
(statearr_33931_33971[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33918 === (25))){
var inst_33883 = (state_33917[(2)]);
var inst_33884 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33885 = figwheel.client.heads_up.display_warning.call(null,inst_33884);
var state_33917__$1 = (function (){var statearr_33932 = state_33917;
(statearr_33932[(8)] = inst_33883);

return statearr_33932;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33917__$1,(26),inst_33885);
} else {
if((state_val_33918 === (34))){
var inst_33900 = (state_33917[(2)]);
var state_33917__$1 = state_33917;
var statearr_33933_33972 = state_33917__$1;
(statearr_33933_33972[(2)] = inst_33900);

(statearr_33933_33972[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33918 === (17))){
var inst_33911 = (state_33917[(2)]);
var state_33917__$1 = state_33917;
var statearr_33934_33973 = state_33917__$1;
(statearr_33934_33973[(2)] = inst_33911);

(statearr_33934_33973[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33918 === (3))){
var inst_33853 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_33917__$1 = state_33917;
if(cljs.core.truth_(inst_33853)){
var statearr_33935_33974 = state_33917__$1;
(statearr_33935_33974[(1)] = (10));

} else {
var statearr_33936_33975 = state_33917__$1;
(statearr_33936_33975[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33918 === (12))){
var inst_33913 = (state_33917[(2)]);
var state_33917__$1 = state_33917;
var statearr_33937_33976 = state_33917__$1;
(statearr_33937_33976[(2)] = inst_33913);

(statearr_33937_33976[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33918 === (2))){
var inst_33841 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_33917__$1 = state_33917;
if(cljs.core.truth_(inst_33841)){
var statearr_33938_33977 = state_33917__$1;
(statearr_33938_33977[(1)] = (5));

} else {
var statearr_33939_33978 = state_33917__$1;
(statearr_33939_33978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33918 === (23))){
var inst_33889 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_33917__$1 = state_33917;
if(cljs.core.truth_(inst_33889)){
var statearr_33940_33979 = state_33917__$1;
(statearr_33940_33979[(1)] = (27));

} else {
var statearr_33941_33980 = state_33917__$1;
(statearr_33941_33980[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33918 === (19))){
var inst_33876 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33877 = figwheel.client.heads_up.append_message.call(null,inst_33876);
var state_33917__$1 = state_33917;
var statearr_33942_33981 = state_33917__$1;
(statearr_33942_33981[(2)] = inst_33877);

(statearr_33942_33981[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33918 === (11))){
var inst_33865 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_33917__$1 = state_33917;
if(cljs.core.truth_(inst_33865)){
var statearr_33943_33982 = state_33917__$1;
(statearr_33943_33982[(1)] = (15));

} else {
var statearr_33944_33983 = state_33917__$1;
(statearr_33944_33983[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33918 === (9))){
var inst_33849 = (state_33917[(2)]);
var state_33917__$1 = state_33917;
var statearr_33945_33984 = state_33917__$1;
(statearr_33945_33984[(2)] = inst_33849);

(statearr_33945_33984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33918 === (5))){
var inst_33843 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33917__$1 = state_33917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33917__$1,(8),inst_33843);
} else {
if((state_val_33918 === (14))){
var inst_33863 = (state_33917[(2)]);
var state_33917__$1 = state_33917;
var statearr_33946_33985 = state_33917__$1;
(statearr_33946_33985[(2)] = inst_33863);

(statearr_33946_33985[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33918 === (26))){
var inst_33887 = (state_33917[(2)]);
var state_33917__$1 = state_33917;
var statearr_33947_33986 = state_33917__$1;
(statearr_33947_33986[(2)] = inst_33887);

(statearr_33947_33986[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33918 === (16))){
var inst_33874 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_33917__$1 = state_33917;
if(cljs.core.truth_(inst_33874)){
var statearr_33948_33987 = state_33917__$1;
(statearr_33948_33987[(1)] = (19));

} else {
var statearr_33949_33988 = state_33917__$1;
(statearr_33949_33988[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33918 === (30))){
var inst_33894 = (state_33917[(2)]);
var state_33917__$1 = state_33917;
var statearr_33950_33989 = state_33917__$1;
(statearr_33950_33989[(2)] = inst_33894);

(statearr_33950_33989[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33918 === (10))){
var inst_33855 = figwheel.client.heads_up.clear.call(null);
var state_33917__$1 = state_33917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33917__$1,(13),inst_33855);
} else {
if((state_val_33918 === (18))){
var inst_33872 = (state_33917[(2)]);
var state_33917__$1 = state_33917;
var statearr_33951_33990 = state_33917__$1;
(statearr_33951_33990[(2)] = inst_33872);

(statearr_33951_33990[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33918 === (8))){
var inst_33845 = (state_33917[(2)]);
var state_33917__$1 = state_33917;
var statearr_33952_33991 = state_33917__$1;
(statearr_33952_33991[(2)] = inst_33845);

(statearr_33952_33991[(1)] = (7));


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
});})(c__22433__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22368__auto__,c__22433__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22369__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22369__auto____0 = (function (){
var statearr_33956 = [null,null,null,null,null,null,null,null,null];
(statearr_33956[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22369__auto__);

(statearr_33956[(1)] = (1));

return statearr_33956;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22369__auto____1 = (function (state_33917){
while(true){
var ret_value__22370__auto__ = (function (){try{while(true){
var result__22371__auto__ = switch__22368__auto__.call(null,state_33917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22371__auto__;
}
break;
}
}catch (e33957){if((e33957 instanceof Object)){
var ex__22372__auto__ = e33957;
var statearr_33958_33992 = state_33917;
(statearr_33958_33992[(5)] = ex__22372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33993 = state_33917;
state_33917 = G__33993;
continue;
} else {
return ret_value__22370__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22369__auto__ = function(state_33917){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22369__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22369__auto____1.call(this,state_33917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22369__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22369__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22369__auto__;
})()
;})(switch__22368__auto__,c__22433__auto__,msg_hist,msg_names,msg))
})();
var state__22435__auto__ = (function (){var statearr_33959 = f__22434__auto__.call(null);
(statearr_33959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22433__auto__);

return statearr_33959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22435__auto__);
});})(c__22433__auto__,msg_hist,msg_names,msg))
);

return c__22433__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22433__auto___34056 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22433__auto___34056,ch){
return (function (){
var f__22434__auto__ = (function (){var switch__22368__auto__ = ((function (c__22433__auto___34056,ch){
return (function (state_34039){
var state_val_34040 = (state_34039[(1)]);
if((state_val_34040 === (1))){
var state_34039__$1 = state_34039;
var statearr_34041_34057 = state_34039__$1;
(statearr_34041_34057[(2)] = null);

(statearr_34041_34057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34040 === (2))){
var state_34039__$1 = state_34039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34039__$1,(4),ch);
} else {
if((state_val_34040 === (3))){
var inst_34037 = (state_34039[(2)]);
var state_34039__$1 = state_34039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34039__$1,inst_34037);
} else {
if((state_val_34040 === (4))){
var inst_34027 = (state_34039[(7)]);
var inst_34027__$1 = (state_34039[(2)]);
var state_34039__$1 = (function (){var statearr_34042 = state_34039;
(statearr_34042[(7)] = inst_34027__$1);

return statearr_34042;
})();
if(cljs.core.truth_(inst_34027__$1)){
var statearr_34043_34058 = state_34039__$1;
(statearr_34043_34058[(1)] = (5));

} else {
var statearr_34044_34059 = state_34039__$1;
(statearr_34044_34059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34040 === (5))){
var inst_34027 = (state_34039[(7)]);
var inst_34029 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_34027);
var state_34039__$1 = state_34039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34039__$1,(8),inst_34029);
} else {
if((state_val_34040 === (6))){
var state_34039__$1 = state_34039;
var statearr_34045_34060 = state_34039__$1;
(statearr_34045_34060[(2)] = null);

(statearr_34045_34060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34040 === (7))){
var inst_34035 = (state_34039[(2)]);
var state_34039__$1 = state_34039;
var statearr_34046_34061 = state_34039__$1;
(statearr_34046_34061[(2)] = inst_34035);

(statearr_34046_34061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34040 === (8))){
var inst_34031 = (state_34039[(2)]);
var state_34039__$1 = (function (){var statearr_34047 = state_34039;
(statearr_34047[(8)] = inst_34031);

return statearr_34047;
})();
var statearr_34048_34062 = state_34039__$1;
(statearr_34048_34062[(2)] = null);

(statearr_34048_34062[(1)] = (2));


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
});})(c__22433__auto___34056,ch))
;
return ((function (switch__22368__auto__,c__22433__auto___34056,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22369__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22369__auto____0 = (function (){
var statearr_34052 = [null,null,null,null,null,null,null,null,null];
(statearr_34052[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22369__auto__);

(statearr_34052[(1)] = (1));

return statearr_34052;
});
var figwheel$client$heads_up_plugin_$_state_machine__22369__auto____1 = (function (state_34039){
while(true){
var ret_value__22370__auto__ = (function (){try{while(true){
var result__22371__auto__ = switch__22368__auto__.call(null,state_34039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22371__auto__;
}
break;
}
}catch (e34053){if((e34053 instanceof Object)){
var ex__22372__auto__ = e34053;
var statearr_34054_34063 = state_34039;
(statearr_34054_34063[(5)] = ex__22372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34064 = state_34039;
state_34039 = G__34064;
continue;
} else {
return ret_value__22370__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22369__auto__ = function(state_34039){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22369__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22369__auto____1.call(this,state_34039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22369__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22369__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22369__auto__;
})()
;})(switch__22368__auto__,c__22433__auto___34056,ch))
})();
var state__22435__auto__ = (function (){var statearr_34055 = f__22434__auto__.call(null);
(statearr_34055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22433__auto___34056);

return statearr_34055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22435__auto__);
});})(c__22433__auto___34056,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22433__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22433__auto__){
return (function (){
var f__22434__auto__ = (function (){var switch__22368__auto__ = ((function (c__22433__auto__){
return (function (state_34085){
var state_val_34086 = (state_34085[(1)]);
if((state_val_34086 === (1))){
var inst_34080 = cljs.core.async.timeout.call(null,(3000));
var state_34085__$1 = state_34085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34085__$1,(2),inst_34080);
} else {
if((state_val_34086 === (2))){
var inst_34082 = (state_34085[(2)]);
var inst_34083 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_34085__$1 = (function (){var statearr_34087 = state_34085;
(statearr_34087[(7)] = inst_34082);

return statearr_34087;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34085__$1,inst_34083);
} else {
return null;
}
}
});})(c__22433__auto__))
;
return ((function (switch__22368__auto__,c__22433__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22369__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22369__auto____0 = (function (){
var statearr_34091 = [null,null,null,null,null,null,null,null];
(statearr_34091[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22369__auto__);

(statearr_34091[(1)] = (1));

return statearr_34091;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22369__auto____1 = (function (state_34085){
while(true){
var ret_value__22370__auto__ = (function (){try{while(true){
var result__22371__auto__ = switch__22368__auto__.call(null,state_34085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22371__auto__;
}
break;
}
}catch (e34092){if((e34092 instanceof Object)){
var ex__22372__auto__ = e34092;
var statearr_34093_34095 = state_34085;
(statearr_34093_34095[(5)] = ex__22372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34096 = state_34085;
state_34085 = G__34096;
continue;
} else {
return ret_value__22370__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22369__auto__ = function(state_34085){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22369__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22369__auto____1.call(this,state_34085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22369__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22369__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22369__auto__;
})()
;})(switch__22368__auto__,c__22433__auto__))
})();
var state__22435__auto__ = (function (){var statearr_34094 = f__22434__auto__.call(null);
(statearr_34094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22433__auto__);

return statearr_34094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22435__auto__);
});})(c__22433__auto__))
);

return c__22433__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__18707__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__18707__auto__)){
return ("CustomEvent" in window);
} else {
return and__18707__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj34100 = {"detail":url};
return obj34100;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__34101){
var map__34108 = p__34101;
var map__34108__$1 = ((((!((map__34108 == null)))?((((map__34108.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34108.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34108):map__34108);
var ed = map__34108__$1;
var formatted_exception = cljs.core.get.call(null,map__34108__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__34108__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__34108__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__34110_34114 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__34111_34115 = null;
var count__34112_34116 = (0);
var i__34113_34117 = (0);
while(true){
if((i__34113_34117 < count__34112_34116)){
var msg_34118 = cljs.core._nth.call(null,chunk__34111_34115,i__34113_34117);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34118);

var G__34119 = seq__34110_34114;
var G__34120 = chunk__34111_34115;
var G__34121 = count__34112_34116;
var G__34122 = (i__34113_34117 + (1));
seq__34110_34114 = G__34119;
chunk__34111_34115 = G__34120;
count__34112_34116 = G__34121;
i__34113_34117 = G__34122;
continue;
} else {
var temp__4425__auto___34123 = cljs.core.seq.call(null,seq__34110_34114);
if(temp__4425__auto___34123){
var seq__34110_34124__$1 = temp__4425__auto___34123;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34110_34124__$1)){
var c__19522__auto___34125 = cljs.core.chunk_first.call(null,seq__34110_34124__$1);
var G__34126 = cljs.core.chunk_rest.call(null,seq__34110_34124__$1);
var G__34127 = c__19522__auto___34125;
var G__34128 = cljs.core.count.call(null,c__19522__auto___34125);
var G__34129 = (0);
seq__34110_34114 = G__34126;
chunk__34111_34115 = G__34127;
count__34112_34116 = G__34128;
i__34113_34117 = G__34129;
continue;
} else {
var msg_34130 = cljs.core.first.call(null,seq__34110_34124__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34130);

var G__34131 = cljs.core.next.call(null,seq__34110_34124__$1);
var G__34132 = null;
var G__34133 = (0);
var G__34134 = (0);
seq__34110_34114 = G__34131;
chunk__34111_34115 = G__34132;
count__34112_34116 = G__34133;
i__34113_34117 = G__34134;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__34135){
var map__34138 = p__34135;
var map__34138__$1 = ((((!((map__34138 == null)))?((((map__34138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34138):map__34138);
var w = map__34138__$1;
var message = cljs.core.get.call(null,map__34138__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18707__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18707__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18707__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__34146 = cljs.core.seq.call(null,plugins);
var chunk__34147 = null;
var count__34148 = (0);
var i__34149 = (0);
while(true){
if((i__34149 < count__34148)){
var vec__34150 = cljs.core._nth.call(null,chunk__34147,i__34149);
var k = cljs.core.nth.call(null,vec__34150,(0),null);
var plugin = cljs.core.nth.call(null,vec__34150,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34152 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34146,chunk__34147,count__34148,i__34149,pl_34152,vec__34150,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_34152.call(null,msg_hist);
});})(seq__34146,chunk__34147,count__34148,i__34149,pl_34152,vec__34150,k,plugin))
);
} else {
}

var G__34153 = seq__34146;
var G__34154 = chunk__34147;
var G__34155 = count__34148;
var G__34156 = (i__34149 + (1));
seq__34146 = G__34153;
chunk__34147 = G__34154;
count__34148 = G__34155;
i__34149 = G__34156;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__34146);
if(temp__4425__auto__){
var seq__34146__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34146__$1)){
var c__19522__auto__ = cljs.core.chunk_first.call(null,seq__34146__$1);
var G__34157 = cljs.core.chunk_rest.call(null,seq__34146__$1);
var G__34158 = c__19522__auto__;
var G__34159 = cljs.core.count.call(null,c__19522__auto__);
var G__34160 = (0);
seq__34146 = G__34157;
chunk__34147 = G__34158;
count__34148 = G__34159;
i__34149 = G__34160;
continue;
} else {
var vec__34151 = cljs.core.first.call(null,seq__34146__$1);
var k = cljs.core.nth.call(null,vec__34151,(0),null);
var plugin = cljs.core.nth.call(null,vec__34151,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34161 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34146,chunk__34147,count__34148,i__34149,pl_34161,vec__34151,k,plugin,seq__34146__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_34161.call(null,msg_hist);
});})(seq__34146,chunk__34147,count__34148,i__34149,pl_34161,vec__34151,k,plugin,seq__34146__$1,temp__4425__auto__))
);
} else {
}

var G__34162 = cljs.core.next.call(null,seq__34146__$1);
var G__34163 = null;
var G__34164 = (0);
var G__34165 = (0);
seq__34146 = G__34162;
chunk__34147 = G__34163;
count__34148 = G__34164;
i__34149 = G__34165;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args34166 = [];
var len__19777__auto___34169 = arguments.length;
var i__19778__auto___34170 = (0);
while(true){
if((i__19778__auto___34170 < len__19777__auto___34169)){
args34166.push((arguments[i__19778__auto___34170]));

var G__34171 = (i__19778__auto___34170 + (1));
i__19778__auto___34170 = G__34171;
continue;
} else {
}
break;
}

var G__34168 = args34166.length;
switch (G__34168) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34166.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19784__auto__ = [];
var len__19777__auto___34177 = arguments.length;
var i__19778__auto___34178 = (0);
while(true){
if((i__19778__auto___34178 < len__19777__auto___34177)){
args__19784__auto__.push((arguments[i__19778__auto___34178]));

var G__34179 = (i__19778__auto___34178 + (1));
i__19778__auto___34178 = G__34179;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__34174){
var map__34175 = p__34174;
var map__34175__$1 = ((((!((map__34175 == null)))?((((map__34175.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34175.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34175):map__34175);
var opts = map__34175__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq34173){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34173));
});

//# sourceMappingURL=client.js.map?rel=1472152837109