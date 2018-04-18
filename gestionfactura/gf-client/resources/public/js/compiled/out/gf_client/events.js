// Compiled by ClojureScript 1.7.107 {}
goog.provide('gf_client.events');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('gf_client.utils');
cljs.core.enable_console_print_BANG_.call(null);
gf_client.events._STAR_event_que_STAR_ = null;
gf_client.events._STAR_chan_data_STAR_ = null;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
gf_client.events.AppEvent = (function (event_type,event_src,event_data,__meta,__extmap,__hash){
this.event_type = event_type;
this.event_src = event_src;
this.event_data = event_data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
gf_client.events.AppEvent.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19333__auto__,k__19334__auto__){
var self__ = this;
var this__19333__auto____$1 = this;
return cljs.core._lookup.call(null,this__19333__auto____$1,k__19334__auto__,null);
});

gf_client.events.AppEvent.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19335__auto__,k24685,else__19336__auto__){
var self__ = this;
var this__19335__auto____$1 = this;
var G__24687 = (((k24685 instanceof cljs.core.Keyword))?k24685.fqn:null);
switch (G__24687) {
case "event-type":
return self__.event_type;

break;
case "event-src":
return self__.event_src;

break;
case "event-data":
return self__.event_data;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24685,else__19336__auto__);

}
});

gf_client.events.AppEvent.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19347__auto__,writer__19348__auto__,opts__19349__auto__){
var self__ = this;
var this__19347__auto____$1 = this;
var pr_pair__19350__auto__ = ((function (this__19347__auto____$1){
return (function (keyval__19351__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19348__auto__,cljs.core.pr_writer,""," ","",opts__19349__auto__,keyval__19351__auto__);
});})(this__19347__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19348__auto__,pr_pair__19350__auto__,"#gf-client.events.AppEvent{",", ","}",opts__19349__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-type","event-type",319722813),self__.event_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-src","event-src",1043580302),self__.event_src],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-data","event-data",-1726012139),self__.event_data],null))], null),self__.__extmap));
});

gf_client.events.AppEvent.prototype.cljs$core$IIterable$ = true;

gf_client.events.AppEvent.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24684){
var self__ = this;
var G__24684__$1 = this;
return (new cljs.core.RecordIter((0),G__24684__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"event-src","event-src",1043580302),new cljs.core.Keyword(null,"event-data","event-data",-1726012139)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

gf_client.events.AppEvent.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19331__auto__){
var self__ = this;
var this__19331__auto____$1 = this;
return self__.__meta;
});

gf_client.events.AppEvent.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19327__auto__){
var self__ = this;
var this__19327__auto____$1 = this;
return (new gf_client.events.AppEvent(self__.event_type,self__.event_src,self__.event_data,self__.__meta,self__.__extmap,self__.__hash));
});

gf_client.events.AppEvent.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19337__auto__){
var self__ = this;
var this__19337__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

gf_client.events.AppEvent.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19328__auto__){
var self__ = this;
var this__19328__auto____$1 = this;
var h__19154__auto__ = self__.__hash;
if(!((h__19154__auto__ == null))){
return h__19154__auto__;
} else {
var h__19154__auto____$1 = cljs.core.hash_imap.call(null,this__19328__auto____$1);
self__.__hash = h__19154__auto____$1;

return h__19154__auto____$1;
}
});

gf_client.events.AppEvent.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19329__auto__,other__19330__auto__){
var self__ = this;
var this__19329__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18707__auto__ = other__19330__auto__;
if(cljs.core.truth_(and__18707__auto__)){
var and__18707__auto____$1 = (this__19329__auto____$1.constructor === other__19330__auto__.constructor);
if(and__18707__auto____$1){
return cljs.core.equiv_map.call(null,this__19329__auto____$1,other__19330__auto__);
} else {
return and__18707__auto____$1;
}
} else {
return and__18707__auto__;
}
})())){
return true;
} else {
return false;
}
});

