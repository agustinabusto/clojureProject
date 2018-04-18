// Compiled by ClojureScript 1.7.107 {}
goog.provide('domina.css');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.dom');
goog.require('goog.dom.query');
domina.css.root_element = (function domina$css$root_element(){
return (goog.dom.getElementsByTagNameAndClass("html")[(0)]);
});
/**
 * Returns content based on a css selector expression. Takes an optional content as a base; if none is given, uses the HTML element as a base.
 */
domina.css.sel = (function domina$css$sel(var_args){
var args37141 = [];
var len__19777__auto___37147 = arguments.length;
var i__19778__auto___37148 = (0);
while(true){
if((i__19778__auto___37148 < len__19777__auto___37147)){
args37141.push((arguments[i__19778__auto___37148]));

var G__37149 = (i__19778__auto___37148 + (1));
i__19778__auto___37148 = G__37149;
continue;
} else {
}
break;
}

var G__37143 = args37141.length;
switch (G__37143) {
case 1:
return domina.css.sel.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.css.sel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37141.length)].join('')));

}
});

domina.css.sel.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return domina.css.sel.call(null,domina.css.root_element.call(null),expr);
});

domina.css.sel.cljs$core$IFn$_invoke$arity$2 = (function (base,expr){
if(typeof domina.css.t_domina$css37144 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {domina.DomContent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
domina.css.t_domina$css37144 = (function (base,expr,meta37145){
this.base = base;
this.expr = expr;
this.meta37145 = meta37145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domina.css.t_domina$css37144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37146,meta37145__$1){
var self__ = this;
var _37146__$1 = this;
return (new domina.css.t_domina$css37144(self__.base,self__.expr,meta37145__$1));
});

domina.css.t_domina$css37144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37146){
var self__ = this;
var _37146__$1 = this;
return self__.meta37145;
});

domina.css.t_domina$css37144.prototype.domina$DomContent$ = true;

domina.css.t_domina$css37144.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.mapcat.call(null,((function (___$1){
return (function (p1__37139_SHARP_){
return domina.normalize_seq.call(null,goog.dom.query(self__.expr,p1__37139_SHARP_));
});})(___$1))
,domina.nodes.call(null,self__.base));
});

domina.css.t_domina$css37144.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.mapcat.call(null,((function (___$1){
return (function (p1__37140_SHARP_){
return domina.normalize_seq.call(null,goog.dom.query(self__.expr,p1__37140_SHARP_));
});})(___$1))
,domina.nodes.call(null,self__.base))));
});

domina.css.t_domina$css37144.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"expr","expr",-1908713478,null),new cljs.core.Symbol(null,"meta37145","meta37145",1892996810,null)], null);
});

domina.css.t_domina$css37144.cljs$lang$type = true;

domina.css.t_domina$css37144.cljs$lang$ctorStr = "domina.css/t_domina$css37144";

domina.css.t_domina$css37144.cljs$lang$ctorPrWriter = (function (this__19317__auto__,writer__19318__auto__,opt__19319__auto__){
return cljs.core._write.call(null,writer__19318__auto__,"domina.css/t_domina$css37144");
});

domina.css.__GT_t_domina$css37144 = (function domina$css$__GT_t_domina$css37144(base__$1,expr__$1,meta37145){
return (new domina.css.t_domina$css37144(base__$1,expr__$1,meta37145));
});

}

return (new domina.css.t_domina$css37144(base,expr,cljs.core.PersistentArrayMap.EMPTY));
});

domina.css.sel.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=css.js.map?rel=1472153856324