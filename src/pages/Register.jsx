import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./shared/Navbar";
import useTitle from "../hooks/useTitle";
import { userContext } from "../providers/AuthProvider";
const Register = () => {
  useTitle('Register')

  const {registerUser} = useContext(userContext)
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("")

  const handleRegister = (ev)=>{
    ev.preventDefault()
    setSuccess("")
    setError("")
//pwd: bC5*aB

    const form = ev.target;
    const fName = form.fname.value;
    const lName = form.lname.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.cpassword.value;
  

    //validate input fields
    if(!fName || !lName || !email || !password || !confirmPassword){
      return setError("Please fill in the all fields")
    }else if(password !== confirmPassword){
      return setError("Passowrd does not match!")
    }else if(!(/[a-z]/).test(password)){
      return setError("Your password should contain at least one lower case letter")
    }else if(!(/[A-Z]/).test(password)){
      return setError("Your password should contain at least one upper case letter")
    }else if(!(/[0-9]/).test(password)){
      return setError("Your password should contain at least one digit")
    }else if(!(/[@\.\-\*_\$%\&]/).test(password)){
      return setError("Your password should contain at least one special character")
    }else if(password.length < 6){
      return setError("Your password should be 6 characters or longer")
    }

    //register a new user
    registerUser(email, password)
    .then(()=>{
      setSuccess("Successfully create a new user")
    })
    .catch(error =>{
      setError(error.message)
    })
  }
  return (
    <>
    <Navbar></Navbar>
    <div class="hero">
      <div class="hero-content">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <div>
            <form class="card-body" action="" onSubmit={handleRegister}>
            <h1 className="font-bold text-2xl mb-3">Create an account</h1>
            <div class="form-control">
              <input
                type="text"
                placeholder="First Name"
                class="input input-bordered"
                name="fname"
              />
            </div>
            <div class="form-control">
              <input
                type="text"
                placeholder="Last Name"
                class="input input-bordered"
                name="lname"
              />
            </div>
            <div class="form-control">
              <input
                type="text"
                placeholder="Username or Email"
                class="input input-bordered"
                name="email"
              />
            </div>
            <div class="form-control">
              <input
                type="password"
                placeholder="Passowrd"
                class="input input-bordered"
                name="password"
              />
            </div>
            <div class="form-control">
              <input
                type="password"
                placeholder="Confrim Passowrd"
                class="input input-bordered"
                name="cpassword"
              />
              <label class="label">
                <a href="#" class="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <label className="text-center text-[green] font-bold">{success}</label>
              <label className="text-center text-[red] font-bold">{error}</label>
            </div>
            <div class="form-control mt-6">
              <button class="btn bg-[#F9A51A] hover:bg-[#F9A51A] font-medium text-[16px] normal-case mb-4">Create an account</button>
              <p>
                <span>Already have an account?</span> 
                <Link to="/login" className="text-[#F9A51A] font-medium text-[16px] underline">Login</Link></p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Register;
