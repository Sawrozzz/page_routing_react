// import { Form } from "react-router-dom";

// export default function Contact() {
//   const contact = {
    
//     avatar: "https://placekitten.com/g/200/200",
//     twitter: "your_handle",
//     notes: "Some notes",
//     favorite: true,
//   };

//   return (
//     <div id="contact">
//       <div>
//         <img
//           key={contact.avatar}
//           src={contact.avatar || null}
//         />
//       </div>

//       <div>
//         <h1>
//           {contact.first || contact.last ? (
//             <>
//               {contact.first} {contact.last}
//             </>
//           ) : (
//             <i>No Name</i>
//           )}{" "}
//           <Favorite contact={contact} />
//         </h1>

//         {contact.twitter && (
//           <p>
//             <a
//               target="_blank"
//               href={`https://twitter.com/${contact.twitter}`}
//             >
//               {contact.twitter}
//             </a>
//           </p>
//         )}

//         {contact.notes && <p>{contact.notes}</p>}

//         <div>
//           <Form action="edit">
//             <button type="submit">Edit</button>
//           </Form>
//           <Form
//             method="post"
//             action="destroy"
//             onSubmit={(event) => {
//             //   if (
//             //     !confirm(
//             //       "Please confirm you want to delete this record."
//             //     )
//             //   ) {
//                 event.preventDefault();
              
//             }}
//           >
//             <button type="submit">Delete</button>
//           </Form>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Favorite({ contact }) {
 
//   return (
//     <Form method="post">
//       <button
        
        
//       >
//       </button>
//     </Form>
//   );
// }

import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Contact = () => {
  const [products, setProducts] = useState({});
  // const [name, setName] = useState("");
  const [productId, setProductId] = useState(1);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [productId]);
  console.log(products, "products");
  const handleClick = (id) => {
    setProductId(id);
  };

  return (
    <div>
    <div className='content'>
    <p>{products.id}</p>
      <p> Tittle:{products.title}</p>
      <p>Price:{products.price}</p>
      <img src={products.thumbnail} style={{ height: 200, width: 200 }} />
      <div>
        <Link to={"/products/1"}>Click Here</Link>
        <Link to={"/products/2"}>Click Here</Link>
        <Link to={"/products/3"}>Click Here</Link>
        <Link to={"/products/4"}>Click Here</Link>
      </div>
      <br></br>
   
    
    </div>


    
    </div>
  )
}

export default Contact