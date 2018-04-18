// Compiled by ClojureScript 1.7.107 {}
goog.provide('enfocus.core');
goog.require('cljs.core');
goog.require('goog.dom.query');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('domina.css');
goog.require('goog.Timer');
goog.require('goog.fx');
goog.require('goog.net.XhrIo');
goog.require('goog.dom.ViewportSizeMonitor');
goog.require('domina');
goog.require('goog.fx.dom');
goog.require('goog.async.Delay');
goog.require('goog.events');
goog.require('domina.xpath');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('enfocus.enlive.syntax');
enfocus.core.css_syms;

enfocus.core.css_select;

enfocus.core.create_sel_str;

enfocus.core.at;

enfocus.core.from;

/**
 * @interface
 */
enfocus.core.ISelector = function(){};

/**
 * takes root node and returns a domina node list
 */
enfocus.core.select = (function enfocus$core$select(var_args){
var args36055 = [];
var len__19777__auto___36058 = arguments.length;
var i__19778__auto___36059 = (0);
while(true){
if((i__19778__auto___36059 < len__19777__auto___36058)){
args36055.push((arguments[i__19778__auto___36059]));

var G__36060 = (i__19778__auto___36059 + (1));
i__19778__auto___36059 = G__36060;
continue;
} else {
}
break;
}

var G__36057 = args36055.length;
switch (G__36057) {
case 1:
return enfocus.core.select.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.core.select.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return enfocus.core.select.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36055.length)].join('')));

}
});

enfocus.core.select.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.enfocus$core$ISelector$select$arity$1 == null)))){
return this$.enfocus$core$ISelector$select$arity$1(this$);
} else {
var x__19374__auto__ = (((this$ == null))?null:this$);
var m__19375__auto__ = (enfocus.core.select[goog.typeOf(x__19374__auto__)]);
if(!((m__19375__auto__ == null))){
return m__19375__auto__.call(null,this$);
} else {
var m__19375__auto____$1 = (enfocus.core.select["_"]);
if(!((m__19375__auto____$1 == null))){
return m__19375__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
}
});

enfocus.core.select.cljs$core$IFn$_invoke$arity$2 = (function (this$,root){
if((!((this$ == null))) && (!((this$.enfocus$core$ISelector$select$arity$2 == null)))){
return this$.enfocus$core$ISelector$select$arity$2(this$,root);
} else {
var x__19374__auto__ = (((this$ == null))?null:this$);
var m__19375__auto__ = (enfocus.core.select[goog.typeOf(x__19374__auto__)]);
if(!((m__19375__auto__ == null))){
return m__19375__auto__.call(null,this$,root);
} else {
var m__19375__auto____$1 = (enfocus.core.select["_"]);
if(!((m__19375__auto____$1 == null))){
return m__19375__auto____$1.call(null,this$,root);
} else {
throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
}
});

enfocus.core.select.cljs$core$IFn$_invoke$arity$3 = (function (this$,root,id_mask){
if((!((this$ == null))) && (!((this$.enfocus$core$ISelector$select$arity$3 == null)))){
return this$.enfocus$core$ISelector$select$arity$3(this$,root,id_mask);
} else {
var x__19374__auto__ = (((this$ == null))?null:this$);
var m__19375__auto__ = (enfocus.core.select[goog.typeOf(x__19374__auto__)]);
if(!((m__19375__auto__ == null))){
return m__19375__auto__.call(null,this$,root,id_mask);
} else {
var m__19375__auto____$1 = (enfocus.core.select["_"]);
if(!((m__19375__auto____$1 == null))){
return m__19375__auto____$1.call(null,this$,root,id_mask);
} else {
throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
}
});

enfocus.core.select.cljs$lang$maxFixedArity = 3;

enfocus.core.debug = false;
enfocus.core.log_debug = (function enfocus$core$log_debug(mesg){
if(cljs.core.truth_((function (){var and__18707__auto__ = enfocus.core.debug;
if(cljs.core.truth_(and__18707__auto__)){
return !(cljs.core._EQ_.call(null,window.console,undefined));
} else {
return and__18707__auto__;
}
})())){
return console.log(mesg);
} else {
return null;
}
});
enfocus.core.setTimeout = (function enfocus$core$setTimeout(func,ttime){
return goog.Timer.callOnce(func,ttime);
});
enfocus.core.node_QMARK_ = (function enfocus$core$node_QMARK_(tst){
return goog.dom.isNodeLike(tst);
});
enfocus.core.nodelist_QMARK_ = (function enfocus$core$nodelist_QMARK_(tst){
return (tst instanceof NodeList);
});
/**
 * coverts a nodelist, node into a collection
 */
enfocus.core.nodes__GT_coll = (function enfocus$core$nodes__GT_coll(nl){
if(cljs.core._EQ_.call(null,nl,window)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nl], null);
} else {
return domina.nodes.call(null,nl);
}
});
enfocus.core.flatten_nodes_coll = (function enfocus$core$flatten_nodes_coll(values){

return cljs.core.mapcat.call(null,(function (p1__36062_SHARP_){
if(typeof p1__36062_SHARP_ === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__36062_SHARP_)], null);
} else {
return enfocus.core.nodes__GT_coll.call(null,p1__36062_SHARP_);

}
}),values);
});
/**
 * Sets property name to a value on a element and	Returns the original object
 */
enfocus.core.style_set = (function enfocus$core$style_set(obj,values){
var seq__36069_36075 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));
var chunk__36070_36076 = null;
var count__36071_36077 = (0);
var i__36072_36078 = (0);
while(true){
if((i__36072_36078 < count__36071_36077)){
var vec__36073_36079 = cljs.core._nth.call(null,chunk__36070_36076,i__36072_36078);
var attr_36080 = cljs.core.nth.call(null,vec__36073_36079,(0),null);
var value_36081 = cljs.core.nth.call(null,vec__36073_36079,(1),null);
goog.style.setStyle(obj,cljs.core.name.call(null,attr_36080),value_36081);

var G__36082 = seq__36069_36075;
var G__36083 = chunk__36070_36076;
var G__36084 = count__36071_36077;
var G__36085 = (i__36072_36078 + (1));
seq__36069_36075 = G__36082;
chunk__36070_36076 = G__36083;
count__36071_36077 = G__36084;
i__36072_36078 = G__36085;
continue;
} else {
var temp__4425__auto___36086 = cljs.core.seq.call(null,seq__36069_36075);
if(temp__4425__auto___36086){
var seq__36069_36087__$1 = temp__4425__auto___36086;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36069_36087__$1)){
var c__19522__auto___36088 = cljs.core.chunk_first.call(null,seq__36069_36087__$1);
var G__36089 = cljs.core.chunk_rest.call(null,seq__36069_36087__$1);
var G__36090 = c__19522__auto___36088;
var G__36091 = cljs.core.count.call(null,c__19522__auto___36088);
var G__36092 = (0);
seq__36069_36075 = G__36089;
chunk__36070_36076 = G__36090;
count__36071_36077 = G__36091;
i__36072_36078 = G__36092;
continue;
} else {
var vec__36074_36093 = cljs.core.first.call(null,seq__36069_36087__$1);
var attr_36094 = cljs.core.nth.call(null,vec__36074_36093,(0),null);
var value_36095 = cljs.core.nth.call(null,vec__36074_36093,(1),null);
goog.style.setStyle(obj,cljs.core.name.call(null,attr_36094),value_36095);

var G__36096 = cljs.core.next.call(null,seq__36069_36087__$1);
var G__36097 = null;
var G__36098 = (0);
var G__36099 = (0);
seq__36069_36075 = G__36096;
chunk__36070_36076 = G__36097;
count__36071_36077 = G__36098;
i__36072_36078 = G__36099;
continue;
}
} else {
}
}
break;
}

return obj;
});
/**
 * removes the property value from an elements style obj.
 */
enfocus.core.style_remove = (function enfocus$core$style_remove(obj,values){
var seq__36104 = cljs.core.seq.call(null,values);
var chunk__36105 = null;
var count__36106 = (0);
var i__36107 = (0);
while(true){
if((i__36107 < count__36106)){
var attr = cljs.core._nth.call(null,chunk__36105,i__36107);
if(cljs.core.truth_(goog.userAgent.IE)){
goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else {
obj.style.removeProperty(cljs.core.name.call(null,attr));
}

var G__36108 = seq__36104;
var G__36109 = chunk__36105;
var G__36110 = count__36106;
var G__36111 = (i__36107 + (1));
seq__36104 = G__36108;
chunk__36105 = G__36109;
count__36106 = G__36110;
i__36107 = G__36111;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__36104);
if(temp__4425__auto__){
var seq__36104__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36104__$1)){
var c__19522__auto__ = cljs.core.chunk_first.call(null,seq__36104__$1);
var G__36112 = cljs.core.chunk_rest.call(null,seq__36104__$1);
var G__36113 = c__19522__auto__;
var G__36114 = cljs.core.count.call(null,c__19522__auto__);
var G__36115 = (0);
seq__36104 = G__36112;
chunk__36105 = G__36113;
count__36106 = G__36114;
i__36107 = G__36115;
continue;
} else {
var attr = cljs.core.first.call(null,seq__36104__$1);
if(cljs.core.truth_(goog.userAgent.IE)){
goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else {
obj.style.removeProperty(cljs.core.name.call(null,attr));
}

var G__36116 = cljs.core.next.call(null,seq__36104__$1);
var G__36117 = null;
var G__36118 = (0);
var G__36119 = (0);
seq__36104 = G__36116;
chunk__36105 = G__36117;
count__36106 = G__36118;
i__36107 = G__36119;
continue;
}
} else {
return null;
}
}
break;
}
});
enfocus.core.get_eff_prop_name = (function enfocus$core$get_eff_prop_name(etype){
return [cljs.core.str("__ef_effect_"),cljs.core.str(etype)].join('');
});
enfocus.core.get_mills = (function enfocus$core$get_mills(){
return (new Date()).getMilliseconds();
});
/**
 * returns true if the node(child) is a child of parent
 */
enfocus.core.child_of_QMARK_ = (function enfocus$core$child_of_QMARK_(parent,child){
while(true){
if(cljs.core.not.call(null,child)){
return false;
} else {
if((parent === child)){
return false;
} else {
if((child.parentNode === parent)){
return true;
} else {
var G__36120 = parent;
var G__36121 = child.parentNode;
parent = G__36120;
child = G__36121;
continue;

}
}
}
break;
}
});
/**
 * this is used to build cross browser versions of :mouseenter and :mouseleave events
 */
