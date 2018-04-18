(ns gf-client.forms.detalle-os
  (:require [gf-client.components :as comp]
            [gf-client.api :as api]
            )
  )



(defn detalle-os []
  (api/service-obtenerSolicitud 1);id-solicitud
  (comp/panel-solicitante-os "Solicitante del Servicio")

  )

(defn detalle-orden-compra []
  (comp/panel-orden-compra "Orden de Compra Asociada")
  )

(defn detalle-os-seleccionada
  []

  [:div
  [:div.row
   [:div.col-sm-10
    [detalle-os]
    [detalle-orden-compra]
    ]]]

  )
