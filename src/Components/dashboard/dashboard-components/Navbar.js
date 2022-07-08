import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div> 
        <nav class="main-header navbar navbar-expand navbar-dark navbar-light">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" data-widget="pushmenu" href="#" role="button"><ion-icon name="list-outline"></ion-icon></a>
                </li>
                
            </ul>

            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <Link to="/">
                        <ion-icon name="log-out-outline"></ion-icon>
                    </Link>
                </li>
            </ul>
            
        </nav>
    </div>
  )
}

export default Navbar