enfocus.core.mouse_enter_leave = (function enfocus$core$mouse_enter_leave(func){
return (function (e){
var re = e.relatedTarget;
var this$ = e.currentTarget;
if((!((re === this$))) && (cljs.core.not.call(null,enfocus.core.child_of_QMARK_.call(null,this$,re)))){
return func.call(null,e);
} else {
return null;
}
});
});
enfocus.core.pix_round = (function enfocus$core$pix_round(step){
if((step < (0))){
return Math.floor(step);
} else {
return Math.ceil(step);
}
});
enfocus.core.add_map_attrs = (function enfocus$core$add_map_attrs(var_args){
var args36122 = [];
var len__19777__auto___36131 = arguments.length;
var i__19778__auto___36132 = (0);
while(true){
if((i__19778__auto___36132 < len__19777__auto___36131)){
args36122.push((arguments[i__19778__auto___36132]));

var G__36133 = (i__19778__auto___36132 + (1));
i__19778__auto___36132 = G__36133;
continue;
} else {
}
break;
}

var G__36124 = args36122.length;
switch (G__36124) {
case 2:
return enfocus.core.add_map_attrs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return enfocus.core.add_map_attrs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36122.length)].join('')));

}
});

enfocus.core.add_map_attrs.cljs$core$IFn$_invoke$arity$2 = (function (elem,ats){
if(cljs.core.truth_(elem)){
if(cljs.core.map_QMARK_.call(null,ats)){
var seq__36125_36135 = cljs.core.seq.call(null,ats);
var chunk__36126_36136 = null;
var count__36127_36137 = (0);
var i__36128_36138 = (0);
while(true){
if((i__36128_36138 < count__36127_36137)){
var vec__36129_36139 = cljs.core._nth.call(null,chunk__36126_36136,i__36128_36138);
var k_36140 = cljs.core.nth.call(null,vec__36129_36139,(0),null);
var v_36141 = cljs.core.nth.call(null,vec__36129_36139,(1),null);
enfocus.core.add_map_attrs.call(null,elem,k_36140,v_36141);

var G__36142 = seq__36125_36135;
var G__36143 = chunk__36126_36136;
var G__36144 = count__36127_36137;
var G__36145 = (i__36128_36138 + (1));
seq__36125_36135 = G__36142;
chunk__36126_36136 = G__36143;
count__36127_36137 = G__36144;
i__36128_36138 = G__36145;
continue;
} else {
var temp__4425__auto___36146 = cljs.core.seq.call(null,seq__36125_36135);
if(temp__4425__auto___36146){
var seq__36125_36147__$1 = temp__4425__auto___36146;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36125_36147__$1)){
var c__19522__auto___36148 = cljs.core.chunk_first.call(null,seq__36125_36147__$1);
var G__36149 = cljs.core.chunk_rest.call(null,seq__36125_36147__$1);
var G__36150 = c__19522__auto___36148;
var G__36151 = cljs.core.count.call(null,c__19522__auto___36148);
var G__36152 = (0);
seq__36125_36135 = G__36149;
chunk__36126_36136 = G__36150;
count__36127_36137 = G__36151;
i__36128_36138 = G__36152;
continue;
} else {
var vec__36130_36153 = cljs.core.first.call(null,seq__36125_36147__$1);
var k_36154 = cljs.core.nth.call(null,vec__36130_36153,(0),null);
var v_36155 = cljs.core.nth.call(null,vec__36130_36153,(1),null);
enfocus.core.add_map_attrs.call(null,elem,k_36154,v_36155);

var G__36156 = cljs.core.next.call(null,seq__36125_36147__$1);
var G__36157 = null;
var G__36158 = (0);
var G__36159 = (0);
seq__36125_36135 = G__36156;
chunk__36126_36136 = G__36157;
count__36127_36137 = G__36158;
i__36128_36138 = G__36159;
continue;
}
} else {
}
}
break;
}

return elem;
} else {
return null;
}
} else {
return null;
}
});

enfocus.core.add_map_attrs.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);

return elem;
});

enfocus.core.add_map_attrs.cljs$lang$maxFixedArity = 3;
/**
 * this is incremented everytime a remote template is loaded and decremented when
 * it is added to the dom cache
 */
enfocus.core.tpl_load_cnt = cljs.core.atom.call(null,(0));
/**
 * cache for the remote templates
 */
enfocus.core.tpl_cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
enfocus.core.hide_style = new cljs.core.PersistentArrayMap(null, 1, ["style","display: none; width: 0px; height: 0px"], null).strobj;
/**
 * Add a hidden div to hold the dom as we are transforming it this has to be done
 * because css selectors do not work unless we have it in the main dom
 */
enfocus.core.create_hidden_dom = (function enfocus$core$create_hidden_dom(child){
var div = goog.dom.createDom("div",enfocus.core.hide_style);
if(cljs.core._EQ_.call(null,child.nodeType,(11))){
goog.dom.appendChild(div,child);
} else {
enfocus.core.log_debug.call(null,cljs.core.count.call(null,domina.nodes.call(null,child)));

var seq__36164_36168 = cljs.core.seq.call(null,domina.nodes.call(null,child));
var chunk__36165_36169 = null;
var count__36166_36170 = (0);
var i__36167_36171 = (0);
while(true){
if((i__36167_36171 < count__36166_36170)){
var node_36172 = cljs.core._nth.call(null,chunk__36165_36169,i__36167_36171);
goog.dom.appendChild(div,node_36172);

var G__36173 = seq__36164_36168;
var G__36174 = chunk__36165_36169;
var G__36175 = count__36166_36170;
var G__36176 = (i__36167_36171 + (1));
seq__36164_36168 = G__36173;
chunk__36165_36169 = G__36174;
count__36166_36170 = G__36175;
i__36167_36171 = G__36176;
continue;
} else {
var temp__4425__auto___36177 = cljs.core.seq.call(null,seq__36164_36168);
if(temp__4425__auto___36177){
var seq__36164_36178__$1 = temp__4425__auto___36177;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36164_36178__$1)){
var c__19522__auto___36179 = cljs.core.chunk_first.call(null,seq__36164_36178__$1);
var G__36180 = cljs.core.chunk_rest.call(null,seq__36164_36178__$1);
var G__36181 = c__19522__auto___36179;
var G__36182 = cljs.core.count.call(null,c__19522__auto___36179);
var G__36183 = (0);
seq__36164_36168 = G__36180;
chunk__36165_36169 = G__36181;
count__36166_36170 = G__36182;
i__36167_36171 = G__36183;
continue;
} else {
var node_36184 = cljs.core.first.call(null,seq__36164_36178__$1);
goog.dom.appendChild(div,node_36184);

var G__36185 = cljs.core.next.call(null,seq__36164_36178__$1);
var G__36186 = null;
var G__36187 = (0);
var G__36188 = (0);
seq__36164_36168 = G__36185;
chunk__36165_36169 = G__36186;
count__36166_36170 = G__36187;
i__36167_36171 = G__36188;
continue;
}
} else {
}
}
break;
}
}

goog.dom.appendChild(goog.dom.getDocument().documentElement,div);

return div;
});
/**
 * removes the hidden div and returns the children
 */
enfocus.core.remove_node_return_child = (function enfocus$core$remove_node_return_child(div){
var child = div.childNodes;
var frag = document.createDocumentFragment();
goog.dom.append(frag,child);

goog.dom.removeNode(div);

return frag;
});
/**
 * replaces all the ids in a string html fragement/template with a generated 
 * symbol appended on to a existing id this is done to make sure we don't have
 * id colisions during the transformation process
 */
enfocus.core.replace_ids = (function enfocus$core$replace_ids(text){
var re = (new RegExp("(<.*?\\sid=['\"])(.*?)(['\"].*?>)","g"));
var sym = [cljs.core.str(cljs.core.name.call(null,cljs.core.gensym.call(null,"id"))),cljs.core.str("_")].join('');
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(sym)].join(''),text.replace(re,((function (re,sym){
return (function (a,b,c,d){
return [cljs.core.str(b),cljs.core.str(sym),cljs.core.str(c),cljs.core.str(d)].join('');
});})(re,sym))
)], null);
});
/**
 * before adding the dom back into the live dom we reset the masked ids to orig vals
 */
enfocus.core.reset_ids = (function enfocus$core$reset_ids(sym,nod){
var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");
var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (id_nodes,nod_col){
return (function (p1__36189_SHARP_){
var id = p1__36189_SHARP_.getAttribute("id");
var rid = id.replace(sym,"");
return p1__36189_SHARP_.setAttribute("id",rid);
});})(id_nodes,nod_col))
,nod_col));
});
/**
 * loads a remote file into the cache, and masks the ids to avoid collisions
 */
enfocus.core.load_remote_dom = (function enfocus$core$load_remote_dom(uri,dom_key){
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri) == null)){
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);

var req = (new goog.net.XhrIo());
var callback = ((function (req){
return (function (req__$1){
var text = req__$1.getResponseText();
var vec__36191 = enfocus.core.replace_ids.call(null,text);
var sym = cljs.core.nth.call(null,vec__36191,(0),null);
var txt = cljs.core.nth.call(null,vec__36191,(1),null);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
});})(req))
;
goog.events.listen(req,goog.net.EventType.COMPLETE,((function (req,callback){
return (function (){
callback.call(null,req);

return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.dec);
});})(req,callback))
);

return req.send(uri,"GET");
} else {
return null;
}
});
enfocus.core.html_to_dom = (function enfocus$core$html_to_dom(html){
var dfa = enfocus.core.nodes__GT_coll.call(null,domina.html_to_dom.call(null,html));
var frag = document.createDocumentFragment();
enfocus.core.log_debug.call(null,cljs.core.count.call(null,dfa));

var seq__36196_36200 = cljs.core.seq.call(null,dfa);
var chunk__36197_36201 = null;
var count__36198_36202 = (0);
var i__36199_36203 = (0);
while(true){
if((i__36199_36203 < count__36198_36202)){
var df_36204 = cljs.core._nth.call(null,chunk__36197_36201,i__36199_36203);
goog.dom.append(frag,df_36204);

var G__36205 = seq__36196_36200;
var G__36206 = chunk__36197_36201;
var G__36207 = count__36198_36202;
var G__36208 = (i__36199_36203 + (1));
seq__36196_36200 = G__36205;
chunk__36197_36201 = G__36206;
count__36198_36202 = G__36207;
i__36199_36203 = G__36208;
continue;
} else {
var temp__4425__auto___36209 = cljs.core.seq.call(null,seq__36196_36200);
if(temp__4425__auto___36209){
var seq__36196_36210__$1 = temp__4425__auto___36209;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36196_36210__$1)){
var c__19522__auto___36211 = cljs.core.chunk_first.call(null,seq__36196_36210__$1);
var G__36212 = cljs.core.chunk_rest.call(null,seq__36196_36210__$1);
var G__36213 = c__19522__auto___36211;
var G__36214 = cljs.core.count.call(null,c__19522__auto___36211);
var G__36215 = (0);
seq__36196_36200 = G__36212;
chunk__36197_36201 = G__36213;
count__36198_36202 = G__36214;
i__36199_36203 = G__36215;
continue;
} else {
var df_36216 = cljs.core.first.call(null,seq__36196_36210__$1);
goog.dom.append(frag,df_36216);

var G__36217 = cljs.core.next.call(null,seq__36196_36210__$1);
var G__36218 = null;
var G__36219 = (0);
var G__36220 = (0);
seq__36196_36200 = G__36217;
chunk__36197_36201 = G__36218;
count__36198_36202 = G__36219;
i__36199_36203 = G__36220;
continue;
}
} else {
}
}
break;
}