gf_client.events.AppEvent.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19342__auto__,k__19343__auto__){
var self__ = this;
var this__19342__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event-src","event-src",1043580302),null,new cljs.core.Keyword(null,"event-data","event-data",-1726012139),null,new cljs.core.Keyword(null,"event-type","event-type",319722813),null], null), null),k__19343__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19342__auto____$1),self__.__meta),k__19343__auto__);
} else {
return (new gf_client.events.AppEvent(self__.event_type,self__.event_src,self__.event_data,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19343__auto__)),null));
}
});

gf_client.events.AppEvent.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19340__auto__,k__19341__auto__,G__24684){
var self__ = this;
var this__19340__auto____$1 = this;
var pred__24688 = cljs.core.keyword_identical_QMARK_;
var expr__24689 = k__19341__auto__;
if(cljs.core.truth_(pred__24688.call(null,new cljs.core.Keyword(null,"event-type","event-type",319722813),expr__24689))){
return (new gf_client.events.AppEvent(G__24684,self__.event_src,self__.event_data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24688.call(null,new cljs.core.Keyword(null,"event-src","event-src",1043580302),expr__24689))){
return (new gf_client.events.AppEvent(self__.event_type,G__24684,self__.event_data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24688.call(null,new cljs.core.Keyword(null,"event-data","event-data",-1726012139),expr__24689))){
return (new gf_client.events.AppEvent(self__.event_type,self__.event_src,G__24684,self__.__meta,self__.__extmap,null));
} else {
return (new gf_client.events.AppEvent(self__.event_type,self__.event_src,self__.event_data,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19341__auto__,G__24684),null));
}
}
}
});

gf_client.events.AppEvent.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19345__auto__){
var self__ = this;
var this__19345__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-type","event-type",319722813),self__.event_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-src","event-src",1043580302),self__.event_src],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-data","event-data",-1726012139),self__.event_data],null))], null),self__.__extmap));
});

gf_client.events.AppEvent.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19332__auto__,G__24684){
var self__ = this;
var this__19332__auto____$1 = this;
return (new gf_client.events.AppEvent(self__.event_type,self__.event_src,self__.event_data,G__24684,self__.__extmap,self__.__hash));
});

gf_client.events.AppEvent.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19338__auto__,entry__19339__auto__){
var self__ = this;
var this__19338__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19339__auto__)){
return cljs.core._assoc.call(null,this__19338__auto____$1,cljs.core._nth.call(null,entry__19339__auto__,(0)),cljs.core._nth.call(null,entry__19339__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19338__auto____$1,entry__19339__auto__);
}
});

gf_client.events.AppEvent.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-type","event-type",1960254340,null),new cljs.core.Symbol(null,"event-src","event-src",-1610855467,null),new cljs.core.Symbol(null,"event-data","event-data",-85480612,null)], null);
});

gf_client.events.AppEvent.cljs$lang$type = true;

gf_client.events.AppEvent.cljs$lang$ctorPrSeq = (function (this__19367__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"gf-client.events/AppEvent");
});

gf_client.events.AppEvent.cljs$lang$ctorPrWriter = (function (this__19367__auto__,writer__19368__auto__){
return cljs.core._write.call(null,writer__19368__auto__,"gf-client.events/AppEvent");
});

gf_client.events.__GT_AppEvent = (function gf_client$events$__GT_AppEvent(event_type,event_src,event_data){
return (new gf_client.events.AppEvent(event_type,event_src,event_data,null,null,null));
});

gf_client.events.map__GT_AppEvent = (function gf_client$events$map__GT_AppEvent(G__24686){
return (new gf_client.events.AppEvent(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(G__24686),new cljs.core.Keyword(null,"event-src","event-src",1043580302).cljs$core$IFn$_invoke$arity$1(G__24686),new cljs.core.Keyword(null,"event-data","event-data",-1726012139).cljs$core$IFn$_invoke$arity$1(G__24686),null,cljs.core.dissoc.call(null,G__24686,new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"event-src","event-src",1043580302),new cljs.core.Keyword(null,"event-data","event-data",-1726012139)),null));
});

