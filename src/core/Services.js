import React from 'react';

import Footer from './Footer';

import {Link} from 'react-router-dom'
import logo from '../images/logo.png'
import { signout,isAuthenticated } from '../auth';
import {ExternalLink} from 'react-external-link'


const Services = ({history}) => {
    return (
    <div >

        <div className="row">
        <div className="col-12">
  <header id="header" class="fixed-top header-transparent">
  <div class="container d-flex align-items-center">

<h1 class="logo mr-auto"><img className="img-fluid" src={logo}/></h1>



{!isAuthenticated() && (<nav class="nav-menu d-none d-lg-block">
  <ul>
    <li ><Link to="/"> Home</Link></li>
    <li><Link to="/about-us"> About</Link></li>
    <li class="active"><Link to="/services"> Services</Link></li>
    <li><Link to="/team"> Team</Link></li>
    <li><Link to="/credentials"> Credentials</Link></li>
    <li class="drop-down"><a href="">Insights</a>
            <ul>
              <li><Link to="/insights/knowledge_bank"> Knowledge Bank</Link></li>
          
              <li><Link to="/insights/csr"> CSR Projects</Link></li>
              <li><Link to="/insights/newsletters"> Newsletters</Link></li>
             
            </ul>
          </li>
          <li><ExternalLink href="http://www.pppglobalconferences.org/">Events</ExternalLink></li>
    <li ><Link to="/contact"> Contact Us</Link></li>
  

  </ul>
</nav>)}


{isAuthenticated() && ( <nav class="nav-menu d-none d-lg-block">
  <ul>
    <li ><Link to="/"> Home</Link></li>
    <li><Link to="/about-us"> About</Link></li>
    <li class="active"><Link to="/services"> Services</Link></li>
    <li><Link to="/team"> Team</Link></li>
    <li><Link to="/credentials"> Credentials</Link></li>
    <li class="drop-down"><a href="">Insights</a>
            <ul>
              <li><Link to="/insights/knowledge_bank"> Knowledge Bank</Link></li>
          
              <li><Link to="/insights/csr"> CSR Projects</Link></li>
              <li><Link to="/insights/newsletters"> Newsletters</Link></li>
             
            </ul>
          </li>
          <li><ExternalLink href="http://www.pppglobalconferences.org/">Events</ExternalLink></li>
    <li ><Link to="/contact"> Contact Us</Link></li>
   
          <li ><Link to="/admin/dashboard"> Dashboard</Link></li>
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
<h1> Our Services</h1>
    
    </div>
  </section>
  </div>
        </div>


    <br/>

    <div className="row p-4">
    <div className="col-12 pt-4 pb-4">
    <br/>
    <br/>
  <section id="about" class="about">
      <div >

      <div class="row p-4 " style={{backgroundColor:'#fff'}}>
          
          <br/>
          <div class="col-md-6 col-sm-12">
            <img src="https://img.freepik.com/free-photo/coworkers-team-brainstorming_53876-65479.jpg?size=626&ext=jpg" class="img-fluid" alt=""/>
          </div>
          <div class="col-6 pt-4 pt-lg-0" >
            <br/>
            <br/>
            <h3 style={{color:'#C5303C'}}>A Culture of Team Work and Collaboration</h3>
            <p style={{color:'black'}}>
            We a full service advisory and investment banking firm offering two major services.
            </p>
            <div class="row pt-4">
              <div class="col-md-6  ">
                <div className="row p-1">
                  <div className="col-4 ">
                  <span class="material-icons" style={{fontSize:'100px',color:'#C5303C'}}>
              supervisor_account
</span>

                  </div>
                  <div className="col-8">
                  <h4 style={{color:'#C5303C'}}>Advisory</h4>
                  <p style={{color:'grey'}}>Short description of the major service would be displayed here.</p>
                   
                    
                    </div>
                </div>
            
               
               
              </div>
              <div class="col-md-6 ">
              <div className="row p-1">
                  <div className="col-4">
                  <span class="material-icons" style={{fontSize:'100px',color:'#C5303C'}}>
                  account_balance
</span>

                  </div>
                  <div className="col-8 ">
                  <h4 style={{color:'#C5303C'}}>Capital Raising</h4>
                  <p style={{color:'grey'}}>Short description of the major service would be displayed here.</p>
                    
                    </div>
                </div>
                  
               
              </div>

            


              


              
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
    </div>
    <div >
    <div className="row p-4">
    <div className="col-12 p-4" >

<h3 style={{color:'#C5303C'}}>Custom-Defined Products</h3>
<div class="divider"style={{width:'40px', borderStyle : 'solid' , borderColor:'#C5303C'}}></div>
    </div>

        
    <div className=" col-md-6 col-sm-12 pb-4">
        <div class="card serv products " style={{borderColor : '#C5303C'}}>
            <div class="card-body " style={{height: '250px'}}>
                <h2>Project Finance</h2>
                <div class="divider"style={{width:'40px', borderStyle : 'solid' , borderColor:'#C5303C'}}></div>
                <div className="container">
                <div class="row">
                    <br></br>
                    Our aim is to oﬀer a one-stop service to governments and communities for the ﬁnancing, planning and procurement to construction, implementation and management.
                </div>
                <br/>
                <br/>
                
                </div>
                <div class="pb-3" style={{position : 'absolute' ,bottom   : '0',color:'#C5303C'}}>
                     <Link style={{color:'#C5303C'}} to="/service/3">  Read more</Link>
                </div>
            </div>
        </div>

    </div>




    





    <div className=" col-md-6 col-sm-12 pb-4">
        <div class="card serv products" style={{borderColor : '#C5303C'}}>
            <div class="card-body" style={{height: '250px'}}>
                <h2>Corporate Finance</h2>
                <div style={{width:'40px', borderStyle : 'solid' , borderColor:'#C5303C'}}></div>
                <div className="container">
                <div class="row">
                    <br></br>
                The ultimate objective of the service is to create liquidity, ensure financial stability for operations and third party confidence in the client company
                </div>
                <br/>
                <br/>
                
                </div>
                <div class="pb-3"  style={{position : 'absolute' ,bottom   : '0'}}>
                    
                    <Link  to="/corporate-finance">
       <Link style={{color:'#C5303C'}} to="/service/1">  Read more</Link>
            </Link>
                    
                    
                </div>
            </div>
        </div>

    </div>



    <div className=" col-md-6 col-sm-12 pb-4">
        <div class="card serv products" style={{borderColor : '#C5303C'}}>
            <div class="card-body" style={{height: '250px'}}>
                <h2>Structured Finance</h2>
                <div style={{width:'40px', borderStyle : 'solid' , borderColor:'#C5303C'}}></div>
                <div className="container">
                <div class="row">
                    <br></br>
                    Our PPP practice takes a significant cue from the attractiveness of structured finance to both local and international banks and funds that have significant appetite for various project finance opportunities in Africa.
                </div>
                <br/>
                <br/>
                
                </div>
                <div class="pb-3"  style={{position : 'absolute' ,bottom   : '0'}}>
                  <Link  style={{color:'#C5303C'}} to="/service/2">  Read more</Link>
                </div>
            </div>
        </div>

    </div>



    <div className=" col-md-6 col-sm-12 pb-4">
        <div class="card serv products" style={{borderColor : '#C5303C'}}>
            <div class="card-body" style={{height: '250px'}}>
                <h2>PPP Solutions</h2>
                <div style={{width:'40px', borderStyle : 'solid' , borderColor:'#C5303C'}}></div>
                <div className="container">
                <div class="row">
                    <br></br>
                    Our aim is to oﬀer a one-stop service to governments and communities managing the planning, feasibility studies, ﬁnancing, design, procurement, construction, management and operation of Public-Private Partnerships (PPPs)
                </div>
                <br/>
                <br/>
                
                </div>
                <div class="pb-3"  style={{position : 'absolute' ,bottom   : '0'}}>
                   <Link style={{color:'#C5303C'}} to="/service/5">  Read more</Link>
                </div>
            </div>
        </div>

    </div>




    <div className=" col-md-6 col-sm-12 pb-4">
        <div class="card serv products" style={{borderColor : '#C5303C'}}>
            <div class="card-body" style={{height: '250px'}}>
                <h2>Mergers & Acquisitions</h2>
                <div style={{width:'40px', borderStyle : 'solid' , borderColor:'#C5303C'}}></div>
                <div className="container">
                <div class="row">
                    <br></br>
                    Our aims is to provide a full suite of transactions, including mergers advice, acquisitions, leveraged buyouts, joint ventures, spin-offs, divestitures and other restructurings.
                </div>
                <br/>
                <br/>
                
                </div>
                <div class="pb-3"  style={{position : 'absolute' ,bottom   : '0'}}>
                  <Link style={{color:'#C5303C'}} to="/service/4">  Read more</Link>
                </div>
            </div>
        </div>

    </div>


    


  
    </div>
</div>
 
<Footer/>
</div>
)
}


export default Services