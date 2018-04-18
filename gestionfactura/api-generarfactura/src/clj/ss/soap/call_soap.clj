(ns ss.soap.call-soap
 (:require [clj-soap.core :as soap] )
 ;(require '[clj-soap.core :as soap])
     )

(defn llamar-bpm-generar-factura [idsolicitud idProveedor idCliente usuarioLogueado tipoFactura idfactura]
  ;(require '[clj-soap.core :as soap])
  (let [client (soap/client-fn "http://10.10.1.137:9080/teamworks/webservices/ERF/WSRegFact.tws?WSDL")]
       (client :RegistrarFactura idsolicitud idProveedor idCliente usuarioLogueado tipoFactura idfactura)
       )
  )


