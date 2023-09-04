import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./shared/Navbar";
import useTitle from "../hooks/useTitle";
const Register = () => {
  useTitle('Register')
  return (
    <>
    <Navbar></Navbar>
    <div class="hero">
      <div class="hero-content">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <div>
            <form class="card-body" action="">
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
