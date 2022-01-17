const express = require("express")
const products = require("./data/products")
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

require("./config/db")

const PORT = process.env.PORT || 6000
const app = express()

app.use(cors())

app.get("/",(req,res)=>{
    res.send("API running")
})

app.get("/products",(req,res)=>{
    res.json(products)
})

app.get("/products/:id",(req,res)=>{
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})

app.listen(PORT, () => {
    console.log("Server running at port "+PORT+".")
})