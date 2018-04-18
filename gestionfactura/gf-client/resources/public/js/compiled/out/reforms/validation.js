// Compiled by ClojureScript 1.7.107 {}
goog.provide('reforms.validation');
goog.require('cljs.core');
goog.require('reforms.core');
goog.require('reforms.binding.core');
goog.require('clojure.string');
reforms.validation.valid_QMARK_;
reforms.validation.find_validation_error = (function reforms$validation$find_validation_error(kork,errors){
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__27879_SHARP_){
return new cljs.core.Keyword(null,"korks","korks",-1343842342).cljs$core$IFn$_invoke$arity$1(p1__27879_SHARP_).call(null,kork);
}),errors));
} else {
return null;
}
});
reforms.validation.sequable_QMARK_ = (function reforms$validation$sequable_QMARK_(x){
try{cljs.core.seq.call(null,x);

return true;
}catch (e27881){if((e27881 instanceof Error)){
var _ = e27881;
return false;
} else {
throw e27881;

}
}});
reforms.validation.present_QMARK_ = (function reforms$validation$present_QMARK_(x){
if(cljs.core.truth_((function (){var and__18707__auto__ = x;
if(cljs.core.truth_(and__18707__auto__)){
return (cljs.core.not.call(null,(function (){var and__18707__auto____$1 = typeof x === 'string';
if(and__18707__auto____$1){
return clojure.string.blank_QMARK_.call(null,x);
} else {
return and__18707__auto____$1;
}
})())) && (cljs.core.not.call(null,(function (){var and__18707__auto____$1 = reforms.validation.sequable_QMARK_.call(null,x);
if(cljs.core.truth_(and__18707__auto____$1)){
return cljs.core.empty_QMARK_.call(null,x);
} else {
return and__18707__auto____$1;
}
})()));
} else {
return and__18707__auto__;
}
})())){
return true;
} else {
return null;
}
});
reforms.validation._STAR_validation_errors_STAR_ = null;
reforms.validation.validating_field = (function reforms$validation$validating_field(var_args){
var args__19784__auto__ = [];
var len__19777__auto___27884 = arguments.length;
var i__19778__auto___27885 = (0);
while(true){
if((i__19778__auto___27885 < len__19777__auto___27884)){
args__19784__auto__.push((arguments[i__19778__auto___27885]));

var G__27886 = (i__19778__auto___27885 + (1));
i__19778__auto___27885 = G__27886;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((1) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((1)),(0))):null);
return reforms.validation.validating_field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19785__auto__);
});

reforms.validation.validating_field.cljs$core$IFn$_invoke$arity$variadic = (function (field_fn,args){
if(cljs.core.not_any_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"validation-error-fn","validation-error-fn",-625000244),null], null), null),args)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("The validating version uses :validation-error-fn internally."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not-any?","not-any?",-2114707554,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"validation-error-fn","validation-error-fn",-625000244),null], null), null),new cljs.core.Symbol(null,"args","args",-1338879193,null))))].join('')));
}

return cljs.core.apply.call(null,field_fn,cljs.core.conj.call(null,cljs.core.vec.call(null,args),new cljs.core.Keyword(null,"valid?","valid?",-212412379),(function (korks){
return reforms.validation.valid_QMARK_.call(null,korks,reforms.validation._STAR_validation_errors_STAR_);
}),new cljs.core.Keyword(null,"validation-error-fn","validation-error-fn",-625000244),(function (korks){
var temp__4425__auto__ = reforms.validation.find_validation_error.call(null,korks,reforms.validation._STAR_validation_errors_STAR_);
if(cljs.core.truth_(temp__4425__auto__)){
var err = temp__4425__auto__;
return new cljs.core.Keyword(null,"error-message","error-message",1756021561).cljs$core$IFn$_invoke$arity$1(err);
} else {
return null;
}
})));
});

reforms.validation.validating_field.cljs$lang$maxFixedArity = (1);

reforms.validation.validating_field.cljs$lang$applyTo = (function (seq27882){
var G__27883 = cljs.core.first.call(null,seq27882);
var seq27882__$1 = cljs.core.next.call(null,seq27882);
return reforms.validation.validating_field.cljs$core$IFn$_invoke$arity$variadic(G__27883,seq27882__$1);
});
/**
 * Used by [reforms.validation/validating-fields] macro.
 */
