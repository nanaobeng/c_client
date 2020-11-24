import React ,{useState, useEffect} from 'react';

import Footer from './Footer';
import {addMailing} from '../admin/apiAdmin'
import { signout,isAuthenticated } from '../auth';
import {Link} from 'react-router-dom'
import logo from '../images/logo.png'
import { ExternalLink } from 'react-external-link';


const Contact = ({history}) => {


  const [values,setValues] = useState({
    email:'',
 
   

  
  
    
    
loading : false ,
error : '',
createdInsight : true,
redirectToProfile: false,
formData: ''
})
const {

    email,
  

 
loading ,
error ,
createdInsight ,
redirectToProfile,
formData

} = values;


useEffect (() => {
  
   
    
  setValues({...values, formData: new FormData()})
  
}, [])


const handleChange = name => event => {
    
  const value = name === 'photo'  ? event.target.files[0] :  event.target.value

  formData.set(name,value)
  setValues({ ...values, [name]: value})
}

const clickSubmit = (event) => {
  event.preventDefault();
  setValues({
      ...values, error:'',loading:true,
  });

  console.log(formData)

  addMailing(formData)
  .then(data => {
      if(data.error){
          setValues({...values,error:data.error})
      }
      else {
          setValues({
              ...values, email:'', 
          
             
        
          loading : false ,
      //error : '',
      createdInsight : true,
      //redirectToProfile: false,
          })
          alert('Subscription Completed')
      }
  })
}


const showError = () => {
  if(error){
      return <div className="alert alert-danger">
      {error}
  </div>
  }
  
  
}


const showSuccess = () => {
  createdInsight && (<div className="alert alert-info">
  <h2>{`$Subscription Complete` }</h2>
</div>)
  

}


const showLoading = () => (

  loading && (<div class=" p-2 spinner-border"></div>)
)

  const newPostForm = () => (
    <form className="mb-3" onSubmit={clickSubmit}>
       
      

        <div className="row p-4 justify-content-center">
        <div className="col-12 text-center">
    <span class="material-icons" style={{fontSize:'120px',color:'#C5303C'}}>
campaign
</span>
    </div>
        <div className="col-12 text-center p-4 justify-content-center" >

<h3 style={{color:'#C5303C'}}>Join Our Mailing List</h3>
<div className="row justify-content-center">
  
    <div className="col-4">
   

<div class="divider"style={{width:'100%', borderStyle : 'solid' , borderColor:'#C5303C'}}></div>
    

    </div>
   
</div>

    </div>
     <div className="col-12">
     {showSuccess}
     </div>
       <div className="col-12 p-3 text-center">

         {showError}

       {showLoading()}

       </div>
            <div className="col-5 text-center">
            <div class="input-group mb-3">
          
  <input onChange={handleChange('email')}  type="email" className="form-control" value={email} placeholder="Email Address..." required/>
  <div class="input-group-append">
    <button class="btn btn-outline-danger" type="submit">Subscribe</button>
  </div>
</div>
            </div>
           
            
        </div>
       
     
     


    </form>
)


    return (
    <div>

        <div className="row">
        <div className="col-12">
  <header id="header" class="fixed-top header-transparent">
  <div class="container d-flex align-items-center">

<h1 class="logo mr-auto"><img className="img-fluid" src={logo}/></h1>


{!isAuthenticated() && (<nav class="nav-menu d-none d-lg-block">
  <ul>
    <li ><Link to="/"> Home</Link></li>
    <li ><Link to="/about-us"> About</Link></li>
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
    <li class="active"><Link to="/contact"> Contact Us</Link></li>
    
  

  </ul>
</nav>)}
{isAuthenticated() && (<nav class="nav-menu d-none d-lg-block">
  <ul>
    <li ><Link to="/"> Home</Link></li>
    <li ><Link to="/about-us"> About</Link></li>
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
    <li class="active"><Link to="/contact"> Contact Us</Link></li>

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
    <h1> Contact Us</h1>
    
    </div>
  </section>
  </div>
        </div>

        

        <div className="row p-4 justify-content-center">
       <div className="col-12">
       
       {newPostForm()}
       </div>
            <div className="col-lg-12 col-sm-12">
            <div className="row">
                                    <div className="col-12 ">

        
<div className="row justify-content-center">
<div className="col-12 text-center p-4 justify-content-center" >

<h3 style={{color:'#C5303C'}}>Contact Us</h3>
<div className="row justify-content-center">
    <div className="col-4">
   

<div class="divider"style={{width:'100%', borderStyle : 'solid' , borderColor:'#C5303C'}}></div>
    

    </div>
</div>

    </div>
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
    <span className="btn btn-outline-danger" style={{width:'100%'}}> Send Message</span>
  </div>



</div>

</div>
                                    </div>

            </div>
           
        </div>
        <div className="row p-4">
        <div class="col-md-4 text-center col-sm-6 p-4 footer-contact">
       <b style={{color:'#C5303C'}}> HEAD OFFICE</b>
        <br/>
        <br/>
        <p>
        

        Bryanston Gate Office, <br/>
        Park 170 Curzon Road - Bryanston,<br/>
        P. O. Box 787599 , <br/>
        Sandton - SOUTH AFRICA<br/>
        <br/> 
  
         
        </p>
      </div>
     





      <div class="col-md-4 col-sm-6 text-center p-4 footer-contact">
       <b style={{color:'#C5303C'}}> GHANA OFFICE</b>
        <br/>
        <br/>
        <p>
        
        4th Floor, Special House, <br/>
        14 Senchi Street, Airport Residential,<br/>
        P. O. Box CT 9549, <br/>
        Cantonments, Accra, GHANA<br/>
        <br/> 

        </p>
      </div>


      <div class="col-md-4 col-sm-6 text-center p-4 footer-contact">
       <b style={{color:'#C5303C'}}> NIGERIA OFFICE</b>
        <br/>
        <br/>
        <p>
        

  
        12 Inuwa Wada Crescent, <br/>
        Off T.O.S Benson Crescent by Okonjo,<br/>
        Iweala Way, Utako, Abuja, NIGERIA, <br/>
        
        <br/> 
 
        </p>
      </div>
        </div>
     
        <br/>
        
        

<Footer/>
</div>
)
}


export default Contact