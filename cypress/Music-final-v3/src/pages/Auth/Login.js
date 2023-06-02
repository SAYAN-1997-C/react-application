/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../assets";
import MyService from "./MyService";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Login = () => {
  const navigate = useNavigate();
  const intialValues = { email: "", password: "" };
  let [successMessage, setSuccessMessage] = useState("");
  let [errorMessage, setErrorMessage] = useState("");
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  let service = new MyService();

  //input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true)

    const userCred = {
      "email": formValues.email,
      "password": formValues.password
    }

    console.log(userCred);
    service.checkCredentials(userCred).then((res) => {
      setSuccessMessage("Login successfully");
      handleClick();
      console.log(res.data.token);
      sessionStorage.setItem("mytoken", res.data.token); //res.data.token
      sessionStorage.setItem("mailid", formValues.email); //userCred.email
      navigate("/");

    }).catch((error) => {
      // console.log("Wrong credentials");
      console.log(error);
      console.log(error.response.data)
      setErrorMessage(error.response.data);
      handleClick();
      // navigate("/login");
    })

  };

  //form validation handler
  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Required";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }

    return errors;
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 w-full p-3 2xl:p-5 min-h-[82.8vh] bg-slate-900 overflow-hidden">
      <div className="text-white text-3xl ">
        <div className="pl-6">MuZix</div>
        <img src={login} className="hidden sm:flex w-full xl:min-w-max h-full" />
      </div>
      <div className="hidden xl:flex">
      </div>
      <div className="flex flex-col justify-start sm:col-span-2 sm:ml-10 xl:p-16 ">
        <h2 className="text-white p-3 text-3xl">Login</h2>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          {successMessage.length > 0 ? <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            {successMessage}
          </Alert> : <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            {errorMessage}
          </Alert>}
        </Snackbar>
        <form onSubmit={handleSubmit} noValidate>
          <div className="flex flex-col p-3 h-32">
            <label htmlFor="email" className="text-xl text-white pb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              value={formValues.email}
              onChange={handleChange}
              className={`${formErrors.email && "input-error"
                } p-3 rounded-xl outline-none`}
            />
            {formErrors.email && (
              <span className="error text-red-500">{formErrors.email}</span>
            )}
          </div>

          <div className="flex flex-col p-3 h-32">
            <label htmlFor="password" className="text-xl text-white pb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
              className={`${formErrors.password && "border-red-500"
                } p-3 rounded-xl border outline-none`}
            />
            {formErrors.password && (
              <span className="error text-red-500">{formErrors.password}</span>
            )}
          </div>

          <div className="flex flex-col p-3 pt-4">
            <button
              type="submit"
              className="text-white p-3 border-none bg-slate-700 rounded-xl text-lg font-semibold hover:bg-slate-800"
            >
              Sign In
            </button>
            <div
              className="p-3 text-center cursor-pointer text-blue-300"
              onClick={() => navigate("/register")}
            >
              Click Here to get register yourself
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
