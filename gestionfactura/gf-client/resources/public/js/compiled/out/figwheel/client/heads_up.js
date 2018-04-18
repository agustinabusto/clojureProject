// Compiled by ClojureScript 1.7.107 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.clojure_symbol_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__19784__auto__ = [];
var len__19777__auto___34317 = arguments.length;
var i__19778__auto___34318 = (0);
while(true){
if((i__19778__auto___34318 < len__19777__auto___34317)){
args__19784__auto__.push((arguments[i__19778__auto___34318]));

var G__34319 = (i__19778__auto___34318 + (1));
i__19778__auto___34318 = G__34319;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((2) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19785__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__34309_34320 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__34310_34321 = null;
var count__34311_34322 = (0);
var i__34312_34323 = (0);
while(true){
if((i__34312_34323 < count__34311_34322)){
var k_34324 = cljs.core._nth.call(null,chunk__34310_34321,i__34312_34323);
e.setAttribute(cljs.core.name.call(null,k_34324),cljs.core.get.call(null,attrs,k_34324));

var G__34325 = seq__34309_34320;
var G__34326 = chunk__34310_34321;
var G__34327 = count__34311_34322;
var G__34328 = (i__34312_34323 + (1));
seq__34309_34320 = G__34325;
chunk__34310_34321 = G__34326;
count__34311_34322 = G__34327;
i__34312_34323 = G__34328;
continue;
} else {
var temp__4425__auto___34329 = cljs.core.seq.call(null,seq__34309_34320);
if(temp__4425__auto___34329){
var seq__34309_34330__$1 = temp__4425__auto___34329;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34309_34330__$1)){
var c__19522__auto___34331 = cljs.core.chunk_first.call(null,seq__34309_34330__$1);
var G__34332 = cljs.core.chunk_rest.call(null,seq__34309_34330__$1);
var G__34333 = c__19522__auto___34331;
var G__34334 = cljs.core.count.call(null,c__19522__auto___34331);
var G__34335 = (0);
seq__34309_34320 = G__34332;
chunk__34310_34321 = G__34333;
count__34311_34322 = G__34334;
i__34312_34323 = G__34335;
continue;
} else {
var k_34336 = cljs.core.first.call(null,seq__34309_34330__$1);
e.setAttribute(cljs.core.name.call(null,k_34336),cljs.core.get.call(null,attrs,k_34336));

var G__34337 = cljs.core.next.call(null,seq__34309_34330__$1);
var G__34338 = null;
var G__34339 = (0);
var G__34340 = (0);
seq__34309_34320 = G__34337;
chunk__34310_34321 = G__34338;
count__34311_34322 = G__34339;
i__34312_34323 = G__34340;
continue;
}
} else {
}
}
break;
}

var seq__34313_34341 = cljs.core.seq.call(null,children);
var chunk__34314_34342 = null;
var count__34315_34343 = (0);
var i__34316_34344 = (0);
while(true){
if((i__34316_34344 < count__34315_34343)){
var ch_34345 = cljs.core._nth.call(null,chunk__34314_34342,i__34316_34344);
e.appendChild(ch_34345);

var G__34346 = seq__34313_34341;
var G__34347 = chunk__34314_34342;
var G__34348 = count__34315_34343;
var G__34349 = (i__34316_34344 + (1));
seq__34313_34341 = G__34346;
chunk__34314_34342 = G__34347;
count__34315_34343 = G__34348;
i__34316_34344 = G__34349;
continue;
} else {
var temp__4425__auto___34350 = cljs.core.seq.call(null,seq__34313_34341);
if(temp__4425__auto___34350){
var seq__34313_34351__$1 = temp__4425__auto___34350;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34313_34351__$1)){
var c__19522__auto___34352 = cljs.core.chunk_first.call(null,seq__34313_34351__$1);
var G__34353 = cljs.core.chunk_rest.call(null,seq__34313_34351__$1);
var G__34354 = c__19522__auto___34352;
var G__34355 = cljs.core.count.call(null,c__19522__auto___34352);
var G__34356 = (0);
seq__34313_34341 = G__34353;
chunk__34314_34342 = G__34354;
count__34315_34343 = G__34355;
i__34316_34344 = G__34356;
continue;
} else {
var ch_34357 = cljs.core.first.call(null,seq__34313_34351__$1);
e.appendChild(ch_34357);

var G__34358 = cljs.core.next.call(null,seq__34313_34351__$1);
var G__34359 = null;
var G__34360 = (0);
var G__34361 = (0);
seq__34313_34341 = G__34358;
chunk__34314_34342 = G__34359;
count__34315_34343 = G__34360;
i__34316_34344 = G__34361;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq34306){
var G__34307 = cljs.core.first.call(null,seq34306);
var seq34306__$1 = cljs.core.next.call(null,seq34306);
var G__34308 = cljs.core.first.call(null,seq34306__$1);
var seq34306__$2 = cljs.core.next.call(null,seq34306__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__34307,G__34308,seq34306__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19632__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19633__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19634__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19635__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19636__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19632__auto__,prefer_table__19633__auto__,method_cache__19634__auto__,cached_hierarchy__19635__auto__,hierarchy__19636__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19632__auto__,prefer_table__19633__auto__,method_cache__19634__auto__,cached_hierarchy__19635__auto__,hierarchy__19636__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19636__auto__,method_table__19632__auto__,prefer_table__19633__auto__,method_cache__19634__auto__,cached_hierarchy__19635__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_34362 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_34362.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_34362.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_34362.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_34362);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__34363,st_map){
var map__34368 = p__34363;
var map__34368__$1 = ((((!((map__34368 == null)))?((((map__34368.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34368.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34368):map__34368);
var container_el = cljs.core.get.call(null,map__34368__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__34368,map__34368__$1,container_el){
return (function (p__34370){
var vec__34371 = p__34370;
var k = cljs.core.nth.call(null,vec__34371,(0),null);
var v = cljs.core.nth.call(null,vec__34371,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__34368,map__34368__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__34372,dom_str){
var map__34375 = p__34372;
var map__34375__$1 = ((((!((map__34375 == null)))?((((map__34375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34375):map__34375);
var c = map__34375__$1;
var content_area_el = cljs.core.get.call(null,map__34375__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__34377){
var map__34380 = p__34377;
var map__34380__$1 = ((((!((map__34380 == null)))?((((map__34380.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34380.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34380):map__34380);
var content_area_el = cljs.core.get.call(null,map__34380__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__22433__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22433__auto__){
return (function (){
var f__22434__auto__ = (function (){var switch__22368__auto__ = ((function (c__22433__auto__){
return (function (state_34423){
var state_val_34424 = (state_34423[(1)]);
if((state_val_34424 === (1))){
var inst_34408 = (state_34423[(7)]);
var inst_34408__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_34409 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_34410 = ["10px","10px","100%","68px","1.0"];
var inst_34411 = cljs.core.PersistentHashMap.fromArrays(inst_34409,inst_34410);
var inst_34412 = cljs.core.merge.call(null,inst_34411,style);
var inst_34413 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34408__$1,inst_34412);
var inst_34414 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_34408__$1,msg);
var inst_34415 = cljs.core.async.timeout.call(null,(300));
var state_34423__$1 = (function (){var statearr_34425 = state_34423;
(statearr_34425[(7)] = inst_34408__$1);

(statearr_34425[(8)] = inst_34414);

(statearr_34425[(9)] = inst_34413);

return statearr_34425;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34423__$1,(2),inst_34415);
} else {
if((state_val_34424 === (2))){
var inst_34408 = (state_34423[(7)]);
var inst_34417 = (state_34423[(2)]);
var inst_34418 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_34419 = ["auto"];
var inst_34420 = cljs.core.PersistentHashMap.fromArrays(inst_34418,inst_34419);
var inst_34421 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34408,inst_34420);
var state_34423__$1 = (function (){var statearr_34426 = state_34423;
(statearr_34426[(10)] = inst_34417);

return statearr_34426;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34423__$1,inst_34421);
} else {
return null;
}
}
});})(c__22433__auto__))
;
return ((function (switch__22368__auto__,c__22433__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__22369__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__22369__auto____0 = (function (){
var statearr_34430 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34430[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__22369__auto__);

(statearr_34430[(1)] = (1));

return statearr_34430;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__22369__auto____1 = (function (state_34423){
while(true){
var ret_value__22370__auto__ = (function (){try{while(true){
var result__22371__auto__ = switch__22368__auto__.call(null,state_34423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22371__auto__;
}
break;
}
}catch (e34431){if((e34431 instanceof Object)){
var ex__22372__auto__ = e34431;
var statearr_34432_34434 = state_34423;
(statearr_34432_34434[(5)] = ex__22372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34435 = state_34423;
state_34423 = G__34435;
continue;
} else {
return ret_value__22370__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__22369__auto__ = function(state_34423){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22369__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22369__auto____1.call(this,state_34423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__22369__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__22369__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__22369__auto__;
})()
;})(switch__22368__auto__,c__22433__auto__))
})();
var state__22435__auto__ = (function (){var statearr_34433 = f__22434__auto__.call(null);
(statearr_34433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22433__auto__);

return statearr_34433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22435__auto__);
});})(c__22433__auto__))
);

return c__22433__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__34437 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__34437,(0),null);
var ln = cljs.core.nth.call(null,vec__34437,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__34440 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__34440,(0),null);
var file_line = cljs.core.nth.call(null,vec__34440,(1),null);
var file_column = cljs.core.nth.call(null,vec__34440,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__34440,file_name,file_line,file_column){
return (function (p1__34438_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__34438_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__34440,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18719__auto__ = file_line;
if(cljs.core.truth_(or__18719__auto__)){
return or__18719__auto__;
} else {
var and__18707__auto__ = cause;
if(cljs.core.truth_(and__18707__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18707__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__34443 = figwheel.client.heads_up.ensure_container.call(null);
var map__34443__$1 = ((((!((map__34443 == null)))?((((map__34443.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34443.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34443):map__34443);
var content_area_el = cljs.core.get.call(null,map__34443__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__22433__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22433__auto__){
return (function (){
var f__22434__auto__ = (function (){var switch__22368__auto__ = ((function (c__22433__auto__){
return (function (state_34491){
var state_val_34492 = (state_34491[(1)]);
if((state_val_34492 === (1))){
var inst_34474 = (state_34491[(7)]);
var inst_34474__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_34475 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_34476 = ["0.0"];
var inst_34477 = cljs.core.PersistentHashMap.fromArrays(inst_34475,inst_34476);
var inst_34478 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34474__$1,inst_34477);
var inst_34479 = cljs.core.async.timeout.call(null,(300));
var state_34491__$1 = (function (){var statearr_34493 = state_34491;
(statearr_34493[(8)] = inst_34478);

(statearr_34493[(7)] = inst_34474__$1);

return statearr_34493;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34491__$1,(2),inst_34479);
} else {
if((state_val_34492 === (2))){
var inst_34474 = (state_34491[(7)]);
var inst_34481 = (state_34491[(2)]);
var inst_34482 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_34483 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_34484 = cljs.core.PersistentHashMap.fromArrays(inst_34482,inst_34483);
var inst_34485 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34474,inst_34484);
var inst_34486 = cljs.core.async.timeout.call(null,(200));
var state_34491__$1 = (function (){var statearr_34494 = state_34491;
(statearr_34494[(9)] = inst_34485);

(statearr_34494[(10)] = inst_34481);

return statearr_34494;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34491__$1,(3),inst_34486);
} else {
if((state_val_34492 === (3))){
var inst_34474 = (state_34491[(7)]);
var inst_34488 = (state_34491[(2)]);
var inst_34489 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_34474,"");
var state_34491__$1 = (function (){var statearr_34495 = state_34491;
(statearr_34495[(11)] = inst_34488);

return statearr_34495;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34491__$1,inst_34489);
} else {
return null;
}
}
}
});})(c__22433__auto__))
;
return ((function (switch__22368__auto__,c__22433__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__22369__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__22369__auto____0 = (function (){
var statearr_34499 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34499[(0)] = figwheel$client$heads_up$clear_$_state_machine__22369__auto__);

(statearr_34499[(1)] = (1));

return statearr_34499;
});
var figwheel$client$heads_up$clear_$_state_machine__22369__auto____1 = (function (state_34491){
while(true){
var ret_value__22370__auto__ = (function (){try{while(true){
var result__22371__auto__ = switch__22368__auto__.call(null,state_34491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22371__auto__;
}
break;
}
}catch (e34500){if((e34500 instanceof Object)){
var ex__22372__auto__ = e34500;
var statearr_34501_34503 = state_34491;
(statearr_34501_34503[(5)] = ex__22372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34504 = state_34491;
state_34491 = G__34504;
continue;
} else {
return ret_value__22370__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__22369__auto__ = function(state_34491){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__22369__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__22369__auto____1.call(this,state_34491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__22369__auto____0;
figwheel$client$heads_up$clear_$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__22369__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__22369__auto__;
})()
;})(switch__22368__auto__,c__22433__auto__))
})();
var state__22435__auto__ = (function (){var statearr_34502 = f__22434__auto__.call(null);
(statearr_34502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22433__auto__);

return statearr_34502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22435__auto__);
});})(c__22433__auto__))
);

return c__22433__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__22433__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22433__auto__){
return (function (){
var f__22434__auto__ = (function (){var switch__22368__auto__ = ((function (c__22433__auto__){
return (function (state_34536){
var state_val_34537 = (state_34536[(1)]);
if((state_val_34537 === (1))){
var inst_34526 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_34536__$1 = state_34536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34536__$1,(2),inst_34526);
} else {
if((state_val_34537 === (2))){
var inst_34528 = (state_34536[(2)]);
var inst_34529 = cljs.core.async.timeout.call(null,(400));
var state_34536__$1 = (function (){var statearr_34538 = state_34536;
(statearr_34538[(7)] = inst_34528);

return statearr_34538;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34536__$1,(3),inst_34529);
} else {
if((state_val_34537 === (3))){
var inst_34531 = (state_34536[(2)]);
var inst_34532 = figwheel.client.heads_up.clear.call(null);
var state_34536__$1 = (function (){var statearr_34539 = state_34536;
(statearr_34539[(8)] = inst_34531);

return statearr_34539;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34536__$1,(4),inst_34532);
} else {
if((state_val_34537 === (4))){
var inst_34534 = (state_34536[(2)]);
var state_34536__$1 = state_34536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34536__$1,inst_34534);
} else {
return null;
}
}
}
}
});})(c__22433__auto__))
;
return ((function (switch__22368__auto__,c__22433__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__22369__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__22369__auto____0 = (function (){
var statearr_34543 = [null,null,null,null,null,null,null,null,null];
(statearr_34543[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__22369__auto__);

(statearr_34543[(1)] = (1));

return statearr_34543;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__22369__auto____1 = (function (state_34536){
while(true){
var ret_value__22370__auto__ = (function (){try{while(true){
var result__22371__auto__ = switch__22368__auto__.call(null,state_34536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22371__auto__;
}
break;
}
}catch (e34544){if((e34544 instanceof Object)){
var ex__22372__auto__ = e34544;
var statearr_34545_34547 = state_34536;
(statearr_34545_34547[(5)] = ex__22372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34548 = state_34536;
state_34536 = G__34548;
continue;
} else {
return ret_value__22370__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__22369__auto__ = function(state_34536){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22369__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22369__auto____1.call(this,state_34536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__22369__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__22369__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__22369__auto__;
})()
;})(switch__22368__auto__,c__22433__auto__))
})();
var state__22435__auto__ = (function (){var statearr_34546 = f__22434__auto__.call(null);
(statearr_34546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22433__auto__);

return statearr_34546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22435__auto__);
});})(c__22433__auto__))
);

return c__22433__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1472152837811