reforms.validation.validating_fields_fn = (function reforms$validation$validating_fields_fn(var_args){
var args__19784__auto__ = [];
var len__19777__auto___27894 = arguments.length;
var i__19778__auto___27895 = (0);
while(true){
if((i__19778__auto___27895 < len__19777__auto___27894)){
args__19784__auto__.push((arguments[i__19778__auto___27895]));

var G__27896 = (i__19778__auto___27895 + (1));
i__19778__auto___27895 = G__27896;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((1) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((1)),(0))):null);
return reforms.validation.validating_fields_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19785__auto__);
});

reforms.validation.validating_fields_fn.cljs$core$IFn$_invoke$arity$variadic = (function (validation_errors,fields){
var _STAR_validation_errors_STAR_27889 = reforms.validation._STAR_validation_errors_STAR_;
reforms.validation._STAR_validation_errors_STAR_ = validation_errors;

try{return cljs.core.doall.call(null,(function (){var iter__19491__auto__ = ((function (_STAR_validation_errors_STAR_27889){
return (function reforms$validation$iter__27890(s__27891){
return (new cljs.core.LazySeq(null,((function (_STAR_validation_errors_STAR_27889){
return (function (){
var s__27891__$1 = s__27891;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27891__$1);
if(temp__4425__auto__){
var s__27891__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27891__$2)){
var c__19489__auto__ = cljs.core.chunk_first.call(null,s__27891__$2);
var size__19490__auto__ = cljs.core.count.call(null,c__19489__auto__);
var b__27893 = cljs.core.chunk_buffer.call(null,size__19490__auto__);
if((function (){var i__27892 = (0);
while(true){
if((i__27892 < size__19490__auto__)){
var field = cljs.core._nth.call(null,c__19489__auto__,i__27892);
cljs.core.chunk_append.call(null,b__27893,field.call(null));

var G__27897 = (i__27892 + (1));
i__27892 = G__27897;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27893),reforms$validation$iter__27890.call(null,cljs.core.chunk_rest.call(null,s__27891__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27893),null);
}
} else {
var field = cljs.core.first.call(null,s__27891__$2);
return cljs.core.cons.call(null,field.call(null),reforms$validation$iter__27890.call(null,cljs.core.rest.call(null,s__27891__$2)));
}
} else {
return null;
}
break;
}
});})(_STAR_validation_errors_STAR_27889))
,null,null));
});})(_STAR_validation_errors_STAR_27889))
;
return iter__19491__auto__.call(null,fields);
})());
}finally {reforms.validation._STAR_validation_errors_STAR_ = _STAR_validation_errors_STAR_27889;
}});

reforms.validation.validating_fields_fn.cljs$lang$maxFixedArity = (1);

reforms.validation.validating_fields_fn.cljs$lang$applyTo = (function (seq27887){
var G__27888 = cljs.core.first.call(null,seq27887);
var seq27887__$1 = cljs.core.next.call(null,seq27887);
return reforms.validation.validating_fields_fn.cljs$core$IFn$_invoke$arity$variadic(G__27888,seq27887__$1);
});
/**
 * Returns a validation error for a key sequence.
 * 
 * Arguments:
 * 
 * - korks         - key sequence the error refers to
 * - error-message - string containing the error message
 */
reforms.validation.validation_error = (function reforms$validation$validation_error(korks,error_message){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"korks","korks",-1343842342),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.seq.call(null,korks)),new cljs.core.Keyword(null,"error-message","error-message",1756021561),error_message], null);
});
/**
 * Validates data and returns a list of errors.
 * 
 * Arguments:
 * 
 * - data      - data to validate
 * - validators - seq of validators to use
 */
reforms.validation.validate = (function reforms$validation$validate(var_args){
var args__19784__auto__ = [];
var len__19777__auto___27901 = arguments.length;
var i__19778__auto___27902 = (0);
while(true){
if((i__19778__auto___27902 < len__19777__auto___27901)){
args__19784__auto__.push((arguments[i__19778__auto___27902]));

var G__27903 = (i__19778__auto___27902 + (1));
i__19778__auto___27902 = G__27903;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((1) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((1)),(0))):null);
return reforms.validation.validate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19785__auto__);
});

reforms.validation.validate.cljs$core$IFn$_invoke$arity$variadic = (function (data,validators){
return cljs.core.doall.call(null,cljs.core.distinct.call(null,cljs.core.flatten.call(null,cljs.core.keep.call(null,(function (p1__27898_SHARP_){
return p1__27898_SHARP_.call(null,data);
}),validators))));
});

reforms.validation.validate.cljs$lang$maxFixedArity = (1);

reforms.validation.validate.cljs$lang$applyTo = (function (seq27899){
var G__27900 = cljs.core.first.call(null,seq27899);
var seq27899__$1 = cljs.core.next.call(null,seq27899);
return reforms.validation.validate.cljs$core$IFn$_invoke$arity$variadic(G__27900,seq27899__$1);
});
/**
 * Returns true if there are no errors.
 * 
 * Arguments:
 * 
 * - errors - result of validation
 * - kork   - (optional) match against this key seq
 */
