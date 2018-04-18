// Compiled by ClojureScript 1.7.107 {}
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.style');
goog.require('clojure.string');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_36653 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_36654 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_36655 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_36655,opt_wrapper_36653,table_section_wrapper_36654,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_36653,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_36654,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_36654,cell_wrapper_36655,table_section_wrapper_36654,table_section_wrapper_36654]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__18707__auto__ = div.firstChild;
if(cljs.core.truth_(and__18707__auto__)){
return div.firstChild.childNodes;
} else {
return and__18707__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__36660 = cljs.core.seq.call(null,tbody);
var chunk__36661 = null;
var count__36662 = (0);
var i__36663 = (0);
while(true){
if((i__36663 < count__36662)){
var child = cljs.core._nth.call(null,chunk__36661,i__36663);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__36664 = seq__36660;
var G__36665 = chunk__36661;
var G__36666 = count__36662;
var G__36667 = (i__36663 + (1));
seq__36660 = G__36664;
chunk__36661 = G__36665;
count__36662 = G__36666;
i__36663 = G__36667;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__36660);
if(temp__4425__auto__){
var seq__36660__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36660__$1)){
var c__19522__auto__ = cljs.core.chunk_first.call(null,seq__36660__$1);
var G__36668 = cljs.core.chunk_rest.call(null,seq__36660__$1);
var G__36669 = c__19522__auto__;
var G__36670 = cljs.core.count.call(null,c__19522__auto__);
var G__36671 = (0);
seq__36660 = G__36668;
chunk__36661 = G__36669;
count__36662 = G__36670;
i__36663 = G__36671;
continue;
} else {
var child = cljs.core.first.call(null,seq__36660__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__36672 = cljs.core.next.call(null,seq__36660__$1);
var G__36673 = null;
var G__36674 = (0);
var G__36675 = (0);
seq__36660 = G__36672;
chunk__36661 = G__36673;
count__36662 = G__36674;
i__36663 = G__36675;
continue;
}
} else {
return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function domina$restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
 * takes an string of html and returns a NodeList of dom fragments
 */
domina.html_to_dom = (function domina$html_to_dom(html){
var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__36677 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__36677,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__36677,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__36677,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__36678 = wrapper.lastChild;
var G__36679 = (level - (1));
wrapper = G__36678;
level = G__36679;
continue;
} else {
return wrapper;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_)){
domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else {
}

if(cljs.core.truth_((function (){var and__18707__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__18707__auto__){
return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else {
return and__18707__auto__;
}
})())){
domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else {
}

return div.childNodes;
});
domina.string_to_dom = (function domina$string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s))){
return domina.html_to_dom.call(null,s);
} else {
return document.createTextNode(s);
}
});
domina.nodes;
domina.single_node;

/**
 * @interface
 */
domina.DomContent = function(){};

/**
 * Returns the content as a sequence of nodes.
 */
