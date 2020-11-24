import React, {Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
import { ExternalLink } from 'react-external-link';

import logo from '../images/logo.png'
const Footer = () => (

<footer id="footer">

<div class="footer-top">
  <div class="container">
    <div class="row">

      <div class="col-4 footer-contact">
        <img className="img-fluid" src={logo} style={{width:'60%'}}/>
        <br/>
        <br/>
        <p>
        

4th Floor, Special House, <br/>
14 Senchi Street,<br/>
Airport Residential, Accra, GHANA  <br/><br/>
          <strong>Phone:</strong> + 233 302 789 011<br/>
          <strong>Email:</strong> info@cnergyglobalholdings.com<br/>
        </p>

        <div className="row">
        <div className="col-12">
  <section id="clients1" class="clients1 section-bg">
      <div >

        <div class="row">

      

          <div class="col-lg-6 col-md-4 col-6 d-flex  ">
          <ExternalLink href="https://www.linkedin.com/company/c-nergy-global-holdings/">
          <img src="https://img.flaticon.com/icons/png/512/174/174857.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" class="img-fluid" alt="" />
    </ExternalLink>
         
            
          </div>

           



          
        </div>

      </div>
    </section>
  </div>
        </div>
      </div>

      <div class="col-4 footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><i class="bx bx-chevron-right"></i> <Link to="/">Home</Link></li>
          <li><i class="bx bx-chevron-right"></i> <Link to="/about-us">About Us</Link></li>
          <li><i class="bx bx-chevron-right"></i> <Link to="/services">Services</Link></li>
          <li><i class="bx bx-chevron-right"></i> <Link to="/tean">Team</Link></li>
          <li><i class="bx bx-chevron-right"></i> <Link to="/credentials">Credentials</Link></li>
          <li><i class="bx bx-chevron-right"></i> <Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>

      <div class="col-4 footer-links">
        <h4>Our Services</h4>
        <ul>
          <li><i class="bx bx-chevron-right"></i> <Link to="/service/1">Corporate Finance</Link></li>
          <li><i class="bx bx-chevron-right"></i> <Link to="/service/3">Project Finance</Link></li>
          <li><i class="bx bx-chevron-right"></i> <Link to="/service/2">Strucured Finance</Link></li>
          <li><i class="bx bx-chevron-right"></i> <Link to="/service/5">PPP Solutions</Link></li>
          <li><i class="bx bx-chevron-right"></i> <Link to="/service/4">Mergers & Acquisitions</Link></li>
        </ul>
      </div>

   

    </div>
  </div>
</div>
<div className="row p-4">
    <div className="col-12 p-4 text-center">
    © Cy-nergy Global Holdings 2020
    </div>
</div>

</footer>

)
export default Footer

