import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { ContextApi } from "../../ContextApi/AuthContext";
import useToken from "../../hooks/useToken";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [createdEmail, setCreatedEmail] = useState("");
  const [token] = useToken(createdEmail);
  const { createUser, updateUser } = useContext(ContextApi);
  const [signError, setSignError] = useState("");

  if (token) {
    navigate("/");
  }
  const handleSignUp = (data) => {
    setSignError("");
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast("User Created successfully.");
        console.log(user);
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then((result) => {
            saveUserData(data.name, data.email);
          })
          .catch((er) => console.log(er));
      })
      .catch((error) => {
        console.log(error);
        setSignError(error.message);
      });

    const saveUserData = (name, email) => {
      const user = { name, email };
      console.log(user);
      fetch(`http://localhost:5000/users`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCreatedEmail(email);
        });
    };
  };
  return (
    <div className=" mx-auto h-[580px] flex justify-center items-center ">
      <div className="w-96 mt-18 ">
        {" "}
        <h1 className="text-5xl font-bold text-center mb-4">SignUp</h1>
        <form className=" mx-auto" onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full ">
            <label className="label">
              {" "}
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name must be typed",
              })}
              className="input input-bordered w-full "
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
              })}
              className="input input-bordered w-full "
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[!#$%&? "])/,
                  message: "Add special character",
                },
                minLength: {
                  value: 6,
                  message: "Password must be 6 character long ",
                },
              })}
              className="input input-bordered w-full "
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            {signError && <p className="text-red-600">{signError}</p>}
          </div>

          <label className="label"> </label>
          <input className="btn btn-accent w-full" type="submit" />
          <p>
            Already Have an Account?{" "}
            <Link className="text-primary" to="/login">
              Please Login
            </Link>
            <h4 className="divider">or</h4>
          </p>
          <input
            className="btn btn-outline w-full"
            type="submit"
            value="Sign in with Google"
          />
        </form>
      </div>
    </div>
  );
};

export default Signup;

// <div className="hero min-h-screen bg-base-200">
//   <div className="hero-content flex-col gap-32 lg:flex-row-reverse">
//     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//       <div className="card-body">
//         <h1 className="text-5xl font-bold text-center">Sign-Up!</h1>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Name</span>
//           </label>
//           <input
//             required
//             type="text"
//             placeholder="Your Name"
//             className="input input-bordered"
//           />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Email</span>
//           </label>
//           <input
//             required
//             type="email"
//             placeholder="email"
//             className="input input-bordered"
//           />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Password</span>
//           </label>
//           <input
//             type="text"
//             placeholder="password"
//             required
//             className="input input-bordered"
//           />
//           <p>
//             Already Have an Account?
//             <Link to="/login" className="ml-2 link-hover text-primary">
//               Login
//             </Link>
//           </p>
//         </div>
//         <div className="form-control mt-6">
//           <button className="btn btn-primary">Sign Up</button>
//         </div>
//       </div>
//     </div>
//     <div className="text-center w-[40%]">
//       <img className="w-full" src={logimg} alt="" />
//     </div>
//   </div>
// </div>
