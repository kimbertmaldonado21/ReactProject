import React,{useState} from 'react'
import Header from './todolistComponents/Header'
import Form from './todolistComponents/Form'
import TodoLists from './todolistComponents/TodoLists'
const Todolist = () => {

  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  /** ADD TODO LIST */
  

  return (
    <div className='todolist-main col-sm-6'>
      <div className='card card-outline card-primary'>
          <div className='card-header'>
            <Header />
          </div>
          <div className='card-body'>
            <div className='input' style={{overflowX : 'auto',fontSize: '14px'}}>
              <Form 
              input={input}
              setInput={setInput}
              todoList={todoList}
              setTodoList={setTodoList}
              setEditTodo = {setEditTodo}
              />
            </div>
            <div className='list'>
              <TodoLists 
              todos={todoList}
              setTodoList={setTodoList}
              setEditTodo ={setEditTodo}
              />
            </div>
          </div>
      </div>
    
    </div>
  )
}

export default Todolist