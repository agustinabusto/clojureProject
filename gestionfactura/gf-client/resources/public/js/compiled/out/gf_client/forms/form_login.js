// Compiled by ClojureScript 1.7.107 {}
goog.provide('gf_client.forms.form_login');
goog.require('cljs.core');
goog.require('reforms.table');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('reforms.validation');
goog.require('reagent.session');
goog.require('reforms.core');
goog.require('cljs.core.async');
goog.require('gf_client.api');
goog.require('reforms.reagent');
gf_client.forms.form_login.user = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"login","login",55217519),"",new cljs.core.Keyword(null,"password1","password1",-1551287478),""], null));
gf_client.forms.form_login.ui_state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
gf_client.forms.form_login.signup_validators = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reforms.validation.present.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519)], null),"Ingrese el nombre de usuario"),reforms.validation.present.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password1","password1",-1551287478)], null),"La password debe ser escrita")], null);
gf_client.forms.form_login.sign_up_BANG_ = (function gf_client$forms$form_login$sign_up_BANG_(user,ui_state){
if(cljs.core.truth_(cljs.core.apply.call(null,reforms.validation.validate_BANG_,user,ui_state,gf_client.forms.form_login.signup_validators))){
gf_client.api.service_login.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,user)),new cljs.core.Keyword(null,"password1","password1",-1551287478).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,user)));

if(cljs.core._EQ_.call(null,(cljs.core.deref.call(null,gf_client.api.proveedor_person_data)["result"]),"OK")){
return secretary.core.dispatch_BANG_.call(null,"/bandeja-entrada");
} else {
return null;
}
} else {
return null;
}
});
gf_client.forms.form_login.signup_view = (function gf_client$forms$form_login$signup_view(){
return reforms.core.panel.call(null,"Ingrese a Gestion de Facturas",(function (){
if(cljs.core.truth_(reforms.binding.core.valid_QMARK_.call(null,gf_client.forms.form_login.ui_state))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("The first argument to reforms.validation/form before optional attributes must be a valid binding target."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("reforms.binding.core","valid?","reforms.binding.core/valid?",-1432752474,null),new cljs.core.Symbol(null,"ui-state","ui-state",-2007503418,null))))].join('')));
}

return reforms.core.form.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (){
return gf_client.forms.form_login.sign_up_BANG_.call(null,gf_client.forms.form_login.user,gf_client.forms.form_login.ui_state);
})], null),reforms.validation.validating_fields_fn.call(null,reforms.validation.validation_errors.call(null,gf_client.forms.form_login.ui_state),(function (){
return reforms.validation.text.call(null,"Login",gf_client.forms.form_login.user,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Ingrese su usuario");
}),(function (){
return reforms.validation.password.call(null,"Password",gf_client.forms.form_login.user,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password1","password1",-1551287478)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Ingrese su Password");
}),(function (){
return reforms.core.form_buttons.call(null,reforms.validation.button_primary.call(null,"LOGIN",(function (){
return gf_client.forms.form_login.sign_up_BANG_.call(null,gf_client.forms.form_login.user,gf_client.forms.form_login.ui_state);
})));
})));
})()
);
});

//# sourceMappingURL=form_login.js.map?rel=1472152820691