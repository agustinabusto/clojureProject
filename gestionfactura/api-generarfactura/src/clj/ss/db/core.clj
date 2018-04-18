(ns ss.db.core
  (:require
    [clojure.java.jdbc :as jdbc]
    [conman.core :as conman]
    [ss.config :refer [env]]
    [mount.core :refer [defstate]]
    [clojure.tools.logging :as log])
  (:import [java.sql
            BatchUpdateException
            PreparedStatement]))

(def pool-spec
  {:adapter               "sqlserver"
   :username              "sa"
   :password              "passw0rd"
   :database-name         "Facturacion"
   :server-name           "10.10.1.21"
   :port-number           1433
   :jdbc-url              "jdbc:sqlserver://10.10.1.21:1433;databaseName=Facturacion"
   })

(defstate ^:dynamic *db*
          :start (conman/connect! pool-spec)
          :stop (conman/disconnect! *db*))

(conman/bind-connection *db* "sql/generar-factura.sql")


(defn to-date [sql-date]
  (-> sql-date (.getTime) (java.util.Date.)))

(extend-protocol jdbc/IResultSetReadColumn
  java.sql.Date
  (result-set-read-column [v _ _] (to-date v))

  java.sql.Timestamp
  (result-set-read-column [v _ _] (to-date v)))

(extend-type java.util.Date
  jdbc/ISQLParameter
  (set-parameter [v ^PreparedStatement stmt idx]
    (.setTimestamp stmt idx (java.sql.Timestamp. (.getTime v)))))

