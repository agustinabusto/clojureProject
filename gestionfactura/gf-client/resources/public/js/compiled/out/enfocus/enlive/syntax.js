// Compiled by ClojureScript 1.7.107 {}
goog.provide('enfocus.enlive.syntax');
goog.require('cljs.core');
enfocus.enlive.syntax.sel_to_string = (function enfocus$enlive$syntax$sel_to_string(item){
if((item instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,item);
} else {
if(typeof item === 'string'){
return item;
} else {
if(cljs.core.coll_QMARK_.call(null,item)){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__36563_SHARP_){
return enfocus$enlive$syntax$sel_to_string.call(null,p1__36563_SHARP_);
}),item));
} else {
return null;
}
}
}
});
enfocus.enlive.syntax.convert = (function enfocus$enlive$syntax$convert(sel){
if(typeof sel === 'string'){
return sel;
} else {
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core.map.call(null,enfocus.enlive.syntax.sel_to_string,sel)));
}
});
enfocus.enlive.syntax.attr_pairs = (function enfocus$enlive$syntax$attr_pairs(op,elms){
var ts = (function (p__36566){
var vec__36567 = p__36566;
var x = cljs.core.nth.call(null,vec__36567,(0),null);
var y = cljs.core.nth.call(null,vec__36567,(1),null);
return [cljs.core.str("["),cljs.core.str(cljs.core.name.call(null,x)),cljs.core.str(op),cljs.core.str("='"),cljs.core.str(y),cljs.core.str("']")].join('');
});
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,ts,cljs.core.partition.call(null,(2),elms)));
});
enfocus.enlive.syntax.attr_QMARK_ = (function enfocus$enlive$syntax$attr_QMARK_(var_args){
var args__19784__auto__ = [];
var len__19777__auto___36570 = arguments.length;
var i__19778__auto___36571 = (0);
while(true){
if((i__19778__auto___36571 < len__19777__auto___36570)){
args__19784__auto__.push((arguments[i__19778__auto___36571]));

var G__36572 = (i__19778__auto___36571 + (1));
i__19778__auto___36571 = G__36572;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return enfocus.enlive.syntax.attr_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

enfocus.enlive.syntax.attr_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (elms){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__36568_SHARP_){
return [cljs.core.str("["),cljs.core.str(cljs.core.name.call(null,p1__36568_SHARP_)),cljs.core.str("]")].join('');
}),elms));
});

enfocus.enlive.syntax.attr_QMARK_.cljs$lang$maxFixedArity = (0);

enfocus.enlive.syntax.attr_QMARK_.cljs$lang$applyTo = (function (seq36569){
return enfocus.enlive.syntax.attr_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36569));
});
enfocus.enlive.syntax.attr_EQ_ = (function enfocus$enlive$syntax$attr_EQ_(var_args){
var args__19784__auto__ = [];
var len__19777__auto___36574 = arguments.length;
var i__19778__auto___36575 = (0);
while(true){
if((i__19778__auto___36575 < len__19777__auto___36574)){
args__19784__auto__.push((arguments[i__19778__auto___36575]));

var G__36576 = (i__19778__auto___36575 + (1));
i__19778__auto___36575 = G__36576;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return enfocus.enlive.syntax.attr_EQ_.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

enfocus.enlive.syntax.attr_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (elms){
return enfocus.enlive.syntax.attr_pairs.call(null,"",elms);
});

enfocus.enlive.syntax.attr_EQ_.cljs$lang$maxFixedArity = (0);

enfocus.enlive.syntax.attr_EQ_.cljs$lang$applyTo = (function (seq36573){
return enfocus.enlive.syntax.attr_EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36573));
});
enfocus.enlive.syntax.attr_has = (function enfocus$enlive$syntax$attr_has(var_args){
var args__19784__auto__ = [];
var len__19777__auto___36579 = arguments.length;
var i__19778__auto___36580 = (0);
while(true){
if((i__19778__auto___36580 < len__19777__auto___36579)){
args__19784__auto__.push((arguments[i__19778__auto___36580]));

var G__36581 = (i__19778__auto___36580 + (1));
i__19778__auto___36580 = G__36581;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((1) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((1)),(0))):null);
return enfocus.enlive.syntax.attr_has.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19785__auto__);
});

