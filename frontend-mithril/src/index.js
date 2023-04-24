import m, { mount } from 'mithril'
const root = document.body

import GoalList from './components/GoalList'
import EventList from './components/EventList'

function MainComponent() {
  return {
    view: () => {
      return m('.app', [
        m(GoalList),
        m(EventList)
      ])
    }}
}

mount(root, MainComponent)