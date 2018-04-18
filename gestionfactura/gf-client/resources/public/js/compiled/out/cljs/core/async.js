// Compiled by ClojureScript 1.7.107 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async28023 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28023 = (function (fn_handler,f,meta28024){
this.fn_handler = fn_handler;
this.f = f;
this.meta28024 = meta28024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28025,meta28024__$1){
var self__ = this;
var _28025__$1 = this;
return (new cljs.core.async.t_cljs$core$async28023(self__.fn_handler,self__.f,meta28024__$1));
});

cljs.core.async.t_cljs$core$async28023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28025){
var self__ = this;
var _28025__$1 = this;
return self__.meta28024;
});

cljs.core.async.t_cljs$core$async28023.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28023.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28023.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28023.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta28024","meta28024",-313560293,null)], null);
});

cljs.core.async.t_cljs$core$async28023.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28023.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28023";

cljs.core.async.t_cljs$core$async28023.cljs$lang$ctorPrWriter = (function (this__19317__auto__,writer__19318__auto__,opt__19319__auto__){
return cljs.core._write.call(null,writer__19318__auto__,"cljs.core.async/t_cljs$core$async28023");
});

cljs.core.async.__GT_t_cljs$core$async28023 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async28023(fn_handler__$1,f__$1,meta28024){
return (new cljs.core.async.t_cljs$core$async28023(fn_handler__$1,f__$1,meta28024));
});

}

return (new cljs.core.async.t_cljs$core$async28023(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args28028 = [];
var len__19777__auto___28031 = arguments.length;
var i__19778__auto___28032 = (0);
while(true){
if((i__19778__auto___28032 < len__19777__auto___28031)){
args28028.push((arguments[i__19778__auto___28032]));

var G__28033 = (i__19778__auto___28032 + (1));
i__19778__auto___28032 = G__28033;
continue;
} else {
}
break;
}

var G__28030 = args28028.length;
switch (G__28030) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28028.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args28035 = [];
var len__19777__auto___28038 = arguments.length;
var i__19778__auto___28039 = (0);
while(true){
if((i__19778__auto___28039 < len__19777__auto___28038)){
args28035.push((arguments[i__19778__auto___28039]));

var G__28040 = (i__19778__auto___28039 + (1));
i__19778__auto___28039 = G__28040;
continue;
} else {
}
break;
}

var G__28037 = args28035.length;
switch (G__28037) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28035.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28042 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28042);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28042,ret){
return (function (){
return fn1.call(null,val_28042);
});})(val_28042,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args28043 = [];
var len__19777__auto___28046 = arguments.length;
var i__19778__auto___28047 = (0);
while(true){
if((i__19778__auto___28047 < len__19777__auto___28046)){
args28043.push((arguments[i__19778__auto___28047]));

var G__28048 = (i__19778__auto___28047 + (1));
i__19778__auto___28047 = G__28048;
continue;
} else {
}
break;
}

var G__28045 = args28043.length;
switch (G__28045) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28043.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19622__auto___28050 = n;
var x_28051 = (0);
while(true){
if((x_28051 < n__19622__auto___28050)){
(a[x_28051] = (0));

var G__28052 = (x_28051 + (1));
x_28051 = G__28052;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28053 = (i + (1));
i = G__28053;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28057 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28057 = (function (alt_flag,flag,meta28058){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28058 = meta28058;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28059,meta28058__$1){
var self__ = this;
var _28059__$1 = this;
return (new cljs.core.async.t_cljs$core$async28057(self__.alt_flag,self__.flag,meta28058__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28057.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28059){
var self__ = this;
var _28059__$1 = this;
return self__.meta28058;
});})(flag))
;

cljs.core.async.t_cljs$core$async28057.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28057.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28057.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28057.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28058","meta28058",-1767182153,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28057.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28057.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28057";

cljs.core.async.t_cljs$core$async28057.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19317__auto__,writer__19318__auto__,opt__19319__auto__){
return cljs.core._write.call(null,writer__19318__auto__,"cljs.core.async/t_cljs$core$async28057");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28057 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28057(alt_flag__$1,flag__$1,meta28058){
return (new cljs.core.async.t_cljs$core$async28057(alt_flag__$1,flag__$1,meta28058));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28057(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28063 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28063 = (function (alt_handler,flag,cb,meta28064){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28064 = meta28064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28065,meta28064__$1){
var self__ = this;
var _28065__$1 = this;
return (new cljs.core.async.t_cljs$core$async28063(self__.alt_handler,self__.flag,self__.cb,meta28064__$1));
});

cljs.core.async.t_cljs$core$async28063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28065){
var self__ = this;
var _28065__$1 = this;
return self__.meta28064;
});

cljs.core.async.t_cljs$core$async28063.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28063.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28063.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28063.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28064","meta28064",-33120433,null)], null);
});

cljs.core.async.t_cljs$core$async28063.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28063.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28063";

cljs.core.async.t_cljs$core$async28063.cljs$lang$ctorPrWriter = (function (this__19317__auto__,writer__19318__auto__,opt__19319__auto__){
return cljs.core._write.call(null,writer__19318__auto__,"cljs.core.async/t_cljs$core$async28063");
});

cljs.core.async.__GT_t_cljs$core$async28063 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28063(alt_handler__$1,flag__$1,cb__$1,meta28064){
return (new cljs.core.async.t_cljs$core$async28063(alt_handler__$1,flag__$1,cb__$1,meta28064));
});

}

