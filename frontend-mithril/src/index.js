import m, { mount } from "mithril"
import { EventList } from "./components/EventList"
import { GoalList } from "./components/GoalList"

const root = document.body

function MainComponent() {
  return {
    view: () => {
      return m("div", { "class" : ".asd"},[
        m(EventList),
        m(GoalList)
      
      ])
    }}
}

mount(root, MainComponent)