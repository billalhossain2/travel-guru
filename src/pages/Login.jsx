import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./shared/Navbar";
import useTitle from "../hooks/useTitle";
import { useContext, useRef, useState } from "react";
import { userContext } from "../providers/AuthProvider";

const Login = () => {
  useTitle("Login");

  const {
    user,
    signInWithGoogle,
    signInWithFacebook,
    loginWithEmailAndPwd,
    resetPassword,
  } = useContext(userContext);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [show, setShow] = useState(false);
  const from = useLocation()?.state?.from;
  const navigate = useNavigate();

  const handleLoginWithGoogle = () => {
    setError("");
    setSuccess("");

    signInWithGoogle()
      .then((user) => {
        setSuccess("Successfully logged in with google");
        navigate(from);
      })
      .catch((error) => setError(error.message));
  };

  const handleLoginWithFacebook = () => {
    signInWithFacebook()
      .then(() => navigate(from))
      .catch((error) => setError(error.message));
  };

  const handleLoginWithEmailAndPassword = (ev) => {
    ev.preventDefault();
    setError("");
    setSuccess("");

    const form = ev.target;
    const email = form.email.value;
    const password = form.password.value;
    //validate input fields
    if (!email || !password) {
      return setError("Please give email and password");
    }

    //login
    loginWithEmailAndPwd(email, password)
      .then(() => {
        setSuccess("Successfully logged in");
        navigate(from);
      })
      .catch((error) => setError(error.message));
  };

  //reset password
  const emailRef = useRef();
  const handleForgotPassword = async () => {
    const email = emailRef.current.value;
    resetPassword(email)
      .then(() => setSuccess("Password reset email sent!"))
      .catch((error) => setError(error.message));
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="hero">
        <div className="hero-content">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
            <div>
              <form
                className="card-body"
                action=""
                onSubmit={handleLoginWithEmailAndPassword}
              >
                <h1 className="font-bold text-2xl mb-3">Login</h1>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Username or Email"
                    className="input input-bordered"
                    name="email"
                    ref={emailRef}
                  />
                </div>
                <div className="form-control relative">
                  <input
                    type={show ? "text" : "password"}
                    placeholder="Passowrd"
                    className="input input-bordered"
                    name="password"
                  />
                  {show ? (
                    <i
                      onClick={() => setShow(!show)}
                      className="fa-regular fa-eye absolute right-3 top-2 text-2xl cursor-pointer"
                    ></i>
                  ) : (
                    <i
                      onClick={() => setShow(!show)}
                      className="fa-regular fa-eye-slash absolute right-3 top-2 text-2xl cursor-pointer"
                    ></i>
                  )}
                </div>
                <div className="form-control">
                  <label onClick={handleForgotPassword} className="label">
                    <span className="label-text-alt link link-hover">
                      Forgot password?
                    </span>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#F9A51A] hover:bg-[#F9A51A] font-medium text-[16px] normal-case mb-4">
                    Login
                  </button>
                  <p>
                    <span>Don’t have an account?</span>
                    <Link
                      to="/register"
                      className="text-[#F9A51A] font-medium text-[16px] underline"
                    >
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
            <p className="text-center text-[green] font-bold">{success}</p>
            <p className="text-center text-red-500 font-bold">{error}</p>
            <div className="flex flex-col items-center space-y-3 py-5">
              <button
                onClick={handleLoginWithFacebook}
                className="max-w-[300px] btn bg-[#fff] hover:bg-[#fff] normal-case"
              >
                <i className="fa-brands fa-facebook"></i>
                <span>Continue with Facebook</span>
              </button>
              <button
                onClick={handleLoginWithGoogle}
                className="max-w-[250px] btn bg-[#fff] hover:bg-[#fff] normal-case"
              >
                <i className="fa-brands fa-google"></i>
                <span>Continue with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
