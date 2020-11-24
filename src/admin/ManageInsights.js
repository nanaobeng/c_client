import React, { useState, useEffect } from "react";
import logo from '../images/logo.png'
import {signout, isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getInsights, deleteInsight } from "./apiAdmin";
import {ExternalLink} from 'react-external-link'

const ManageInsights = ({history}) => {
    const [products, setProducts] = useState([]);
    
    let revenue = 0
    let stockValue = 0

    const { user, token } = isAuthenticated();

    const loadProducts = () => {
        getInsights().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setProducts(data);
            }
        });
    };

    const destroy = productId => {
        deleteInsight(productId, user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                loadProducts();
            }
        });
    };

    useEffect(() => {
        loadProducts();
    }, []);

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
<h1>  Manage Insights</h1>
    
    </div>
  </section>
  </div>
        </div>
           
            <div className="row justify-content-center">
                <br/>
            <div class="col-10 justify-content-center">
            <br/>
            <br/>
                           
                </div>
            </div>
            <div className="row pl-4 pt-2 pb-4">
                <div className="col-12">
                    <Link to="/admin/dashboard" style={{color:'orange'}}>Back to Dashboard</Link>
                </div>
            </div>
            <div className="row  justify-content-center " >
                <div className="col-10 shadow-lg p-3 mb-5 bg-white rounded">
                    <div className="row p-4">
                        <div className="col-12">
                        <div className="row ">
                                   <div className="col-4">
                                        <b>Title</b>
                                   </div>
                                   <div className="col-4">
                                   <b>Category</b>
                                   </div>
                                 
                                   <div className="col-2">
                                       
                                   </div>
                                   <div className="col-2">
                                       
                                   </div>
                               </div>
                               <hr/>
                               
                        </div>
                    </div>

                    <div className="row ">
                        <div className="col-12">
                        {products.map((p, i) => (
                                    
                                    
                               <div className="row p-4" key={i}>
                                   <div className="col-4">
                                <strong>{p.title}</strong>

                                   </div>
                                   <div className="col-4">
                                 {p.category}
                                   </div>
                                
                                  
                                   <div className="col-2">
                                   <Link to={`/admin/insight/update/${p._id}`}>
                                    <span className="badge badge-warning badge-pill">
                                        Update
                                    </span>
                                </Link>
                                       
                                   </div>
                                   <div className="col-2">
                                  
                                <span   onClick={() => {if(window.confirm('Are you sure you want to delete this item?')){destroy(p._id)};}} style={{color:'red'}} class="material-icons">
delete_forever
</span>
                                       
                                   </div>
                               </div>
                               
                               
                                  ))}
                        </div>
                    </div>
                </div>
            </div>
            
            </div>
    );
};

export default ManageInsights;
