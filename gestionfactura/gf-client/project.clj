(defproject gf-client "0.1.0-SNAPSHOT"
  :description "Exisoft - Generar Factura Proveedor"
  :url "https://hub.jazz.net/git/adrian180/gestionfactura"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.107"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [com.cognitect/transit-cljs "0.8.205"]

                 [cljsjs/react "0.12.2-5"]
                 [reagent "0.5.0-alpha3"]
                 [reagent-forms "0.4.3"]
                 [reagent-utils "0.1.2"]
                 [cljs-ajax "0.5.8"]
                 [secretary "1.2.1"]
                 [cljsjs/firebase "2.1.2-1"]
                 [sunog "0.0.4" :exclusions [org.apache.httpcomponents/httpclient]]
                 [reagent-reforms "0.4.3"]
                 [com.andrewmcveigh/cljs-time "0.3.14"]
                 [compojure "1.5.0"]
                 [ring/ring-servlet "1.4.0"]
                 [ring-webjars "0.1.1"]
                 [ring/ring-defaults "0.2.0"]
                 [ring-middleware-format "0.7.0"]
                 [ring-cors "0.1.8"]
                 [mount "0.1.10"]
                 [ring "1.3.2"]
                 [enfocus "1.0.1"]
                 [prone "0.8.0"]
                 [selmer "0.8.0"]
                 [environ "1.0.0"]
                 [domina "1.0.3"]
                 ;[re-com "0.8.3"]
                 ;[alandipert/storage-atom         "1.2.4" ]
                 ]

  :plugins [[lein-cljsbuild "1.0.5"]
            [lein-figwheel "0.3.1"]]

  :source-paths ["src"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]
  
  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src"]

              :figwheel { :on-jsload "gf-client.core/on-js-reload" }

              :compiler {:main gf-client.core
                         :asset-path "js/compiled/out"
                         :output-to "resources/public/js/compiled/gf-client.js"
                         :output-dir "resources/public/js/compiled/out"
                         :closure-defines {"goog.DEBUG" false}
                         :source-map-timestamp true }}
             {:id "min"
              :source-paths ["src"]
              :compiler {:output-to "resources/public/js/compiled/gf-client.js"
                         :main gf-client.core
                         :optimizations :advanced
                         :pretty-print false}}]}

  :figwheel {
             ;; :http-server-root "public" ;; default and assumes "resources" 
             ;; :server-port 3449 ;; default
             :css-dirs ["resources/public/css"] ;; watch and update CSS

             ;; Start an nREPL server into the running figwheel process
              :nrepl-port 7888

             ;; Server Ring Handler (optional)
             ;; if you want to embed a ring handler into the figwheel http-kit
             ;; server, this is for simple ring servers, if this
             ;; doesn't work for you just run your own server :)
             ;; :ring-handler hello_world.server/handler

             ;; To be able to open files in your editor from the heads up display
             ;; you will need to put a script on your path.
             ;; that script will have to take a file path and a line number
             ;; ie. in  ~/bin/myfile-opener
             ;; #! /bin/sh
             ;; emacsclient -n +$2 $1
             ;;
             ;; :open-file-command "myfile-opener"

             ;; if you want to disable the REPL
             ;; :repl false

             ;; to configure a different figwheel logfile path
             ;; :server-logfile "tmp/logs/figwheel-logfile.log" 
             })
