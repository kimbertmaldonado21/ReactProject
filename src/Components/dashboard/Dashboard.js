import React from 'react'
import { Link } from 'react-router-dom'

/** Dashboard Components */
import Navbar from './dashboard-components/Navbar'
import Sidebar from './dashboard-components/Sidebar'
import Footer from './dashboard-components/Footer'
const Dashboard = () => {
  return (
    <div class="wrapper">
      <Navbar />
      <div class="content-wrapper">
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1 class="m-0">
                  Header
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sidebar />
      <Footer />
    </div>
    
  )
}

export default Dashboard