enfocus.enlive.syntax.attr_has.cljs$core$IFn$_invoke$arity$variadic = (function (x,vals){
var ts = (function (y){
return [cljs.core.str("["),cljs.core.str(cljs.core.name.call(null,x)),cljs.core.str("~='"),cljs.core.str(y),cljs.core.str("']")].join('');
});
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,ts,vals));
});

enfocus.enlive.syntax.attr_has.cljs$lang$maxFixedArity = (1);

enfocus.enlive.syntax.attr_has.cljs$lang$applyTo = (function (seq36577){
var G__36578 = cljs.core.first.call(null,seq36577);
var seq36577__$1 = cljs.core.next.call(null,seq36577);
return enfocus.enlive.syntax.attr_has.cljs$core$IFn$_invoke$arity$variadic(G__36578,seq36577__$1);
});
enfocus.enlive.syntax.attr_starts = (function enfocus$enlive$syntax$attr_starts(var_args){
var args__19784__auto__ = [];
var len__19777__auto___36583 = arguments.length;
var i__19778__auto___36584 = (0);
while(true){
if((i__19778__auto___36584 < len__19777__auto___36583)){
args__19784__auto__.push((arguments[i__19778__auto___36584]));

var G__36585 = (i__19778__auto___36584 + (1));
i__19778__auto___36584 = G__36585;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return enfocus.enlive.syntax.attr_starts.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

enfocus.enlive.syntax.attr_starts.cljs$core$IFn$_invoke$arity$variadic = (function (elms){
return enfocus.enlive.syntax.attr_pairs.call(null,"^",elms);
});

enfocus.enlive.syntax.attr_starts.cljs$lang$maxFixedArity = (0);

enfocus.enlive.syntax.attr_starts.cljs$lang$applyTo = (function (seq36582){
return enfocus.enlive.syntax.attr_starts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36582));
});
enfocus.enlive.syntax.attr_ends = (function enfocus$enlive$syntax$attr_ends(var_args){
var args__19784__auto__ = [];
var len__19777__auto___36587 = arguments.length;
var i__19778__auto___36588 = (0);
while(true){
if((i__19778__auto___36588 < len__19777__auto___36587)){
args__19784__auto__.push((arguments[i__19778__auto___36588]));

var G__36589 = (i__19778__auto___36588 + (1));
i__19778__auto___36588 = G__36589;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return enfocus.enlive.syntax.attr_ends.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

enfocus.enlive.syntax.attr_ends.cljs$core$IFn$_invoke$arity$variadic = (function (elms){
return enfocus.enlive.syntax.attr_pairs.call(null,"$",elms);
});

enfocus.enlive.syntax.attr_ends.cljs$lang$maxFixedArity = (0);

enfocus.enlive.syntax.attr_ends.cljs$lang$applyTo = (function (seq36586){
return enfocus.enlive.syntax.attr_ends.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36586));
});
enfocus.enlive.syntax.attr_contains = (function enfocus$enlive$syntax$attr_contains(var_args){
var args__19784__auto__ = [];
var len__19777__auto___36591 = arguments.length;
var i__19778__auto___36592 = (0);
while(true){
if((i__19778__auto___36592 < len__19777__auto___36591)){
args__19784__auto__.push((arguments[i__19778__auto___36592]));

var G__36593 = (i__19778__auto___36592 + (1));
i__19778__auto___36592 = G__36593;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return enfocus.enlive.syntax.attr_contains.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

enfocus.enlive.syntax.attr_contains.cljs$core$IFn$_invoke$arity$variadic = (function (elms){
return enfocus.enlive.syntax.attr_pairs.call(null,"*",elms);
});

enfocus.enlive.syntax.attr_contains.cljs$lang$maxFixedArity = (0);

enfocus.enlive.syntax.attr_contains.cljs$lang$applyTo = (function (seq36590){
return enfocus.enlive.syntax.attr_contains.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36590));
});
enfocus.enlive.syntax.attr_BAR__EQ_ = (function enfocus$enlive$syntax$attr_BAR__EQ_(var_args){
var args__19784__auto__ = [];
var len__19777__auto___36595 = arguments.length;
var i__19778__auto___36596 = (0);
while(true){
if((i__19778__auto___36596 < len__19777__auto___36595)){
args__19784__auto__.push((arguments[i__19778__auto___36596]));

var G__36597 = (i__19778__auto___36596 + (1));
i__19778__auto___36596 = G__36597;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return enfocus.enlive.syntax.attr_BAR__EQ_.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

enfocus.enlive.syntax.attr_BAR__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (elms){
return enfocus.enlive.syntax.attr_pairs.call(null,"|",elms);
});

enfocus.enlive.syntax.attr_BAR__EQ_.cljs$lang$maxFixedArity = (0);

enfocus.enlive.syntax.attr_BAR__EQ_.cljs$lang$applyTo = (function (seq36594){
return enfocus.enlive.syntax.attr_BAR__EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36594));
});
enfocus.enlive.syntax.nth_op = (function enfocus$enlive$syntax$nth_op(var_args){
var args36598 = [];
var len__19777__auto___36601 = arguments.length;
var i__19778__auto___36602 = (0);
while(true){
if((i__19778__auto___36602 < len__19777__auto___36601)){
args36598.push((arguments[i__19778__auto___36602]));

var G__36603 = (i__19778__auto___36602 + (1));
i__19778__auto___36602 = G__36603;
continue;
} else {
}
break;
}

var G__36600 = args36598.length;
switch (G__36600) {
case 2:
return enfocus.enlive.syntax.nth_op.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return enfocus.enlive.syntax.nth_op.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36598.length)].join('')));

}
});

enfocus.enlive.syntax.nth_op.cljs$core$IFn$_invoke$arity$2 = (function (op,x){
return [cljs.core.str(":nth-"),cljs.core.str(op),cljs.core.str("("),cljs.core.str(x),cljs.core.str(")")].join('');
});

enfocus.enlive.syntax.nth_op.cljs$core$IFn$_invoke$arity$3 = (function (op,x,y){
return [cljs.core.str(":nth-"),cljs.core.str(op),cljs.core.str("("),cljs.core.str(x),cljs.core.str("n"),cljs.core.str((((y > (0)))?"+":null)),cljs.core.str(y)].join('');
});

enfocus.enlive.syntax.nth_op.cljs$lang$maxFixedArity = 3;
enfocus.enlive.syntax.nth_child = (function enfocus$enlive$syntax$nth_child(var_args){
var args36605 = [];
var len__19777__auto___36608 = arguments.length;
var i__19778__auto___36609 = (0);
while(true){
if((i__19778__auto___36609 < len__19777__auto___36608)){
args36605.push((arguments[i__19778__auto___36609]));

var G__36610 = (i__19778__auto___36609 + (1));
i__19778__auto___36609 = G__36610;
continue;
} else {
}
break;
}

var G__36607 = args36605.length;
switch (G__36607) {
case 1:
return enfocus.enlive.syntax.nth_child.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.enlive.syntax.nth_child.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36605.length)].join('')));

}
});

