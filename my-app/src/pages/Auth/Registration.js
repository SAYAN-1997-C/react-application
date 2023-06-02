import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import MyService from "./MyService";

const Form = () => {
  const navigate = useNavigate();
  let serviceObj = new MyService();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword : ""
  });
  
  const updateFormData = event =>
  setFormData({
    ...formData,
      [event.target.name]: event.target.value
    });
    
    const { firstName, lastName, email, password ,confirmpassword } = formData;
    const[successMessage,setSuccessMessage] = useState("")
  // console.log(formData);


  const regUser = () => {
    let user = {
      firstName : formData.firstName,
      lastName : formData.lastName,
      email : formData.email,
      password : formData.password,
    }
    serviceObj.regUser(user);
    setSuccessMessage("Resgistration success!!")
    serviceObj.getUserData();
  }
  
  return (
    <form >
      
      <div className="grid grid-cols-1 xl:grid-cols-4 w-full h-full p-5 bg-gray-800 overflow">
        <div className="text-white text-3xl ">Music Player</div>
        <div ><p className="text-success"> {successMessage} </p></div>
        <div className="flex flex-col justify-center xl:col-span-2 xl:p-20">
          <h2 className="text-white">Registration</h2>
          <input
            value={firstName}
            onChange={e => updateFormData(e)}
            placeholder="First name"
            type="text"
            name="firstName"
            className="p-3 px-4 border my-3 w-full rounded-xl bg-transparent text-white"
            required
          />
          <input
            value={lastName}
            onChange={e => updateFormData(e)}
            placeholder="Last name"
            type="text"
            className="p-3 px-4 border my-3 w-full rounded-xl bg-transparent text-white"
            name="lastName"
            required
          />
          <input
            value={email}
            onChange={e => updateFormData(e)}
            placeholder="Email address"
            type="email"
            name="email"
            className="p-3 px-4 border my-3 w-full rounded-xl bg-transparent text-white"
            required
          />
          <input
            value={password}
            onChange={e => updateFormData(e)}
            placeholder="Password"
            type="password"
            name="password"
            className="p-3 px-4 border my-3 w-full rounded-xl bg-transparent text-white"
            required
          />

          <input
            value={confirmpassword}
            onChange={e => updateFormData(e)}
            placeholder="Confirm Password"
            type="password"
            name="confirmPassword"
            className="p-3 px-4 border my-3 w-full rounded-xl bg-transparent text-white"
            required
          />

          <button type="submit" className="p-3 rounded-xl my-3 text-white bg-gray-700 hover:bg-gray-600" onClick={regUser}>Submit</button>
          <div className="p-3 text-white text-center cursor-pointer text-blue-300" onClick={() => navigate("/login")}>Click Here to login</div>
        </div>
      </div>
    </form>
  );
};

export default Form;
