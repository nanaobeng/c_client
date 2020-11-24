import React, { useState, useEffect } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { signout, isAuthenticated } from '../auth';
import { Link, Redirect } from 'react-router-dom';
import { getInsight, updateInsight } from './apiAdmin';
import logo from '../images/logo.png'
import {ExternalLink} from 'react-external-link'
const UpdateInsights = ({ match ,history}) => {
    const [mk, setMk] = useState("");
    const [values, setValues] = useState({
        title: '',
        description: '',
        category: '',
     
       
        photo: '',
        loading: false,
        error: false,
        createdProduct: '',
        redirectToProfile: false,
        formData: ''
    });
 

    const { user, token } = isAuthenticated();
    const {
        title,
        description,
        category,
   
        loading,
        error,
        createdProduct,
        redirectToProfile,
        formData
    } = values;

    const init = productId => {
        getInsight(productId).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                // populate the state
                setValues({
                    ...values,
                    title: data.title,
                    description: data.description,
                    category: data.category,
                    
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

        updateInsight(match.params.productId, user._id, token, formData).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    title: '',
                    description: '',
                    photo: '',
                    category: '',
                   
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
            <h4>Upload Attachment</h4>
            <div className="form-group">
                <label className="btn btn-secondary">
                    <input onChange={handleChange('photo')} type="file" name="photo" accept="image/*" />
                </label>
            </div>

            <div className="form-group">
                <label className="text-muted">Title</label>
                <input onChange={handleChange('title')} type="text" className="form-control" value={title} />
            </div>

            <div className="form-group" style={{display:'none'}}>
                <label className="text-muted">Description</label>
                <textarea onChange={handleChange('description')} className="form-control" value={description} />
            </div>
            <div className="form-group">
            <label className="text-muted">Description</label>
      <MDEditor
        value={description}
        onChange={setMk}
      />
 
    </div>

            <div className="form-group">
                <label className="text-muted"> Category</label>
                <input onChange={handleChange('category')} type="text" className="form-control" value={category} readOnly/>
            </div>

            

           

         

            <button className="btn btn-outline-primary">Update Insight</button>
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
<h1>  Update Insight</h1>
    
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

export default UpdateInsights;
