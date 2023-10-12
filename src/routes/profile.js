import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("https://dummyjson.com/users/1")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }, []);

  return (
    <>
      <div className="myProfile">
        <p>
          {" "}
          <b>ID:</b>
          {user.id}
        </p>
        <p>
          {" "}
          <b>FirstName:</b>
          {user.firstName}
        </p>
        <p>
          {" "}
          <b>MaidenName:</b>
          {user.maidenName}
        </p>
        <p>
          {" "}
          <b>Age:</b>
          {user.age}
        </p>
        <p>
          {" "}
          <b>Gender:</b>
          {user.gender}
        </p>
        <p>
          {" "}
          <b>Email:</b>
          {user.email}
        </p>
        <p>
          {" "}
          <b>Phone No:</b>
          {user.phone}
        </p>
        <p>
          {" "}
          <b>UserName:</b>
          {user.username}
        </p>
        <p>
          {" "}
          <b>Image:</b>
          {user.image}
        </p>
      </div>
    </>
  );
};

export default Profile;
