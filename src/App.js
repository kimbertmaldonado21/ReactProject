import React,{Component} from 'react'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'

/** components */
import Login from './Components/login/Login'
import Home from './Components/Home'
import Todolist from './Components/Todolist'
import Dashboard from './Components/dashboard/Dashboard'



const App = () => {

    return (
    <div className='app-main'>
        <Routes>
            <Route path="/" element={ <Login/>} />
            <Route path="todolist" element={<Todolist /> } />
            <Route path="dashboard" element={<Dashboard /> } />
        </Routes>
        
    </div>
    )
}

export default App