reforms.validation.valid_QMARK_ = (function reforms$validation$valid_QMARK_(var_args){
var args27904 = [];
var len__19777__auto___27907 = arguments.length;
var i__19778__auto___27908 = (0);
while(true){
if((i__19778__auto___27908 < len__19777__auto___27907)){
args27904.push((arguments[i__19778__auto___27908]));

var G__27909 = (i__19778__auto___27908 + (1));
i__19778__auto___27908 = G__27909;
continue;
} else {
}
break;
}

var G__27906 = args27904.length;
switch (G__27906) {
case 1:
return reforms.validation.valid_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reforms.validation.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27904.length)].join('')));

}
});

reforms.validation.valid_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (errors){
return ((errors == null)) || (cljs.core.empty_QMARK_.call(null,errors));
});

reforms.validation.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (kork,errors){
return (reforms.validation.find_validation_error.call(null,kork,errors) == null);
});

reforms.validation.valid_QMARK_.cljs$lang$maxFixedArity = 2;
/**
 * Complement of [[valid?]]
 */
reforms.validation.invalid_QMARK_ = cljs.core.complement.call(null,reforms.validation.valid_QMARK_);
/**
 * Renders errors as unordered list.
 * 
 * Arguments:
 * 
 * - errors - results of validation
 */
reforms.validation.render_errors = (function reforms$validation$render_errors(errors){
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("error validation"),cljs.core.str(((cljs.core.seq.call(null,errors))?" validation-failed":null))].join('')], null),(function (){var iter__19491__auto__ = (function reforms$validation$render_errors_$_iter__27915(s__27916){
return (new cljs.core.LazySeq(null,(function (){
var s__27916__$1 = s__27916;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27916__$1);
if(temp__4425__auto__){
var s__27916__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27916__$2)){
var c__19489__auto__ = cljs.core.chunk_first.call(null,s__27916__$2);
var size__19490__auto__ = cljs.core.count.call(null,c__19489__auto__);
var b__27918 = cljs.core.chunk_buffer.call(null,size__19490__auto__);
if((function (){var i__27917 = (0);
while(true){
if((i__27917 < size__19490__auto__)){
var failure = cljs.core._nth.call(null,c__19489__auto__,i__27917);
cljs.core.chunk_append.call(null,b__27918,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"error-message","error-message",1756021561).cljs$core$IFn$_invoke$arity$1(failure)], null));

var G__27919 = (i__27917 + (1));
i__27917 = G__27919;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27918),reforms$validation$render_errors_$_iter__27915.call(null,cljs.core.chunk_rest.call(null,s__27916__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27918),null);
}
} else {
var failure = cljs.core.first.call(null,s__27916__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"error-message","error-message",1756021561).cljs$core$IFn$_invoke$arity$1(failure)], null),reforms$validation$render_errors_$_iter__27915.call(null,cljs.core.rest.call(null,s__27916__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19491__auto__.call(null,errors);
})()], null);
} else {
return null;
}
});
/**
 * Equality validator.
 * 
 * Example:
 * 
 *     (equal [:user :password1] [:user :password2] "Passwords do not match"]
 */
reforms.validation.equal = (function reforms$validation$equal(korks1,korks2,error_message){
return (function (data){
var lhs = (function (){var or__18719__auto__ = cljs.core.get_in.call(null,data,korks1);
if(cljs.core.truth_(or__18719__auto__)){
return or__18719__auto__;
} else {
return "";
}
})();
var rhs = (function (){var or__18719__auto__ = cljs.core.get_in.call(null,data,korks2);
if(cljs.core.truth_(or__18719__auto__)){
return or__18719__auto__;
} else {
return "";
}
})();
if(cljs.core._EQ_.call(null,lhs,rhs)){
return null;
} else {
return reforms.validation.validation_error.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks2], null),error_message);
}
});
});
/**
 * Presence validator.
 * 
 *   Example:
 * 
 *    (present [:user :login] "Enter the login"]
 */
reforms.validation.present = (function reforms$validation$present(korks,error_message){
return (function (data){
var x = cljs.core.get_in.call(null,data,korks);
if(cljs.core.truth_(reforms.validation.present_QMARK_.call(null,x))){
return null;
} else {
return reforms.validation.validation_error.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null),error_message);
}
});
});
/**
 * Regex validator.
 * 
 *   Example:
 * 
 *    (matches [:user :email] #"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$" "Invalid email address"]
 */
