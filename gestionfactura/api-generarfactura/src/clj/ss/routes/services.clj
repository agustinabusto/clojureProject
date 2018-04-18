(ns ss.routes.services
  (:require [ring.util.http-response :refer :all]
            [compojure.api.sweet :refer :all]
            [schema.core :as s]
            [ss.routes.api-services :as api]
            [cheshire.core :refer [generate-string]]
            [clojure.java.io :as io]
           ; [compojure.core :refer :all]
            )
  )


;; Definicion de los WS
(defapi service-routes
   {:swagger {:ui "/swagger-ui"
              :spec "/swagger.json"
              :data {:info {:version "1.0.0"
                            :title "GENERAR FACTURA API"
                            :description "Servicios expuestos de consumo de la BBDD"}
                     :produces ["application/json"],
                     ;;:consumes ["application/json"]
                     }}}

   (context "/generarfactura" []
     :tags ["generarfactura"]



     (GET "/:username" []
       :path-params [username :- String]
       :summary     "Verifica que el proveedor haya sido dado de alta previamente, en el caso afirmatico traer los datos del proveedor"
       (ok (api/get-datos-login username) ))

     (POST "/login" []
       :body-params [username :- String, password :- String]
       :summary     "Verifica que el proveedor haya sido dado de alta previamente, en el caso afirmativo traer los datos del proveedor"
       (api/get-datos-login-post username password) )

     (POST "/guardar-documento-adjunto" []
       :body-params [idFactura :- String, nombre :- String, path :- String]
       :summary     "Guarda en la BBDD por cada factura creada, la referencia al documento adjuntado por el usuario"
       (api/guardar-documentos-adjuntos idFactura nombre path) )

     ;(POST "/eliminar-documento-adjunto" []
     ;  :body-params [idFactura :- String, idFile :- String]
     ;  :summary     "Elimina en la BBDD por cada factura creada, la referencia al documento adjuntado por el usuario"
     ;  (api/eliminar-documento-adjunto idFactura idFile) )

     (GET "/obtenerDatosCliente/:idcliente" []
       :path-params [idcliente :- String]
       :summary     "Traer datos del cliente"
       (ok (api/cliente-por-id idcliente)))

     (GET "/obtenerDatosSolicitante/:id-solicitante" []
       :path-params [id-solicitante :- String]
       :summary     "Traer datos del Solicitante del servicio"
       (ok (api/solicitante-por-id id-solicitante)))

     (GET "/obtenerDatosProveedor/:idproveedor" []
       :path-params [idproveedor :- String]
       :summary     "Traer datos del proveedor segun su ID"
       (ok (api/obtener-proveedor-por-id idproveedor )))

     (GET "/obtenerSolicitud/:idsolicitud" []
       :path-params [idsolicitud :- String]
       :summary     "Traer la solicitud por ID"
       (ok (api/solicitud-por-id idsolicitud )))

     (GET "/obtenerSolicitudesPorProveedor-Gestion/:idproveedor" []
       :path-params [idproveedor :- String]
       :summary     "Traer todas las solicitudes que tiene un proveedor asignadas cuyo estado es en Gestion de ser facturables."
       (ok (api/solicitudes-proveedor-gestion idproveedor )))

     (GET "/obtenerSolicitudesPorProveedor-Listado/:idproveedor" []
       :path-params [idproveedor :- String]
       :summary     "Traer todas las solicitudes que tiene un proveedor asignadas cuyo estado es en Gestion de ser facturables."
       (ok (api/get-buscar-lista-solicitudes-proveedor idproveedor )))

     (GET "/obtenerSolicitudesPorProveedor-Aprobada/:idproveedor" []
       :path-params [idproveedor :- String]
       :summary     "Traer todas las solicitudes que tiene un proveedor asignadas cuyo estado es Aprobada."
       (ok (api/solicitudes-proveedor-aprobada idproveedor )))

     (GET "/obtenerSolicitudesPorProveedor-Rechazada/:idproveedor" []
       :path-params [idproveedor :- String]
       :summary     "Traer todas las solicitudes que tiene un proveedor asignadas cuyo estado es Rechazada."
       (ok (api/solicitudes-proveedor-rechazada idproveedor )))



     (POST "/call-bpm" []
       :body-params [idsolicitud :- String,
                     idProveedor :- String,
                     idCliente :- String,
                     usuarioLogueado :- String
                     tipoFactura :- String
                     idfactura :- Integer]
       :summary     "Llama a BPM via exposicion de WS del lado de BPM."
       (ok (api/call-bpm-instance idsolicitud idProveedor idCliente usuarioLogueado tipoFactura idfactura)))


     (GET "/obtenerSolicitudesPorProveedor-Facturables/:idproveedor" []
       :path-params [idproveedor :- String]
       :summary     "Traer todas las solicitudes que tiene un proveedor asignadas cuyo estado es Facturable."
       (ok (api/solicitudes-proveedor-facturables idproveedor )))


     (POST "/guardarDetalleFactura" []
       :body-params [ codigo :- String,
                          detalle :- String,
                          cantidad :- Integer,
                          idfactura :- Integer,
                          preciounitario :- String,
                          precioTotalCantidad :- String,
                          idDetalleDocumento :- Integer
                         ]
           :summary "Guarda el detalle de la factura enviada por el proveedor"
                        (ok (api/guardar-detalle-factura
                              codigo
                              detalle
                              cantidad
                              idfactura
                              preciounitario
                              precioTotalCantidad
                              idDetalleDocumento))
           )

     (POST "/guardarDatosFactura" []
       :body-params [tipolegal :- String,
                     importeparcial :- String ,
                     importetotal :- String,
                     tipofactura :- String,
                     cae :- String,
                     cai :- String,
                     idproveedor :- Integer,
                     fechafactura :- String,
                     estadofactura :- String,
                     tipoletrafactura :- String,
                     porcentajeimpuesto :- Integer,
                     descripcionfactura :- String,
                     fechavencimientocae :- String,
                     fechavencimientocai :- String
                     cuit :- String,
                     notas :- String
                     ]
       :summary     "Guarda la factura cargada por el proveedor."
       (ok (api/guardar-datos-factura
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
             )))
     )
   )



;; TODO @Agus Agregar parametro de autenticacion por password.
;; TODO @Agus debe retornar el registro que matchee con las claves enviadas. De lo contrario no existe el proveedor.

;(GET "/plus" []
;     :return       Long
;     :query-params [x :- Long, {y :- Long 1}]
;     :summary      "x+y with query-parameters. y defaults to 1."
;     (ok (+ x y)))

;(POST "/minus" []
;      :return      Long
;      :body-params [x :- Long, y :- Long]
;      :summary     "x-y with body-parameters."
;      (ok (- x y)))

;(GET "/times/:x/:y" []
;     :return      Long
;     :path-params [x :- Long, y :- Long]
;     :summary     "x*y with path-parameters"
;     (ok (* x y)))

;(POST "/divide" []
;      :return      Double
;      :form-params [x :- Long, y :- Long]
;      :summary     "x/y with form-parameters"
;      (ok (/ x y)))

;(GET "/power" []
;     :return      Long
;     :header-params [x :- Long, y :- Long]
;     :summary     "x^y with header-parameters"
;     (ok (long (Math/pow x y))))
