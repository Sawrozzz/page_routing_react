import { Outlet, Link } from "react-router-dom";
import Header from "../Header";
export default function Root() {
    return (
      <>
       <Header />
       <div className="main">
       <div id="sidebar">
         <nav>
           <ul>
             <li>
               <Link to={`/contacts/1`}>Products</Link>
             </li>
             <li>
               <Link to={`/contacts/2`}>Cards </Link>
             </li>
           </ul>
         </nav>
       </div>
       <div id="detail">
       <Outlet />
     </div>
       </div>
      </>
    );
  }