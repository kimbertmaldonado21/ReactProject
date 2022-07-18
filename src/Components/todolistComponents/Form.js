import React from 'react'
import {v4 as uuidV4} from 'uuid';
const Form = ({input, setInput, todoList, setTodoList}) => {
    const onInputChange= (event) =>{
        setInput(event.target.value);
        console.log(event.target.value);
    }
    const onFormSubmit = (event) =>{
        event.preventDefault();
        setTodoList([...todoList, {id:uuidV4(), title: input, completed : false}]);
        setInput("");
    }
  return (
    <form onSubmit={onFormSubmit}>
        <div className='input-group'>
            <input type="text" className='form-control form-control-border' placeholder='Enter Todo....' 
            value= {input}
            required
            onChange={onInputChange}
            />
            <div className='input-group-append'>
                <button className='btn btn-warning btn-sm'>
                    <ion-icon name="add-circle-outline"></ion-icon>
                </button>
            </div>
        </div>
    </form>
  )
}

export default Form