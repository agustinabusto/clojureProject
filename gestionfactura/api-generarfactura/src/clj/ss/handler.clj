(ns ss.handler
  (:require
            ;[compojure.core :refer [GET POST defroutes]]
            ;[compojure.route :refer [not-found resources]]
            [clojure.java.io :as io]
            [compojure.core :refer [GET POST defroutes routes wrap-routes]]
            [compojure.route :refer [not-found resources]]
            [ss.routes.services :refer [service-routes]]
            [compojure.route :as route]
            [ss.env :refer [defaults]]
            [mount.core :as mount]
            [ss.middleware :as middleware]
            [clojure.tools.logging :as log]
            [ring.middleware.cors :refer [wrap-cors]]
            [prone.middleware :refer [wrap-exceptions]]
            [cheshire.core :refer [generate-string]]
            [ss.config :refer [env]]))

(mount/defstate init-app
                :start ((or (:init defaults) identity))
                :stop  ((or (:stop defaults) identity)))

(defn init
  "init will be called once when
   app is deployed as a servlet on
   an app server such as Tomcat
   put any initialization code here"
  []
  (doseq [component (:started (mount/start))]
    (log/info component "started")))

(defn destroy
  "destroy will be called when your application
   shuts down, put any clean up code here"
  []
  (doseq [component (:stopped (mount/stop))]
    (log/info component "stopped"))
  (shutdown-agents)
  (log/info "ss has shutdown!"))

(def app-routes
     (wrap-cors (routes
                  #'service-routes
                  (route/not-found
                    "page not found")
                  )
                :access-control-allow-origin [#".*"]
                :access-control-allow-methods [:get :put :post :delete])
     )


;(def handler
;  (wrap-cors my-routes :access-control-allow-origin [#"http://example.com"]
;             :access-control-allow-methods [:get :put :post :delete]))

(def app (middleware/wrap-base #'app-routes))