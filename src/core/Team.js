
import React , {useState, useEffect} from 'react';
import Footer from './Footer';
import {Link} from 'react-router-dom'
import {getTeamFilteredProducts} from './apiCore'
import logo from '../images/logo.png'
import ShowImage from './ShowTeamImage'
import { signout,isAuthenticated } from '../auth';
import {ExternalLink} from 'react-external-link'
const Team = ({history}) => {

    const[myFilters, setMyFilters] = useState({
        filters: { role: [] }
    })


   
    const [error , setError ] = useState (false)
    const [limit , setLimit ] = useState (6)
    const [skip , setSkip ] = useState (0)
    const [size , setSize ] = useState (0)
    const [filteredResults, setfilteredResults] = useState ([])



    const loadFilteredResults = (newFilters) => {
        //console.log(newFilters)
        getTeamFilteredProducts(skip,limit,newFilters)
        .then(data => {
            if(data.error){
                setError(data.error)
            }
            else{
                setfilteredResults(data.data)
                setSize(data.size)
                setSkip(0)
            }
        })
    }


    const loadMore = () => {
       let toSkip = skip + limit
        getTeamFilteredProducts(toSkip,limit,myFilters.filters)
        .then(data => {
            if(data.error){
                setError(data.error)
            }
            else{
                setfilteredResults([...filteredResults ,...data.data])
                setSize(data.size)
                setSkip(toSkip)
            }
        })
    }

    const loadMoreButton = () => {
        return (
            size > 0 && size >= limit && (
      
                    <span onClick={loadMore} className=" btn btn-outline-dark text-center justify-content-center  ">Load more</span>
                

                
            )
        )
    }

    useEffect(() => {

       
        loadFilteredResults(skip,limit,myFilters.filters)
        
    }, [])


    const handleFilters = (filters,filterBy) => {
        
        const newFilters = {...myFilters}
        newFilters.filters[filterBy] = filters
       
       loadFilteredResults(myFilters.filters)
        setMyFilters(newFilters)
    }





    return (
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
    <li ><Link to="/services"> Services</Link></li>
    <li class="active"><Link to="/team"> Team</Link></li>
    <li><Link to="/credentials"> Credentials</Link></li>
    <li class="drop-down"><a href="">Insights</a>
            <ul>
              <li><Link to="/insights/knowledge_bank"> Knowledge Bank</Link></li>
          
              <li><Link to="/insights/csr"> CSR Projects</Link></li>
              <li><Link to="/insights/newsletters"> Newsletters</Link></li>
             
            </ul>
          </li>
    <li ><Link to="/contact"> Contact Us</Link></li>
    
  

  </ul>
</nav>)}



{isAuthenticated() && ( <nav class="nav-menu d-none d-lg-block">
  <ul>
    <li ><Link to="/"> Home</Link></li>
    <li ><Link to="/about-us"> About</Link></li>
    <li><Link to="/services"> Services</Link></li>
    <li className="active"><Link to="/team"> Team</Link></li>
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
<h1> Our Team</h1>
    
    </div>
  </section>
  </div>
        </div>

       
        
     <div className="container">
         <div className="row pb-4">
             <div className="col-12 p-4" >
            <h4>Our principals are among the best investment banking brains on the continent , with fast and varied experience in originating and excuting some of the biggest and most prestigious transactions in our markets.</h4> 
             </div>
         </div>


         <div className="row p-4">
         {filteredResults.map((insight,i)=> ( 

<div className="col-6 p-4" key={i}>
<div className="row">
    <div className="col-12 text-center">
    <ShowImage item={insight} url="product" style={{width:'100%'}}/>

    </div>
    <div className="col-12 text-center">
        <br></br>
       <b>{insight.name} </b>

    </div>
    <div className="col-12 text-center">
    {insight.role}
        

    </div>


     <div className="col-12 text-center" style={{color:'green'}}>
         <br/>
       
        <Link to={`/team/${insight._id}`}> Read More</Link>
        

    </div>
</div>
</div>


         ))}
             



           


             
         </div>
         
     </div>
 
<Footer/>
</div>
)
}


export default Team