domina.nodes = (function domina$nodes(content){
if((!((content == null))) && (!((content.domina$DomContent$nodes$arity$1 == null)))){
return content.domina$DomContent$nodes$arity$1(content);
} else {
var x__19374__auto__ = (((content == null))?null:content);
var m__19375__auto__ = (domina.nodes[goog.typeOf(x__19374__auto__)]);
if(!((m__19375__auto__ == null))){
return m__19375__auto__.call(null,content);
} else {
var m__19375__auto____$1 = (domina.nodes["_"]);
if(!((m__19375__auto____$1 == null))){
return m__19375__auto____$1.call(null,content);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
}
});

/**
 * Returns the content as a single node (the first node, if the content contains more than one
 */
domina.single_node = (function domina$single_node(nodeseq){
if((!((nodeseq == null))) && (!((nodeseq.domina$DomContent$single_node$arity$1 == null)))){
return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else {
var x__19374__auto__ = (((nodeseq == null))?null:nodeseq);
var m__19375__auto__ = (domina.single_node[goog.typeOf(x__19374__auto__)]);
if(!((m__19375__auto__ == null))){
return m__19375__auto__.call(null,nodeseq);
} else {
var m__19375__auto____$1 = (domina.single_node["_"]);
if(!((m__19375__auto____$1 == null))){
return m__19375__auto____$1.call(null,nodeseq);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
}
});

domina._STAR_debug_STAR_ = true;
domina.log_debug = (function domina$log_debug(var_args){
var args__19784__auto__ = [];
var len__19777__auto___36681 = arguments.length;
var i__19778__auto___36682 = (0);
while(true){
if((i__19778__auto___36682 < len__19777__auto___36681)){
args__19784__auto__.push((arguments[i__19778__auto___36682]));

var G__36683 = (i__19778__auto___36682 + (1));
i__19778__auto___36682 = G__36683;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

domina.log_debug.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_((function (){var and__18707__auto__ = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__18707__auto__)){
return !(cljs.core._EQ_.call(null,window.console,undefined));
} else {
return and__18707__auto__;
}
})())){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log_debug.cljs$lang$maxFixedArity = (0);

domina.log_debug.cljs$lang$applyTo = (function (seq36680){
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36680));
});
domina.log = (function domina$log(var_args){
var args__19784__auto__ = [];
var len__19777__auto___36685 = arguments.length;
var i__19778__auto___36686 = (0);
while(true){
if((i__19778__auto___36686 < len__19777__auto___36685)){
args__19784__auto__.push((arguments[i__19778__auto___36686]));

var G__36687 = (i__19778__auto___36686 + (1));
i__19778__auto___36686 = G__36687;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return domina.log.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

domina.log.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log.cljs$lang$maxFixedArity = (0);

domina.log.cljs$lang$applyTo = (function (seq36684){
return domina.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36684));
});
/**
 * Returns content containing a single node by looking up the given ID
 */
domina.by_id = (function domina$by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
domina.normalize_seq;
/**
 * Returns content containing nodes which have the specified CSS class.
 */
domina.by_class = (function domina$by_class(class_name){
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
 * Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
 */
domina.children = (function domina$children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
 * Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
 */
domina.common_ancestor = (function domina$common_ancestor(var_args){
var args__19784__auto__ = [];
var len__19777__auto___36689 = arguments.length;
var i__19778__auto___36690 = (0);
while(true){
if((i__19778__auto___36690 < len__19777__auto___36689)){
args__19784__auto__.push((arguments[i__19778__auto___36690]));

var G__36691 = (i__19778__auto___36690 + (1));
i__19778__auto___36690 = G__36691;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
});

domina.common_ancestor.cljs$lang$maxFixedArity = (0);

domina.common_ancestor.cljs$lang$applyTo = (function (seq36688){
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36688));
});
/**
 * Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
 */
domina.ancestor_QMARK_ = (function domina$ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
 * Returns a deep clone of content.
 */
domina.clone = (function domina$clone(content){
return cljs.core.map.call(null,(function (p1__36692_SHARP_){
return p1__36692_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
domina.apply_with_cloning;
/**
 * Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.append_BANG_ = (function domina$append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.insert_BANG_ = (function domina$insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__36693_SHARP_,p2__36694_SHARP_){
return goog.dom.insertChildAt(p1__36693_SHARP_,p2__36694_SHARP_,idx);
}),parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.prepend_BANG_ = (function domina$prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,(0));

return parent_content;
});
/**
 * Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_before_BANG_ = (function domina$insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__36696_SHARP_,p2__36695_SHARP_){
return goog.dom.insertSiblingBefore(p2__36695_SHARP_,p1__36696_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__36698_SHARP_,p2__36697_SHARP_){
return goog.dom.insertSiblingAfter(p2__36697_SHARP_,p1__36698_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__36700_SHARP_,p2__36699_SHARP_){
return goog.dom.replaceNode(p2__36699_SHARP_,p1__36700_SHARP_);
}),old_content,new_content);

return old_content;
});
/**
 * Removes all the nodes in a content from the DOM and returns them.
 */
domina.detach_BANG_ = (function domina$detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
 * Removes all the nodes in a content from the DOM. Returns nil.
 */
domina.destroy_BANG_ = (function domina$destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
 * Removes all the child nodes in a content from the DOM. Returns the original content.
 */
domina.destroy_children_BANG_ = (function domina$destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));

return content;
});
/**
 * Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
 */
domina.style = (function domina$style(content,name){
var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s))){
return null;
} else {
return s;
}
});
/**
 * Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
 */
domina.attr = (function domina$attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
 * Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_style_BANG_ = (function domina$set_style_BANG_(var_args){
var args__19784__auto__ = [];
var len__19777__auto___36708 = arguments.length;
var i__19778__auto___36709 = (0);
while(true){
if((i__19778__auto___36709 < len__19777__auto___36708)){
args__19784__auto__.push((arguments[i__19778__auto___36709]));

var G__36710 = (i__19778__auto___36709 + (1));
i__19778__auto___36709 = G__36710;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((2) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((2)),(0))):null);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19785__auto__);
});

domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__36704_36711 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__36705_36712 = null;
var count__36706_36713 = (0);
var i__36707_36714 = (0);
while(true){
if((i__36707_36714 < count__36706_36713)){
var n_36715 = cljs.core._nth.call(null,chunk__36705_36712,i__36707_36714);
goog.style.setStyle(n_36715,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__36716 = seq__36704_36711;
var G__36717 = chunk__36705_36712;
var G__36718 = count__36706_36713;
var G__36719 = (i__36707_36714 + (1));
seq__36704_36711 = G__36716;
chunk__36705_36712 = G__36717;
count__36706_36713 = G__36718;
i__36707_36714 = G__36719;
continue;
} else {
var temp__4425__auto___36720 = cljs.core.seq.call(null,seq__36704_36711);
if(temp__4425__auto___36720){
var seq__36704_36721__$1 = temp__4425__auto___36720;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36704_36721__$1)){
var c__19522__auto___36722 = cljs.core.chunk_first.call(null,seq__36704_36721__$1);
var G__36723 = cljs.core.chunk_rest.call(null,seq__36704_36721__$1);
var G__36724 = c__19522__auto___36722;
var G__36725 = cljs.core.count.call(null,c__19522__auto___36722);
var G__36726 = (0);
seq__36704_36711 = G__36723;
chunk__36705_36712 = G__36724;
count__36706_36713 = G__36725;
i__36707_36714 = G__36726;
continue;
} else {
var n_36727 = cljs.core.first.call(null,seq__36704_36721__$1);
goog.style.setStyle(n_36727,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__36728 = cljs.core.next.call(null,seq__36704_36721__$1);
var G__36729 = null;
var G__36730 = (0);
var G__36731 = (0);
seq__36704_36711 = G__36728;
chunk__36705_36712 = G__36729;
count__36706_36713 = G__36730;
i__36707_36714 = G__36731;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.set_style_BANG_.cljs$lang$maxFixedArity = (2);

domina.set_style_BANG_.cljs$lang$applyTo = (function (seq36701){
var G__36702 = cljs.core.first.call(null,seq36701);
var seq36701__$1 = cljs.core.next.call(null,seq36701);
var G__36703 = cljs.core.first.call(null,seq36701__$1);
var seq36701__$2 = cljs.core.next.call(null,seq36701__$1);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36702,G__36703,seq36701__$2);
});
/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attr_BANG_ = (function domina$set_attr_BANG_(var_args){
var args__19784__auto__ = [];
var len__19777__auto___36739 = arguments.length;
var i__19778__auto___36740 = (0);
while(true){
if((i__19778__auto___36740 < len__19777__auto___36739)){
args__19784__auto__.push((arguments[i__19778__auto___36740]));

var G__36741 = (i__19778__auto___36740 + (1));
i__19778__auto___36740 = G__36741;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((2) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((2)),(0))):null);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19785__auto__);
});

domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__36735_36742 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__36736_36743 = null;
var count__36737_36744 = (0);
var i__36738_36745 = (0);
while(true){
if((i__36738_36745 < count__36737_36744)){
var n_36746 = cljs.core._nth.call(null,chunk__36736_36743,i__36738_36745);
n_36746.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__36747 = seq__36735_36742;
var G__36748 = chunk__36736_36743;
var G__36749 = count__36737_36744;
var G__36750 = (i__36738_36745 + (1));
seq__36735_36742 = G__36747;
chunk__36736_36743 = G__36748;
count__36737_36744 = G__36749;
i__36738_36745 = G__36750;
continue;
} else {
var temp__4425__auto___36751 = cljs.core.seq.call(null,seq__36735_36742);
if(temp__4425__auto___36751){
var seq__36735_36752__$1 = temp__4425__auto___36751;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36735_36752__$1)){
var c__19522__auto___36753 = cljs.core.chunk_first.call(null,seq__36735_36752__$1);
var G__36754 = cljs.core.chunk_rest.call(null,seq__36735_36752__$1);
var G__36755 = c__19522__auto___36753;
var G__36756 = cljs.core.count.call(null,c__19522__auto___36753);
var G__36757 = (0);
seq__36735_36742 = G__36754;
chunk__36736_36743 = G__36755;
count__36737_36744 = G__36756;
i__36738_36745 = G__36757;
continue;
} else {
var n_36758 = cljs.core.first.call(null,seq__36735_36752__$1);
n_36758.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__36759 = cljs.core.next.call(null,seq__36735_36752__$1);
var G__36760 = null;
var G__36761 = (0);
var G__36762 = (0);
seq__36735_36742 = G__36759;
chunk__36736_36743 = G__36760;
count__36737_36744 = G__36761;
i__36738_36745 = G__36762;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.set_attr_BANG_.cljs$lang$maxFixedArity = (2);

domina.set_attr_BANG_.cljs$lang$applyTo = (function (seq36732){
var G__36733 = cljs.core.first.call(null,seq36732);
var seq36732__$1 = cljs.core.next.call(null,seq36732);
var G__36734 = cljs.core.first.call(null,seq36732__$1);
var seq36732__$2 = cljs.core.next.call(null,seq36732__$1);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36733,G__36734,seq36732__$2);
});
/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.remove_attr_BANG_ = (function domina$remove_attr_BANG_(content,name){
var seq__36767_36771 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__36768_36772 = null;
var count__36769_36773 = (0);
var i__36770_36774 = (0);
while(true){
if((i__36770_36774 < count__36769_36773)){
var n_36775 = cljs.core._nth.call(null,chunk__36768_36772,i__36770_36774);
n_36775.removeAttribute(cljs.core.name.call(null,name));

var G__36776 = seq__36767_36771;
var G__36777 = chunk__36768_36772;
var G__36778 = count__36769_36773;
var G__36779 = (i__36770_36774 + (1));
seq__36767_36771 = G__36776;
chunk__36768_36772 = G__36777;
count__36769_36773 = G__36778;
i__36770_36774 = G__36779;
continue;
} else {
var temp__4425__auto___36780 = cljs.core.seq.call(null,seq__36767_36771);
if(temp__4425__auto___36780){
var seq__36767_36781__$1 = temp__4425__auto___36780;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36767_36781__$1)){
var c__19522__auto___36782 = cljs.core.chunk_first.call(null,seq__36767_36781__$1);
var G__36783 = cljs.core.chunk_rest.call(null,seq__36767_36781__$1);
var G__36784 = c__19522__auto___36782;
var G__36785 = cljs.core.count.call(null,c__19522__auto___36782);
var G__36786 = (0);
seq__36767_36771 = G__36783;
chunk__36768_36772 = G__36784;
count__36769_36773 = G__36785;
i__36770_36774 = G__36786;
continue;
} else {
var n_36787 = cljs.core.first.call(null,seq__36767_36781__$1);
n_36787.removeAttribute(cljs.core.name.call(null,name));

var G__36788 = cljs.core.next.call(null,seq__36767_36781__$1);
var G__36789 = null;
var G__36790 = (0);
var G__36791 = (0);
seq__36767_36771 = G__36788;
chunk__36768_36772 = G__36789;
count__36769_36773 = G__36790;
i__36770_36774 = G__36791;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Parses a CSS style string and returns the properties as a map.
 */
domina.parse_style_attributes = (function domina$parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__36793 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__36793,(0),null);
var v = cljs.core.nth.call(null,vec__36793,(1),null);
if(cljs.core.truth_((function (){var and__18707__auto__ = k;
if(cljs.core.truth_(and__18707__auto__)){
return v;
} else {
return and__18707__auto__;
}
})())){
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
 * Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
 */
domina.styles = (function domina$styles(content){
var style = domina.attr.call(null,content,"style");
if(typeof style === 'string'){
return domina.parse_style_attributes.call(null,style);
} else {
if((style == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(style.cssText)){
return domina.parse_style_attributes.call(null,style.cssText);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
 * Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
 */
domina.attrs = (function domina$attrs(content){
var node = domina.single_node.call(null,content);
var attrs__$1 = node.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__36794_SHARP_){
var attr = attrs__$1.item(p1__36794_SHARP_);
var value = attr.nodeValue;
if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value))){
return cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else {
return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
 * Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
 */
domina.set_styles_BANG_ = (function domina$set_styles_BANG_(content,styles){
var seq__36801_36807 = cljs.core.seq.call(null,styles);
var chunk__36802_36808 = null;
var count__36803_36809 = (0);
var i__36804_36810 = (0);
while(true){
if((i__36804_36810 < count__36803_36809)){
var vec__36805_36811 = cljs.core._nth.call(null,chunk__36802_36808,i__36804_36810);
var name_36812 = cljs.core.nth.call(null,vec__36805_36811,(0),null);
var value_36813 = cljs.core.nth.call(null,vec__36805_36811,(1),null);
domina.set_style_BANG_.call(null,content,name_36812,value_36813);

var G__36814 = seq__36801_36807;
var G__36815 = chunk__36802_36808;
var G__36816 = count__36803_36809;
var G__36817 = (i__36804_36810 + (1));
seq__36801_36807 = G__36814;
chunk__36802_36808 = G__36815;
count__36803_36809 = G__36816;
i__36804_36810 = G__36817;
continue;
} else {
var temp__4425__auto___36818 = cljs.core.seq.call(null,seq__36801_36807);
if(temp__4425__auto___36818){
var seq__36801_36819__$1 = temp__4425__auto___36818;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36801_36819__$1)){
var c__19522__auto___36820 = cljs.core.chunk_first.call(null,seq__36801_36819__$1);
var G__36821 = cljs.core.chunk_rest.call(null,seq__36801_36819__$1);
var G__36822 = c__19522__auto___36820;
var G__36823 = cljs.core.count.call(null,c__19522__auto___36820);
var G__36824 = (0);
seq__36801_36807 = G__36821;
chunk__36802_36808 = G__36822;
count__36803_36809 = G__36823;
i__36804_36810 = G__36824;
continue;
} else {
var vec__36806_36825 = cljs.core.first.call(null,seq__36801_36819__$1);
var name_36826 = cljs.core.nth.call(null,vec__36806_36825,(0),null);
var value_36827 = cljs.core.nth.call(null,vec__36806_36825,(1),null);
domina.set_style_BANG_.call(null,content,name_36826,value_36827);

var G__36828 = cljs.core.next.call(null,seq__36801_36819__$1);
var G__36829 = null;
var G__36830 = (0);
var G__36831 = (0);
seq__36801_36807 = G__36828;
chunk__36802_36808 = G__36829;
count__36803_36809 = G__36830;
i__36804_36810 = G__36831;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attrs_BANG_ = (function domina$set_attrs_BANG_(content,attrs){
var seq__36838_36844 = cljs.core.seq.call(null,attrs);
var chunk__36839_36845 = null;
var count__36840_36846 = (0);
var i__36841_36847 = (0);
while(true){
if((i__36841_36847 < count__36840_36846)){
var vec__36842_36848 = cljs.core._nth.call(null,chunk__36839_36845,i__36841_36847);
var name_36849 = cljs.core.nth.call(null,vec__36842_36848,(0),null);
var value_36850 = cljs.core.nth.call(null,vec__36842_36848,(1),null);
domina.set_attr_BANG_.call(null,content,name_36849,value_36850);

var G__36851 = seq__36838_36844;
var G__36852 = chunk__36839_36845;
var G__36853 = count__36840_36846;
var G__36854 = (i__36841_36847 + (1));
seq__36838_36844 = G__36851;
chunk__36839_36845 = G__36852;
count__36840_36846 = G__36853;
i__36841_36847 = G__36854;
continue;
} else {
var temp__4425__auto___36855 = cljs.core.seq.call(null,seq__36838_36844);
if(temp__4425__auto___36855){
var seq__36838_36856__$1 = temp__4425__auto___36855;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36838_36856__$1)){
var c__19522__auto___36857 = cljs.core.chunk_first.call(null,seq__36838_36856__$1);
var G__36858 = cljs.core.chunk_rest.call(null,seq__36838_36856__$1);
var G__36859 = c__19522__auto___36857;
var G__36860 = cljs.core.count.call(null,c__19522__auto___36857);
var G__36861 = (0);
seq__36838_36844 = G__36858;
chunk__36839_36845 = G__36859;
count__36840_36846 = G__36860;
i__36841_36847 = G__36861;
continue;
} else {
var vec__36843_36862 = cljs.core.first.call(null,seq__36838_36856__$1);
var name_36863 = cljs.core.nth.call(null,vec__36843_36862,(0),null);
var value_36864 = cljs.core.nth.call(null,vec__36843_36862,(1),null);
domina.set_attr_BANG_.call(null,content,name_36863,value_36864);

var G__36865 = cljs.core.next.call(null,seq__36838_36856__$1);
var G__36866 = null;
var G__36867 = (0);
var G__36868 = (0);
seq__36838_36844 = G__36865;
chunk__36839_36845 = G__36866;
count__36840_36846 = G__36867;
i__36841_36847 = G__36868;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns true if the node has the specified CSS class. Assumes content is a single node.
 */
domina.has_class_QMARK_ = (function domina$has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
 * Adds the specified CSS class to each node in the content.
 */
domina.add_class_BANG_ = (function domina$add_class_BANG_(content,class$){
var seq__36873_36877 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__36874_36878 = null;
var count__36875_36879 = (0);
var i__36876_36880 = (0);
while(true){
if((i__36876_36880 < count__36875_36879)){
var node_36881 = cljs.core._nth.call(null,chunk__36874_36878,i__36876_36880);
goog.dom.classes.add(node_36881,class$);

var G__36882 = seq__36873_36877;
var G__36883 = chunk__36874_36878;
var G__36884 = count__36875_36879;
var G__36885 = (i__36876_36880 + (1));
seq__36873_36877 = G__36882;
chunk__36874_36878 = G__36883;
count__36875_36879 = G__36884;
i__36876_36880 = G__36885;
continue;
} else {
var temp__4425__auto___36886 = cljs.core.seq.call(null,seq__36873_36877);
if(temp__4425__auto___36886){
var seq__36873_36887__$1 = temp__4425__auto___36886;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36873_36887__$1)){
var c__19522__auto___36888 = cljs.core.chunk_first.call(null,seq__36873_36887__$1);
var G__36889 = cljs.core.chunk_rest.call(null,seq__36873_36887__$1);
var G__36890 = c__19522__auto___36888;
var G__36891 = cljs.core.count.call(null,c__19522__auto___36888);
var G__36892 = (0);
seq__36873_36877 = G__36889;
chunk__36874_36878 = G__36890;
count__36875_36879 = G__36891;
i__36876_36880 = G__36892;
continue;
} else {
var node_36893 = cljs.core.first.call(null,seq__36873_36887__$1);
goog.dom.classes.add(node_36893,class$);

var G__36894 = cljs.core.next.call(null,seq__36873_36887__$1);
var G__36895 = null;
var G__36896 = (0);
var G__36897 = (0);
seq__36873_36877 = G__36894;
chunk__36874_36878 = G__36895;
count__36875_36879 = G__36896;
i__36876_36880 = G__36897;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Removes the specified CSS class from each node in the content.
 */
domina.remove_class_BANG_ = (function domina$remove_class_BANG_(content,class$){
var seq__36902_36906 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__36903_36907 = null;
var count__36904_36908 = (0);
var i__36905_36909 = (0);
while(true){
if((i__36905_36909 < count__36904_36908)){
var node_36910 = cljs.core._nth.call(null,chunk__36903_36907,i__36905_36909);
goog.dom.classes.remove(node_36910,class$);

var G__36911 = seq__36902_36906;
var G__36912 = chunk__36903_36907;
var G__36913 = count__36904_36908;
var G__36914 = (i__36905_36909 + (1));
seq__36902_36906 = G__36911;
chunk__36903_36907 = G__36912;
count__36904_36908 = G__36913;
i__36905_36909 = G__36914;
continue;
} else {
var temp__4425__auto___36915 = cljs.core.seq.call(null,seq__36902_36906);
if(temp__4425__auto___36915){
var seq__36902_36916__$1 = temp__4425__auto___36915;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36902_36916__$1)){
var c__19522__auto___36917 = cljs.core.chunk_first.call(null,seq__36902_36916__$1);
var G__36918 = cljs.core.chunk_rest.call(null,seq__36902_36916__$1);
var G__36919 = c__19522__auto___36917;
var G__36920 = cljs.core.count.call(null,c__19522__auto___36917);
var G__36921 = (0);
seq__36902_36906 = G__36918;
chunk__36903_36907 = G__36919;
count__36904_36908 = G__36920;
i__36905_36909 = G__36921;
continue;
} else {
var node_36922 = cljs.core.first.call(null,seq__36902_36916__$1);
goog.dom.classes.remove(node_36922,class$);

var G__36923 = cljs.core.next.call(null,seq__36902_36916__$1);
var G__36924 = null;
var G__36925 = (0);
var G__36926 = (0);
seq__36902_36906 = G__36923;
chunk__36903_36907 = G__36924;
count__36904_36908 = G__36925;
i__36905_36909 = G__36926;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Toggles the specified CSS class from each node in the content.
 */
domina.toggle_class_BANG_ = (function domina$toggle_class_BANG_(content,class$){
var seq__36931_36935 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__36932_36936 = null;
var count__36933_36937 = (0);
var i__36934_36938 = (0);
while(true){
if((i__36934_36938 < count__36933_36937)){
var node_36939 = cljs.core._nth.call(null,chunk__36932_36936,i__36934_36938);
goog.dom.classes.toggle(node_36939,class$);

var G__36940 = seq__36931_36935;
var G__36941 = chunk__36932_36936;
var G__36942 = count__36933_36937;
var G__36943 = (i__36934_36938 + (1));
seq__36931_36935 = G__36940;
chunk__36932_36936 = G__36941;
count__36933_36937 = G__36942;
i__36934_36938 = G__36943;
continue;
} else {
var temp__4425__auto___36944 = cljs.core.seq.call(null,seq__36931_36935);
if(temp__4425__auto___36944){
var seq__36931_36945__$1 = temp__4425__auto___36944;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36931_36945__$1)){
var c__19522__auto___36946 = cljs.core.chunk_first.call(null,seq__36931_36945__$1);
var G__36947 = cljs.core.chunk_rest.call(null,seq__36931_36945__$1);
var G__36948 = c__19522__auto___36946;
var G__36949 = cljs.core.count.call(null,c__19522__auto___36946);
var G__36950 = (0);
seq__36931_36935 = G__36947;
chunk__36932_36936 = G__36948;
count__36933_36937 = G__36949;
i__36934_36938 = G__36950;
continue;
} else {
var node_36951 = cljs.core.first.call(null,seq__36931_36945__$1);
goog.dom.classes.toggle(node_36951,class$);

var G__36952 = cljs.core.next.call(null,seq__36931_36945__$1);
var G__36953 = null;
var G__36954 = (0);
var G__36955 = (0);
seq__36931_36935 = G__36952;
chunk__36932_36936 = G__36953;
count__36933_36937 = G__36954;
i__36934_36938 = G__36955;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
 */
domina.classes = (function domina$classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
 * Sets the class attribute of the content nodes to classes, which can
 *   be either a class attribute string or a seq of classname strings.
 */
domina.set_classes_BANG_ = (function domina$set_classes_BANG_(content,classes){
var classes_36964__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__36960_36965 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__36961_36966 = null;
var count__36962_36967 = (0);
var i__36963_36968 = (0);
while(true){
if((i__36963_36968 < count__36962_36967)){
var node_36969 = cljs.core._nth.call(null,chunk__36961_36966,i__36963_36968);
goog.dom.classes.set(node_36969,classes_36964__$1);

var G__36970 = seq__36960_36965;
var G__36971 = chunk__36961_36966;
var G__36972 = count__36962_36967;
var G__36973 = (i__36963_36968 + (1));
seq__36960_36965 = G__36970;
chunk__36961_36966 = G__36971;
count__36962_36967 = G__36972;
i__36963_36968 = G__36973;
continue;
} else {
var temp__4425__auto___36974 = cljs.core.seq.call(null,seq__36960_36965);
if(temp__4425__auto___36974){
var seq__36960_36975__$1 = temp__4425__auto___36974;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36960_36975__$1)){
var c__19522__auto___36976 = cljs.core.chunk_first.call(null,seq__36960_36975__$1);
var G__36977 = cljs.core.chunk_rest.call(null,seq__36960_36975__$1);
var G__36978 = c__19522__auto___36976;
var G__36979 = cljs.core.count.call(null,c__19522__auto___36976);
var G__36980 = (0);
seq__36960_36965 = G__36977;
chunk__36961_36966 = G__36978;
count__36962_36967 = G__36979;
i__36963_36968 = G__36980;
continue;
} else {
var node_36981 = cljs.core.first.call(null,seq__36960_36975__$1);
goog.dom.classes.set(node_36981,classes_36964__$1);

var G__36982 = cljs.core.next.call(null,seq__36960_36975__$1);
var G__36983 = null;
var G__36984 = (0);
var G__36985 = (0);
seq__36960_36965 = G__36982;
chunk__36961_36966 = G__36983;
count__36962_36967 = G__36984;
i__36963_36968 = G__36985;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
 */
domina.text = (function domina$text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
 * Sets the text value of all the nodes in the given content.
 */
domina.set_text_BANG_ = (function domina$set_text_BANG_(content,value){
var seq__36990_36994 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__36991_36995 = null;
var count__36992_36996 = (0);
var i__36993_36997 = (0);
while(true){
if((i__36993_36997 < count__36992_36996)){
var node_36998 = cljs.core._nth.call(null,chunk__36991_36995,i__36993_36997);
goog.dom.setTextContent(node_36998,value);

var G__36999 = seq__36990_36994;
var G__37000 = chunk__36991_36995;
var G__37001 = count__36992_36996;
var G__37002 = (i__36993_36997 + (1));
seq__36990_36994 = G__36999;
chunk__36991_36995 = G__37000;
count__36992_36996 = G__37001;
i__36993_36997 = G__37002;
continue;
} else {
var temp__4425__auto___37003 = cljs.core.seq.call(null,seq__36990_36994);
if(temp__4425__auto___37003){
var seq__36990_37004__$1 = temp__4425__auto___37003;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36990_37004__$1)){
var c__19522__auto___37005 = cljs.core.chunk_first.call(null,seq__36990_37004__$1);
var G__37006 = cljs.core.chunk_rest.call(null,seq__36990_37004__$1);
var G__37007 = c__19522__auto___37005;
var G__37008 = cljs.core.count.call(null,c__19522__auto___37005);
var G__37009 = (0);
seq__36990_36994 = G__37006;
chunk__36991_36995 = G__37007;
count__36992_36996 = G__37008;
i__36993_36997 = G__37009;
continue;
} else {
var node_37010 = cljs.core.first.call(null,seq__36990_37004__$1);
goog.dom.setTextContent(node_37010,value);

var G__37011 = cljs.core.next.call(null,seq__36990_37004__$1);
var G__37012 = null;
var G__37013 = (0);
var G__37014 = (0);
seq__36990_36994 = G__37011;
chunk__36991_36995 = G__37012;
count__36992_36996 = G__37013;
i__36993_36997 = G__37014;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the value of a node (presumably a form field). Assumes content is a single node.
 */
domina.value = (function domina$value(content){
return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
 * Sets the value of all the nodes (presumably form fields) in the given content.
 */
domina.set_value_BANG_ = (function domina$set_value_BANG_(content,value){
var seq__37019_37023 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__37020_37024 = null;
var count__37021_37025 = (0);
var i__37022_37026 = (0);
while(true){
if((i__37022_37026 < count__37021_37025)){
var node_37027 = cljs.core._nth.call(null,chunk__37020_37024,i__37022_37026);
goog.dom.forms.setValue(node_37027,value);

var G__37028 = seq__37019_37023;
var G__37029 = chunk__37020_37024;
var G__37030 = count__37021_37025;
var G__37031 = (i__37022_37026 + (1));
seq__37019_37023 = G__37028;
chunk__37020_37024 = G__37029;
count__37021_37025 = G__37030;
i__37022_37026 = G__37031;
continue;
} else {
var temp__4425__auto___37032 = cljs.core.seq.call(null,seq__37019_37023);
if(temp__4425__auto___37032){
var seq__37019_37033__$1 = temp__4425__auto___37032;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37019_37033__$1)){
var c__19522__auto___37034 = cljs.core.chunk_first.call(null,seq__37019_37033__$1);
var G__37035 = cljs.core.chunk_rest.call(null,seq__37019_37033__$1);
var G__37036 = c__19522__auto___37034;
var G__37037 = cljs.core.count.call(null,c__19522__auto___37034);
var G__37038 = (0);
seq__37019_37023 = G__37035;
chunk__37020_37024 = G__37036;
count__37021_37025 = G__37037;
i__37022_37026 = G__37038;
continue;
} else {
var node_37039 = cljs.core.first.call(null,seq__37019_37033__$1);
goog.dom.forms.setValue(node_37039,value);

var G__37040 = cljs.core.next.call(null,seq__37019_37033__$1);
var G__37041 = null;
var G__37042 = (0);
var G__37043 = (0);
seq__37019_37023 = G__37040;
chunk__37020_37024 = G__37041;
count__37021_37025 = G__37042;
i__37022_37026 = G__37043;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the innerHTML of a node. Assumes content is a single node.
 */
domina.html = (function domina$html(content){
return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function domina$replace_children_BANG_(content,inner_content){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function domina$set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);
if(cljs.core.truth_((function (){var and__18707__auto__ = allows_inner_html_QMARK_;
if(and__18707__auto__){
var and__18707__auto____$1 = (function (){var or__18719__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__18719__auto__)){
return or__18719__auto__;
} else {
return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();
if(cljs.core.truth_(and__18707__auto____$1)){
return !(special_tag_QMARK_);
} else {
return and__18707__auto____$1;
}
} else {
return and__18707__auto__;
}
})())){
var value_37054 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__37050_37055 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__37051_37056 = null;
var count__37052_37057 = (0);
var i__37053_37058 = (0);
while(true){
if((i__37053_37058 < count__37052_37057)){
var node_37059 = cljs.core._nth.call(null,chunk__37051_37056,i__37053_37058);
node_37059.innerHTML = value_37054;

var G__37060 = seq__37050_37055;
var G__37061 = chunk__37051_37056;
var G__37062 = count__37052_37057;
var G__37063 = (i__37053_37058 + (1));
seq__37050_37055 = G__37060;
chunk__37051_37056 = G__37061;
count__37052_37057 = G__37062;
i__37053_37058 = G__37063;
continue;
} else {
var temp__4425__auto___37064 = cljs.core.seq.call(null,seq__37050_37055);
if(temp__4425__auto___37064){
var seq__37050_37065__$1 = temp__4425__auto___37064;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37050_37065__$1)){
var c__19522__auto___37066 = cljs.core.chunk_first.call(null,seq__37050_37065__$1);
var G__37067 = cljs.core.chunk_rest.call(null,seq__37050_37065__$1);
var G__37068 = c__19522__auto___37066;
var G__37069 = cljs.core.count.call(null,c__19522__auto___37066);
var G__37070 = (0);
seq__37050_37055 = G__37067;
chunk__37051_37056 = G__37068;
count__37052_37057 = G__37069;
i__37053_37058 = G__37070;
continue;
} else {
var node_37071 = cljs.core.first.call(null,seq__37050_37065__$1);
node_37071.innerHTML = value_37054;

var G__37072 = cljs.core.next.call(null,seq__37050_37065__$1);
var G__37073 = null;
var G__37074 = (0);
var G__37075 = (0);
seq__37050_37055 = G__37072;
chunk__37051_37056 = G__37073;
count__37052_37057 = G__37074;
i__37053_37058 = G__37075;
continue;
}
} else {
}
}
break;
}
}catch (e37049){if((e37049 instanceof Error)){
var e_37076 = e37049;
domina.replace_children_BANG_.call(null,content,value_37054);
} else {
throw e37049;

}
}} else {
domina.replace_children_BANG_.call(null,content,html_string);
}

return content;
});
/**
 * Sets the innerHTML value for all the nodes in the given content.
 */
domina.set_html_BANG_ = (function domina$set_html_BANG_(content,inner_content){
if(typeof inner_content === 'string'){
return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else {
return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
 * Returns data associated with a node for a given key. Assumes
 *   content is a single node. If the bubble parameter is set to true,
 *   will search parent nodes if the key is not found.
 */
domina.get_data = (function domina$get_data(var_args){
var args37077 = [];
var len__19777__auto___37080 = arguments.length;
var i__19778__auto___37081 = (0);
while(true){
if((i__19778__auto___37081 < len__19777__auto___37080)){
args37077.push((arguments[i__19778__auto___37081]));

var G__37082 = (i__19778__auto___37081 + (1));
i__19778__auto___37081 = G__37082;
continue;
} else {
}
break;
}

var G__37079 = args37077.length;
switch (G__37079) {
case 2:
return domina.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37077.length)].join('')));

}
});

domina.get_data.cljs$core$IFn$_invoke$arity$2 = (function (node,key){
return domina.get_data.call(null,node,key,false);
});

domina.get_data.cljs$core$IFn$_invoke$arity$3 = (function (node,key,bubble){
var m = domina.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__18707__auto__ = bubble;
if(cljs.core.truth_(and__18707__auto__)){
return (value == null);
} else {
return and__18707__auto__;
}
})())){
var temp__4425__auto__ = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__4425__auto__)){
var parent = temp__4425__auto__;
return domina.get_data.call(null,parent,key,true);
} else {
return null;
}
} else {
return value;
}
});

domina.get_data.cljs$lang$maxFixedArity = 3;
/**
 * Sets a data on the node for a given key. Assumes content is a
 *   single node. Data should be ClojureScript values and data structures
 *   only; using other objects as data may result in memory leaks on some
 *   browsers.
 */
domina.set_data_BANG_ = (function domina$set_data_BANG_(node,key,value){
var m = (function (){var or__18719__auto__ = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__18719__auto__)){
return or__18719__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
 * Takes a two-arg function, a reference DomContent and new
 *   DomContent. Applies the function for each reference / content
 *   combination. Uses clones of the new content for each additional
 *   parent after the first.
 */
domina.apply_with_cloning = (function domina$apply_with_cloning(f,parent_content,child_content){
var parents = domina.nodes.call(null,parent_content);
var children = domina.nodes.call(null,child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__37090_37094 = cljs.core.seq.call(null,children);
var chunk__37091_37095 = null;
var count__37092_37096 = (0);
var i__37093_37097 = (0);
while(true){
if((i__37093_37097 < count__37092_37096)){
var child_37098 = cljs.core._nth.call(null,chunk__37091_37095,i__37093_37097);
frag.appendChild(child_37098);

var G__37099 = seq__37090_37094;
var G__37100 = chunk__37091_37095;
var G__37101 = count__37092_37096;
var G__37102 = (i__37093_37097 + (1));
seq__37090_37094 = G__37099;
chunk__37091_37095 = G__37100;
count__37092_37096 = G__37101;
i__37093_37097 = G__37102;
continue;
} else {
var temp__4425__auto___37103 = cljs.core.seq.call(null,seq__37090_37094);
if(temp__4425__auto___37103){
var seq__37090_37104__$1 = temp__4425__auto___37103;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37090_37104__$1)){
var c__19522__auto___37105 = cljs.core.chunk_first.call(null,seq__37090_37104__$1);
var G__37106 = cljs.core.chunk_rest.call(null,seq__37090_37104__$1);
var G__37107 = c__19522__auto___37105;
var G__37108 = cljs.core.count.call(null,c__19522__auto___37105);
var G__37109 = (0);
seq__37090_37094 = G__37106;
chunk__37091_37095 = G__37107;
count__37092_37096 = G__37108;
i__37093_37097 = G__37109;
continue;
} else {
var child_37110 = cljs.core.first.call(null,seq__37090_37104__$1);
frag.appendChild(child_37110);

var G__37111 = cljs.core.next.call(null,seq__37090_37104__$1);
var G__37112 = null;
var G__37113 = (0);
var G__37114 = (0);
seq__37090_37094 = G__37111;
chunk__37091_37095 = G__37112;
count__37092_37096 = G__37113;
i__37093_37097 = G__37114;
continue;
}
} else {
}
}
break;
}

return frag;
})();
var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){
return first_child.cloneNode(true);
});})(parents,children,first_child))
));
if(cljs.core.seq.call(null,parents)){
f.call(null,cljs.core.first.call(null,parents),first_child);

return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__37084_SHARP_,p2__37085_SHARP_){
return f.call(null,p1__37084_SHARP_,p2__37085_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function domina$lazy_nl_via_item(var_args){
var args37115 = [];
var len__19777__auto___37118 = arguments.length;
var i__19778__auto___37119 = (0);
while(true){
if((i__19778__auto___37119 < len__19777__auto___37118)){
args37115.push((arguments[i__19778__auto___37119]));

var G__37120 = (i__19778__auto___37119 + (1));
i__19778__auto___37119 = G__37120;
continue;
} else {
}
break;
}

var G__37117 = args37115.length;
switch (G__37117) {
case 1:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37115.length)].join('')));

}
});

domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.lazy_nl_via_item.call(null,nl,(0));
});

domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,nl.item(n),domina.lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.lazy_nl_via_item.cljs$lang$maxFixedArity = 2;
domina.lazy_nl_via_array_ref = (function domina$lazy_nl_via_array_ref(var_args){
var args37122 = [];
var len__19777__auto___37125 = arguments.length;
var i__19778__auto___37126 = (0);
while(true){
if((i__19778__auto___37126 < len__19777__auto___37125)){
args37122.push((arguments[i__19778__auto___37126]));

var G__37127 = (i__19778__auto___37126 + (1));
i__19778__auto___37126 = G__37127;
continue;
} else {
}
break;
}

var G__37124 = args37122.length;
switch (G__37124) {
case 1:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37122.length)].join('')));

}
});

domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.lazy_nl_via_array_ref.call(null,nl,(0));
});

domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,(nl[n]),domina.lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.lazy_nl_via_array_ref.cljs$lang$maxFixedArity = 2;
/**
 * A lazy seq view of a js/NodeList, or other array-like javascript things
 */
domina.lazy_nodelist = (function domina$lazy_nodelist(nl){
if(cljs.core.truth_(nl.item)){
return domina.lazy_nl_via_item.call(null,nl);
} else {
return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function domina$array_like_QMARK_(obj){
var and__18707__auto__ = obj;
if(cljs.core.truth_(and__18707__auto__)){
var and__18707__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__18707__auto____$1){
return obj.length;
} else {
return and__18707__auto____$1;
}
} else {
return and__18707__auto__;
}
});
/**
 * Some versions of IE have things that are like arrays in that they
 *   respond to .length, but are not arrays nor NodeSets. This returns a
 *   real sequence view of such objects. If passed an object that is not
 *   a logical sequence at all, returns a single-item seq containing the
 *   object.
 */
domina.normalize_seq = (function domina$normalize_seq(list_thing){
if((list_thing == null)){
return cljs.core.List.EMPTY;
} else {
if(((!((list_thing == null)))?((((list_thing.cljs$lang$protocol_mask$partition0$ & (8388608))) || (list_thing.cljs$core$ISeqable$))?true:(((!list_thing.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing))){
return cljs.core.seq.call(null,list_thing);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing))){
return domina.lazy_nodelist.call(null,list_thing);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["string"] = true);

(domina.nodes["string"] = (function (s){
return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));

(domina.single_node["string"] = (function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));

(domina.DomContent["_"] = true);

(domina.nodes["_"] = (function (content){
if((content == null)){
return cljs.core.List.EMPTY;
} else {
if(((!((content == null)))?((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || (content.cljs$core$ISeqable$))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.seq.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return domina.lazy_nodelist.call(null,content);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));

(domina.single_node["_"] = (function (content){
if((content == null)){
return null;
} else {
if(((!((content == null)))?((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || (content.cljs$core$ISeqable$))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.first.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return content.item((0));
} else {
return content;

}
}
}
}));
if(cljs.core.truth_((typeof NodeList != 'undefined'))){
NodeList.prototype.cljs$core$ICounted$ = true;

NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

NodeList.prototype.cljs$core$IIndexed$ = true;

NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

NodeList.prototype.cljs$core$ISeqable$ = true;

NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined'))){
StaticNodeList.prototype.cljs$core$ICounted$ = true;

StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

StaticNodeList.prototype.cljs$core$IIndexed$ = true;

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

StaticNodeList.prototype.cljs$core$ISeqable$ = true;

StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined'))){
HTMLCollection.prototype.cljs$core$ICounted$ = true;

HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var coll__$1 = this;
return coll__$1.length;
});

HTMLCollection.prototype.cljs$core$IIndexed$ = true;

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var coll__$1 = this;
return coll__$1.item(n);
});

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var coll__$1 = this;
if((coll__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,coll__$1,n);
}
});

HTMLCollection.prototype.cljs$core$ISeqable$ = true;

HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var coll__$1 = this;
return domina.lazy_nodelist.call(null,coll__$1);
});
} else {
}

//# sourceMappingURL=domina.js.map?rel=1472153856132