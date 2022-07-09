import React,{useState} from 'react'

const Todolist = () => {
  // const [state,setState] = useState({
  //   todo :'',
  //   todolist :[]
  // })

  // const {todo, todolist} = state

  // const handleOnChange =(e) =>{
  //   const{name,value} = e.target 

  //   setState({...state,[name]:value})

  // }

  /** ADD TODO LIST */

  return (
    <div className='todolist-main'>
  <div className='card card-primary'>
        <div className='card-header'>
          <h3 className='card-title'>
            TODO LIST
          </h3>
        </div>

        <div className='card-body'>
          <div className='input-group'>
            <input className='form-control form-control-border' 
            type="text"
            name ="todo"
            // value={todo}
            // onChange={handleOnChange}
            placeholder='Create Todolist'/>
            <div className='input-group-append'>
              <button>
                ADD
                <ion-icon name="add-outline"></ion-icon>
              </button>
            </div>
          </div>
          <div className='card card-outline card-dark'>
            <div className='card-header'>
              <h3 className='card-title'>
                LIST
              </h3>
            </div>
            <div className='card-body'>
            {/* {
              todolist.length ?
                todolist.map((value, index)=>{
                  return (
                  <div className='form-group'>
                    <span>Do Homework</span>
                    <button className='btn btn-warning'>EDIT</button>
                    <button className='btn btn-danger'>DELETE</button>
                  </div>
                )
                }) : <span>No records</span>

            }  */}
              
            </div>
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default Todolist