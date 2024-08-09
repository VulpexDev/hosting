"use client"
import React from 'react';
import '../../styles/globals.css';

import { products } from '../products_test'



function StripeTest() {
    const handlePay = async (product) => {
        //console.log(product)
    const res = await fetch('/api/checkout',{
        method:"POST"
       })
     const data = await res.json()    
     console.log(data)   
    }
    return (
        <div>
            <h1>Productos</h1>
            <div className="container mt-5">
                <div className="row">
                {products.map((product, i) => (
                    <div className="col-md-4">
                        <div key={i} className="p-3 border bg-light">
                                <h2>{product.name}</h2>
                                <p>{product.price}</p>
                                <img src={product.Image} alt="" />
                        </div>
                        <button className="btn btn-primary mt-3" onClick={()=>handlePay(product)}>Botón</button>
                    </div> 
                 ))}
                </div>
            </div>       
        </div>
    );
}

export default StripeTest;
