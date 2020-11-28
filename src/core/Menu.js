import React, {Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {ExternalLink} from 'react-external-link'
import logo from '../images/logo.png'
import {signout, isAuthenticated} from '../auth';
const isActive = (history, path) => {
  if(history.location.pathname === path){
      return {color:'#ffc107'}
  }
 

  else{
      return {color: '#fff'}
  }
}

const Menu = ({history}) => (

<div className="row">
        <div className="col-12">
  <header id="header" class="fixed-top header-transparent">
  <div class="container d-flex align-items-center">

<h1 class="logo mr-auto"><img className="img-fluid" src={logo}/></h1>



{!isAuthenticated() && (<nav class="nav-menu d-none d-lg-block">
  <ul>
    <li ><ExternalLink href="/" style={isActive(history,'/')} target="_self"> Home</ExternalLink></li>
    <li ><ExternalLink href="/about-us" style={isActive(history,'/about-us')} target="_self"> About</ExternalLink></li>
    <li><ExternalLink href="/services" style={isActive(history,'/services')} target="_self"> Services</ExternalLink></li>
    <li><ExternalLink href="/team" style={isActive(history,'/team')} target="_self"> Team</ExternalLink></li>
    <li><ExternalLink href="/credentials" style={isActive(history,'/credentials')} target="_self"> Credentials</ExternalLink></li>
    <li class="drop-down "><a href="" >Insights</a>
            <ul>
              <li class=""><ExternalLink href="/insights/knowledge_bank" style={isActive(history,'/insights/knowledge_bank')} target="_self"> Knowledge Bank</ExternalLink></li>
          
              <li><ExternalLink href="/insights/csr" style={isActive(history,'/insights/csr')} target="_self"> CSR Projects</ExternalLink></li>
              <li><ExternalLink href="/insights/newsletters" style={isActive(history,'/insights/newsletters')} target="_self"> Newsletters</ExternalLink></li>
             
            </ul>
          </li>
          <li><ExternalLink href="http://www.pppglobalconferences.org/">Events</ExternalLink></li>
    <li ><ExternalLink href="/contact" style={isActive(history,'/contact')} target="_self"> Contact Us</ExternalLink></li>
  
  

  </ul>
</nav> )}



{isAuthenticated() && ( <nav class="nav-menu d-none d-lg-block">
  <ul>
  <li ><ExternalLink href="/" style={isActive(history,'/')} target="_self"> Home</ExternalLink></li>
    <li ><ExternalLink href="/about-us" style={isActive(history,'/about-us')} target="_self"> About</ExternalLink></li>
    <li><ExternalLink href="/services" style={isActive(history,'/services' )} target="_self"> Services</ExternalLink></li>
    <li><ExternalLink href="/team" style={isActive(history,'/team')} target="_self"> Team</ExternalLink></li>
    <li><ExternalLink href="/credentials" style={isActive(history,'/credentials')} target="_self"> Credentials</ExternalLink></li>
    <li class="drop-down "><a href="" >Insights</a>
            <ul>
              <li class=""><ExternalLink href="/insights/knowledge_bank" style={isActive(history,'/insights/knowledge_bank')} target="_self"> Knowledge Bank</ExternalLink></li>
          
              <li><ExternalLink href="/insights/csr" style={isActive(history,'/insights/csr')} target="_self"> CSR Projects</ExternalLink></li>
              <li><ExternalLink href="/insights/newsletters" style={isActive(history,'/insights/newsletters')} target="_self"> Newsletters</ExternalLink></li>
             
            </ul>
          </li>
          <li><ExternalLink href="http://www.pppglobalconferences.org/">Events</ExternalLink></li>
    <li ><ExternalLink href="/contact" style={isActive(history,'/contact')} target="_self"> Contact Us</ExternalLink></li>
   
          <li ><ExternalLink href="/admin/dashboard" style={isActive(history,'/admin/dashboard')} target="_self"> Dashboard</ExternalLink></li>
          <li>
           <Link    onClick={() => signout(() => {
               history.push('/')
           })}>
             <span>Signout</span>
           </Link>
       </li>
  

  </ul>
</nav>)}

</div>
  </header>

    
    <section id="hero2" class="d-flex align-items-center justify-content-center">
    <div class="container position-relative">
          <h1> {history.location.pathname === '/contact' && 'Contact Us'}</h1>
          <h1> {history.location.pathname === '/about-us' && 'About Us'}</h1>
          <h1> {history.location.pathname === '/team' && 'Our Team'}</h1>
          <h1> {history.location.pathname === '/credentials' && 'Credentials'}</h1>
          <h1> {history.location.pathname === '/insights/knowledge_bank' && 'Knowledge Bank'}</h1>
          <h1> {history.location.pathname === '/insights/csr' && 'CSR Projects'}</h1>
          <h1> {history.location.pathname === '/insights/newsletters' && 'Newsletters'}</h1>
          <h1> {history.location.pathname === '/admin/dashboard' && 'Administration'}</h1>
          <h1> {history.location.pathname === '/admin/team' && 'Manage Team'}</h1>
          <h1> {history.location.pathname === '/admin/insights' && 'Manage Insights'}</h1>
          <h1> {history.location.pathname === '/services' && 'Our Services'}</h1>
          
    
    </div>
  </section>
  </div>
        </div>



)
export default withRouter(Menu)