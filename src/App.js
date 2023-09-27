import React, { useState } from 'react'

const App = () => {

  const [tasks, setTasks] = useState([
    {id: 1, title: 'Learn React', completed: false},
    {id: 2, title: 'Learn React', completed: false},
    {id: 3, title: 'Learn React', completed: false},
  ])

  const[input, setInput] = useState('')

  function todoComplete(id) {
    setTasks(tasks.filter(task => {
      if(task.id === id) {
        task.completed = !task.completed
      }
      return task
    }))
  }

  function removeTask(id) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  function addTask (e) {
      if (e.code === "Enter" && input.trim() !== '' ) {
        setTasks(tasks.concat([{id: Date.now(), title: input}]))
        setInput('')
      }
  }
  return (
    <div>
      <h1>ToDo App</h1>
      <input value={input} type="text" onKeyUpCapture={(e)=> addTask(e)} onChange={(e)=> setInput(e.target.value)}/>
      {tasks && tasks.map(task => {
        return (
          <div>
            <div className='taskWrapper' key={task.id}>
              <input type="checkbox" onClick={()=> todoComplete(task.id)}/>
              <div className="taskTitle" style={{textDecoration: task.completed?"line-through": null}}>{task.title}</div>
              <div onClick={()=> removeTask(task.id)} className='close'>&times;</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default App