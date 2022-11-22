import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logimg from "../../../assets/icons/Tablet login-bro.8def85bd3dd26ace1215.png";
import { ContextApi } from "../../../ContextApi/AuthContext";
const Login = () => {
  const { logUserIn } = useContext(ContextApi);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col gap-32 lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-5xl font-bold text-center">Login!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                required
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                required
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <p>
                Don't Have an Account?
                <Link to="/signup" className="ml-2 link-hover text-primary">
                  SignUp
                </Link>
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
        <div className="text-center w-[40%]">
          <img className="w-full" src={logimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