enfocus.enlive.syntax.nth_child.cljs$core$IFn$_invoke$arity$1 = (function (x){
return enfocus.enlive.syntax.nth_op.call(null,"child",x);
});

enfocus.enlive.syntax.nth_child.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return enfocus.enlive.syntax.nth_op.call(null,"child",x,y);
});

enfocus.enlive.syntax.nth_child.cljs$lang$maxFixedArity = 2;
enfocus.enlive.syntax.nth_last_child = (function enfocus$enlive$syntax$nth_last_child(var_args){
var args36612 = [];
var len__19777__auto___36615 = arguments.length;
var i__19778__auto___36616 = (0);
while(true){
if((i__19778__auto___36616 < len__19777__auto___36615)){
args36612.push((arguments[i__19778__auto___36616]));

var G__36617 = (i__19778__auto___36616 + (1));
i__19778__auto___36616 = G__36617;
continue;
} else {
}
break;
}

var G__36614 = args36612.length;
switch (G__36614) {
case 1:
return enfocus.enlive.syntax.nth_last_child.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.enlive.syntax.nth_last_child.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36612.length)].join('')));

}
});

enfocus.enlive.syntax.nth_last_child.cljs$core$IFn$_invoke$arity$1 = (function (x){
return enfocus.enlive.syntax.nth_op.call(null,"last-child",x);
});