return frag;
});
/**
 * returns and dom from the cache and symbol used to scope the ids
 */
enfocus.core.get_cached_dom = (function enfocus$core$get_cached_dom(uri){
var nod = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri);
if(cljs.core.truth_(nod)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,nod),enfocus.core.html_to_dom.call(null,cljs.core.second.call(null,nod))], null);
} else {
return null;
}
});
/**
 * returns the cached snippet or creates one and adds it to the cache if needed
 */
enfocus.core.get_cached_snippet = (function enfocus$core$get_cached_snippet(uri,sel){
var sel_str = enfocus.core.create_sel_str.call(null,sel);
var cache = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,[cljs.core.str(uri),cljs.core.str(sel_str)].join(''));
if(cljs.core.truth_(cache)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cache),enfocus.core.html_to_dom.call(null,cljs.core.second.call(null,cache))], null);
} else {
var vec__36223 = enfocus.core.get_cached_dom.call(null,uri);
var sym = cljs.core.nth.call(null,vec__36223,(0),null);
var tdom = cljs.core.nth.call(null,vec__36223,(1),null);
var dom = enfocus.core.create_hidden_dom.call(null,tdom);
var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));
var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__36223,sym,tdom,dom,tsnip,sel_str,cache){
return (function (p1__36221_SHARP_){
return p1__36221_SHARP_.outerHTML;
});})(vec__36223,sym,tdom,dom,tsnip,sel_str,cache))
,tsnip));
enfocus.core.remove_node_return_child.call(null,dom);

cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,[cljs.core.str(uri),cljs.core.str(sel_str)].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,html_snip], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,enfocus.core.html_to_dom.call(null,html_snip)], null);
}
});
/**
 * wrapper function for extractors that maps the extraction to all nodes returned by the selector
 */
enfocus.core.extr_multi_node = (function enfocus$core$extr_multi_node(func){
return (function enfocus$core$extr_multi_node_$_trans(pnodes){
var pnod_col = enfocus.core.nodes__GT_coll.call(null,pnodes);
var result = cljs.core.map.call(null,func,pnod_col);
if((cljs.core.count.call(null,result) <= (1))){
return cljs.core.first.call(null,result);
} else {
return result;
}
});
});
/**
 * wrapper function for transforms, maps the transform to all nodes returned
 * by the selector and provides the ability to chain transforms with the chain command.
 */
enfocus.core.chainable_standard = (function enfocus$core$chainable_standard(func){
return (function() {
var enfocus$core$chainable_standard_$_trans = null;
var enfocus$core$chainable_standard_$_trans__1 = (function (pnodes){
return enfocus$core$chainable_standard_$_trans.call(null,pnodes,null);
});
var enfocus$core$chainable_standard_$_trans__2 = (function (pnodes,chain){
var pnod_col = enfocus.core.nodes__GT_coll.call(null,pnodes);
cljs.core.doall.call(null,cljs.core.map.call(null,func,pnod_col));

if(!((chain == null))){
return chain.call(null,pnodes);
} else {
return null;
}
});
enfocus$core$chainable_standard_$_trans = function(pnodes,chain){
switch(arguments.length){
case 1:
return enfocus$core$chainable_standard_$_trans__1.call(this,pnodes);
case 2:
return enfocus$core$chainable_standard_$_trans__2.call(this,pnodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
enfocus$core$chainable_standard_$_trans.cljs$core$IFn$_invoke$arity$1 = enfocus$core$chainable_standard_$_trans__1;
enfocus$core$chainable_standard_$_trans.cljs$core$IFn$_invoke$arity$2 = enfocus$core$chainable_standard_$_trans__2;
return enfocus$core$chainable_standard_$_trans;
})()
});
/**
 * wrapper function for effects, maps the effect to all nodes returned by the
 * selector and provides chaining and callback functionality
 */
enfocus.core.chainable_effect = (function enfocus$core$chainable_effect(func,callback){
return (function() {
var enfocus$core$chainable_effect_$_trans = null;
var enfocus$core$chainable_effect_$_trans__1 = (function (pnodes){
return enfocus$core$chainable_effect_$_trans.call(null,pnodes,null);
});
var enfocus$core$chainable_effect_$_trans__2 = (function (pnodes,chain){
var pnod_col = enfocus.core.nodes__GT_coll.call(null,pnodes);
var cnt = cljs.core.atom.call(null,cljs.core.count.call(null,pnod_col));
var partial_cback = ((function (pnod_col,cnt){
return (function (){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if(cljs.core._EQ_.call(null,(0),cljs.core.deref.call(null,cnt))){
if(!((callback == null))){
callback.call(null,pnodes);
} else {
}

if(!((chain == null))){
return chain.call(null,pnodes);
} else {
return null;
}
} else {
return null;
}
});})(pnod_col,cnt))
;
var seq__36236 = cljs.core.seq.call(null,pnod_col);
var chunk__36237 = null;
var count__36238 = (0);
var i__36239 = (0);
while(true){
if((i__36239 < count__36238)){
var pnod = cljs.core._nth.call(null,chunk__36237,i__36239);
func.call(null,pnod,partial_cback);

var G__36240 = seq__36236;
var G__36241 = chunk__36237;
var G__36242 = count__36238;
var G__36243 = (i__36239 + (1));
seq__36236 = G__36240;
chunk__36237 = G__36241;
count__36238 = G__36242;
i__36239 = G__36243;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__36236);
if(temp__4425__auto__){
var seq__36236__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36236__$1)){
var c__19522__auto__ = cljs.core.chunk_first.call(null,seq__36236__$1);
var G__36244 = cljs.core.chunk_rest.call(null,seq__36236__$1);
var G__36245 = c__19522__auto__;
var G__36246 = cljs.core.count.call(null,c__19522__auto__);
var G__36247 = (0);
seq__36236 = G__36244;
chunk__36237 = G__36245;
count__36238 = G__36246;
i__36239 = G__36247;
continue;
} else {
var pnod = cljs.core.first.call(null,seq__36236__$1);
func.call(null,pnod,partial_cback);

var G__36248 = cljs.core.next.call(null,seq__36236__$1);
var G__36249 = null;
var G__36250 = (0);
var G__36251 = (0);
seq__36236 = G__36248;
chunk__36237 = G__36249;
count__36238 = G__36250;
i__36239 = G__36251;
continue;
}
} else {
return null;
}
}
break;
}
});
enfocus$core$chainable_effect_$_trans = function(pnodes,chain){
switch(arguments.length){
case 1:
return enfocus$core$chainable_effect_$_trans__1.call(this,pnodes);
case 2:
return enfocus$core$chainable_effect_$_trans__2.call(this,pnodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
enfocus$core$chainable_effect_$_trans.cljs$core$IFn$_invoke$arity$1 = enfocus$core$chainable_effect_$_trans__1;
enfocus$core$chainable_effect_$_trans.cljs$core$IFn$_invoke$arity$2 = enfocus$core$chainable_effect_$_trans__2;
return enfocus$core$chainable_effect_$_trans;
})()
});
/**
 * Allows standard domina functions to be chainable
 */
enfocus.core.domina_chain = (function enfocus$core$domina_chain(var_args){
var args36253 = [];
var len__19777__auto___36256 = arguments.length;
var i__19778__auto___36257 = (0);
while(true){
if((i__19778__auto___36257 < len__19777__auto___36256)){
args36253.push((arguments[i__19778__auto___36257]));

var G__36258 = (i__19778__auto___36257 + (1));
i__19778__auto___36257 = G__36258;
continue;
} else {
}
break;
}

var G__36255 = args36253.length;
switch (G__36255) {
case 1:
return enfocus.core.domina_chain.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.core.domina_chain.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36253.length)].join('')));

}
});

