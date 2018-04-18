// Compiled by ClojureScript 1.7.107 {}
goog.provide('gf_client.pages');
goog.require('cljs.core');
goog.require('gf_client.forms.form_login');
goog.require('gf_client.components');
goog.require('gf_client.api');
goog.require('gf_client.taskservice');
goog.require('gf_client.forms.factura_form');
gf_client.pages.login = (function gf_client$pages$login(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.well","div.well",-752456960),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gf_client.forms.form_login.signup_view], null)], null)], null);
});
/**
 * interface de prueba para las solicitudes por proveedor
 */
gf_client.pages.form_test_solicitudes_proveedor = (function gf_client$pages$form_test_solicitudes_proveedor(){
var id_proveedor = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"idproveedor","idproveedor",1928229705),null], null));
return ((function (id_proveedor){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.form-vertical","form.form-vertical",493208252),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.col-sm-2.form-group","span.col-sm-2.form-group",-201889482),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#taskName.form-control","input#taskName.form-control",-1730183112),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"ID Proveedor",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"idproveedor","idproveedor",1928229705).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,id_proveedor)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (id_proveedor){
return (function (p1__26401_SHARP_){
return cljs.core.swap_BANG_.call(null,id_proveedor,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idproveedor","idproveedor",1928229705)], null),p1__26401_SHARP_.target.value);
});})(id_proveedor))
], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.col-sm-2","span.col-sm-2",-1130178783),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-info.btn-raised","a.btn.btn-info.btn-raised",1840023504),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (id_proveedor){
return (function (e){
var temp__4425__auto__ = new cljs.core.Keyword(null,"idproveedor","idproveedor",1928229705).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,id_proveedor));
if(cljs.core.truth_(temp__4425__auto__)){
var _ = temp__4425__auto__;
gf_client.api.service_obtenerSolicitudesPorProveedor.call(null,new cljs.core.Keyword(null,"idproveedor","idproveedor",1928229705).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,id_proveedor)));

return cljs.core.reset_BANG_.call(null,id_proveedor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"idproveedor","idproveedor",1928229705),null], null));
} else {
return null;
}
});})(id_proveedor))
], null),"BUSCAR"], null)], null)], null)], null);
});
;})(id_proveedor))
});
gf_client.pages.pagina_ordenes_servicio = (function gf_client$pages$pagina_ordenes_servicio(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.well","div.well",-752456960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gf_client.components.login_panel,"Datos del Proveedor "], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-10","div.col-sm-10",353164674),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [gf_client.components.ordenes_servicio_panel,"Ordenes de Servicio del Proveedor ",new cljs.core.Keyword(null,"new","new",-2085437848)], null)], null)], null)], null);
});
gf_client.pages.about = (function gf_client$pages$about(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [gf_client.components.page_header,"Sistema de Gestion de Documentos para Facturaci\u00F3n","Desarrollada con Reagent, Clojure Script y Clojure."], null);
});
gf_client.pages.bandejaentrada = (function gf_client$pages$bandejaentrada(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gf_client.components.page_header,"Bandeja de entrada."], null);
});
gf_client.pages.formulario_factura = (function gf_client$pages$formulario_factura(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gf_client.forms.factura_form.formulario_factura], null);
});

//# sourceMappingURL=pages.js.map?rel=1472152822724