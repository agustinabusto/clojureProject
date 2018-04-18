(ns gf-client.pages
  "pages built with component composition for application"
  (:require
   [gf-client.components :as rcomp]
   [gf-client.forms.factura-form :as form-factura]
   [gf-client.forms.form-login :as form-login]
   [gf-client.taskservice :as ts]
   [gf-client.api :as api]
   )
  )

(defn login []
    [:div
     ;[rcomp/page-header "Login"]
     [:div.well
      [form-login/signup-view]]
     ]
)

(defn form-test-solicitudes-proveedor
  "interface de prueba para las solicitudes por proveedor"
  []
  (let [id-proveedor (atom {:idproveedor nil})] ;; local variable for new task form
    (fn []
      [:form.form-vertical
       [:fieldset
        [:span.col-sm-2.form-group
         [:span
          [:input#taskName.form-control
           {:placeholder "ID Proveedor"
            :value (:idproveedor @id-proveedor)
            :on-change #(swap! id-proveedor assoc-in [:idproveedor] (.-target.value %))}]]]
        ]

       [:fieldset
        [:span.col-sm-2
         [:a.btn.btn-info.btn-raised
          {:on-click
           (fn [e]
             (when-let [_ (:idproveedor @id-proveedor)]
               ;(ev/post-event (ev/AppEvent. :new-ui-task :ui @task-data))
               (api/service-obtenerSolicitudesPorProveedor (:idproveedor @id-proveedor))
               (reset! id-proveedor {:idproveedor nil})))} "BUSCAR"]]
        ]
       ]

      ))
  )

(defn pagina-ordenes-servicio
  []
 ; (let [todas-os-proveedor (ts/find-proveedor)]
      [:div
       [:div.well
        [rcomp/login-panel "Datos del Proveedor "]
        ]
       [:div.row
         [:div.col-sm-10
            [rcomp/ordenes-servicio-panel "Ordenes de Servicio del Proveedor " :new  ]
         ]
        ]
       ]
  ;)
)

(defn about
  []
  [rcomp/page-header "Sistema de Gestion de Documentos para Facturación" "Desarrollada con Reagent, Clojure Script y Clojure."])

(defn bandejaentrada
  []
  [rcomp/page-header "Bandeja de entrada."])

(defn formulario-factura
  []
  [form-factura/formulario-factura]
  )