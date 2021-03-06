import React , {useState, useEffect} from 'react';
import {getNewsletters} from './apiCore'
import {getFilteredProducts} from './apiCore'
import {Link} from 'react-router-dom'
import ShowImage from './ShowImage'
import logo from '../images/logo.png'
import Footer from './Footer'
import moment from 'moment';
import {signout, isAuthenticated } from '../auth';
import {ExternalLink} from 'react-external-link'
import Menu from './Menu'
const Csr = ({history}) => {
    const[myFilters, setMyFilters] = useState({
        filters: { category: ['csr'] }
    })


    const [categories , setCategories ] = useState ([])
   
    const [error , setError ] = useState (false)
    const [limit , setLimit ] = useState (6)
    const [skip , setSkip ] = useState (0)
    const [size , setSize ] = useState (0)
    const [filteredResults, setfilteredResults] = useState ([])
    let [loading,setLoading] = useState(false)
    let  [csr_count,setCount] = useState(0)


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
                setLoading({loading : true})
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





   
    return (

    <div>

<Menu/>

{loading ? 
            <div class="site-wrap">
            <div class="bg-light py-3">
  
    </div>
    <div className="site-section">
    <div class="container">
    <div class="row mb-5">
    <div class="col-md-12 order-2">

    <div className="row ">
       
       <div className="col-12 pt-4 pb-4" >

       <h3 style={{color:'#C5303C'}}>CSR Projects</h3>
       <div class="divider"style={{width:'40px', borderStyle : 'solid' , borderColor:'#C5303C'}}></div>
           </div>
       </div>


<div class="row ">





  <div class="col-md-12 col-sm-6">
  <div className="row ">
    <div className="col-12" style={{color:'grey'}}>
        <b>Featured</b>
        <br/>

    </div>
  {filteredResults.map((insight,i)=> (
       insight.category === 'csr' && <div className="parent col-md-4 col-sm-6 p-4">
           {insight.category === 'csr' && setCount(csr_count + 1)}

<ShowImage item={insight} url="product" style={{width:'100%',height:'400px'}}/>
<br/>
<b>{insight.title}</b>

<br/>

<br/>
<p  style={{color:'grey'}} dangerouslySetInnerHTML={{__html: insight.description.length > 100 ?  insight.description.slice(0,100) + '...' : insight.description.slice(0,100)}}></p>

<br/>
<div className="absolute">
<Link to={`/insights/newsletter/${insight._id}`} style={{color:'#C5303C'}}>Read More</Link>
<br/>

</div>


           </div>      

))}  

{csr_count < 1 && (<div className="col-12 pt-4"> <b>There are currently no insights uploaded.</b></div>)}


        <hr/>
        <div className="row text-center justify-content-center">
                    <div className="col-12 text-center justify-content-center">
                  {loadMoreButton()}  
                  </div>
                  </div>           
      </div>
  </div>
 

 
 
  


  
 
 

  


</div>

</div>
        </div>
        
        

    </div>

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
};





  



export default Csr;