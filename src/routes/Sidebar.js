import React from 'react'
import {Link, Outlet} from 'react-router-dom';

const Sidebar = () => {
  return (
   <>
   <div id="sidebar">
   <nav>
     <ul>          
       <li>
         <Link to={`products`}>Products</Link>
       </li>
       <li>
         <Link to={`carts`}>Carts </Link>
       </li>
     </ul>
   </nav>
  
 </div>
 <Outlet />
   
   
   </>
  )
}

export default Sidebar