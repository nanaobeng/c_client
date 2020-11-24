import React from 'react'


const ShowImage = ({item, url}) => (
    <div className="product-img">
        <img src={`https://cynergyglobal.herokuapp.com/news/photo/${item._id}`} alt={item.name}  style={{maxHeight: '300px',minHeight: '300px', maxWidth: '100%',minWidth: '100%'}} />
       
    </div>
)


export default ShowImage;