enfocus.core.domina_chain.cljs$core$IFn$_invoke$arity$1 = (function (func){
return (function() {
var enfocus$core$trans = null;
var enfocus$core$trans__1 = (function (nodes){
return enfocus$core$trans.call(null,nodes,null);
});
var enfocus$core$trans__2 = (function (nodes,chain){
func.call(null,nodes);

if(!((chain == null))){
return chain.call(null,nodes);
} else {
return null;
}
});
enfocus$core$trans = function(nodes,chain){
switch(arguments.length){
case 1:
return enfocus$core$trans__1.call(this,nodes);
case 2:
return enfocus$core$trans__2.call(this,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
enfocus$core$trans.cljs$core$IFn$_invoke$arity$1 = enfocus$core$trans__1;
enfocus$core$trans.cljs$core$IFn$_invoke$arity$2 = enfocus$core$trans__2;
return enfocus$core$trans;
})()
});

enfocus.core.domina_chain.cljs$core$IFn$_invoke$arity$2 = (function (values,func){
return (function() {
var enfocus$core$trans = null;
var enfocus$core$trans__1 = (function (nodes){
return enfocus$core$trans.call(null,nodes,null);
});
var enfocus$core$trans__2 = (function (nodes,chain){
var vnodes_36260 = cljs.core.mapcat.call(null,(function (p1__36252_SHARP_){
return domina.nodes.call(null,p1__36252_SHARP_);
}),values);
func.call(null,nodes,vnodes_36260);

if(!((chain == null))){
return chain.call(null,nodes);
} else {
return null;
}
});
enfocus$core$trans = function(nodes,chain){
switch(arguments.length){
case 1:
return enfocus$core$trans__1.call(this,nodes);
case 2:
return enfocus$core$trans__2.call(this,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
enfocus$core$trans.cljs$core$IFn$_invoke$arity$1 = enfocus$core$trans__1;
enfocus$core$trans.cljs$core$IFn$_invoke$arity$2 = enfocus$core$trans__2;
return enfocus$core$trans;
})()
});

enfocus.core.domina_chain.cljs$lang$maxFixedArity = 2;
/**
 * Replaces the content of the element. Values can be nodes or collection of nodes.
 */
enfocus.core.en_content = (function enfocus$core$en_content(var_args){
var args__19784__auto__ = [];
var len__19777__auto___36264 = arguments.length;
var i__19778__auto___36265 = (0);
while(true){
if((i__19778__auto___36265 < len__19777__auto___36264)){
args__19784__auto__.push((arguments[i__19778__auto___36265]));

var G__36266 = (i__19778__auto___36265 + (1));
i__19778__auto___36265 = G__36266;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return enfocus.core.en_content.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

enfocus.core.en_content.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.domina_chain.call(null,values,(function (p1__36261_SHARP_,p2__36262_SHARP_){
domina.destroy_children_BANG_.call(null,p1__36261_SHARP_);

return domina.append_BANG_.call(null,p1__36261_SHARP_,p2__36262_SHARP_);
}));
});

enfocus.core.en_content.cljs$lang$maxFixedArity = (0);

enfocus.core.en_content.cljs$lang$applyTo = (function (seq36263){
return enfocus.core.en_content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36263));
});
/**
 * Replaces the content of the element with the dom structure represented by the html string passed
 */
enfocus.core.en_html_content = (function enfocus$core$en_html_content(txt){
return enfocus.core.domina_chain.call(null,(function (p1__36267_SHARP_){
return domina.set_html_BANG_.call(null,p1__36267_SHARP_,txt);
}));
});
/**
 * Assocs attributes and values on the selected element.
 */
enfocus.core.en_set_attr = (function enfocus$core$en_set_attr(var_args){
var args__19784__auto__ = [];
var len__19777__auto___36276 = arguments.length;
var i__19778__auto___36277 = (0);
while(true){
if((i__19778__auto___36277 < len__19777__auto___36276)){
args__19784__auto__.push((arguments[i__19778__auto___36277]));

var G__36278 = (i__19778__auto___36277 + (1));
i__19778__auto___36277 = G__36278;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return enfocus.core.en_set_attr.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

enfocus.core.en_set_attr.cljs$core$IFn$_invoke$arity$variadic = (function (values){
var pairs = cljs.core.partition.call(null,(2),values);
return enfocus.core.domina_chain.call(null,((function (pairs){
return (function (p1__36268_SHARP_){
var seq__36270 = cljs.core.seq.call(null,pairs);
var chunk__36271 = null;
var count__36272 = (0);
var i__36273 = (0);
while(true){
if((i__36273 < count__36272)){
var vec__36274 = cljs.core._nth.call(null,chunk__36271,i__36273);
var name = cljs.core.nth.call(null,vec__36274,(0),null);
var value = cljs.core.nth.call(null,vec__36274,(1),null);
domina.set_attr_BANG_.call(null,p1__36268_SHARP_,name,value);

var G__36279 = seq__36270;
var G__36280 = chunk__36271;
var G__36281 = count__36272;
var G__36282 = (i__36273 + (1));
seq__36270 = G__36279;
chunk__36271 = G__36280;
count__36272 = G__36281;
i__36273 = G__36282;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__36270);
if(temp__4425__auto__){
var seq__36270__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36270__$1)){
var c__19522__auto__ = cljs.core.chunk_first.call(null,seq__36270__$1);
var G__36283 = cljs.core.chunk_rest.call(null,seq__36270__$1);
var G__36284 = c__19522__auto__;
var G__36285 = cljs.core.count.call(null,c__19522__auto__);
var G__36286 = (0);
seq__36270 = G__36283;
chunk__36271 = G__36284;
count__36272 = G__36285;
i__36273 = G__36286;
continue;
} else {
var vec__36275 = cljs.core.first.call(null,seq__36270__$1);
var name = cljs.core.nth.call(null,vec__36275,(0),null);
var value = cljs.core.nth.call(null,vec__36275,(1),null);
domina.set_attr_BANG_.call(null,p1__36268_SHARP_,name,value);

var G__36287 = cljs.core.next.call(null,seq__36270__$1);
var G__36288 = null;
var G__36289 = (0);
var G__36290 = (0);
seq__36270 = G__36287;
chunk__36271 = G__36288;
count__36272 = G__36289;
i__36273 = G__36290;
continue;
}
} else {
return null;
}
}
break;
}
});})(pairs))
);
});

enfocus.core.en_set_attr.cljs$lang$maxFixedArity = (0);

enfocus.core.en_set_attr.cljs$lang$applyTo = (function (seq36269){
return enfocus.core.en_set_attr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36269));
});
/**
 * Dissocs attributes on the selected element.
 */
enfocus.core.en_remove_attr = (function enfocus$core$en_remove_attr(var_args){
var args__19784__auto__ = [];
var len__19777__auto___36297 = arguments.length;
var i__19778__auto___36298 = (0);
while(true){
if((i__19778__auto___36298 < len__19777__auto___36297)){
args__19784__auto__.push((arguments[i__19778__auto___36298]));

var G__36299 = (i__19778__auto___36298 + (1));
i__19778__auto___36298 = G__36299;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return enfocus.core.en_remove_attr.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

enfocus.core.en_remove_attr.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.domina_chain.call(null,(function (p1__36291_SHARP_){
var seq__36293 = cljs.core.seq.call(null,values);
var chunk__36294 = null;
var count__36295 = (0);
var i__36296 = (0);
while(true){
if((i__36296 < count__36295)){
var name = cljs.core._nth.call(null,chunk__36294,i__36296);
domina.remove_attr_BANG_.call(null,p1__36291_SHARP_,name);

var G__36300 = seq__36293;
var G__36301 = chunk__36294;
var G__36302 = count__36295;
var G__36303 = (i__36296 + (1));
seq__36293 = G__36300;
chunk__36294 = G__36301;
count__36295 = G__36302;
i__36296 = G__36303;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__36293);
if(temp__4425__auto__){
var seq__36293__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36293__$1)){
var c__19522__auto__ = cljs.core.chunk_first.call(null,seq__36293__$1);
var G__36304 = cljs.core.chunk_rest.call(null,seq__36293__$1);
var G__36305 = c__19522__auto__;
var G__36306 = cljs.core.count.call(null,c__19522__auto__);
var G__36307 = (0);
seq__36293 = G__36304;
chunk__36294 = G__36305;
count__36295 = G__36306;
i__36296 = G__36307;
continue;
} else {
var name = cljs.core.first.call(null,seq__36293__$1);
domina.remove_attr_BANG_.call(null,p1__36291_SHARP_,name);

var G__36308 = cljs.core.next.call(null,seq__36293__$1);
var G__36309 = null;
var G__36310 = (0);
var G__36311 = (0);
seq__36293 = G__36308;
chunk__36294 = G__36309;
count__36295 = G__36310;
i__36296 = G__36311;
continue;
}
} else {
return null;
}
}
break;
}
}));
});

enfocus.core.en_remove_attr.cljs$lang$maxFixedArity = (0);

enfocus.core.en_remove_attr.cljs$lang$applyTo = (function (seq36292){
return enfocus.core.en_remove_attr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36292));
});
enfocus.core.en_set_prop = (function enfocus$core$en_set_prop(var_args){
var args__19784__auto__ = [];
var len__19777__auto___36315 = arguments.length;
var i__19778__auto___36316 = (0);
while(true){
if((i__19778__auto___36316 < len__19777__auto___36315)){
args__19784__auto__.push((arguments[i__19778__auto___36316]));

var G__36317 = (i__19778__auto___36316 + (1));
i__19778__auto___36316 = G__36317;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return enfocus.core.en_set_prop.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

enfocus.core.en_set_prop.cljs$core$IFn$_invoke$arity$variadic = (function (forms){
return enfocus.core.chainable_standard.call(null,(function (node){
var h = cljs.core.mapcat.call(null,(function (p__36313){
var vec__36314 = p__36313;
var n = cljs.core.nth.call(null,vec__36314,(0),null);
var v = cljs.core.nth.call(null,vec__36314,(1),null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,(2),forms));
return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
}));
});

enfocus.core.en_set_prop.cljs$lang$maxFixedArity = (0);

enfocus.core.en_set_prop.cljs$lang$applyTo = (function (seq36312){
return enfocus.core.en_set_prop.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36312));
});
/**
 * returns true if the element has a given class
 */
enfocus.core.has_class = (function enfocus$core$has_class(el,cls){
return goog.dom.classes.hasClass(el,cls);
});
/**
 * Adds the specified classes to the selected element.
 */
enfocus.core.en_add_class = (function enfocus$core$en_add_class(var_args){
var args__19784__auto__ = [];
var len__19777__auto___36324 = arguments.length;
var i__19778__auto___36325 = (0);
while(true){
if((i__19778__auto___36325 < len__19777__auto___36324)){
args__19784__auto__.push((arguments[i__19778__auto___36325]));

var G__36326 = (i__19778__auto___36325 + (1));
i__19778__auto___36325 = G__36326;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return enfocus.core.en_add_class.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

enfocus.core.en_add_class.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.domina_chain.call(null,(function (p1__36318_SHARP_){
var seq__36320 = cljs.core.seq.call(null,values);
var chunk__36321 = null;
var count__36322 = (0);
var i__36323 = (0);
while(true){
if((i__36323 < count__36322)){
var val = cljs.core._nth.call(null,chunk__36321,i__36323);
domina.add_class_BANG_.call(null,p1__36318_SHARP_,val);

var G__36327 = seq__36320;
var G__36328 = chunk__36321;
var G__36329 = count__36322;
var G__36330 = (i__36323 + (1));
seq__36320 = G__36327;
chunk__36321 = G__36328;
count__36322 = G__36329;
i__36323 = G__36330;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__36320);
if(temp__4425__auto__){
var seq__36320__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36320__$1)){
var c__19522__auto__ = cljs.core.chunk_first.call(null,seq__36320__$1);
var G__36331 = cljs.core.chunk_rest.call(null,seq__36320__$1);
var G__36332 = c__19522__auto__;
var G__36333 = cljs.core.count.call(null,c__19522__auto__);
var G__36334 = (0);
seq__36320 = G__36331;
chunk__36321 = G__36332;
count__36322 = G__36333;
i__36323 = G__36334;
continue;
} else {
var val = cljs.core.first.call(null,seq__36320__$1);
domina.add_class_BANG_.call(null,p1__36318_SHARP_,val);

var G__36335 = cljs.core.next.call(null,seq__36320__$1);
var G__36336 = null;
var G__36337 = (0);
var G__36338 = (0);
seq__36320 = G__36335;
chunk__36321 = G__36336;
count__36322 = G__36337;
i__36323 = G__36338;
continue;
}
} else {
return null;
}
}
break;
}
}));
});

enfocus.core.en_add_class.cljs$lang$maxFixedArity = (0);

enfocus.core.en_add_class.cljs$lang$applyTo = (function (seq36319){
return enfocus.core.en_add_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36319));
});
/**
 * Removes the specified classes from the selected element.
 */
enfocus.core.en_remove_class = (function enfocus$core$en_remove_class(var_args){
var args__19784__auto__ = [];
var len__19777__auto___36345 = arguments.length;
var i__19778__auto___36346 = (0);
while(true){
if((i__19778__auto___36346 < len__19777__auto___36345)){
args__19784__auto__.push((arguments[i__19778__auto___36346]));

var G__36347 = (i__19778__auto___36346 + (1));
i__19778__auto___36346 = G__36347;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return enfocus.core.en_remove_class.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

enfocus.core.en_remove_class.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.domina_chain.call(null,(function (p1__36339_SHARP_){
var seq__36341 = cljs.core.seq.call(null,values);
var chunk__36342 = null;
var count__36343 = (0);
var i__36344 = (0);
while(true){
if((i__36344 < count__36343)){
var val = cljs.core._nth.call(null,chunk__36342,i__36344);
domina.remove_class_BANG_.call(null,p1__36339_SHARP_,val);

var G__36348 = seq__36341;
var G__36349 = chunk__36342;
var G__36350 = count__36343;
var G__36351 = (i__36344 + (1));
seq__36341 = G__36348;
chunk__36342 = G__36349;
count__36343 = G__36350;
i__36344 = G__36351;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__36341);
if(temp__4425__auto__){
var seq__36341__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36341__$1)){
var c__19522__auto__ = cljs.core.chunk_first.call(null,seq__36341__$1);
var G__36352 = cljs.core.chunk_rest.call(null,seq__36341__$1);
var G__36353 = c__19522__auto__;
var G__36354 = cljs.core.count.call(null,c__19522__auto__);
var G__36355 = (0);
seq__36341 = G__36352;
chunk__36342 = G__36353;
count__36343 = G__36354;
i__36344 = G__36355;
continue;
} else {
var val = cljs.core.first.call(null,seq__36341__$1);
domina.remove_class_BANG_.call(null,p1__36339_SHARP_,val);

var G__36356 = cljs.core.next.call(null,seq__36341__$1);
var G__36357 = null;
var G__36358 = (0);
var G__36359 = (0);
seq__36341 = G__36356;
chunk__36342 = G__36357;
count__36343 = G__36358;
i__36344 = G__36359;
continue;
}
} else {
return null;
}
}
break;
}
}));
});

enfocus.core.en_remove_class.cljs$lang$maxFixedArity = (0);

enfocus.core.en_remove_class.cljs$lang$applyTo = (function (seq36340){
return enfocus.core.en_remove_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36340));
});
/**
 * Sets the specified classes on the selected element
 */
