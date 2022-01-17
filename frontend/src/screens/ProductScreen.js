import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Ratings from '../components/Ratings'
import axios from 'axios'

const ProductScreen = () => {
    let {id} = useParams()
    // const product = products.find(p => p._id === id)
    // console.log(product)
    const [product, setProduct] = useState({})
    useEffect(()=>{
        console.log("useEffect")
        axios.get("http://localhost:5000/products/"+id).then((resp) => {
            console.log(resp.data)
            setProduct(resp.data)
        }).catch(e => console.log(e))
    },[id])

    return (
        <div>
            <Link to={`/`} class="btn btn-dark">Go Back</Link>
            <br/>
            <br/>
            <div className='row'>
                <div className='col-lg-6 col-md-12 col-sm-12 p-2'>
                    <img src={product.image} alt={product.name} fluid />
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 p-2'>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><h4>{product.name}</h4></li>
                    <li class="list-group-item"><Ratings rating={product.rating} reviews={product.numReviews}/></li>
                    <li class="list-group-item">Price: ${product.price}</li>
                    <li class="list-group-item">Description: {product.description}</li>  
                </ul> 
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 p-2'>
                <ul class="list-group">
                    <li class="list-group-item">
                        <div className='row'>
                            <div className='col'>Price:</div>
                            <div className='col'>${product.price}</div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div className='row'>
                            <div className='col'>Status:</div>
                            <div className='col'>{product.countInStock>0 ? "In Stock" : "Out of Stock"}</div>
                        </div>
                    </li>
                    <li class="list-group-item">
                    <div class="row">
                        <div class="col text-center">
                        <button type="button" class="btn btn-dark position-relative" disabled={product.countInStock === 0}>Add To Cart</button>
                        </div>
                    </div>
                    </li>
                  
                </ul> 
                </div>
            </div>
        </div>
    )
}

export default ProductScreen
