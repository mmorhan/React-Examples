import { useState ,useEffect} from "react";

const initForm = { name: "", phoneNumber: "" };
function Form({ contacts, addContacts }) {
  const [form, setForm] = useState(initForm);
  const onChangeInput = (event) => {
    //prevents form to reload the page
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (form.name === "" || form.phoneNumber === "") {
      return false;
    }
    addContacts([...contacts, form]);

    //Clear inpput
      //1.
      // setForm(initForm);

  };
      //2. Way
    useEffect(()=>{
      setForm(initForm)
    },[contacts])

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            onChange={onChangeInput}
            name="name"
            placeholder="Full Name"
            value={form.name}
          />
        </div>
        <div>
          <input
            onChange={onChangeInput}
            name="phoneNumber"
            value={form.phoneNumber}
            placeholder="Phone Number"
          />
        </div>
        <div>
          <button>Add</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
