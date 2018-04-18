// Compiled by ClojureScript 1.7.107 {}
goog.provide('gf_client.core');
goog.require('cljs.core');
goog.require('gf_client.events');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('gf_client.components');
goog.require('reagent.session');
goog.require('gf_client.forms.upload');
goog.require('gf_client.forms.factura_form');
goog.require('gf_client.forms.detalle_os');
goog.require('gf_client.utils');
goog.require('gf_client.taskservice');
goog.require('gf_client.pages');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof gf_client.core.navbar_data !== 'undefined'){
} else {
gf_client.core.navbar_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"brand","brand",557863343),"Exisoft",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Login",new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"url","url",276297046),"#/"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Bandeja de Entrada",new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"bandejaentrada","bandejaentrada",1986079010),new cljs.core.Keyword(null,"url","url",276297046),"#/bandeja-entrada"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Detalle Orden de Servicio",new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"detalle-os","detalle-os",2040514074),new cljs.core.Keyword(null,"url","url",276297046),"#/detalle-os"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Upload de Archivos",new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"upload","upload",-255769218),new cljs.core.Keyword(null,"url","url",276297046),"#/upload"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Formulario",new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"formulario-factura","formulario-factura",-657363841),new cljs.core.Keyword(null,"url","url",276297046),"#/formulario-factura"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"About",new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.Keyword(null,"url","url",276297046),"#/about"], null)], null)], null);
}
gf_client.core.pages = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"home","home",-74557309),gf_client.pages.login,new cljs.core.Keyword(null,"bandejaentrada","bandejaentrada",1986079010),gf_client.pages.pagina_ordenes_servicio,new cljs.core.Keyword(null,"task","task",-1476607993),gf_client.pages.formulario_factura,new cljs.core.Keyword(null,"about","about",1423892543),gf_client.pages.about,new cljs.core.Keyword(null,"formulario-factura","formulario-factura",-657363841),gf_client.forms.factura_form.formulario_factura,new cljs.core.Keyword(null,"detalle-os","detalle-os",2040514074),gf_client.forms.detalle_os.detalle_os_seleccionada,new cljs.core.Keyword(null,"upload","upload",-255769218),gf_client.forms.upload.upload_archivos], null);
gf_client.core.page = (function gf_client$core$page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gf_client.core.pages.call(null,reagent.session.get.call(null,new cljs.core.Keyword(null,"page","page",849072397)))], null);
});
var action__26387__auto___37588 = (function (params__26388__auto__){
if(cljs.core.map_QMARK_.call(null,params__26388__auto__)){
var map__37585 = params__26388__auto__;
var map__37585__$1 = ((((!((map__37585 == null)))?((((map__37585.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37585.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37585):map__37585);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
if(cljs.core.vector_QMARK_.call(null,params__26388__auto__)){
var vec__37587 = params__26388__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__26387__auto___37588);

var action__26387__auto___37592 = (function (params__26388__auto__){
if(cljs.core.map_QMARK_.call(null,params__26388__auto__)){
var map__37589 = params__26388__auto__;
var map__37589__$1 = ((((!((map__37589 == null)))?((((map__37589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37589):map__37589);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"task","task",-1476607993));
} else {
if(cljs.core.vector_QMARK_.call(null,params__26388__auto__)){
var vec__37591 = params__26388__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"task","task",-1476607993));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/task",action__26387__auto___37592);

var action__26387__auto___37596 = (function (params__26388__auto__){
if(cljs.core.map_QMARK_.call(null,params__26388__auto__)){
var map__37593 = params__26388__auto__;
var map__37593__$1 = ((((!((map__37593 == null)))?((((map__37593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37593):map__37593);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"about","about",1423892543));
} else {
if(cljs.core.vector_QMARK_.call(null,params__26388__auto__)){
var vec__37595 = params__26388__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"about","about",1423892543));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__26387__auto___37596);

var action__26387__auto___37600 = (function (params__26388__auto__){
if(cljs.core.map_QMARK_.call(null,params__26388__auto__)){
var map__37597 = params__26388__auto__;
var map__37597__$1 = ((((!((map__37597 == null)))?((((map__37597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37597):map__37597);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"formulario-factura","formulario-factura",-657363841));
} else {
if(cljs.core.vector_QMARK_.call(null,params__26388__auto__)){
var vec__37599 = params__26388__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"formulario-factura","formulario-factura",-657363841));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/formulario-factura",action__26387__auto___37600);

var action__26387__auto___37604 = (function (params__26388__auto__){
if(cljs.core.map_QMARK_.call(null,params__26388__auto__)){
var map__37601 = params__26388__auto__;
var map__37601__$1 = ((((!((map__37601 == null)))?((((map__37601.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37601.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37601):map__37601);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"detalle-os","detalle-os",2040514074));
} else {
if(cljs.core.vector_QMARK_.call(null,params__26388__auto__)){
var vec__37603 = params__26388__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"detalle-os","detalle-os",2040514074));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/detalle-os",action__26387__auto___37604);

var action__26387__auto___37608 = (function (params__26388__auto__){
if(cljs.core.map_QMARK_.call(null,params__26388__auto__)){
var map__37605 = params__26388__auto__;
var map__37605__$1 = ((((!((map__37605 == null)))?((((map__37605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37605):map__37605);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"upload","upload",-255769218));
} else {
if(cljs.core.vector_QMARK_.call(null,params__26388__auto__)){
var vec__37607 = params__26388__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"upload","upload",-255769218));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/upload",action__26387__auto___37608);

var action__26387__auto___37612 = (function (params__26388__auto__){
if(cljs.core.map_QMARK_.call(null,params__26388__auto__)){
var map__37609 = params__26388__auto__;
var map__37609__$1 = ((((!((map__37609 == null)))?((((map__37609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37609):map__37609);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"bandejaentrada","bandejaentrada",1986079010));
} else {
if(cljs.core.vector_QMARK_.call(null,params__26388__auto__)){
var vec__37611 = params__26388__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"bandejaentrada","bandejaentrada",1986079010));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/bandeja-entrada",action__26387__auto___37612);

gf_client.core.init_BANG_ = (function gf_client$core$init_BANG_(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));

gf_client.events.initialize_event_que.call(null);

gf_client.events.go_logger.call(null);

gf_client.taskservice.initialize_task_service.call(null);

gf_client.utils.mount_component.call(null,gf_client.components.navbar,gf_client.core.navbar_data,"navbar");

return gf_client.utils.mount_component.call(null,gf_client.core.page,null,"app");
});
/**
 * figwheel reload initialization goes here
 */
gf_client.core.on_js_reload = (function gf_client$core$on_js_reload(){
return null;
});
gf_client.core.init_BANG_.call(null);

//# sourceMappingURL=core.js.map?rel=1472168087224