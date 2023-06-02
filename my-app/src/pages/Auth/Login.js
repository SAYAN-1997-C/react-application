import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const intialValues = { email: "", password: "" };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    console.log(formValues);
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
    <div className="grid grid-cols-1 xl:grid-cols-4 w-full h-screen p-5 bg-gray-800 overflow-hidden">
      <div className="text-white text-3xl ">
        <div>
          Music Player
        </div>
      </div>
      <div></div>
      <div className="flex flex-col justify-start xl:col-span-2 xl:p-20 ">
        <h2 className="text-white p-3">Login</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="flex flex-col p-3">
            <label htmlFor="email" className="text-xl text-white pb-1">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formValues.email}
              onChange={handleChange}
              className={`${formErrors.email && "input-error"} p-3 rounded-3xl`}
            />
            {formErrors.email && (
              <span className="error text-red-500">{formErrors.email}</span>
            )}
          </div>

          <div className="flex flex-col p-3">
            <label htmlFor="password" className="text-xl text-white pb-1">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formValues.password}
              onChange={handleChange}
              className={`${formErrors.password && "border-red-500"} p-3 rounded-3xl border`}
            />
            {formErrors.password && (
              <span className="error text-red-500">{formErrors.password}</span>
            )}
          </div>

          <div className="flex flex-col p-3 pt-4">
            <button type="submit" className="text-white p-3 border rounded-3xl hover:bg-gray-600">Sign In</button>
            <div className="p-3 text-white text-center cursor-pointer text-blue-300" onClick={() => navigate("/signin")}>Click Here to get register yourself</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
