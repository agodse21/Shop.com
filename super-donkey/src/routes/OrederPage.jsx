import { Heading } from "@chakra-ui/react";
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function OrderPage(){
    const [loading, setLoading] = useState(false)
            const [data, setData] = useState(null)
        
            useEffect(() => {
                setLoading(true)
                axios({
                    method: 'GET',
                    baseURL: 'http://api.fakeshop-api.com',
                    url: '/products/getAllProducts',
                  })
                    .then(({ data }) => {
                      setData(data.products)
                    })
                    .catch(err => console.dir(err))
                    .finally(() => setLoading(false))
            }, [])
        
            return (  
              <section>
                <h1>Fake Shop API response:</h1>
                {loading && "Loading..."}
                {!!data && data.length > 0 ? data.map((product) => {
                    return(
                      <article key={product.id}>
                        <h2>name: {product.name}</h2>
                        <p>id: {product.id}</p>
                        <p>description: {product.description}</p>
                        <p>brand: {product.brand}</p>
                        <p>price: {product.price}</p>
                        <p>category: {product.category}</p>
                      </article>
                    )   
                  }):(<p>API did not provided any product, try again.</p>)
                }
              </section>
            )
}
export default OrderPage;




        
        
        
           
        
        
        