{:profiles/dev  {:env
                 {"dataSource.adapter"  "mysql"
                  "dataSource.username" "root"
                  "dataSource.password" "root"
                  "dataSource.schema"   "sigrhu"
                  "dataSource.host"     "localhost"
                  "dataSource.port"     5900
                  "dataSource.url"      "jdbc:mysql://localhost:3306/sigrhu?user=root&password=root"
                  }}
 :profiles/test {:env
                 {"dataSource.adapter"  "mysql"
                  "dataSource.username" "root"
                  "dataSource.password" "root"
                  "dataSource.schema"   "sigrhu"
                  "dataSource.host"     "10.13.3.68"
                  "dataSource.port"     5900
                  "dataSource.url"      "jdbc:mysql://10.13.3.68:3306/sigrhu?user=root&password=root"}
                  }}


;{:profiles/dev  {:env
;                 {:adapter              "mysql"
;                  :dataSource.username "root"
;                  :dataSource.passwor "root"
;                  :dataSource.schema   "sigrhu"
;                  :dataSource.host    "localhost"
;                  :dataSource.port     3306
;                  :database-url         "jdbc:mysql://localhost:3306/sigrhu?user=root&password=root"
;                  }}
; :profiles/test {:env
;                 {:adapter              "mysql"
;                  :dataSource.username "root"
;                  :dataSource.password "root"
;                  :dataSource.schema  "sigrhu"
;                  :dataSource.host     "10.13.3.68"
;                  :dataSource.port     3306
;                  :database-url         "jdbc:mysql://10.13.3.68:3306/sigrhu?user=root&password=root"}
;                 }}