/**
 * creates and returns event que (flux) for application
 */
gf_client.events.initialize_event_que = (function gf_client$events$initialize_event_que(){
var chan_data = cljs.core.async.chan.call(null);
var pub_data = cljs.core.async.pub.call(null,chan_data,new cljs.core.Keyword(null,"event-type","event-type",319722813));
gf_client.events._STAR_event_que_STAR_ = pub_data;

gf_client.events._STAR_chan_data_STAR_ = chan_data;

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [chan_data,pub_data], null);
});
gf_client.events.get_event_que = (function gf_client$events$get_event_que(){
return gf_client.events._STAR_event_que_STAR_;
});
/**
 * posts an event to the event que
 */
gf_client.events.post_event = (function gf_client$events$post_event(e){
var c__22433__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22433__auto__){
return (function (){
var f__22434__auto__ = (function (){var switch__22368__auto__ = ((function (c__22433__auto__){
return (function (state_24707){
var state_val_24708 = (state_24707[(1)]);
if((state_val_24708 === (1))){
var state_24707__$1 = state_24707;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24707__$1,(2),gf_client.events._STAR_chan_data_STAR_,e);
} else {
if((state_val_24708 === (2))){
var inst_24705 = (state_24707[(2)]);
var state_24707__$1 = state_24707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24707__$1,inst_24705);
} else {
return null;
}
}
});})(c__22433__auto__))
;
return ((function (switch__22368__auto__,c__22433__auto__){
return (function() {
var gf_client$events$post_event_$_state_machine__22369__auto__ = null;
var gf_client$events$post_event_$_state_machine__22369__auto____0 = (function (){
var statearr_24712 = [null,null,null,null,null,null,null];
(statearr_24712[(0)] = gf_client$events$post_event_$_state_machine__22369__auto__);

(statearr_24712[(1)] = (1));

return statearr_24712;
});
var gf_client$events$post_event_$_state_machine__22369__auto____1 = (function (state_24707){
while(true){
var ret_value__22370__auto__ = (function (){try{while(true){
var result__22371__auto__ = switch__22368__auto__.call(null,state_24707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22371__auto__;
}
break;
}
}catch (e24713){if((e24713 instanceof Object)){
var ex__22372__auto__ = e24713;
var statearr_24714_24716 = state_24707;
(statearr_24714_24716[(5)] = ex__22372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24717 = state_24707;
state_24707 = G__24717;
continue;
} else {
return ret_value__22370__auto__;
}
break;
}
});
gf_client$events$post_event_$_state_machine__22369__auto__ = function(state_24707){
switch(arguments.length){
case 0:
return gf_client$events$post_event_$_state_machine__22369__auto____0.call(this);
case 1:
return gf_client$events$post_event_$_state_machine__22369__auto____1.call(this,state_24707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gf_client$events$post_event_$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$0 = gf_client$events$post_event_$_state_machine__22369__auto____0;
gf_client$events$post_event_$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$1 = gf_client$events$post_event_$_state_machine__22369__auto____1;
return gf_client$events$post_event_$_state_machine__22369__auto__;
})()
;})(switch__22368__auto__,c__22433__auto__))
})();
var state__22435__auto__ = (function (){var statearr_24715 = f__22434__auto__.call(null);
(statearr_24715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22433__auto__);

return statearr_24715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22435__auto__);
});})(c__22433__auto__))
);

return c__22433__auto__;
});
/**
 * go block that logs all events in the que
 */
gf_client.events.go_logger = (function gf_client$events$go_logger(){
var chan_log = cljs.core.async.chan.call(null);
cljs.core.async.sub.call(null,gf_client.events._STAR_event_que_STAR_,new cljs.core.Keyword(null,"new-ui-task","new-ui-task",-1431035496),chan_log);

cljs.core.async.sub.call(null,gf_client.events._STAR_event_que_STAR_,new cljs.core.Keyword(null,"prov-ui-task","prov-ui-task",293660748),chan_log);

cljs.core.async.sub.call(null,gf_client.events._STAR_event_que_STAR_,new cljs.core.Keyword(null,"update-ui-task","update-ui-task",-665791252),chan_log);

var c__22433__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22433__auto__,chan_log){
return (function (){
var f__22434__auto__ = (function (){var switch__22368__auto__ = ((function (c__22433__auto__,chan_log){
return (function (state_24746){
var state_val_24747 = (state_24746[(1)]);
if((state_val_24747 === (1))){
var state_24746__$1 = state_24746;
var statearr_24748_24758 = state_24746__$1;
(statearr_24748_24758[(2)] = null);

(statearr_24748_24758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24747 === (2))){
var state_24746__$1 = state_24746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24746__$1,(4),chan_log);
} else {
if((state_val_24747 === (3))){
var inst_24744 = (state_24746[(2)]);
var state_24746__$1 = state_24746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24746__$1,inst_24744);
} else {
if((state_val_24747 === (4))){
var inst_24740 = (state_24746[(2)]);
var inst_24741 = cljs.core.println.call(null,"Evento: ",inst_24740);
var state_24746__$1 = (function (){var statearr_24749 = state_24746;
(statearr_24749[(7)] = inst_24741);

return statearr_24749;
})();
var statearr_24750_24759 = state_24746__$1;
(statearr_24750_24759[(2)] = null);

(statearr_24750_24759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__22433__auto__,chan_log))
;
return ((function (switch__22368__auto__,c__22433__auto__,chan_log){
return (function() {
var gf_client$events$go_logger_$_state_machine__22369__auto__ = null;
var gf_client$events$go_logger_$_state_machine__22369__auto____0 = (function (){
var statearr_24754 = [null,null,null,null,null,null,null,null];
(statearr_24754[(0)] = gf_client$events$go_logger_$_state_machine__22369__auto__);

(statearr_24754[(1)] = (1));

return statearr_24754;
});
var gf_client$events$go_logger_$_state_machine__22369__auto____1 = (function (state_24746){
while(true){
var ret_value__22370__auto__ = (function (){try{while(true){
var result__22371__auto__ = switch__22368__auto__.call(null,state_24746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22371__auto__;
}
break;
}
}catch (e24755){if((e24755 instanceof Object)){
var ex__22372__auto__ = e24755;
var statearr_24756_24760 = state_24746;
(statearr_24756_24760[(5)] = ex__22372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24761 = state_24746;
state_24746 = G__24761;
continue;
} else {
return ret_value__22370__auto__;
}
break;
}
});
gf_client$events$go_logger_$_state_machine__22369__auto__ = function(state_24746){
switch(arguments.length){
case 0:
return gf_client$events$go_logger_$_state_machine__22369__auto____0.call(this);
case 1:
return gf_client$events$go_logger_$_state_machine__22369__auto____1.call(this,state_24746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gf_client$events$go_logger_$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$0 = gf_client$events$go_logger_$_state_machine__22369__auto____0;
gf_client$events$go_logger_$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$1 = gf_client$events$go_logger_$_state_machine__22369__auto____1;
return gf_client$events$go_logger_$_state_machine__22369__auto__;
})()
;})(switch__22368__auto__,c__22433__auto__,chan_log))
})();
var state__22435__auto__ = (function (){var statearr_24757 = f__22434__auto__.call(null);
(statearr_24757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22433__auto__);

return statearr_24757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22435__auto__);
});})(c__22433__auto__,chan_log))
);

return c__22433__auto__;
});

//# sourceMappingURL=events.js.map?rel=1472152819513