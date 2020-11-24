import React, { useState, useEffect } from 'react';
import RichTextEditor from 'react-rte';
import {signout, isAuthenticated } from '../auth';
import { Link, Redirect } from 'react-router-dom';
import { getTeamMember, updateTeam } from './apiAdmin';
import MDEditor from '@uiw/react-md-editor';
import logo from '../images/logo.png'
import {ExternalLink} from 'react-external-link'
const UpdateProduct = ({ match ,history}) => {
    const [mk, setMk] = useState("");
    const [values, setValues] = useState({
        name: '',
        description: '',
        role: '',
        rtf: RichTextEditor.createEmptyValue(),
       
        photo: '',
        loading: false,
        error: false,
        createdProduct: '',
        redirectToProfile: false,
        formData: ''
    });
 

    const { user, token } = isAuthenticated();
    const {
        name,
        description,
        role,
        rtf,
        loading,
        error,
        createdProduct,
        redirectToProfile,
        formData
    } = values;

    const init = productId => {
        getTeamMember(productId).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                // populate the state
                setValues({
                    ...values,
                    name: data.name,
                    description: data.description,
                    
                    role: data.role,
                  
                    formData: new FormData()
                });

             
                // load categories
         
            }
        });
    };



    useEffect(() => {
        init(match.params.productId);
    }, []);

    const handleChange = name => event => {
        const value = name === 'photo' ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value });
    };

    const clickSubmit = event => {
        formData.set('description', mk);
        event.preventDefault();
        setValues({ ...values, error: '', loading: true });

        updateTeam(match.params.productId, user._id, token, formData).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    name: '',
                    description: '',
                    photo: '',
                    role: '',
                   
                    loading: false,
                    error: false,
                    redirectToProfile: true,
                    createdProduct: data.name
                });
            }
        });
    };

    const newPostForm = () => (
        <form className="mb-3" onSubmit={clickSubmit}>
            <br/>
            <h4>Upload Image</h4>
            <div className="form-group">
                <label className="btn btn-secondary">
                    <input onChange={handleChange('photo')} type="file" name="photo" accept="image/*" />
                </label>
            </div>

            <div className="form-group">
                <label className="text-muted">Name</label>
                <input onChange={handleChange('name')} type="text" className="form-control" value={name} />
            </div>

            <div className="form-group" style={{display:'none'}}>
                <label className="text-muted">Description</label>
                <textarea onChange={handleChange('description')} rows="15" className="form-control"  value={description} />
            </div>
            <div className="form-group">
            <label className="text-muted">Description</label>
      <MDEditor
        value={description}
        onChange={setMk}
      />
 
    </div>


            <div className="form-group">
                <label className="text-muted">Role</label>
                <input onChange={handleChange('role')} type="text" className="form-control" value={role} />
            </div>


       
            

           

         

            <button className="btn btn-outline-primary">Update Team Member</button>
        </form>
    );

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: createdProduct ? '' : 'none' }}>
            <h2>{`${createdProduct}`} is updated!</h2>
        </div>
    );

    const showLoading = () =>
        loading && (
            <div className="alert alert-success">
                <h2>Loading...</h2>
            </div>
        );

    const redirectUser = () => {
        if (redirectToProfile) {
            if (!error) {
                return <Redirect to="/" />;
            }
        }
    };

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
<h1>  Update Team Member</h1>
    
    </div>
  </section>
  </div>
        </div>
               <br/>
              <div className="p-4" >
            <Link to ="/admin/dashboard" className="text-warning">
                Back to dashboard
                </Link>
        </div>
        <br/>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {showLoading()}
                   
                    {newPostForm()}
                    <br/>
                    {showSuccess()}
                    {showError()}
                    {redirectUser()}
                </div>
            </div>
            </div>
    );
};

export default UpdateProduct;
