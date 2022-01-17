import React, {useEffect, useState} from 'react'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {
    const [Products, setProducts] = useState([])

    useEffect(()=>{
        console.log("useEffect")
        axios.get("http://localhost:5000/products").then((resp) => {
            setProducts(resp.data)
        }).catch(e => console.log(e))
    },[])
    return (
        <div>
            <h1>Welcome to Ecommerce</h1>
            <div className='row'>
            {
                Products.map((product) => (
                    <div className='col-lg-3 col-sm-12 col-md-4' key={product._id}><Product product={product}/></div>
                ))
            }
            </div>
        </div>
    )
}

export default HomeScreen