reforms.validation.matches = (function reforms$validation$matches(korks,re,error_message){
return (function (data){
var x = cljs.core.get_in.call(null,data,korks);
if(cljs.core.truth_(cljs.core.re_matches.call(null,re,x))){
return null;
} else {
return reforms.validation.validation_error.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null),error_message);
}
});
});
/**
 * Predicate-based validator.
 * 
 *   Example:
 * 
 *   (is-true [:user :email] #(nil? (find-by-email %)) "Email already exists"]
 */
reforms.validation.is_true = (function reforms$validation$is_true(korks,f,error_message){
return (function (data){
if(cljs.core.truth_(f.call(null,cljs.core.get_in.call(null,data,korks)))){
return null;
} else {
return reforms.validation.validation_error.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null),error_message);
}
});
});
/**
 * Generates an error. Useful for errors not coming from data but from external sources such as Ajax or RPC.
 * 
 * Example:
 * 
 *     (force-error [:server-error] "Problem connecting to the REST API server")
 */
reforms.validation.force_error = (function reforms$validation$force_error(korks,error_message){
return (function (_){
return reforms.validation.validation_error.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null),error_message);
});
});
/**
 * Generates a 'no error' placeholder.
 */
reforms.validation.no_error = (function reforms$validation$no_error(){
return (function (_){
return null;
});
});
/**
 * Groups validators using 'and' boolean logic.
 */
reforms.validation.all = (function reforms$validation$all(var_args){
var args__19784__auto__ = [];
var len__19777__auto___27921 = arguments.length;
var i__19778__auto___27922 = (0);
while(true){
if((i__19778__auto___27922 < len__19777__auto___27921)){
args__19784__auto__.push((arguments[i__19778__auto___27922]));

var G__27923 = (i__19778__auto___27922 + (1));
i__19778__auto___27922 = G__27923;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return reforms.validation.all.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

reforms.validation.all.cljs$core$IFn$_invoke$arity$variadic = (function (validators){
return (function (data){
return cljs.core.apply.call(null,reforms.validation.validate,data,validators);
});
});

reforms.validation.all.cljs$lang$maxFixedArity = (0);

reforms.validation.all.cljs$lang$applyTo = (function (seq27920){
return reforms.validation.all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27920));
});
/**
 * Validates data and saves the result. **A stateful method.**
 * 
 * Arguments:
 * 
 * - cursor          - the data to validate
 * - ui-state-cursor - this is where validation result will be stored
 * - validators      - a seq of validators
 */
reforms.validation.validate_BANG_ = (function reforms$validation$validate_BANG_(var_args){
var args__19784__auto__ = [];
var len__19777__auto___27927 = arguments.length;
var i__19778__auto___27928 = (0);
while(true){
if((i__19778__auto___27928 < len__19777__auto___27927)){
args__19784__auto__.push((arguments[i__19778__auto___27928]));

var G__27929 = (i__19778__auto___27928 + (1));
i__19778__auto___27928 = G__27929;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((2) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((2)),(0))):null);
return reforms.validation.validate_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19785__auto__);
});

reforms.validation.validate_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cursor,ui_state_cursor,validators){
var validation_errors = cljs.core.apply.call(null,reforms.validation.validate,reforms.binding.core.deref.call(null,cursor),validators);
reforms.binding.core.reset_BANG_.call(null,ui_state_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"validation-errors","validation-errors",-13445981)], null),validation_errors);

return reforms.validation.valid_QMARK_.call(null,validation_errors);
});

reforms.validation.validate_BANG_.cljs$lang$maxFixedArity = (2);

reforms.validation.validate_BANG_.cljs$lang$applyTo = (function (seq27924){
var G__27925 = cljs.core.first.call(null,seq27924);
var seq27924__$1 = cljs.core.next.call(null,seq27924);
var G__27926 = cljs.core.first.call(null,seq27924__$1);
var seq27924__$2 = cljs.core.next.call(null,seq27924__$1);
return reforms.validation.validate_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27925,G__27926,seq27924__$2);
});
/**
 * Returns validation errors saved by [[validate!]] into ui-state-cursor.
 */
reforms.validation.validation_errors = (function reforms$validation$validation_errors(ui_state_cursor){
return reforms.binding.core.get_in.call(null,ui_state_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"validation-errors","validation-errors",-13445981)], null));
});
/**
 * Wrapper for [[reforms.core/html5-input]] adding support for validation.
 */
