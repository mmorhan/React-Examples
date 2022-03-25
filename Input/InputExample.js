import {useState} from 'react'

function InputExample() {

    // const[name,setName]=useState('');
    // const[surname,setSurname]=useState('');
    const[form,setForm]=useState({name:'',surname:""});

    // const onChangeName=(event)=>setName(event.target.value)
    // const onChangeSurname=(event)=>setSurname(event.target.value)


    //Hell Yeah
    const onChangeInput=(event)=>{
        console.log(event.target.name)
        setForm({...form ,[event.target.name]:event.target.value})
    }
    
  return (
    <div>
        Name:
        <input type="text" name="name"value={form.name} onChange={onChangeInput}/>
        <br />
        
        

        surname:
        <input type="text" name="surname" value={form.surname} onChange={onChangeInput}/>
        <br />

        {`name: ${form.name}`}
        <br />
         {`surname: ${form.surname}`}

    </div>
  )
}

export default InputExample