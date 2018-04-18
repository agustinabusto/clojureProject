(ns gf-client.forms.factura-form
  "Formulario para la carga de factura y su detalle"
  (:require [reforms.reagent :include-macros true :as f]
            [reforms.validation :as v :include-macros true]
            [reagent.core :refer [atom render-component]]
            [reforms.core :as fc]
            ;[clojure.string :as str]
            [gf-client.api :as api]
            [gf-client.components.lists-tables :as tabla]
            ;[gf-client.events :as ev]
            )
            )


(def factura (atom {:cuit "" :type-clase-factura "" :type-impuesto "" :tipo-factura "" :cae "" :fecha-vencimiento-CAE "" :cai "" :fecha-vencimiento-CAI ""}))
(def detalle-factura (atom {:cantidad 0 :codigo "" :detalle "" :precioUnitario 0 }))
;(def listado-detalle-factura (atom []))
;(def notas-factura (atom {:type :private}))
(def ui-state (atom {})) ;para la validacion de los datos

(def validar-factura
  "Aca se deben definir los mensajes correspondientes a las validaciones realizadas sobre los campos del formulario"
[(v/present [:tipo-factura] "Debe seleccionar el tipo de factura que va a procesar.")
 (v/present [:cuit] "Debe ingresar el numero de CUIT para poder continuar")
 (v/present [:type-clase-factura] "Debera seleccionar el Tipo de Factura.")
 (v/present [:type-impuesto] "Debe indicar el % del impuesto.")
 (v/present [:cae] "Indique el CAE")
 (v/present [:fecha-vencimiento-CAE] "Indique la fecha de vencimiento del CAE Informado.")
 (v/present [:cai] "Indique el CAI")
 (v/present [:fecha-vencimiento-CAI] "Indique la fecha de vencimiento del CAI Informado.")
 ]
  )

(def validar-detalle-factura
  "Aca se deben definir los mensajes correspondientes a las validaciones realizadas sobre los campos del formulario"
  [(v/present [:cantidad] "Debe ingresar la cantidad de unidades a facturar")
   (v/present [:codigo] "Debera ingresar el codigo del item a facturar.")
   (v/present [:detalle] "Debera ingresar el detalle del item a facturar.")
   (v/present [:precioUnitario] "Debera ingresar el importe por unidad del item cargado")
   ]
  )

(defn enviar-formulario!
  [factura detalle-factura ui-state]

  (when (apply v/validate! factura  ui-state validar-factura)
         (swap! factura (fn [xs1] (conj xs1 factura)))
         (js/alert "CUIT -->"(:cuit factura))
         ;(api/service-guardarDatosFactura (:tipo-factura factura) (:cuit factura) (:type-clase-factura factura) (:type-impuesto factura) (:cae factura) (:fecha-vencimiento-CAE factura) (:cai factura) (:fecha-vencimiento-CAI factura))
         )

  (when (apply v/validate! detalle-factura  ui-state validar-detalle-factura)
        (swap! detalle-factura (fn [xs2] (conj xs2 detalle-factura)))
        (js/alert "CODIGO -->"(:codigo detalle-factura))
        ;(api/service-guardarDatosDetalleFactura (:cantidad detalle-factura) (:codigo detalle-factura) (:detalle detalle-factura) (:preciounitario detalle-factura) (:totalConcepto detalle-factura))
    )
)


(defn error-submit!
  [factura ui-state]
  (v/validate!
    factura
    ui-state
    (v/force-error [:server-error] "Ocurrio un error, por favor vuelva a itentarlo"))
  )

(defn datos-header-factura
  [factura]

    (fc/panel "Datos de la Factura"
              [:div.col-md-5
              (v/select "Canal de Factura" factura [:tipo-factura]
                        [[:electronica "ELECTRONICA"] [:fisica "FISICA"]])
               (v/text "CUIT" factura [:cuit] :placeholder "Ingrese su numero de CUIT")
               (v/select "Factura Tipo " factura [:type-clase-factura]
                         [[:factura-A "A"]
                          [:factura-B "B"]
                          [:factura-C "C"]
                          [:factura-NC "Nota de Credito"]
                          [:factura-ND "Nota de Debito"]
                          ]
                         )
               (v/select "Impuesto a Aplicar" factura [:type-impuesto]
                         [[:impuesto-21 "21 %"]
                          [:impuesto-15 "15 %"]
                          [:impuesto-10 "10 %"]
                          ]
                         )
               ]
              [:div.col-md-5
                ;TODO Agus: buscar la forma de usar validator para este grupo de validaciones.
                (v/text "CAE" factura [:cae] :placeholder "Ingrese su numero de CAE")
                (v/date "Fecha de Vencimiento CAE" factura [:fecha-vencimiento-CAE] :placeholder "Fecha de vencimiento de su CAE")
                (v/text "CAI" factura [:cai] :placeholder "Ingrese su numero de CAI")
                (v/date "Fecha de Vencimiento CAI" factura [:fecha-vencimiento-CAI] :placeholder "Fecha de vencimiento de su CAI")
               ]
              )
  )

(defn agregar!
  [detalle-factura]
  (js/alert @detalle-factura)
  )


(defn datos-detalle-factura
  [detalle-factura]

      (fc/panel "Detalle de la Factura"
                [:div.col-md-1
                (v/number "Cantidad" detalle-factura [:cantidad] :placeholder "#")
                 ]
                [:div.col-md-2
                (v/text "Codigo" detalle-factura [:codigo] :placeholder "Codigo")
                 ]
                [:div.col-md-3
                (v/text "Detalle" detalle-factura [:detalle] :placeholder "Concepto")
                 ]
                [:div.col-md-2
                (v/number "Precio Unitario" detalle-factura [:precioUnitario] "Precio Unitario")
                 ]
                [:div.col-md-2
                (v/number "Total" detalle-factura [:totalConcepto] "Precio Total por Concepto")
                 ]
                (fc/form-buttons
                  (fc/button-primary {:class "btn btn-info" } "Agregar Detalle" #(agregar! detalle-factura))
                  )
      )
  )


(defn montos-factura
  [factura]

      (fc/panel "Monto de la Factura"
                [:div.col-md-5
                 (v/number "Importe Total Sin Impuesto" factura [:total-siva] "Monto Sin IVA")
                 ]
                [:div.col-md-5
                 (v/number "Importe Total Con Impuesto" factura [:total-civa] "Monto Con IVA")
                 ]
                )
  )

(defn seccion-notas-factura
  [factura]

  (fc/panel "Notas Asociadas"
            (fc/textarea factura [:notas] "Notas de la Factura")
            )
  )

(defn formulario-factura
  []

  (fc/panel "Formulario para Carga de Factura"
                      (v/form ui-state {:on-submit #(enviar-formulario! factura detalle-factura ui-state)}
                              (datos-header-factura factura)
                              (datos-detalle-factura detalle-factura)
                              ;(tabla/tabla-detalle-factura @detalle-factura)
                              (montos-factura factura)
                              (seccion-notas-factura factura)

                              (fc/button-primary {:class "btn btn-info" :align "center"} "ENVIAR FACTURA" #(enviar-formulario! factura detalle-factura ui-state))
                      )
    )
  )