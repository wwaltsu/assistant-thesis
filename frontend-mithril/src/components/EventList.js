const m = require('mithril')
const EventList = require('../components/Event')

module.exports = {
  oninit: EventList.loadList,
  view: () => {
    return m('p', {
      'class': 'event-list'
    },EventList.list.map((event) => {
      return m('p', {
        'class': 'event-list-item'
      }, event.title + ' ' + event.completed)
    }))
  }
} 