import React from 'react'
const Sidebar = () => {
  return (
    <div>
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                <div class='img-wrap'>
                    <img src="../../img/1.jpg" class="img-circle elevation-2" alt="User Image"/>
                </div>
                </div>
                <div class="info">
                KIMBERT MALDONADO 
                </div>
            </div>
            <div class="sidebar">
                <nav class="mt-2" >
                    <ul class="nav nav-pills nav-sidebar nav-compact flex-column nav-child-indent" data-widget="treeview" role="menu" data-accordion="false">
                        <li class="nav-item menu-open" >
                            <a href="#" class="nav-link">
                            <i class="nav-icon ion-android-car"></i>
                            <p>
                            Dashboard
                                <i class="right fas ion-arrow-left-b"></i>
                            </p>
                            <ul class="nav nav-treeview ">
                                <li class="nav-item">
                                    TRY 1
                                </li>
                                <li class="nav-item">
                                    TRY 2
                                </li>
                            </ul>
                            </a>
                            
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
        </div>
  )
}

export default Sidebar