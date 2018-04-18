;; OS: Ordenes de Sercicio
;; OP: Ordenes de Pago
;; OC: Ordenes de Compra
;; Fac: Facturas y DFac: Detalles de cada Fac.
(ns gf-client.components.lists-tables
  "Componentes reusables de listados de ordenes de servicio, ordenes de pago, facturas, detalles de las facturas, etc"
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require
    [reforms.table :as t]
    [reagent.core :refer [atom render-component]]
    [clojure.set :as set]
    [reforms.core :as fc]
    )
  )

(defn tabla-proveedores
  [obj-prov]

  [:h4 "Styled table"]
  [:div "See " [:a {:href "http://getbootstrap.com/css/#tables" :target "_blank"} "Bootstrap tables"]]
  (t/table {:key "styled-table" :class "table table-hover"}
           obj-prov
           :columns {:name "Nombre Proveedor" :codigo "Codigo Proveedor" :email "E-Mail" :tel "TEL" :fax "fax" :desc "Direccion" :cuentadeposito "Cuenta Deposito"}
           )

  )

(defn tabla-solicitudes
        [lista-oss]

        [:h4 "Styled table"]
        [:div "See " [:a {:href "http://getbootstrap.com/css/#tables" :target "_blank"} "Bootstrap tables"]]
        (t/table {:key "styled-table" :class "table table-condensed"}
                 lista-oss
                 :columns {:idsolicitud "Nro. Solicitud" :detalleservicio "Detalle del Servicio" :nroordenservicio "Nro. Orden de Servicio" :nroordencompra "Nro. Orden de Compra"}
                 )

        )

(defn tabla-detalle-factura
  [item-factura]

 ; [:h4 "Styled table"]
 ; [:div "See " [:a {:href "http://getbootstrap.com/css/#tables" :target "_blank"} "Bootstrap tables"]]
  (fc/group-title "Detalle cargado")
  (t/table {:key "styled-table" :class "table table-hover"}
           item-factura
           :columns {:fechafactura "Fecha" :cantidad "Cantidad"}
           )

  )