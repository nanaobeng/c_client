import React , {useState, useEffect} from 'react';
import data from '../data/service.json'
import Menu from "./Menu"
import logo from '../images/logo.png'
import Footer from './Footer'
import {Link} from 'react-router-dom'
import { isAuthenticated } from '../auth';
import {ExternalLink} from 'react-external-link'
const Service = (props) => {






    const [service , setService] = useState("")
  
   


    


    useEffect(() => {
        const serviceId = props.match.params.serviceId
        setService(serviceId)
       
     
     
    }, [props])

    return(
        <div>
           <div className="row">
        <div className="col-12">
  <header id="header" class="fixed-top header-transparent">
  <div class="container d-flex align-items-center">

<h1 class="logo mr-auto"><img className="img-fluid" src={logo}/></h1>


{!isAuthenticated() && ( <nav class="nav-menu d-none d-lg-block">
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
            
       <div className="container pt-4">
           {data.map((i)=> {
              
               return JSON.stringify(i.id) === JSON.stringify(service) ?
              
    
        <div>

            <div className="row">
            <div className="col-12 " >
            <span ><Link to="/services" style={{color:'orange'}}>Back to Services</Link></span>
        
        </div>
            </div>
        <div className=" row p-4" key={i.id}>
        <div className="col-12">
        <div className="row">
             <h2 style={{color:'#C5303C'}}>{i.name}</h2>
             </div>
              <div className="row">
                  <div class="divider"style={{width:'80px', borderStyle : 'solid' , borderColor:'#C5303C'}}></div>
                 </div>
                 </div>
                                    

           
         <div className="row">
        
           
             <div className="col-12">
             <br/>
                                    <br/>

                 <p>{i.paragraph_1}</p>

             </div>
             <div className="col-12">

                 <p>{i.paragraph_2}</p>

             </div>
             <div className="col-12">

                 <p>{i.paragraph_3}</p>

             </div>
             <div className="col-12">

                 <p>{i.paragraph_4}</p>

             </div>
             <div className="col-12">

                 <p>{i.paragraph_5}</p>

             </div>

        
        </div>
          
      
      


       
       </div>
       
     
     
       
       </div>
       : <div></div> })}
       </div>
       <Footer/>
       </div>

      



        
        )


}

export default Service