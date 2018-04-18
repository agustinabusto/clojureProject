// Compiled by ClojureScript 1.7.107 {}
goog.provide('reforms.table');
goog.require('cljs.core');
goog.require('reforms.core.impl');
goog.require('reforms.binding.core');
goog.require('clojure.set');
reforms.table.simple_checkbox = (function reforms$table$simple_checkbox(var_args){
var args__19784__auto__ = [];
var len__19777__auto___27797 = arguments.length;
var i__19778__auto___27798 = (0);
while(true){
if((i__19778__auto___27798 < len__19777__auto___27797)){
args__19784__auto__.push((arguments[i__19778__auto___27798]));

var G__27799 = (i__19778__auto___27798 + (1));
i__19778__auto___27798 = G__27799;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((1) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((1)),(0))):null);
return reforms.table.simple_checkbox.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19785__auto__);
});

reforms.table.simple_checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (checked,p__27794){
var map__27795 = p__27794;
var map__27795__$1 = ((((!((map__27795 == null)))?((((map__27795.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27795.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27795):map__27795);
var on_click = cljs.core.get.call(null,map__27795__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__27795,map__27795__$1,on_click){
return (function (p1__27791_SHARP_){
return on_click.call(null,p1__27791_SHARP_.target.checked);
});})(map__27795,map__27795__$1,on_click))
,new cljs.core.Keyword(null,"checked","checked",-50955819),checked,new cljs.core.Keyword(null,"type","type",1174270348),"checkbox"], null)], null);
});

reforms.table.simple_checkbox.cljs$lang$maxFixedArity = (1);

reforms.table.simple_checkbox.cljs$lang$applyTo = (function (seq27792){
var G__27793 = cljs.core.first.call(null,seq27792);
var seq27792__$1 = cljs.core.next.call(null,seq27792);
return reforms.table.simple_checkbox.cljs$core$IFn$_invoke$arity$variadic(G__27793,seq27792__$1);
});
reforms.table.all_selected_QMARK_ = (function reforms$table$all_selected_QMARK_(selected_values,all_values){
return clojure.set.subset_QMARK_.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,all_values),selected_values);
});
/**
 * Renders a table of `rows` (col => value). An optional map of columns to labels can be specified which also
 * restricts which columns are visible.
 * 
 * Arguments:
 * 
 *     [attrs] rows [options]
 * 
 *     - attrs - (optional) attributes for <table> handed over to React (see https://github.com/r0man/sablono#html-attributes)
 *     - rows - a vector of col->val maps
 *     - options - (optional) options to customize the table
 * 
 * Options:
 * 
 *     - :columns - map of keys used in `rows` to human-friendly column names
 *     - :checkboxes - use this to support row selection using checkboxes, the map contains:
 *         :selection - atom/cursor to keep selected rows in
 *         :path - (optional) korks/path into the selection atom/cursor
 *         :row-id - function applied to row map to calculate a unique row id to put into the selection set
 *         :nil-selects-all? - (optional) selection set to nil (as opposed to #{}) selects all rows (default: false)
 *       See the second example.
 * 
 * Example:
 * 
 *      (table [{:name "Tom" :id 12} {:name "Jerry" :id 23}]
 *             :columns {:name "Hero name"})
 * 
 * Result:
 *   
 *     | Hero name |
 *     | Tom       |
 *     | Jerry     |
 * 
 * As an option, each row can have an on/off checkbox to the left; to turn this on, `checkboxes` must be a map
 * with :cursor and :korks pointing to where to store the selection.  The resulting selection
 * is either a set containing values or nil; the latter means that all rows are selected.
 * The values are taken from the first val in the respective row or a result of :value function of
 * signature (fn [row]).
 * 
 * Example:
 * 
 *     (table [{:name "Tom" :id 12} {:name "Jerry" :id 23}]
 *            :checkboxes {:selection     app-state
 *                         :path          [:selected-heroes]
 *                         :row-id        :id}
 *            :columns {:name "Hero name"})
 * 
 *      | [ ] Hero name |
 *      | [x] Tom       |
 *      | [ ] Jerry     |
 * 
 *     ;; For the above selection:
 *     (get-in app-state [:selected-heroes]) => #{12}
 * 
 * Depending on the initial value of `app-state` in the above example the table start either
 * 
 * a) with all checkboxes on for `app-state` containing {:selected-heroes nil}, or
 * b) with no selection with {:selected-heroes #{}}.
 */