reforms.validation.html5_input = (function reforms$validation$html5_input(var_args){
var args__19784__auto__ = [];
var len__19777__auto___27931 = arguments.length;
var i__19778__auto___27932 = (0);
while(true){
if((i__19778__auto___27932 < len__19777__auto___27931)){
args__19784__auto__.push((arguments[i__19778__auto___27932]));

var G__27933 = (i__19778__auto___27932 + (1));
i__19778__auto___27932 = G__27933;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return reforms.validation.html5_input.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

reforms.validation.html5_input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.html5_input,args);
});

reforms.validation.html5_input.cljs$lang$maxFixedArity = (0);

reforms.validation.html5_input.cljs$lang$applyTo = (function (seq27930){
return reforms.validation.html5_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27930));
});
/**
 * Wrapper for [[reforms.core/password]] adding support for validation.
 */
reforms.validation.password = (function reforms$validation$password(var_args){
var args__19784__auto__ = [];
var len__19777__auto___27935 = arguments.length;
var i__19778__auto___27936 = (0);
while(true){
if((i__19778__auto___27936 < len__19777__auto___27935)){
args__19784__auto__.push((arguments[i__19778__auto___27936]));

var G__27937 = (i__19778__auto___27936 + (1));
i__19778__auto___27936 = G__27937;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return reforms.validation.password.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

reforms.validation.password.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.password,args);
});

reforms.validation.password.cljs$lang$maxFixedArity = (0);

reforms.validation.password.cljs$lang$applyTo = (function (seq27934){
return reforms.validation.password.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27934));
});
/**
 * Wrapper for [[reforms.core/text]] adding support for validation.
 */
reforms.validation.text = (function reforms$validation$text(var_args){
var args__19784__auto__ = [];
var len__19777__auto___27939 = arguments.length;
var i__19778__auto___27940 = (0);
while(true){
if((i__19778__auto___27940 < len__19777__auto___27939)){
args__19784__auto__.push((arguments[i__19778__auto___27940]));

var G__27941 = (i__19778__auto___27940 + (1));
i__19778__auto___27940 = G__27941;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return reforms.validation.text.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

reforms.validation.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.text,args);
});

reforms.validation.text.cljs$lang$maxFixedArity = (0);

reforms.validation.text.cljs$lang$applyTo = (function (seq27938){
return reforms.validation.text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27938));
});
/**
 * Wrapper for [[reforms.core/textarea]] adding support for validation.
 */
reforms.validation.textarea = (function reforms$validation$textarea(var_args){
var args__19784__auto__ = [];
var len__19777__auto___27943 = arguments.length;
var i__19778__auto___27944 = (0);
while(true){
if((i__19778__auto___27944 < len__19777__auto___27943)){
args__19784__auto__.push((arguments[i__19778__auto___27944]));

var G__27945 = (i__19778__auto___27944 + (1));
i__19778__auto___27944 = G__27945;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return reforms.validation.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

reforms.validation.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.textarea,args);
});

reforms.validation.textarea.cljs$lang$maxFixedArity = (0);

reforms.validation.textarea.cljs$lang$applyTo = (function (seq27942){
return reforms.validation.textarea.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27942));
});
/**
 * Wrapper for [[reforms.core/checkbox]] adding support for validation.
 */
reforms.validation.checkbox = (function reforms$validation$checkbox(var_args){
var args__19784__auto__ = [];
var len__19777__auto___27947 = arguments.length;
var i__19778__auto___27948 = (0);
while(true){
if((i__19778__auto___27948 < len__19777__auto___27947)){
args__19784__auto__.push((arguments[i__19778__auto___27948]));

var G__27949 = (i__19778__auto___27948 + (1));
i__19778__auto___27948 = G__27949;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return reforms.validation.checkbox.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

reforms.validation.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.checkbox,args);
});

reforms.validation.checkbox.cljs$lang$maxFixedArity = (0);

reforms.validation.checkbox.cljs$lang$applyTo = (function (seq27946){
return reforms.validation.checkbox.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27946));
});
/**
 * Wrapper for [[reforms.core/select]] adding support for validation.
 */
reforms.validation.select = (function reforms$validation$select(var_args){
var args__19784__auto__ = [];
var len__19777__auto___27951 = arguments.length;
var i__19778__auto___27952 = (0);
while(true){
if((i__19778__auto___27952 < len__19777__auto___27951)){
args__19784__auto__.push((arguments[i__19778__auto___27952]));

var G__27953 = (i__19778__auto___27952 + (1));
i__19778__auto___27952 = G__27953;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return reforms.validation.select.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

reforms.validation.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.select,args);
});

reforms.validation.select.cljs$lang$maxFixedArity = (0);

reforms.validation.select.cljs$lang$applyTo = (function (seq27950){
return reforms.validation.select.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27950));
});
/**
 * Wrapper for [[reforms.core/button]] adding support for validation.
 */
