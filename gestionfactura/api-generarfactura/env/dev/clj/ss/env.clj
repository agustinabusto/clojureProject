(ns ss.env
  (:require [selmer.parser :as parser]
            [clojure.tools.logging :as log]
            [ss.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[ss started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[ss has shutdown successfully]=-"))
   :middleware wrap-dev})
