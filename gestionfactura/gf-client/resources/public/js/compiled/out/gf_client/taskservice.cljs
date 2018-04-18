(ns gf-client.taskservice
  "task service and service functions"
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [clojure.string :as string]
            [cljs.core.async :as async]
            [gf-client.events :as ev]
            [gf-client.utils :as utils]))
(enable-console-print!)
(defonce taskque (atom []))
(defonce taskque-prov (atom []))
(defonce taskque-sol (atom []))

(defn get-min-index
  "returns min index in taskque for given state, -1 if state not found"
  [state]
  (let [task-ndx (map-indexed
                  #(if (= state (:state %2))
                     %1
                     999999)
                  @taskque)
        min-ndx (apply min task-ndx)]
    (if (= 999999 min-ndx)
      -1
      min-ndx)
    )
  )

(defn find-proveedor
  "returns all tasks in queue"
  []
  ;@taskque

  (for [item-tasque @taskque]
  (do
    (if (= ":prov-ui-task" (filter :event-type @taskque))
      (do
        (println "Entre por prov-ui-task")
        (reset! @taskque-prov item-tasque)
        )
      )
    (println "NO Entro por prov-ui-task")
    )
  )
)

(defn find-all-task
  "retorna los datos del proveedor"
  []
  @taskque
  )


(defn new-task
  "adds the task to the taskque"
  [task]
  ;(println "new-task antes del conj, las task tiene : " task)
  (let [new-task (merge {:id (utils/uuid) :state :new} task)]
    (swap! taskque conj new-task)
    (ev/post-event (ev/AppEvent. :service-task-update :service new-task))))


(defn schedule-task
  "schedules next task in que"
  []
  (let [idx (get-min-index :new)]
    (when (> idx -1)
      (swap! taskque update-in [idx :state] (constantly :scheduled))
      (ev/post-event (ev/AppEvent. :service-task-update :service (get @taskque idx))))))

(defn complete-task
  "completes next task in que"
  []
  (let [idx (get-min-index :scheduled)]
    (when (> idx -1)
      (swap! taskque update-in [idx :state] (constantly :completed))
      (ev/post-event (ev/AppEvent. :service-task-update :service (get @taskque idx))))))

(defn purge-task-que
  "empties all tasks in queue"
  []
  (println "prging taskque"))

(defn reset-task-queue
  "resets tasks in que with random tasks"
  []
  (println "reset taskquee with random tasks:"))

;;; go block event handlers for services
(defn go-new-tasks
  "event handler for new task events"
  []
  (let [chan-new-task (async/chan)]
    (async/sub (ev/get-event-que) :new-ui-task chan-new-task)
    (go-loop []
      (let [v (:event-data (async/<! chan-new-task))]
        (new-task v))
      (recur))))

;;; go block event handlers for services
(defn go-new-tasks-prov
  "event handler for new task events for login (AJB)"
  []
  (let [chan-new-task (async/chan)]
    (async/sub (ev/get-event-que) :prov-ui-task chan-new-task)
    (go-loop []
             (let [v (:event-data (async/<! chan-new-task))]
               (new-task v))
             (recur))))

(defn go-update-tasks
  "event handler for update task events"
  []
  (let [chan-new-task (async/chan)]
    (async/sub (ev/get-event-que) :update-ui-task chan-new-task)
    (go-loop []
      (let [v (:event-data (async/<! chan-new-task))]
        (condp = v
          :schedule (schedule-task)
          :complete (complete-task)))
      (recur))))


(defn initialize-task-service
  "initializes task service by starting all event handlers"
  []
  (go-new-tasks)
  (go-new-tasks-prov)
  (go-update-tasks)
  ;(go-update-tasks-sol)
  )
