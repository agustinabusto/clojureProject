// Compiled by ClojureScript 1.7.107 {}
goog.provide('gf_client.file_upload.upload_core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('enfocus.core');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('goog.history.EventType');
goog.require('reagent.session');
goog.require('goog.net.EventType');
goog.require('goog.net.IframeIo');
goog.require('gf_client.api');
goog.require('goog.History');
gf_client.file_upload.upload_core.pagina_html_upload = (function gf_client$file_upload$upload_core$pagina_html_upload(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),cljs.core.deref.call(null,gf_client.api.html_upload_page)], null)], null)], null);
});
gf_client.file_upload.upload_core.cljs_ajax_upload_button = (function gf_client$file_upload$upload_core$cljs_ajax_upload_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return gf_client.api.service_upload.call(null);
})], null),"Subir Archivos  ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-upload"], null)], null)], null)], null);
});
gf_client.file_upload.upload_core.home_page_upload = (function gf_client$file_upload$upload_core$home_page_upload(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Realice los Upload de los archivos necesarios para efectuar su envio de Factura"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gf_client.file_upload.upload_core.cljs_ajax_upload_button], null)], null);
});
});

//# sourceMappingURL=upload_core.js.map?rel=1472163080907