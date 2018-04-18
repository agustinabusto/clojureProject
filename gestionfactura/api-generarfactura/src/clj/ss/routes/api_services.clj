(ns ss.routes.api-services
  (:require
    [ss.db.core :as sdb]
    [wharf.core :refer :all]
    [ring.util.http-response :refer :all]
    [compojure.api.sweet :refer :all]
    [ss.soap.call-soap :as call-soap]

    )
  )


(defn call-bpm-instance [idsolicitud idProveedor idCliente usuarioLogueado tipoFactura idfactura]
  (let [ret (call-soap/llamar-bpm-generar-factura  idsolicitud
                                                    idProveedor
                                                    idCliente
                                                    usuarioLogueado
                                                    tipoFactura
                                                    idfactura
                                                  )]
    (if (nil? ret)
      (not-found "Error al intentar instanciar la tarea en BPM")
      (ok (transform-keys (comp underscore->lower-camel name) ret))
      )
    ) )

(defn get-datos-login-post [username password]
  (let [ret (sdb/get-buscar-proveedor-por-login-post {:username username :password password})]
    (if (nil? ret)
      (unauthorized!
        "El Usuario requerido no existe o bien las credenciales provistas son incorrectas.")
      (ok (transform-keys
            (comp underscore->lower-camel name)
            ret))
      )))

(defn get-datos-login [username]
  (transform-keys
            (comp underscore->lower-camel name)
            (sdb/get-buscar-proveedor-por-login {:username username})
            )
    )

(defn solicitudes-proveedor-gestion [idproveedor]
  (let [ret (sdb/get-buscar-solicitudes-proveedor-gestion {:idproveedor idproveedor})]
    (if (nil? ret)
      (not-found
        "No se encontraron resultados para la busqueda solicitada.")
      (ok (transform-keys (comp underscore->lower-camel name) ret))
      )
    )
 )

(defn get-buscar-lista-solicitudes-proveedor [idproveedor]
  (let [ret (sdb/get-buscar-lista-solicitudes-proveedor {:idproveedor idproveedor})]
    (if (nil? ret)
      (not-found
        "No se encontraron resultados para la busqueda solicitada.")
      (ok (transform-keys (comp underscore->lower-camel name) ret))
      )
    )
  )

(defn solicitudes-proveedor-facturables [idproveedor]
  (let [ret (sdb/get-buscar-solicitudes-proveedor-facturables {:idproveedor idproveedor})]
    (if (nil? ret)
      (not-found
        "No se encontraron resultados para la busqueda solicitada.")
      (ok (transform-keys (comp underscore->lower-camel name) ret))
      )
    )
  )

(defn solicitudes-proveedor-aprobada [idproveedor]
  (let [ret (sdb/get-buscar-solicitudes-proveedor-aprobada {:idproveedor idproveedor})]
    (if (nil? ret)
      (not-found
        "No se encontraron resultados para la busqueda solicitada.")
      (ok (transform-keys (comp underscore->lower-camel name) ret))
      )
    )
  )

(defn solicitudes-proveedor-rechazada [idproveedor]
  (let [ret (sdb/get-buscar-solicitudes-proveedor-rechazada {:idproveedor idproveedor})]
    (if (nil? ret)
      (not-found
        "No se encontraron resultados para la busqueda solicitada.")
      (ok (transform-keys (comp underscore->lower-camel name) ret))
      )
    )
  )

(defn guardar-detalle-factura[
                              codigo
                              detalle
                              cantidad
                              idfactura
                              preciounitario
                              precioTotalCantidad
                              idDetalleDocumento
                              ]
  (let [ret (sdb/post-guardar-detalle-factura {:codigo codigo
                                               :detalle detalle
                                               :cantidad cantidad
                                               :idfactura idfactura
                                               :preciounitario (bigdec preciounitario)
                                               :precioTotalCantidad (bigdec precioTotalCantidad)
                                               :idDetalleDocumento idDetalleDocumento
                                       })]
    (if (nil? ret)
      (not-found
        "No se pudo realizar la operacion de guarda el detalle de la factura.")
      (ok (transform-keys (comp underscore->lower-camel name) ret))
      )
    )

  )

(defn guardar-datos-factura [
                             tipolegal ,
                             importeparcial ,
                             importetotal ,
                             tipofactura ,
                             cae ,
                             cai ,
                             idproveedor ,
                             fechafactura ,
                             estadofactura ,
                             tipoletrafactura ,
                             porcentajeimpuesto ,
                             descripcionfactura ,
                             fechavencimientocae ,
                             fechavencimientocai,
                             cuit ,
                             notas
                             ]
  (let [ret (sdb/post-guardar-factura {

                                       :tipolegal           tipolegal
                                       :importeparcial      (bigdec importeparcial)
                                       :importetotal        (bigdec importetotal)
                                       :tipofactura         tipofactura
                                       :cae                 cae
                                       :cai                 cai
                                       :idproveedor         idproveedor
                                       :fechafactura        fechafactura
                                       :estadofactura       estadofactura
                                       :tipoletrafactura    tipoletrafactura
                                       :porcentajeimpuesto  porcentajeimpuesto
                                       :descripcionfactura  descripcionfactura
                                       :fechavencimientocae fechavencimientocae
                                       :fechavencimientocai fechavencimientocai
                                       :cuit                cuit
                                       :notas               notas
                                       })]
    (if (nil? ret)
      (not-found
        "No se pudo realizar la operacion de guarda de factura.")
      (ok (transform-keys (comp underscore->lower-camel name) ret))
      )
    )

  ;(call-bpm-instance)

  )



(defn cliente-por-id [id-cliente]
(transform-keys
            (comp underscore->lower-camel name)
            (sdb/get-obtener-cliente-por-id {:id-cliente id-cliente})
            )
          )

(defn solicitante-por-id [id-solicitante]
  (transform-keys
    (comp underscore->lower-camel name)
    (sdb/get-obtener-solicitante-por-id {:id-solicitante id-solicitante})
    )
  )

(defn solicitud-por-id [idsolicitud ]
  (let [ret (sdb/get-obtener-solicitud-por-id {:idsolicitud idsolicitud  })]
    (if (nil? ret)
      (not-found
        "No se encontraron resultados para la busqueda solicitada.")
      (ok (transform-keys (comp underscore->lower-camel name) ret))
      )
    )
)

(defn obtener-proveedor-por-id [idproveedor]
 (transform-keys
            (comp underscore->lower-camel name)
            (sdb/get-obtener-proveedor-por-id {:idproveedor idproveedor})
            )
          )

(defn guardar-documentos-adjuntos [idFactura nombre-documento path-documento]
  (transform-keys
    (comp underscore->lower-camel name)
    (sdb/guardar-documentos-adjuntos {:idFactura idFactura :nombre nombre-documento :path path-documento})
    )
  )

;(defn eliminar-documento-adjunto [idFactura idFile]
;  (transform-keys
;    (comp underscore->lower-camel name)
;    (sdb/eliminar-documentos-adjuntos {:idFactura idFactura :id-file idFile})
;    )
;  )


