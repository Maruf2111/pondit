import React, { useEffect, useState } from "react";
import axios from "axios";


function User(){
    const [users, setUsers] = useState([]);

function getUser(){


    const success = (response) =>{
         setUsers(response.data.users);
    }

    const error = (err) =>{
        console.log(err);
    }

    axios.get('https://dummyjson.com/users')
    .then(success)
    .catch(error)
}



    useEffect(getUser);
    return(
        <table className="table table-dark table-striped table-bordered mt-5">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">User Name</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map(function(user){
            return(
                   <tr>
                      <td>{user.id}</td>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.username}</td>
                   </tr>
            )
        })
    }
  </tbody>
</table>

    )
}


export default User;