return (new cljs.core.async.t_cljs$core$async28063(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28066_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28066_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28067_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28067_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18719__auto__ = wport;
if(cljs.core.truth_(or__18719__auto__)){
return or__18719__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28068 = (i + (1));
i = G__28068;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18719__auto__ = ret;
if(cljs.core.truth_(or__18719__auto__)){
return or__18719__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__18707__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18707__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18707__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__19784__auto__ = [];
var len__19777__auto___28074 = arguments.length;
var i__19778__auto___28075 = (0);
while(true){
if((i__19778__auto___28075 < len__19777__auto___28074)){
args__19784__auto__.push((arguments[i__19778__auto___28075]));

var G__28076 = (i__19778__auto___28075 + (1));
i__19778__auto___28075 = G__28076;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((1) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19785__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28071){
var map__28072 = p__28071;
var map__28072__$1 = ((((!((map__28072 == null)))?((((map__28072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28072):map__28072);
var opts = map__28072__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28069){
var G__28070 = cljs.core.first.call(null,seq28069);
var seq28069__$1 = cljs.core.next.call(null,seq28069);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28070,seq28069__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args28077 = [];
var len__19777__auto___28127 = arguments.length;
var i__19778__auto___28128 = (0);
while(true){
if((i__19778__auto___28128 < len__19777__auto___28127)){
args28077.push((arguments[i__19778__auto___28128]));

var G__28129 = (i__19778__auto___28128 + (1));
i__19778__auto___28128 = G__28129;
continue;
} else {
}
break;
}

var G__28079 = args28077.length;
switch (G__28079) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28077.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22433__auto___28131 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22433__auto___28131){
return (function (){
var f__22434__auto__ = (function (){var switch__22368__auto__ = ((function (c__22433__auto___28131){
return (function (state_28103){
var state_val_28104 = (state_28103[(1)]);
if((state_val_28104 === (7))){
var inst_28099 = (state_28103[(2)]);
var state_28103__$1 = state_28103;
var statearr_28105_28132 = state_28103__$1;
(statearr_28105_28132[(2)] = inst_28099);

(statearr_28105_28132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28104 === (1))){
var state_28103__$1 = state_28103;
var statearr_28106_28133 = state_28103__$1;
(statearr_28106_28133[(2)] = null);

(statearr_28106_28133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28104 === (4))){
var inst_28082 = (state_28103[(7)]);
var inst_28082__$1 = (state_28103[(2)]);
var inst_28083 = (inst_28082__$1 == null);
var state_28103__$1 = (function (){var statearr_28107 = state_28103;
(statearr_28107[(7)] = inst_28082__$1);

return statearr_28107;
})();
if(cljs.core.truth_(inst_28083)){
var statearr_28108_28134 = state_28103__$1;
(statearr_28108_28134[(1)] = (5));

} else {
var statearr_28109_28135 = state_28103__$1;
(statearr_28109_28135[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28104 === (13))){
var state_28103__$1 = state_28103;
var statearr_28110_28136 = state_28103__$1;
(statearr_28110_28136[(2)] = null);

(statearr_28110_28136[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28104 === (6))){
var inst_28082 = (state_28103[(7)]);
var state_28103__$1 = state_28103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28103__$1,(11),to,inst_28082);
} else {
if((state_val_28104 === (3))){
var inst_28101 = (state_28103[(2)]);
var state_28103__$1 = state_28103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28103__$1,inst_28101);
} else {
if((state_val_28104 === (12))){
var state_28103__$1 = state_28103;
var statearr_28111_28137 = state_28103__$1;
(statearr_28111_28137[(2)] = null);

(statearr_28111_28137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28104 === (2))){
var state_28103__$1 = state_28103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28103__$1,(4),from);
} else {
if((state_val_28104 === (11))){
var inst_28092 = (state_28103[(2)]);
var state_28103__$1 = state_28103;
if(cljs.core.truth_(inst_28092)){
var statearr_28112_28138 = state_28103__$1;
(statearr_28112_28138[(1)] = (12));

} else {
var statearr_28113_28139 = state_28103__$1;
(statearr_28113_28139[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28104 === (9))){
var state_28103__$1 = state_28103;
var statearr_28114_28140 = state_28103__$1;
(statearr_28114_28140[(2)] = null);

(statearr_28114_28140[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28104 === (5))){
var state_28103__$1 = state_28103;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28115_28141 = state_28103__$1;
(statearr_28115_28141[(1)] = (8));

} else {
var statearr_28116_28142 = state_28103__$1;
(statearr_28116_28142[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28104 === (14))){
var inst_28097 = (state_28103[(2)]);
var state_28103__$1 = state_28103;
var statearr_28117_28143 = state_28103__$1;
(statearr_28117_28143[(2)] = inst_28097);

(statearr_28117_28143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28104 === (10))){
var inst_28089 = (state_28103[(2)]);
var state_28103__$1 = state_28103;
var statearr_28118_28144 = state_28103__$1;
(statearr_28118_28144[(2)] = inst_28089);

(statearr_28118_28144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28104 === (8))){
var inst_28086 = cljs.core.async.close_BANG_.call(null,to);
var state_28103__$1 = state_28103;
var statearr_28119_28145 = state_28103__$1;
(statearr_28119_28145[(2)] = inst_28086);

(statearr_28119_28145[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22433__auto___28131))
;
return ((function (switch__22368__auto__,c__22433__auto___28131){
return (function() {
var cljs$core$async$state_machine__22369__auto__ = null;
var cljs$core$async$state_machine__22369__auto____0 = (function (){
var statearr_28123 = [null,null,null,null,null,null,null,null];
(statearr_28123[(0)] = cljs$core$async$state_machine__22369__auto__);

(statearr_28123[(1)] = (1));

return statearr_28123;
});
var cljs$core$async$state_machine__22369__auto____1 = (function (state_28103){
while(true){
var ret_value__22370__auto__ = (function (){try{while(true){
var result__22371__auto__ = switch__22368__auto__.call(null,state_28103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22371__auto__;
}
break;
}
}catch (e28124){if((e28124 instanceof Object)){
var ex__22372__auto__ = e28124;
var statearr_28125_28146 = state_28103;
(statearr_28125_28146[(5)] = ex__22372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28147 = state_28103;
state_28103 = G__28147;
continue;
} else {
return ret_value__22370__auto__;
}
break;
}
});
cljs$core$async$state_machine__22369__auto__ = function(state_28103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22369__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22369__auto____1.call(this,state_28103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22369__auto____0;
cljs$core$async$state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22369__auto____1;
return cljs$core$async$state_machine__22369__auto__;
})()
;})(switch__22368__auto__,c__22433__auto___28131))
})();
var state__22435__auto__ = (function (){var statearr_28126 = f__22434__auto__.call(null);
(statearr_28126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22433__auto___28131);

return statearr_28126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22435__auto__);
});})(c__22433__auto___28131))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28331){
var vec__28332 = p__28331;
var v = cljs.core.nth.call(null,vec__28332,(0),null);
var p = cljs.core.nth.call(null,vec__28332,(1),null);
var job = vec__28332;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22433__auto___28514 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22433__auto___28514,res,vec__28332,v,p,job,jobs,results){
return (function (){
var f__22434__auto__ = (function (){var switch__22368__auto__ = ((function (c__22433__auto___28514,res,vec__28332,v,p,job,jobs,results){
return (function (state_28337){
var state_val_28338 = (state_28337[(1)]);
if((state_val_28338 === (1))){
var state_28337__$1 = state_28337;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28337__$1,(2),res,v);
} else {
if((state_val_28338 === (2))){
var inst_28334 = (state_28337[(2)]);
var inst_28335 = cljs.core.async.close_BANG_.call(null,res);
var state_28337__$1 = (function (){var statearr_28339 = state_28337;
(statearr_28339[(7)] = inst_28334);

return statearr_28339;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28337__$1,inst_28335);
} else {
return null;
}
}
});})(c__22433__auto___28514,res,vec__28332,v,p,job,jobs,results))
;
return ((function (switch__22368__auto__,c__22433__auto___28514,res,vec__28332,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22369__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22369__auto____0 = (function (){
var statearr_28343 = [null,null,null,null,null,null,null,null];
(statearr_28343[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22369__auto__);

(statearr_28343[(1)] = (1));

return statearr_28343;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22369__auto____1 = (function (state_28337){
while(true){
var ret_value__22370__auto__ = (function (){try{while(true){
var result__22371__auto__ = switch__22368__auto__.call(null,state_28337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22371__auto__;
}
break;
}
}catch (e28344){if((e28344 instanceof Object)){
var ex__22372__auto__ = e28344;
var statearr_28345_28515 = state_28337;
(statearr_28345_28515[(5)] = ex__22372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28344;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28516 = state_28337;
state_28337 = G__28516;
continue;
} else {
return ret_value__22370__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22369__auto__ = function(state_28337){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22369__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22369__auto____1.call(this,state_28337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22369__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22369__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22369__auto__;
})()
;})(switch__22368__auto__,c__22433__auto___28514,res,vec__28332,v,p,job,jobs,results))
})();
var state__22435__auto__ = (function (){var statearr_28346 = f__22434__auto__.call(null);
(statearr_28346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22433__auto___28514);

return statearr_28346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22435__auto__);
});})(c__22433__auto___28514,res,vec__28332,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28347){
var vec__28348 = p__28347;
var v = cljs.core.nth.call(null,vec__28348,(0),null);
var p = cljs.core.nth.call(null,vec__28348,(1),null);
var job = vec__28348;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19622__auto___28517 = n;
var __28518 = (0);
while(true){
if((__28518 < n__19622__auto___28517)){
var G__28349_28519 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28349_28519) {
case "compute":
var c__22433__auto___28521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28518,c__22433__auto___28521,G__28349_28519,n__19622__auto___28517,jobs,results,process,async){
return (function (){
var f__22434__auto__ = (function (){var switch__22368__auto__ = ((function (__28518,c__22433__auto___28521,G__28349_28519,n__19622__auto___28517,jobs,results,process,async){
return (function (state_28362){
var state_val_28363 = (state_28362[(1)]);
if((state_val_28363 === (1))){
var state_28362__$1 = state_28362;
var statearr_28364_28522 = state_28362__$1;
(statearr_28364_28522[(2)] = null);

(statearr_28364_28522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28363 === (2))){
var state_28362__$1 = state_28362;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28362__$1,(4),jobs);
} else {
if((state_val_28363 === (3))){
var inst_28360 = (state_28362[(2)]);
var state_28362__$1 = state_28362;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28362__$1,inst_28360);
} else {
if((state_val_28363 === (4))){
var inst_28352 = (state_28362[(2)]);
var inst_28353 = process.call(null,inst_28352);
var state_28362__$1 = state_28362;
if(cljs.core.truth_(inst_28353)){
var statearr_28365_28523 = state_28362__$1;
(statearr_28365_28523[(1)] = (5));

} else {
var statearr_28366_28524 = state_28362__$1;
(statearr_28366_28524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28363 === (5))){
var state_28362__$1 = state_28362;
var statearr_28367_28525 = state_28362__$1;
(statearr_28367_28525[(2)] = null);

(statearr_28367_28525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28363 === (6))){
var state_28362__$1 = state_28362;
var statearr_28368_28526 = state_28362__$1;
(statearr_28368_28526[(2)] = null);

(statearr_28368_28526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28363 === (7))){
var inst_28358 = (state_28362[(2)]);
var state_28362__$1 = state_28362;
var statearr_28369_28527 = state_28362__$1;
(statearr_28369_28527[(2)] = inst_28358);

(statearr_28369_28527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__28518,c__22433__auto___28521,G__28349_28519,n__19622__auto___28517,jobs,results,process,async))
;
return ((function (__28518,switch__22368__auto__,c__22433__auto___28521,G__28349_28519,n__19622__auto___28517,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22369__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22369__auto____0 = (function (){
var statearr_28373 = [null,null,null,null,null,null,null];
(statearr_28373[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22369__auto__);

(statearr_28373[(1)] = (1));

return statearr_28373;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22369__auto____1 = (function (state_28362){
while(true){
var ret_value__22370__auto__ = (function (){try{while(true){
var result__22371__auto__ = switch__22368__auto__.call(null,state_28362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22371__auto__;
}
break;
}
}catch (e28374){if((e28374 instanceof Object)){
var ex__22372__auto__ = e28374;
var statearr_28375_28528 = state_28362;
(statearr_28375_28528[(5)] = ex__22372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28529 = state_28362;
state_28362 = G__28529;
continue;
} else {
return ret_value__22370__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22369__auto__ = function(state_28362){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22369__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22369__auto____1.call(this,state_28362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22369__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22369__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22369__auto__;
})()
;})(__28518,switch__22368__auto__,c__22433__auto___28521,G__28349_28519,n__19622__auto___28517,jobs,results,process,async))
})();
var state__22435__auto__ = (function (){var statearr_28376 = f__22434__auto__.call(null);
(statearr_28376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22433__auto___28521);

return statearr_28376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22435__auto__);
});})(__28518,c__22433__auto___28521,G__28349_28519,n__19622__auto___28517,jobs,results,process,async))
);


break;
case "async":
var c__22433__auto___28530 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28518,c__22433__auto___28530,G__28349_28519,n__19622__auto___28517,jobs,results,process,async){
return (function (){
var f__22434__auto__ = (function (){var switch__22368__auto__ = ((function (__28518,c__22433__auto___28530,G__28349_28519,n__19622__auto___28517,jobs,results,process,async){
return (function (state_28389){
var state_val_28390 = (state_28389[(1)]);
if((state_val_28390 === (1))){
var state_28389__$1 = state_28389;
var statearr_28391_28531 = state_28389__$1;
(statearr_28391_28531[(2)] = null);

(statearr_28391_28531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28390 === (2))){
var state_28389__$1 = state_28389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28389__$1,(4),jobs);
} else {
if((state_val_28390 === (3))){
var inst_28387 = (state_28389[(2)]);
var state_28389__$1 = state_28389;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28389__$1,inst_28387);
} else {
if((state_val_28390 === (4))){
var inst_28379 = (state_28389[(2)]);
var inst_28380 = async.call(null,inst_28379);
var state_28389__$1 = state_28389;
if(cljs.core.truth_(inst_28380)){
var statearr_28392_28532 = state_28389__$1;
(statearr_28392_28532[(1)] = (5));

} else {
var statearr_28393_28533 = state_28389__$1;
(statearr_28393_28533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28390 === (5))){
var state_28389__$1 = state_28389;
var statearr_28394_28534 = state_28389__$1;
(statearr_28394_28534[(2)] = null);

(statearr_28394_28534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28390 === (6))){
var state_28389__$1 = state_28389;
var statearr_28395_28535 = state_28389__$1;
(statearr_28395_28535[(2)] = null);

(statearr_28395_28535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28390 === (7))){
var inst_28385 = (state_28389[(2)]);
var state_28389__$1 = state_28389;
var statearr_28396_28536 = state_28389__$1;
(statearr_28396_28536[(2)] = inst_28385);

(statearr_28396_28536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__28518,c__22433__auto___28530,G__28349_28519,n__19622__auto___28517,jobs,results,process,async))
;
return ((function (__28518,switch__22368__auto__,c__22433__auto___28530,G__28349_28519,n__19622__auto___28517,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22369__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22369__auto____0 = (function (){
var statearr_28400 = [null,null,null,null,null,null,null];
(statearr_28400[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22369__auto__);

(statearr_28400[(1)] = (1));

return statearr_28400;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22369__auto____1 = (function (state_28389){
while(true){
var ret_value__22370__auto__ = (function (){try{while(true){
var result__22371__auto__ = switch__22368__auto__.call(null,state_28389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22371__auto__;
}
break;
}
}catch (e28401){if((e28401 instanceof Object)){
var ex__22372__auto__ = e28401;
var statearr_28402_28537 = state_28389;
(statearr_28402_28537[(5)] = ex__22372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28538 = state_28389;
state_28389 = G__28538;
continue;
} else {
return ret_value__22370__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22369__auto__ = function(state_28389){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22369__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22369__auto____1.call(this,state_28389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22369__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22369__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22369__auto__;
})()
;})(__28518,switch__22368__auto__,c__22433__auto___28530,G__28349_28519,n__19622__auto___28517,jobs,results,process,async))
})();
var state__22435__auto__ = (function (){var statearr_28403 = f__22434__auto__.call(null);
(statearr_28403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22433__auto___28530);

return statearr_28403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22435__auto__);
});})(__28518,c__22433__auto___28530,G__28349_28519,n__19622__auto___28517,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28539 = (__28518 + (1));
__28518 = G__28539;
continue;
} else {
}
break;
}

var c__22433__auto___28540 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22433__auto___28540,jobs,results,process,async){
return (function (){
var f__22434__auto__ = (function (){var switch__22368__auto__ = ((function (c__22433__auto___28540,jobs,results,process,async){
return (function (state_28425){
var state_val_28426 = (state_28425[(1)]);
if((state_val_28426 === (1))){
var state_28425__$1 = state_28425;
var statearr_28427_28541 = state_28425__$1;
(statearr_28427_28541[(2)] = null);

(statearr_28427_28541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (2))){
var state_28425__$1 = state_28425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28425__$1,(4),from);
} else {
if((state_val_28426 === (3))){
var inst_28423 = (state_28425[(2)]);
var state_28425__$1 = state_28425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28425__$1,inst_28423);
} else {
if((state_val_28426 === (4))){
var inst_28406 = (state_28425[(7)]);
var inst_28406__$1 = (state_28425[(2)]);
var inst_28407 = (inst_28406__$1 == null);
var state_28425__$1 = (function (){var statearr_28428 = state_28425;
(statearr_28428[(7)] = inst_28406__$1);

return statearr_28428;
})();
if(cljs.core.truth_(inst_28407)){
var statearr_28429_28542 = state_28425__$1;
(statearr_28429_28542[(1)] = (5));

} else {
var statearr_28430_28543 = state_28425__$1;
(statearr_28430_28543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (5))){
var inst_28409 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28425__$1 = state_28425;
var statearr_28431_28544 = state_28425__$1;
(statearr_28431_28544[(2)] = inst_28409);

(statearr_28431_28544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (6))){
var inst_28411 = (state_28425[(8)]);
var inst_28406 = (state_28425[(7)]);
var inst_28411__$1 = cljs.core.async.chan.call(null,(1));
var inst_28412 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28413 = [inst_28406,inst_28411__$1];
var inst_28414 = (new cljs.core.PersistentVector(null,2,(5),inst_28412,inst_28413,null));
var state_28425__$1 = (function (){var statearr_28432 = state_28425;
(statearr_28432[(8)] = inst_28411__$1);

return statearr_28432;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28425__$1,(8),jobs,inst_28414);
} else {
if((state_val_28426 === (7))){
var inst_28421 = (state_28425[(2)]);
var state_28425__$1 = state_28425;
var statearr_28433_28545 = state_28425__$1;
(statearr_28433_28545[(2)] = inst_28421);

(statearr_28433_28545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (8))){
var inst_28411 = (state_28425[(8)]);
var inst_28416 = (state_28425[(2)]);
var state_28425__$1 = (function (){var statearr_28434 = state_28425;
(statearr_28434[(9)] = inst_28416);

return statearr_28434;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28425__$1,(9),results,inst_28411);
} else {
if((state_val_28426 === (9))){
var inst_28418 = (state_28425[(2)]);
var state_28425__$1 = (function (){var statearr_28435 = state_28425;
(statearr_28435[(10)] = inst_28418);

return statearr_28435;
})();
var statearr_28436_28546 = state_28425__$1;
(statearr_28436_28546[(2)] = null);

(statearr_28436_28546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__22433__auto___28540,jobs,results,process,async))
;
return ((function (switch__22368__auto__,c__22433__auto___28540,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22369__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22369__auto____0 = (function (){
var statearr_28440 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28440[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22369__auto__);

(statearr_28440[(1)] = (1));

return statearr_28440;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22369__auto____1 = (function (state_28425){
while(true){
var ret_value__22370__auto__ = (function (){try{while(true){
var result__22371__auto__ = switch__22368__auto__.call(null,state_28425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22371__auto__;
}
break;
}
}catch (e28441){if((e28441 instanceof Object)){
var ex__22372__auto__ = e28441;
var statearr_28442_28547 = state_28425;
(statearr_28442_28547[(5)] = ex__22372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28548 = state_28425;
state_28425 = G__28548;
continue;
} else {
return ret_value__22370__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22369__auto__ = function(state_28425){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22369__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22369__auto____1.call(this,state_28425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22369__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22369__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22369__auto__;
})()
;})(switch__22368__auto__,c__22433__auto___28540,jobs,results,process,async))
})();
var state__22435__auto__ = (function (){var statearr_28443 = f__22434__auto__.call(null);
(statearr_28443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22433__auto___28540);

return statearr_28443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22435__auto__);
});})(c__22433__auto___28540,jobs,results,process,async))
);


var c__22433__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22433__auto__,jobs,results,process,async){
return (function (){
var f__22434__auto__ = (function (){var switch__22368__auto__ = ((function (c__22433__auto__,jobs,results,process,async){
return (function (state_28481){
var state_val_28482 = (state_28481[(1)]);
if((state_val_28482 === (7))){
var inst_28477 = (state_28481[(2)]);
var state_28481__$1 = state_28481;
var statearr_28483_28549 = state_28481__$1;
(statearr_28483_28549[(2)] = inst_28477);

(statearr_28483_28549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28482 === (20))){
var state_28481__$1 = state_28481;
var statearr_28484_28550 = state_28481__$1;
(statearr_28484_28550[(2)] = null);

(statearr_28484_28550[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28482 === (1))){
var state_28481__$1 = state_28481;
var statearr_28485_28551 = state_28481__$1;
(statearr_28485_28551[(2)] = null);

(statearr_28485_28551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28482 === (4))){
var inst_28446 = (state_28481[(7)]);
var inst_28446__$1 = (state_28481[(2)]);
var inst_28447 = (inst_28446__$1 == null);
var state_28481__$1 = (function (){var statearr_28486 = state_28481;
(statearr_28486[(7)] = inst_28446__$1);

return statearr_28486;
})();
if(cljs.core.truth_(inst_28447)){
var statearr_28487_28552 = state_28481__$1;
(statearr_28487_28552[(1)] = (5));

} else {
var statearr_28488_28553 = state_28481__$1;
(statearr_28488_28553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28482 === (15))){
var inst_28459 = (state_28481[(8)]);
var state_28481__$1 = state_28481;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28481__$1,(18),to,inst_28459);
} else {
if((state_val_28482 === (21))){
var inst_28472 = (state_28481[(2)]);
var state_28481__$1 = state_28481;
var statearr_28489_28554 = state_28481__$1;
(statearr_28489_28554[(2)] = inst_28472);

(statearr_28489_28554[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28482 === (13))){
var inst_28474 = (state_28481[(2)]);
var state_28481__$1 = (function (){var statearr_28490 = state_28481;
(statearr_28490[(9)] = inst_28474);

return statearr_28490;
})();
var statearr_28491_28555 = state_28481__$1;
(statearr_28491_28555[(2)] = null);

(statearr_28491_28555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28482 === (6))){
var inst_28446 = (state_28481[(7)]);
var state_28481__$1 = state_28481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28481__$1,(11),inst_28446);
} else {
if((state_val_28482 === (17))){
var inst_28467 = (state_28481[(2)]);
var state_28481__$1 = state_28481;
if(cljs.core.truth_(inst_28467)){
var statearr_28492_28556 = state_28481__$1;
(statearr_28492_28556[(1)] = (19));

} else {
var statearr_28493_28557 = state_28481__$1;
(statearr_28493_28557[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28482 === (3))){
var inst_28479 = (state_28481[(2)]);
var state_28481__$1 = state_28481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28481__$1,inst_28479);
} else {
if((state_val_28482 === (12))){
var inst_28456 = (state_28481[(10)]);
var state_28481__$1 = state_28481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28481__$1,(14),inst_28456);
} else {
if((state_val_28482 === (2))){
var state_28481__$1 = state_28481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28481__$1,(4),results);
} else {
if((state_val_28482 === (19))){
var state_28481__$1 = state_28481;
var statearr_28494_28558 = state_28481__$1;
(statearr_28494_28558[(2)] = null);

(statearr_28494_28558[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28482 === (11))){
var inst_28456 = (state_28481[(2)]);
var state_28481__$1 = (function (){var statearr_28495 = state_28481;
(statearr_28495[(10)] = inst_28456);

return statearr_28495;
})();
var statearr_28496_28559 = state_28481__$1;
(statearr_28496_28559[(2)] = null);

(statearr_28496_28559[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28482 === (9))){
var state_28481__$1 = state_28481;
var statearr_28497_28560 = state_28481__$1;
(statearr_28497_28560[(2)] = null);

(statearr_28497_28560[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28482 === (5))){
var state_28481__$1 = state_28481;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28498_28561 = state_28481__$1;
(statearr_28498_28561[(1)] = (8));

} else {
var statearr_28499_28562 = state_28481__$1;
(statearr_28499_28562[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28482 === (14))){
var inst_28459 = (state_28481[(8)]);
var inst_28461 = (state_28481[(11)]);
var inst_28459__$1 = (state_28481[(2)]);
var inst_28460 = (inst_28459__$1 == null);
var inst_28461__$1 = cljs.core.not.call(null,inst_28460);
var state_28481__$1 = (function (){var statearr_28500 = state_28481;
(statearr_28500[(8)] = inst_28459__$1);

(statearr_28500[(11)] = inst_28461__$1);

return statearr_28500;
})();
if(inst_28461__$1){
var statearr_28501_28563 = state_28481__$1;
(statearr_28501_28563[(1)] = (15));

} else {
var statearr_28502_28564 = state_28481__$1;
(statearr_28502_28564[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28482 === (16))){
var inst_28461 = (state_28481[(11)]);
var state_28481__$1 = state_28481;
var statearr_28503_28565 = state_28481__$1;
(statearr_28503_28565[(2)] = inst_28461);

(statearr_28503_28565[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28482 === (10))){
var inst_28453 = (state_28481[(2)]);
var state_28481__$1 = state_28481;
var statearr_28504_28566 = state_28481__$1;
(statearr_28504_28566[(2)] = inst_28453);

(statearr_28504_28566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28482 === (18))){
var inst_28464 = (state_28481[(2)]);
var state_28481__$1 = state_28481;
var statearr_28505_28567 = state_28481__$1;
(statearr_28505_28567[(2)] = inst_28464);

(statearr_28505_28567[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28482 === (8))){
var inst_28450 = cljs.core.async.close_BANG_.call(null,to);
var state_28481__$1 = state_28481;
var statearr_28506_28568 = state_28481__$1;
(statearr_28506_28568[(2)] = inst_28450);

(statearr_28506_28568[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22433__auto__,jobs,results,process,async))
;
return ((function (switch__22368__auto__,c__22433__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22369__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22369__auto____0 = (function (){
var statearr_28510 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28510[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22369__auto__);

(statearr_28510[(1)] = (1));

return statearr_28510;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22369__auto____1 = (function (state_28481){
while(true){
var ret_value__22370__auto__ = (function (){try{while(true){
var result__22371__auto__ = switch__22368__auto__.call(null,state_28481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22371__auto__;
}
break;
}
}catch (e28511){if((e28511 instanceof Object)){
var ex__22372__auto__ = e28511;
var statearr_28512_28569 = state_28481;
(statearr_28512_28569[(5)] = ex__22372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28570 = state_28481;
state_28481 = G__28570;
continue;
} else {
return ret_value__22370__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22369__auto__ = function(state_28481){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22369__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22369__auto____1.call(this,state_28481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22369__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22369__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22369__auto__;
})()
;})(switch__22368__auto__,c__22433__auto__,jobs,results,process,async))
})();
var state__22435__auto__ = (function (){var statearr_28513 = f__22434__auto__.call(null);
(statearr_28513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22433__auto__);

return statearr_28513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22435__auto__);
});})(c__22433__auto__,jobs,results,process,async))
);

return c__22433__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args28571 = [];
var len__19777__auto___28574 = arguments.length;
var i__19778__auto___28575 = (0);
while(true){
if((i__19778__auto___28575 < len__19777__auto___28574)){
args28571.push((arguments[i__19778__auto___28575]));

var G__28576 = (i__19778__auto___28575 + (1));
i__19778__auto___28575 = G__28576;
continue;
} else {
}
break;
}

var G__28573 = args28571.length;
switch (G__28573) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28571.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args28578 = [];
var len__19777__auto___28581 = arguments.length;
var i__19778__auto___28582 = (0);
while(true){
if((i__19778__auto___28582 < len__19777__auto___28581)){
args28578.push((arguments[i__19778__auto___28582]));

var G__28583 = (i__19778__auto___28582 + (1));
i__19778__auto___28582 = G__28583;
continue;
} else {
}
break;
}

var G__28580 = args28578.length;
switch (G__28580) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28578.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args28585 = [];
var len__19777__auto___28638 = arguments.length;
var i__19778__auto___28639 = (0);
while(true){
if((i__19778__auto___28639 < len__19777__auto___28638)){
args28585.push((arguments[i__19778__auto___28639]));

var G__28640 = (i__19778__auto___28639 + (1));
i__19778__auto___28639 = G__28640;
continue;
} else {
}
break;
}

var G__28587 = args28585.length;
switch (G__28587) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28585.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22433__auto___28642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22433__auto___28642,tc,fc){
return (function (){
var f__22434__auto__ = (function (){var switch__22368__auto__ = ((function (c__22433__auto___28642,tc,fc){
return (function (state_28613){
var state_val_28614 = (state_28613[(1)]);
if((state_val_28614 === (7))){
var inst_28609 = (state_28613[(2)]);
var state_28613__$1 = state_28613;
var statearr_28615_28643 = state_28613__$1;
(statearr_28615_28643[(2)] = inst_28609);

(statearr_28615_28643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (1))){
var state_28613__$1 = state_28613;
var statearr_28616_28644 = state_28613__$1;
(statearr_28616_28644[(2)] = null);

(statearr_28616_28644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (4))){
var inst_28590 = (state_28613[(7)]);
var inst_28590__$1 = (state_28613[(2)]);
var inst_28591 = (inst_28590__$1 == null);
var state_28613__$1 = (function (){var statearr_28617 = state_28613;
(statearr_28617[(7)] = inst_28590__$1);

return statearr_28617;
})();
if(cljs.core.truth_(inst_28591)){
var statearr_28618_28645 = state_28613__$1;
(statearr_28618_28645[(1)] = (5));

} else {
var statearr_28619_28646 = state_28613__$1;
(statearr_28619_28646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (13))){
var state_28613__$1 = state_28613;
var statearr_28620_28647 = state_28613__$1;
(statearr_28620_28647[(2)] = null);

(statearr_28620_28647[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (6))){
var inst_28590 = (state_28613[(7)]);
var inst_28596 = p.call(null,inst_28590);
var state_28613__$1 = state_28613;
if(cljs.core.truth_(inst_28596)){
var statearr_28621_28648 = state_28613__$1;
(statearr_28621_28648[(1)] = (9));

} else {
var statearr_28622_28649 = state_28613__$1;
(statearr_28622_28649[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (3))){
var inst_28611 = (state_28613[(2)]);
var state_28613__$1 = state_28613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28613__$1,inst_28611);
} else {
if((state_val_28614 === (12))){
var state_28613__$1 = state_28613;
var statearr_28623_28650 = state_28613__$1;
(statearr_28623_28650[(2)] = null);

(statearr_28623_28650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (2))){
var state_28613__$1 = state_28613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28613__$1,(4),ch);
} else {
if((state_val_28614 === (11))){
var inst_28590 = (state_28613[(7)]);
var inst_28600 = (state_28613[(2)]);
var state_28613__$1 = state_28613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28613__$1,(8),inst_28600,inst_28590);
} else {
if((state_val_28614 === (9))){
var state_28613__$1 = state_28613;
var statearr_28624_28651 = state_28613__$1;
(statearr_28624_28651[(2)] = tc);

(statearr_28624_28651[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (5))){
var inst_28593 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28594 = cljs.core.async.close_BANG_.call(null,fc);
var state_28613__$1 = (function (){var statearr_28625 = state_28613;
(statearr_28625[(8)] = inst_28593);

return statearr_28625;
})();
var statearr_28626_28652 = state_28613__$1;
(statearr_28626_28652[(2)] = inst_28594);

(statearr_28626_28652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (14))){
var inst_28607 = (state_28613[(2)]);
var state_28613__$1 = state_28613;
var statearr_28627_28653 = state_28613__$1;
(statearr_28627_28653[(2)] = inst_28607);

(statearr_28627_28653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (10))){
var state_28613__$1 = state_28613;
var statearr_28628_28654 = state_28613__$1;
(statearr_28628_28654[(2)] = fc);

(statearr_28628_28654[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (8))){
var inst_28602 = (state_28613[(2)]);
var state_28613__$1 = state_28613;
if(cljs.core.truth_(inst_28602)){
var statearr_28629_28655 = state_28613__$1;
(statearr_28629_28655[(1)] = (12));

} else {
var statearr_28630_28656 = state_28613__$1;
(statearr_28630_28656[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22433__auto___28642,tc,fc))
;
return ((function (switch__22368__auto__,c__22433__auto___28642,tc,fc){
return (function() {
var cljs$core$async$state_machine__22369__auto__ = null;
var cljs$core$async$state_machine__22369__auto____0 = (function (){
var statearr_28634 = [null,null,null,null,null,null,null,null,null];
(statearr_28634[(0)] = cljs$core$async$state_machine__22369__auto__);

(statearr_28634[(1)] = (1));

return statearr_28634;
});
var cljs$core$async$state_machine__22369__auto____1 = (function (state_28613){
while(true){
var ret_value__22370__auto__ = (function (){try{while(true){
var result__22371__auto__ = switch__22368__auto__.call(null,state_28613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22371__auto__;
}
break;
}
}catch (e28635){if((e28635 instanceof Object)){
var ex__22372__auto__ = e28635;
var statearr_28636_28657 = state_28613;
(statearr_28636_28657[(5)] = ex__22372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28658 = state_28613;
state_28613 = G__28658;
continue;
} else {
return ret_value__22370__auto__;
}
break;
}
});
cljs$core$async$state_machine__22369__auto__ = function(state_28613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22369__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22369__auto____1.call(this,state_28613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22369__auto____0;
cljs$core$async$state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22369__auto____1;
return cljs$core$async$state_machine__22369__auto__;
})()
;})(switch__22368__auto__,c__22433__auto___28642,tc,fc))
})();
var state__22435__auto__ = (function (){var statearr_28637 = f__22434__auto__.call(null);
(statearr_28637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22433__auto___28642);

return statearr_28637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22435__auto__);
});})(c__22433__auto___28642,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__22433__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22433__auto__){
return (function (){
var f__22434__auto__ = (function (){var switch__22368__auto__ = ((function (c__22433__auto__){
return (function (state_28705){
var state_val_28706 = (state_28705[(1)]);
if((state_val_28706 === (1))){
var inst_28691 = init;
var state_28705__$1 = (function (){var statearr_28707 = state_28705;
(statearr_28707[(7)] = inst_28691);

return statearr_28707;
})();
var statearr_28708_28723 = state_28705__$1;
(statearr_28708_28723[(2)] = null);

(statearr_28708_28723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28706 === (2))){
var state_28705__$1 = state_28705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28705__$1,(4),ch);
} else {
if((state_val_28706 === (3))){
var inst_28703 = (state_28705[(2)]);
var state_28705__$1 = state_28705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28705__$1,inst_28703);
} else {
if((state_val_28706 === (4))){
var inst_28694 = (state_28705[(8)]);
var inst_28694__$1 = (state_28705[(2)]);
var inst_28695 = (inst_28694__$1 == null);
var state_28705__$1 = (function (){var statearr_28709 = state_28705;
(statearr_28709[(8)] = inst_28694__$1);

return statearr_28709;
})();
if(cljs.core.truth_(inst_28695)){
var statearr_28710_28724 = state_28705__$1;
(statearr_28710_28724[(1)] = (5));

} else {
var statearr_28711_28725 = state_28705__$1;
(statearr_28711_28725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28706 === (5))){
var inst_28691 = (state_28705[(7)]);
var state_28705__$1 = state_28705;
var statearr_28712_28726 = state_28705__$1;
(statearr_28712_28726[(2)] = inst_28691);

(statearr_28712_28726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28706 === (6))){
var inst_28694 = (state_28705[(8)]);
var inst_28691 = (state_28705[(7)]);
var inst_28698 = f.call(null,inst_28691,inst_28694);
var inst_28691__$1 = inst_28698;
var state_28705__$1 = (function (){var statearr_28713 = state_28705;
(statearr_28713[(7)] = inst_28691__$1);

return statearr_28713;
})();
var statearr_28714_28727 = state_28705__$1;
(statearr_28714_28727[(2)] = null);

(statearr_28714_28727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28706 === (7))){
var inst_28701 = (state_28705[(2)]);
var state_28705__$1 = state_28705;
var statearr_28715_28728 = state_28705__$1;
(statearr_28715_28728[(2)] = inst_28701);

(statearr_28715_28728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__22433__auto__))
;
return ((function (switch__22368__auto__,c__22433__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22369__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22369__auto____0 = (function (){
var statearr_28719 = [null,null,null,null,null,null,null,null,null];
(statearr_28719[(0)] = cljs$core$async$reduce_$_state_machine__22369__auto__);

(statearr_28719[(1)] = (1));

return statearr_28719;
});
var cljs$core$async$reduce_$_state_machine__22369__auto____1 = (function (state_28705){
while(true){
var ret_value__22370__auto__ = (function (){try{while(true){
var result__22371__auto__ = switch__22368__auto__.call(null,state_28705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22371__auto__;
}
break;
}
}catch (e28720){if((e28720 instanceof Object)){
var ex__22372__auto__ = e28720;
var statearr_28721_28729 = state_28705;
(statearr_28721_28729[(5)] = ex__22372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28730 = state_28705;
state_28705 = G__28730;
continue;
} else {
return ret_value__22370__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22369__auto__ = function(state_28705){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22369__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22369__auto____1.call(this,state_28705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22369__auto____0;
cljs$core$async$reduce_$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22369__auto____1;
return cljs$core$async$reduce_$_state_machine__22369__auto__;
})()
;})(switch__22368__auto__,c__22433__auto__))
})();
var state__22435__auto__ = (function (){var statearr_28722 = f__22434__auto__.call(null);
(statearr_28722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22433__auto__);

return statearr_28722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22435__auto__);
});})(c__22433__auto__))
);

return c__22433__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args28731 = [];
var len__19777__auto___28783 = arguments.length;
var i__19778__auto___28784 = (0);
while(true){
if((i__19778__auto___28784 < len__19777__auto___28783)){
args28731.push((arguments[i__19778__auto___28784]));

var G__28785 = (i__19778__auto___28784 + (1));
i__19778__auto___28784 = G__28785;
continue;
} else {
}
break;
}

var G__28733 = args28731.length;
switch (G__28733) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28731.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22433__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22433__auto__){
return (function (){
var f__22434__auto__ = (function (){var switch__22368__auto__ = ((function (c__22433__auto__){
return (function (state_28758){
var state_val_28759 = (state_28758[(1)]);
if((state_val_28759 === (7))){
var inst_28740 = (state_28758[(2)]);
var state_28758__$1 = state_28758;
var statearr_28760_28787 = state_28758__$1;
(statearr_28760_28787[(2)] = inst_28740);

(statearr_28760_28787[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (1))){
var inst_28734 = cljs.core.seq.call(null,coll);
var inst_28735 = inst_28734;
var state_28758__$1 = (function (){var statearr_28761 = state_28758;
(statearr_28761[(7)] = inst_28735);

return statearr_28761;
})();
var statearr_28762_28788 = state_28758__$1;
(statearr_28762_28788[(2)] = null);

(statearr_28762_28788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (4))){
var inst_28735 = (state_28758[(7)]);
var inst_28738 = cljs.core.first.call(null,inst_28735);
var state_28758__$1 = state_28758;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28758__$1,(7),ch,inst_28738);
} else {
if((state_val_28759 === (13))){
var inst_28752 = (state_28758[(2)]);
var state_28758__$1 = state_28758;
var statearr_28763_28789 = state_28758__$1;
(statearr_28763_28789[(2)] = inst_28752);

(statearr_28763_28789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (6))){
var inst_28743 = (state_28758[(2)]);
var state_28758__$1 = state_28758;
if(cljs.core.truth_(inst_28743)){
var statearr_28764_28790 = state_28758__$1;
(statearr_28764_28790[(1)] = (8));

} else {
var statearr_28765_28791 = state_28758__$1;
(statearr_28765_28791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (3))){
var inst_28756 = (state_28758[(2)]);
var state_28758__$1 = state_28758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28758__$1,inst_28756);
} else {
if((state_val_28759 === (12))){
var state_28758__$1 = state_28758;
var statearr_28766_28792 = state_28758__$1;
(statearr_28766_28792[(2)] = null);

(statearr_28766_28792[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (2))){
var inst_28735 = (state_28758[(7)]);
var state_28758__$1 = state_28758;
if(cljs.core.truth_(inst_28735)){
var statearr_28767_28793 = state_28758__$1;
(statearr_28767_28793[(1)] = (4));

} else {
var statearr_28768_28794 = state_28758__$1;
(statearr_28768_28794[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (11))){
var inst_28749 = cljs.core.async.close_BANG_.call(null,ch);
var state_28758__$1 = state_28758;
var statearr_28769_28795 = state_28758__$1;
(statearr_28769_28795[(2)] = inst_28749);

(statearr_28769_28795[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (9))){
var state_28758__$1 = state_28758;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28770_28796 = state_28758__$1;
(statearr_28770_28796[(1)] = (11));

} else {
var statearr_28771_28797 = state_28758__$1;
(statearr_28771_28797[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (5))){
var inst_28735 = (state_28758[(7)]);
var state_28758__$1 = state_28758;
var statearr_28772_28798 = state_28758__$1;
(statearr_28772_28798[(2)] = inst_28735);

(statearr_28772_28798[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (10))){
var inst_28754 = (state_28758[(2)]);
var state_28758__$1 = state_28758;
var statearr_28773_28799 = state_28758__$1;
(statearr_28773_28799[(2)] = inst_28754);

(statearr_28773_28799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (8))){
var inst_28735 = (state_28758[(7)]);
var inst_28745 = cljs.core.next.call(null,inst_28735);
var inst_28735__$1 = inst_28745;
var state_28758__$1 = (function (){var statearr_28774 = state_28758;
(statearr_28774[(7)] = inst_28735__$1);

return statearr_28774;
})();
var statearr_28775_28800 = state_28758__$1;
(statearr_28775_28800[(2)] = null);

(statearr_28775_28800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22433__auto__))
;
return ((function (switch__22368__auto__,c__22433__auto__){
return (function() {
var cljs$core$async$state_machine__22369__auto__ = null;
var cljs$core$async$state_machine__22369__auto____0 = (function (){
var statearr_28779 = [null,null,null,null,null,null,null,null];
(statearr_28779[(0)] = cljs$core$async$state_machine__22369__auto__);

(statearr_28779[(1)] = (1));

return statearr_28779;
});
var cljs$core$async$state_machine__22369__auto____1 = (function (state_28758){
while(true){
var ret_value__22370__auto__ = (function (){try{while(true){
var result__22371__auto__ = switch__22368__auto__.call(null,state_28758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22371__auto__;
}
break;
}
}catch (e28780){if((e28780 instanceof Object)){
var ex__22372__auto__ = e28780;
var statearr_28781_28801 = state_28758;
(statearr_28781_28801[(5)] = ex__22372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28802 = state_28758;
state_28758 = G__28802;
continue;
} else {
return ret_value__22370__auto__;
}
break;
}
});
cljs$core$async$state_machine__22369__auto__ = function(state_28758){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22369__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22369__auto____1.call(this,state_28758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22369__auto____0;
cljs$core$async$state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22369__auto____1;
return cljs$core$async$state_machine__22369__auto__;
})()
;})(switch__22368__auto__,c__22433__auto__))
})();
var state__22435__auto__ = (function (){var statearr_28782 = f__22434__auto__.call(null);
(statearr_28782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22433__auto__);

return statearr_28782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22435__auto__);
});})(c__22433__auto__))
);

return c__22433__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19374__auto__ = (((_ == null))?null:_);
var m__19375__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19374__auto__)]);
if(!((m__19375__auto__ == null))){
return m__19375__auto__.call(null,_);
} else {
var m__19375__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19375__auto____$1 == null))){
return m__19375__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19374__auto__ = (((m == null))?null:m);
var m__19375__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19374__auto__)]);
if(!((m__19375__auto__ == null))){
return m__19375__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19375__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19375__auto____$1 == null))){
return m__19375__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__19374__auto__ = (((m == null))?null:m);
var m__19375__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19374__auto__)]);
if(!((m__19375__auto__ == null))){
return m__19375__auto__.call(null,m,ch);
} else {
var m__19375__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19375__auto____$1 == null))){
return m__19375__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__19374__auto__ = (((m == null))?null:m);
var m__19375__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19374__auto__)]);
if(!((m__19375__auto__ == null))){
return m__19375__auto__.call(null,m);
} else {
var m__19375__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19375__auto____$1 == null))){
return m__19375__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29024 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29024 = (function (mult,ch,cs,meta29025){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29025 = meta29025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29026,meta29025__$1){
var self__ = this;
var _29026__$1 = this;
return (new cljs.core.async.t_cljs$core$async29024(self__.mult,self__.ch,self__.cs,meta29025__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29024.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29026){
var self__ = this;
var _29026__$1 = this;
return self__.meta29025;
});})(cs))
;

cljs.core.async.t_cljs$core$async29024.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29024.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29024.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async29024.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29024.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29024.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29024.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29025","meta29025",-1165807187,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29024.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29024.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29024";

cljs.core.async.t_cljs$core$async29024.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19317__auto__,writer__19318__auto__,opt__19319__auto__){
return cljs.core._write.call(null,writer__19318__auto__,"cljs.core.async/t_cljs$core$async29024");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29024 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29024(mult__$1,ch__$1,cs__$1,meta29025){
return (new cljs.core.async.t_cljs$core$async29024(mult__$1,ch__$1,cs__$1,meta29025));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29024(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__22433__auto___29245 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22433__auto___29245,cs,m,dchan,dctr,done){
return (function (){
var f__22434__auto__ = (function (){var switch__22368__auto__ = ((function (c__22433__auto___29245,cs,m,dchan,dctr,done){
return (function (state_29157){
var state_val_29158 = (state_29157[(1)]);
if((state_val_29158 === (7))){
var inst_29153 = (state_29157[(2)]);
var state_29157__$1 = state_29157;
var statearr_29159_29246 = state_29157__$1;
(statearr_29159_29246[(2)] = inst_29153);

(statearr_29159_29246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (20))){
var inst_29058 = (state_29157[(7)]);
var inst_29068 = cljs.core.first.call(null,inst_29058);
var inst_29069 = cljs.core.nth.call(null,inst_29068,(0),null);
var inst_29070 = cljs.core.nth.call(null,inst_29068,(1),null);
var state_29157__$1 = (function (){var statearr_29160 = state_29157;
(statearr_29160[(8)] = inst_29069);

return statearr_29160;
})();
if(cljs.core.truth_(inst_29070)){
var statearr_29161_29247 = state_29157__$1;
(statearr_29161_29247[(1)] = (22));

} else {
var statearr_29162_29248 = state_29157__$1;
(statearr_29162_29248[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (27))){
var inst_29105 = (state_29157[(9)]);
var inst_29029 = (state_29157[(10)]);
var inst_29100 = (state_29157[(11)]);
var inst_29098 = (state_29157[(12)]);
var inst_29105__$1 = cljs.core._nth.call(null,inst_29098,inst_29100);
var inst_29106 = cljs.core.async.put_BANG_.call(null,inst_29105__$1,inst_29029,done);
var state_29157__$1 = (function (){var statearr_29163 = state_29157;
(statearr_29163[(9)] = inst_29105__$1);

return statearr_29163;
})();
if(cljs.core.truth_(inst_29106)){
var statearr_29164_29249 = state_29157__$1;
(statearr_29164_29249[(1)] = (30));

} else {
var statearr_29165_29250 = state_29157__$1;
(statearr_29165_29250[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (1))){
var state_29157__$1 = state_29157;
var statearr_29166_29251 = state_29157__$1;
(statearr_29166_29251[(2)] = null);

(statearr_29166_29251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (24))){
var inst_29058 = (state_29157[(7)]);
var inst_29075 = (state_29157[(2)]);
var inst_29076 = cljs.core.next.call(null,inst_29058);
var inst_29038 = inst_29076;
var inst_29039 = null;
var inst_29040 = (0);
var inst_29041 = (0);
var state_29157__$1 = (function (){var statearr_29167 = state_29157;
(statearr_29167[(13)] = inst_29039);

(statearr_29167[(14)] = inst_29041);

(statearr_29167[(15)] = inst_29040);

(statearr_29167[(16)] = inst_29075);

(statearr_29167[(17)] = inst_29038);

return statearr_29167;
})();
var statearr_29168_29252 = state_29157__$1;
(statearr_29168_29252[(2)] = null);

(statearr_29168_29252[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (39))){
var state_29157__$1 = state_29157;
var statearr_29172_29253 = state_29157__$1;
(statearr_29172_29253[(2)] = null);

(statearr_29172_29253[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (4))){
var inst_29029 = (state_29157[(10)]);
var inst_29029__$1 = (state_29157[(2)]);
var inst_29030 = (inst_29029__$1 == null);
var state_29157__$1 = (function (){var statearr_29173 = state_29157;
(statearr_29173[(10)] = inst_29029__$1);

return statearr_29173;
})();
if(cljs.core.truth_(inst_29030)){
var statearr_29174_29254 = state_29157__$1;
(statearr_29174_29254[(1)] = (5));

} else {
var statearr_29175_29255 = state_29157__$1;
(statearr_29175_29255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (15))){
var inst_29039 = (state_29157[(13)]);
var inst_29041 = (state_29157[(14)]);
var inst_29040 = (state_29157[(15)]);
var inst_29038 = (state_29157[(17)]);
var inst_29054 = (state_29157[(2)]);
var inst_29055 = (inst_29041 + (1));
var tmp29169 = inst_29039;
var tmp29170 = inst_29040;
var tmp29171 = inst_29038;
var inst_29038__$1 = tmp29171;
var inst_29039__$1 = tmp29169;
var inst_29040__$1 = tmp29170;
var inst_29041__$1 = inst_29055;
var state_29157__$1 = (function (){var statearr_29176 = state_29157;
(statearr_29176[(13)] = inst_29039__$1);

(statearr_29176[(14)] = inst_29041__$1);

(statearr_29176[(15)] = inst_29040__$1);

(statearr_29176[(18)] = inst_29054);

(statearr_29176[(17)] = inst_29038__$1);

return statearr_29176;
})();
var statearr_29177_29256 = state_29157__$1;
(statearr_29177_29256[(2)] = null);

(statearr_29177_29256[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (21))){
var inst_29079 = (state_29157[(2)]);
var state_29157__$1 = state_29157;
var statearr_29181_29257 = state_29157__$1;
(statearr_29181_29257[(2)] = inst_29079);

(statearr_29181_29257[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (31))){
var inst_29105 = (state_29157[(9)]);
var inst_29109 = done.call(null,null);
var inst_29110 = cljs.core.async.untap_STAR_.call(null,m,inst_29105);
var state_29157__$1 = (function (){var statearr_29182 = state_29157;
(statearr_29182[(19)] = inst_29109);

return statearr_29182;
})();
var statearr_29183_29258 = state_29157__$1;
(statearr_29183_29258[(2)] = inst_29110);

(statearr_29183_29258[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (32))){
var inst_29100 = (state_29157[(11)]);
var inst_29098 = (state_29157[(12)]);
var inst_29099 = (state_29157[(20)]);
var inst_29097 = (state_29157[(21)]);
var inst_29112 = (state_29157[(2)]);
var inst_29113 = (inst_29100 + (1));
var tmp29178 = inst_29098;
var tmp29179 = inst_29099;
var tmp29180 = inst_29097;
var inst_29097__$1 = tmp29180;
var inst_29098__$1 = tmp29178;
var inst_29099__$1 = tmp29179;
var inst_29100__$1 = inst_29113;
var state_29157__$1 = (function (){var statearr_29184 = state_29157;
(statearr_29184[(11)] = inst_29100__$1);

(statearr_29184[(12)] = inst_29098__$1);

(statearr_29184[(22)] = inst_29112);

(statearr_29184[(20)] = inst_29099__$1);

(statearr_29184[(21)] = inst_29097__$1);

return statearr_29184;
})();
var statearr_29185_29259 = state_29157__$1;
(statearr_29185_29259[(2)] = null);

(statearr_29185_29259[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (40))){
var inst_29125 = (state_29157[(23)]);
var inst_29129 = done.call(null,null);
var inst_29130 = cljs.core.async.untap_STAR_.call(null,m,inst_29125);
var state_29157__$1 = (function (){var statearr_29186 = state_29157;
(statearr_29186[(24)] = inst_29129);

return statearr_29186;
})();
var statearr_29187_29260 = state_29157__$1;
(statearr_29187_29260[(2)] = inst_29130);

(statearr_29187_29260[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (33))){
var inst_29116 = (state_29157[(25)]);
var inst_29118 = cljs.core.chunked_seq_QMARK_.call(null,inst_29116);
var state_29157__$1 = state_29157;
if(inst_29118){
var statearr_29188_29261 = state_29157__$1;
(statearr_29188_29261[(1)] = (36));

} else {
var statearr_29189_29262 = state_29157__$1;
(statearr_29189_29262[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (13))){
var inst_29048 = (state_29157[(26)]);
var inst_29051 = cljs.core.async.close_BANG_.call(null,inst_29048);
var state_29157__$1 = state_29157;
var statearr_29190_29263 = state_29157__$1;
(statearr_29190_29263[(2)] = inst_29051);

(statearr_29190_29263[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (22))){
var inst_29069 = (state_29157[(8)]);
var inst_29072 = cljs.core.async.close_BANG_.call(null,inst_29069);
var state_29157__$1 = state_29157;
var statearr_29191_29264 = state_29157__$1;
(statearr_29191_29264[(2)] = inst_29072);

(statearr_29191_29264[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (36))){
var inst_29116 = (state_29157[(25)]);
var inst_29120 = cljs.core.chunk_first.call(null,inst_29116);
var inst_29121 = cljs.core.chunk_rest.call(null,inst_29116);
var inst_29122 = cljs.core.count.call(null,inst_29120);
var inst_29097 = inst_29121;
var inst_29098 = inst_29120;
var inst_29099 = inst_29122;
var inst_29100 = (0);
var state_29157__$1 = (function (){var statearr_29192 = state_29157;
(statearr_29192[(11)] = inst_29100);

(statearr_29192[(12)] = inst_29098);

(statearr_29192[(20)] = inst_29099);

(statearr_29192[(21)] = inst_29097);

return statearr_29192;
})();
var statearr_29193_29265 = state_29157__$1;
(statearr_29193_29265[(2)] = null);

(statearr_29193_29265[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (41))){
var inst_29116 = (state_29157[(25)]);
var inst_29132 = (state_29157[(2)]);
var inst_29133 = cljs.core.next.call(null,inst_29116);
var inst_29097 = inst_29133;
var inst_29098 = null;
var inst_29099 = (0);
var inst_29100 = (0);
var state_29157__$1 = (function (){var statearr_29194 = state_29157;
(statearr_29194[(27)] = inst_29132);

(statearr_29194[(11)] = inst_29100);

(statearr_29194[(12)] = inst_29098);

(statearr_29194[(20)] = inst_29099);

(statearr_29194[(21)] = inst_29097);

return statearr_29194;
})();
var statearr_29195_29266 = state_29157__$1;
(statearr_29195_29266[(2)] = null);

(statearr_29195_29266[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (43))){
var state_29157__$1 = state_29157;
var statearr_29196_29267 = state_29157__$1;
(statearr_29196_29267[(2)] = null);

(statearr_29196_29267[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (29))){
var inst_29141 = (state_29157[(2)]);
var state_29157__$1 = state_29157;
var statearr_29197_29268 = state_29157__$1;
(statearr_29197_29268[(2)] = inst_29141);

(statearr_29197_29268[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (44))){
var inst_29150 = (state_29157[(2)]);
var state_29157__$1 = (function (){var statearr_29198 = state_29157;
(statearr_29198[(28)] = inst_29150);

return statearr_29198;
})();
var statearr_29199_29269 = state_29157__$1;
(statearr_29199_29269[(2)] = null);

(statearr_29199_29269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (6))){
var inst_29089 = (state_29157[(29)]);
var inst_29088 = cljs.core.deref.call(null,cs);
var inst_29089__$1 = cljs.core.keys.call(null,inst_29088);
var inst_29090 = cljs.core.count.call(null,inst_29089__$1);
var inst_29091 = cljs.core.reset_BANG_.call(null,dctr,inst_29090);
var inst_29096 = cljs.core.seq.call(null,inst_29089__$1);
var inst_29097 = inst_29096;
var inst_29098 = null;
var inst_29099 = (0);
var inst_29100 = (0);
var state_29157__$1 = (function (){var statearr_29200 = state_29157;
(statearr_29200[(11)] = inst_29100);

(statearr_29200[(12)] = inst_29098);

(statearr_29200[(30)] = inst_29091);

(statearr_29200[(20)] = inst_29099);

(statearr_29200[(29)] = inst_29089__$1);

(statearr_29200[(21)] = inst_29097);

return statearr_29200;
})();
var statearr_29201_29270 = state_29157__$1;
(statearr_29201_29270[(2)] = null);

(statearr_29201_29270[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (28))){
var inst_29116 = (state_29157[(25)]);
var inst_29097 = (state_29157[(21)]);
var inst_29116__$1 = cljs.core.seq.call(null,inst_29097);
var state_29157__$1 = (function (){var statearr_29202 = state_29157;
(statearr_29202[(25)] = inst_29116__$1);

return statearr_29202;
})();
if(inst_29116__$1){
var statearr_29203_29271 = state_29157__$1;
(statearr_29203_29271[(1)] = (33));

} else {
var statearr_29204_29272 = state_29157__$1;
(statearr_29204_29272[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (25))){
var inst_29100 = (state_29157[(11)]);
var inst_29099 = (state_29157[(20)]);
var inst_29102 = (inst_29100 < inst_29099);
var inst_29103 = inst_29102;
var state_29157__$1 = state_29157;
if(cljs.core.truth_(inst_29103)){
var statearr_29205_29273 = state_29157__$1;
(statearr_29205_29273[(1)] = (27));

} else {
var statearr_29206_29274 = state_29157__$1;
(statearr_29206_29274[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (34))){
var state_29157__$1 = state_29157;
var statearr_29207_29275 = state_29157__$1;
(statearr_29207_29275[(2)] = null);

(statearr_29207_29275[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (17))){
var state_29157__$1 = state_29157;
var statearr_29208_29276 = state_29157__$1;
(statearr_29208_29276[(2)] = null);

(statearr_29208_29276[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (3))){
var inst_29155 = (state_29157[(2)]);
var state_29157__$1 = state_29157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29157__$1,inst_29155);
} else {
if((state_val_29158 === (12))){
var inst_29084 = (state_29157[(2)]);
var state_29157__$1 = state_29157;
var statearr_29209_29277 = state_29157__$1;
(statearr_29209_29277[(2)] = inst_29084);

(statearr_29209_29277[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (2))){
var state_29157__$1 = state_29157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29157__$1,(4),ch);
} else {
if((state_val_29158 === (23))){
var state_29157__$1 = state_29157;
var statearr_29210_29278 = state_29157__$1;
(statearr_29210_29278[(2)] = null);

(statearr_29210_29278[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (35))){
var inst_29139 = (state_29157[(2)]);
var state_29157__$1 = state_29157;
var statearr_29211_29279 = state_29157__$1;
(statearr_29211_29279[(2)] = inst_29139);

(statearr_29211_29279[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (19))){
var inst_29058 = (state_29157[(7)]);
var inst_29062 = cljs.core.chunk_first.call(null,inst_29058);
var inst_29063 = cljs.core.chunk_rest.call(null,inst_29058);
var inst_29064 = cljs.core.count.call(null,inst_29062);
var inst_29038 = inst_29063;
var inst_29039 = inst_29062;
var inst_29040 = inst_29064;
var inst_29041 = (0);
var state_29157__$1 = (function (){var statearr_29212 = state_29157;
(statearr_29212[(13)] = inst_29039);

(statearr_29212[(14)] = inst_29041);

(statearr_29212[(15)] = inst_29040);

(statearr_29212[(17)] = inst_29038);

return statearr_29212;
})();
var statearr_29213_29280 = state_29157__$1;
(statearr_29213_29280[(2)] = null);

(statearr_29213_29280[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (11))){
var inst_29058 = (state_29157[(7)]);
var inst_29038 = (state_29157[(17)]);
var inst_29058__$1 = cljs.core.seq.call(null,inst_29038);
var state_29157__$1 = (function (){var statearr_29214 = state_29157;
(statearr_29214[(7)] = inst_29058__$1);

return statearr_29214;
})();
if(inst_29058__$1){
var statearr_29215_29281 = state_29157__$1;
(statearr_29215_29281[(1)] = (16));

} else {
var statearr_29216_29282 = state_29157__$1;
(statearr_29216_29282[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (9))){
var inst_29086 = (state_29157[(2)]);
var state_29157__$1 = state_29157;
var statearr_29217_29283 = state_29157__$1;
(statearr_29217_29283[(2)] = inst_29086);

(statearr_29217_29283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (5))){
var inst_29036 = cljs.core.deref.call(null,cs);
var inst_29037 = cljs.core.seq.call(null,inst_29036);
var inst_29038 = inst_29037;
var inst_29039 = null;
var inst_29040 = (0);
var inst_29041 = (0);
var state_29157__$1 = (function (){var statearr_29218 = state_29157;
(statearr_29218[(13)] = inst_29039);

(statearr_29218[(14)] = inst_29041);

(statearr_29218[(15)] = inst_29040);

(statearr_29218[(17)] = inst_29038);

return statearr_29218;
})();
var statearr_29219_29284 = state_29157__$1;
(statearr_29219_29284[(2)] = null);

(statearr_29219_29284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (14))){
var state_29157__$1 = state_29157;
var statearr_29220_29285 = state_29157__$1;
(statearr_29220_29285[(2)] = null);

(statearr_29220_29285[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (45))){
var inst_29147 = (state_29157[(2)]);
var state_29157__$1 = state_29157;
var statearr_29221_29286 = state_29157__$1;
(statearr_29221_29286[(2)] = inst_29147);

(statearr_29221_29286[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (26))){
var inst_29089 = (state_29157[(29)]);
var inst_29143 = (state_29157[(2)]);
var inst_29144 = cljs.core.seq.call(null,inst_29089);
var state_29157__$1 = (function (){var statearr_29222 = state_29157;
(statearr_29222[(31)] = inst_29143);

return statearr_29222;
})();
if(inst_29144){
var statearr_29223_29287 = state_29157__$1;
(statearr_29223_29287[(1)] = (42));

} else {
var statearr_29224_29288 = state_29157__$1;
(statearr_29224_29288[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (16))){
var inst_29058 = (state_29157[(7)]);
var inst_29060 = cljs.core.chunked_seq_QMARK_.call(null,inst_29058);
var state_29157__$1 = state_29157;
if(inst_29060){
var statearr_29225_29289 = state_29157__$1;
(statearr_29225_29289[(1)] = (19));

} else {
var statearr_29226_29290 = state_29157__$1;
(statearr_29226_29290[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (38))){
var inst_29136 = (state_29157[(2)]);
var state_29157__$1 = state_29157;
var statearr_29227_29291 = state_29157__$1;
(statearr_29227_29291[(2)] = inst_29136);

(statearr_29227_29291[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (30))){
var state_29157__$1 = state_29157;
var statearr_29228_29292 = state_29157__$1;
(statearr_29228_29292[(2)] = null);

(statearr_29228_29292[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (10))){
var inst_29039 = (state_29157[(13)]);
var inst_29041 = (state_29157[(14)]);
var inst_29047 = cljs.core._nth.call(null,inst_29039,inst_29041);
var inst_29048 = cljs.core.nth.call(null,inst_29047,(0),null);
var inst_29049 = cljs.core.nth.call(null,inst_29047,(1),null);
var state_29157__$1 = (function (){var statearr_29229 = state_29157;
(statearr_29229[(26)] = inst_29048);

return statearr_29229;
})();
if(cljs.core.truth_(inst_29049)){
var statearr_29230_29293 = state_29157__$1;
(statearr_29230_29293[(1)] = (13));

} else {
var statearr_29231_29294 = state_29157__$1;
(statearr_29231_29294[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (18))){
var inst_29082 = (state_29157[(2)]);
var state_29157__$1 = state_29157;
var statearr_29232_29295 = state_29157__$1;
(statearr_29232_29295[(2)] = inst_29082);

(statearr_29232_29295[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (42))){
var state_29157__$1 = state_29157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29157__$1,(45),dchan);
} else {
if((state_val_29158 === (37))){
var inst_29029 = (state_29157[(10)]);
var inst_29116 = (state_29157[(25)]);
var inst_29125 = (state_29157[(23)]);
var inst_29125__$1 = cljs.core.first.call(null,inst_29116);
var inst_29126 = cljs.core.async.put_BANG_.call(null,inst_29125__$1,inst_29029,done);
var state_29157__$1 = (function (){var statearr_29233 = state_29157;
(statearr_29233[(23)] = inst_29125__$1);

return statearr_29233;
})();
if(cljs.core.truth_(inst_29126)){
var statearr_29234_29296 = state_29157__$1;
(statearr_29234_29296[(1)] = (39));

} else {
var statearr_29235_29297 = state_29157__$1;
(statearr_29235_29297[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29158 === (8))){
var inst_29041 = (state_29157[(14)]);
var inst_29040 = (state_29157[(15)]);
var inst_29043 = (inst_29041 < inst_29040);
var inst_29044 = inst_29043;
var state_29157__$1 = state_29157;
if(cljs.core.truth_(inst_29044)){
var statearr_29236_29298 = state_29157__$1;
(statearr_29236_29298[(1)] = (10));

} else {
var statearr_29237_29299 = state_29157__$1;
(statearr_29237_29299[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22433__auto___29245,cs,m,dchan,dctr,done))
;
return ((function (switch__22368__auto__,c__22433__auto___29245,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22369__auto__ = null;
var cljs$core$async$mult_$_state_machine__22369__auto____0 = (function (){
var statearr_29241 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29241[(0)] = cljs$core$async$mult_$_state_machine__22369__auto__);

(statearr_29241[(1)] = (1));

return statearr_29241;
});
var cljs$core$async$mult_$_state_machine__22369__auto____1 = (function (state_29157){
while(true){
var ret_value__22370__auto__ = (function (){try{while(true){
var result__22371__auto__ = switch__22368__auto__.call(null,state_29157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22371__auto__;
}
break;
}
}catch (e29242){if((e29242 instanceof Object)){
var ex__22372__auto__ = e29242;
var statearr_29243_29300 = state_29157;
(statearr_29243_29300[(5)] = ex__22372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29301 = state_29157;
state_29157 = G__29301;
continue;
} else {
return ret_value__22370__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22369__auto__ = function(state_29157){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22369__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22369__auto____1.call(this,state_29157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22369__auto____0;
cljs$core$async$mult_$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22369__auto____1;
return cljs$core$async$mult_$_state_machine__22369__auto__;
})()
;})(switch__22368__auto__,c__22433__auto___29245,cs,m,dchan,dctr,done))
})();
var state__22435__auto__ = (function (){var statearr_29244 = f__22434__auto__.call(null);
(statearr_29244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22433__auto___29245);

return statearr_29244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22435__auto__);
});})(c__22433__auto___29245,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args29302 = [];
var len__19777__auto___29305 = arguments.length;
var i__19778__auto___29306 = (0);
while(true){
if((i__19778__auto___29306 < len__19777__auto___29305)){
args29302.push((arguments[i__19778__auto___29306]));

var G__29307 = (i__19778__auto___29306 + (1));
i__19778__auto___29306 = G__29307;
continue;
} else {
}
break;
}

var G__29304 = args29302.length;
switch (G__29304) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29302.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19374__auto__ = (((m == null))?null:m);
var m__19375__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19374__auto__)]);
if(!((m__19375__auto__ == null))){
return m__19375__auto__.call(null,m,ch);
} else {
var m__19375__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19375__auto____$1 == null))){
return m__19375__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__19374__auto__ = (((m == null))?null:m);
var m__19375__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19374__auto__)]);
if(!((m__19375__auto__ == null))){
return m__19375__auto__.call(null,m,ch);
} else {
var m__19375__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19375__auto____$1 == null))){
return m__19375__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__19374__auto__ = (((m == null))?null:m);
var m__19375__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19374__auto__)]);
if(!((m__19375__auto__ == null))){
return m__19375__auto__.call(null,m);
} else {
var m__19375__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19375__auto____$1 == null))){
return m__19375__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__19374__auto__ = (((m == null))?null:m);
var m__19375__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19374__auto__)]);
if(!((m__19375__auto__ == null))){
return m__19375__auto__.call(null,m,state_map);
} else {
var m__19375__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19375__auto____$1 == null))){
return m__19375__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__19374__auto__ = (((m == null))?null:m);
var m__19375__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19374__auto__)]);
if(!((m__19375__auto__ == null))){
return m__19375__auto__.call(null,m,mode);
} else {
var m__19375__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19375__auto____$1 == null))){
return m__19375__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19784__auto__ = [];
var len__19777__auto___29319 = arguments.length;
var i__19778__auto___29320 = (0);
while(true){
if((i__19778__auto___29320 < len__19777__auto___29319)){
args__19784__auto__.push((arguments[i__19778__auto___29320]));

var G__29321 = (i__19778__auto___29320 + (1));
i__19778__auto___29320 = G__29321;
continue;
} else {
}
break;
}

var argseq__19785__auto__ = ((((3) < args__19784__auto__.length))?(new cljs.core.IndexedSeq(args__19784__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19785__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29313){
var map__29314 = p__29313;
var map__29314__$1 = ((((!((map__29314 == null)))?((((map__29314.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29314.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29314):map__29314);
var opts = map__29314__$1;
var statearr_29316_29322 = state;
(statearr_29316_29322[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__29314,map__29314__$1,opts){
return (function (val){
var statearr_29317_29323 = state;
(statearr_29317_29323[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29314,map__29314__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_29318_29324 = state;
(statearr_29318_29324[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29309){
var G__29310 = cljs.core.first.call(null,seq29309);
var seq29309__$1 = cljs.core.next.call(null,seq29309);
var G__29311 = cljs.core.first.call(null,seq29309__$1);
var seq29309__$2 = cljs.core.next.call(null,seq29309__$1);
var G__29312 = cljs.core.first.call(null,seq29309__$2);
var seq29309__$3 = cljs.core.next.call(null,seq29309__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29310,G__29311,G__29312,seq29309__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29488 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29488 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29489){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29489 = meta29489;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29490,meta29489__$1){
var self__ = this;
var _29490__$1 = this;
return (new cljs.core.async.t_cljs$core$async29488(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29489__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29488.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29490){
var self__ = this;
var _29490__$1 = this;
return self__.meta29489;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29488.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29488.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29488.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29488.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29488.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29488.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29488.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29488.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29488.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29489","meta29489",-715890661,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29488.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29488.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29488";

cljs.core.async.t_cljs$core$async29488.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19317__auto__,writer__19318__auto__,opt__19319__auto__){
return cljs.core._write.call(null,writer__19318__auto__,"cljs.core.async/t_cljs$core$async29488");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29488 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29488(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29489){
return (new cljs.core.async.t_cljs$core$async29488(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29489));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29488(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22433__auto___29651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22433__auto___29651,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22434__auto__ = (function (){var switch__22368__auto__ = ((function (c__22433__auto___29651,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29588){
var state_val_29589 = (state_29588[(1)]);
if((state_val_29589 === (7))){
var inst_29506 = (state_29588[(2)]);
var state_29588__$1 = state_29588;
var statearr_29590_29652 = state_29588__$1;
(statearr_29590_29652[(2)] = inst_29506);

(statearr_29590_29652[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (20))){
var inst_29518 = (state_29588[(7)]);
var state_29588__$1 = state_29588;
var statearr_29591_29653 = state_29588__$1;
(statearr_29591_29653[(2)] = inst_29518);

(statearr_29591_29653[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (27))){
var state_29588__$1 = state_29588;
var statearr_29592_29654 = state_29588__$1;
(statearr_29592_29654[(2)] = null);

(statearr_29592_29654[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (1))){
var inst_29494 = (state_29588[(8)]);
var inst_29494__$1 = calc_state.call(null);
var inst_29496 = (inst_29494__$1 == null);
var inst_29497 = cljs.core.not.call(null,inst_29496);
var state_29588__$1 = (function (){var statearr_29593 = state_29588;
(statearr_29593[(8)] = inst_29494__$1);

return statearr_29593;
})();
if(inst_29497){
var statearr_29594_29655 = state_29588__$1;
(statearr_29594_29655[(1)] = (2));

} else {
var statearr_29595_29656 = state_29588__$1;
(statearr_29595_29656[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (24))){
var inst_29562 = (state_29588[(9)]);
var inst_29548 = (state_29588[(10)]);
var inst_29541 = (state_29588[(11)]);
var inst_29562__$1 = inst_29541.call(null,inst_29548);
var state_29588__$1 = (function (){var statearr_29596 = state_29588;
(statearr_29596[(9)] = inst_29562__$1);

return statearr_29596;
})();
if(cljs.core.truth_(inst_29562__$1)){
var statearr_29597_29657 = state_29588__$1;
(statearr_29597_29657[(1)] = (29));

} else {
var statearr_29598_29658 = state_29588__$1;
(statearr_29598_29658[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (4))){
var inst_29509 = (state_29588[(2)]);
var state_29588__$1 = state_29588;
if(cljs.core.truth_(inst_29509)){
var statearr_29599_29659 = state_29588__$1;
(statearr_29599_29659[(1)] = (8));

} else {
var statearr_29600_29660 = state_29588__$1;
(statearr_29600_29660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (15))){
var inst_29535 = (state_29588[(2)]);
var state_29588__$1 = state_29588;
if(cljs.core.truth_(inst_29535)){
var statearr_29601_29661 = state_29588__$1;
(statearr_29601_29661[(1)] = (19));

} else {
var statearr_29602_29662 = state_29588__$1;
(statearr_29602_29662[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (21))){
var inst_29540 = (state_29588[(12)]);
var inst_29540__$1 = (state_29588[(2)]);
var inst_29541 = cljs.core.get.call(null,inst_29540__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29542 = cljs.core.get.call(null,inst_29540__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29543 = cljs.core.get.call(null,inst_29540__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29588__$1 = (function (){var statearr_29603 = state_29588;
(statearr_29603[(13)] = inst_29542);

(statearr_29603[(12)] = inst_29540__$1);

(statearr_29603[(11)] = inst_29541);

return statearr_29603;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29588__$1,(22),inst_29543);
} else {
if((state_val_29589 === (31))){
var inst_29570 = (state_29588[(2)]);
var state_29588__$1 = state_29588;
if(cljs.core.truth_(inst_29570)){
var statearr_29604_29663 = state_29588__$1;
(statearr_29604_29663[(1)] = (32));

} else {
var statearr_29605_29664 = state_29588__$1;
(statearr_29605_29664[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (32))){
var inst_29547 = (state_29588[(14)]);
var state_29588__$1 = state_29588;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29588__$1,(35),out,inst_29547);
} else {
if((state_val_29589 === (33))){
var inst_29540 = (state_29588[(12)]);
var inst_29518 = inst_29540;
var state_29588__$1 = (function (){var statearr_29606 = state_29588;
(statearr_29606[(7)] = inst_29518);

return statearr_29606;
})();
var statearr_29607_29665 = state_29588__$1;
(statearr_29607_29665[(2)] = null);

(statearr_29607_29665[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (13))){
var inst_29518 = (state_29588[(7)]);
var inst_29525 = inst_29518.cljs$lang$protocol_mask$partition0$;
var inst_29526 = (inst_29525 & (64));
var inst_29527 = inst_29518.cljs$core$ISeq$;
var inst_29528 = (inst_29526) || (inst_29527);
var state_29588__$1 = state_29588;
if(cljs.core.truth_(inst_29528)){
var statearr_29608_29666 = state_29588__$1;
(statearr_29608_29666[(1)] = (16));

} else {
var statearr_29609_29667 = state_29588__$1;
(statearr_29609_29667[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (22))){
var inst_29547 = (state_29588[(14)]);
var inst_29548 = (state_29588[(10)]);
var inst_29546 = (state_29588[(2)]);
var inst_29547__$1 = cljs.core.nth.call(null,inst_29546,(0),null);
var inst_29548__$1 = cljs.core.nth.call(null,inst_29546,(1),null);
var inst_29549 = (inst_29547__$1 == null);
var inst_29550 = cljs.core._EQ_.call(null,inst_29548__$1,change);
var inst_29551 = (inst_29549) || (inst_29550);
var state_29588__$1 = (function (){var statearr_29610 = state_29588;
(statearr_29610[(14)] = inst_29547__$1);

(statearr_29610[(10)] = inst_29548__$1);

return statearr_29610;
})();
if(cljs.core.truth_(inst_29551)){
var statearr_29611_29668 = state_29588__$1;
(statearr_29611_29668[(1)] = (23));

} else {
var statearr_29612_29669 = state_29588__$1;
(statearr_29612_29669[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (36))){
var inst_29540 = (state_29588[(12)]);
var inst_29518 = inst_29540;
var state_29588__$1 = (function (){var statearr_29613 = state_29588;
(statearr_29613[(7)] = inst_29518);

return statearr_29613;
})();
var statearr_29614_29670 = state_29588__$1;
(statearr_29614_29670[(2)] = null);

(statearr_29614_29670[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (29))){
var inst_29562 = (state_29588[(9)]);
var state_29588__$1 = state_29588;
var statearr_29615_29671 = state_29588__$1;
(statearr_29615_29671[(2)] = inst_29562);

(statearr_29615_29671[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (6))){
var state_29588__$1 = state_29588;
var statearr_29616_29672 = state_29588__$1;
(statearr_29616_29672[(2)] = false);

(statearr_29616_29672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (28))){
var inst_29558 = (state_29588[(2)]);
var inst_29559 = calc_state.call(null);
var inst_29518 = inst_29559;
var state_29588__$1 = (function (){var statearr_29617 = state_29588;
(statearr_29617[(7)] = inst_29518);

(statearr_29617[(15)] = inst_29558);

return statearr_29617;
})();
var statearr_29618_29673 = state_29588__$1;
(statearr_29618_29673[(2)] = null);

(statearr_29618_29673[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (25))){
var inst_29584 = (state_29588[(2)]);
var state_29588__$1 = state_29588;
var statearr_29619_29674 = state_29588__$1;
(statearr_29619_29674[(2)] = inst_29584);

(statearr_29619_29674[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (34))){
var inst_29582 = (state_29588[(2)]);
var state_29588__$1 = state_29588;
var statearr_29620_29675 = state_29588__$1;
(statearr_29620_29675[(2)] = inst_29582);

(statearr_29620_29675[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (17))){
var state_29588__$1 = state_29588;
var statearr_29621_29676 = state_29588__$1;
(statearr_29621_29676[(2)] = false);

(statearr_29621_29676[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (3))){
var state_29588__$1 = state_29588;
var statearr_29622_29677 = state_29588__$1;
(statearr_29622_29677[(2)] = false);

(statearr_29622_29677[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (12))){
var inst_29586 = (state_29588[(2)]);
var state_29588__$1 = state_29588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29588__$1,inst_29586);
} else {
if((state_val_29589 === (2))){
var inst_29494 = (state_29588[(8)]);
var inst_29499 = inst_29494.cljs$lang$protocol_mask$partition0$;
var inst_29500 = (inst_29499 & (64));
var inst_29501 = inst_29494.cljs$core$ISeq$;
var inst_29502 = (inst_29500) || (inst_29501);
var state_29588__$1 = state_29588;
if(cljs.core.truth_(inst_29502)){
var statearr_29623_29678 = state_29588__$1;
(statearr_29623_29678[(1)] = (5));

} else {
var statearr_29624_29679 = state_29588__$1;
(statearr_29624_29679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (23))){
var inst_29547 = (state_29588[(14)]);
var inst_29553 = (inst_29547 == null);
var state_29588__$1 = state_29588;
if(cljs.core.truth_(inst_29553)){
var statearr_29625_29680 = state_29588__$1;
(statearr_29625_29680[(1)] = (26));

} else {
var statearr_29626_29681 = state_29588__$1;
(statearr_29626_29681[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (35))){
var inst_29573 = (state_29588[(2)]);
var state_29588__$1 = state_29588;
if(cljs.core.truth_(inst_29573)){
var statearr_29627_29682 = state_29588__$1;
(statearr_29627_29682[(1)] = (36));

} else {
var statearr_29628_29683 = state_29588__$1;
(statearr_29628_29683[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (19))){
var inst_29518 = (state_29588[(7)]);
var inst_29537 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29518);
var state_29588__$1 = state_29588;
var statearr_29629_29684 = state_29588__$1;
(statearr_29629_29684[(2)] = inst_29537);

(statearr_29629_29684[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (11))){
var inst_29518 = (state_29588[(7)]);
var inst_29522 = (inst_29518 == null);
var inst_29523 = cljs.core.not.call(null,inst_29522);
var state_29588__$1 = state_29588;
if(inst_29523){
var statearr_29630_29685 = state_29588__$1;
(statearr_29630_29685[(1)] = (13));

} else {
var statearr_29631_29686 = state_29588__$1;
(statearr_29631_29686[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (9))){
var inst_29494 = (state_29588[(8)]);
var state_29588__$1 = state_29588;
var statearr_29632_29687 = state_29588__$1;
(statearr_29632_29687[(2)] = inst_29494);

(statearr_29632_29687[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (5))){
var state_29588__$1 = state_29588;
var statearr_29633_29688 = state_29588__$1;
(statearr_29633_29688[(2)] = true);

(statearr_29633_29688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (14))){
var state_29588__$1 = state_29588;
var statearr_29634_29689 = state_29588__$1;
(statearr_29634_29689[(2)] = false);

(statearr_29634_29689[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (26))){
var inst_29548 = (state_29588[(10)]);
var inst_29555 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29548);
var state_29588__$1 = state_29588;
var statearr_29635_29690 = state_29588__$1;
(statearr_29635_29690[(2)] = inst_29555);

(statearr_29635_29690[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (16))){
var state_29588__$1 = state_29588;
var statearr_29636_29691 = state_29588__$1;
(statearr_29636_29691[(2)] = true);

(statearr_29636_29691[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (38))){
var inst_29578 = (state_29588[(2)]);
var state_29588__$1 = state_29588;
var statearr_29637_29692 = state_29588__$1;
(statearr_29637_29692[(2)] = inst_29578);

(statearr_29637_29692[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (30))){
var inst_29542 = (state_29588[(13)]);
var inst_29548 = (state_29588[(10)]);
var inst_29541 = (state_29588[(11)]);
var inst_29565 = cljs.core.empty_QMARK_.call(null,inst_29541);
var inst_29566 = inst_29542.call(null,inst_29548);
var inst_29567 = cljs.core.not.call(null,inst_29566);
var inst_29568 = (inst_29565) && (inst_29567);
var state_29588__$1 = state_29588;
var statearr_29638_29693 = state_29588__$1;
(statearr_29638_29693[(2)] = inst_29568);

(statearr_29638_29693[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (10))){
var inst_29494 = (state_29588[(8)]);
var inst_29514 = (state_29588[(2)]);
var inst_29515 = cljs.core.get.call(null,inst_29514,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29516 = cljs.core.get.call(null,inst_29514,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29517 = cljs.core.get.call(null,inst_29514,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29518 = inst_29494;
var state_29588__$1 = (function (){var statearr_29639 = state_29588;
(statearr_29639[(7)] = inst_29518);

(statearr_29639[(16)] = inst_29517);

(statearr_29639[(17)] = inst_29515);

(statearr_29639[(18)] = inst_29516);

return statearr_29639;
})();
var statearr_29640_29694 = state_29588__$1;
(statearr_29640_29694[(2)] = null);

(statearr_29640_29694[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (18))){
var inst_29532 = (state_29588[(2)]);
var state_29588__$1 = state_29588;
var statearr_29641_29695 = state_29588__$1;
(statearr_29641_29695[(2)] = inst_29532);

(statearr_29641_29695[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (37))){
var state_29588__$1 = state_29588;
var statearr_29642_29696 = state_29588__$1;
(statearr_29642_29696[(2)] = null);

(statearr_29642_29696[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29589 === (8))){
var inst_29494 = (state_29588[(8)]);
var inst_29511 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29494);
var state_29588__$1 = state_29588;
var statearr_29643_29697 = state_29588__$1;
(statearr_29643_29697[(2)] = inst_29511);

(statearr_29643_29697[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22433__auto___29651,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22368__auto__,c__22433__auto___29651,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22369__auto__ = null;
var cljs$core$async$mix_$_state_machine__22369__auto____0 = (function (){
var statearr_29647 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29647[(0)] = cljs$core$async$mix_$_state_machine__22369__auto__);

(statearr_29647[(1)] = (1));

return statearr_29647;
});
var cljs$core$async$mix_$_state_machine__22369__auto____1 = (function (state_29588){
while(true){
var ret_value__22370__auto__ = (function (){try{while(true){
var result__22371__auto__ = switch__22368__auto__.call(null,state_29588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22371__auto__;
}
break;
}
}catch (e29648){if((e29648 instanceof Object)){
var ex__22372__auto__ = e29648;
var statearr_29649_29698 = state_29588;
(statearr_29649_29698[(5)] = ex__22372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29699 = state_29588;
state_29588 = G__29699;
continue;
} else {
return ret_value__22370__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22369__auto__ = function(state_29588){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22369__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22369__auto____1.call(this,state_29588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22369__auto____0;
cljs$core$async$mix_$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22369__auto____1;
return cljs$core$async$mix_$_state_machine__22369__auto__;
})()
;})(switch__22368__auto__,c__22433__auto___29651,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22435__auto__ = (function (){var statearr_29650 = f__22434__auto__.call(null);
(statearr_29650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22433__auto___29651);

return statearr_29650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22435__auto__);
});})(c__22433__auto___29651,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19374__auto__ = (((p == null))?null:p);
var m__19375__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19374__auto__)]);
if(!((m__19375__auto__ == null))){
return m__19375__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19375__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19375__auto____$1 == null))){
return m__19375__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__19374__auto__ = (((p == null))?null:p);
var m__19375__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19374__auto__)]);
if(!((m__19375__auto__ == null))){
return m__19375__auto__.call(null,p,v,ch);
} else {
var m__19375__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19375__auto____$1 == null))){
return m__19375__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args29700 = [];
var len__19777__auto___29703 = arguments.length;
var i__19778__auto___29704 = (0);
while(true){
if((i__19778__auto___29704 < len__19777__auto___29703)){
args29700.push((arguments[i__19778__auto___29704]));

var G__29705 = (i__19778__auto___29704 + (1));
i__19778__auto___29704 = G__29705;
continue;
} else {
}
break;
}

var G__29702 = args29700.length;
switch (G__29702) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29700.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19374__auto__ = (((p == null))?null:p);
var m__19375__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19374__auto__)]);
if(!((m__19375__auto__ == null))){
return m__19375__auto__.call(null,p);
} else {
var m__19375__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19375__auto____$1 == null))){
return m__19375__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__19374__auto__ = (((p == null))?null:p);
var m__19375__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19374__auto__)]);
if(!((m__19375__auto__ == null))){
return m__19375__auto__.call(null,p,v);
} else {
var m__19375__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19375__auto____$1 == null))){
return m__19375__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args29708 = [];
var len__19777__auto___29833 = arguments.length;
var i__19778__auto___29834 = (0);
while(true){
if((i__19778__auto___29834 < len__19777__auto___29833)){
args29708.push((arguments[i__19778__auto___29834]));

var G__29835 = (i__19778__auto___29834 + (1));
i__19778__auto___29834 = G__29835;
continue;
} else {
}
break;
}

var G__29710 = args29708.length;
switch (G__29710) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29708.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18719__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18719__auto__)){
return or__18719__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18719__auto__,mults){
return (function (p1__29707_SHARP_){
if(cljs.core.truth_(p1__29707_SHARP_.call(null,topic))){
return p1__29707_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29707_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18719__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29711 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29711 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29712){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29712 = meta29712;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29713,meta29712__$1){
var self__ = this;
var _29713__$1 = this;
return (new cljs.core.async.t_cljs$core$async29711(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29712__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29711.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29713){
var self__ = this;
var _29713__$1 = this;
return self__.meta29712;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29711.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29711.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29711.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async29711.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29711.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29711.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29711.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29711.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29712","meta29712",1268554214,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29711.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29711.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29711";

cljs.core.async.t_cljs$core$async29711.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19317__auto__,writer__19318__auto__,opt__19319__auto__){
return cljs.core._write.call(null,writer__19318__auto__,"cljs.core.async/t_cljs$core$async29711");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29711 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29711(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29712){
return (new cljs.core.async.t_cljs$core$async29711(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29712));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29711(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22433__auto___29837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22433__auto___29837,mults,ensure_mult,p){
return (function (){
var f__22434__auto__ = (function (){var switch__22368__auto__ = ((function (c__22433__auto___29837,mults,ensure_mult,p){
return (function (state_29785){
var state_val_29786 = (state_29785[(1)]);
if((state_val_29786 === (7))){
var inst_29781 = (state_29785[(2)]);
var state_29785__$1 = state_29785;
var statearr_29787_29838 = state_29785__$1;
(statearr_29787_29838[(2)] = inst_29781);

(statearr_29787_29838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29786 === (20))){
var state_29785__$1 = state_29785;
var statearr_29788_29839 = state_29785__$1;
(statearr_29788_29839[(2)] = null);

(statearr_29788_29839[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29786 === (1))){
var state_29785__$1 = state_29785;
var statearr_29789_29840 = state_29785__$1;
(statearr_29789_29840[(2)] = null);

(statearr_29789_29840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29786 === (24))){
var inst_29764 = (state_29785[(7)]);
var inst_29773 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29764);
var state_29785__$1 = state_29785;
var statearr_29790_29841 = state_29785__$1;
(statearr_29790_29841[(2)] = inst_29773);

(statearr_29790_29841[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29786 === (4))){
var inst_29716 = (state_29785[(8)]);
var inst_29716__$1 = (state_29785[(2)]);
var inst_29717 = (inst_29716__$1 == null);
var state_29785__$1 = (function (){var statearr_29791 = state_29785;
(statearr_29791[(8)] = inst_29716__$1);

return statearr_29791;
})();
if(cljs.core.truth_(inst_29717)){
var statearr_29792_29842 = state_29785__$1;
(statearr_29792_29842[(1)] = (5));

} else {
var statearr_29793_29843 = state_29785__$1;
(statearr_29793_29843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29786 === (15))){
var inst_29758 = (state_29785[(2)]);
var state_29785__$1 = state_29785;
var statearr_29794_29844 = state_29785__$1;
(statearr_29794_29844[(2)] = inst_29758);

(statearr_29794_29844[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29786 === (21))){
var inst_29778 = (state_29785[(2)]);
var state_29785__$1 = (function (){var statearr_29795 = state_29785;
(statearr_29795[(9)] = inst_29778);

return statearr_29795;
})();
var statearr_29796_29845 = state_29785__$1;
(statearr_29796_29845[(2)] = null);

(statearr_29796_29845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29786 === (13))){
var inst_29740 = (state_29785[(10)]);
var inst_29742 = cljs.core.chunked_seq_QMARK_.call(null,inst_29740);
var state_29785__$1 = state_29785;
if(inst_29742){
var statearr_29797_29846 = state_29785__$1;
(statearr_29797_29846[(1)] = (16));

} else {
var statearr_29798_29847 = state_29785__$1;
(statearr_29798_29847[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29786 === (22))){
var inst_29770 = (state_29785[(2)]);
var state_29785__$1 = state_29785;
if(cljs.core.truth_(inst_29770)){
var statearr_29799_29848 = state_29785__$1;
(statearr_29799_29848[(1)] = (23));

} else {
var statearr_29800_29849 = state_29785__$1;
(statearr_29800_29849[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29786 === (6))){
var inst_29764 = (state_29785[(7)]);
var inst_29716 = (state_29785[(8)]);
var inst_29766 = (state_29785[(11)]);
var inst_29764__$1 = topic_fn.call(null,inst_29716);
var inst_29765 = cljs.core.deref.call(null,mults);
var inst_29766__$1 = cljs.core.get.call(null,inst_29765,inst_29764__$1);
var state_29785__$1 = (function (){var statearr_29801 = state_29785;
(statearr_29801[(7)] = inst_29764__$1);

(statearr_29801[(11)] = inst_29766__$1);

return statearr_29801;
})();
if(cljs.core.truth_(inst_29766__$1)){
var statearr_29802_29850 = state_29785__$1;
(statearr_29802_29850[(1)] = (19));

} else {
var statearr_29803_29851 = state_29785__$1;
(statearr_29803_29851[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29786 === (25))){
var inst_29775 = (state_29785[(2)]);
var state_29785__$1 = state_29785;
var statearr_29804_29852 = state_29785__$1;
(statearr_29804_29852[(2)] = inst_29775);

(statearr_29804_29852[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29786 === (17))){
var inst_29740 = (state_29785[(10)]);
var inst_29749 = cljs.core.first.call(null,inst_29740);
var inst_29750 = cljs.core.async.muxch_STAR_.call(null,inst_29749);
var inst_29751 = cljs.core.async.close_BANG_.call(null,inst_29750);
var inst_29752 = cljs.core.next.call(null,inst_29740);
var inst_29726 = inst_29752;
var inst_29727 = null;
var inst_29728 = (0);
var inst_29729 = (0);
var state_29785__$1 = (function (){var statearr_29805 = state_29785;
(statearr_29805[(12)] = inst_29726);

(statearr_29805[(13)] = inst_29729);

(statearr_29805[(14)] = inst_29751);

(statearr_29805[(15)] = inst_29727);

(statearr_29805[(16)] = inst_29728);

return statearr_29805;
})();
var statearr_29806_29853 = state_29785__$1;
(statearr_29806_29853[(2)] = null);

(statearr_29806_29853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29786 === (3))){
var inst_29783 = (state_29785[(2)]);
var state_29785__$1 = state_29785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29785__$1,inst_29783);
} else {
if((state_val_29786 === (12))){
var inst_29760 = (state_29785[(2)]);
var state_29785__$1 = state_29785;
var statearr_29807_29854 = state_29785__$1;
(statearr_29807_29854[(2)] = inst_29760);

(statearr_29807_29854[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29786 === (2))){
var state_29785__$1 = state_29785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29785__$1,(4),ch);
} else {
if((state_val_29786 === (23))){
var state_29785__$1 = state_29785;
var statearr_29808_29855 = state_29785__$1;
(statearr_29808_29855[(2)] = null);

(statearr_29808_29855[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29786 === (19))){
var inst_29716 = (state_29785[(8)]);
var inst_29766 = (state_29785[(11)]);
var inst_29768 = cljs.core.async.muxch_STAR_.call(null,inst_29766);
var state_29785__$1 = state_29785;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29785__$1,(22),inst_29768,inst_29716);
} else {
if((state_val_29786 === (11))){
var inst_29726 = (state_29785[(12)]);
var inst_29740 = (state_29785[(10)]);
var inst_29740__$1 = cljs.core.seq.call(null,inst_29726);
var state_29785__$1 = (function (){var statearr_29809 = state_29785;
(statearr_29809[(10)] = inst_29740__$1);

return statearr_29809;
})();
if(inst_29740__$1){
var statearr_29810_29856 = state_29785__$1;
(statearr_29810_29856[(1)] = (13));

} else {
var statearr_29811_29857 = state_29785__$1;
(statearr_29811_29857[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29786 === (9))){
var inst_29762 = (state_29785[(2)]);
var state_29785__$1 = state_29785;
var statearr_29812_29858 = state_29785__$1;
(statearr_29812_29858[(2)] = inst_29762);

(statearr_29812_29858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29786 === (5))){
var inst_29723 = cljs.core.deref.call(null,mults);
var inst_29724 = cljs.core.vals.call(null,inst_29723);
var inst_29725 = cljs.core.seq.call(null,inst_29724);
var inst_29726 = inst_29725;
var inst_29727 = null;
var inst_29728 = (0);
var inst_29729 = (0);
var state_29785__$1 = (function (){var statearr_29813 = state_29785;
(statearr_29813[(12)] = inst_29726);

(statearr_29813[(13)] = inst_29729);

(statearr_29813[(15)] = inst_29727);

(statearr_29813[(16)] = inst_29728);

return statearr_29813;
})();
var statearr_29814_29859 = state_29785__$1;
(statearr_29814_29859[(2)] = null);

(statearr_29814_29859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29786 === (14))){
var state_29785__$1 = state_29785;
var statearr_29818_29860 = state_29785__$1;
(statearr_29818_29860[(2)] = null);

(statearr_29818_29860[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29786 === (16))){
var inst_29740 = (state_29785[(10)]);
var inst_29744 = cljs.core.chunk_first.call(null,inst_29740);
var inst_29745 = cljs.core.chunk_rest.call(null,inst_29740);
var inst_29746 = cljs.core.count.call(null,inst_29744);
var inst_29726 = inst_29745;
var inst_29727 = inst_29744;
var inst_29728 = inst_29746;
var inst_29729 = (0);
var state_29785__$1 = (function (){var statearr_29819 = state_29785;
(statearr_29819[(12)] = inst_29726);

(statearr_29819[(13)] = inst_29729);

(statearr_29819[(15)] = inst_29727);

(statearr_29819[(16)] = inst_29728);

return statearr_29819;
})();
var statearr_29820_29861 = state_29785__$1;
(statearr_29820_29861[(2)] = null);

(statearr_29820_29861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29786 === (10))){
var inst_29726 = (state_29785[(12)]);
var inst_29729 = (state_29785[(13)]);
var inst_29727 = (state_29785[(15)]);
var inst_29728 = (state_29785[(16)]);
var inst_29734 = cljs.core._nth.call(null,inst_29727,inst_29729);
var inst_29735 = cljs.core.async.muxch_STAR_.call(null,inst_29734);
var inst_29736 = cljs.core.async.close_BANG_.call(null,inst_29735);
var inst_29737 = (inst_29729 + (1));
var tmp29815 = inst_29726;
var tmp29816 = inst_29727;
var tmp29817 = inst_29728;
var inst_29726__$1 = tmp29815;
var inst_29727__$1 = tmp29816;
var inst_29728__$1 = tmp29817;
var inst_29729__$1 = inst_29737;
var state_29785__$1 = (function (){var statearr_29821 = state_29785;
(statearr_29821[(12)] = inst_29726__$1);

(statearr_29821[(17)] = inst_29736);

(statearr_29821[(13)] = inst_29729__$1);

(statearr_29821[(15)] = inst_29727__$1);

(statearr_29821[(16)] = inst_29728__$1);

return statearr_29821;
})();
var statearr_29822_29862 = state_29785__$1;
(statearr_29822_29862[(2)] = null);

(statearr_29822_29862[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29786 === (18))){
var inst_29755 = (state_29785[(2)]);
var state_29785__$1 = state_29785;
var statearr_29823_29863 = state_29785__$1;
(statearr_29823_29863[(2)] = inst_29755);

(statearr_29823_29863[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29786 === (8))){
var inst_29729 = (state_29785[(13)]);
var inst_29728 = (state_29785[(16)]);
var inst_29731 = (inst_29729 < inst_29728);
var inst_29732 = inst_29731;
var state_29785__$1 = state_29785;
if(cljs.core.truth_(inst_29732)){
var statearr_29824_29864 = state_29785__$1;
(statearr_29824_29864[(1)] = (10));

} else {
var statearr_29825_29865 = state_29785__$1;
(statearr_29825_29865[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22433__auto___29837,mults,ensure_mult,p))
;
return ((function (switch__22368__auto__,c__22433__auto___29837,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22369__auto__ = null;
var cljs$core$async$state_machine__22369__auto____0 = (function (){
var statearr_29829 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29829[(0)] = cljs$core$async$state_machine__22369__auto__);

(statearr_29829[(1)] = (1));

return statearr_29829;
});
var cljs$core$async$state_machine__22369__auto____1 = (function (state_29785){
while(true){
var ret_value__22370__auto__ = (function (){try{while(true){
var result__22371__auto__ = switch__22368__auto__.call(null,state_29785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22371__auto__;
}
break;
}
}catch (e29830){if((e29830 instanceof Object)){
var ex__22372__auto__ = e29830;
var statearr_29831_29866 = state_29785;
(statearr_29831_29866[(5)] = ex__22372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29867 = state_29785;
state_29785 = G__29867;
continue;
} else {
return ret_value__22370__auto__;
}
break;
}
});
cljs$core$async$state_machine__22369__auto__ = function(state_29785){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22369__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22369__auto____1.call(this,state_29785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22369__auto____0;
cljs$core$async$state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22369__auto____1;
return cljs$core$async$state_machine__22369__auto__;
})()
;})(switch__22368__auto__,c__22433__auto___29837,mults,ensure_mult,p))
})();
var state__22435__auto__ = (function (){var statearr_29832 = f__22434__auto__.call(null);
(statearr_29832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22433__auto___29837);

return statearr_29832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22435__auto__);
});})(c__22433__auto___29837,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args29868 = [];
var len__19777__auto___29871 = arguments.length;
var i__19778__auto___29872 = (0);
while(true){
if((i__19778__auto___29872 < len__19777__auto___29871)){
args29868.push((arguments[i__19778__auto___29872]));

var G__29873 = (i__19778__auto___29872 + (1));
i__19778__auto___29872 = G__29873;
continue;
} else {
}
break;
}

var G__29870 = args29868.length;
switch (G__29870) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29868.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args29875 = [];
var len__19777__auto___29878 = arguments.length;
var i__19778__auto___29879 = (0);
while(true){
if((i__19778__auto___29879 < len__19777__auto___29878)){
args29875.push((arguments[i__19778__auto___29879]));

var G__29880 = (i__19778__auto___29879 + (1));
i__19778__auto___29879 = G__29880;
continue;
} else {
}
break;
}

var G__29877 = args29875.length;
switch (G__29877) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29875.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args29882 = [];
var len__19777__auto___29953 = arguments.length;
var i__19778__auto___29954 = (0);
while(true){
if((i__19778__auto___29954 < len__19777__auto___29953)){
args29882.push((arguments[i__19778__auto___29954]));

var G__29955 = (i__19778__auto___29954 + (1));
i__19778__auto___29954 = G__29955;
continue;
} else {
}
break;
}

var G__29884 = args29882.length;
switch (G__29884) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29882.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__22433__auto___29957 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22433__auto___29957,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22434__auto__ = (function (){var switch__22368__auto__ = ((function (c__22433__auto___29957,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29923){
var state_val_29924 = (state_29923[(1)]);
if((state_val_29924 === (7))){
var state_29923__$1 = state_29923;
var statearr_29925_29958 = state_29923__$1;
(statearr_29925_29958[(2)] = null);

(statearr_29925_29958[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29924 === (1))){
var state_29923__$1 = state_29923;
var statearr_29926_29959 = state_29923__$1;
(statearr_29926_29959[(2)] = null);

(statearr_29926_29959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29924 === (4))){
var inst_29887 = (state_29923[(7)]);
var inst_29889 = (inst_29887 < cnt);
var state_29923__$1 = state_29923;
if(cljs.core.truth_(inst_29889)){
var statearr_29927_29960 = state_29923__$1;
(statearr_29927_29960[(1)] = (6));

} else {
var statearr_29928_29961 = state_29923__$1;
(statearr_29928_29961[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29924 === (15))){
var inst_29919 = (state_29923[(2)]);
var state_29923__$1 = state_29923;
var statearr_29929_29962 = state_29923__$1;
(statearr_29929_29962[(2)] = inst_29919);

(statearr_29929_29962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29924 === (13))){
var inst_29912 = cljs.core.async.close_BANG_.call(null,out);
var state_29923__$1 = state_29923;
var statearr_29930_29963 = state_29923__$1;
(statearr_29930_29963[(2)] = inst_29912);

(statearr_29930_29963[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29924 === (6))){
var state_29923__$1 = state_29923;
var statearr_29931_29964 = state_29923__$1;
(statearr_29931_29964[(2)] = null);

(statearr_29931_29964[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29924 === (3))){
var inst_29921 = (state_29923[(2)]);
var state_29923__$1 = state_29923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29923__$1,inst_29921);
} else {
if((state_val_29924 === (12))){
var inst_29909 = (state_29923[(8)]);
var inst_29909__$1 = (state_29923[(2)]);
var inst_29910 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29909__$1);
var state_29923__$1 = (function (){var statearr_29932 = state_29923;
(statearr_29932[(8)] = inst_29909__$1);

return statearr_29932;
})();
if(cljs.core.truth_(inst_29910)){
var statearr_29933_29965 = state_29923__$1;
(statearr_29933_29965[(1)] = (13));

} else {
var statearr_29934_29966 = state_29923__$1;
(statearr_29934_29966[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29924 === (2))){
var inst_29886 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29887 = (0);
var state_29923__$1 = (function (){var statearr_29935 = state_29923;
(statearr_29935[(7)] = inst_29887);

(statearr_29935[(9)] = inst_29886);

return statearr_29935;
})();
var statearr_29936_29967 = state_29923__$1;
(statearr_29936_29967[(2)] = null);

(statearr_29936_29967[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29924 === (11))){
var inst_29887 = (state_29923[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29923,(10),Object,null,(9));
var inst_29896 = chs__$1.call(null,inst_29887);
var inst_29897 = done.call(null,inst_29887);
var inst_29898 = cljs.core.async.take_BANG_.call(null,inst_29896,inst_29897);
var state_29923__$1 = state_29923;
var statearr_29937_29968 = state_29923__$1;
(statearr_29937_29968[(2)] = inst_29898);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29923__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29924 === (9))){
var inst_29887 = (state_29923[(7)]);
var inst_29900 = (state_29923[(2)]);
var inst_29901 = (inst_29887 + (1));
var inst_29887__$1 = inst_29901;
var state_29923__$1 = (function (){var statearr_29938 = state_29923;
(statearr_29938[(7)] = inst_29887__$1);

(statearr_29938[(10)] = inst_29900);

return statearr_29938;
})();
var statearr_29939_29969 = state_29923__$1;
(statearr_29939_29969[(2)] = null);

(statearr_29939_29969[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29924 === (5))){
var inst_29907 = (state_29923[(2)]);
var state_29923__$1 = (function (){var statearr_29940 = state_29923;
(statearr_29940[(11)] = inst_29907);

return statearr_29940;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29923__$1,(12),dchan);
} else {
if((state_val_29924 === (14))){
var inst_29909 = (state_29923[(8)]);
var inst_29914 = cljs.core.apply.call(null,f,inst_29909);
var state_29923__$1 = state_29923;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29923__$1,(16),out,inst_29914);
} else {
if((state_val_29924 === (16))){
var inst_29916 = (state_29923[(2)]);
var state_29923__$1 = (function (){var statearr_29941 = state_29923;
(statearr_29941[(12)] = inst_29916);

return statearr_29941;
})();
var statearr_29942_29970 = state_29923__$1;
(statearr_29942_29970[(2)] = null);

(statearr_29942_29970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29924 === (10))){
var inst_29891 = (state_29923[(2)]);
var inst_29892 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29923__$1 = (function (){var statearr_29943 = state_29923;
(statearr_29943[(13)] = inst_29891);

return statearr_29943;
})();
var statearr_29944_29971 = state_29923__$1;
(statearr_29944_29971[(2)] = inst_29892);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29923__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29924 === (8))){
var inst_29905 = (state_29923[(2)]);
var state_29923__$1 = state_29923;
var statearr_29945_29972 = state_29923__$1;
(statearr_29945_29972[(2)] = inst_29905);

(statearr_29945_29972[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22433__auto___29957,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22368__auto__,c__22433__auto___29957,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22369__auto__ = null;
var cljs$core$async$state_machine__22369__auto____0 = (function (){
var statearr_29949 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29949[(0)] = cljs$core$async$state_machine__22369__auto__);

(statearr_29949[(1)] = (1));

return statearr_29949;
});
var cljs$core$async$state_machine__22369__auto____1 = (function (state_29923){
while(true){
var ret_value__22370__auto__ = (function (){try{while(true){
var result__22371__auto__ = switch__22368__auto__.call(null,state_29923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22371__auto__;
}
break;
}
}catch (e29950){if((e29950 instanceof Object)){
var ex__22372__auto__ = e29950;
var statearr_29951_29973 = state_29923;
(statearr_29951_29973[(5)] = ex__22372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29974 = state_29923;
state_29923 = G__29974;
continue;
} else {
return ret_value__22370__auto__;
}
break;
}
});
cljs$core$async$state_machine__22369__auto__ = function(state_29923){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22369__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22369__auto____1.call(this,state_29923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22369__auto____0;
cljs$core$async$state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22369__auto____1;
return cljs$core$async$state_machine__22369__auto__;
})()
;})(switch__22368__auto__,c__22433__auto___29957,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22435__auto__ = (function (){var statearr_29952 = f__22434__auto__.call(null);
(statearr_29952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22433__auto___29957);

return statearr_29952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22435__auto__);
});})(c__22433__auto___29957,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args29976 = [];
var len__19777__auto___30032 = arguments.length;
var i__19778__auto___30033 = (0);
while(true){
if((i__19778__auto___30033 < len__19777__auto___30032)){
args29976.push((arguments[i__19778__auto___30033]));

var G__30034 = (i__19778__auto___30033 + (1));
i__19778__auto___30033 = G__30034;
continue;
} else {
}
break;
}

var G__29978 = args29976.length;
switch (G__29978) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29976.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22433__auto___30036 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22433__auto___30036,out){
return (function (){
var f__22434__auto__ = (function (){var switch__22368__auto__ = ((function (c__22433__auto___30036,out){
return (function (state_30008){
var state_val_30009 = (state_30008[(1)]);
if((state_val_30009 === (7))){
var inst_29987 = (state_30008[(7)]);
var inst_29988 = (state_30008[(8)]);
var inst_29987__$1 = (state_30008[(2)]);
var inst_29988__$1 = cljs.core.nth.call(null,inst_29987__$1,(0),null);
var inst_29989 = cljs.core.nth.call(null,inst_29987__$1,(1),null);
var inst_29990 = (inst_29988__$1 == null);
var state_30008__$1 = (function (){var statearr_30010 = state_30008;
(statearr_30010[(9)] = inst_29989);

(statearr_30010[(7)] = inst_29987__$1);

(statearr_30010[(8)] = inst_29988__$1);

return statearr_30010;
})();
if(cljs.core.truth_(inst_29990)){
var statearr_30011_30037 = state_30008__$1;
(statearr_30011_30037[(1)] = (8));

} else {
var statearr_30012_30038 = state_30008__$1;
(statearr_30012_30038[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30009 === (1))){
var inst_29979 = cljs.core.vec.call(null,chs);
var inst_29980 = inst_29979;
var state_30008__$1 = (function (){var statearr_30013 = state_30008;
(statearr_30013[(10)] = inst_29980);

return statearr_30013;
})();
var statearr_30014_30039 = state_30008__$1;
(statearr_30014_30039[(2)] = null);

(statearr_30014_30039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30009 === (4))){
var inst_29980 = (state_30008[(10)]);
var state_30008__$1 = state_30008;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30008__$1,(7),inst_29980);
} else {
if((state_val_30009 === (6))){
var inst_30004 = (state_30008[(2)]);
var state_30008__$1 = state_30008;
var statearr_30015_30040 = state_30008__$1;
(statearr_30015_30040[(2)] = inst_30004);

(statearr_30015_30040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30009 === (3))){
var inst_30006 = (state_30008[(2)]);
var state_30008__$1 = state_30008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30008__$1,inst_30006);
} else {
if((state_val_30009 === (2))){
var inst_29980 = (state_30008[(10)]);
var inst_29982 = cljs.core.count.call(null,inst_29980);
var inst_29983 = (inst_29982 > (0));
var state_30008__$1 = state_30008;
if(cljs.core.truth_(inst_29983)){
var statearr_30017_30041 = state_30008__$1;
(statearr_30017_30041[(1)] = (4));

} else {
var statearr_30018_30042 = state_30008__$1;
(statearr_30018_30042[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30009 === (11))){
var inst_29980 = (state_30008[(10)]);
var inst_29997 = (state_30008[(2)]);
var tmp30016 = inst_29980;
var inst_29980__$1 = tmp30016;
var state_30008__$1 = (function (){var statearr_30019 = state_30008;
(statearr_30019[(10)] = inst_29980__$1);

(statearr_30019[(11)] = inst_29997);

return statearr_30019;
})();
var statearr_30020_30043 = state_30008__$1;
(statearr_30020_30043[(2)] = null);

(statearr_30020_30043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30009 === (9))){
var inst_29988 = (state_30008[(8)]);
var state_30008__$1 = state_30008;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30008__$1,(11),out,inst_29988);
} else {
if((state_val_30009 === (5))){
var inst_30002 = cljs.core.async.close_BANG_.call(null,out);
var state_30008__$1 = state_30008;
var statearr_30021_30044 = state_30008__$1;
(statearr_30021_30044[(2)] = inst_30002);

(statearr_30021_30044[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30009 === (10))){
var inst_30000 = (state_30008[(2)]);
var state_30008__$1 = state_30008;
var statearr_30022_30045 = state_30008__$1;
(statearr_30022_30045[(2)] = inst_30000);

(statearr_30022_30045[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30009 === (8))){
var inst_29980 = (state_30008[(10)]);
var inst_29989 = (state_30008[(9)]);
var inst_29987 = (state_30008[(7)]);
var inst_29988 = (state_30008[(8)]);
var inst_29992 = (function (){var cs = inst_29980;
var vec__29985 = inst_29987;
var v = inst_29988;
var c = inst_29989;
return ((function (cs,vec__29985,v,c,inst_29980,inst_29989,inst_29987,inst_29988,state_val_30009,c__22433__auto___30036,out){
return (function (p1__29975_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29975_SHARP_);
});
;})(cs,vec__29985,v,c,inst_29980,inst_29989,inst_29987,inst_29988,state_val_30009,c__22433__auto___30036,out))
})();
var inst_29993 = cljs.core.filterv.call(null,inst_29992,inst_29980);
var inst_29980__$1 = inst_29993;
var state_30008__$1 = (function (){var statearr_30023 = state_30008;
(statearr_30023[(10)] = inst_29980__$1);

return statearr_30023;
})();
var statearr_30024_30046 = state_30008__$1;
(statearr_30024_30046[(2)] = null);

(statearr_30024_30046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22433__auto___30036,out))
;
return ((function (switch__22368__auto__,c__22433__auto___30036,out){
return (function() {
var cljs$core$async$state_machine__22369__auto__ = null;
var cljs$core$async$state_machine__22369__auto____0 = (function (){
var statearr_30028 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30028[(0)] = cljs$core$async$state_machine__22369__auto__);

(statearr_30028[(1)] = (1));

return statearr_30028;
});
var cljs$core$async$state_machine__22369__auto____1 = (function (state_30008){
while(true){
var ret_value__22370__auto__ = (function (){try{while(true){
var result__22371__auto__ = switch__22368__auto__.call(null,state_30008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22371__auto__;
}
break;
}
}catch (e30029){if((e30029 instanceof Object)){
var ex__22372__auto__ = e30029;
var statearr_30030_30047 = state_30008;
(statearr_30030_30047[(5)] = ex__22372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30048 = state_30008;
state_30008 = G__30048;
continue;
} else {
return ret_value__22370__auto__;
}
break;
}
});
cljs$core$async$state_machine__22369__auto__ = function(state_30008){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22369__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22369__auto____1.call(this,state_30008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22369__auto____0;
cljs$core$async$state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22369__auto____1;
return cljs$core$async$state_machine__22369__auto__;
})()
;})(switch__22368__auto__,c__22433__auto___30036,out))
})();
var state__22435__auto__ = (function (){var statearr_30031 = f__22434__auto__.call(null);
(statearr_30031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22433__auto___30036);

return statearr_30031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22435__auto__);
});})(c__22433__auto___30036,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args30049 = [];
var len__19777__auto___30098 = arguments.length;
var i__19778__auto___30099 = (0);
while(true){
if((i__19778__auto___30099 < len__19777__auto___30098)){
args30049.push((arguments[i__19778__auto___30099]));

var G__30100 = (i__19778__auto___30099 + (1));
i__19778__auto___30099 = G__30100;
continue;
} else {
}
break;
}

var G__30051 = args30049.length;
switch (G__30051) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30049.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22433__auto___30102 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22433__auto___30102,out){
return (function (){
var f__22434__auto__ = (function (){var switch__22368__auto__ = ((function (c__22433__auto___30102,out){
return (function (state_30075){
var state_val_30076 = (state_30075[(1)]);
if((state_val_30076 === (7))){
var inst_30057 = (state_30075[(7)]);
var inst_30057__$1 = (state_30075[(2)]);
var inst_30058 = (inst_30057__$1 == null);
var inst_30059 = cljs.core.not.call(null,inst_30058);
var state_30075__$1 = (function (){var statearr_30077 = state_30075;
(statearr_30077[(7)] = inst_30057__$1);

return statearr_30077;
})();
if(inst_30059){
var statearr_30078_30103 = state_30075__$1;
(statearr_30078_30103[(1)] = (8));

} else {
var statearr_30079_30104 = state_30075__$1;
(statearr_30079_30104[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (1))){
var inst_30052 = (0);
var state_30075__$1 = (function (){var statearr_30080 = state_30075;
(statearr_30080[(8)] = inst_30052);

return statearr_30080;
})();
var statearr_30081_30105 = state_30075__$1;
(statearr_30081_30105[(2)] = null);

(statearr_30081_30105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (4))){
var state_30075__$1 = state_30075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30075__$1,(7),ch);
} else {
if((state_val_30076 === (6))){
var inst_30070 = (state_30075[(2)]);
var state_30075__$1 = state_30075;
var statearr_30082_30106 = state_30075__$1;
(statearr_30082_30106[(2)] = inst_30070);

(statearr_30082_30106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (3))){
var inst_30072 = (state_30075[(2)]);
var inst_30073 = cljs.core.async.close_BANG_.call(null,out);
var state_30075__$1 = (function (){var statearr_30083 = state_30075;
(statearr_30083[(9)] = inst_30072);

return statearr_30083;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30075__$1,inst_30073);
} else {
if((state_val_30076 === (2))){
var inst_30052 = (state_30075[(8)]);
var inst_30054 = (inst_30052 < n);
var state_30075__$1 = state_30075;
if(cljs.core.truth_(inst_30054)){
var statearr_30084_30107 = state_30075__$1;
(statearr_30084_30107[(1)] = (4));

} else {
var statearr_30085_30108 = state_30075__$1;
(statearr_30085_30108[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (11))){
var inst_30052 = (state_30075[(8)]);
var inst_30062 = (state_30075[(2)]);
var inst_30063 = (inst_30052 + (1));
var inst_30052__$1 = inst_30063;
var state_30075__$1 = (function (){var statearr_30086 = state_30075;
(statearr_30086[(8)] = inst_30052__$1);

(statearr_30086[(10)] = inst_30062);

return statearr_30086;
})();
var statearr_30087_30109 = state_30075__$1;
(statearr_30087_30109[(2)] = null);

(statearr_30087_30109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (9))){
var state_30075__$1 = state_30075;
var statearr_30088_30110 = state_30075__$1;
(statearr_30088_30110[(2)] = null);

(statearr_30088_30110[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (5))){
var state_30075__$1 = state_30075;
var statearr_30089_30111 = state_30075__$1;
(statearr_30089_30111[(2)] = null);

(statearr_30089_30111[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (10))){
var inst_30067 = (state_30075[(2)]);
var state_30075__$1 = state_30075;
var statearr_30090_30112 = state_30075__$1;
(statearr_30090_30112[(2)] = inst_30067);

(statearr_30090_30112[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (8))){
var inst_30057 = (state_30075[(7)]);
var state_30075__$1 = state_30075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30075__$1,(11),out,inst_30057);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22433__auto___30102,out))
;
return ((function (switch__22368__auto__,c__22433__auto___30102,out){
return (function() {
var cljs$core$async$state_machine__22369__auto__ = null;
var cljs$core$async$state_machine__22369__auto____0 = (function (){
var statearr_30094 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30094[(0)] = cljs$core$async$state_machine__22369__auto__);

(statearr_30094[(1)] = (1));

return statearr_30094;
});
var cljs$core$async$state_machine__22369__auto____1 = (function (state_30075){
while(true){
var ret_value__22370__auto__ = (function (){try{while(true){
var result__22371__auto__ = switch__22368__auto__.call(null,state_30075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22371__auto__;
}
break;
}
}catch (e30095){if((e30095 instanceof Object)){
var ex__22372__auto__ = e30095;
var statearr_30096_30113 = state_30075;
(statearr_30096_30113[(5)] = ex__22372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30114 = state_30075;
state_30075 = G__30114;
continue;
} else {
return ret_value__22370__auto__;
}
break;
}
});
cljs$core$async$state_machine__22369__auto__ = function(state_30075){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22369__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22369__auto____1.call(this,state_30075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22369__auto____0;
cljs$core$async$state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22369__auto____1;
return cljs$core$async$state_machine__22369__auto__;
})()
;})(switch__22368__auto__,c__22433__auto___30102,out))
})();
var state__22435__auto__ = (function (){var statearr_30097 = f__22434__auto__.call(null);
(statearr_30097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22433__auto___30102);

return statearr_30097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22435__auto__);
});})(c__22433__auto___30102,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30122 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30122 = (function (map_LT_,f,ch,meta30123){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30123 = meta30123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30124,meta30123__$1){
var self__ = this;
var _30124__$1 = this;
return (new cljs.core.async.t_cljs$core$async30122(self__.map_LT_,self__.f,self__.ch,meta30123__$1));
});

cljs.core.async.t_cljs$core$async30122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30124){
var self__ = this;
var _30124__$1 = this;
return self__.meta30123;
});

cljs.core.async.t_cljs$core$async30122.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30122.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30122.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30122.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30122.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30125 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30125 = (function (map_LT_,f,ch,meta30123,_,fn1,meta30126){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30123 = meta30123;
this._ = _;
this.fn1 = fn1;
this.meta30126 = meta30126;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30127,meta30126__$1){
var self__ = this;
var _30127__$1 = this;
return (new cljs.core.async.t_cljs$core$async30125(self__.map_LT_,self__.f,self__.ch,self__.meta30123,self__._,self__.fn1,meta30126__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30125.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30127){
var self__ = this;
var _30127__$1 = this;
return self__.meta30126;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30125.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30125.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30125.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30115_SHARP_){
return f1.call(null,(((p1__30115_SHARP_ == null))?null:self__.f.call(null,p1__30115_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30125.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30123","meta30123",282044919,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30122","cljs.core.async/t_cljs$core$async30122",-1565236109,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30126","meta30126",1176219529,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30125.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30125.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30125";

cljs.core.async.t_cljs$core$async30125.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19317__auto__,writer__19318__auto__,opt__19319__auto__){
return cljs.core._write.call(null,writer__19318__auto__,"cljs.core.async/t_cljs$core$async30125");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30125 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30125(map_LT___$1,f__$1,ch__$1,meta30123__$1,___$2,fn1__$1,meta30126){
return (new cljs.core.async.t_cljs$core$async30125(map_LT___$1,f__$1,ch__$1,meta30123__$1,___$2,fn1__$1,meta30126));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30125(self__.map_LT_,self__.f,self__.ch,self__.meta30123,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18707__auto__ = ret;
if(cljs.core.truth_(and__18707__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18707__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30122.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30122.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30122.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30123","meta30123",282044919,null)], null);
});

cljs.core.async.t_cljs$core$async30122.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30122.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30122";

cljs.core.async.t_cljs$core$async30122.cljs$lang$ctorPrWriter = (function (this__19317__auto__,writer__19318__auto__,opt__19319__auto__){
return cljs.core._write.call(null,writer__19318__auto__,"cljs.core.async/t_cljs$core$async30122");
});

cljs.core.async.__GT_t_cljs$core$async30122 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30122(map_LT___$1,f__$1,ch__$1,meta30123){
return (new cljs.core.async.t_cljs$core$async30122(map_LT___$1,f__$1,ch__$1,meta30123));
});

}

return (new cljs.core.async.t_cljs$core$async30122(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30131 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30131 = (function (map_GT_,f,ch,meta30132){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30132 = meta30132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30133,meta30132__$1){
var self__ = this;
var _30133__$1 = this;
return (new cljs.core.async.t_cljs$core$async30131(self__.map_GT_,self__.f,self__.ch,meta30132__$1));
});

cljs.core.async.t_cljs$core$async30131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30133){
var self__ = this;
var _30133__$1 = this;
return self__.meta30132;
});

cljs.core.async.t_cljs$core$async30131.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30131.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30131.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30131.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30131.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30131.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30131.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30132","meta30132",787898465,null)], null);
});

cljs.core.async.t_cljs$core$async30131.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30131.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30131";

cljs.core.async.t_cljs$core$async30131.cljs$lang$ctorPrWriter = (function (this__19317__auto__,writer__19318__auto__,opt__19319__auto__){
return cljs.core._write.call(null,writer__19318__auto__,"cljs.core.async/t_cljs$core$async30131");
});

cljs.core.async.__GT_t_cljs$core$async30131 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30131(map_GT___$1,f__$1,ch__$1,meta30132){
return (new cljs.core.async.t_cljs$core$async30131(map_GT___$1,f__$1,ch__$1,meta30132));
});

}

return (new cljs.core.async.t_cljs$core$async30131(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30137 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30137 = (function (filter_GT_,p,ch,meta30138){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30138 = meta30138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30139,meta30138__$1){
var self__ = this;
var _30139__$1 = this;
return (new cljs.core.async.t_cljs$core$async30137(self__.filter_GT_,self__.p,self__.ch,meta30138__$1));
});

cljs.core.async.t_cljs$core$async30137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30139){
var self__ = this;
var _30139__$1 = this;
return self__.meta30138;
});

cljs.core.async.t_cljs$core$async30137.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30137.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30137.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30137.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30137.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30137.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30137.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30137.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30138","meta30138",-131214858,null)], null);
});

cljs.core.async.t_cljs$core$async30137.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30137";

cljs.core.async.t_cljs$core$async30137.cljs$lang$ctorPrWriter = (function (this__19317__auto__,writer__19318__auto__,opt__19319__auto__){
return cljs.core._write.call(null,writer__19318__auto__,"cljs.core.async/t_cljs$core$async30137");
});

cljs.core.async.__GT_t_cljs$core$async30137 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30137(filter_GT___$1,p__$1,ch__$1,meta30138){
return (new cljs.core.async.t_cljs$core$async30137(filter_GT___$1,p__$1,ch__$1,meta30138));
});

}

return (new cljs.core.async.t_cljs$core$async30137(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args30140 = [];
var len__19777__auto___30184 = arguments.length;
var i__19778__auto___30185 = (0);
while(true){
if((i__19778__auto___30185 < len__19777__auto___30184)){
args30140.push((arguments[i__19778__auto___30185]));

var G__30186 = (i__19778__auto___30185 + (1));
i__19778__auto___30185 = G__30186;
continue;
} else {
}
break;
}

var G__30142 = args30140.length;
switch (G__30142) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30140.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22433__auto___30188 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22433__auto___30188,out){
return (function (){
var f__22434__auto__ = (function (){var switch__22368__auto__ = ((function (c__22433__auto___30188,out){
return (function (state_30163){
var state_val_30164 = (state_30163[(1)]);
if((state_val_30164 === (7))){
var inst_30159 = (state_30163[(2)]);
var state_30163__$1 = state_30163;
var statearr_30165_30189 = state_30163__$1;
(statearr_30165_30189[(2)] = inst_30159);

(statearr_30165_30189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30164 === (1))){
var state_30163__$1 = state_30163;
var statearr_30166_30190 = state_30163__$1;
(statearr_30166_30190[(2)] = null);

(statearr_30166_30190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30164 === (4))){
var inst_30145 = (state_30163[(7)]);
var inst_30145__$1 = (state_30163[(2)]);
var inst_30146 = (inst_30145__$1 == null);
var state_30163__$1 = (function (){var statearr_30167 = state_30163;
(statearr_30167[(7)] = inst_30145__$1);

return statearr_30167;
})();
if(cljs.core.truth_(inst_30146)){
var statearr_30168_30191 = state_30163__$1;
(statearr_30168_30191[(1)] = (5));

} else {
var statearr_30169_30192 = state_30163__$1;
(statearr_30169_30192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30164 === (6))){
var inst_30145 = (state_30163[(7)]);
var inst_30150 = p.call(null,inst_30145);
var state_30163__$1 = state_30163;
if(cljs.core.truth_(inst_30150)){
var statearr_30170_30193 = state_30163__$1;
(statearr_30170_30193[(1)] = (8));

} else {
var statearr_30171_30194 = state_30163__$1;
(statearr_30171_30194[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30164 === (3))){
var inst_30161 = (state_30163[(2)]);
var state_30163__$1 = state_30163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30163__$1,inst_30161);
} else {
if((state_val_30164 === (2))){
var state_30163__$1 = state_30163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30163__$1,(4),ch);
} else {
if((state_val_30164 === (11))){
var inst_30153 = (state_30163[(2)]);
var state_30163__$1 = state_30163;
var statearr_30172_30195 = state_30163__$1;
(statearr_30172_30195[(2)] = inst_30153);

(statearr_30172_30195[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30164 === (9))){
var state_30163__$1 = state_30163;
var statearr_30173_30196 = state_30163__$1;
(statearr_30173_30196[(2)] = null);

(statearr_30173_30196[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30164 === (5))){
var inst_30148 = cljs.core.async.close_BANG_.call(null,out);
var state_30163__$1 = state_30163;
var statearr_30174_30197 = state_30163__$1;
(statearr_30174_30197[(2)] = inst_30148);

(statearr_30174_30197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30164 === (10))){
var inst_30156 = (state_30163[(2)]);
var state_30163__$1 = (function (){var statearr_30175 = state_30163;
(statearr_30175[(8)] = inst_30156);

return statearr_30175;
})();
var statearr_30176_30198 = state_30163__$1;
(statearr_30176_30198[(2)] = null);

(statearr_30176_30198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30164 === (8))){
var inst_30145 = (state_30163[(7)]);
var state_30163__$1 = state_30163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30163__$1,(11),out,inst_30145);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22433__auto___30188,out))
;
return ((function (switch__22368__auto__,c__22433__auto___30188,out){
return (function() {
var cljs$core$async$state_machine__22369__auto__ = null;
var cljs$core$async$state_machine__22369__auto____0 = (function (){
var statearr_30180 = [null,null,null,null,null,null,null,null,null];
(statearr_30180[(0)] = cljs$core$async$state_machine__22369__auto__);

(statearr_30180[(1)] = (1));

return statearr_30180;
});
var cljs$core$async$state_machine__22369__auto____1 = (function (state_30163){
while(true){
var ret_value__22370__auto__ = (function (){try{while(true){
var result__22371__auto__ = switch__22368__auto__.call(null,state_30163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22371__auto__;
}
break;
}
}catch (e30181){if((e30181 instanceof Object)){
var ex__22372__auto__ = e30181;
var statearr_30182_30199 = state_30163;
(statearr_30182_30199[(5)] = ex__22372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30200 = state_30163;
state_30163 = G__30200;
continue;
} else {
return ret_value__22370__auto__;
}
break;
}
});
cljs$core$async$state_machine__22369__auto__ = function(state_30163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22369__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22369__auto____1.call(this,state_30163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22369__auto____0;
cljs$core$async$state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22369__auto____1;
return cljs$core$async$state_machine__22369__auto__;
})()
;})(switch__22368__auto__,c__22433__auto___30188,out))
})();
var state__22435__auto__ = (function (){var statearr_30183 = f__22434__auto__.call(null);
(statearr_30183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22433__auto___30188);

return statearr_30183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22435__auto__);
});})(c__22433__auto___30188,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30201 = [];
var len__19777__auto___30204 = arguments.length;
var i__19778__auto___30205 = (0);
while(true){
if((i__19778__auto___30205 < len__19777__auto___30204)){
args30201.push((arguments[i__19778__auto___30205]));

var G__30206 = (i__19778__auto___30205 + (1));
i__19778__auto___30205 = G__30206;
continue;
} else {
}
break;
}

var G__30203 = args30201.length;
switch (G__30203) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30201.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__22433__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22433__auto__){
return (function (){
var f__22434__auto__ = (function (){var switch__22368__auto__ = ((function (c__22433__auto__){
return (function (state_30373){
var state_val_30374 = (state_30373[(1)]);
if((state_val_30374 === (7))){
var inst_30369 = (state_30373[(2)]);
var state_30373__$1 = state_30373;
var statearr_30375_30416 = state_30373__$1;
(statearr_30375_30416[(2)] = inst_30369);

(statearr_30375_30416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (20))){
var inst_30339 = (state_30373[(7)]);
var inst_30350 = (state_30373[(2)]);
var inst_30351 = cljs.core.next.call(null,inst_30339);
var inst_30325 = inst_30351;
var inst_30326 = null;
var inst_30327 = (0);
var inst_30328 = (0);
var state_30373__$1 = (function (){var statearr_30376 = state_30373;
(statearr_30376[(8)] = inst_30326);

(statearr_30376[(9)] = inst_30327);

(statearr_30376[(10)] = inst_30325);

(statearr_30376[(11)] = inst_30328);

(statearr_30376[(12)] = inst_30350);

return statearr_30376;
})();
var statearr_30377_30417 = state_30373__$1;
(statearr_30377_30417[(2)] = null);

(statearr_30377_30417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (1))){
var state_30373__$1 = state_30373;
var statearr_30378_30418 = state_30373__$1;
(statearr_30378_30418[(2)] = null);

(statearr_30378_30418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (4))){
var inst_30314 = (state_30373[(13)]);
var inst_30314__$1 = (state_30373[(2)]);
var inst_30315 = (inst_30314__$1 == null);
var state_30373__$1 = (function (){var statearr_30379 = state_30373;
(statearr_30379[(13)] = inst_30314__$1);

return statearr_30379;
})();
if(cljs.core.truth_(inst_30315)){
var statearr_30380_30419 = state_30373__$1;
(statearr_30380_30419[(1)] = (5));

} else {
var statearr_30381_30420 = state_30373__$1;
(statearr_30381_30420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (15))){
var state_30373__$1 = state_30373;
var statearr_30385_30421 = state_30373__$1;
(statearr_30385_30421[(2)] = null);

(statearr_30385_30421[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (21))){
var state_30373__$1 = state_30373;
var statearr_30386_30422 = state_30373__$1;
(statearr_30386_30422[(2)] = null);

(statearr_30386_30422[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (13))){
var inst_30326 = (state_30373[(8)]);
var inst_30327 = (state_30373[(9)]);
var inst_30325 = (state_30373[(10)]);
var inst_30328 = (state_30373[(11)]);
var inst_30335 = (state_30373[(2)]);
var inst_30336 = (inst_30328 + (1));
var tmp30382 = inst_30326;
var tmp30383 = inst_30327;
var tmp30384 = inst_30325;
var inst_30325__$1 = tmp30384;
var inst_30326__$1 = tmp30382;
var inst_30327__$1 = tmp30383;
var inst_30328__$1 = inst_30336;
var state_30373__$1 = (function (){var statearr_30387 = state_30373;
(statearr_30387[(8)] = inst_30326__$1);

(statearr_30387[(14)] = inst_30335);

(statearr_30387[(9)] = inst_30327__$1);

(statearr_30387[(10)] = inst_30325__$1);

(statearr_30387[(11)] = inst_30328__$1);

return statearr_30387;
})();
var statearr_30388_30423 = state_30373__$1;
(statearr_30388_30423[(2)] = null);

(statearr_30388_30423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (22))){
var state_30373__$1 = state_30373;
var statearr_30389_30424 = state_30373__$1;
(statearr_30389_30424[(2)] = null);

(statearr_30389_30424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (6))){
var inst_30314 = (state_30373[(13)]);
var inst_30323 = f.call(null,inst_30314);
var inst_30324 = cljs.core.seq.call(null,inst_30323);
var inst_30325 = inst_30324;
var inst_30326 = null;
var inst_30327 = (0);
var inst_30328 = (0);
var state_30373__$1 = (function (){var statearr_30390 = state_30373;
(statearr_30390[(8)] = inst_30326);

(statearr_30390[(9)] = inst_30327);

(statearr_30390[(10)] = inst_30325);

(statearr_30390[(11)] = inst_30328);

return statearr_30390;
})();
var statearr_30391_30425 = state_30373__$1;
(statearr_30391_30425[(2)] = null);

(statearr_30391_30425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (17))){
var inst_30339 = (state_30373[(7)]);
var inst_30343 = cljs.core.chunk_first.call(null,inst_30339);
var inst_30344 = cljs.core.chunk_rest.call(null,inst_30339);
var inst_30345 = cljs.core.count.call(null,inst_30343);
var inst_30325 = inst_30344;
var inst_30326 = inst_30343;
var inst_30327 = inst_30345;
var inst_30328 = (0);
var state_30373__$1 = (function (){var statearr_30392 = state_30373;
(statearr_30392[(8)] = inst_30326);

(statearr_30392[(9)] = inst_30327);

(statearr_30392[(10)] = inst_30325);

(statearr_30392[(11)] = inst_30328);

return statearr_30392;
})();
var statearr_30393_30426 = state_30373__$1;
(statearr_30393_30426[(2)] = null);

(statearr_30393_30426[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (3))){
var inst_30371 = (state_30373[(2)]);
var state_30373__$1 = state_30373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30373__$1,inst_30371);
} else {
if((state_val_30374 === (12))){
var inst_30359 = (state_30373[(2)]);
var state_30373__$1 = state_30373;
var statearr_30394_30427 = state_30373__$1;
(statearr_30394_30427[(2)] = inst_30359);

(statearr_30394_30427[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (2))){
var state_30373__$1 = state_30373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30373__$1,(4),in$);
} else {
if((state_val_30374 === (23))){
var inst_30367 = (state_30373[(2)]);
var state_30373__$1 = state_30373;
var statearr_30395_30428 = state_30373__$1;
(statearr_30395_30428[(2)] = inst_30367);

(statearr_30395_30428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (19))){
var inst_30354 = (state_30373[(2)]);
var state_30373__$1 = state_30373;
var statearr_30396_30429 = state_30373__$1;
(statearr_30396_30429[(2)] = inst_30354);

(statearr_30396_30429[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (11))){
var inst_30325 = (state_30373[(10)]);
var inst_30339 = (state_30373[(7)]);
var inst_30339__$1 = cljs.core.seq.call(null,inst_30325);
var state_30373__$1 = (function (){var statearr_30397 = state_30373;
(statearr_30397[(7)] = inst_30339__$1);

return statearr_30397;
})();
if(inst_30339__$1){
var statearr_30398_30430 = state_30373__$1;
(statearr_30398_30430[(1)] = (14));

} else {
var statearr_30399_30431 = state_30373__$1;
(statearr_30399_30431[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (9))){
var inst_30361 = (state_30373[(2)]);
var inst_30362 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30373__$1 = (function (){var statearr_30400 = state_30373;
(statearr_30400[(15)] = inst_30361);

return statearr_30400;
})();
if(cljs.core.truth_(inst_30362)){
var statearr_30401_30432 = state_30373__$1;
(statearr_30401_30432[(1)] = (21));

} else {
var statearr_30402_30433 = state_30373__$1;
(statearr_30402_30433[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (5))){
var inst_30317 = cljs.core.async.close_BANG_.call(null,out);
var state_30373__$1 = state_30373;
var statearr_30403_30434 = state_30373__$1;
(statearr_30403_30434[(2)] = inst_30317);

(statearr_30403_30434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (14))){
var inst_30339 = (state_30373[(7)]);
var inst_30341 = cljs.core.chunked_seq_QMARK_.call(null,inst_30339);
var state_30373__$1 = state_30373;
if(inst_30341){
var statearr_30404_30435 = state_30373__$1;
(statearr_30404_30435[(1)] = (17));

} else {
var statearr_30405_30436 = state_30373__$1;
(statearr_30405_30436[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (16))){
var inst_30357 = (state_30373[(2)]);
var state_30373__$1 = state_30373;
var statearr_30406_30437 = state_30373__$1;
(statearr_30406_30437[(2)] = inst_30357);

(statearr_30406_30437[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (10))){
var inst_30326 = (state_30373[(8)]);
var inst_30328 = (state_30373[(11)]);
var inst_30333 = cljs.core._nth.call(null,inst_30326,inst_30328);
var state_30373__$1 = state_30373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30373__$1,(13),out,inst_30333);
} else {
if((state_val_30374 === (18))){
var inst_30339 = (state_30373[(7)]);
var inst_30348 = cljs.core.first.call(null,inst_30339);
var state_30373__$1 = state_30373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30373__$1,(20),out,inst_30348);
} else {
if((state_val_30374 === (8))){
var inst_30327 = (state_30373[(9)]);
var inst_30328 = (state_30373[(11)]);
var inst_30330 = (inst_30328 < inst_30327);
var inst_30331 = inst_30330;
var state_30373__$1 = state_30373;
if(cljs.core.truth_(inst_30331)){
var statearr_30407_30438 = state_30373__$1;
(statearr_30407_30438[(1)] = (10));

} else {
var statearr_30408_30439 = state_30373__$1;
(statearr_30408_30439[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22433__auto__))
;
return ((function (switch__22368__auto__,c__22433__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22369__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22369__auto____0 = (function (){
var statearr_30412 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30412[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22369__auto__);

(statearr_30412[(1)] = (1));

return statearr_30412;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22369__auto____1 = (function (state_30373){
while(true){
var ret_value__22370__auto__ = (function (){try{while(true){
var result__22371__auto__ = switch__22368__auto__.call(null,state_30373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22371__auto__;
}
break;
}
}catch (e30413){if((e30413 instanceof Object)){
var ex__22372__auto__ = e30413;
var statearr_30414_30440 = state_30373;
(statearr_30414_30440[(5)] = ex__22372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30441 = state_30373;
state_30373 = G__30441;
continue;
} else {
return ret_value__22370__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22369__auto__ = function(state_30373){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22369__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22369__auto____1.call(this,state_30373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22369__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22369__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22369__auto__;
})()
;})(switch__22368__auto__,c__22433__auto__))
})();
var state__22435__auto__ = (function (){var statearr_30415 = f__22434__auto__.call(null);
(statearr_30415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22433__auto__);

return statearr_30415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22435__auto__);
});})(c__22433__auto__))
);

return c__22433__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30442 = [];
var len__19777__auto___30445 = arguments.length;
var i__19778__auto___30446 = (0);
while(true){
if((i__19778__auto___30446 < len__19777__auto___30445)){
args30442.push((arguments[i__19778__auto___30446]));

var G__30447 = (i__19778__auto___30446 + (1));
i__19778__auto___30446 = G__30447;
continue;
} else {
}
break;
}

var G__30444 = args30442.length;
switch (G__30444) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30442.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args30449 = [];
var len__19777__auto___30452 = arguments.length;
var i__19778__auto___30453 = (0);
while(true){
if((i__19778__auto___30453 < len__19777__auto___30452)){
args30449.push((arguments[i__19778__auto___30453]));

var G__30454 = (i__19778__auto___30453 + (1));
i__19778__auto___30453 = G__30454;
continue;
} else {
}
break;
}

var G__30451 = args30449.length;
switch (G__30451) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30449.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args30456 = [];
var len__19777__auto___30507 = arguments.length;
var i__19778__auto___30508 = (0);
while(true){
if((i__19778__auto___30508 < len__19777__auto___30507)){
args30456.push((arguments[i__19778__auto___30508]));

var G__30509 = (i__19778__auto___30508 + (1));
i__19778__auto___30508 = G__30509;
continue;
} else {
}
break;
}

var G__30458 = args30456.length;
switch (G__30458) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30456.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22433__auto___30511 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22433__auto___30511,out){
return (function (){
var f__22434__auto__ = (function (){var switch__22368__auto__ = ((function (c__22433__auto___30511,out){
return (function (state_30482){
var state_val_30483 = (state_30482[(1)]);
if((state_val_30483 === (7))){
var inst_30477 = (state_30482[(2)]);
var state_30482__$1 = state_30482;
var statearr_30484_30512 = state_30482__$1;
(statearr_30484_30512[(2)] = inst_30477);

(statearr_30484_30512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30483 === (1))){
var inst_30459 = null;
var state_30482__$1 = (function (){var statearr_30485 = state_30482;
(statearr_30485[(7)] = inst_30459);

return statearr_30485;
})();
var statearr_30486_30513 = state_30482__$1;
(statearr_30486_30513[(2)] = null);

(statearr_30486_30513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30483 === (4))){
var inst_30462 = (state_30482[(8)]);
var inst_30462__$1 = (state_30482[(2)]);
var inst_30463 = (inst_30462__$1 == null);
var inst_30464 = cljs.core.not.call(null,inst_30463);
var state_30482__$1 = (function (){var statearr_30487 = state_30482;
(statearr_30487[(8)] = inst_30462__$1);

return statearr_30487;
})();
if(inst_30464){
var statearr_30488_30514 = state_30482__$1;
(statearr_30488_30514[(1)] = (5));

} else {
var statearr_30489_30515 = state_30482__$1;
(statearr_30489_30515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30483 === (6))){
var state_30482__$1 = state_30482;
var statearr_30490_30516 = state_30482__$1;
(statearr_30490_30516[(2)] = null);

(statearr_30490_30516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30483 === (3))){
var inst_30479 = (state_30482[(2)]);
var inst_30480 = cljs.core.async.close_BANG_.call(null,out);
var state_30482__$1 = (function (){var statearr_30491 = state_30482;
(statearr_30491[(9)] = inst_30479);

return statearr_30491;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30482__$1,inst_30480);
} else {
if((state_val_30483 === (2))){
var state_30482__$1 = state_30482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30482__$1,(4),ch);
} else {
if((state_val_30483 === (11))){
var inst_30462 = (state_30482[(8)]);
var inst_30471 = (state_30482[(2)]);
var inst_30459 = inst_30462;
var state_30482__$1 = (function (){var statearr_30492 = state_30482;
(statearr_30492[(10)] = inst_30471);

(statearr_30492[(7)] = inst_30459);

return statearr_30492;
})();
var statearr_30493_30517 = state_30482__$1;
(statearr_30493_30517[(2)] = null);

(statearr_30493_30517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30483 === (9))){
var inst_30462 = (state_30482[(8)]);
var state_30482__$1 = state_30482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30482__$1,(11),out,inst_30462);
} else {
if((state_val_30483 === (5))){
var inst_30462 = (state_30482[(8)]);
var inst_30459 = (state_30482[(7)]);
var inst_30466 = cljs.core._EQ_.call(null,inst_30462,inst_30459);
var state_30482__$1 = state_30482;
if(inst_30466){
var statearr_30495_30518 = state_30482__$1;
(statearr_30495_30518[(1)] = (8));

} else {
var statearr_30496_30519 = state_30482__$1;
(statearr_30496_30519[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30483 === (10))){
var inst_30474 = (state_30482[(2)]);
var state_30482__$1 = state_30482;
var statearr_30497_30520 = state_30482__$1;
(statearr_30497_30520[(2)] = inst_30474);

(statearr_30497_30520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30483 === (8))){
var inst_30459 = (state_30482[(7)]);
var tmp30494 = inst_30459;
var inst_30459__$1 = tmp30494;
var state_30482__$1 = (function (){var statearr_30498 = state_30482;
(statearr_30498[(7)] = inst_30459__$1);

return statearr_30498;
})();
var statearr_30499_30521 = state_30482__$1;
(statearr_30499_30521[(2)] = null);

(statearr_30499_30521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22433__auto___30511,out))
;
return ((function (switch__22368__auto__,c__22433__auto___30511,out){
return (function() {
var cljs$core$async$state_machine__22369__auto__ = null;
var cljs$core$async$state_machine__22369__auto____0 = (function (){
var statearr_30503 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30503[(0)] = cljs$core$async$state_machine__22369__auto__);

(statearr_30503[(1)] = (1));

return statearr_30503;
});
var cljs$core$async$state_machine__22369__auto____1 = (function (state_30482){
while(true){
var ret_value__22370__auto__ = (function (){try{while(true){
var result__22371__auto__ = switch__22368__auto__.call(null,state_30482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22371__auto__;
}
break;
}
}catch (e30504){if((e30504 instanceof Object)){
var ex__22372__auto__ = e30504;
var statearr_30505_30522 = state_30482;
(statearr_30505_30522[(5)] = ex__22372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30523 = state_30482;
state_30482 = G__30523;
continue;
} else {
return ret_value__22370__auto__;
}
break;
}
});
cljs$core$async$state_machine__22369__auto__ = function(state_30482){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22369__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22369__auto____1.call(this,state_30482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22369__auto____0;
cljs$core$async$state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22369__auto____1;
return cljs$core$async$state_machine__22369__auto__;
})()
;})(switch__22368__auto__,c__22433__auto___30511,out))
})();
var state__22435__auto__ = (function (){var statearr_30506 = f__22434__auto__.call(null);
(statearr_30506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22433__auto___30511);

return statearr_30506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22435__auto__);
});})(c__22433__auto___30511,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30524 = [];
var len__19777__auto___30594 = arguments.length;
var i__19778__auto___30595 = (0);
while(true){
if((i__19778__auto___30595 < len__19777__auto___30594)){
args30524.push((arguments[i__19778__auto___30595]));

var G__30596 = (i__19778__auto___30595 + (1));
i__19778__auto___30595 = G__30596;
continue;
} else {
}
break;
}

var G__30526 = args30524.length;
switch (G__30526) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30524.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22433__auto___30598 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22433__auto___30598,out){
return (function (){
var f__22434__auto__ = (function (){var switch__22368__auto__ = ((function (c__22433__auto___30598,out){
return (function (state_30564){
var state_val_30565 = (state_30564[(1)]);
if((state_val_30565 === (7))){
var inst_30560 = (state_30564[(2)]);
var state_30564__$1 = state_30564;
var statearr_30566_30599 = state_30564__$1;
(statearr_30566_30599[(2)] = inst_30560);

(statearr_30566_30599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (1))){
var inst_30527 = (new Array(n));
var inst_30528 = inst_30527;
var inst_30529 = (0);
var state_30564__$1 = (function (){var statearr_30567 = state_30564;
(statearr_30567[(7)] = inst_30528);

(statearr_30567[(8)] = inst_30529);

return statearr_30567;
})();
var statearr_30568_30600 = state_30564__$1;
(statearr_30568_30600[(2)] = null);

(statearr_30568_30600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (4))){
var inst_30532 = (state_30564[(9)]);
var inst_30532__$1 = (state_30564[(2)]);
var inst_30533 = (inst_30532__$1 == null);
var inst_30534 = cljs.core.not.call(null,inst_30533);
var state_30564__$1 = (function (){var statearr_30569 = state_30564;
(statearr_30569[(9)] = inst_30532__$1);

return statearr_30569;
})();
if(inst_30534){
var statearr_30570_30601 = state_30564__$1;
(statearr_30570_30601[(1)] = (5));

} else {
var statearr_30571_30602 = state_30564__$1;
(statearr_30571_30602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (15))){
var inst_30554 = (state_30564[(2)]);
var state_30564__$1 = state_30564;
var statearr_30572_30603 = state_30564__$1;
(statearr_30572_30603[(2)] = inst_30554);

(statearr_30572_30603[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (13))){
var state_30564__$1 = state_30564;
var statearr_30573_30604 = state_30564__$1;
(statearr_30573_30604[(2)] = null);

(statearr_30573_30604[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (6))){
var inst_30529 = (state_30564[(8)]);
var inst_30550 = (inst_30529 > (0));
var state_30564__$1 = state_30564;
if(cljs.core.truth_(inst_30550)){
var statearr_30574_30605 = state_30564__$1;
(statearr_30574_30605[(1)] = (12));

} else {
var statearr_30575_30606 = state_30564__$1;
(statearr_30575_30606[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (3))){
var inst_30562 = (state_30564[(2)]);
var state_30564__$1 = state_30564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30564__$1,inst_30562);
} else {
if((state_val_30565 === (12))){
var inst_30528 = (state_30564[(7)]);
var inst_30552 = cljs.core.vec.call(null,inst_30528);
var state_30564__$1 = state_30564;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30564__$1,(15),out,inst_30552);
} else {
if((state_val_30565 === (2))){
var state_30564__$1 = state_30564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30564__$1,(4),ch);
} else {
if((state_val_30565 === (11))){
var inst_30544 = (state_30564[(2)]);
var inst_30545 = (new Array(n));
var inst_30528 = inst_30545;
var inst_30529 = (0);
var state_30564__$1 = (function (){var statearr_30576 = state_30564;
(statearr_30576[(7)] = inst_30528);

(statearr_30576[(10)] = inst_30544);

(statearr_30576[(8)] = inst_30529);

return statearr_30576;
})();
var statearr_30577_30607 = state_30564__$1;
(statearr_30577_30607[(2)] = null);

(statearr_30577_30607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (9))){
var inst_30528 = (state_30564[(7)]);
var inst_30542 = cljs.core.vec.call(null,inst_30528);
var state_30564__$1 = state_30564;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30564__$1,(11),out,inst_30542);
} else {
if((state_val_30565 === (5))){
var inst_30537 = (state_30564[(11)]);
var inst_30528 = (state_30564[(7)]);
var inst_30529 = (state_30564[(8)]);
var inst_30532 = (state_30564[(9)]);
var inst_30536 = (inst_30528[inst_30529] = inst_30532);
var inst_30537__$1 = (inst_30529 + (1));
var inst_30538 = (inst_30537__$1 < n);
var state_30564__$1 = (function (){var statearr_30578 = state_30564;
(statearr_30578[(11)] = inst_30537__$1);

(statearr_30578[(12)] = inst_30536);

return statearr_30578;
})();
if(cljs.core.truth_(inst_30538)){
var statearr_30579_30608 = state_30564__$1;
(statearr_30579_30608[(1)] = (8));

} else {
var statearr_30580_30609 = state_30564__$1;
(statearr_30580_30609[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (14))){
var inst_30557 = (state_30564[(2)]);
var inst_30558 = cljs.core.async.close_BANG_.call(null,out);
var state_30564__$1 = (function (){var statearr_30582 = state_30564;
(statearr_30582[(13)] = inst_30557);

return statearr_30582;
})();
var statearr_30583_30610 = state_30564__$1;
(statearr_30583_30610[(2)] = inst_30558);

(statearr_30583_30610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (10))){
var inst_30548 = (state_30564[(2)]);
var state_30564__$1 = state_30564;
var statearr_30584_30611 = state_30564__$1;
(statearr_30584_30611[(2)] = inst_30548);

(statearr_30584_30611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (8))){
var inst_30537 = (state_30564[(11)]);
var inst_30528 = (state_30564[(7)]);
var tmp30581 = inst_30528;
var inst_30528__$1 = tmp30581;
var inst_30529 = inst_30537;
var state_30564__$1 = (function (){var statearr_30585 = state_30564;
(statearr_30585[(7)] = inst_30528__$1);

(statearr_30585[(8)] = inst_30529);

return statearr_30585;
})();
var statearr_30586_30612 = state_30564__$1;
(statearr_30586_30612[(2)] = null);

(statearr_30586_30612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22433__auto___30598,out))
;
return ((function (switch__22368__auto__,c__22433__auto___30598,out){
return (function() {
var cljs$core$async$state_machine__22369__auto__ = null;
var cljs$core$async$state_machine__22369__auto____0 = (function (){
var statearr_30590 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30590[(0)] = cljs$core$async$state_machine__22369__auto__);

(statearr_30590[(1)] = (1));

return statearr_30590;
});
var cljs$core$async$state_machine__22369__auto____1 = (function (state_30564){
while(true){
var ret_value__22370__auto__ = (function (){try{while(true){
var result__22371__auto__ = switch__22368__auto__.call(null,state_30564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22371__auto__;
}
break;
}
}catch (e30591){if((e30591 instanceof Object)){
var ex__22372__auto__ = e30591;
var statearr_30592_30613 = state_30564;
(statearr_30592_30613[(5)] = ex__22372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30614 = state_30564;
state_30564 = G__30614;
continue;
} else {
return ret_value__22370__auto__;
}
break;
}
});
cljs$core$async$state_machine__22369__auto__ = function(state_30564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22369__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22369__auto____1.call(this,state_30564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22369__auto____0;
cljs$core$async$state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22369__auto____1;
return cljs$core$async$state_machine__22369__auto__;
})()
;})(switch__22368__auto__,c__22433__auto___30598,out))
})();
var state__22435__auto__ = (function (){var statearr_30593 = f__22434__auto__.call(null);
(statearr_30593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22433__auto___30598);

return statearr_30593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22435__auto__);
});})(c__22433__auto___30598,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30615 = [];
var len__19777__auto___30689 = arguments.length;
var i__19778__auto___30690 = (0);
while(true){
if((i__19778__auto___30690 < len__19777__auto___30689)){
args30615.push((arguments[i__19778__auto___30690]));

var G__30691 = (i__19778__auto___30690 + (1));
i__19778__auto___30690 = G__30691;
continue;
} else {
}
break;
}

var G__30617 = args30615.length;
switch (G__30617) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30615.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22433__auto___30693 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22433__auto___30693,out){
return (function (){
var f__22434__auto__ = (function (){var switch__22368__auto__ = ((function (c__22433__auto___30693,out){
return (function (state_30659){
var state_val_30660 = (state_30659[(1)]);
if((state_val_30660 === (7))){
var inst_30655 = (state_30659[(2)]);
var state_30659__$1 = state_30659;
var statearr_30661_30694 = state_30659__$1;
(statearr_30661_30694[(2)] = inst_30655);

(statearr_30661_30694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30660 === (1))){
var inst_30618 = [];
var inst_30619 = inst_30618;
var inst_30620 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30659__$1 = (function (){var statearr_30662 = state_30659;
(statearr_30662[(7)] = inst_30619);

(statearr_30662[(8)] = inst_30620);

return statearr_30662;
})();
var statearr_30663_30695 = state_30659__$1;
(statearr_30663_30695[(2)] = null);

(statearr_30663_30695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30660 === (4))){
var inst_30623 = (state_30659[(9)]);
var inst_30623__$1 = (state_30659[(2)]);
var inst_30624 = (inst_30623__$1 == null);
var inst_30625 = cljs.core.not.call(null,inst_30624);
var state_30659__$1 = (function (){var statearr_30664 = state_30659;
(statearr_30664[(9)] = inst_30623__$1);

return statearr_30664;
})();
if(inst_30625){
var statearr_30665_30696 = state_30659__$1;
(statearr_30665_30696[(1)] = (5));

} else {
var statearr_30666_30697 = state_30659__$1;
(statearr_30666_30697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30660 === (15))){
var inst_30649 = (state_30659[(2)]);
var state_30659__$1 = state_30659;
var statearr_30667_30698 = state_30659__$1;
(statearr_30667_30698[(2)] = inst_30649);

(statearr_30667_30698[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30660 === (13))){
var state_30659__$1 = state_30659;
var statearr_30668_30699 = state_30659__$1;
(statearr_30668_30699[(2)] = null);

(statearr_30668_30699[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30660 === (6))){
var inst_30619 = (state_30659[(7)]);
var inst_30644 = inst_30619.length;
var inst_30645 = (inst_30644 > (0));
var state_30659__$1 = state_30659;
if(cljs.core.truth_(inst_30645)){
var statearr_30669_30700 = state_30659__$1;
(statearr_30669_30700[(1)] = (12));

} else {
var statearr_30670_30701 = state_30659__$1;
(statearr_30670_30701[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30660 === (3))){
var inst_30657 = (state_30659[(2)]);
var state_30659__$1 = state_30659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30659__$1,inst_30657);
} else {
if((state_val_30660 === (12))){
var inst_30619 = (state_30659[(7)]);
var inst_30647 = cljs.core.vec.call(null,inst_30619);
var state_30659__$1 = state_30659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30659__$1,(15),out,inst_30647);
} else {
if((state_val_30660 === (2))){
var state_30659__$1 = state_30659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30659__$1,(4),ch);
} else {
if((state_val_30660 === (11))){
var inst_30623 = (state_30659[(9)]);
var inst_30627 = (state_30659[(10)]);
var inst_30637 = (state_30659[(2)]);
var inst_30638 = [];
var inst_30639 = inst_30638.push(inst_30623);
var inst_30619 = inst_30638;
var inst_30620 = inst_30627;
var state_30659__$1 = (function (){var statearr_30671 = state_30659;
(statearr_30671[(7)] = inst_30619);

(statearr_30671[(11)] = inst_30637);

(statearr_30671[(12)] = inst_30639);

(statearr_30671[(8)] = inst_30620);

return statearr_30671;
})();
var statearr_30672_30702 = state_30659__$1;
(statearr_30672_30702[(2)] = null);

(statearr_30672_30702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30660 === (9))){
var inst_30619 = (state_30659[(7)]);
var inst_30635 = cljs.core.vec.call(null,inst_30619);
var state_30659__$1 = state_30659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30659__$1,(11),out,inst_30635);
} else {
if((state_val_30660 === (5))){
var inst_30623 = (state_30659[(9)]);
var inst_30627 = (state_30659[(10)]);
var inst_30620 = (state_30659[(8)]);
var inst_30627__$1 = f.call(null,inst_30623);
var inst_30628 = cljs.core._EQ_.call(null,inst_30627__$1,inst_30620);
var inst_30629 = cljs.core.keyword_identical_QMARK_.call(null,inst_30620,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30630 = (inst_30628) || (inst_30629);
var state_30659__$1 = (function (){var statearr_30673 = state_30659;
(statearr_30673[(10)] = inst_30627__$1);

return statearr_30673;
})();
if(cljs.core.truth_(inst_30630)){
var statearr_30674_30703 = state_30659__$1;
(statearr_30674_30703[(1)] = (8));

} else {
var statearr_30675_30704 = state_30659__$1;
(statearr_30675_30704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30660 === (14))){
var inst_30652 = (state_30659[(2)]);
var inst_30653 = cljs.core.async.close_BANG_.call(null,out);
var state_30659__$1 = (function (){var statearr_30677 = state_30659;
(statearr_30677[(13)] = inst_30652);

return statearr_30677;
})();
var statearr_30678_30705 = state_30659__$1;
(statearr_30678_30705[(2)] = inst_30653);

(statearr_30678_30705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30660 === (10))){
var inst_30642 = (state_30659[(2)]);
var state_30659__$1 = state_30659;
var statearr_30679_30706 = state_30659__$1;
(statearr_30679_30706[(2)] = inst_30642);

(statearr_30679_30706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30660 === (8))){
var inst_30619 = (state_30659[(7)]);
var inst_30623 = (state_30659[(9)]);
var inst_30627 = (state_30659[(10)]);
var inst_30632 = inst_30619.push(inst_30623);
var tmp30676 = inst_30619;
var inst_30619__$1 = tmp30676;
var inst_30620 = inst_30627;
var state_30659__$1 = (function (){var statearr_30680 = state_30659;
(statearr_30680[(7)] = inst_30619__$1);

(statearr_30680[(14)] = inst_30632);

(statearr_30680[(8)] = inst_30620);

return statearr_30680;
})();
var statearr_30681_30707 = state_30659__$1;
(statearr_30681_30707[(2)] = null);

(statearr_30681_30707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22433__auto___30693,out))
;
return ((function (switch__22368__auto__,c__22433__auto___30693,out){
return (function() {
var cljs$core$async$state_machine__22369__auto__ = null;
var cljs$core$async$state_machine__22369__auto____0 = (function (){
var statearr_30685 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30685[(0)] = cljs$core$async$state_machine__22369__auto__);

(statearr_30685[(1)] = (1));

return statearr_30685;
});
var cljs$core$async$state_machine__22369__auto____1 = (function (state_30659){
while(true){
var ret_value__22370__auto__ = (function (){try{while(true){
var result__22371__auto__ = switch__22368__auto__.call(null,state_30659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22371__auto__;
}
break;
}
}catch (e30686){if((e30686 instanceof Object)){
var ex__22372__auto__ = e30686;
var statearr_30687_30708 = state_30659;
(statearr_30687_30708[(5)] = ex__22372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30709 = state_30659;
state_30659 = G__30709;
continue;
} else {
return ret_value__22370__auto__;
}
break;
}
});
cljs$core$async$state_machine__22369__auto__ = function(state_30659){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22369__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22369__auto____1.call(this,state_30659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22369__auto____0;
cljs$core$async$state_machine__22369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22369__auto____1;
return cljs$core$async$state_machine__22369__auto__;
})()
;})(switch__22368__auto__,c__22433__auto___30693,out))
})();
var state__22435__auto__ = (function (){var statearr_30688 = f__22434__auto__.call(null);
(statearr_30688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22433__auto___30693);

return statearr_30688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22435__auto__);
});})(c__22433__auto___30693,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1472152829868