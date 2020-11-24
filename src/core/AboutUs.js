import React from 'react';

import Footer from './Footer';
import { ExternalLink } from 'react-external-link';
import {Link} from 'react-router-dom'
import logo from '../images/logo.png'
import {signout, isAuthenticated } from '../auth';


const AboutUs = ({history}) => {
    return (
    <div>

        <div className="row">
        <div className="col-12">
  <header id="header" class="fixed-top header-transparent">
  <div class="container d-flex align-items-center">

<h1 class="logo mr-auto"><img className="img-fluid" src={logo}/></h1>



{!isAuthenticated() && ( <nav class="nav-menu d-none d-lg-block">
  <ul>
    <li ><Link to="/"> Home</Link></li>
    <li class="active"><Link to="/about-us"> About</Link></li>
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
    <li ><Link to="/contact"> Contact Us</Link></li>
    <li><ExternalLink href="http://www.pppglobalconferences.org/">Events</ExternalLink></li>
  

  </ul>
</nav>)}

{isAuthenticated() && (<nav class="nav-menu d-none d-lg-block">
  <ul>
    <li ><Link to="/"> Home</Link></li>
    <li class="active"><Link to="/about-us"> About</Link></li>
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

    
    <section id="hero2" class="d-flex align-items-center justify-content-center">
    <div class="container position-relative">

    
    </div>
  </section>
  </div>
        </div>
        
     
        <br/>
        
        
    <div class="container" >
        <div className="row" >
            <div className="col-12">

            <div className="row">
                    <h3 style={{color:'#C5303C'}}>A Culture of Team Work and Collaboration.</h3>
                
                <br/>
                <br/>
                </div>
                
                <div className="row">
         
                <h5 style={{color:'rgb(128,128,128)'}}>WHO WE ARE.</h5>
                
                <p>We are a full-service investment banking firm serving African markets across diverse
industries. Our practice is deeply rooted in our passion to leverage our global networks
to deliver tailor-made investment banking solutions to Africa’s unique financing
requirements. We recognize Africa’s peculiar cultural and social values, economic
circumstances, challenges and market opportunities and have developed techniques to
tell the African story in a manner that global market players understand, appreciate and
willing to explore.</p>
                <p>Our deep African roots, knowledge and understanding gives us a clear competitive edge
in our coverage markets. The firm and its Principals have worked with international and
regional commercial and development banks as well as funds and various financial
institutions to deliver financing and financing solutions to regional private and public
corporates across the continent.</p>
                </div>
                <br/>
                <div className="row">
         
                <h5 style={{color:'rgb(128,128,128)'}}>OUR OPERATING PHILOSOPHY.</h5>
                
                <p>Our approach to serving clients is centered on doing first-class business in a
professional manner. We strive to build trusted, long-term relationships by taking a
holistic and forward-looking view of our relationships and identifying ways to help
clients achieve their most important business objectives. The active participation of our
Principals ensures swift responses to requests from clients for assistance in preparing
for crises before they arise or in managing them effectively.</p>
                
                </div>
                <br/>
              
                    <div className="row">
                    <h5 style={{color:'rgb(128,128,128)'}}>VISION.</h5><br/>

                    </div>

                    <div className="row">
                    <p>To optimize shareholder value.</p>

                    </div>
         
             
          
                
               
                
                <br/>
                <div className="row">
         
                <h5 style={{color:'rgb(128,128,128)'}}>MISSION.</h5>
                
                <p>To be perceived as the lead local financial advisor with solid global relationships giving
C-NERGY a distinct advantage over its competitors in its ability to offer innovative
financing and advisory solutions for major government and business transactions.</p>
                </div>

                <br/>
                <div className="row">
         
                <h5 style={{color:'rgb(128,128,128)'}}>COVERAGE.</h5>
                
                <p><b>Africa is our market.</b><br/>
                
We have established a geographical presence in all the primary West African markets,
principally Ghana; Nigeria; Liberia and Sierra Leone through strategic partnerships
with key regional and global financial institutions.
Ghana serves as a hub for our global operations. Our Nigeria office in Abuja has been
strategically placed to cater for Nigeria, the largest economy in Sub-Saharan Africa,
commanding over ---% of West Africa’s GDP.
Through our partnerships with similar investment banking outfits in the Middle East,
Asia, North and Latin America and Europe we command a global presence.</p>
                </div>
                <br/>
                <div className="row">
         
                <h5 style={{color:'rgb(128,128,128)'}}>Sector Focus.</h5><br/> 
               
                </div>
                <div className="row">
                    <p><b>We cover the following key sectors:</b></p>
                </div>
                <div className="row">

                    <div className="col-4 p-4">
                        <div className="row">
                            <div className="col-12 text-center">
                            <span class="material-icons" style={{fontSize:'70px',color:'#C5303C'}}>
                            local_gas_station
</span>

                            </div>
                            <div className="col-12 text-center">
                            <b>Energy, </b> particularly Oil & Gas, Power/Electricity
                            </div>
                        </div>
                    </div>



                    <div className="col-4 p-4">
                        <div className="row">
                            <div className="col-12 text-center">
                            <span class="material-icons" style={{fontSize:'70px',color:'#C5303C'}}>
router
</span>

                            </div>
                            <div className="col-12 text-center">
                            Telecommunications
                            </div>
                        </div>
                    </div>



                    <div className="col-4 p-4">
                        <div className="row">
                            <div className="col-12 text-center">
                            <span class="material-icons" style={{fontSize:'70px',color:'#C5303C'}}>
engineering
</span>

                            </div>
                            <div className="col-12 text-center">
                            Infrastructure
                            </div>
                        </div>
                    </div>



                    <div className="col-4 p-4">
                        <div className="row">
                            <div className="col-12 text-center">
                            <span class="material-icons" style={{fontSize:'70px',color:'#C5303C'}}>
account_balance
</span>

                            </div>
                            <div className="col-12 text-center">
                            Banking and Finance
                            </div>
                        </div>
                    </div>



                    <div className="col-4 p-4">
                        <div className="row">
                            <div className="col-12 text-center">
                            <span class="material-icons" style={{fontSize:'70px',color:'#C5303C'}}>
spa
</span>

                            </div>
                            <div className="col-12 text-center">
                            Healthcare
                            </div>
                        </div>
                    </div>



                    <div className="col-4 p-4">
                        <div className="row">
                            <div className="col-12 text-center">
                            <span class="material-icons" style={{fontSize:'70px',color:'#C5303C'}}>
local_shipping
</span>

                            </div>
                            <div className="col-12 text-center">
                            Commodities
                            </div>
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


export default AboutUs