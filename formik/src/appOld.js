import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form, useFormik } from "formik";

function App() {

  const {handleSubmit,handleChange,values}=useFormik({
    initialValues:{
      firstName: "mazlum ",
      lastName: "orhan",
      email: "mazlum.1472@gmail.com",
      gender: "male",
      hobies: [],
      countries: "Turkey",
    },
     onSubmit:values => {
      console.log(values)
    }

  });

  return (
    <div>
      <h1>Sign Up</h1>
      {/* <Formik
        initialValues={{
          firstName: "mazlum ",
          lastName: "orhan",
          email: "mazlum.1472@gmail.com",
          gender: "male",
          hobies: [],
          countries: "Turkey",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit, handleChange, values }) => ( */}
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              name="firstName"
              placeholder="Jane"
              onChange={handleChange}
              value={values.firstName}
            />

            <label htmlFor="lastName">Last Name</label>
            <input
              name="lastName"
              placeholder="Jane"
              onChange={handleChange}
              value={values.lastName}
            />

            <label htmlFor="email">Email</label>
            <input
              name="email"
              placeholder="Jane"
              onChange={handleChange}
              value={values.email}
            />

            <br />
            <br />

            <label htmlFor="Gender"></label>
            <span>Male</span>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
              checked={values.gender == "male"}
            />
            <span>female</span>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
            />

            <br />
            <br />

            <div>
              <input
                type="checkbox"
                name="Hobies"
                value="Chess"
                onChange={handleChange}
              />
              Chess
            </div>
            <div>
              <input
                type="checkbox"
                name="Hobies"
                value="baseball"
                onChange={handleChange}
              />
              Baseball
            </div>
            <div>
              <input
                type="checkbox"
                name="Hobies"
                value="Biking"
                onChange={handleChange}
              />
              Biking
            </div>
            <button type="submit">Submit</button>

            <br />
            <br />
            <select
              name="countries"
              id=""
              value={values.countries}
              onChange={handleChange}
            >
              <option value="Turkey">Turkey</option>
              <option value="Usa">Usa</option>
              <option value="Canada">Canada</option>
              <option value="England">England</option>
            </select>

            <br />
            <br />
            <code>{JSON.stringify(values)}</code>
          </form>
        {/* )}
      </Formik> */}
    </div>
  );
}
export default App;
