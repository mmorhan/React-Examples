import React from "react";
import { Formik, Field, Form, useFormik } from "formik";
import validationSchema from "./Validations";

function SignUp() {
  const { handleSubmit, handleChange, values ,errors} = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
  });
  console.log(errors)

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          placeholder="jane@jane.com"
          onChange={handleChange}
          value={values.email}
        />
        <div>{errors.email&& (errors.email) }</div>
        <br />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          placeholder="*********"
          onChange={handleChange}
          value={values.password}
        />
        <div>{errors.password&& (errors.password) }</div>
        <br />
        <label htmlFor="passwordConfirmation">Passward again</label>
        <input
          name="passwordConfirmation"
          placeholder="***********"
          onChange={handleChange}
          value={values.passwordConfirmation}
        />
        <code>{JSON.stringify(values)}</code>
        
        <div>{errors.password&& (errors.passwordConfirmation) }</div>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default SignUp;
