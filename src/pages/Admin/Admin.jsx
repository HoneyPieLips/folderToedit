import React from 'react'
import {Link,Outlet} from "react-router-dom"

const Admin = () => {
  return (
    <div>
        <Link to="createUserProfile">
        <button>
            Create a user profile 
        </button>
        <Outlet/>
        </Link>
    </div>
  )
}

export default Admin