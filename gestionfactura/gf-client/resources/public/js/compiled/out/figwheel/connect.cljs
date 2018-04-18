(ns figwheel.connect (:require [figwheel.client] [gf-client.core]))
(figwheel.client/start {:on-jsload gf-client.core/on-js-reload, :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

