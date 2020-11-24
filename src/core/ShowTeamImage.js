import React from 'react'


const ShowImage = ({item, url}) => (
    <div className="product-img">
        <img className="img-fluid rounded-circle" src={`https://cynergyglobal.herokuapp.com/team/photo/${item._id}`} alt={item.name} style={{width:"30%"}}/>
       
    </div>
) 


export default ShowImage;