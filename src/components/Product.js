import React, {useState} from 'react'
import { Link } from 'react-router-dom'


const Product = () => {
    const [data, setData] = useState("Hello World")
  return (
    <>  
        <Link to='/signup' state={{transport:data}}>Go to SignUp</Link> {/* it only applicable for Route components */}
        <h1>Product</h1>
    </>
  )
}

export default Product