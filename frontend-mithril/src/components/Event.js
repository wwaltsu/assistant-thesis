const m = require('mithril')

const Event = {
  list: [],
  loadList: async () => {
    const result = await m.request({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/todos',
      withCredentials: true,
    })
    console.log(result)
    Event.list = result
  },
}

module.exports = Event