import React from 'react'
import ReactDOM  from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom';

/** Styles */
import './Styles/app.scss'

ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>
,
document.getElementById('root'))
