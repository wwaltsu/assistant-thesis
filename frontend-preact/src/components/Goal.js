import { useState } from "react"
import Axios from "axios"
import "./goal.css"

function Goal() {
  const [goals, setGoal] = useState("")
  const [deadline, setDeadline] = useState(0)
  const [notes, setNotes] = useState("")

  const [goalList, setGoalList] = useState([])

  const addGoal = () => {
    Axios.post("http://localhost:3001/createGoals", {
      goals: goals,
      deadline: deadline,
      notes: notes,
    }).then(() => {
      setGoalList([
        ...goalList,
        {
          goals: goals,
          deadline: deadline,
          notes: notes,
        },
      ])
    })
  }

  const getGoals = () => {
    Axios.get("http://localhost:3001/goals").then((response) => {
      setGoalList(response.data)
    })
  }

  const updateGoal = (id) => {
    Axios.put("http://localhost:3001/update", { wage: newWage, id: id }).then(
      (response) => {
        setGoalList(
          goalList.map((val) => {
            return val.id == id
              ? {
                  id: val.id,
                  goals: val.goals,
                  deadline: val.deadline,
                  notes: val.notes,
                }
              : val
          })
        )
      }
    )
  }

  const deleteGoal = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setGoalList(
        goalList.filter((val) => {
          return val.id != id
        })
      )
    })
  }

  return (
    <div >
      <div className="box">
        <label>Goal:</label>
        <input
          type="text"
          onChange={(event) => {
            setGoal(event.target.value)
          }}
        />
        <label>Deadline date:</label>
        <input
          type="number"
          onChange={(event) => {
            setDeadline(event.target.value)
          }}
        />
        <label>Note:</label>
        <input
          type="text"
          onChange={(event) => {
            setNotes(event.target.value)
          }}
        />
        <button onClick={addGoal}>Add Goal</button>
      </div>
      <div className="employees">
        <button onClick={getGoals}>Show Goal</button>

        {goalList.map((val, key) => {
          return (
            <div className="employee">
              <div>
                <h3>Goal: {val.goals}</h3>
                <h3>Date: {val.deadline}</h3>
                <h3>Note: {val.notes}</h3>
              </div>
              <div>
                <button
                  onClick={() => {
                    deleteGoal(val.id)
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Goal
