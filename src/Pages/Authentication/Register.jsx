import React from "react";
import registerImg from "../../assets/image-upload-icon.png";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router";
import SocialBtn from "../../Components/SocialBtn";
const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { createUser } = useAuth();
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
    reset();
  };
  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 space-y-4">
          <span className="text-4xl font-bold">Create a New Account..!!</span>
          <span>Register With SwiftParcel</span>
          <img src={registerImg} alt="" />
        </div>

        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input
            {...register("name", {
              required: true,
            })}
            type="name"
            className="input"
            placeholder="name"
          />
          {errors.name?.type === "required" && <p>name is required</p>}

          <label className="label">Email</label>
          <input
            {...register("email", { required: true })}
            type="email"
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && <p>Email is required</p>}

          <label className="label">Password</label>
          <input
            {...register("password", { required: true, minLength: 6 })}
            type="password"
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "required" && <p>password is required</p>}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-primary mt-4 w-80">Register</button>
        </fieldset>
      </form>
    
       <span>
        Don't have any account? {" "}
        <Link to="/login" className="btn-link text-primary">Login</Link>
      </span>
      <div className="divider w-80">OR</div>
      <SocialBtn/>
    </div>
  );
};

export default Register;
