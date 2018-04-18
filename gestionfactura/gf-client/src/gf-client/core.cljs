(ns ^:figwheel-always gf-client.core
  (:require
    [secretary.core :as secretary]
    [reagent.session :as session]
    [reagent.core :as reagent :refer [atom]]
    [gf-client.utils :as utils]
    [gf-client.components :as rcomp]
    [gf-client.pages :as pages]
    [gf-client.forms.factura-form :as factura]
    [gf-client.taskservice :as ts]
    [gf-client.events :as ev]
    [gf-client.forms.upload :as upload]
    [gf-client.forms.detalle-os :as det-os]
    ;[gf-client.tabs.tabs-carga-factura :as tabs]
    )
  (:require-macros [secretary.core :refer [defroute]])
  )

(enable-console-print!)

(defonce navbar-data
         {:brand "Exisoft"
          :items [
                  {:name "Login" :page :home :url "#/"}
                  {:name "Bandeja de Entrada" :page :bandejaentrada :url "#/bandeja-entrada"}
                  {:name "Detalle Orden de Servicio" :page :detalle-os :url "#/detalle-os"}
                  {:name "Upload de Archivos" :page :upload :url "#/upload"}
                  {:name "Formulario" :page :formulario-factura :url "#/formulario-factura"}
                  {:name "About" :page :about :url "#/about"}
                  ]
          }
         )

;; setup secretary
(def pages
  {:home pages/login
   :bandejaentrada pages/pagina-ordenes-servicio
   :task pages/formulario-factura;pagina-ordenes-servicio
   :about pages/about
   :formulario-factura factura/formulario-factura
   :detalle-os  det-os/detalle-os-seleccionada
   :upload upload/upload-archivos
   ;:pagina-subir-archivo upload/pagina-subir-archivo-form-war
   })


(defn page []
  [(pages (session/get :page)
          )])

(defroute "/" []
          (session/put! :page :home)
         )
(defroute "/task" []
         (session/put! :page :task)
         )
(defroute "/about" []
         (session/put! :page :about)
         )

(defroute "/formulario-factura" []
          (session/put! :page :formulario-factura)
          )

(defroute "/detalle-os" []
          (session/put! :page :detalle-os)
          )

(defroute "/upload" []
          (session/put! :page :upload)
          )

(defroute "/bandeja-entrada" []
          (session/put! :page :bandejaentrada)
          )

;(defroute "/subir-archivo" []
;          (.log js/console "route al subir-archivo")
;          (session/put! :page :pagina-subir-archivo)
;          )

;; initialize
(defn init! []
  (secretary/set-config! :prefix "#")
  (session/put! :page :home)
  (ev/initialize-event-que)
  (ev/go-logger)
  (ts/initialize-task-service)
  (utils/mount-component rcomp/navbar navbar-data "navbar")
  (utils/mount-component page nil "app")
 )

(defn on-js-reload
  "figwheel reload initialization goes here"
  [])

(init!)
