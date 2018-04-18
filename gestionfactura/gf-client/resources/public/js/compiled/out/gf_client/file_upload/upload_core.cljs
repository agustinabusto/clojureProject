(ns gf-client.file-upload.upload-core
  (:require-macros [enfocus.macros :as em])
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [secretary.core :as secretary :include-macros true]
            [ajax.core :refer [POST]]
    ; [goog.events :as events]
            [gf-client.api :as api]
            [goog.history.EventType :as HistoryEventType]
            [enfocus.core :as ef]
    ;--------------- Prueba
    ;  [domina :as dom]
    ;  [goog.events :as gev]
    ;  [domina.events :as ev]
            )

  (:import goog.History
           goog.net.IframeIo
           goog.net.EventType)
  )

;; -------------------------
;; Views

;(defn into-list [items]
;  (into [:ul]
;        (for [i items]
;          [:li i])))
;
;(defn set-status [class title items]
;  [:div {:class class}
;   [:h4 title]
;   (into-list items)])

;(defn status-component []
;  (if-let [status (session/get :upload-status)]
;    [:div
;     [:h3 "Estado de la subida de su Archivo"]
;     status]))
;
;(defn upload-component []
;  [:div
;   [:form {:id "upload-form"
;           :enc-type "multipart/form-data"
;           :method "POST"}
;    [:label "Archivo: "]
;    [:input {:type "file"
;             :name "upload-file"
;             :id "upload-file"}]]])

;(defn set-upload-indicator []
;  (let [class "fa fa-spinner fa-spin fa-pulse"]
;    (session/put! :upload-status [:div
;                                  [:p "Uploading file... "
;                                   [:span {:class class}]]])))


;(defn cljs-ajax-upload-file [element-id]
;  (println "Element ID de cljs-ajax "  element-id)
;
;  (let [el (.getElementById js/document element-id)
;        name (.-name el)
;        file (aget (.-files el) 0)
;        form-data (js/FormData.)]
;   (.append form-data "file" file name)
;
;   (.log js/console "cljs-ajax-upload-file " (.get form-data "upload-file"))
;   ; (api/service-upload  (.get form-data "upload-file") )
;
;    (println "Variable el " el)
;    (println "Variable Name " name)
;    (println "variable File " file)
;   ; (set-upload-indicator)
;   ))

;; --------------------------------- prueba
;(defn handle-response-ok [resp]
;  (let [rsp (js->clj resp :keywordize-keys true)
;        status (set-status "alert alert-success"
;                           "Upload Successful"
;                           [(str "Filename: " (:filename rsp))
;                            (str "Size: " (:size rsp))
;                            (str "Tempfile: " (:tempfile rsp))])]
;    (session/put! :upload-status status)))
;
;(defn handle-response-error [ctx]
;  (let [rsp (js->clj (:response ctx) :keywordize-keys true)
;        status (set-status "alert alert-danger"
;                           "Upload Failure"
;                           [(str "Status: " (:status ctx) " "
;                                 (:status-text ctx))
;                            (str (:message rsp))])]
;    (.log js/console (str "cljs-ajax error: " status))
;    (session/put! :upload-status status)))

;(defn iframe-response-ok [msg]
;  (let [status (set-status "alert alert-success"
;                           "Upload Successful"
;                           [(str "Filename: " (:filename msg))
;                            (str "Size: " (:size msg))
;                            (str "Tempfile: " (:tempfile msg))])]
;    (session/put! :upload-status status)))
;
;(defn iframe-response-error [msg]
;  (let [status (set-status "alert alert-danger"
;                           "Upload Failure"
;                           [(str "Status: " (:status msg))
;                            (str (:message msg))])]
;    (session/put! :upload-status status)))

;(defn handle-iframe-response [json-msg]
;  (let [msg (js->clj json-msg :keywordize-keys true)]
;    (.log js/console (str "iframe-response: " msg))
;    (cond
;      (= "OK" (:status msg)) (iframe-response-ok msg)
;      (= "ERROR" (:status msg)) (iframe-response-error msg)
;      :else (session/put! :upload-status [:div.alert.alert-danger
;                                          [:h4 "Unexpected Error"]
;                                          [:ul
;                                           [:li (str "Status: " (:status msg))]
;                                           [:li (:message msg)]]]))))
;
;(defn upload [form-id]
;  (let [el (.getElementById js/document form-id)
;        iframe (IframeIo.)]
;    (events/listen iframe EventType.COMPLETE
;                   (fn [event]
;                     (let [rsp (.getResponseJson iframe)
;                           status ()])
;                     (handle-iframe-response (.getResponseJson iframe))
;                     (.dispose iframe)))
;    (set-upload-indicator)
;    (.log js/console "el -------------------------------------------------------->" el)
;    (.sendFromForm iframe el "http://localhost:3001/upload" )))
;    ;(.sendFromForm iframe el "http://localhost:8080/UploadServletApp/EntryPointUploadServlet" )))

(defn pagina-html-upload
  []

  [:div {:dangerouslySetInnerHTML {:__html @api/html-upload-page}}]
  ;(let [iframe (IframeIo.)]
  ;  (events/listen iframe EventType.COMPLETE
  ;                                    (fn [event]
  ;                                      (let [rsp (.getResponseJson iframe)
  ;                                            status ()])
  ;                                      (handle-iframe-response (.getResponseJson iframe))
  ;                                      (.dispose iframe)))
  ;
  ;      ;@api/html-upload-page)
  ;
  ;)
)

(defn cljs-ajax-upload-button []
  [:div
   [:hr]
   [:button {:class "btn btn-primary" :type "button"
             ;:on-click #(cljs-ajax-upload-file "upload-file")}
             :on-click   #(api/service-upload)}
             ;:on-click #(upload "upload-form")}
    "Subir Archivos  " [:span {:class "fa fa-upload"}]]]
  ;(pagina-html-upload @api/html-upload-page)
  )


(defn home-page-upload []
  (fn []
    [:div [:h2 "Realice los Upload de los archivos necesarios para efectuar su envio de Factura"]

    ; [status-component]
    ; [upload-component]
     [cljs-ajax-upload-button]
     ]
    ))
;
;(defn about-page []
;  [:div [:h2 "About file-upload"]
;   [:div [:a {:href "#/"} "go to the home page"]]])

;(defn current-page []
;  [:div [(session/get :current-page)]])

;; -------------------------
;; Routes
;(secretary/set-config! :prefix "#")
;
;(secretary/defroute "/" []
;                    (session/put! :current-page #'home-page))
;
;(secretary/defroute "/about" []
;                    (session/put! :current-page #'about-page))

;; -------------------------
;; History
;; must be called after routes have been defined
;(defn hook-browser-navigation! []
;  (doto (History.)
;    (events/listen
;      HistoryEventType/NAVIGATE
;      (fn [event]
;        (secretary/dispatch! (.-token event))))
;    (.setEnabled true)))


;; -------------------------
;; Initialize app
;(defn mount-root []
;  (reagent/render [current-page] (.getElementById js/document "app")))
;
;(defn init! []
;  (hook-browser-navigation!)
;  (mount-root))


