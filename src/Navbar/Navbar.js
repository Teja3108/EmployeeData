import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div>

    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
            <Link className='navbar-brand' to={"/"}>Senpai Manufacturing Company</Link>
          
            <Link type='button' className='btn btn-primary border border-light' to={"/addemp"}>Add Employee</Link>
   
        </div>
    </nav>
        
      
    </div>
  )
}