enfocus.core.en_set_class = (function enfocus$core$en_set_class(var_args){
var args__19784__auto__ = [];
var len__19777__auto___36362 = arguments.length;
var i__19778__auto___36363 = (0);
while(true){
if((i__19778__auto___36363 < len__19777__auto___36362)){
args__19784__auto__.push((arguments[i__19778__auto___36363]));

var G__36364 = (i__19778__auto___36363 + (1));
i__19778__auto___36363 = G__36364;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return enfocus.core.en_set_class.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

enfocus.core.en_set_class.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.domina_chain.call(null,(function (p1__36360_SHARP_){
return domina.set_classes_BANG_.call(null,p1__36360_SHARP_,values);
}));
});

enfocus.core.en_set_class.cljs$lang$maxFixedArity = (0);

enfocus.core.en_set_class.cljs$lang$applyTo = (function (seq36361){
return enfocus.core.en_set_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36361));
});
enfocus.core.en_do__GT_ = (function enfocus$core$en_do__GT_(var_args){
var args__19784__auto__ = [];
var len__19777__auto___36370 = arguments.length;
var i__19778__auto___36371 = (0);
while(true){
if((i__19778__auto___36371 < len__19777__auto___36370)){
args__19784__auto__.push((arguments[i__19778__auto___36371]));

var G__36372 = (i__19778__auto___36371 + (1));
i__19778__auto___36371 = G__36372;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return enfocus.core.en_do__GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

enfocus.core.en_do__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (forms){

return enfocus.core.chainable_standard.call(null,(function (pnod){
var seq__36366 = cljs.core.seq.call(null,forms);
var chunk__36367 = null;
var count__36368 = (0);
var i__36369 = (0);
while(true){
if((i__36369 < count__36368)){
var fun = cljs.core._nth.call(null,chunk__36367,i__36369);
fun.call(null,pnod);

var G__36373 = seq__36366;
var G__36374 = chunk__36367;
var G__36375 = count__36368;
var G__36376 = (i__36369 + (1));
seq__36366 = G__36373;
chunk__36367 = G__36374;
count__36368 = G__36375;
i__36369 = G__36376;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__36366);
if(temp__4425__auto__){
var seq__36366__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36366__$1)){
var c__19522__auto__ = cljs.core.chunk_first.call(null,seq__36366__$1);
var G__36377 = cljs.core.chunk_rest.call(null,seq__36366__$1);
var G__36378 = c__19522__auto__;
var G__36379 = cljs.core.count.call(null,c__19522__auto__);
var G__36380 = (0);
seq__36366 = G__36377;
chunk__36367 = G__36378;
count__36368 = G__36379;
i__36369 = G__36380;
continue;
} else {
var fun = cljs.core.first.call(null,seq__36366__$1);
fun.call(null,pnod);

var G__36381 = cljs.core.next.call(null,seq__36366__$1);
var G__36382 = null;
var G__36383 = (0);
var G__36384 = (0);
seq__36366 = G__36381;
chunk__36367 = G__36382;
count__36368 = G__36383;
i__36369 = G__36384;
continue;
}
} else {
return null;
}
}
break;
}
}));
});

enfocus.core.en_do__GT_.cljs$lang$maxFixedArity = (0);

enfocus.core.en_do__GT_.cljs$lang$applyTo = (function (seq36365){
return enfocus.core.en_do__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36365));
});
/**
 * Appends the content of the element. Values can be nodes or collection of nodes.
 */
enfocus.core.en_append = (function enfocus$core$en_append(var_args){
var args__19784__auto__ = [];
var len__19777__auto___36388 = arguments.length;
var i__19778__auto___36389 = (0);
while(true){
if((i__19778__auto___36389 < len__19777__auto___36388)){
args__19784__auto__.push((arguments[i__19778__auto___36389]));

var G__36390 = (i__19778__auto___36389 + (1));
i__19778__auto___36389 = G__36390;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return enfocus.core.en_append.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

enfocus.core.en_append.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.domina_chain.call(null,values,(function (p1__36385_SHARP_,p2__36386_SHARP_){
return domina.append_BANG_.call(null,p1__36385_SHARP_,p2__36386_SHARP_);
}));
});

enfocus.core.en_append.cljs$lang$maxFixedArity = (0);

enfocus.core.en_append.cljs$lang$applyTo = (function (seq36387){
return enfocus.core.en_append.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36387));
});
/**
 * Prepends the content of the element. Values can be nodes or collection of nodes.
 */
enfocus.core.en_prepend = (function enfocus$core$en_prepend(var_args){
var args__19784__auto__ = [];
var len__19777__auto___36394 = arguments.length;
var i__19778__auto___36395 = (0);
while(true){
if((i__19778__auto___36395 < len__19777__auto___36394)){
args__19784__auto__.push((arguments[i__19778__auto___36395]));

var G__36396 = (i__19778__auto___36395 + (1));
i__19778__auto___36395 = G__36396;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return enfocus.core.en_prepend.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

enfocus.core.en_prepend.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.domina_chain.call(null,values,(function (p1__36391_SHARP_,p2__36392_SHARP_){
return domina.prepend_BANG_.call(null,p1__36391_SHARP_,p2__36392_SHARP_);
}));
});

enfocus.core.en_prepend.cljs$lang$maxFixedArity = (0);

enfocus.core.en_prepend.cljs$lang$applyTo = (function (seq36393){
return enfocus.core.en_prepend.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36393));
});
/**
 * inserts the content before the selected node. Values can be nodes or collection of nodes
 */
enfocus.core.en_before = (function enfocus$core$en_before(var_args){
var args__19784__auto__ = [];
var len__19777__auto___36400 = arguments.length;
var i__19778__auto___36401 = (0);
while(true){
if((i__19778__auto___36401 < len__19777__auto___36400)){
args__19784__auto__.push((arguments[i__19778__auto___36401]));

var G__36402 = (i__19778__auto___36401 + (1));
i__19778__auto___36401 = G__36402;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return enfocus.core.en_before.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

enfocus.core.en_before.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.domina_chain.call(null,values,(function (p1__36397_SHARP_,p2__36398_SHARP_){
return domina.insert_before_BANG_.call(null,p1__36397_SHARP_,p2__36398_SHARP_);
}));
});

enfocus.core.en_before.cljs$lang$maxFixedArity = (0);

enfocus.core.en_before.cljs$lang$applyTo = (function (seq36399){
return enfocus.core.en_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36399));
});
/**
 * inserts the content after the selected node. Values can be nodes or collection of nodes
 */
enfocus.core.en_after = (function enfocus$core$en_after(var_args){
var args__19784__auto__ = [];
var len__19777__auto___36406 = arguments.length;
var i__19778__auto___36407 = (0);
while(true){
if((i__19778__auto___36407 < len__19777__auto___36406)){
args__19784__auto__.push((arguments[i__19778__auto___36407]));

var G__36408 = (i__19778__auto___36407 + (1));
i__19778__auto___36407 = G__36408;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return enfocus.core.en_after.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

enfocus.core.en_after.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.domina_chain.call(null,values,(function (p1__36403_SHARP_,p2__36404_SHARP_){
return domina.insert_after_BANG_.call(null,p1__36403_SHARP_,p2__36404_SHARP_);
}));
});

enfocus.core.en_after.cljs$lang$maxFixedArity = (0);

enfocus.core.en_after.cljs$lang$applyTo = (function (seq36405){
return enfocus.core.en_after.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36405));
});
/**
 * substitutes the content for the selected node. Values can be nodes or collection of nodes
 */
enfocus.core.en_substitute = (function enfocus$core$en_substitute(var_args){
var args__19784__auto__ = [];
var len__19777__auto___36412 = arguments.length;
var i__19778__auto___36413 = (0);
while(true){
if((i__19778__auto___36413 < len__19777__auto___36412)){
args__19784__auto__.push((arguments[i__19778__auto___36413]));

var G__36414 = (i__19778__auto___36413 + (1));
i__19778__auto___36413 = G__36414;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return enfocus.core.en_substitute.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

enfocus.core.en_substitute.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.domina_chain.call(null,values,(function (p1__36409_SHARP_,p2__36410_SHARP_){
return domina.swap_content_BANG_.call(null,p1__36409_SHARP_,p2__36410_SHARP_);
}));
});

enfocus.core.en_substitute.cljs$lang$maxFixedArity = (0);

enfocus.core.en_substitute.cljs$lang$applyTo = (function (seq36411){
return enfocus.core.en_substitute.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36411));
});
/**
 * removes the selected nodes from the dom
 */
enfocus.core.en_remove_node = (function enfocus$core$en_remove_node(){
return enfocus.core.domina_chain.call(null,(function (p1__36415_SHARP_){
return domina.detach_BANG_.call(null,p1__36415_SHARP_);
}));
});
/**
 * wrap and element in a new element defined as :div {:class 'temp'}
 */
enfocus.core.en_wrap = (function enfocus$core$en_wrap(elm,mattr){
return enfocus.core.chainable_standard.call(null,(function (pnod){
var elem = goog.dom.createElement(cljs.core.name.call(null,elm));
enfocus.core.add_map_attrs.call(null,elem,mattr);

enfocus.core.at.call(null,elem,enfocus.core.en_content.call(null,pnod.cloneNode(true)));

return enfocus.core.at.call(null,pnod,enfocus.core.en_do__GT_.call(null,enfocus.core.en_after.call(null,elem),enfocus.core.en_remove_node.call(null)));
}));
});
/**
 * replaces a node with all its children
 */
enfocus.core.en_unwrap = (function enfocus$core$en_unwrap(){
return enfocus.core.chainable_standard.call(null,(function (pnod){
var frag = document.createDocumentFragment();
goog.dom.append(frag,pnod.childNodes);

return goog.dom.replaceNode(frag,pnod);
}));
});
/**
 * set a list of style elements from the selected nodes
 */
