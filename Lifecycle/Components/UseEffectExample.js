import {useState} from 'react'
import ToggleCounter from './ToggleCounter';

function UseEffectExample() {

  const [isVisible,setIsVisible]=useState(false);
  return (
    <div className="">

      {isVisible && <ToggleCounter ></ToggleCounter> }
      
      <button onClick={()=>setIsVisible(!isVisible)}>Toggle Button</button>
    </div>
  )
}

export default UseEffectExample;