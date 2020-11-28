
import React , {useState, useEffect} from 'react';
import Footer from './Footer';
import {Link} from 'react-router-dom'
import {getTeamFilteredProducts} from './apiCore'
import logo from '../images/logo.png'
import ShowImage from './ShowTeamImage'
import { signout,isAuthenticated } from '../auth';
import {ExternalLink} from 'react-external-link'
import Menu from './Menu'
const Team = ({history}) => {

    const[myFilters, setMyFilters] = useState({
        filters: { role: [] }
    })


   
    const [error , setError ] = useState (false)
    const [limit , setLimit ] = useState (6)
    const [skip , setSkip ] = useState (0)
    const [size , setSize ] = useState (0)
    const [filteredResults, setfilteredResults] = useState ([])
    let [loading,setLoading] = useState(false)


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
                setLoading({loading : true})
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
<Menu/>

       {loading ? 
        
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
  : <div class="container justify-content-center text-center p-4">
  <div className="row justify-content-center text-center p-4">
      <div className="col-12 justify-content-center text-center p-4" style={{height:'100vh'}}>
  
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
                                          
  <div class="spinner-grow text-danger"></div>
  <div class="spinner-grow text-danger"></div>
  <div class="spinner-grow text-danger"></div>
  <div class="spinner-grow text-danger"></div>
  <div class="spinner-grow text-danger"></div>
  <div class="spinner-grow text-danger"></div>
  <div class="spinner-grow text-danger"></div>
  <div class="spinner-grow text-danger"></div>
  <div class="spinner-grow text-danger"></div>
  <div class="spinner-grow text-danger"></div>
  
  </div>
  </div>
  </div>}
<Footer/>
</div>
)
}


export default Team