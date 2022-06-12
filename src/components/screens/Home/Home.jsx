import React from 'react'
import { useState } from 'react'
import TodoItem from './item/TodoItem'
import CreateTodoField from './Create-todo-field/CreateTodoField'

const data = [
    {

        _id: Math.random(),
        title: 'Старайся не отвлекайся',
        isCompleted: false,
    },
    {
        _id: Math.random(),
        title: 'Терпи, тебе нужно закончить',
        isCompleted: false,
    },
    {
        _id: Math.random(),
        title: 'У тебя все получится, не сдавайся',
        isCompleted: false,
    },

    
]
console.log(data);

const Home = () => {

    const [todos, setTodos] = useState(data)

    const changeTodo = (_id) => {
        const copy = [...todos]
        const current = copy.find(t => t._id === _id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const removeTodo = _id => 
        setTodos([...todos].filter(t => t._id !== _id))

    
    
  return (
    <div className='text-white w-4/5 mx-auto'>
        <h1 className='text-2x1 font-bold text-center mb-10'>Todo for junior</h1>
        {todos.map(todo => (
        <TodoItem   
            key={todo._id} 
            todo={todo}
            changeTodo={changeTodo}
            removeTodo={removeTodo}/>
           ))}
           <CreateTodoField setTodos={setTodos}/>
    </div>
  )
}



export default Home