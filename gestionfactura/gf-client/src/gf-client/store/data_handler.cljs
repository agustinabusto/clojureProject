(ns gf-client.store.data-handler
     (:require
               [clojure.string :as string]
               [gf-client.events :as ev]
               [goog.events :as events]
               ;[gf-client.api :as api]
               [reagent.core :as reagent :refer [atom]]
               )
    (:import [goog.net XhrIo]
              goog.net.EventType
              [goog.events EventType]
             )
)

(def proveedor-person-data (atom ""))
(def cliente-person-data (atom ""))
(def solicitud-person-data (atom []))
(def factura-person-data (atom ""))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str ":-(" status " " status-text))
  (js/alert "Usuario no autorizado"))

(defn proveedor-data-handler
  [response]
  (.log js/console " -- Respuesta Proveedor ---")
  (reset! proveedor-person-data (.parse js/JSON response))
  (ev/post-event (ev/AppEvent. :new-ui-task :ui {:name (aget @proveedor-person-data "nombre")
                                                 :desc (aget @proveedor-person-data "direccionlegal")
                                                 :fax  (aget @proveedor-person-data "fax")
                                                 :tel  (aget @proveedor-person-data "tel")
                                                 :email (aget @proveedor-person-data "email")
                                                 :condicionTributaria (aget @proveedor-person-data "condiciontributaria")
                                                 :cuentadeposito (aget @proveedor-person-data "cuentadeposito")
                                                 :fechaalta (aget @proveedor-person-data "fechaalta")
                                                 :idproveedor (aget @proveedor-person-data "idproveedor")
                                                 :codigo (aget @proveedor-person-data "codigo")
                                                 :fechaemision (aget @proveedor-person-data "fechaemision")
                                                 }))
  ;(send-action! (get-in @person-data [:legajo :apellido])))
  ;(send-action! response)
  )

(defn cliente-data-handler
  [response]
  (.log js/console "--- Respuesta Cliente ---")
  (reset! cliente-person-data (.parse js/JSON response))
  (ev/post-event (ev/AppEvent. :new-ui-task :ui {:razonsocial (aget @cliente-person-data "razonsocial")
                                                 :idcliente (aget @cliente-person-data "idcliente")
                                                 :direccionlegal  (aget @cliente-person-data "direccionlegal")
                                                 :cuit  (aget @cliente-person-data "cuit")
                                                 :tel (aget @cliente-person-data "tel")
                                                 :fax (aget @cliente-person-data "fax")
                                                 :tipopago (aget @cliente-person-data "tipopago")
                                                 }))
  )

;(defn solicitud-data-handler
;  [response]
;  (.log js/console "Solicitud data handler de respuesta ... ")
;  (reset! solicitud-person-data (.parse js/JSON response))
;  (ev/post-event (ev/AppEvent. :new-ui-task :ui {:fechaemision (aget @solicitud-person-data "fechaemision")
;                                                 :preciounitario (aget @solicitud-person-data "preciounitario")
;                                                 :totaloc  (aget @solicitud-person-data "totaloc")
;                                                 :fechainicio  (aget @solicitud-person-data "fechainicio")
;                                                 :idordenservicio (aget @solicitud-person-data "idordenservicio")
;                                                 :cantidad (aget @solicitud-person-data "cantidad")
;                                                 :netosiva (aget @solicitud-person-data "netosiva")
;                                                 :fechaentrega (aget @solicitud-person-data "fechaentrega")
;                                                 :nroordencompra (aget @solicitud-person-data "nroordencompra")
;                                                 :nombreapellido (aget @solicitud-person-data "nombreapellido")
;                                                 :totalciva (aget @solicitud-person-data "totalciva")
;                                                 :nrosolicitud (aget @solicitud-person-data "nrosolicitud")
;                                                 :lugarentrega (aget @solicitud-person-data "lugarentrega")
;                                                 :importe (aget @solicitud-person-data "importe")
;                                                 :codigo (aget @solicitud-person-data "codigo")
;                                                 :idsolicitud (aget @solicitud-person-data "idsolicitud")
;                                                 }))
;  )



(defn solicitud-data-handler
  [response]
  (.log js/console "Solicitud data handler de respuesta ... ")
  (reset! solicitud-person-data (js->clj response :keywordize-keys true))
  (.log js/console "js->clj --> " @solicitud-person-data "<---")
  ;(reset! solicitud-person-data (.parse js/JSON response))
  ;(ev/post-event (ev/AppEvent. :new-ui-task :ui @solicitud-person-data))
  )

(defn factura-data-handler
  [response]
  (.log js/console "Solicitud data handler de respuesta ... ")
  (reset! factura-person-data (.parse js/JSON response))
  (ev/post-event (ev/AppEvent. :new-ui-task :ui {:name (aget @factura-person-data "nombre")
                                                 :desc (aget @factura-person-data "direccionlegal")
                                                 :fax  (aget @factura-person-data "fax")
                                                 :tel  (aget @factura-person-data "tel")
                                                 :email (aget @factura-person-data "email")
                                                 :condicionTributaria (aget @factura-person-data "condiciontributaria")
                                                 :cuentadeposito (aget @factura-person-data "cuentadeposito")
                                                 :fechaalta (aget @factura-person-data "fechaalta")
                                                 :idproveedor (aget @factura-person-data "idproveedor")
                                                 :codigo (aget @factura-person-data "codigo")
                                                 }))
  )