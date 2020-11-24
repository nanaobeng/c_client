import React , {useState, useEffect} from 'react';
import Individual from "../data/team.json";
import logo from "../images/logo.png"
import {getTeamFilteredProducts} from './apiCore'
import {Link} from 'react-router-dom'
import ShowImage from './ShowIndividualTeamImage'
import { ExternalLink } from 'react-external-link';
import { isAuthenticated } from '../auth';

const TeamMember = (props) => {

  const[myFilters, setMyFilters] = useState({
    filters: { category: ['csr'] }
})

const individualId = props.match.params.individualId


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




    const [individual , setIndividual] = useState("")
  
   


    


    useEffect(() => {
        const individualId = props.match.params.individualId
        setIndividual(individualId)
       
     
     
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
         
          <li><ExternalLink href="http://www.pppglobalconferences.org/">Events</ExternalLink></li>
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


         
         {filteredResults.map((insight,i)=> (
       insight._id === individualId && 
           
               
               
        
        <div className=" row p-4 justify-content-center" key={i.id}>
            <div className="col-12 p-4" >
               <span ><Link to="/team" style={{color:'orange'}}>Back to Team</Link></span>
           
           </div>

       

           
         <div className="col-4">

            
         <ShowImage item={insight} url="product" style={{width:'100%',height:'300px'}}/>

         </div>

         <div className="col-7">
            <div className="row">
            <div className="col-12">
            <b style={{fontSize:'50px'}}>{insight.name}</b>
            <hr/>
                </div>
                </div>

                <div className="row">
            <div className="col-12">
            <b style={{fontSize:'25px'}}>{insight.role}</b>
                </div>
                </div>
                <br/>
                <div className="row">
           
                <div className="col-12" dangerouslySetInnerHTML={{__html: insight.description}}></div>
     

      
      </div>
           

         </div>
        
         <br/>
    
          
      
      


       
       </div>
       
     
     
       
       
         ))}
     
       </div>

      



        
        )


}

export default TeamMember