;;;; reusable components
;;;; page-header - jumbotron panel for page header
;;;; navbar - navbar components that displays a brand and a list of menu items
;;;; task - displays a task name in a well
;;;; task panel - self updating panel that displays tasks in an input state
;;;; task form - form to enter new tasks and act on tasks
(ns gf-client.components
  "reusable components for demo"
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require
    [cljs.core.async :as async]
    [secretary.core :as secretary]
    [reagent.session :as session]
    [reagent.core :as reagent :refer [atom]]
    [gf-client.events :as ev]
    [gf-client.utils :as utils]
    [gf-client.api :as api]
    [reforms.reagent :include-macros true :as f]
    [reforms.table :as t]
    [reagent.core :refer [atom render-component]]
    [clojure.set :as set]
    [gf-client.taskservice :as ts]
    [reforms.core :as fc]
    [cljs.pprint :as pprint]
    [gf-client.components.lists-tables :as tabla]
    )
  )

(defn page-header
  [title message]
  [:div.jumbotron
   [:h4 title]
   [:p message]]
  )

(defn inspect
  [data]
  (with-out-str (pprint/pprint data)))

(defn inspector-view
  [data & [path]]
  [:pre.inspector {:key "inspector-view"}
   (inspect (get-in @data path))])

(defn navbar
  "generates a navbar given a map with :brand :items list with each item having a :label and :url"
  [props]
  ;; use parameter destructuring
  (let [brand (:brand props)
        items (:items props)]
    [:div.navbar.navbar-inverse.navbar-default
     [:div.container
      [:div.navbar-header
       [:a.navbar-brand {:href "#/"} brand]]
      [:div.navbar-collapse.collapse
       [:ul.nav.navbar-nav
        (doall
         (for [nav-item items]
                  [:li {
                        :key (utils/uuid)
                        :class (when (= (:page nav-item) (session/get :page)) "active")
                        }
                   [:a {:on-click #(secretary/dispatch! (:url nav-item))} (:name nav-item)]
                   ]
          )
         )]]]])  )

(defn go-task-update
  "subscribes to state channel and updates ref-list with new items and deletes old items"
  [state ref-list]
  (let [chan-data (async/chan)]
    (async/sub (ev/get-event-que) :service-task-update chan-data)
    (go-loop []
             (let [new-task (:event-data (async/<! chan-data))
                   next-task (first @ref-list)]
               (cond
                 (= state (:state new-task)) (swap! ref-list conj new-task)
                 (and (not (nil? next-task))
                      (= (:id new-task) (:id next-task))) (reset! ref-list (subvec @ref-list 1))))
             (recur))))

(defn ordenes-servicio-panel
  "Muestra las ordenes de servicio en un panel"
  [name state]
  (let [cname (condp = state
                :new "panel-info"
                :scheduled "panel-warning"
                :completed "panel-success")
        ]
    (fn []
      [:div {:class (str "panel " cname)}
       [:div.panel-heading
        [:h3.panel-title name ]][:span.badge " " (count @api/solicitud-person-data)]]
       [:div.panel-body
       (if (empty? @api/solicitud-person-data)
           (str {:fax "No existen Ordenes de Servicio para el proveedor."})
           (tabla/tabla-solicitudes @api/solicitud-person-data)
         )
        ])))



(defn cliente
  "muestra lso datos del cliente"
  [item]
  [:div {:class "well animated shake"}
   ;TODO ver los atributos que le corresponden al cliente
   (str (:fax item) " " (:email item) " " (:tel item) " " (:codigo item))
   ]
  )

(defn proveedor
  "muestra lo datos del proveedor"
  [item]
  (fn []
      [:div {:class "well"}
       (if (empty? @item)
         (do
           (str "No hay datos para el proveedor logueado."))
         (do
           [:div.row
              [:div.col-sm-6
               "Proveedor : " (aget item "nombre")]
              [:div.col-sm-6
               "TEL : " (aget item "tel")]
              [:div.col-sm-6
               "Condicion Tributaria : " (aget item "condiciontributaria")]
              [:div.col-sm-6
               "Direccion : " (aget item "direccionlegal")]

             [:div.col-sm-6
              "E-mail : " (aget item "email")]
             [:div.col-sm-6
              "Cuenta Deposito : " (aget item "cuentadeposito")]
             [:div.col-sm-6
              "Fecha Alta : " (aget item "fechaalta")]
              [:div.col-sm-6
               "Codigo : " (aget item "codigo")]
            ]
           )
         )
       ]
    )

    )


;; span.badge number
(defn login-panel
  "Muestra los datos del Proveedor que hizo login"
  [name]
  ;(let [task-list (atom init-task-list)]
    ;(go-task-update :new task-list)
    (fn [] 
      [:div {:class (str "panel " "panel-info")}
       [:div.panel-heading 
        [:h3.panel-title name]]; [:span.badge " " (count @task-list)]]]
       [:div.panel-body
        ;(proveedor (first @task-list))
        (if (empty? (aget @api/proveedor-person-data "nombre"))
          [:div.row
           [:div.col-sm-6
            "No se encontraron datos para el proveedor indicado"
           ] ]
          ;(str "No se encontraron datos para el proveedor")
            ;(proveedor @api/proveedor-person-data)
            [:div.row
             [:div.col-sm-6
              "Proveedor : " (aget @api/proveedor-person-data "nombre")]
             [:div.col-sm-6
              "TEL : " (aget @api/proveedor-person-data "tel")]
             [:div.col-sm-6
              "Condicion Tributaria : " (aget @api/proveedor-person-data "condiciontributaria")]
             [:div.col-sm-6
              "Direccion : " (aget @api/proveedor-person-data "direccionlegal")]

             [:div.col-sm-6
              "E-mail : " (aget @api/proveedor-person-data "email")]
             [:div.col-sm-6
              "Cuenta Deposito : " (aget @api/proveedor-person-data "cuentadeposito")]
             [:div.col-sm-6
              "Fecha Alta : " (aget @api/proveedor-person-data "fechaalta")]
             [:div.col-sm-6
              "Codigo : " (aget @api/proveedor-person-data "codigo")]
             ]
        )
        ]
       ]
      )
  )

(defn datos-cliente-panel
  "Panel de los datos del cliente"
[name state init-datos-cliente]
(let [cname (condp = state
              :new "panel-info"
              :scheduled "panel-warning"
              :completed "panel-success")
      datos-cliente (atom init-datos-cliente)]
  (go-task-update state datos-cliente)
  (fn []
    [:div {:class (str "panel " cname)}
     [:div.panel-heading
      [:h3.panel-title name [:span.badge]]]
     [:div.panel-body
      (if (empty? @datos-cliente)
        [cliente {:name "No existe el cliente"}]
        (for [t @datos-cliente]
          ^{:key (:id t)} [cliente t]))]])))



(defn login-usuario
  "new task form"
  []
  (let [task-data (atom {:name nil :desc nil})] ;; local variable for new task form
    (fn []
      [:form.form-vertical
       [:fieldset
        [:span.col-sm-2.form-group
         [:span
          [:input#taskName.form-control
           {:placeholder "Usuario"
            :value (:name @task-data)
            :on-change #(swap! task-data assoc-in [:name] (.-target.value %))}]]]
        ]
        [:fieldset
        [:span.col-sm-2.form-group
         [:span
          [:input#taskDesc.form-control
           {:placeholder "Password"
            :value (:desc @task-data)
            :on-change #(swap! task-data assoc-in [:desc] (.-target.value %))}]]]
        ]
        [:fieldset
        [:span.col-sm-2
         [:a.btn.btn-info.btn-raised
          {:on-click
           (fn [e]
             (when-let [_ (:name @task-data)]
               ;(ev/post-event (ev/AppEvent. :new-ui-task :ui @task-data))
               (api/service-login (:name @task-data) (:desc @task-data))
               (reset! task-data {:name nil :desc nil}))
               (secretary/dispatch! "/bandejaentrada")
             )
           } "INICIAR SESION"]]
        ]
       ]

     )))

(defn panel-solicitante-os
  [name]
  (fn []
    [:div {:class (str "panel " "panel-info")}
     [:div.panel-heading
      [:h3.panel-title name]]; [:span.badge " " (count @task-list)]]]
     [:div.panel-body
      (if (empty? @api/solicitud-seleccionada-person-data )
        (do
        [:div.row
         [:div.col-sm-6
          "La orden de Servicio Seleccionada no posee informacion disponible."]])
        (do
        [:div.row
         [:div.col-sm-6
          "Nombre y Apellido : " (get @api/solicitud-seleccionada-person-data :nombreapellido)]
         [:div.col-sm-6
          "Lugar de Entrega : " (get @api/solicitud-seleccionada-person-data :lugarentrega)]
         [:div.col-sm-6
          "Fecha de Solicitud : " (get @api/solicitud-seleccionada-person-data :fechaemision)]
         [:div.col-sm-6
          "Fecha de Entrega : " (get @api/solicitud-seleccionada-person-data :fechaentrega)]
         ])
        )
      ]]))

(defn panel-orden-compra
  [name]
  (fn []
    [:div {:class (str "panel " "panel-info")}
     [:div.panel-heading
      [:h3.panel-title name]]; [:span.badge " " (count @task-list)]]]
     [:div.panel-body
      (if (empty? @api/solicitud-seleccionada-person-data)
        (do
          [:div.row
           [:div.col-sm-6
            "La orden de Servicio Seleccionada no posee informacion disponible."]]
          )
        (do
          [:div
          [:div.row
           [:div.col-sm-6
            "Nro. de Orden de Compra : " (get @api/solicitud-seleccionada-person-data :nroordencompra)]
           [:div.col-sm-6
            "Fecha de Emision : " (get @api/solicitud-seleccionada-person-data :fechaemision)]
           [:div.col-sm-6
            "Cantidad : " (get @api/solicitud-seleccionada-person-data :cantidad)]
           [:div.col-sm-6
            "Precio por Unidad $ " (get @api/solicitud-seleccionada-person-data :preciounitario)]
           ]
          [:div.row
           [:div.col-sm-6
            "Importe $ " (get @api/solicitud-seleccionada-person-data :importe)]
           [:div.col-sm-6
            "Total Orden de Compra $ " (get @api/solicitud-seleccionada-person-data :totaloc)]
           [:div.col-sm-6
            "Total Sin Impuesto $ " (get @api/solicitud-seleccionada-person-data :netosiva)]
           [:div.col-sm-6
            "Total Con Impuesto $ " (get @api/solicitud-seleccionada-person-data :totalciva)]
           ]
           ]
          )
        )
      ]]))