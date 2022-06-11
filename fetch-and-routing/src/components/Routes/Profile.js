import React from 'react'
import {useParams} from "react-router-dom"
import {useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Axios from "axios" 
import React from 'react'

function Profile() {
  const [user,setUser]=useState({});
  const[isLoading,setIsLoading]=useState(true);
  const navigate=useNavigate();
  let {id}=useParams();
  useEffect(()=>{
    Axios(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res)=>{setUser(res.data)})
    .finally(()=>setIsLoading(false));

  },[id])
  return (

    <div>
      {!isLoading? <p>{JSON.stringify(user)}</p>:<p>User is Loading</p>}
    <button onClick={()=>navigate(`/profile/${parseInt(user.id)+1}`)} > Next User</button>
    </div>
  )
}

export default Profile