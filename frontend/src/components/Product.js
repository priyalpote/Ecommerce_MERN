import React from 'react'
import Ratings from './Ratings'
import {Link} from 'react-router-dom'
const Product = (props) => {
    return (
        <>
          <div className="card my-3 p-3 rounded">
            <Link to={`/product/${props.product._id}`} >
                <img src={props.product.image} className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
                <Link className="card-title fw-bold" to={`/product/${props.product._id}`} >{props.product.name}</Link>
                <p className="card-text"><Ratings rating={props.product.rating} reviews={props.product.numReviews} color="yellow" /></p>
                <h3 className='card-text'>${props.product.price}</h3>
            </div>
</div>  
        </>
    )
}

export default Product
