import React from 'react'

const TodoLists = ({todos, setTodoList,}) => {
  return (
    <div className='card card-outline card-primary'>
        {todos.map((todos)=>
            <li className='list-item' key={todos.id}>
                <input type="text" className="form-control" value={todos.title} onChange={(event)=>event.preventDefault} />
            <div className='d-inline'>
                <button className='btn- btn-info btn-sm'>
                    <ion-icon name="create-outline"></ion-icon>
                </button>
                <button className='btn-delete btn-danger btn-sm'>
                    <ion-icon name="trash-outline"></ion-icon>
                </button>
            </div>
            </li>
            
        )}
        
    </div>
  )
}

export default TodoLists