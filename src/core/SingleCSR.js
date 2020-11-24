import React , {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import logo from '../images/logo.png'
import {readNews} from './apiCore'
import {getNewsletters} from './apiCore'
import {getFilteredProducts} from './apiCore'
import ShowImage from './ShowTeamImage'
import { isAuthenticated } from '../auth';
import {ExternalLink} from 'react-external-link'
const SingleCSR = (props) => {


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
        getFilteredProducts(skip,limit,newFilters)
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
        getFilteredProducts(toSkip,limit,myFilters.filters)
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
    <li ><Link to="/about-us"> About</Link></li>
    <li><Link to="/services"> Services</Link></li>
    <li><Link to="/team"> Team</Link></li>
    <li><Link to="/credentials"> Credentials</Link></li>
    <li class="drop-down active"><a href="">Insights</a>
            <ul>
              <li><Link to="/insights/knowledge_bank"> Knowledge Bank</Link></li>
          
              <li className="active"><Link to="/insights/csr"> CSR Projects</Link></li>
              <li ><Link to="/insights/newsletters"> Newsletters</Link></li>
             
            </ul>
          </li>
          <li><ExternalLink href="http://www.pppglobalconferences.org/">Events</ExternalLink></li>
    <li ><Link to="/contact"> Contact Us</Link></li>

    
  

  </ul>
</nav>)}



{isAuthenticated() && ( <nav class="nav-menu d-none d-lg-block">
  <ul>
    <li ><Link to="/"> Home</Link></li>
    <li><Link to="/about-us"> About</Link></li>
    <li ><Link to="/services"> Services</Link></li>
    <li><Link to="/team"> Team</Link></li>
    <li><Link to="/credentials"> Credentials</Link></li>
    <li class="drop-down active"><a href="">Insights</a>
            <ul>
              <li><Link to="/insights/knowledge_bank"> Knowledge Bank</Link></li>
          
              <li className="active"><Link to="/insights/csr"> CSR Projects</Link></li>
              <li ><Link to="/insights/newsletters"> Newsletters</Link></li>
             
            </ul>
          </li>
          <li><ExternalLink href="http://www.pppglobalconferences.org/">Events</ExternalLink></li>
    <li ><Link to="/contact"> Contact Us</Link></li>
    <li  ><Link to="/admin/dashboard"> Dashboard</Link></li>
    
  

  </ul>
</nav>)}

</div>
  </header>

    
    <section id="hero2" class="d-flex align-items-center justify-content-center">
    <div class="container position-relative">
    <h1> Newsletters</h1>
    
    </div>
  </section>
  </div>
        </div>

<div className="row">
            <div className="col-12 p-4">
                <br/>
                <Link to="/insights/csr" style={{color:'#C5303C'}}>Back</Link>
            </div>
           
           
            {filteredResults.map((insight,i)=> (
       insight._id === individualId && <div className="col-12">

           <div className="row p-4">

        

               <div className="col-12 text-center">
               <h1>{insight.title}</h1>
                   </div>

               <div className="col-12 p-4" style={{color:'grey'}} dangerouslySetInnerHTML={{__html:  insight.description}}>

                   

                   </div>

               </div>





       </div>) )}
            
     </div>
      


</div>
        
        )


}

export default SingleCSR