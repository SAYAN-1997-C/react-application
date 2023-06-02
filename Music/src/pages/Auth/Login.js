/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../assets";
import MyService from "./MyService";

const Login = () => {
  const navigate = useNavigate();
  const intialValues = { email: "", password: "" };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  let service = new MyService();

  const submit = () => {
    const userCred = {
      "email" : formValues.email,
      "password" : formValues.password
    }

    console.log(userCred);
    service.checkCredentials(userCred).then((res) => {

      console.log("Login Successfully");
      console.log(res.data.token);
      sessionStorage.setItem("mytoken",res.data.token);
      sessionStorage.setItem("mailid",userCred.email);
      navigate("/");   

    }).catch((error) => {
      console.log("Wrong credentials");
      console.log(error);
      console.log(error.response.data)
      navigate("/login");
    })
    


  };

  //input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
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

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
    }
  }, [formErrors]);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 w-full p-3 2xl:p-5  md:h-screen bg-slate-900 overflow-hidden">
      <div className="text-white text-3xl ">
        <div className="pl-6">MuZix</div>
        <img src={login} className="hidden sm:flex sm:max-w-max h-full"/>
      </div>
      <div className="hidden sm:flex">
      </div>
      
      <div className="flex flex-col justify-start xl:col-span-2 sm:ml-10 xl:p-16 ">
        <h2 className="text-white p-3 text-3xl">Login</h2>
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
              className={`${
                formErrors.email && "input-error"
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
              className={`${
                formErrors.password && "border-red-500"
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