enfocus.core.en_set_style = (function enfocus$core$en_set_style(var_args){
var args__19784__auto__ = [];
var len__19777__auto___36424 = arguments.length;
var i__19778__auto___36425 = (0);
while(true){
if((i__19778__auto___36425 < len__19777__auto___36424)){
args__19784__auto__.push((arguments[i__19778__auto___36425]));

var G__36426 = (i__19778__auto___36425 + (1));
i__19778__auto___36425 = G__36426;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return enfocus.core.en_set_style.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

enfocus.core.en_set_style.cljs$core$IFn$_invoke$arity$variadic = (function (values){
var pairs = cljs.core.partition.call(null,(2),values);
return enfocus.core.domina_chain.call(null,((function (pairs){
return (function (p1__36416_SHARP_){
var seq__36418 = cljs.core.seq.call(null,pairs);
var chunk__36419 = null;
var count__36420 = (0);
var i__36421 = (0);
while(true){
if((i__36421 < count__36420)){
var vec__36422 = cljs.core._nth.call(null,chunk__36419,i__36421);
var name = cljs.core.nth.call(null,vec__36422,(0),null);
var value = cljs.core.nth.call(null,vec__36422,(1),null);
domina.set_style_BANG_.call(null,p1__36416_SHARP_,name,value);

var G__36427 = seq__36418;
var G__36428 = chunk__36419;
var G__36429 = count__36420;
var G__36430 = (i__36421 + (1));
seq__36418 = G__36427;
chunk__36419 = G__36428;
count__36420 = G__36429;
i__36421 = G__36430;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__36418);
if(temp__4425__auto__){
var seq__36418__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36418__$1)){
var c__19522__auto__ = cljs.core.chunk_first.call(null,seq__36418__$1);
var G__36431 = cljs.core.chunk_rest.call(null,seq__36418__$1);
var G__36432 = c__19522__auto__;
var G__36433 = cljs.core.count.call(null,c__19522__auto__);
var G__36434 = (0);
seq__36418 = G__36431;
chunk__36419 = G__36432;
count__36420 = G__36433;
i__36421 = G__36434;
continue;
} else {
var vec__36423 = cljs.core.first.call(null,seq__36418__$1);
var name = cljs.core.nth.call(null,vec__36423,(0),null);
var value = cljs.core.nth.call(null,vec__36423,(1),null);
domina.set_style_BANG_.call(null,p1__36416_SHARP_,name,value);

var G__36435 = cljs.core.next.call(null,seq__36418__$1);
var G__36436 = null;
var G__36437 = (0);
var G__36438 = (0);
seq__36418 = G__36435;
chunk__36419 = G__36436;
count__36420 = G__36437;
i__36421 = G__36438;
continue;
}
} else {
return null;
}
}
break;
}
});})(pairs))
);
});

enfocus.core.en_set_style.cljs$lang$maxFixedArity = (0);

enfocus.core.en_set_style.cljs$lang$applyTo = (function (seq36417){
return enfocus.core.en_set_style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36417));
});
/**
 * remove a list style elements from the selected nodes. note: you can only remove styles that are inline
 */
enfocus.core.en_remove_style = (function enfocus$core$en_remove_style(var_args){
var args__19784__auto__ = [];
var len__19777__auto___36440 = arguments.length;
var i__19778__auto___36441 = (0);
while(true){
if((i__19778__auto___36441 < len__19777__auto___36440)){
args__19784__auto__.push((arguments[i__19778__auto___36441]));

var G__36442 = (i__19778__auto___36441 + (1));
i__19778__auto___36441 = G__36442;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return enfocus.core.en_remove_style.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

enfocus.core.en_remove_style.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.chainable_standard.call(null,(function (pnod){
return enfocus.core.style_remove.call(null,pnod,values);
}));
});

enfocus.core.en_remove_style.cljs$lang$maxFixedArity = (0);

enfocus.core.en_remove_style.cljs$lang$applyTo = (function (seq36439){
return enfocus.core.en_remove_style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36439));
});
/**
 * calls the focus function on the selected node
 */
enfocus.core.en_focus = (function enfocus$core$en_focus(){
return enfocus.core.chainable_standard.call(null,(function (node){
return node.focus();
}));
});
/**
 * calls the blur function on the selected node
 */
enfocus.core.en_blur = (function enfocus$core$en_blur(){
return enfocus.core.chainable_standard.call(null,(function (node){
return node.blur();
}));
});
/**
 * addes key value pair of data to the selected nodes. Only use clojure data structures when setting
 */
enfocus.core.en_set_data = (function enfocus$core$en_set_data(ky,val){
return enfocus.core.domina_chain.call(null,(function (p1__36443_SHARP_){
return domina.set_data_BANG_.call(null,p1__36443_SHARP_,ky,val);
}));
});
enfocus.core.view_port_monitor = cljs.core.atom.call(null,null);
/**
 * needed to support window :resize
 */
enfocus.core.get_vp_monitor = (function enfocus$core$get_vp_monitor(){
if(cljs.core.truth_(cljs.core.deref.call(null,enfocus.core.view_port_monitor))){
return cljs.core.deref.call(null,enfocus.core.view_port_monitor);
} else {
cljs.core.swap_BANG_.call(null,enfocus.core.view_port_monitor,(function (){
return (new goog.dom.ViewportSizeMonitor());
}));

return cljs.core.deref.call(null,enfocus.core.view_port_monitor);
}
});
enfocus.core.gen_enter_leave_wrapper = (function enfocus$core$gen_enter_leave_wrapper(event){
var obj = (new Object());
obj.listen = ((function (obj){
return (function (elm,func,opt_cap,opt_scope,opt_handler){
var callback = enfocus.core.mouse_enter_leave.call(null,func);
callback.listen = func;

callback.scope = opt_scope;

if(cljs.core.truth_(opt_handler)){
return opt_handler.listen(elm,cljs.core.name.call(null,event),callback);
} else {
return goog.events.listen(elm,cljs.core.name.call(null,event),callback);
}
});})(obj))
;

obj.unlisten = ((function (obj){
return (function (elm,func,opt_cap,opt_scope,opt_handler){
var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);
var seq__36448_36452 = cljs.core.seq.call(null,listeners);
var chunk__36449_36453 = null;
var count__36450_36454 = (0);
var i__36451_36455 = (0);
while(true){
if((i__36451_36455 < count__36450_36454)){
var obj_36456__$1 = cljs.core._nth.call(null,chunk__36449_36453,i__36451_36455);
var listener_36457 = obj_36456__$1.listener;
if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_36457.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_36457.scope,opt_scope)))){
if(cljs.core.truth_(opt_handler)){
opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_36457);
} else {
goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_36457);
}
} else {
}

var G__36458 = seq__36448_36452;
var G__36459 = chunk__36449_36453;
var G__36460 = count__36450_36454;
var G__36461 = (i__36451_36455 + (1));
seq__36448_36452 = G__36458;
chunk__36449_36453 = G__36459;
count__36450_36454 = G__36460;
i__36451_36455 = G__36461;
continue;
} else {
var temp__4425__auto___36462 = cljs.core.seq.call(null,seq__36448_36452);
if(temp__4425__auto___36462){
var seq__36448_36463__$1 = temp__4425__auto___36462;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36448_36463__$1)){
var c__19522__auto___36464 = cljs.core.chunk_first.call(null,seq__36448_36463__$1);
var G__36465 = cljs.core.chunk_rest.call(null,seq__36448_36463__$1);
var G__36466 = c__19522__auto___36464;
var G__36467 = cljs.core.count.call(null,c__19522__auto___36464);
var G__36468 = (0);
seq__36448_36452 = G__36465;
chunk__36449_36453 = G__36466;
count__36450_36454 = G__36467;
i__36451_36455 = G__36468;
continue;
} else {
var obj_36469__$1 = cljs.core.first.call(null,seq__36448_36463__$1);
var listener_36470 = obj_36469__$1.listener;
if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_36470.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_36470.scope,opt_scope)))){
if(cljs.core.truth_(opt_handler)){
opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_36470);
} else {
goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_36470);
}
} else {
}

var G__36471 = cljs.core.next.call(null,seq__36448_36463__$1);
var G__36472 = null;
var G__36473 = (0);
var G__36474 = (0);
seq__36448_36452 = G__36471;
chunk__36449_36453 = G__36472;
count__36450_36454 = G__36473;
i__36451_36455 = G__36474;
continue;
}
} else {
}
}
break;
}

return listeners;
});})(obj))
;

return obj;
});
enfocus.core.wrapper_register = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),enfocus.core.gen_enter_leave_wrapper.call(null,new cljs.core.Keyword(null,"mouseover","mouseover",-484272303)),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),enfocus.core.gen_enter_leave_wrapper.call(null,new cljs.core.Keyword(null,"mouseout","mouseout",2049446890))], null);
/**
 * adding an event to the selected nodes
 */
enfocus.core.en_listen = (function enfocus$core$en_listen(event,func){
var wrapper = enfocus.core.wrapper_register.call(null,event);
return enfocus.core.chainable_standard.call(null,((function (wrapper){
return (function (pnod){
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"resize","resize",297367086),event)) && ((window === pnod))){
return goog.events.listen(enfocus.core.get_vp_monitor.call(null),"resize",func);
} else {
if((wrapper == null)){
return goog.events.listen(pnod,cljs.core.name.call(null,event),func);
} else {
return goog.events.listenWithWrapper(pnod,wrapper,func);
}
}
});})(wrapper))
);
});
/**
 * removing all listeners of a given event type from the selected nodes
 */
enfocus.core.en_remove_listeners = (function enfocus$core$en_remove_listeners(var_args){
var args__19784__auto__ = [];
var len__19777__auto___36481 = arguments.length;
var i__19778__auto___36482 = (0);
while(true){
if((i__19778__auto___36482 < len__19777__auto___36481)){
args__19784__auto__.push((arguments[i__19778__auto___36482]));

var G__36483 = (i__19778__auto___36482 + (1));
i__19778__auto___36482 = G__36483;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return enfocus.core.en_remove_listeners.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

enfocus.core.en_remove_listeners.cljs$core$IFn$_invoke$arity$variadic = (function (event_list){
var get_name = (function (p1__36475_SHARP_){
return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__36475_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560)))?new cljs.core.Keyword(null,"mouseover","mouseover",-484272303):((cljs.core._EQ_.call(null,p1__36475_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580)))?new cljs.core.Keyword(null,"mouseout","mouseout",2049446890):p1__36475_SHARP_
)));
});
return enfocus.core.chainable_standard.call(null,((function (get_name){
return (function (pnod){
var seq__36477 = cljs.core.seq.call(null,event_list);
var chunk__36478 = null;
var count__36479 = (0);
var i__36480 = (0);
while(true){
if((i__36480 < count__36479)){
var ev = cljs.core._nth.call(null,chunk__36478,i__36480);
goog.events.removeAll(pnod,get_name.call(null,ev));

var G__36484 = seq__36477;
var G__36485 = chunk__36478;
var G__36486 = count__36479;
var G__36487 = (i__36480 + (1));
seq__36477 = G__36484;
chunk__36478 = G__36485;
count__36479 = G__36486;
i__36480 = G__36487;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__36477);
if(temp__4425__auto__){
var seq__36477__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36477__$1)){
var c__19522__auto__ = cljs.core.chunk_first.call(null,seq__36477__$1);
var G__36488 = cljs.core.chunk_rest.call(null,seq__36477__$1);
var G__36489 = c__19522__auto__;
var G__36490 = cljs.core.count.call(null,c__19522__auto__);
var G__36491 = (0);
seq__36477 = G__36488;
chunk__36478 = G__36489;
count__36479 = G__36490;
i__36480 = G__36491;
continue;
} else {
var ev = cljs.core.first.call(null,seq__36477__$1);
goog.events.removeAll(pnod,get_name.call(null,ev));

var G__36492 = cljs.core.next.call(null,seq__36477__$1);
var G__36493 = null;
var G__36494 = (0);
var G__36495 = (0);
seq__36477 = G__36492;
chunk__36478 = G__36493;
count__36479 = G__36494;
i__36480 = G__36495;
continue;
}
} else {
return null;
}
}
break;
}
});})(get_name))
);
});

