import React,{Component} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './Components/login/Login'

/** components */
import Todolist from './Components/Todolist'



const App = () => {

    return (
    <div className='app-main'>
        <Routes>
            <Route path="/" element={ <Login/> } />
            <Route path="/todolist" element={ <Todolist/> } />
        </Routes>
        
    </div>
    )
}

export default App

