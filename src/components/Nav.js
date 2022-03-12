import React,  {useState} from 'react'
import { Link } from 'react-router-dom'

const Nav = ()=>{
    const [data, setData] = useState("Hello World")
    return(
        <>
        <ul className='nav-ul'>
            <li><Link to='/' state={{transport:data}}>Products</Link></li>
            <li><Link to='/add'>Add Products</Link></li>
            <li><Link to='/update'>Update Products</Link></li>
            <li><Link to='/logout'>Logout</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link to='/signup'>SignUp</Link></li>
        </ul>
        </>
    )
}
export default Nav