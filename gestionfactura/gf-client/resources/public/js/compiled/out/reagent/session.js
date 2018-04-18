// Compiled by ClojureScript 1.7.107 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__19784__auto__ = [];
var len__19777__auto___27752 = arguments.length;
var i__19778__auto___27753 = (0);
while(true){
if((i__19778__auto___27753 < len__19777__auto___27752)){
args__19784__auto__.push((arguments[i__19778__auto___27753]));

var G__27754 = (i__19778__auto___27753 + (1));
i__19778__auto___27753 = G__27754;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((1) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((1)),(0))):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19785__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__27750){
var vec__27751 = p__27750;
var default$ = cljs.core.nth.call(null,vec__27751,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq27748){
var G__27749 = cljs.core.first.call(null,seq27748);
var seq27748__$1 = cljs.core.next.call(null,seq27748);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__27749,seq27748__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__19784__auto__ = [];
var len__19777__auto___27759 = arguments.length;
var i__19778__auto___27760 = (0);
while(true){
if((i__19778__auto___27760 < len__19777__auto___27759)){
args__19784__auto__.push((arguments[i__19778__auto___27760]));

var G__27761 = (i__19778__auto___27760 + (1));
i__19778__auto___27760 = G__27761;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((1) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((1)),(0))):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19785__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__27757){
var vec__27758 = p__27757;
var default$ = cljs.core.nth.call(null,vec__27758,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq27755){
var G__27756 = cljs.core.first.call(null,seq27755);
var seq27755__$1 = cljs.core.next.call(null,seq27755);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__27756,seq27755__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__19784__auto__ = [];
var len__19777__auto___27764 = arguments.length;
var i__19778__auto___27765 = (0);
while(true){
if((i__19778__auto___27765 < len__19777__auto___27764)){
args__19784__auto__.push((arguments[i__19778__auto___27765]));

var G__27766 = (i__19778__auto___27765 + (1));
i__19778__auto___27765 = G__27766;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((1) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((1)),(0))):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19785__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq27762){
var G__27763 = cljs.core.first.call(null,seq27762);
var seq27762__$1 = cljs.core.next.call(null,seq27762);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27763,seq27762__$1);
});
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__27767_SHARP_){
return cljs.core.assoc_in.call(null,p1__27767_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__19784__auto__ = [];
var len__19777__auto___27772 = arguments.length;
var i__19778__auto___27773 = (0);
while(true){
if((i__19778__auto___27773 < len__19777__auto___27772)){
args__19784__auto__.push((arguments[i__19778__auto___27773]));

var G__27774 = (i__19778__auto___27773 + (1));
i__19778__auto___27773 = G__27774;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((1) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((1)),(0))):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19785__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__27770){
var vec__27771 = p__27770;
var default$ = cljs.core.nth.call(null,vec__27771,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq27768){
var G__27769 = cljs.core.first.call(null,seq27768);
var seq27768__$1 = cljs.core.next.call(null,seq27768);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27769,seq27768__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__19784__auto__ = [];
var len__19777__auto___27779 = arguments.length;
var i__19778__auto___27780 = (0);
while(true){
if((i__19778__auto___27780 < len__19777__auto___27779)){
args__19784__auto__.push((arguments[i__19778__auto___27780]));

var G__27781 = (i__19778__auto___27780 + (1));
i__19778__auto___27780 = G__27781;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((1) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((1)),(0))):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19785__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__27777){
var vec__27778 = p__27777;
var default$ = cljs.core.nth.call(null,vec__27778,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq27775){
var G__27776 = cljs.core.first.call(null,seq27775);
var seq27775__$1 = cljs.core.next.call(null,seq27775);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27776,seq27775__$1);
});
/**
 * 'Updates' a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__19784__auto__ = [];
var len__19777__auto___27786 = arguments.length;
var i__19778__auto___27787 = (0);
while(true){
if((i__19778__auto___27787 < len__19777__auto___27786)){
args__19784__auto__.push((arguments[i__19778__auto___27787]));

var G__27788 = (i__19778__auto___27787 + (1));
i__19778__auto___27787 = G__27788;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((2) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((2)),(0))):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19785__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__27782_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__27782_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq27783){
var G__27784 = cljs.core.first.call(null,seq27783);
var seq27783__$1 = cljs.core.next.call(null,seq27783);
var G__27785 = cljs.core.first.call(null,seq27783__$1);
var seq27783__$2 = cljs.core.next.call(null,seq27783__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27784,G__27785,seq27783__$2);
});

//# sourceMappingURL=session.js.map?rel=1472152827571