import {useState,useEffect} from 'react'
import List from './List'
import Form from './Form'

function Contacts() {

    const [contacts,setContacts]=useState([
        {name:"Jack Dorsey",phoneNumber:"1 565  455 6548"},
        {name:"Daniel Radcliffe",phoneNumber:"1 544 455 6548"},
        {name:"Emma Watson",phoneNumber:"80 535  455 7824"},
        {name:"Caravaggio ",phoneNumber:"10 565  546 8631"},
    ])
    useEffect(()=>{
        console.log(contacts)
    },[contacts]);
  return (
    <div className='Container'>
        <Form addContacts={setContacts} contacts={contacts}></Form>
        <List contacts={contacts}></List>
    </div>

  )
}

export default Contacts