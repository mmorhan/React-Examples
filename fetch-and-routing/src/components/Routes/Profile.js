import React from 'react'
import {useParams} from "react-router-dom"

function Profile() {
  let {username}=useParams();
  return (
    <div>{username}'s Profile</div>
  )
}

export default Profile