reforms.validation.button = (function reforms$validation$button(var_args){
var args__19784__auto__ = [];
var len__19777__auto___27955 = arguments.length;
var i__19778__auto___27956 = (0);
while(true){
if((i__19778__auto___27956 < len__19777__auto___27955)){
args__19784__auto__.push((arguments[i__19778__auto___27956]));

var G__27957 = (i__19778__auto___27956 + (1));
i__19778__auto___27956 = G__27957;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return reforms.validation.button.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

reforms.validation.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.button,args);
});

reforms.validation.button.cljs$lang$maxFixedArity = (0);

reforms.validation.button.cljs$lang$applyTo = (function (seq27954){
return reforms.validation.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27954));
});
/**
 * Wrapper for [[reforms.core/button-primary]] adding support for validation.
 */
reforms.validation.button_primary = (function reforms$validation$button_primary(var_args){
var args__19784__auto__ = [];
var len__19777__auto___27959 = arguments.length;
var i__19778__auto___27960 = (0);
while(true){
if((i__19778__auto___27960 < len__19777__auto___27959)){
args__19784__auto__.push((arguments[i__19778__auto___27960]));

var G__27961 = (i__19778__auto___27960 + (1));
i__19778__auto___27960 = G__27961;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return reforms.validation.button_primary.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

reforms.validation.button_primary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.button_primary,args);
});

reforms.validation.button_primary.cljs$lang$maxFixedArity = (0);

reforms.validation.button_primary.cljs$lang$applyTo = (function (seq27958){
return reforms.validation.button_primary.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27958));
});
/**
 * Wrapper for [[reforms.core/button-default]] adding support for validation.
 */
reforms.validation.button_default = (function reforms$validation$button_default(var_args){
var args__19784__auto__ = [];
var len__19777__auto___27963 = arguments.length;
var i__19778__auto___27964 = (0);
while(true){
if((i__19778__auto___27964 < len__19777__auto___27963)){
args__19784__auto__.push((arguments[i__19778__auto___27964]));

var G__27965 = (i__19778__auto___27964 + (1));
i__19778__auto___27964 = G__27965;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return reforms.validation.button_default.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

reforms.validation.button_default.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.button_default,args);
});

reforms.validation.button_default.cljs$lang$maxFixedArity = (0);

reforms.validation.button_default.cljs$lang$applyTo = (function (seq27962){
return reforms.validation.button_default.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27962));
});
/**
 * Wrapper for [[reforms.core/datetime]] adding support for validation.
 */
reforms.validation.datetime = (function reforms$validation$datetime(var_args){
var args__19784__auto__ = [];
var len__19777__auto___27967 = arguments.length;
var i__19778__auto___27968 = (0);
while(true){
if((i__19778__auto___27968 < len__19777__auto___27967)){
args__19784__auto__.push((arguments[i__19778__auto___27968]));

var G__27969 = (i__19778__auto___27968 + (1));
i__19778__auto___27968 = G__27969;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return reforms.validation.datetime.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

reforms.validation.datetime.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.datetime,args);
});

reforms.validation.datetime.cljs$lang$maxFixedArity = (0);

reforms.validation.datetime.cljs$lang$applyTo = (function (seq27966){
return reforms.validation.datetime.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27966));
});
/**
 * Wrapper for [[reforms.core/datetime-local]] adding support for validation.
 */
reforms.validation.datetime_local = (function reforms$validation$datetime_local(var_args){
var args__19784__auto__ = [];
var len__19777__auto___27971 = arguments.length;
var i__19778__auto___27972 = (0);
while(true){
if((i__19778__auto___27972 < len__19777__auto___27971)){
args__19784__auto__.push((arguments[i__19778__auto___27972]));

var G__27973 = (i__19778__auto___27972 + (1));
i__19778__auto___27972 = G__27973;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return reforms.validation.datetime_local.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

reforms.validation.datetime_local.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.datetime_local,args);
});

reforms.validation.datetime_local.cljs$lang$maxFixedArity = (0);

reforms.validation.datetime_local.cljs$lang$applyTo = (function (seq27970){
return reforms.validation.datetime_local.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27970));
});
/**
 * Wrapper for [[reforms.core/date]] adding support for validation.
 */
