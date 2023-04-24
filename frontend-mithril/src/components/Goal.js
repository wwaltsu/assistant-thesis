import { request } from 'mithril'

const Goal = {
  list: [],
  loadList: async () => {
    const result = await request({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/todos',
      withCredentials: true,
    })
    console.log(result)
    Goal.list = result
  },
}

export default Goal