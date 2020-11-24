import React, { useState , useEffect} from 'react'
import RichTextEditor from 'react-rte';
import { signout,isAuthenticated } from '../auth';
import {Link} from 'react-router-dom';
import {createInsight } from './apiAdmin';
import logo from '../images/logo.png'
import {ExternalLink} from 'react-external-link'

import admin_img from '../images/admin_icons/add_admin.jpg'
import manage_insight from '../images/admin_icons/manage_insight.jpg'
import manage_team from '../images/admin_icons/manage_team.png'
import team_img from '../images/admin_icons/team.png'
import add from '../images/admin_icons/add.jpg'

const AdminDash = ({history}) => {

    const {user,token} = isAuthenticated()


    
 
   

    return (

       <div>
               <div className="row">
        <div className="col-12">
  <header id="header" class="fixed-top header-transparent">
  <div class="container d-flex align-items-center">

<h1 class="logo mr-auto"><img className="img-fluid" src={logo}/></h1>




<nav class="nav-menu d-none d-lg-block">
  <ul>
    <li ><Link to="/"> Home</Link></li>
    <li><Link to="/about-us"> About</Link></li>
    <li><Link to="/services"> Services</Link></li>
    <li><Link to="/team"> Team</Link></li>
    <li><Link to="/credentials"> Credentials</Link></li>
    <li class="drop-down "><a href="">Insights</a>
            <ul>
              <li class=""><Link to="/insights/knowledge_bank"> Knowledge Bank</Link></li>
          
              <li><Link to="/insights/csr"> CSR Projects</Link></li>
              <li><Link to="/insights/newsletters"> Newsletters</Link></li>
             
            </ul>
          </li>
          <li><ExternalLink href="http://www.pppglobalconferences.org/">Events</ExternalLink></li>
    <li ><Link to="/contact"> Contact Us</Link></li>

    <li class="active" ><Link to="/admin/dashboard"> Dashboard</Link></li>
    <li>
           <Link    onClick={() => signout(() => {
               history.push('/')
           })}>
             <span>Signout</span>
           </Link>
       </li>
  

  </ul>
</nav>

</div>
  </header>

    
    <section id="hero3" class="d-flex align-items-center justify-content-center">
    <div class="container position-relative">
<h1> Administration</h1>
    
    </div>
  </section>
  </div>
        </div>
            
           <div>
           <div class="row">
   <div class="col-12 text-center p-3" style={{height:'5vh',backgroundColor: 'cornflowerblue'}}>

      
      


      

   </div>
</div>
<div class="container " >
   <div class="row p-4">
       <div class="col-12 p-4">
           <div class="row">
               <div class="col-12 text-center p-4">
                

               </div>

           </div>

           <div class="row">
               <div class="col-12 text-center p-4">
                   <div class="row">
                       <div class="col-12">
                           <div class="row ">
                               <div class="col-md-4  col-sm-12  " >
                                   <div class="quick_nav card shadow-lg p-3 mb-5 bg-white rounded" >
                                       <div class="card-body">
                                           <div class="row">
                                               <div class="col-12" >
                                               <img class="img-fluid" src={add} style={{height:'50px'}}  />
                                           </div>
                                           <div class="col-12 p-2 text-center">
                                           <Link className="nav-link" to="/admin/add_insight">
                                               <div className="row">
                                                   <div className="col-12">
                                                   Add Insight
                                                   </div>
                                                   <div className="col-12">
                                                   (Newsletters and CSR)
                                                   </div>
                                               </div>
                          
                          
                       </Link>
                                           </div>
                                           </div>
                                         
                                       </div>
                                   </div>
                               </div>




                               <div class="col-md-4  col-sm-12 " >
                                   <div class=" quick_nav card shadow-lg p-3 mb-5 bg-white rounded" >
                                       <div class="card-body">
                                           <div class="row">
                                               <div class="col-12" >
                                               <img class="img-fluid" src={add} style={{height:'50px'}}  />
                                           </div>
                                           <div class="col-12 p-2 text-center">
                                           <Link className="nav-link" to="/admin/knowledge_bank">
                                           <div className="row">
                                                   <div className="col-12">
                                                   Add Insight
                                                   </div>
                                                   <div className="col-12">
                                                   (Knowledge Bank)
                                                   </div>
                                               </div>
                       </Link>
                                           </div>
                                           </div>
                                         
                                       </div>
                                   </div>
                               </div>


                               <div class="col-md-4  col-sm-12 " >
                                   <div class=" quick_nav card shadow-lg p-3 mb-5 bg-white rounded" >
                                       <div class="card-body">
                                           <div class="row">
                                               <div class="col-12" >
                                               <img class="img-fluid" src={team_img} style={{height:'50px'}}  />
                                           </div>
                                           <div class="col-12 p-2 text-center">
                                           <Link className="nav-link" to="/admin/add_employee">
                        Add Team Member
                       </Link>
                                           </div>
                                           </div>
                                         
                                       </div>
                                   </div>
                               </div>


                               <div class="col-md-4  col-sm-12  " >
                                   <div class="quick_nav card shadow-lg p-3 mb-5 bg-white rounded" >
                                       <div class="card-body">
                                           <div class="row">
                                               <div class="col-12" >
                                               <img class="img-fluid" src={manage_team} style={{height:'50px'}}  />
                                           </div>
                                           <div class="col-12 p-2 text-center">
                                           <Link className="nav-link" to="/admin/team">
                          Manage Team 
                       </Link>
                                           </div>
                                           </div>
                                         
                                       </div>
                                   </div>
                               </div>



                               <div class="col-md-4  col-sm-12  " >
                                   <div class="quick_nav card shadow-lg p-3 mb-5 bg-white rounded" >
                                       <div class="card-body">
                                           <div class="row">
                                               <div class="col-12" >
                                               <img class="img-fluid" src={manage_insight} style={{height:'50px'}}  />
                                           </div>
                                           <div class="col-12 p-2 text-center">
                                           <Link className="nav-link" to="/admin/insights">
                           Manage Insights
                       </Link>
                                           </div>
                                           </div>
                                         
                                       </div>
                                   </div>
                               </div>


                               <div class="col-md-4  col-sm-12  " >
                                   <div class="quick_nav card shadow-lg p-3 mb-5 bg-white rounded" >
                                       <div class="card-body">
                                           <div class="row">
                                               <div class="col-12" >
                                               <img class="img-fluid" src={admin_img} style={{height:'50px'}}  />
                                           </div>
                                           <div class="col-12 p-2 text-center">
                                           <Link className="nav-link" to="/admin/add_admin">
                           Add Administrator
                       </Link>
                                           </div>
                                           </div>
                                         
                                       </div>
                                   </div>
                               </div>

                              






                               
       
                             
                           </div>
               </div>
                   </div>

               </div>

           </div>
  
       </div>
   </div>

</div>

               
           </div>
            
      </div>

    )

    
}
 export default AdminDash;