enfocus.core.en_remove_listeners.cljs$lang$maxFixedArity = (0);

enfocus.core.en_remove_listeners.cljs$lang$applyTo = (function (seq36476){
return enfocus.core.en_remove_listeners.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36476));
});
/**
 * removing a specific event from the selected nodes
 */
enfocus.core.en_unlisten = (function enfocus$core$en_unlisten(var_args){
var args36496 = [];
var len__19777__auto___36499 = arguments.length;
var i__19778__auto___36500 = (0);
while(true){
if((i__19778__auto___36500 < len__19777__auto___36499)){
args36496.push((arguments[i__19778__auto___36500]));

var G__36501 = (i__19778__auto___36500 + (1));
i__19778__auto___36500 = G__36501;
continue;
} else {
}
break;
}

var G__36498 = args36496.length;
switch (G__36498) {
case 1:
return enfocus.core.en_unlisten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.core.en_unlisten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36496.length)].join('')));

}
});

enfocus.core.en_unlisten.cljs$core$IFn$_invoke$arity$1 = (function (event){
return enfocus.core.en_remove_listeners.call(null,event);
});

enfocus.core.en_unlisten.cljs$core$IFn$_invoke$arity$2 = (function (event,func){
var wrapper = enfocus.core.wrapper_register.call(null,event);
return enfocus.core.chainable_standard.call(null,((function (wrapper){
return (function (pnod){
if((wrapper == null)){
return goog.events.unlisten(pnod,cljs.core.name.call(null,event),func);
} else {
return goog.events.unlistenWithWrapper(pnod,wrapper,func);
}
});})(wrapper))
);
});

enfocus.core.en_unlisten.cljs$lang$maxFixedArity = 2;
/**
 * fade the selected nodes over a set of steps
 */
enfocus.core.en_fade_out = (function enfocus$core$en_fade_out(ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var anim = (new goog.fx.dom.FadeOut(pnod,ttime,accel));
if(cljs.core.truth_(pcallback)){
goog.events.listen(anim,goog.fx.Animation.EventType.END,pcallback);
} else {
}

return anim.play();
}),callback);
});
/**
 * fade the selected nodes over a set of steps
 */
enfocus.core.en_fade_in = (function enfocus$core$en_fade_in(ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var anim = (new goog.fx.dom.FadeIn(pnod,ttime,accel));
if(cljs.core.truth_(pcallback)){
goog.events.listen(anim,goog.fx.Animation.EventType.END,pcallback);
} else {
}

return anim.play();
}),callback);
});
/**
 * resizes the selected elements to a width and height in px optional time series data
 */
enfocus.core.en_resize = (function enfocus$core$en_resize(wth,hgt,ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var csize = goog.style.getContentBoxSize(pnod);
var start = [csize.width,csize.height];
var wth__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"curwidth","curwidth",1831107733),wth))?csize.width:wth);
var hgt__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"curheight","curheight",-119931765),hgt))?csize.height:hgt);
var end = [wth__$1,hgt__$1];
var anim = (new goog.fx.dom.Resize(pnod,start,end,ttime,accel));
if(cljs.core.truth_(pcallback)){
goog.events.listen(anim,goog.fx.Animation.EventType.END,pcallback);
} else {
}

return anim.play();
}),callback);
});
/**
 * moves the selected elements to a x and y in px optional time series data 
 */
enfocus.core.en_move = (function enfocus$core$en_move(xpos,ypos,ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var cpos = goog.style.getPosition(pnod);
var start = [cpos.x,cpos.y];
var xpos__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"curx","curx",-1922579418),xpos))?cpos.x:xpos);
var ypos__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cury","cury",-230854218),ypos))?cpos.y:ypos);
var end = [xpos__$1,ypos__$1];
var anim = (new goog.fx.dom.Slide(pnod,start,end,ttime,accel));
if(cljs.core.truth_(pcallback)){
goog.events.listen(anim,goog.fx.Animation.EventType.END,pcallback);
} else {
}

return anim.play();
}),callback);
});
/**
 * scrolls selected elements to a x and y in px optional time series data
 */
enfocus.core.en_scroll = (function enfocus$core$en_scroll(xpos,ypos,ttime,callback,accel){
return ef.chainable_effect.call(null,(function (pnod,pcallback){
var start = [pnod.scrollLeft,pnod.scrollTop];
var xpos__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"curx","curx",-1922579418),xpos))?pnod.scrollLeft:xpos);
var ypos__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cury","cury",-230854218),ypos))?pnod.scrollTop:ypos);
var end = [xpos__$1,ypos__$1];
var anim = (new goog.fx.dom.Scroll(pnod,start,end,ttime,accel));
util.log.call(null,[cljs.core.str(start)].join(''),[cljs.core.str(end)].join(''));

if(cljs.core.truth_(pcallback)){
goog.events.listen(anim,goog.fx.Animation.EventType.END,pcallback);
} else {
}

return anim.play();
}),callback);
});
/**
 * returns the attribute on the selected element or elements.
 * in cases where more than one element is selected you will
 * receive a list of values
 */
enfocus.core.en_get_attr = (function enfocus$core$en_get_attr(attr){
return enfocus.core.extr_multi_node.call(null,(function (pnod){
return pnod.getAttribute(cljs.core.name.call(null,attr));
}));
});
/**
 * returns the attribute on the selected element or elements.
 * in cases where more than one element is selected you will
 * receive a list of values
 */
enfocus.core.en_get_text = (function enfocus$core$en_get_text(){
return enfocus.core.extr_multi_node.call(null,(function (pnod){
return goog.dom.getTextContent(pnod);
}));
});
/**
 * returns the data on a selected node for a given key. If bubble is set will look at parent
 */
enfocus.core.en_get_data = (function enfocus$core$en_get_data(var_args){
var args36503 = [];
var len__19777__auto___36506 = arguments.length;
var i__19778__auto___36507 = (0);
while(true){
if((i__19778__auto___36507 < len__19777__auto___36506)){
args36503.push((arguments[i__19778__auto___36507]));

var G__36508 = (i__19778__auto___36507 + (1));
i__19778__auto___36507 = G__36508;
continue;
} else {
}
break;
}

var G__36505 = args36503.length;
switch (G__36505) {
case 1:
return enfocus.core.en_get_data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.core.en_get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36503.length)].join('')));

}
});

enfocus.core.en_get_data.cljs$core$IFn$_invoke$arity$1 = (function (ky){
return enfocus.core.en_get_data.call(null,ky,false);
});

enfocus.core.en_get_data.cljs$core$IFn$_invoke$arity$2 = (function (ky,bubble){
return enfocus.core.extr_multi_node.call(null,(function (node){
return domina.get_data.call(null,ky,bubble);
}));
});

enfocus.core.en_get_data.cljs$lang$maxFixedArity = 2;
enfocus.core.reg_filt = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * filter allows you to apply function to futhur scope down what is returned by a selector
 */
enfocus.core.en_filter = (function enfocus$core$en_filter(tst,trans){
return (function() {
var enfocus$core$en_filter_$_filt = null;
var enfocus$core$en_filter_$_filt__1 = (function (pnodes){
return enfocus$core$en_filter_$_filt.call(null,pnodes,null);
});
var enfocus$core$en_filter_$_filt__2 = (function (pnodes,chain){
var pnod_col = enfocus.core.nodes__GT_coll.call(null,pnodes);
var ttest = (((tst instanceof cljs.core.Keyword))?cljs.core.deref.call(null,enfocus.core.reg_filt).call(null,tst):tst);
var res = cljs.core.filter.call(null,ttest,pnod_col);
if((chain == null)){
return trans.call(null,res);
} else {
return trans.call(null,res,chain);
}
});
enfocus$core$en_filter_$_filt = function(pnodes,chain){
switch(arguments.length){
case 1:
return enfocus$core$en_filter_$_filt__1.call(this,pnodes);
case 2:
return enfocus$core$en_filter_$_filt__2.call(this,pnodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
enfocus$core$en_filter_$_filt.cljs$core$IFn$_invoke$arity$1 = enfocus$core$en_filter_$_filt__1;
enfocus$core$en_filter_$_filt.cljs$core$IFn$_invoke$arity$2 = enfocus$core$en_filter_$_filt__2;
return enfocus$core$en_filter_$_filt;
})()
});
/**
 * registers a filter for a given keyword
 */
enfocus.core.register_filter = (function enfocus$core$register_filter(ky,func){
return cljs.core.swap_BANG_.call(null,enfocus.core.reg_filt,cljs.core.assoc,ky,func);
});
/**
 * takes a list of options and returns the selected ones. 
 */
enfocus.core.selected_options = (function enfocus$core$selected_options(pnod){
return pnod.selected;
});
/**
 * takes a list of radio or checkboxes and returns the checked ones
 */
enfocus.core.checked_radio_checkbox = (function enfocus$core$checked_radio_checkbox(pnod){
return pnod.checked;
});
enfocus.core.register_filter.call(null,new cljs.core.Keyword(null,"selected","selected",574897764),enfocus.core.selected_options);
enfocus.core.register_filter.call(null,new cljs.core.Keyword(null,"checked","checked",-50955819),enfocus.core.checked_radio_checkbox);
/**
 * converts keywords, symbols and strings used in the enlive selector 
 * syntax to a string representing a standard css selector.  It also
 * applys id masking if mask provided
 */
enfocus.core.create_sel_str = (function enfocus$core$create_sel_str(var_args){
var args36511 = [];
var len__19777__auto___36514 = arguments.length;
var i__19778__auto___36515 = (0);
while(true){
if((i__19778__auto___36515 < len__19777__auto___36514)){
args36511.push((arguments[i__19778__auto___36515]));

var G__36516 = (i__19778__auto___36515 + (1));
i__19778__auto___36515 = G__36516;
continue;
} else {
}
break;
}

var G__36513 = args36511.length;
switch (G__36513) {
case 1:
return enfocus.core.create_sel_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.core.create_sel_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36511.length)].join('')));

}
});

enfocus.core.create_sel_str.cljs$core$IFn$_invoke$arity$1 = (function (css_sel){
return enfocus.core.create_sel_str.call(null,"",css_sel);
});

