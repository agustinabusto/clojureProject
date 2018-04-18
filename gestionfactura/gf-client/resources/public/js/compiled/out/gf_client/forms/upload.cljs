(ns gf-client.forms.upload
  (:require
    [gf-client.file-upload.upload-core :as upload]
    [gf-client.api :as api]
    [secretary.core :as secretary]
   ; [clojure.java.io :as io]
    )
  )


(defn upload-archivos []
  ;[upload/home-page-upload] ; implementacion 1 y 2
  (.log js/console "1")
  (api/service-upload)
 ; (Thread/sleep 5000)
  (.log js/console "2")
  [:div {:dangerouslySetInnerHTML {:__html "\"<b>Bold!</b>\""}}]
 ; (secretary/dispatch! "/subir-archivo")
  (.log js/console "3")
 ; (if ("" =(aget @api/html-upload-page 0))
 ;   (.log js/console "vacio")
 ;   [upload/pagina-html-upload]
 ;   )
  )

(defn pagina-subir-archivo-form-war
  []
  ;[upload/pagina-html-upload]
  (.log js/console "4")
  [:div {:dangerouslySetInnerHTML {:__html "\"<b>Bold!</b>\""}}]
  )

