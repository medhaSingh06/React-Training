import React, { useContext } from 'react'
import { TaskContext } from './TaskProvider'

export const TaskList = () => {
     
    const {tasks, toggleTaskCompletion} = useContext(TaskContext)
  return (
    <ul>
        {tasks.map ( (task) => (
            <li key={task.id}>
                <input 
                    type='checkbox'
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(task.id)}
                />
                {task.text}
            </li>
        ))}
    </ul>
  )
}
