/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useSyncExternalStore } from "react";
import { useNavigate } from "react-router-dom";
import { listening, signup2 } from "../../assets";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./styles.css";
import MyService from "./MyService";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Registration = () => {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const DisplayingErrorMessagesSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastname: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email("Invalid email")
      .required("Please enter a valid username !"),
    password: Yup.string()
      .min(5, "Too Short!")
      .max(14, "Too Long!")
      .required("Please enter a valid password !"),
    confirmpassword: Yup.string()
      .min(5, "Too Short!")
      .max(14, "Too Long!")
      .required("Please enter a valid password !"),
  });
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  let service = new MyService();

  const handleEvent = (values) => {
    console.log(values);
    if (values.password !== values.confirmpassword) {
      setSuccessMessage("");
      setErrorMessage("Password and Confirm password is not match")
      handleClick();
      return;
    }
    let user = {
      firstname: values.firstname,
      lastname: values.lastname,
      email: values.email,
      password: values.password,
    }
    service.regUser(user).then((res) => {
      setErrorMessage("");
      setSuccessMessage("Registration sucessfully");
      handleClick();
      console.log("Promise : " + res);
    }).catch((error) => {
      setSuccessMessage("")
      setErrorMessage("Account is already exist!!")
      handleClick();
      console.log("Error " + error)
    });
  }

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
    <Formik
      initialValues={{
        firstname: '',
        lastname: '',
        email: "",
        password: "",
        confirmpassword: ""
      }}
      validationSchema={DisplayingErrorMessagesSchema}
      onSubmit={(values) => {
        setFormData(values);
        handleEvent(values);
      }}
    >
      {({
        //@ts-ignore
        errors,
        values,
        //@ts-ignore
        touched,
      }) => (
        <Form>
          <div className="grid  xl:grid-cols-4 w-full md:h-screen p-3 bg-slate-900 xs:overflow-hidden">
            <div>
              <div className="text-white text-3xl pl-6 pb-8">MuZix</div>
              <img
                src={listening}
                className="hidden sm:flex "
                style={{ width: '600px' }}
              />
            </div>
            <div className="hidden sm:flex"></div>
            <div className="flex flex-col xl:col-span-2 px-5 pt-4">
              <h2 className="text-white text-[1.6rem] pb-2">Registration</h2>
              <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                {successMessage.length > 0 ? <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                  {successMessage}
                </Alert>:<Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                  {errorMessage}
                </Alert>}
              </Snackbar>
              <div className="flex flex-col sm:flex-row  w-full sm:gap-4">
                <div className="flex flex-col sm:w-[50%] h-20">
                  <label htmlFor="firstname" className="text-sm text-white">
                    firstname
                  </label>
                  <Field
                    placeholder="First name"
                    type="text"
                    name="firstname"
                    className="2xl:p-2 px-3 border rounded-lg bg-white outline-none"
                    required
                  />
                  {touched.firstname && errors.firstname && (
                    <div className="text-red-600 text-sm">{errors.firstname}</div>
                  )}
                </div>
                <div className="flex flex-col h-20 sm:w-[50%]">
                  <label htmlFor="firstname" className="text-sm text-white">
                    Lastname
                  </label>
                  <Field
                    placeholder="Last name"
                    type="text"
                    className="p-2 px-3 border w-full rounded-lg bg-white outline-none"
                    name="lastname"
                    required
                  />
                  {touched.lastname && errors.lastname && (
                    <div className="text-red-600 text-xs">{errors.lastname}</div>
                  )}
                </div>
              </div>


              <div className="flex flex-col md:flex-row sm:gap-4">
                <div className="flex flex-col sm:w-[50%] h-20">
                  <label htmlFor="firstname" className="text-sm text-white">
                    Email
                  </label>
                  <Field
                    placeholder="Email address"
                    type="email"
                    name="email"
                    className="p-2 px-3 border md:w-full rounded-lg bg-white outline-none"
                    required />
                  {touched.email && errors.email && (
                    <div className="text-red-600 text-xs">{errors.email}</div>
                  )}
                </div>
                <div className="flex flex-col sm:w-[50%] h-20">
                  <label htmlFor="firstname" className="text-sm text-white">
                    Password
                  </label>
                  <Field
                    placeholder="Password"
                    type="password"
                    name="password"
                    className="p-2 px-3 border md:w-full rounded-lg bg-white outline-none"
                    required
                  />
                  {touched.password && errors.password && (
                    <div className="text-red-600 text-xs">{errors.password}</div>
                  )}
                </div>
              </div>
              <div className="flex flex-col w-full h-24">
                <label htmlFor="firstname" className="text-sm text-white ">
                  Confirm Password
                </label>
                <Field
                  placeholder="Confirm Password"
                  type="password"
                  name="confirmpassword"
                  className={`p-2 px-3 border-2 rounded-lg bg-white outline-none${touched.confirmpassword && errors.confirmpassword
                      ? "border-amber-600"
                      : "border-gray-300"
                    }`}
                  required
                />
                {touched.confirmpassword && errors.confirmpassword && (
                  <div className="text-red-600 text-xs">{errors.confirmpassword}</div>
                )}
              </div>
              <div className="flex  flex-col">
                <button
                  type="submit"
                  className="p-2 rounded-lg my-2 text-white bg-slate-700 hover:bg-slate-800 cursor-pointer "
                >
                  Submit
                </button>
              </div>
              <div
                className="p-3 text-center cursor-pointer text-blue-300"
                onClick={() => navigate("/login")}
              >
                Click Here to login
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Registration;
