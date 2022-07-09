import React from 'react'
import {useNavigate} from 'react-router-dom'
const Login = (props) => {
  const {email , password} = props
  const navigate = useNavigate()

  const loginClick =() =>{
    navigate('/todolist')
  }
  return (
    <div className='Login-page'>
      <div className='Login-box'>
        <div class="card card-outline card-primary">
          <div class="card-header text-center">
            <h1 className='card-title'>
                <b>THIS IS MY FIRST REACT PROJECT</b>
            </h1>
          </div>
          <div className='card-body'>

            <div className='input-group mb-3'>
              <input type="email" className='form-control form-control-border' value={email} placeholder='Email' required/>
              <div className='input-group-append'>
                <div class="input-group-text">
                  <ion-icon name="person-circle-outline"></ion-icon>
                </div>
              </div>
            </div>

            <div className='input-group mb-3'>
              <input type="password" className='form-control form-control-border' value={password} placeholder='password' required/>
              <div className='input-group-append'>
                <div class="input-group-text">
                  <ion-icon name="lock-closed-outline"></ion-icon>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-12 loginbtn'>
                  <button onClick={loginClick} className='btn btn-primary btn-lock form-control'>Sign In</button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login