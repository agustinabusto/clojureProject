(ns gf-client.api
  "pegarle al endpoint"
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   )
  (:require                                                 ;;[clojure.string :as string]
    [cljs.core.async :as async]
    [reagent.core :as reagent :refer [atom]]
    [gf-client.events :as ev]
    [reagent.session :as session]
    ;[gf-client.store.data-handler :as datahandler]
    [ajax.core :refer [GET POST]]
    )
  )

  (enable-console-print!)

  ;;;;; endpoint del orto!!
  (def host "http://localhost:3001")
  (def proveedor-person-data (atom ""))

  (def cliente-person-data (atom ""))

  (def solicitud-person-data (atom []))

  (def solicitud-seleccionada-person-data (atom ""))

  (def factura-person-data (atom ""))

  (def html-upload-page (atom ""))

  (defn error-handler [{:keys [status status-text]}]
        (.log js/console (str ":-(" status " " status-text))
        (js/alert "Error en la comunicacion con el servicio"))

(defn into-list [items]
  (into [:ul]
        (for [i items]
          [:li i])))

(defn set-status [class title items]
  [:div {:class class}
   [:h4 title]
   (into-list items)])

(defn handle-response-ok [resp]
  (.log js/console "Respuesta del Servicio " resp)
  (reset! html-upload-page resp)
  ;(let [rsp (js->clj resp :keywordize-keys true)
  ;      status (set-status "alert alert-success"
  ;                         "Upload Successful"
  ;                         [(str "Filename: " (:filename rsp))
  ;                          (str "Size: " (:size rsp))
  ;                          (str "Tempfile: " (:tempfile rsp))])]
  ;  (session/put! :upload-status status)
  ;  )
  )