enfocus.core.create_sel_str.cljs$core$IFn$_invoke$arity$2 = (function (id_mask_sym,css_sel){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__36510_SHARP_){
if((p1__36510_SHARP_ instanceof cljs.core.Symbol)){
return enfocus.core.css_syms.call(null,p1__36510_SHARP_);
} else {
if((p1__36510_SHARP_ instanceof cljs.core.Keyword)){
return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__36510_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else {
if(cljs.core.vector_QMARK_.call(null,p1__36510_SHARP_)){
return enfocus.core.create_sel_str.call(null,p1__36510_SHARP_);
} else {
if(typeof p1__36510_SHARP_ === 'string'){
return p1__36510_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
} else {
return null;
}
}
}
}
}),css_sel));
});

enfocus.core.create_sel_str.cljs$lang$maxFixedArity = 2;
/**
 * takes either an enlive selector or a css3 selector and returns a set of nodes that match the selector
 */
enfocus.core.css_select = (function enfocus$core$css_select(var_args){
var args36518 = [];
var len__19777__auto___36521 = arguments.length;
var i__19778__auto___36522 = (0);
while(true){
if((i__19778__auto___36522 < len__19777__auto___36521)){
args36518.push((arguments[i__19778__auto___36522]));

var G__36523 = (i__19778__auto___36522 + (1));
i__19778__auto___36522 = G__36523;
continue;
} else {
}
break;
}

var G__36520 = args36518.length;
switch (G__36520) {
case 1:
return enfocus.core.css_select.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.core.css_select.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return enfocus.core.css_select.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36518.length)].join('')));

}
});

enfocus.core.css_select.cljs$core$IFn$_invoke$arity$1 = (function (css_sel){
return enfocus.core.css_select.call(null,"",document,css_sel);
});

enfocus.core.css_select.cljs$core$IFn$_invoke$arity$2 = (function (dom_node,css_sel){
return enfocus.core.css_select.call(null,"",dom_node,css_sel);
});

enfocus.core.css_select.cljs$core$IFn$_invoke$arity$3 = (function (id_mask_sym,dom_node,css_sel){
enfocus.core.log_debug.call(null,dom_node);

enfocus.core.log_debug.call(null,cljs.core.pr_str.call(null,css_sel));

var sel = clojure.string.trim.call(null,enfocus.enlive.syntax.convert.call(null,enfocus.core.create_sel_str.call(null,id_mask_sym,css_sel)));
var ret = domina.css.sel.call(null,dom_node,sel);
return ret;
});

enfocus.core.css_select.cljs$lang$maxFixedArity = 3;
enfocus.core.nil_t = (function enfocus$core$nil_t(func){
var or__18719__auto__ = func;
if(cljs.core.truth_(or__18719__auto__)){
return or__18719__auto__;
} else {
return enfocus.core.en_remove_node;
}
});
enfocus.core.i_at = (function enfocus$core$i_at(var_args){
var args__19784__auto__ = [];
var len__19777__auto___36534 = arguments.length;
var i__19778__auto___36535 = (0);
while(true){
if((i__19778__auto___36535 < len__19777__auto___36534)){
args__19784__auto__.push((arguments[i__19778__auto___36535]));

var G__36536 = (i__19778__auto___36535 + (1));
i__19778__auto___36535 = G__36536;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((2) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((2)),(0))):null);
return enfocus.core.i_at.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19785__auto__);
});

enfocus.core.i_at.cljs$core$IFn$_invoke$arity$variadic = (function (id_mask,node,trans){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,trans))){
return cljs.core.first.call(null,trans).call(null,node);
} else {
var seq__36528 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),trans));
var chunk__36529 = null;
var count__36530 = (0);
var i__36531 = (0);
while(true){
if((i__36531 < count__36530)){
var vec__36532 = cljs.core._nth.call(null,chunk__36529,i__36531);
var sel = cljs.core.nth.call(null,vec__36532,(0),null);
var t = cljs.core.nth.call(null,vec__36532,(1),null);
enfocus.core.nil_t.call(null,t).call(null,enfocus.core.select.call(null,sel,node,id_mask));

var G__36537 = seq__36528;
var G__36538 = chunk__36529;
var G__36539 = count__36530;
var G__36540 = (i__36531 + (1));
seq__36528 = G__36537;
chunk__36529 = G__36538;
count__36530 = G__36539;
i__36531 = G__36540;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__36528);
if(temp__4425__auto__){
var seq__36528__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36528__$1)){
var c__19522__auto__ = cljs.core.chunk_first.call(null,seq__36528__$1);
var G__36541 = cljs.core.chunk_rest.call(null,seq__36528__$1);
var G__36542 = c__19522__auto__;
var G__36543 = cljs.core.count.call(null,c__19522__auto__);
var G__36544 = (0);
seq__36528 = G__36541;
chunk__36529 = G__36542;
count__36530 = G__36543;
i__36531 = G__36544;
continue;
} else {
var vec__36533 = cljs.core.first.call(null,seq__36528__$1);
var sel = cljs.core.nth.call(null,vec__36533,(0),null);
var t = cljs.core.nth.call(null,vec__36533,(1),null);
enfocus.core.nil_t.call(null,t).call(null,enfocus.core.select.call(null,sel,node,id_mask));

var G__36545 = cljs.core.next.call(null,seq__36528__$1);
var G__36546 = null;
var G__36547 = (0);
var G__36548 = (0);
seq__36528 = G__36545;
chunk__36529 = G__36546;
count__36530 = G__36547;
i__36531 = G__36548;
continue;
}
} else {
return null;
}
}
break;
}
}
});

enfocus.core.i_at.cljs$lang$maxFixedArity = (2);

enfocus.core.i_at.cljs$lang$applyTo = (function (seq36525){
var G__36526 = cljs.core.first.call(null,seq36525);
var seq36525__$1 = cljs.core.next.call(null,seq36525);
var G__36527 = cljs.core.first.call(null,seq36525__$1);
var seq36525__$2 = cljs.core.next.call(null,seq36525__$1);
return enfocus.core.i_at.cljs$core$IFn$_invoke$arity$variadic(G__36526,G__36527,seq36525__$2);
});
enfocus.core.at = (function enfocus$core$at(var_args){
var args__19784__auto__ = [];
var len__19777__auto___36551 = arguments.length;
var i__19778__auto___36552 = (0);
while(true){
if((i__19778__auto___36552 < len__19777__auto___36551)){
args__19784__auto__.push((arguments[i__19778__auto___36552]));

var G__36553 = (i__19778__auto___36552 + (1));
i__19778__auto___36552 = G__36553;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((1) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((1)),(0))):null);
return enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19785__auto__);
});

enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic = (function (node,trans){
return cljs.core.apply.call(null,enfocus.core.i_at,"",node,trans);
});

enfocus.core.at.cljs$lang$maxFixedArity = (1);

enfocus.core.at.cljs$lang$applyTo = (function (seq36549){
var G__36550 = cljs.core.first.call(null,seq36549);
var seq36549__$1 = cljs.core.next.call(null,seq36549);
return enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(G__36550,seq36549__$1);
});
enfocus.core.from = (function enfocus$core$from(var_args){
var args__19784__auto__ = [];
var len__19777__auto___36558 = arguments.length;
var i__19778__auto___36559 = (0);
while(true){
if((i__19778__auto___36559 < len__19777__auto___36558)){
args__19784__auto__.push((arguments[i__19778__auto___36559]));

var G__36560 = (i__19778__auto___36559 + (1));
i__19778__auto___36559 = G__36560;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((1) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((1)),(0))):null);
return enfocus.core.from.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19785__auto__);
});

enfocus.core.from.cljs$core$IFn$_invoke$arity$variadic = (function (node,trans){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,trans))){
return cljs.core.first.call(null,trans).call(null,node);
} else {
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__36556){
var vec__36557 = p__36556;
var ky = cljs.core.nth.call(null,vec__36557,(0),null);
var sel = cljs.core.nth.call(null,vec__36557,(1),null);
var ext = cljs.core.nth.call(null,vec__36557,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,ext.call(null,enfocus.core.select.call(null,sel,node,""))], null);
}),cljs.core.partition.call(null,(3),trans)));
}
});

enfocus.core.from.cljs$lang$maxFixedArity = (1);

enfocus.core.from.cljs$lang$applyTo = (function (seq36554){
var G__36555 = cljs.core.first.call(null,seq36554);
var seq36554__$1 = cljs.core.next.call(null,seq36554);
return enfocus.core.from.cljs$core$IFn$_invoke$arity$variadic(G__36555,seq36554__$1);
});
enfocus.core.xpath = (function enfocus$core$xpath(path){
return (function (root,id_mask){
if(cljs.core.empty_QMARK_.call(null,id_mask)){
return domina.xpath.xpath.call(null,root,path);
} else {
var tmp = path.replace("@ID='",[cljs.core.str("@ID='"),cljs.core.str(id_mask)].join(''));
var mpath = path.replace("@id='",[cljs.core.str("@id='"),cljs.core.str(id_mask)].join(''));
return domina.xpath.xpath.call(null,root,mpath);
}
});
});
enfocus.core.this_node = (function enfocus$core$this_node(root,id_mask){
return root;
});
Text.prototype.domina$DomContent$ = true;

Text.prototype.domina$DomContent$nodes$arity$1 = (function (content){
var content__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content__$1], null);
});

Text.prototype.domina$DomContent$single_node$arity$1 = (function (content){
var content__$1 = this;
return content__$1;
});
(enfocus.core.ISelector["function"] = true);

(enfocus.core.select["function"] = (function (this$){
return enfocus.core.select.call(null,this$,document,"");
}));

(enfocus.core.select["function"] = (function (this$,root){
return enfocus.core.select.call(null,this$,root,"");
}));

(enfocus.core.select["function"] = (function (this$,root,id_mask){
return this$.call(null,root,id_mask);
}));

cljs.core.PersistentVector.prototype.enfocus$core$ISelector$ = true;

cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$1 = (function (this$){
var this$__$1 = this;
return enfocus.core.select.call(null,this$__$1,document,"");
});

cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$2 = (function (this$,root){
var this$__$1 = this;
return enfocus.core.select.call(null,this$__$1,root,"");
});

cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$3 = (function (this$,root,id_mask){
var this$__$1 = this;
return enfocus.core.css_select.call(null,id_mask,root,this$__$1);
});

String.prototype.enfocus$core$ISelector$ = true;

String.prototype.enfocus$core$ISelector$select$arity$1 = (function (this$){
var this$__$1 = this;
return enfocus.core.select.call(null,this$__$1,document,"");
});

String.prototype.enfocus$core$ISelector$select$arity$2 = (function (this$,root){
var this$__$1 = this;
return enfocus.core.select.call(null,this$__$1,root,"");
});

String.prototype.enfocus$core$ISelector$select$arity$3 = (function (this$,root,id_mask){
var this$__$1 = this;
return enfocus.core.css_select.call(null,id_mask,root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

//# sourceMappingURL=core.js.map?rel=1472153855516