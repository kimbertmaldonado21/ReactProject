import React from 'react'
// const buttons = ['edit','delete'];
const TodoLists = ({todos, setTodoList, editTodo, setEditTodo}) => {

    const handleComplete = (todo) =>{
        setTodoList(
            todo.map((item)=>{
                if(item.id === todo.id){
                    return {...item, completed: !item.completed };
                }
                return item;
            })
        )
    }

    const handleDelete = ({id}) =>{
        setTodoList(todos.filter((todos)=>todos.id !== id));
    }
    
    const handleEdit = ({id}) =>{
        const findTodo = todos.find((todo)=> todo.id === id);
        setEditTodo(findTodo);
        
    }
    return (
    <div className='card card-outline card-primary'>
        {todos.map((todos)=>
            <li className='list-item' key={todos.id}>
                <input type="text" className='form-control-lg form-control-border col-sm-8 d-inline' value={todos.title} onChange={(event)=>event.preventDefault} />
            <div className='col-sm-6 d-inline'>
                <button className='btn- btn-warning btn-lg' onClick={()=> handleComplete(todos)}>
                    <ion-icon name="checkbox-outline"></ion-icon>
                </button>
                <button className='btn- btn-info btn-lg' onClick={()=> handleEdit(todos)}>
                    <ion-icon name="create-outline"></ion-icon>
                </button>
                <button className='btn-delete btn-danger btn-lg' onClick={()=> handleDelete(todos)}>
                    <ion-icon name="trash-outline"></ion-icon>
                </button>
                {/* {buttons.map((buttons)=>(
                    <button className='btn-delete btn-danger btn-sm'
                    key={buttons}
                    
                    >
                        {buttons}
                    </button>
                ))} */}
            </div>
            </li>
            
        )}
        
    </div>
  )
}

export default TodoLists