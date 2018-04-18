(ns ss.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[ss started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[ss has shutdown successfully]=-"))
   :middleware identity})
