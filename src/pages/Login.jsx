import React from 'react'

const Login = () => {
  return (
    <div class="hero min-h-screen">
    <div class="hero-content">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl">
        <div>
          <form class="card-body" action="">
          <h1 className="font-bold text-2xl mb-3">Login</h1>
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
            <label class="label">
              <a href="" class="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div class="form-control mt-6">
            <button class="btn bg-[#F9A51A] hover:bg-[#F9A51A] font-medium text-[16px] normal-case mb-4">Login</button>
            <p>Don’t have an account?<a className="text-[#F9A51A] font-medium text-[16px] underline" href="">Register</a></p>
          </div>
          </form>
        </div>
        <div className="flex flex-col items-center space-y-3 py-5">
        <button className="max-w-[300px] btn bg-[#fff] hover:bg-[#fff] normal-case">
        <i class="fa-brands fa-facebook"></i>
          <span>Continue with Facebook</span>
        </button>
        <button className="max-w-[250px] btn bg-[#fff] hover:bg-[#fff] normal-case">
        <i class="fa-brands fa-google"></i>
          <span>Continue with Google</span>
        </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login