import React, { createContext, useState } from 'react'

const TaskContext = createContext();

const TaskProvider = (props) => {

    const [tasks, setTasks] = useState([
        {id:1, text: 'Complete assignment', completed: false},
        {id:2, text: 'Buy groceries', completed: false},
        ])

        const toggleTaskCompletion = (taskId) => {
            setTasks( (prevTask) => 
            prevTask.map( (task) => task.id === taskId ?
            {...task, completed: !task.completed} : task))
        }


        const contextValue = {
            tasks, 
            toggleTaskCompletion,
        }

  return (
    <TaskContext.Provider value={contextValue}>
        {props.children}
        </TaskContext.Provider>
  )
}


 

export {TaskProvider, TaskContext};