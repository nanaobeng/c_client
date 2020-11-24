import React, {useState, useEffect}  from 'react';
import {Link, withRouter} from 'react-router-dom';
import header_image from '../images/header_image.jpg'
import contact_image from '../images/contact.jpg'
import Footer from './Footer'
import logo from '../images/logo.png'

import {signout, isAuthenticated } from '../auth';
import structured from '../images/services/structured.jpg'
import corporate from '../images/services/corporate.jpg'
import ma from '../images/services/ma.jpg'
import ppp from '../images/services/ppp.jpg'
import projectfinance from '../images/services/projectfinance.jpg'
import {ExternalLink} from 'react-external-link'
const Home= ({history}) => {



  var divStyle = {
    backgroundImage: 'url(' + header_image + ')',
    

   
    backgroundSize: 'cover',

  };

  const [error , setError ] = useState (false)
  const [services, setServices] = useState ([])




  return(
  <div>

  

<div className="row">
  
  <div className="col-12">
  <header id="header" class="fixed-top header-transparent">
  <div class="container d-flex align-items-center">

<h1 class="logo mr-auto"><img className="img-fluid" src={logo}/></h1>






{!isAuthenticated() && ( <nav class="nav-menu d-none d-lg-block">
  <ul>
    <li class="active"><Link to="/"> Home</Link></li>
    <li><ExternalLink href="/about-us" target="_self"> About</ExternalLink></li>
    <li><Link to="/services"> Services</Link></li>
    <li><ExternalLink href="/team" target="_self"> Team</ExternalLink></li>
    <li><ExternalLink href="/credentials" target="_self"> Credentials</ExternalLink></li>
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
    <li class="active"><Link to="/"> Home</Link></li>
    <li><Link to="/about-us"> About</Link></li>
    <li><Link to="/services"> Services</Link></li>
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

    
    <section id="hero" class="d-flex align-items-center justify-content-center">
    <div class="container position-relative">
    <h1>A Tradition of <span>Excellence</span> In<br/><span>Investment</span> Banking Solutions</h1>
      <a href="#about" class="btn-get-started scrollto"><Link to="/services" style={{color:'#fff'}}>View Services</Link></a>
    </div>
  </section>
  </div>
  <div className="col-12">
  <section id="clients" class="clients section-bg">
      <div class="container">

        <div class="row justify-content-center">

        <div className="col-12 text-center " style={{color:'#C5303C'}}>
          <b>Notable Clients</b>

        </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="data:image/png;base64,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" class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/VRA_Logo.png" class="img-fluid" alt=""/>
          </div>

        

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="https://www.tor.com.gh/online/wp-content/uploads/2017/10/logo4web_blue.png" class="img-fluid" alt=""/>
          </div>


          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS27Uve02zE0AYPyrr3F7676rpPg1iqjp5Iyw&usqp=CAU
" class="img-fluid" alt=""/>
          </div>


          
        </div>

      </div>
    </section>
  </div>

  <div className="col-12 pt-4 pb-4">
    <br/>
 
  <section id="about" class="about">
      <div >

        <div class="row p-4 " style={{backgroundColor:'#C5303C'}}>
          
          <br/>
          <div class="col-md-6 col-sm-12">
            <img src="https://img.freepik.com/free-photo/coworkers-team-brainstorming_53876-65479.jpg?size=626&ext=jpg" class="img-fluid" alt=""/>
          </div>
          <div class="col-6 pt-4 pt-lg-0" >
            <br/>
            <br/>
            <h3 style={{color:'#fff'}}>A Culture of Team Work and Collaboration</h3>
            <p style={{color:' #fff'}}>
            We a full service advisory and investment banking firm offering two major services.
            </p>
            <div class="row pt-4">
              <div class="col-md-6  ">
                <div className="row p-1">
                  <div className="col-4 ">
                  <span class="material-icons" style={{fontSize:'100px',color:'#fff'}}>
              supervisor_account
</span>

                  </div>
                  <div className="col-8">
                  <h4 style={{color:'#fff'}}>Advisory</h4>
                  <p style={{color:'#fff'}}>Short description of the major service would be displayed here.</p>
                   
                    
                    </div>
                </div>
            
               
               
              </div>
              <div class="col-md-6 ">
              <div className="row p-1">
                  <div className="col-4">
                  <span class="material-icons" style={{fontSize:'100px',color:'#fff'}}>
                  account_balance
</span>

                  </div>
                  <div className="col-8 ">
                  <h4 style={{color:'#fff'}}>Capital Raising</h4>
                  <p style={{color:'#fff'}}>Short description of the major service would be displayed here.</p>
                    
                    </div>
                </div>
                  
               
              </div>

              <div className="col-12 ">
                <br/>
                <br/>
                <Link to="/services" style={{color:'#fff'}}> Learn More</Link>
              </div>


              


              
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>


              <div className="col-12 p-4" >

            <h3 style={{color:'#C5303C'}}>Custom-Defined Products</h3>
            <div class="divider"style={{width:'40px', borderStyle : 'solid' , borderColor:'#C5303C'}}></div>
                </div>
 
  <div className="col-12 pt-4 pb-4">
    <div className="row justify-content-center">
      <div className=" testimg col-md-6 col-lg-3 col-sm-12 px-0" style={{backgroundColor:'green',maxHeight:'250px' , minHeight:'250px'}}>
        <img className="  img-fluid w-100" src={projectfinance} style={{maxHeight:'250px' , minHeight:'250px'}} />

      </div>
      <div className="col-md-6 col-lg-3 col-sm-12 p-4 serv"  style={{maxHeight:'250px' , minHeight:'250px'}}>
      

  
                <p><b>Project Finance</b></p>
                <div class="divider"style={{width:'40px', borderStyle : 'solid' , borderColor:'#C5303C'}}></div>
                <div className="container">
                <div class="row" style={{fontSize: '12px'}}>
                    <br></br>
                    Our aim is to oﬀer a one-stop service to governments and communities for the ﬁnancing, planning and procurement to construction, implementation and management.
                </div>
                <br/>
                <br/>
                
                </div>
                <div class="pb-3" style={{position : 'absolute' ,bottom   : '0'}}>
                 <Link style={{color:'#C5303C'}} to="/service/3">  Read more</Link>
                </div>
         
    

    
      </div>
      <div className=" testimg col-md-6 col-lg-3 col-sm-12 px-0" style={{backgroundColor:'green',maxHeight:'250px' , minHeight:'250px'}}>
        <img className=" img-fluid w-100" src={corporate} style={{maxHeight:'250px' , minHeight:'250px'}} />

      </div>
      <div className="col-md-6 col-lg-3 col-sm-12 p-4 serv"  style={{maxHeight:'250px' , minHeight:'250px'}}>
      <p><b>Corporate Finance</b></p>
                <div class="divider"style={{width:'40px', borderStyle : 'solid' , borderColor:'#C5303C'}}></div>
                <div className="container">
                <div class="row" style={{fontSize: '12px'}}>
                    <br></br>
                       
        The ultimate objective of the service is to create liquidity, ensure financial stability for operations and third party confidence in the client company
          </div>
                <br/>
                <br/>
                
                </div>
                <div class="pb-3" style={{position : 'absolute' ,bottom   : '0'}}>
                <Link style={{color:'#C5303C'}} to="/service/1">  Read more</Link>
                </div>
         
      </div>


      <div className="col-md-6 col-lg-3 col-sm-12 p-4 serv"  style={{maxHeight:'250px' , minHeight:'250px'}}>
      <p><b>Structured Finance</b></p>
                <div class="divider"style={{width:'40px', borderStyle : 'solid' , borderColor:'#C5303C'}}></div>
                <div className="container">
                <div class="row" style={{fontSize: '12px'}}>
                    <br></br>
                   
        Our PPP practice takes a significant cue from the attractiveness of structured finance to both local and international banks and funds that have significant appetite for various project finance opportunities in Africa.
         </div>
                <br/>
                <br/>
                
                </div>
                <div class="pb-3" style={{position : 'absolute' ,bottom   : '0'}}>
                   <Link style={{color:'#C5303C'}} to="/service/2">  Read more</Link>
                </div>
         
      </div>

      <div className=" testimg col-md-6 col-lg-3 col-sm-12 px-0" style={{backgroundColor:'green',maxHeight:'250px' , minHeight:'250px'}}>
        <img className=" img-fluid w-100" src={structured} style={{maxHeight:'250px' , minHeight:'250px'}} />

      </div>



      <div className="col-md-6 col-lg-3 col-sm-12 p-4 serv"  style={{maxHeight:'250px' , minHeight:'250px'}}>
      <p><b>PPP Solution</b></p>
                <div class="divider"style={{width:'40px', borderStyle : 'solid' , borderColor:'#C5303C'}}></div>
                <div className="container">
                <div class="row" style={{fontSize: '12px'}}>
                    <br></br>
                      
        Our aim is to oﬀer a one-stop service to governments and communities managing the planning, feasibility studies, ﬁnancing, design, procurement, construction, management and operation of Public-Private Partnerships (PPPs)
           </div>
                <br/>
                <br/>
                
                </div>
                <div class="pb-3" style={{position : 'absolute' ,bottom   : '0'}}>
                   <Link style={{color:'#C5303C'}} to="/service/5">  Read more</Link>
                </div>
         
      </div>

      <div className=" testimg col-md-6 col-lg-3 col-sm-12 px-0" style={{backgroundColor:'green',height:'250px'}}>
        <img className=" img-fluid w-100" src={ppp} style={{height:'250px'}} />

      </div>



      <div className=" testimg col-md-6 col-lg-3 col-sm-12 px-0" style={{backgroundColor:'green',height:'250px'}}>
        <img className=" img-fluid w-100" src={ma} style={{height:'250px'}} />

      </div>
      <div className="col-md-6 col-lg-3 col-sm-12 p-4 serv"  style={{maxHeight:'250px' , minHeight:'250px'}}>
      <p><b>Mergers & Acquisitions</b></p>
                <div class="divider"style={{width:'40px', borderStyle : 'solid' , borderColor:'#C5303C'}}></div>
                <div className="container">
                <div class="row" style={{fontSize: '12px'}}>
                    <br></br>
                   
        Our aims is to provide a full suite of transactions, including mergers advice, acquisitions, leveraged buyouts, joint ventures, spin-offs, divestitures and other restructurings.
         </div>
                <br/>
                <br/>
                
                </div>
                <div class="pb-3" style={{position : 'absolute' ,bottom   : '0'}}>
                 <Link style={{color:'#C5303C'}} to="/service/4">  Read more</Link>
                </div>
         
      </div>



      
      
      
    </div>

  </div>



  
<div className="col-12 p-4">
<div className="row p-4">
  <div class="col-12 p-4" style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8erqEli7GnZh27q7Y7ZpCyqg-EzRK-xr92A&usqp=CAU')"}}>
                            <div class="card " >
                                <div class="card-body">
                                    <div className="row">
                                        <div className="col-12">
                                            <b style={{color:'#C5303C',fontSize:'25px'}}>Contact Us</b>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                    <div className="col-12 p-4 text-center ">
      <b>Contact</b><br/>
      <span style={{color:'grey'}}>Contact us for more information</span>
        
        </div>
                                    </div>

                                    <br/>
                                    <div className="row">
                                    <div className="col-12">
        <div className="row justify-content-center">
          <div className="col-4 text-center">
          <span class="material-icons">
          location_on
</span><br/>
4th Floor, Special House,<br/>
14 Senchi Street,<br/>
Airport Residential, Accra, GHANA

          </div>

          <div className="col-4 text-center">
          <span class="material-icons">
          call
</span><br/>
+ 233 302 789 011

          </div>

          <div className="col-4 text-center">
          <span class="material-icons">
          mail
</span><br/>
info@cnergyglobalholdings.com

          </div>
        </div>
        <br/>
      </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-12 ">

        
<div className="row justify-content-center">
  <div className="col-10">
  <div class="input-group mb-3">

<input type="text" class="form-control" placeholder="Full Name"/>
</div>
  </div>

  <div className="col-10">
  <div class="input-group mb-3">

<input type="email" class="form-control" placeholder="Email Address"/>
</div>
  </div>

  <div className="col-10">
  

  <div class="input-group mb-3">

<textarea className="form-control" placeholder="Message"cols="10" rows="10"></textarea>
</div>
  </div>

  <div className="col-10">
    <span className="btn btn-outline-danger" style={{width:'100%'}}> Submit</span>
  </div>



</div>

</div>
                                    </div>
                                        <br/>
                                   

                                  
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
export default Home