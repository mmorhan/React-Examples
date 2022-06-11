import * as yup from "yup";

const Validation = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(5),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")])
    .required(),
});

export default Validation;
