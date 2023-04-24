const m = require('mithril')
const GoalList = require('../components/Goal')

module.exports = {
  oninit: GoalList.loadList,
  view: () => {
    return m('p', { 'class' : 'goal-list'
    },GoalList.list.map((goal) => {
      return m('p',{
        'class': 'goal-list-item'
      }, goal.title + ' ' + goal.completed)
    }))
  }
} 