// Compiled by ClojureScript 1.7.107 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33452_33467 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33453_33468 = null;
var count__33454_33469 = (0);
var i__33455_33470 = (0);
while(true){
if((i__33455_33470 < count__33454_33469)){
var f_33471 = cljs.core._nth.call(null,chunk__33453_33468,i__33455_33470);
cljs.core.println.call(null,"  ",f_33471);

var G__33472 = seq__33452_33467;
var G__33473 = chunk__33453_33468;
var G__33474 = count__33454_33469;
var G__33475 = (i__33455_33470 + (1));
seq__33452_33467 = G__33472;
chunk__33453_33468 = G__33473;
count__33454_33469 = G__33474;
i__33455_33470 = G__33475;
continue;
} else {
var temp__4425__auto___33476 = cljs.core.seq.call(null,seq__33452_33467);
if(temp__4425__auto___33476){
var seq__33452_33477__$1 = temp__4425__auto___33476;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33452_33477__$1)){
var c__19522__auto___33478 = cljs.core.chunk_first.call(null,seq__33452_33477__$1);
var G__33479 = cljs.core.chunk_rest.call(null,seq__33452_33477__$1);
var G__33480 = c__19522__auto___33478;
var G__33481 = cljs.core.count.call(null,c__19522__auto___33478);
var G__33482 = (0);
seq__33452_33467 = G__33479;
chunk__33453_33468 = G__33480;
count__33454_33469 = G__33481;
i__33455_33470 = G__33482;
continue;
} else {
var f_33483 = cljs.core.first.call(null,seq__33452_33477__$1);
cljs.core.println.call(null,"  ",f_33483);

var G__33484 = cljs.core.next.call(null,seq__33452_33477__$1);
var G__33485 = null;
var G__33486 = (0);
var G__33487 = (0);
seq__33452_33467 = G__33484;
chunk__33453_33468 = G__33485;
count__33454_33469 = G__33486;
i__33455_33470 = G__33487;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33488 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18719__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18719__auto__)){
return or__18719__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33488);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33488)))?cljs.core.second.call(null,arglists_33488):arglists_33488));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33456 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33457 = null;
var count__33458 = (0);
var i__33459 = (0);
while(true){
if((i__33459 < count__33458)){
var vec__33460 = cljs.core._nth.call(null,chunk__33457,i__33459);
var name = cljs.core.nth.call(null,vec__33460,(0),null);
var map__33461 = cljs.core.nth.call(null,vec__33460,(1),null);
var map__33461__$1 = ((((!((map__33461 == null)))?((((map__33461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33461):map__33461);
var doc = cljs.core.get.call(null,map__33461__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__33461__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__33489 = seq__33456;
var G__33490 = chunk__33457;
var G__33491 = count__33458;
var G__33492 = (i__33459 + (1));
seq__33456 = G__33489;
chunk__33457 = G__33490;
count__33458 = G__33491;
i__33459 = G__33492;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__33456);
if(temp__4425__auto__){
var seq__33456__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33456__$1)){
var c__19522__auto__ = cljs.core.chunk_first.call(null,seq__33456__$1);
var G__33493 = cljs.core.chunk_rest.call(null,seq__33456__$1);
var G__33494 = c__19522__auto__;
var G__33495 = cljs.core.count.call(null,c__19522__auto__);
var G__33496 = (0);
seq__33456 = G__33493;
chunk__33457 = G__33494;
count__33458 = G__33495;
i__33459 = G__33496;
continue;
} else {
var vec__33463 = cljs.core.first.call(null,seq__33456__$1);
var name = cljs.core.nth.call(null,vec__33463,(0),null);
var map__33464 = cljs.core.nth.call(null,vec__33463,(1),null);
var map__33464__$1 = ((((!((map__33464 == null)))?((((map__33464.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33464.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33464):map__33464);
var doc = cljs.core.get.call(null,map__33464__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__33464__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__33497 = cljs.core.next.call(null,seq__33456__$1);
var G__33498 = null;
var G__33499 = (0);
var G__33500 = (0);
seq__33456 = G__33497;
chunk__33457 = G__33498;
count__33458 = G__33499;
i__33459 = G__33500;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1472152836594