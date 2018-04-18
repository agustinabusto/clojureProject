(defproject api-generarfactura "0.1.2"

  :description "FIXME: write description"
  :url "http://example.com/FIXME"

  :dependencies [[luminus/ring-ttl-session "0.3.1"]
                 [luminus-log4j "0.1.3"]
                 [org.clojure/clojure "1.8.0"]
                 [selmer "1.0.4"]
                 [markdown-clj "0.9.89"]
                 [ring-middleware-format "0.7.0"]
                 [metosin/ring-http-response "0.6.5"]
                 [bouncer "1.0.0"]
                 [org.webjars/bootstrap "4.0.0-alpha.2"]
                 [org.webjars/font-awesome "4.6.2"]
                 [org.webjars.bower/tether "1.3.2"]
                 [org.webjars/jquery "2.2.3"]
                 [org.clojure/tools.logging "0.3.1"]
                 [compojure "1.5.0"]
                 [ring/ring-servlet "1.4.0"]
                 [ring-webjars "0.1.1"]
                 [ring/ring-defaults "0.2.0"]
                 [ring-middleware-format "0.7.0"]
                 [ring-cors "0.1.8"]
                 [mount "0.1.10"]
                 [cprop "0.1.7"]
                 [org.clojure/tools.cli "0.3.5"]
                 [luminus-nrepl "0.1.4"]
                 [luminus-migrations "0.1.4"]
                 [conman "0.5.4"]
                 [com.microsoft.sqlserver/sqljdbc4 "4.0"]
                 [metosin/compojure-api "1.1.0"]
                 [thinktopic/wharf "0.2.0"]
                 [prone "0.8.2"]
                 [cheshire "5.5.0"]
                 [clj-time "0.12.0"]
                 [org.clojars.jaimeagudo/clj-soap "0.2.5"]

                 ]

  :min-lein-version "2.0.0"

  :jvm-opts ["-server" "-Dconf=.lein-env"]
  :source-paths ["src/clj"]
  :resource-paths ["resources"]

  :main ss.core
  :migratus {:store :database :db ~(get (System/getenv) "DATABASE_URL")}

  :plugins [[lein-cprop "1.0.1"]
            [migratus-lein "0.3.0"]
            [lein-uberwar "0.2.0"]]
  :uberwar
  {:handler ss.handler/app
   :init ss.handler/init
   :destroy ss.handler/destroy
   :name "api-generarfactura.war"}
  
  :target-path "target/%s/"
  :profiles
  {:uberjar {:omit-source true
             
             :aot :all
             :uberjar-name "api-generarfactura.jar"
             :source-paths ["env/prod/clj"]
             :resource-paths ["env/prod/resources"]}
   :dev           [:project/dev :profiles/dev]
   :test          [:project/test :profiles/test]
   :project/dev  {:dependencies [[prone "1.1.1"]
                                 [ring/ring-mock "0.3.0"]
                                 [ring/ring-devel "1.4.0"]
                                 [org.webjars/webjars-locator-jboss-vfs "0.1.0"]
                                 [luminus-immutant "0.2.0"]
                                 [pjstadig/humane-test-output "0.8.0"]
                                 [directory-naming/naming-java "0.8"]]
                  :plugins      [[com.jakemccrary/lein-test-refresh "0.14.0"]]
                  
                  
                  :source-paths ["env/dev/clj" "test/clj"]
                  :resource-paths ["env/dev/resources"]
                  :repl-options {:init-ns user}
                  :injections [(require 'pjstadig.humane-test-output)
                               (pjstadig.humane-test-output/activate!)]}
   :project/test {:resource-paths ["env/dev/resources" "env/test/resources"]}
   :profiles/dev {}
   :profiles/test {}})