reforms.validation.date = (function reforms$validation$date(var_args){
var args__19784__auto__ = [];
var len__19777__auto___27975 = arguments.length;
var i__19778__auto___27976 = (0);
while(true){
if((i__19778__auto___27976 < len__19777__auto___27975)){
args__19784__auto__.push((arguments[i__19778__auto___27976]));

var G__27977 = (i__19778__auto___27976 + (1));
i__19778__auto___27976 = G__27977;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return reforms.validation.date.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

reforms.validation.date.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.date,args);
});

reforms.validation.date.cljs$lang$maxFixedArity = (0);

reforms.validation.date.cljs$lang$applyTo = (function (seq27974){
return reforms.validation.date.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27974));
});
/**
 * Wrapper for [[reforms.core/month]] adding support for validation.
 */
reforms.validation.month = (function reforms$validation$month(var_args){
var args__19784__auto__ = [];
var len__19777__auto___27979 = arguments.length;
var i__19778__auto___27980 = (0);
while(true){
if((i__19778__auto___27980 < len__19777__auto___27979)){
args__19784__auto__.push((arguments[i__19778__auto___27980]));

var G__27981 = (i__19778__auto___27980 + (1));
i__19778__auto___27980 = G__27981;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return reforms.validation.month.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

reforms.validation.month.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.month,args);
});

reforms.validation.month.cljs$lang$maxFixedArity = (0);

reforms.validation.month.cljs$lang$applyTo = (function (seq27978){
return reforms.validation.month.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27978));
});
/**
 * Wrapper for [[reforms.core/time]] adding support for validation.
 */
reforms.validation.time = (function reforms$validation$time(var_args){
var args__19784__auto__ = [];
var len__19777__auto___27983 = arguments.length;
var i__19778__auto___27984 = (0);
while(true){
if((i__19778__auto___27984 < len__19777__auto___27983)){
args__19784__auto__.push((arguments[i__19778__auto___27984]));

var G__27985 = (i__19778__auto___27984 + (1));
i__19778__auto___27984 = G__27985;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return reforms.validation.time.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

reforms.validation.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.time,args);
});

reforms.validation.time.cljs$lang$maxFixedArity = (0);

reforms.validation.time.cljs$lang$applyTo = (function (seq27982){
return reforms.validation.time.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27982));
});
/**
 * Wrapper for [[reforms.core/week]] adding support for validation.
 */
reforms.validation.week = (function reforms$validation$week(var_args){
var args__19784__auto__ = [];
var len__19777__auto___27987 = arguments.length;
var i__19778__auto___27988 = (0);
while(true){
if((i__19778__auto___27988 < len__19777__auto___27987)){
args__19784__auto__.push((arguments[i__19778__auto___27988]));

var G__27989 = (i__19778__auto___27988 + (1));
i__19778__auto___27988 = G__27989;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return reforms.validation.week.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

reforms.validation.week.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.week,args);
});

reforms.validation.week.cljs$lang$maxFixedArity = (0);

reforms.validation.week.cljs$lang$applyTo = (function (seq27986){
return reforms.validation.week.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27986));
});
/**
 * Wrapper for [[reforms.core/number]] adding support for validation.
 */
reforms.validation.number = (function reforms$validation$number(var_args){
var args__19784__auto__ = [];
var len__19777__auto___27991 = arguments.length;
var i__19778__auto___27992 = (0);
while(true){
if((i__19778__auto___27992 < len__19777__auto___27991)){
args__19784__auto__.push((arguments[i__19778__auto___27992]));

var G__27993 = (i__19778__auto___27992 + (1));
i__19778__auto___27992 = G__27993;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return reforms.validation.number.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

reforms.validation.number.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.number,args);
});

reforms.validation.number.cljs$lang$maxFixedArity = (0);

reforms.validation.number.cljs$lang$applyTo = (function (seq27990){
return reforms.validation.number.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27990));
});
/**
 * Wrapper for [[reforms.core/email]] adding support for validation.
 */
reforms.validation.email = (function reforms$validation$email(var_args){
var args__19784__auto__ = [];
var len__19777__auto___27995 = arguments.length;
var i__19778__auto___27996 = (0);
while(true){
if((i__19778__auto___27996 < len__19777__auto___27995)){
args__19784__auto__.push((arguments[i__19778__auto___27996]));

var G__27997 = (i__19778__auto___27996 + (1));
i__19778__auto___27996 = G__27997;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return reforms.validation.email.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

reforms.validation.email.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.email,args);
});

reforms.validation.email.cljs$lang$maxFixedArity = (0);

reforms.validation.email.cljs$lang$applyTo = (function (seq27994){
return reforms.validation.email.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27994));
});
/**
 * Wrapper for [[reforms.core/url]] adding support for validation.
 */
