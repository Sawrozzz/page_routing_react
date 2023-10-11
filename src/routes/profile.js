import React, { useEffect, useState } from 'react'

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(()=>{
        fetch('https://dummyjson.com/users/1')
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            setUser(data.user);
        })
    },[])

  return (
    <>
<div className='myProfile'>


</div>
    </>
  )
}

export default Profile