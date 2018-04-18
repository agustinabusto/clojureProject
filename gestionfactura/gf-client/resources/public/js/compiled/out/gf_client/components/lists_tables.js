// Compiled by ClojureScript 1.7.107 {}
goog.provide('gf_client.components.lists_tables');
goog.require('cljs.core');
goog.require('reforms.table');
goog.require('reagent.core');
goog.require('clojure.set');
goog.require('reforms.core');
gf_client.components.lists_tables.tabla_proveedores = (function gf_client$components$lists_tables$tabla_proveedores(obj_prov){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Styled table"], null);

new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"See ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"http://getbootstrap.com/css/#tables",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"Bootstrap tables"], null)], null);

return reforms.table.table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"styled-table",new cljs.core.Keyword(null,"class","class",-2030961996),"table table-hover"], null),obj_prov,new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"Nombre Proveedor",new cljs.core.Keyword(null,"codigo","codigo",-1240468462),"Codigo Proveedor",new cljs.core.Keyword(null,"email","email",1415816706),"E-Mail",new cljs.core.Keyword(null,"tel","tel",224138159),"TEL",new cljs.core.Keyword(null,"fax","fax",1179363650),"fax",new cljs.core.Keyword(null,"desc","desc",2093485764),"Direccion",new cljs.core.Keyword(null,"cuentadeposito","cuentadeposito",-1845478349),"Cuenta Deposito"], null));
});
gf_client.components.lists_tables.tabla_solicitudes = (function gf_client$components$lists_tables$tabla_solicitudes(lista_oss){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Styled table"], null);

new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"See ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"http://getbootstrap.com/css/#tables",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"Bootstrap tables"], null)], null);

return reforms.table.table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"styled-table",new cljs.core.Keyword(null,"class","class",-2030961996),"table table-condensed"], null),lista_oss,new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"idsolicitud","idsolicitud",-552910528),"Nro. Solicitud",new cljs.core.Keyword(null,"detalleservicio","detalleservicio",-1129756167),"Detalle del Servicio",new cljs.core.Keyword(null,"nroordenservicio","nroordenservicio",-225919372),"Nro. Orden de Servicio",new cljs.core.Keyword(null,"nroordencompra","nroordencompra",1631929478),"Nro. Orden de Compra"], null));
});
gf_client.components.lists_tables.tabla_detalle_factura = (function gf_client$components$lists_tables$tabla_detalle_factura(item_factura){
reforms.core.group_title.call(null,"Detalle cargado");

return reforms.table.table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"styled-table",new cljs.core.Keyword(null,"class","class",-2030961996),"table table-hover"], null),item_factura,new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fechafactura","fechafactura",-854512603),"Fecha",new cljs.core.Keyword(null,"cantidad","cantidad",-99126213),"Cantidad"], null));
});

//# sourceMappingURL=lists_tables.js.map?rel=1472152820740