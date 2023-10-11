import React from 'react'
import { useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice' 

function Todos() {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch();
    console.log(todos);

  return (
    <>
        {todos.map((todo) => (
          <div>
            <div className='text-white'>{todo.text}</div>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
            Del
            </button>
          </div>
        ))}
    </>
  )
}

export default Todos