reforms.table.table = (function reforms$table$table(var_args){
var args__19784__auto__ = [];
var len__19777__auto___27831 = arguments.length;
var i__19778__auto___27832 = (0);
while(true){
if((i__19778__auto___27832 < len__19777__auto___27831)){
args__19784__auto__.push((arguments[i__19778__auto___27832]));

var G__27833 = (i__19778__auto___27832 + (1));
i__19778__auto___27832 = G__27833;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return reforms.table.table.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

reforms.table.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__27801 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"table"], null),args);
var attrs = cljs.core.nth.call(null,vec__27801,(0),null);
var vec__27802 = cljs.core.nth.call(null,vec__27801,(1),null);
var rows = cljs.core.nth.call(null,vec__27802,(0),null);
var map__27803 = cljs.core.nthnext.call(null,vec__27802,(1));
var map__27803__$1 = ((((!((map__27803 == null)))?((((map__27803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27803):map__27803);
var columns = cljs.core.get.call(null,map__27803__$1,new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.PersistentArrayMap.EMPTY);
var checkboxes = cljs.core.get.call(null,map__27803__$1,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762));
var xf = cljs.core.get.call(null,map__27803__$1,new cljs.core.Keyword(null,"xf","xf",401902988),((function (vec__27801,attrs,vec__27802,rows,map__27803,map__27803__$1,columns,checkboxes){
return (function (col,val){
return val;
});})(vec__27801,attrs,vec__27802,rows,map__27803,map__27803__$1,columns,checkboxes))
);
var labels = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,columns);
var col_keys = (function (){var or__18719__auto__ = cljs.core.not_empty.call(null,cljs.core.map.call(null,cljs.core.first,columns));
if(cljs.core.truth_(or__18719__auto__)){
return or__18719__auto__;
} else {
return cljs.core.distinct.call(null,cljs.core.mapcat.call(null,cljs.core.keys,rows));
}
})();
var map__27804 = checkboxes;
var map__27804__$1 = ((((!((map__27804 == null)))?((((map__27804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27804):map__27804);
var selection = cljs.core.get.call(null,map__27804__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var selection_path = cljs.core.get.call(null,map__27804__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var row_id_fn = cljs.core.get.call(null,map__27804__$1,new cljs.core.Keyword(null,"row-id","row-id",246619473),cljs.core.comp.call(null,cljs.core.first,cljs.core.vals));
var nil_selects_all_QMARK_ = cljs.core.get.call(null,map__27804__$1,new cljs.core.Keyword(null,"nil-selects-all?","nil-selects-all?",1855939238));
var selected = (cljs.core.truth_(selection)?(function (){var or__18719__auto__ = reforms.binding.core.get_in.call(null,selection,selection_path);
if(cljs.core.truth_(or__18719__auto__)){
return or__18719__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})():null);
var select_all = (cljs.core.truth_(selection)?(function (){var and__18707__auto__ = nil_selects_all_QMARK_;
if(cljs.core.truth_(and__18707__auto__)){
return (reforms.binding.core.get_in.call(null,selection,selection_path) == null);
} else {
return and__18707__auto__;
}
})():null);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),attrs], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.concat.call(null,(cljs.core.truth_(checkboxes)?(function (){var all_values = cljs.core.map.call(null,row_id_fn,rows);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,(function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),reforms.table.simple_checkbox.call(null,(function (){var or__18719__auto__ = select_all;
if(cljs.core.truth_(or__18719__auto__)){
return or__18719__auto__;
} else {
return reforms.table.all_selected_QMARK_.call(null,selected,all_values);
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (all_values,vec__27801,attrs,vec__27802,rows,map__27803,map__27803__$1,columns,checkboxes,xf,labels,col_keys,map__27804,map__27804__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function (checked){
return reforms.binding.core.swap_BANG_.call(null,selection,selection_path,((function (all_values,vec__27801,attrs,vec__27802,rows,map__27803,map__27803__$1,columns,checkboxes,xf,labels,col_keys,map__27804,map__27804__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function (prev_selected){
if(cljs.core.truth_(checked)){
return cljs.core.into.call(null,(function (){var or__18719__auto__ = prev_selected;
if(cljs.core.truth_(or__18719__auto__)){
return or__18719__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),all_values);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});})(all_values,vec__27801,attrs,vec__27802,rows,map__27803,map__27803__$1,columns,checkboxes,xf,labels,col_keys,map__27804,map__27804__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
);
});})(all_values,vec__27801,attrs,vec__27802,rows,map__27803,map__27803__$1,columns,checkboxes,xf,labels,col_keys,map__27804,map__27804__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
)], null);
})());
})():null),(function (){var iter__19491__auto__ = ((function (vec__27801,attrs,vec__27802,rows,map__27803,map__27803__$1,columns,checkboxes,xf,labels,col_keys,map__27804,map__27804__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function reforms$table$iter__27807(s__27808){
return (new cljs.core.LazySeq(null,((function (vec__27801,attrs,vec__27802,rows,map__27803,map__27803__$1,columns,checkboxes,xf,labels,col_keys,map__27804,map__27804__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function (){
var s__27808__$1 = s__27808;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27808__$1);
if(temp__4425__auto__){
var s__27808__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27808__$2)){
var c__19489__auto__ = cljs.core.chunk_first.call(null,s__27808__$2);
var size__19490__auto__ = cljs.core.count.call(null,c__19489__auto__);
var b__27810 = cljs.core.chunk_buffer.call(null,size__19490__auto__);
if((function (){var i__27809 = (0);
while(true){
if((i__27809 < size__19490__auto__)){
var col = cljs.core._nth.call(null,c__19489__auto__,i__27809);
cljs.core.chunk_append.call(null,b__27810,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),(function (){var or__18719__auto__ = labels.call(null,col);
if(cljs.core.truth_(or__18719__auto__)){
return or__18719__auto__;
} else {
return col;
}
})()], null));

var G__27834 = (i__27809 + (1));
i__27809 = G__27834;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27810),reforms$table$iter__27807.call(null,cljs.core.chunk_rest.call(null,s__27808__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27810),null);
}
} else {
var col = cljs.core.first.call(null,s__27808__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),(function (){var or__18719__auto__ = labels.call(null,col);
if(cljs.core.truth_(or__18719__auto__)){
return or__18719__auto__;
} else {
return col;
}
})()], null),reforms$table$iter__27807.call(null,cljs.core.rest.call(null,s__27808__$2)));
}
} else {
return null;
}
break;
}
});})(vec__27801,attrs,vec__27802,rows,map__27803,map__27803__$1,columns,checkboxes,xf,labels,col_keys,map__27804,map__27804__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
,null,null));
});})(vec__27801,attrs,vec__27802,rows,map__27803,map__27803__$1,columns,checkboxes,xf,labels,col_keys,map__27804,map__27804__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
;
return iter__19491__auto__.call(null,col_keys);
})()))], null)),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),(function (){var iter__19491__auto__ = ((function (vec__27801,attrs,vec__27802,rows,map__27803,map__27803__$1,columns,checkboxes,xf,labels,col_keys,map__27804,map__27804__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function reforms$table$iter__27811(s__27812){
return (new cljs.core.LazySeq(null,((function (vec__27801,attrs,vec__27802,rows,map__27803,map__27803__$1,columns,checkboxes,xf,labels,col_keys,map__27804,map__27804__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function (){
var s__27812__$1 = s__27812;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27812__$1);
if(temp__4425__auto__){
var s__27812__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27812__$2)){
var c__19489__auto__ = cljs.core.chunk_first.call(null,s__27812__$2);
var size__19490__auto__ = cljs.core.count.call(null,c__19489__auto__);
var b__27814 = cljs.core.chunk_buffer.call(null,size__19490__auto__);
if((function (){var i__27813 = (0);
while(true){
if((i__27813 < size__19490__auto__)){
var row = cljs.core._nth.call(null,c__19489__auto__,i__27813);
cljs.core.chunk_append.call(null,b__27814,(function (){var value = row_id_fn.call(null,row);
var row_selected = (function (){var and__18707__auto__ = checkboxes;
if(cljs.core.truth_(and__18707__auto__)){
var or__18719__auto__ = select_all;
if(cljs.core.truth_(or__18719__auto__)){
return or__18719__auto__;
} else {
return selected.call(null,row_id_fn.call(null,row));
}
} else {
return and__18707__auto__;
}
})();
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(cljs.core.truth_(row_selected)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"table-row-selected"], null):null)], null),cljs.core.concat.call(null,(cljs.core.truth_(checkboxes)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),reforms.table.simple_checkbox.call(null,row_selected,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27813,value,row_selected,row,c__19489__auto__,size__19490__auto__,b__27814,s__27812__$2,temp__4425__auto__,vec__27801,attrs,vec__27802,rows,map__27803,map__27803__$1,columns,checkboxes,xf,labels,col_keys,map__27804,map__27804__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function (checked){
return reforms.binding.core.swap_BANG_.call(null,selection,selection_path,((function (i__27813,value,row_selected,row,c__19489__auto__,size__19490__auto__,b__27814,s__27812__$2,temp__4425__auto__,vec__27801,attrs,vec__27802,rows,map__27803,map__27803__$1,columns,checkboxes,xf,labels,col_keys,map__27804,map__27804__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function (prev_selected){
var all_values = cljs.core.map.call(null,row_id_fn,rows);
if(cljs.core.truth_(select_all)){
return cljs.core.disj.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,all_values),value);
} else {
if(cljs.core.truth_(checked)){
return cljs.core.conj.call(null,(function (){var or__18719__auto__ = prev_selected;
if(cljs.core.truth_(or__18719__auto__)){
return or__18719__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),value);
} else {
return cljs.core.disj.call(null,(function (){var or__18719__auto__ = prev_selected;
if(cljs.core.truth_(or__18719__auto__)){
return or__18719__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),value);

}
}
});})(i__27813,value,row_selected,row,c__19489__auto__,size__19490__auto__,b__27814,s__27812__$2,temp__4425__auto__,vec__27801,attrs,vec__27802,rows,map__27803,map__27803__$1,columns,checkboxes,xf,labels,col_keys,map__27804,map__27804__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
);
});})(i__27813,value,row_selected,row,c__19489__auto__,size__19490__auto__,b__27814,s__27812__$2,temp__4425__auto__,vec__27801,attrs,vec__27802,rows,map__27803,map__27803__$1,columns,checkboxes,xf,labels,col_keys,map__27804,map__27804__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
)], null)], null):null),(function (){var iter__19491__auto__ = ((function (i__27813,value,row_selected,row,c__19489__auto__,size__19490__auto__,b__27814,s__27812__$2,temp__4425__auto__,vec__27801,attrs,vec__27802,rows,map__27803,map__27803__$1,columns,checkboxes,xf,labels,col_keys,map__27804,map__27804__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function reforms$table$iter__27811_$_iter__27823(s__27824){
return (new cljs.core.LazySeq(null,((function (i__27813,value,row_selected,row,c__19489__auto__,size__19490__auto__,b__27814,s__27812__$2,temp__4425__auto__,vec__27801,attrs,vec__27802,rows,map__27803,map__27803__$1,columns,checkboxes,xf,labels,col_keys,map__27804,map__27804__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function (){
var s__27824__$1 = s__27824;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__27824__$1);
if(temp__4425__auto____$1){
var s__27824__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27824__$2)){
var c__19489__auto____$1 = cljs.core.chunk_first.call(null,s__27824__$2);
var size__19490__auto____$1 = cljs.core.count.call(null,c__19489__auto____$1);
var b__27826 = cljs.core.chunk_buffer.call(null,size__19490__auto____$1);
if((function (){var i__27825 = (0);
while(true){
if((i__27825 < size__19490__auto____$1)){
var col = cljs.core._nth.call(null,c__19489__auto____$1,i__27825);
cljs.core.chunk_append.call(null,b__27826,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),xf.call(null,col,row.call(null,col))], null));

var G__27835 = (i__27825 + (1));
i__27825 = G__27835;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27826),reforms$table$iter__27811_$_iter__27823.call(null,cljs.core.chunk_rest.call(null,s__27824__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27826),null);
}
} else {
var col = cljs.core.first.call(null,s__27824__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),xf.call(null,col,row.call(null,col))], null),reforms$table$iter__27811_$_iter__27823.call(null,cljs.core.rest.call(null,s__27824__$2)));
}
} else {
return null;
}
break;
}
});})(i__27813,value,row_selected,row,c__19489__auto__,size__19490__auto__,b__27814,s__27812__$2,temp__4425__auto__,vec__27801,attrs,vec__27802,rows,map__27803,map__27803__$1,columns,checkboxes,xf,labels,col_keys,map__27804,map__27804__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
,null,null));
});})(i__27813,value,row_selected,row,c__19489__auto__,size__19490__auto__,b__27814,s__27812__$2,temp__4425__auto__,vec__27801,attrs,vec__27802,rows,map__27803,map__27803__$1,columns,checkboxes,xf,labels,col_keys,map__27804,map__27804__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
;
return iter__19491__auto__.call(null,col_keys);
})()));
})());

var G__27836 = (i__27813 + (1));
i__27813 = G__27836;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27814),reforms$table$iter__27811.call(null,cljs.core.chunk_rest.call(null,s__27812__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27814),null);
}
} else {
var row = cljs.core.first.call(null,s__27812__$2);
return cljs.core.cons.call(null,(function (){var value = row_id_fn.call(null,row);
var row_selected = (function (){var and__18707__auto__ = checkboxes;
if(cljs.core.truth_(and__18707__auto__)){
var or__18719__auto__ = select_all;
if(cljs.core.truth_(or__18719__auto__)){
return or__18719__auto__;
} else {
return selected.call(null,row_id_fn.call(null,row));
}
} else {
return and__18707__auto__;
}
})();
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(cljs.core.truth_(row_selected)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"table-row-selected"], null):null)], null),cljs.core.concat.call(null,(cljs.core.truth_(checkboxes)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),reforms.table.simple_checkbox.call(null,row_selected,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (value,row_selected,row,s__27812__$2,temp__4425__auto__,vec__27801,attrs,vec__27802,rows,map__27803,map__27803__$1,columns,checkboxes,xf,labels,col_keys,map__27804,map__27804__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function (checked){
return reforms.binding.core.swap_BANG_.call(null,selection,selection_path,((function (value,row_selected,row,s__27812__$2,temp__4425__auto__,vec__27801,attrs,vec__27802,rows,map__27803,map__27803__$1,columns,checkboxes,xf,labels,col_keys,map__27804,map__27804__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function (prev_selected){
var all_values = cljs.core.map.call(null,row_id_fn,rows);
if(cljs.core.truth_(select_all)){
return cljs.core.disj.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,all_values),value);
} else {
if(cljs.core.truth_(checked)){
return cljs.core.conj.call(null,(function (){var or__18719__auto__ = prev_selected;
if(cljs.core.truth_(or__18719__auto__)){
return or__18719__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),value);
} else {
return cljs.core.disj.call(null,(function (){var or__18719__auto__ = prev_selected;
if(cljs.core.truth_(or__18719__auto__)){
return or__18719__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),value);

}
}
});})(value,row_selected,row,s__27812__$2,temp__4425__auto__,vec__27801,attrs,vec__27802,rows,map__27803,map__27803__$1,columns,checkboxes,xf,labels,col_keys,map__27804,map__27804__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
);
});})(value,row_selected,row,s__27812__$2,temp__4425__auto__,vec__27801,attrs,vec__27802,rows,map__27803,map__27803__$1,columns,checkboxes,xf,labels,col_keys,map__27804,map__27804__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
)], null)], null):null),(function (){var iter__19491__auto__ = ((function (value,row_selected,row,s__27812__$2,temp__4425__auto__,vec__27801,attrs,vec__27802,rows,map__27803,map__27803__$1,columns,checkboxes,xf,labels,col_keys,map__27804,map__27804__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function reforms$table$iter__27811_$_iter__27827(s__27828){
return (new cljs.core.LazySeq(null,((function (value,row_selected,row,s__27812__$2,temp__4425__auto__,vec__27801,attrs,vec__27802,rows,map__27803,map__27803__$1,columns,checkboxes,xf,labels,col_keys,map__27804,map__27804__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function (){
var s__27828__$1 = s__27828;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__27828__$1);
if(temp__4425__auto____$1){
var s__27828__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27828__$2)){
var c__19489__auto__ = cljs.core.chunk_first.call(null,s__27828__$2);
var size__19490__auto__ = cljs.core.count.call(null,c__19489__auto__);
var b__27830 = cljs.core.chunk_buffer.call(null,size__19490__auto__);
if((function (){var i__27829 = (0);
while(true){
if((i__27829 < size__19490__auto__)){
var col = cljs.core._nth.call(null,c__19489__auto__,i__27829);
cljs.core.chunk_append.call(null,b__27830,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),xf.call(null,col,row.call(null,col))], null));

var G__27837 = (i__27829 + (1));
i__27829 = G__27837;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27830),reforms$table$iter__27811_$_iter__27827.call(null,cljs.core.chunk_rest.call(null,s__27828__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27830),null);
}
} else {
var col = cljs.core.first.call(null,s__27828__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),xf.call(null,col,row.call(null,col))], null),reforms$table$iter__27811_$_iter__27827.call(null,cljs.core.rest.call(null,s__27828__$2)));
}
} else {
return null;
}
break;
}
});})(value,row_selected,row,s__27812__$2,temp__4425__auto__,vec__27801,attrs,vec__27802,rows,map__27803,map__27803__$1,columns,checkboxes,xf,labels,col_keys,map__27804,map__27804__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
,null,null));
});})(value,row_selected,row,s__27812__$2,temp__4425__auto__,vec__27801,attrs,vec__27802,rows,map__27803,map__27803__$1,columns,checkboxes,xf,labels,col_keys,map__27804,map__27804__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
;
return iter__19491__auto__.call(null,col_keys);
})()));
})(),reforms$table$iter__27811.call(null,cljs.core.rest.call(null,s__27812__$2)));
}
} else {
return null;
}
break;
}
});})(vec__27801,attrs,vec__27802,rows,map__27803,map__27803__$1,columns,checkboxes,xf,labels,col_keys,map__27804,map__27804__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
,null,null));
});})(vec__27801,attrs,vec__27802,rows,map__27803,map__27803__$1,columns,checkboxes,xf,labels,col_keys,map__27804,map__27804__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
;
return iter__19491__auto__.call(null,rows);
})())], null));
});

reforms.table.table.cljs$lang$maxFixedArity = (0);

reforms.table.table.cljs$lang$applyTo = (function (seq27800){
return reforms.table.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27800));
});

//# sourceMappingURL=table.js.map?rel=1472152827747