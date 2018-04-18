// Compiled by ClojureScript 1.7.107 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__27242,handler){
var map__27243 = p__27242;
var map__27243__$1 = ((((!((map__27243 == null)))?((((map__27243.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27243.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27243):map__27243);
var uri = cljs.core.get.call(null,map__27243__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__27243__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__27243__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__27243__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__27243__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__27243__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__27243__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__27243,map__27243__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__27241_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__27241_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__27243,map__27243__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___27251 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___27251)){
var response_type_27252 = temp__4425__auto___27251;
this$__$1.responseType = cljs.core.name.call(null,response_type_27252);
} else {
}

var seq__27245_27253 = cljs.core.seq.call(null,headers);
var chunk__27246_27254 = null;
var count__27247_27255 = (0);
var i__27248_27256 = (0);
while(true){
if((i__27248_27256 < count__27247_27255)){
var vec__27249_27257 = cljs.core._nth.call(null,chunk__27246_27254,i__27248_27256);
var k_27258 = cljs.core.nth.call(null,vec__27249_27257,(0),null);
var v_27259 = cljs.core.nth.call(null,vec__27249_27257,(1),null);
this$__$1.setRequestHeader(k_27258,v_27259);

var G__27260 = seq__27245_27253;
var G__27261 = chunk__27246_27254;
var G__27262 = count__27247_27255;
var G__27263 = (i__27248_27256 + (1));
seq__27245_27253 = G__27260;
chunk__27246_27254 = G__27261;
count__27247_27255 = G__27262;
i__27248_27256 = G__27263;
continue;
} else {
var temp__4425__auto___27264 = cljs.core.seq.call(null,seq__27245_27253);
if(temp__4425__auto___27264){
var seq__27245_27265__$1 = temp__4425__auto___27264;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27245_27265__$1)){
var c__19522__auto___27266 = cljs.core.chunk_first.call(null,seq__27245_27265__$1);
var G__27267 = cljs.core.chunk_rest.call(null,seq__27245_27265__$1);
var G__27268 = c__19522__auto___27266;
var G__27269 = cljs.core.count.call(null,c__19522__auto___27266);
var G__27270 = (0);
seq__27245_27253 = G__27267;
chunk__27246_27254 = G__27268;
count__27247_27255 = G__27269;
i__27248_27256 = G__27270;
continue;
} else {
var vec__27250_27271 = cljs.core.first.call(null,seq__27245_27265__$1);
var k_27272 = cljs.core.nth.call(null,vec__27250_27271,(0),null);
var v_27273 = cljs.core.nth.call(null,vec__27250_27271,(1),null);
this$__$1.setRequestHeader(k_27272,v_27273);

var G__27274 = cljs.core.next.call(null,seq__27245_27265__$1);
var G__27275 = null;
var G__27276 = (0);
var G__27277 = (0);
seq__27245_27253 = G__27274;
chunk__27246_27254 = G__27275;
count__27247_27255 = G__27276;
i__27248_27256 = G__27277;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__18719__auto__ = body;
if(cljs.core.truth_(or__18719__auto__)){
return or__18719__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1472152825710