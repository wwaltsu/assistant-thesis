const m = require('mithril')

const Goal = {
  list: [],
  loadList: async () => {
    const result = await m.request({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/todos',
      withCredentials: true,
    })
    console.log(result)
    Goal.list = result
  },
}

module.exports = Goal