reforms.validation.url = (function reforms$validation$url(var_args){
var args__19784__auto__ = [];
var len__19777__auto___27999 = arguments.length;
var i__19778__auto___28000 = (0);
while(true){
if((i__19778__auto___28000 < len__19777__auto___27999)){
args__19784__auto__.push((arguments[i__19778__auto___28000]));

var G__28001 = (i__19778__auto___28000 + (1));
i__19778__auto___28000 = G__28001;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return reforms.validation.url.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

reforms.validation.url.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.url,args);
});

reforms.validation.url.cljs$lang$maxFixedArity = (0);

reforms.validation.url.cljs$lang$applyTo = (function (seq27998){
return reforms.validation.url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27998));
});
/**
 * Wrapper for [[reforms.core/search]] adding support for validation.
 */
reforms.validation.search = (function reforms$validation$search(var_args){
var args__19784__auto__ = [];
var len__19777__auto___28003 = arguments.length;
var i__19778__auto___28004 = (0);
while(true){
if((i__19778__auto___28004 < len__19777__auto___28003)){
args__19784__auto__.push((arguments[i__19778__auto___28004]));

var G__28005 = (i__19778__auto___28004 + (1));
i__19778__auto___28004 = G__28005;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return reforms.validation.search.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

reforms.validation.search.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.search,args);
});

reforms.validation.search.cljs$lang$maxFixedArity = (0);

reforms.validation.search.cljs$lang$applyTo = (function (seq28002){
return reforms.validation.search.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28002));
});
/**
 * Wrapper for [[reforms.core/tel]] adding support for validation.
 */
reforms.validation.tel = (function reforms$validation$tel(var_args){
var args__19784__auto__ = [];
var len__19777__auto___28007 = arguments.length;
var i__19778__auto___28008 = (0);
while(true){
if((i__19778__auto___28008 < len__19777__auto___28007)){
args__19784__auto__.push((arguments[i__19778__auto___28008]));

var G__28009 = (i__19778__auto___28008 + (1));
i__19778__auto___28008 = G__28009;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return reforms.validation.tel.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

reforms.validation.tel.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.tel,args);
});

reforms.validation.tel.cljs$lang$maxFixedArity = (0);

reforms.validation.tel.cljs$lang$applyTo = (function (seq28006){
return reforms.validation.tel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28006));
});
/**
 * Wrapper for [[reforms.core/color]] adding support for validation.
 */
reforms.validation.color = (function reforms$validation$color(var_args){
var args__19784__auto__ = [];
var len__19777__auto___28011 = arguments.length;
var i__19778__auto___28012 = (0);
while(true){
if((i__19778__auto___28012 < len__19777__auto___28011)){
args__19784__auto__.push((arguments[i__19778__auto___28012]));

var G__28013 = (i__19778__auto___28012 + (1));
i__19778__auto___28012 = G__28013;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return reforms.validation.color.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

reforms.validation.color.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.color,args);
});

reforms.validation.color.cljs$lang$maxFixedArity = (0);

reforms.validation.color.cljs$lang$applyTo = (function (seq28010){
return reforms.validation.color.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28010));
});
/**
 * Renders errors for specified key seqs.
 * 
 *   Example:
 * 
 *    (error-alert [:user :name] [:my-custom-error])
 */
reforms.validation.error_alert = (function reforms$validation$error_alert(var_args){
var args__19784__auto__ = [];
var len__19777__auto___28015 = arguments.length;
var i__19778__auto___28016 = (0);
while(true){
if((i__19778__auto___28016 < len__19777__auto___28015)){
args__19784__auto__.push((arguments[i__19778__auto___28016]));

var G__28017 = (i__19778__auto___28016 + (1));
i__19778__auto___28016 = G__28017;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((0) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((0)),(0))):null);
return reforms.validation.error_alert.cljs$core$IFn$_invoke$arity$variadic(argseq__19785__auto__);
});

reforms.validation.error_alert.cljs$core$IFn$_invoke$arity$variadic = (function (korks){
return reforms.validation.render_errors.call(null,cljs.core.keep.call(null,(function (kork){
var temp__4425__auto__ = reforms.validation.find_validation_error.call(null,kork,reforms.validation._STAR_validation_errors_STAR_);
if(cljs.core.truth_(temp__4425__auto__)){
var err = temp__4425__auto__;
return err;
} else {
return null;
}
}),korks));
});

reforms.validation.error_alert.cljs$lang$maxFixedArity = (0);

reforms.validation.error_alert.cljs$lang$applyTo = (function (seq28014){
return reforms.validation.error_alert.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28014));
});

//# sourceMappingURL=validation.js.map?rel=1472152828295