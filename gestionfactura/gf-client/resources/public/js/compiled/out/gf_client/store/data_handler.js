// Compiled by ClojureScript 1.7.107 {}
goog.provide('gf_client.store.data_handler');
goog.require('cljs.core');
goog.require('gf_client.events');
goog.require('reagent.core');
goog.require('goog.events.EventType');
goog.require('goog.events');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
gf_client.store.data_handler.proveedor_person_data = reagent.core.atom.call(null,"");
gf_client.store.data_handler.cliente_person_data = reagent.core.atom.call(null,"");
gf_client.store.data_handler.solicitud_person_data = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
gf_client.store.data_handler.factura_person_data = reagent.core.atom.call(null,"");
gf_client.store.data_handler.error_handler = (function gf_client$store$data_handler$error_handler(p__26404){
var map__26407 = p__26404;
var map__26407__$1 = ((((!((map__26407 == null)))?((((map__26407.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26407.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26407):map__26407);
var status = cljs.core.get.call(null,map__26407__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__26407__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
console.log([cljs.core.str(":-("),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));

return alert("Usuario no autorizado");
});
gf_client.store.data_handler.proveedor_data_handler = (function gf_client$store$data_handler$proveedor_data_handler(response){
console.log(" -- Respuesta Proveedor ---");

cljs.core.reset_BANG_.call(null,gf_client.store.data_handler.proveedor_person_data,JSON.parse(response));

return gf_client.events.post_event.call(null,(new gf_client.events.AppEvent(new cljs.core.Keyword(null,"new-ui-task","new-ui-task",-1431035496),new cljs.core.Keyword(null,"ui","ui",-469653645),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fax","fax",1179363650),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"desc","desc",2093485764),new cljs.core.Keyword(null,"fechaemision","fechaemision",-1826973688),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"idproveedor","idproveedor",1928229705),new cljs.core.Keyword(null,"tel","tel",224138159),new cljs.core.Keyword(null,"codigo","codigo",-1240468462),new cljs.core.Keyword(null,"cuentadeposito","cuentadeposito",-1845478349),new cljs.core.Keyword(null,"condicionTributaria","condicionTributaria",-1221339019),new cljs.core.Keyword(null,"fechaalta","fechaalta",725521151)],[(cljs.core.deref.call(null,gf_client.store.data_handler.proveedor_person_data)["fax"]),(cljs.core.deref.call(null,gf_client.store.data_handler.proveedor_person_data)["email"]),(cljs.core.deref.call(null,gf_client.store.data_handler.proveedor_person_data)["direccionlegal"]),(cljs.core.deref.call(null,gf_client.store.data_handler.proveedor_person_data)["fechaemision"]),(cljs.core.deref.call(null,gf_client.store.data_handler.proveedor_person_data)["nombre"]),(cljs.core.deref.call(null,gf_client.store.data_handler.proveedor_person_data)["idproveedor"]),(cljs.core.deref.call(null,gf_client.store.data_handler.proveedor_person_data)["tel"]),(cljs.core.deref.call(null,gf_client.store.data_handler.proveedor_person_data)["codigo"]),(cljs.core.deref.call(null,gf_client.store.data_handler.proveedor_person_data)["cuentadeposito"]),(cljs.core.deref.call(null,gf_client.store.data_handler.proveedor_person_data)["condiciontributaria"]),(cljs.core.deref.call(null,gf_client.store.data_handler.proveedor_person_data)["fechaalta"])]),null,null,null)));
});
gf_client.store.data_handler.cliente_data_handler = (function gf_client$store$data_handler$cliente_data_handler(response){
console.log("--- Respuesta Cliente ---");

cljs.core.reset_BANG_.call(null,gf_client.store.data_handler.cliente_person_data,JSON.parse(response));

return gf_client.events.post_event.call(null,(new gf_client.events.AppEvent(new cljs.core.Keyword(null,"new-ui-task","new-ui-task",-1431035496),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"razonsocial","razonsocial",1404096890),(cljs.core.deref.call(null,gf_client.store.data_handler.cliente_person_data)["razonsocial"]),new cljs.core.Keyword(null,"idcliente","idcliente",109277970),(cljs.core.deref.call(null,gf_client.store.data_handler.cliente_person_data)["idcliente"]),new cljs.core.Keyword(null,"direccionlegal","direccionlegal",1406395632),(cljs.core.deref.call(null,gf_client.store.data_handler.cliente_person_data)["direccionlegal"]),new cljs.core.Keyword(null,"cuit","cuit",950748679),(cljs.core.deref.call(null,gf_client.store.data_handler.cliente_person_data)["cuit"]),new cljs.core.Keyword(null,"tel","tel",224138159),(cljs.core.deref.call(null,gf_client.store.data_handler.cliente_person_data)["tel"]),new cljs.core.Keyword(null,"fax","fax",1179363650),(cljs.core.deref.call(null,gf_client.store.data_handler.cliente_person_data)["fax"]),new cljs.core.Keyword(null,"tipopago","tipopago",-521009412),(cljs.core.deref.call(null,gf_client.store.data_handler.cliente_person_data)["tipopago"])], null),null,null,null)));
});
gf_client.store.data_handler.solicitud_data_handler = (function gf_client$store$data_handler$solicitud_data_handler(response){
console.log("Solicitud data handler de respuesta ... ");

cljs.core.reset_BANG_.call(null,gf_client.store.data_handler.solicitud_person_data,cljs.core.js__GT_clj.call(null,response,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));

return console.log("js->clj --> ",cljs.core.deref.call(null,gf_client.store.data_handler.solicitud_person_data),"<---");
});
gf_client.store.data_handler.factura_data_handler = (function gf_client$store$data_handler$factura_data_handler(response){
console.log("Solicitud data handler de respuesta ... ");

cljs.core.reset_BANG_.call(null,gf_client.store.data_handler.factura_person_data,JSON.parse(response));

return gf_client.events.post_event.call(null,(new gf_client.events.AppEvent(new cljs.core.Keyword(null,"new-ui-task","new-ui-task",-1431035496),new cljs.core.Keyword(null,"ui","ui",-469653645),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fax","fax",1179363650),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"desc","desc",2093485764),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"idproveedor","idproveedor",1928229705),new cljs.core.Keyword(null,"tel","tel",224138159),new cljs.core.Keyword(null,"codigo","codigo",-1240468462),new cljs.core.Keyword(null,"cuentadeposito","cuentadeposito",-1845478349),new cljs.core.Keyword(null,"condicionTributaria","condicionTributaria",-1221339019),new cljs.core.Keyword(null,"fechaalta","fechaalta",725521151)],[(cljs.core.deref.call(null,gf_client.store.data_handler.factura_person_data)["fax"]),(cljs.core.deref.call(null,gf_client.store.data_handler.factura_person_data)["email"]),(cljs.core.deref.call(null,gf_client.store.data_handler.factura_person_data)["direccionlegal"]),(cljs.core.deref.call(null,gf_client.store.data_handler.factura_person_data)["nombre"]),(cljs.core.deref.call(null,gf_client.store.data_handler.factura_person_data)["idproveedor"]),(cljs.core.deref.call(null,gf_client.store.data_handler.factura_person_data)["tel"]),(cljs.core.deref.call(null,gf_client.store.data_handler.factura_person_data)["codigo"]),(cljs.core.deref.call(null,gf_client.store.data_handler.factura_person_data)["cuentadeposito"]),(cljs.core.deref.call(null,gf_client.store.data_handler.factura_person_data)["condiciontributaria"]),(cljs.core.deref.call(null,gf_client.store.data_handler.factura_person_data)["fechaalta"])]),null,null,null)));
});

//# sourceMappingURL=data_handler.js.map?rel=1472152822796