enfocus.enlive.syntax.nth_last_child.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return enfocus.enlive.syntax.nth_op.call(null,"last-child",x,y);
});

enfocus.enlive.syntax.nth_last_child.cljs$lang$maxFixedArity = 2;
enfocus.enlive.syntax.nth_of_type = (function enfocus$enlive$syntax$nth_of_type(var_args){
var args36619 = [];
var len__19777__auto___36622 = arguments.length;
var i__19778__auto___36623 = (0);
while(true){
if((i__19778__auto___36623 < len__19777__auto___36622)){
args36619.push((arguments[i__19778__auto___36623]));

var G__36624 = (i__19778__auto___36623 + (1));
i__19778__auto___36623 = G__36624;
continue;
} else {
}
break;
}

var G__36621 = args36619.length;
switch (G__36621) {
case 1:
return enfocus.enlive.syntax.nth_of_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.enlive.syntax.nth_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36619.length)].join('')));

}
});

enfocus.enlive.syntax.nth_of_type.cljs$core$IFn$_invoke$arity$1 = (function (x){
return enfocus.enlive.syntax.nth_op.call(null,"of-type",x);
});

enfocus.enlive.syntax.nth_of_type.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return enfocus.enlive.syntax.nth_op.call(null,"of-type",x,y);
});

enfocus.enlive.syntax.nth_of_type.cljs$lang$maxFixedArity = 2;
enfocus.enlive.syntax.nth_last_of_type = (function enfocus$enlive$syntax$nth_last_of_type(var_args){
var args36626 = [];
var len__19777__auto___36629 = arguments.length;
var i__19778__auto___36630 = (0);
while(true){
if((i__19778__auto___36630 < len__19777__auto___36629)){
args36626.push((arguments[i__19778__auto___36630]));

var G__36631 = (i__19778__auto___36630 + (1));
i__19778__auto___36630 = G__36631;
continue;
} else {
}
break;
}

var G__36628 = args36626.length;
switch (G__36628) {
case 1:
return enfocus.enlive.syntax.nth_last_of_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.enlive.syntax.nth_last_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36626.length)].join('')));

}
});

enfocus.enlive.syntax.nth_last_of_type.cljs$core$IFn$_invoke$arity$1 = (function (x){
return enfocus.enlive.syntax.nth_op.call(null,"last-of-type",x);
});

enfocus.enlive.syntax.nth_last_of_type.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return enfocus.enlive.syntax.nth_op.call(null,"last-of-type",x,y);
});

enfocus.enlive.syntax.nth_last_of_type.cljs$lang$maxFixedArity = 2;
enfocus.enlive.syntax.but = (function enfocus$enlive$syntax$but(var_args){
var args__19784__auto__ = [];
var len__19777__auto___36634 = arguments.length;
var i__19778__auto___36635 = (0);
while(true){
if((i__19778__auto___36635 < len__19777__auto___36634)){
args__19784__auto__.push((arguments[i__19778__auto___36635]));

var G__36636 = (i__19778__auto___36635 + (1));
i__19778__auto___36635 = G__36636;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return enfocus.enlive.syntax.but.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

enfocus.enlive.syntax.but.cljs$core$IFn$_invoke$arity$variadic = (function (sel){
return [cljs.core.str("not("),cljs.core.str(enfocus.enlive.syntax.convert.call(null,sel)),cljs.core.str(")")].join('');
});

enfocus.enlive.syntax.but.cljs$lang$maxFixedArity = (0);

enfocus.enlive.syntax.but.cljs$lang$applyTo = (function (seq36633){
return enfocus.enlive.syntax.but.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36633));
});

//# sourceMappingURL=syntax.js.map?rel=1472153855704