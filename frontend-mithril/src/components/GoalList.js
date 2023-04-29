const m = require("mithril")
const Goal = {
  list: [],
  loadList: async () => {
    const result = await m.request({
      method: "GET",
      url: "http://localhost:3001/goals",
    })
    console.log(result)
    Goal.list = result
  },
}


const GoalList = {
  oninit: Goal.loadList,
  view: () => {
    return m("ul", Goal.list.map((Goal) => {
      return m("div", {
        "class": "goal-list-item"
      }, Goal.goals)
    }))
  },
} 

module.exports = { Goal, GoalList }