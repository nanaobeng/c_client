import React from 'react'


const ShowImage = ({item, url}) => (
    <div className="product-img">
        <img className="img-fluid " src={`https://cynergyglobal.herokuapp.com/team/photo/${item._id}`} alt={item.name} style={{width:"100%",height:'300px'}}/>
       
    </div>
) 


export default ShowImage;