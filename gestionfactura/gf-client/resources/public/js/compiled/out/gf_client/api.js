// Compiled by ClojureScript 1.7.107 {}
goog.provide('gf_client.api');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('gf_client.events');
goog.require('reagent.session');
goog.require('ajax.core');
cljs.core.enable_console_print_BANG_.call(null);
gf_client.api.host = "http://localhost:3001";
gf_client.api.proveedor_person_data = reagent.core.atom.call(null,"");
gf_client.api.cliente_person_data = reagent.core.atom.call(null,"");
gf_client.api.solicitud_person_data = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
gf_client.api.solicitud_seleccionada_person_data = reagent.core.atom.call(null,"");
gf_client.api.factura_person_data = reagent.core.atom.call(null,"");
gf_client.api.html_upload_page = reagent.core.atom.call(null,"");
gf_client.api.error_handler = (function gf_client$api$error_handler(p__37357){
var map__37360 = p__37357;
var map__37360__$1 = ((((!((map__37360 == null)))?((((map__37360.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37360.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37360):map__37360);
var status = cljs.core.get.call(null,map__37360__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__37360__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
console.log([cljs.core.str(":-("),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));

return alert("Error en la comunicacion con el servicio");
});
gf_client.api.into_list = (function gf_client$api$into_list(items){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),(function (){var iter__19491__auto__ = (function gf_client$api$into_list_$_iter__37366(s__37367){
return (new cljs.core.LazySeq(null,(function (){
var s__37367__$1 = s__37367;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__37367__$1);
if(temp__4425__auto__){
var s__37367__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37367__$2)){
var c__19489__auto__ = cljs.core.chunk_first.call(null,s__37367__$2);
var size__19490__auto__ = cljs.core.count.call(null,c__19489__auto__);
var b__37369 = cljs.core.chunk_buffer.call(null,size__19490__auto__);
if((function (){var i__37368 = (0);
while(true){
if((i__37368 < size__19490__auto__)){
var i = cljs.core._nth.call(null,c__19489__auto__,i__37368);
cljs.core.chunk_append.call(null,b__37369,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),i], null));

var G__37370 = (i__37368 + (1));
i__37368 = G__37370;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37369),gf_client$api$into_list_$_iter__37366.call(null,cljs.core.chunk_rest.call(null,s__37367__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37369),null);
}
} else {
var i = cljs.core.first.call(null,s__37367__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),i], null),gf_client$api$into_list_$_iter__37366.call(null,cljs.core.rest.call(null,s__37367__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19491__auto__.call(null,items);
})());
});
gf_client.api.set_status = (function gf_client$api$set_status(class$,title,items){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),title], null),gf_client.api.into_list.call(null,items)], null);
});
gf_client.api.handle_response_ok = (function gf_client$api$handle_response_ok(resp){
console.log("Respuesta del Servicio ",resp);

return cljs.core.reset_BANG_.call(null,gf_client.api.html_upload_page,resp);
});
gf_client.api.handle_response_error = (function gf_client$api$handle_response_error(ctx){
var rsp = cljs.core.js__GT_clj.call(null,new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var status = gf_client.api.set_status.call(null,"alert alert-danger","Upload Failure",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("Status: "),cljs.core.str(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(ctx)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"status-text","status-text",-1834235478).cljs$core$IFn$_invoke$arity$1(ctx))].join(''),[cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(rsp))].join('')], null));
console.log([cljs.core.str("cljs-ajax error: "),cljs.core.str(status)].join(''));

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"upload-status","upload-status",-116013326),status);
});
gf_client.api.error_handler_login = (function gf_client$api$error_handler_login(p__37371){
var map__37374 = p__37371;
var map__37374__$1 = ((((!((map__37374 == null)))?((((map__37374.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37374.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37374):map__37374);
var status = cljs.core.get.call(null,map__37374__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__37374__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
console.log([cljs.core.str(":-("),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));

return alert("El proveedor ingresado no esta dado de alta en el sistema. Comuniquese con @exisoft");
});
gf_client.api.cliente_data_handler = (function gf_client$api$cliente_data_handler(response){
console.log("--- Respuesta Cliente ---");

cljs.core.reset_BANG_.call(null,gf_client.api.cliente_person_data,JSON.parse(response));

return gf_client.events.post_event.call(null,(new gf_client.events.AppEvent(new cljs.core.Keyword(null,"new-ui-task","new-ui-task",-1431035496),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"razonsocial","razonsocial",1404096890),(cljs.core.deref.call(null,gf_client.api.cliente_person_data)["razonsocial"]),new cljs.core.Keyword(null,"idcliente","idcliente",109277970),(cljs.core.deref.call(null,gf_client.api.cliente_person_data)["idcliente"]),new cljs.core.Keyword(null,"direccionlegal","direccionlegal",1406395632),(cljs.core.deref.call(null,gf_client.api.cliente_person_data)["direccionlegal"]),new cljs.core.Keyword(null,"cuit","cuit",950748679),(cljs.core.deref.call(null,gf_client.api.cliente_person_data)["cuit"]),new cljs.core.Keyword(null,"tel","tel",224138159),(cljs.core.deref.call(null,gf_client.api.cliente_person_data)["tel"]),new cljs.core.Keyword(null,"fax","fax",1179363650),(cljs.core.deref.call(null,gf_client.api.cliente_person_data)["fax"]),new cljs.core.Keyword(null,"tipopago","tipopago",-521009412),(cljs.core.deref.call(null,gf_client.api.cliente_person_data)["tipopago"])], null),null,null,null)));
});
gf_client.api.service_obtenerDatosCliente = (function gf_client$api$service_obtenerDatosCliente(idcliente){
return ajax.core.GET.call(null,[cljs.core.str(gf_client.api.host),cljs.core.str("/generarfactura/obtenerDatosCliente/"),cljs.core.str(idcliente)].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"idcliente","idcliente",109277970),idcliente], null),new cljs.core.Keyword(null,"handler","handler",-195596612),gf_client.api.cliente_data_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),gf_client.api.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"raw","raw",1604651272)], null));
});
gf_client.api.solicitud_data_handler = (function gf_client$api$solicitud_data_handler(response){
console.log(" ----- Solicitud data handler por ID------ ");

return cljs.core.reset_BANG_.call(null,gf_client.api.solicitud_person_data,cljs.core.js__GT_clj.call(null,JSON.parse(response),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
gf_client.api.solicitud_buscada_data_handler = (function gf_client$api$solicitud_buscada_data_handler(response){
console.log(" ----- Solicitud Seleccionada data handler por ID------ ");

return cljs.core.reset_BANG_.call(null,gf_client.api.solicitud_seleccionada_person_data,cljs.core.js__GT_clj.call(null,JSON.parse(response),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
gf_client.api.service_obtenerSolicitudesPorProveedor = (function gf_client$api$service_obtenerSolicitudesPorProveedor(idproveedor){
return ajax.core.GET.call(null,[cljs.core.str(gf_client.api.host),cljs.core.str("/generarfactura/obtenerSolicitudesPorProveedor/"),cljs.core.str(idproveedor)].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"idproveedor","idproveedor",1928229705),idproveedor], null),new cljs.core.Keyword(null,"handler","handler",-195596612),gf_client.api.solicitud_data_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),gf_client.api.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"raw","raw",1604651272)], null));
});
gf_client.api.upload_file_data_handler = (function gf_client$api$upload_file_data_handler(response){
return null;
});
gf_client.api.proveedor_data_handler = (function gf_client$api$proveedor_data_handler(response){
cljs.core.reset_BANG_.call(null,gf_client.api.proveedor_person_data,JSON.parse(response));

gf_client.events.post_event.call(null,(new gf_client.events.AppEvent(new cljs.core.Keyword(null,"prov-ui-task","prov-ui-task",293660748),new cljs.core.Keyword(null,"ui","ui",-469653645),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fax","fax",1179363650),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"desc","desc",2093485764),new cljs.core.Keyword(null,"fechaemision","fechaemision",-1826973688),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"idproveedor","idproveedor",1928229705),new cljs.core.Keyword(null,"tel","tel",224138159),new cljs.core.Keyword(null,"codigo","codigo",-1240468462),new cljs.core.Keyword(null,"cuentadeposito","cuentadeposito",-1845478349),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"condicionTributaria","condicionTributaria",-1221339019),new cljs.core.Keyword(null,"fechaalta","fechaalta",725521151)],[(cljs.core.deref.call(null,gf_client.api.proveedor_person_data)["fax"]),(cljs.core.deref.call(null,gf_client.api.proveedor_person_data)["email"]),(cljs.core.deref.call(null,gf_client.api.proveedor_person_data)["direccionlegal"]),(cljs.core.deref.call(null,gf_client.api.proveedor_person_data)["fechaemision"]),(cljs.core.deref.call(null,gf_client.api.proveedor_person_data)["nombre"]),(cljs.core.deref.call(null,gf_client.api.proveedor_person_data)["idproveedor"]),(cljs.core.deref.call(null,gf_client.api.proveedor_person_data)["tel"]),(cljs.core.deref.call(null,gf_client.api.proveedor_person_data)["codigo"]),(cljs.core.deref.call(null,gf_client.api.proveedor_person_data)["cuentadeposito"]),"OK",(cljs.core.deref.call(null,gf_client.api.proveedor_person_data)["condiciontributaria"]),(cljs.core.deref.call(null,gf_client.api.proveedor_person_data)["fechaalta"])]),null,null,null)));

return gf_client.api.service_obtenerSolicitudesPorProveedor.call(null,(cljs.core.deref.call(null,gf_client.api.proveedor_person_data)["idproveedor"]));
});
gf_client.api.factura_data_handler = (function gf_client$api$factura_data_handler(response){
console.log(" ---- Respuesta de factura --- ");

cljs.core.reset_BANG_.call(null,gf_client.api.factura_person_data,JSON.parse(response));

return gf_client.events.post_event.call(null,(new gf_client.events.AppEvent(new cljs.core.Keyword(null,"new-ui-task","new-ui-task",-1431035496),new cljs.core.Keyword(null,"ui","ui",-469653645),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fax","fax",1179363650),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"desc","desc",2093485764),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"idproveedor","idproveedor",1928229705),new cljs.core.Keyword(null,"tel","tel",224138159),new cljs.core.Keyword(null,"codigo","codigo",-1240468462),new cljs.core.Keyword(null,"cuentadeposito","cuentadeposito",-1845478349),new cljs.core.Keyword(null,"condicionTributaria","condicionTributaria",-1221339019),new cljs.core.Keyword(null,"fechaalta","fechaalta",725521151)],[(cljs.core.deref.call(null,gf_client.api.factura_person_data)["fax"]),(cljs.core.deref.call(null,gf_client.api.factura_person_data)["email"]),(cljs.core.deref.call(null,gf_client.api.factura_person_data)["direccionlegal"]),(cljs.core.deref.call(null,gf_client.api.factura_person_data)["nombre"]),(cljs.core.deref.call(null,gf_client.api.factura_person_data)["idproveedor"]),(cljs.core.deref.call(null,gf_client.api.factura_person_data)["tel"]),(cljs.core.deref.call(null,gf_client.api.factura_person_data)["codigo"]),(cljs.core.deref.call(null,gf_client.api.factura_person_data)["cuentadeposito"]),(cljs.core.deref.call(null,gf_client.api.factura_person_data)["condiciontributaria"]),(cljs.core.deref.call(null,gf_client.api.factura_person_data)["fechaalta"])]),null,null,null)));
});
gf_client.api.service_upload = (function gf_client$api$service_upload(){
console.log("me voy para el WAR ");

return ajax.core.GET.call(null,[cljs.core.str("http://localhost:8080/UploadServletApp/EntryPointUploadServlet")].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),gf_client.api.handle_response_ok,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),gf_client.api.handle_response_error,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"raw","raw",1604651272)], null));
});
gf_client.api.service_login = (function gf_client$api$service_login(username,password){
return ajax.core.POST.call(null,[cljs.core.str(gf_client.api.host),cljs.core.str("/generarfactura/login")].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),username,new cljs.core.Keyword(null,"password","password",417022471),password], null),new cljs.core.Keyword(null,"handler","handler",-195596612),gf_client.api.proveedor_data_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),gf_client.api.error_handler_login,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"raw","raw",1604651272)], null));
});
gf_client.api.service_obtenerDatosProveedor = (function gf_client$api$service_obtenerDatosProveedor(idproveedor){
return ajax.core.GET.call(null,[cljs.core.str(gf_client.api.host),cljs.core.str("/generarfactura/obtenerDatosProveedor/"),cljs.core.str(idproveedor)].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"idproveedor","idproveedor",1928229705),idproveedor], null),new cljs.core.Keyword(null,"handler","handler",-195596612),gf_client.api.proveedor_data_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),gf_client.api.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"raw","raw",1604651272)], null));
});
gf_client.api.service_obtenerSolicitud = (function gf_client$api$service_obtenerSolicitud(idsolicitud){
return ajax.core.GET.call(null,[cljs.core.str(gf_client.api.host),cljs.core.str("/generarfactura/obtenerSolicitud/"),cljs.core.str(idsolicitud)].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"idsolicitud","idsolicitud",-552910528),idsolicitud], null),new cljs.core.Keyword(null,"handler","handler",-195596612),gf_client.api.solicitud_buscada_data_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),gf_client.api.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"raw","raw",1604651272)], null));
});
gf_client.api.service_guardarDatosFactura = (function gf_client$api$service_guardarDatosFactura(tipolegal,importeparcial,importetotal,tipofactura,cae,cai,idproveedor,fechafactura,estadofactura,tipoletrafactura,porcentajeimpuesto,descripcionfactura,fechavencimientocae,fechavencimientocai){
return ajax.core.POST.call(null,[cljs.core.str(gf_client.api.host),cljs.core.str("/generarfactura/guardarDatosFactura")].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"tipofactura","tipofactura",991704832),new cljs.core.Keyword(null,"importeparcial","importeparcial",934362945),new cljs.core.Keyword(null,"estadofactura","estadofactura",-1041374460),new cljs.core.Keyword(null,"fechafactura","fechafactura",-854512603),new cljs.core.Keyword(null,"idproveedor","idproveedor",1928229705),new cljs.core.Keyword(null,"importetotal","importetotal",1541209770),new cljs.core.Keyword(null,"cai","cai",-772598861),new cljs.core.Keyword(null,"descripcionfactura","descripcionfactura",-2074860520),new cljs.core.Keyword(null,"tipolegal","tipolegal",-1229122248),new cljs.core.Keyword(null,"tipoletrafactura","tipoletrafactura",398162105),new cljs.core.Keyword(null,"fechavencimientocai","fechavencimientocai",2044169978),new cljs.core.Keyword(null,"cae","cae",-164086308),new cljs.core.Keyword(null,"porcentajeimpuesto","porcentajeimpuesto",752542654),new cljs.core.Keyword(null,"fechavencimientocae","fechavencimientocae",-13100865)],[tipofactura,importeparcial,estadofactura,fechafactura,idproveedor,importetotal,cai,descripcionfactura,tipolegal,tipoletrafactura,fechavencimientocai,cae,porcentajeimpuesto,fechavencimientocae]),new cljs.core.Keyword(null,"handler","handler",-195596612),gf_client.api.factura_data_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),gf_client.api.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"raw","raw",1604651272)], null));
});

//# sourceMappingURL=api.js.map?rel=1472155154795