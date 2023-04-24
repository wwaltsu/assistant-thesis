const m = require("mithril")
root = document.body

const GoalList = require("./components/GoalList")
const EventList = require("./components/EventList")

function MainComponent() {
    return {
    view: function() {
        return m(".app", [
        m(GoalList),
        m(EventList)
        ])
    }}
}

m.mount(root, MainComponent)