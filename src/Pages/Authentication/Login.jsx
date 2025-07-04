import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import "../../../src/index.css";
import SocialBtn from "../../Components/SocialBtn";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { loginUser } = useAuth();
   const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from || '/';
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
        loginUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                navigate(from);
            })
            .catch(error => console.log(error))
    }
    


  return (
    <div className="space-y-4 lg:py-27">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="text-4xl  font-bold">Welcome Back </p>
        <p className="text-lg">Login with SwiftParcel</p>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            {...register("email", {
              required: true,
              pattern: /^[A-Za-z\d]{6,}$/,
            })}
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">email is requied</p>
          )}

          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            {...register("password", { required: true, minLength: 6 })}
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is requied</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">Password must be 6 word</p>
          )}
          <div>
            <Link className="link link-hover">Forgot password?</Link>
          </div>
        </fieldset>
        <button className="btn btn-primary mt-4 w-80">Login</button>
      </form>
      <span>
        Don't have any account? {" "}
        <Link state={{ from }} to="/register" className="btn-link text-primary">Register</Link>
      </span>
      <div className="divider w-80">OR</div>
     <SocialBtn/>
    </div>
  );
};

export default Login;
