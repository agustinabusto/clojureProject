// Compiled by ClojureScript 1.7.107 {}
goog.provide('gf_client.forms.detalle_os');
goog.require('cljs.core');
goog.require('gf_client.components');
goog.require('gf_client.api');
gf_client.forms.detalle_os.detalle_os = (function gf_client$forms$detalle_os$detalle_os(){
gf_client.api.service_obtenerSolicitud.call(null,(1));

return gf_client.components.panel_solicitante_os.call(null,"Solicitante del Servicio");
});
gf_client.forms.detalle_os.detalle_orden_compra = (function gf_client$forms$detalle_os$detalle_orden_compra(){
return gf_client.components.panel_orden_compra.call(null,"Orden de Compra Asociada");
});
gf_client.forms.detalle_os.detalle_os_seleccionada = (function gf_client$forms$detalle_os$detalle_os_seleccionada(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-10","div.col-sm-10",353164674),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gf_client.forms.detalle_os.detalle_os], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gf_client.forms.detalle_os.detalle_orden_compra], null)], null)], null)], null);
});

//# sourceMappingURL=detalle_os.js.map?rel=1472152822488