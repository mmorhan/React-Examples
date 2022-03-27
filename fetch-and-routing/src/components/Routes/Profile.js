import React from 'react'
import {useParams} from "react-router-dom"
import {useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Axios from "axios" 


function Profile() {
  const [user,setUser]=useState({});
  const navigate=useNavigate();
  let {id}=useParams();
  useEffect(()=>{
    Axios(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res)=>{setUser(res.data)})

  },[id])
  return (
    <div>
    <h3>Profile Page</h3>
    <ul>
    <li>{user.id}</li>
    <li>{user.name}</li>
    <li>{user.email}</li>
    </ul>

    <button onClick={()=>navigate(`/profile/${parseInt(user.id)+1}`)} > Next User</button>
    </div>
  )
}

export default Profile