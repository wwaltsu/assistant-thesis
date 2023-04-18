import { useState } from "react"
import Axios from "axios"


function Events() {
  const [events, setEvent] = useState("")

  const [eventList, setEventList] = useState([])

  const addEvent = () => {
    Axios.post("http://localhost:3001/createEvents", {
      events: events,
    }).then(() => {
      setEventList([
        ...eventList,
        {
          events: events,
        },
      ])
    })
  }

  const getEvents = () => {
    Axios.get("http://localhost:3001/events").then((response) => {
      setEventList(response.data)
    })
  }

  const updateGoal = (id) => {
    Axios.put("http://localhost:3001/update", { wage: newWage, id: id }).then(
      (response) => {
        setEventList(
          eventList.map((val) => {
            return val.id == id
              ? {
                  id: val.id,
                  event: events,
                }
              : val
          })
        )
      }
    )
  }

  const deleteGoal = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setEventList(
        eventList.filter((val) => {
          return val.id != id
        })
      )
    })
  }

  return (
    <div>
      <div className="box">
        <label>Event:</label>
        <input
          type="text"
          onChange={(event) => {
            setEvent(event.target.value)
          }}
        />
        <button onClick={addEvent}>Add Event</button>
      </div>
      <div className="employees">
        <button onClick={getEvents}>Show Events</button>

        {eventList.map((val, key) => {
          return (
            <div className="employee">
              <div>
                <h3>Event: {val.events}</h3>
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

export default Events
