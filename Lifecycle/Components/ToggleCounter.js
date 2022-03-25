import {useState,useEffect} from 'react'


function ToggleCounter() {
  const [number,setNumber]=useState(0);
  const [name,setName]=useState("Mazlum");

  useEffect(()=>{
    console.log("State Updated");

  })

  useEffect(()=>console.log("Name Updated"),[name])
  useEffect(()=>{
    console.log("Component Mounted");

    const interval=setInterval(() => {
      setNumber((n)=>n+1);  
    }, 1000);


    //Component unmount 
    return ()=>{
      console.log("Component unmount");
      clearInterval(interval);
  }

  },[])

  return (
    <div>

    <div className="">{number}</div>
    <button onClick={ ()=>setNumber(number+1)}>add one</button> 
    <br />
    <br />
    <div className="">{name}</div>
    <button onClick={ ()=>setName("Orhan")}>change name</button> 

    </div>
  )
}

export default ToggleCounter