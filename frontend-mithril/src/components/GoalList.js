const m = require('mithril')
const Goal = require('../components/Goal').default

module.exports = {
  oninit: Goal.loadList,
  view: () => {
    return m('.goal-list', Goal.list.map((goal) => {
      return m('.goal-list-item', goal.title + ' ' + goal.completed)
    }))
  }
} 