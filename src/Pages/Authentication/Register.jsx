import React from "react";
import registerImg from "../../assets/image-upload-icon.png";
import { useForm } from "react-hook-form";
const Register = () => {
  const {
    register,
      formState: { errors },
    handleSubmit
    } = useForm();
    const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
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
          <input type="password" className="input" placeholder="Password" />

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-primary mt-4 w-80">Register</button>
        </fieldset>
      </form>
      <div className="divider w-80">OR</div>
      <div>
        <button className="btn bg-white text-black w-80 border-[#e5e5e5]">
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
