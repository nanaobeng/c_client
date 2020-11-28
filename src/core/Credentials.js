import React from 'react'
import logo from '../images/logo.png'
import t1 from '../images/tomb_1.png'
import t2 from '../images/tomb_2.png'
import t3 from '../images/tomb_3.png'
import t4 from '../images/tomb_4.png'
import t5 from '../images/tomb_5.png'
import t6 from '../images/tomb_6.png'
import t7 from '../images/tomb_7.png'
import t8 from '../images/tomb_8.png'
import tl1 from '../images/tl1.jpg'
import tl2 from '../images/tl2.jpg'
import tl3 from '../images/tl3.jpg'
import {Link} from 'react-router-dom'
import Footer from './Footer'
import { signout,isAuthenticated } from '../auth';
import { ExternalLink } from 'react-external-link';
import Menu from './Menu'
const Credentials = ({history}) => (
    <div>
<Menu/>

        <div className="row p-4">
       
            <div className="col-12 p-4" >

            <h3 style={{color:'#C5303C'}}>Transactions</h3>
            <div class="divider"style={{width:'40px', borderStyle : 'solid' , borderColor:'#C5303C'}}></div>
                </div>
            </div>

            <div className="row p-4">
            <div className="col-12 pl-4" >
                

            We have structured and executed some of the most exiting high-profile transactions in
our markets in recent times.<br/>
Selected recent transactions include:
                </div>
            </div>
    <div className="row p-4">

        <div className="col-md-4 col-sm-6 pb-4">
            <img src={t1} className="img-fluid w-100" tyle={{height:'100%'}}/>

      
        </div>
        <div className="col-md-4 col-sm-6 pb-4">
            <img src={t2} className="img-fluid w-100" style={{height:'100%'}}/>

      
        </div>

        <div className="col-md-4 col-sm-6 pb-4">
            <img src={t3} className="img-fluid w-100" style={{height:'100%'}}/>

      
        </div>
        <div className="col-md-4 col-sm-6 pb-4">
            <img src={t4} className="img-fluid w-100" style={{height:'100%'}}/>

      
        </div>
        <div className="col-md-4 col-sm-6 pb-4">
            <img src={t5} className="img-fluid w-100" style={{height:'100%'}}/>

      
        </div>
        <div className="col-md-4 col-sm-6 pb-4">
            <img src={t6} className="img-fluid w-100" style={{height:'100%'}}/>

      
        </div>
        <div className="col-md-4 col-sm-6 pb-4">
            <img src={t7} className="img-fluid w-100" style={{height:'100%'}}/>

      
        </div>
        <div className="col-md-4 col-sm-6 pb-4">
            <img src={t8} className="img-fluid w-100" style={{height:'100%'}}/>

      
        </div>

        <br/>
        <div className="row p-4">
            <div className='col-12'>
            <p>Our principals are among the best investment banking brains on the continent, with
vast and varied experience in originating and executing some of the biggest and most
prestigious transactions in the sub-region including:
</p>
<ul>
    <li>
    Ecobank’s acquisition of the Trust Bank to make Ecobank Ghana the largest and
most profitable bank in Ghana.
    </li>
    <li>US$900 million Divestiture of 70% of Government of Ghana’s Shares in Ghana
Telecom to Vodafone</li>
<li>
Ecobank’s acquisition of Oceanic Bank in Nigeria
</li>
<li>
US$900 million debt restructuring for Tema Oil Refinery
</li>
<li>
US$2.5 billion share offer for the Ecobank Group
</li>
<li>
Liquidation of Ghana Airways
</li>
</ul>


            </div>
        </div>


        <div className="row p-4">
       
       <div className="col-12 p-4" >

       <h3 style={{color:'#C5303C'}}>Thought Leadership</h3>
       <div class="divider"style={{width:'40px', borderStyle : 'solid' , borderColor:'#C5303C'}}></div>
           </div>
       </div>
 
       <div className="row p-4">
            <div className="col-12 pl-4" >
                

            Our thought leadership programmes in PPPs and structured and project finance
workshops have positioned us as the preferred advisor for major PPP and infrastructure
financing projects in the sub-region.
                </div>
            </div>
            <br/>
       <div className="row p-4">
       <div className="col-4 p-4" >

<img class="img-fluid w-100" src={tl3} style={{height:'100%'}} />
      
           </div>
       
       
           <div className="col-4 p-4" >

<img class="img-fluid w-100" src={tl2} style={{height:'100%'}} />
      
           </div>
           

           <div className="col-4 p-4" >

<img class="img-fluid w-100" src={tl1} style={{height:'100%'}} />
      
           </div>
       </div>
    </div>
    <Footer/>
    </div>
)


export default Credentials;