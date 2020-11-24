


import React, { useState } from 'react'

import { signout,isAuthenticated } from '../auth';
import {Link} from 'react-router-dom';
import {createCategory} from './apiAdmin'
import {signup}  from '../auth'
import Menu from '../core/Menu'
import logo from '../images/logo.png'
import {ExternalLink} from 'react-external-link'
const AddAdmin = ({history}) => {


    const [values, setValues] = useState(
        {
            name: '',
            email: '',
            password: '',
            password2:'',
            role:1,
            error: '',
            success:false
        }
    )

        
    const {name,email,password , role, success, error,password2} = values
    const handleChange = name => event => {

        setValues({...values, error:false, [name]:event.target.value})

    }

   

    const clickSubmit = (event) =>{
        event.preventDefault()
        if(password2 !== password){
            setValues({ ...values,error:'Passwords do not match',success:false})
        }
        else{
            setValues({ ...values,error:false})
            signup({name,email,password,role})
            .then(data => {
                if(data.error){
                    setValues({ ...values, error: data.error,success:false})
                }else{
                    setValues({
                        ...values,
                        name: '',
                        email: '',
                        password: '',
                        password2:'',
                        role:1,
                        error: '',
                        success:true
                    })
                }
            })
        }  
       

    }



    const signUpForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input onChange={handleChange('name')} type="text" className="form-control" value={name}/>
            </div>

            <div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={handleChange('email')} type="email" className="form-control" value={email}/>
            </div>


            <div className="form-group">
                <label className="text-muted">Password</label>
                <input onChange={handleChange('password')} type="password" className="form-control" value={password}/>
            </div>


            <div className="form-group">
                <label className="text-muted">Confirm Password</label>
                <input onChange={handleChange('password2')} type="password" className="form-control" value={password2}/>
            </div>
            
     
            <div className="row">
                <div className="col-12">
                <button onClick={clickSubmit} style={{width:'100%',backgroundColor: '#C5303C'}} className="btn"><span style={{color:'white'}}>Create Administrator</span></button>
                </div>
            </div>
            <br/>
            
        </form>
    )

    const showError = () => (

        <div className="alert alert-danger" style={{display:error ? '' : 'none'}}>
            {error}
        </div>
    )

    const showSuccess = () => (
        <div className="alert alert-info" style={{display:success ? '' : 'none'}}>
            New administrator has been created
        </div>
    )
    return(
    <div >
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
              <li ><Link to="/insights/knowledge_bank"> Knowledge Bank</Link></li>
          
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
<h1> Create Admin User</h1>
    
    </div>
  </section>
  </div>
        </div>
            
        <div class="row p-4"  style={{height:'100vh'}}>
        
        <div className="col-12 pt-4" >
            <Link style={{color:'orange'}} to="/admin/dashboard">Back to dashboard</Link>

        </div>
      
       <div className="col-12 p-4" style={{padding:'50px',paddingTop:'10px'}}>
           
           <div className="row text-center">
               <div className="col-12 justify-content-center">
               <b style={{color:'gray'}}> Create Administrator</b>
               </div>
              
           </div>
           {showSuccess()}
            {showError()}
{signUpForm()}
           </div>
          

       

</div>
            
</div>

    )
}

export default AddAdmin