(defn handle-response-error [ctx]
  (let [rsp (js->clj (:response ctx) :keywordize-keys true)
        status (set-status "alert alert-danger"
                           "Upload Failure"
                           [(str "Status: " (:status ctx) " "
                                 (:status-text ctx))
                            (str (:message rsp))])]
    (.log js/console (str "cljs-ajax error: " status))
    (session/put! :upload-status status)))

  (defn error-handler-login [{:keys [status status-text]}]
        (.log js/console (str ":-(" status " " status-text))
        (js/alert "El proveedor ingresado no esta dado de alta en el sistema. Comuniquese con @exisoft"))

  (defn cliente-data-handler
        [response]
        (.log js/console "--- Respuesta Cliente ---")
        (reset! cliente-person-data (.parse js/JSON response))
        (ev/post-event (ev/AppEvent. :new-ui-task :ui {:razonsocial    (aget @cliente-person-data "razonsocial")
                                                       :idcliente      (aget @cliente-person-data "idcliente")
                                                       :direccionlegal (aget @cliente-person-data "direccionlegal")
                                                       :cuit           (aget @cliente-person-data "cuit")
                                                       :tel            (aget @cliente-person-data "tel")
                                                       :fax            (aget @cliente-person-data "fax")
                                                       :tipopago       (aget @cliente-person-data "tipopago")
                                                       }))
        )

  (defn service-obtenerDatosCliente
        [idcliente]
        (GET (str host "/generarfactura/obtenerDatosCliente/" idcliente)
             {:params          {:idcliente idcliente}
              :handler         cliente-data-handler
              :error-handler   error-handler
              :format          :json
              :response-format :raw}))



  (defn solicitud-data-handler
        [response]
        (.log js/console " ----- Solicitud data handler por ID------ ")
        (reset! solicitud-person-data (js->clj (.parse js/JSON response) :keywordize-keys true))
    ;(mapv #(ev/post-event (ev/AppEvent. :new-ui-task :ui %)) @solicitud-person-data)

        )

  (defn solicitud-buscada-data-handler
        [response]
        (.log js/console " ----- Solicitud Seleccionada data handler por ID------ ")
        (reset! solicitud-seleccionada-person-data (js->clj (.parse js/JSON response) :keywordize-keys true))
        )


  (defn service-obtenerSolicitudesPorProveedor
        [idproveedor]
        (GET (str host "/generarfactura/obtenerSolicitudesPorProveedor/" idproveedor)
             {:params          {:idproveedor idproveedor}
              :handler         solicitud-data-handler
              :error-handler   error-handler
              :format          :json
              :response-format :raw}))

  (defn upload-file-data-handler
        [response]

    ;(reset! proveedor-person-data (.parse js/JSON response))
        )

  (defn proveedor-data-handler
        [response]
        (reset! proveedor-person-data (.parse js/JSON response))
        (ev/post-event (ev/AppEvent. :prov-ui-task :ui {:name                (aget @proveedor-person-data "nombre")
                                                        :desc                (aget @proveedor-person-data "direccionlegal")
                                                        :fax                 (aget @proveedor-person-data "fax")
                                                        :tel                 (aget @proveedor-person-data "tel")
                                                        :email               (aget @proveedor-person-data "email")
                                                        :condicionTributaria (aget @proveedor-person-data "condiciontributaria")
                                                        :cuentadeposito      (aget @proveedor-person-data "cuentadeposito")
                                                        :fechaalta           (aget @proveedor-person-data "fechaalta")
                                                        :idproveedor         (aget @proveedor-person-data "idproveedor")
                                                        :codigo              (aget @proveedor-person-data "codigo")
                                                        :fechaemision        (aget @proveedor-person-data "fechaemision")
                                                        :result              "OK"
                                                        }))
        (service-obtenerSolicitudesPorProveedor (aget @proveedor-person-data "idproveedor"))
        )

  (defn factura-data-handler
        [response]
        (.log js/console " ---- Respuesta de factura --- ")
        (reset! factura-person-data (.parse js/JSON response))
        (ev/post-event (ev/AppEvent. :new-ui-task :ui {:name                (aget @factura-person-data "nombre")
                                                       :desc                (aget @factura-person-data "direccionlegal")
                                                       :fax                 (aget @factura-person-data "fax")
                                                       :tel                 (aget @factura-person-data "tel")
                                                       :email               (aget @factura-person-data "email")
                                                       :condicionTributaria (aget @factura-person-data "condiciontributaria")
                                                       :cuentadeposito      (aget @factura-person-data "cuentadeposito")
                                                       :fechaalta           (aget @factura-person-data "fechaalta")
                                                       :idproveedor         (aget @factura-person-data "idproveedor")
                                                       :codigo              (aget @factura-person-data "codigo")
                                                       }))
        )

;(defn service-upload
;  [form-data]
;  (.log js/console "servicio upload " form-data)
;  (POST (str host "/generarfactura/upload")
;        {:body (js/FormData. form-data)
;         :params [:tempfile form-data :name form-data]
;         ;:form-params [form-data :tempfile]
;         ;:body-params [form-data :tempfile]
;         :format :json
;         :response-format :raw
;         ;:keywords? true
;         :handler handle-response-ok
;         :error-handler handle-response-error}
;        )
;  )
(defn service-upload
  []
  (.log js/console "me voy para el WAR ")
  (GET (str "http://localhost:8080/UploadServletApp/EntryPointUploadServlet")
        {:handler         handle-response-ok
         :error-handler   handle-response-error
         :format          :json
         :response-format :raw}
        )
  )


  (defn service-login
        [username password]
        (POST (str host "/generarfactura/login")
              {:params          {:username username :password password}
               :handler         proveedor-data-handler
               :error-handler   error-handler-login
               :format          :json
               :response-format :raw}))

  (defn service-obtenerDatosProveedor
        [idproveedor]
        (GET (str host "/generarfactura/obtenerDatosProveedor/" idproveedor)
             {:params          {:idproveedor idproveedor}
              :handler         proveedor-data-handler
              :error-handler   error-handler
              :format          :json
              :response-format :raw}))

  (defn service-obtenerSolicitud
        [idsolicitud]
        (GET (str host "/generarfactura/obtenerSolicitud/" idsolicitud)
             {:params          {:idsolicitud idsolicitud}
              :handler         solicitud-buscada-data-handler
              :error-handler   error-handler
              :format          :json
              :response-format :raw}))


  (defn service-guardarDatosFactura
        [tipolegal
         importeparcial
         importetotal
         tipofactura
         cae
         cai
         idproveedor
         fechafactura
         estadofactura
         tipoletrafactura
         porcentajeimpuesto
         descripcionfactura
         fechavencimientocae
         fechavencimientocai]
        (POST (str host "/generarfactura/guardarDatosFactura")
              {:params          {:tipolegal           tipolegal
                                 :importeparcial      importeparcial
                                 :importetotal        importetotal
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
                                 :fechavencimientocai fechavencimientocai}
               :handler         factura-data-handler
               :error-handler   error-handler
               :format          :json
               :response-format :raw}))
  ;;;;;;;;;;;;;
