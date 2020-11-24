import React, { useState , useEffect} from 'react'
import RichTextEditor from 'react-rte';
import {signout, isAuthenticated } from '../auth';
import {Link} from 'react-router-dom';
import {createEmployee } from './apiAdmin';
import logo from '../images/logo.png'
import {ExternalLink} from 'react-external-link'
 
const AddTeamMember = ({history}) => {

    const {user,token} = isAuthenticated()


    
 
    const [values,setValues] = useState({
        name:'',
     
        role:'',
  
       rtf: RichTextEditor.createEmptyValue(),
        photo:'',
        description:'no text',
        
        
    loading : false ,
error : '',
createdInsight : '',
redirectToProfile: false,
formData: ''
    })
    const {

        name,
      description,
      rtf,

     role,
    loading ,
error ,
createdInsight ,
redirectToProfile,
formData

    } = values;




    useEffect (() => {
  
   
    
        setValues({...values, formData: new FormData()})
        
    }, [])

    useEffect (() => {
  
        let name = 'rtf'
        let value =rtf.toString('html')
    
        console.log(value)
     
        handleChanges(name,value)
        
 
        

        
 

        
    }, [rtf])



const handleChanges = (p1,p2) => {

    
console.log(p1 + ' : ' + p2)
console.log(description)


}

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
    formData.set('description',rtf.toString('html'))
    console.log(formData)

    createEmployee(user._id,token,formData)
    .then(data => {
        if(data.error){
            setValues({...values,error:data.error})
        }
        else {
            setValues({
                ...values, name:'', 
            
               
                photo:'',
            loading : false ,
        //error : '',
        createdInsight : data.name,
        //redirectToProfile: false,
            })
        }
    })
}
 

const newPostForm = () => (
    <form className="mb-3" onSubmit={clickSubmit}>
        <br/>
        <br/>
        <h4>Upload Image</h4>
        <div className="form-group">
            <label className="btn btn-outline-secondary"> 
            <input onChange={handleChange('photo')} type="file" name="photo" accept="image/*" />
            </label>
        </div>
        <div className="form-group">
            <label className="text-muted">Name</label>
            <input onChange={handleChange('name')}  type="text" className="form-control" value={name} />
            
        </div>

      

    

        <div className="form-group">
            <label className="text-muted">Role</label>
            <input onChange={handleChange('role')}  type="text" className="form-control" value={role} />
            
        </div>

        <div className="form-group "  style={{display:'none'}}>
            <label className="text-muted">Description</label>
            <input onChange={handleChange('description')}  type="text" class="form-control" value={description} />
            
        </div>

        <div className="form-group">
        <label className="text-muted">Description</label>
        <RichTextEditor
        value={rtf}
        onChange={value => setValues({ ...values,rtf:value })} 
    
      />
            
        </div>
       

        

       
     
        <button className="btn btn-outline-primary"> Add Employee</button>


    </form>
)
const showError = () => {
    if(error){
        return <div className="alert alert-danger">
        {error}
    </div>
    }
    
    
}


const showSuccess = () => {
    if(createdInsight){
        return <div className="alert alert-info">
        <h2>{`${createdInsight} is created` }</h2>
    </div>
    }
}


const showLoading = () => (

    loading && (<div className="alert alert-info">

        <h2>Loading...</h2>

    </div>)
)
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
<h1> Add Team Member</h1>
    
    </div>
  </section>
  </div>
        </div>
            
            <br/>
              <div className="col-12 p-4">
            <Link to ="/admin/dashboard" className="text-warning">
                Back to dashboard
                </Link>
        </div>
        <div className="row">
            <div className="col-md-8 offset-md-3">
               
            
              {newPostForm()}
              <br/>
              {showError()}
              <br/>
              {showLoading()}
              <br/>
                {showSuccess()}
                <br/>
            
        <br/>
        <br/>

                </div>
             
            
        </div>
            
            
      </div>

    )

    
}
 export default AddTeamMember;
