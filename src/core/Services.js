import React from 'react';

import Footer from './Footer';

import {Link} from 'react-router-dom'
import logo from '../images/logo.png'
import Menu from './Menu'
import { signout,isAuthenticated } from '../auth';
import {ExternalLink} from 'react-external-link'


const Services = ({history}) => {
    return (
    <div >

<Menu/>


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
          <div class="col-md-6 col-sm-12 pt-4 pt-lg-0" >
            <br/>
            <br/>
            <h3 style={{color:'#C5303C'}}>A Culture of Team Work and Collaboration</h3>
            <p style={{color:'black'}}>
            We a full service advisory and investment banking firm offering two major services.
            </p>
            <div class="row pt-4">
              <div class="col-lg-6 col-md-12 col-sm-12 ">
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
              <div class="col-lg-6 col-md-12 col-sm-12">
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
                     <ExternalLink style={{color:'#C5303C'}} href="/service/3" className="txt" target="_self">  Read more</ExternalLink>
                </div>
            </div>
        </div>

    </div>




    





    <div className=" col-md-6 col-sm-12 pb-4">
        <div class="card serv products" style={{borderColor : '#C5303C'}}>
            <div class="card-body" style={{height: '250px'}}>
                <h2>Corporate Finance</h2>
                <div class="divider" style={{width:'40px', borderStyle : 'solid' , borderColor:'#C5303C'}}></div>
                <div className="container">
                <div class="row">
                    <br></br>
                The ultimate objective of the service is to create liquidity, ensure financial stability for operations and third party confidence in the client company
                </div>
                <br/>
                <br/>
                
                </div>
                <div class="pb-3"  style={{position : 'absolute' ,bottom   : '0'}}>
                    
                  
       <ExternalLink style={{color:'#C5303C'}} href="/service/1"  className="txt" target="_self">  Read more</ExternalLink>
          
                    
                    
                </div>
            </div>
        </div>

    </div>



    <div className=" col-md-6 col-sm-12 pb-4">
        <div class="card serv products" style={{borderColor : '#C5303C'}}>
            <div class="card-body" style={{height: '250px'}}>
                <h2>Structured Finance</h2>
                <div  class="divider" style={{width:'40px', borderStyle : 'solid' , borderColor:'#C5303C'}}></div>
                <div className="container">
                <div class="row">
                    <br></br>
                    Our PPP practice takes a significant cue from the attractiveness of structured finance to both local and international banks and funds that have significant appetite for various project finance opportunities in Africa.
                </div>
                <br/>
                <br/>
                
                </div>
                <div class="pb-3"  style={{position : 'absolute' ,bottom   : '0'}}>
                  <ExternalLink  style={{color:'#C5303C'}} href="/service/2"  className="txt" target="_self">  Read more</ExternalLink>
                </div>
            </div>
        </div>

    </div>



    <div className=" col-md-6 col-sm-12 pb-4">
        <div class="card serv products" style={{borderColor : '#C5303C'}}>
            <div class="card-body" style={{height: '250px'}}>
                <h2>PPP Solutions</h2>
                <div  class="divider" style={{width:'40px', borderStyle : 'solid' , borderColor:'#C5303C'}}></div>
                <div className="container">
                <div class="row">
                    <br></br>
                    Our aim is to oﬀer a one-stop service to governments and communities managing the planning, feasibility studies, ﬁnancing, design, procurement, construction, management and operation of Public-Private Partnerships (PPPs)
                </div>
                <br/>
                <br/>
                
                </div>
                <div class="pb-3"  style={{position : 'absolute' ,bottom   : '0'}}>
                   <ExternalLink style={{color:'#C5303C'}} href="/service/5"  className="txt" target="_self">  Read more</ExternalLink>
                </div>
            </div>
        </div>

    </div>




    <div className=" col-md-6 col-sm-12 pb-4">
        <div class="card serv products" style={{borderColor : '#C5303C'}}>
            <div class="card-body" style={{height: '250px'}}>
                <h2>Mergers & Acquisitions</h2>
                <div class="divider" style={{width:'40px', borderStyle : 'solid' , borderColor:'#C5303C'}}></div>
                <div className="container">
                <div class="row">
                    <br></br>
                    Our aims is to provide a full suite of transactions, including mergers advice, acquisitions, leveraged buyouts, joint ventures, spin-offs, divestitures and other restructurings.
                </div>
                <br/>
                <br/>
                
                </div>
                <div class="pb-3"  style={{position : 'absolute' ,bottom   : '0'}}>
                  <ExternalLink style={{color:'#C5303C'}} href="/service/4"  className="txt" target="_self">  Read more</ExternalLink>
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