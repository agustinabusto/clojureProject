(ns user
  (:require [mount.core :as mount]
            ss.core))

(defn start []
  (mount/start-without #'ss.core/repl-server))

(defn stop []
  (mount/stop-except #'ss.core/repl-server))

(defn restart []
  (stop)
  (start))


