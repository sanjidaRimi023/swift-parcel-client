import React, { useState } from "react";
import registerImg from "../../assets/image-upload-icon.png";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialBtn from "../../Components/SocialBtn";
import { toast } from "react-toastify";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    // reset,
  } = useForm();
  const { createUser, handleUserProfileUpdate } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const [selectedImage, setSelectedImage] = useState(null);
  const [profilePicture, setProfilePicture] = useState("");
  const [uploading, setUploading] = useState(false);
  

  const cloud_name = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const upload_preset = import.meta.env.VITE_CLOUDINARY_PRESET_NAME;

  const uploadImageToCloudinary = async (imagefile) => {
    const formData = new FormData();
    formData.append("file", imagefile);
    formData.append("upload_preset", upload_preset);
    formData.append("cloud_name", cloud_name);
    setUploading(true);
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();
    setUploading(false);
    return data.secure_url;
  };

 const handleImageChange = async (e) => {
  const file = e.target.files[0];
  if (file && file.type.startsWith("image/")) {
    setSelectedImage(URL.createObjectURL(file));
    const url = await uploadImageToCloudinary(file);
    console.log(url);
  
    setProfilePicture(url);
  } else {
    console.log("Please upload a valid image file");
  }
};


  const onSubmit = (data) => {
   
  

    if (!profilePicture) {
      toast("please wait for the image upload");
      return;
    }
    try {
        createUser(data.email, data.password)
          .then(res => {
          console.log(res);
            handleUserProfileUpdate(data.name, profilePicture)
              .then(() => {
              toast.success("profile updated successfully")
              })
              navigate(from);
      })

      

      

    } catch (error) {
      console.error("Registration failed:", error);
    }

    // reset();
    
  };

  return (
    <>
      <div className="space-y-4 lg:p-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-3xl font-extrabold">
              Create a New Account..!!
            </span>
            <span>Register With SwiftParcel</span>

            <label htmlFor="image-upload" className="cursor-pointer">
              <img
                src={selectedImage || registerImg}
                alt="Profile"
                className="w-20 h-20 object-cover rounded-full border-4 border-primary hover:scale-105 transition-all duration-300"
              />
            </label>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
            {uploading && <p className="text-blue-500">Uploading image...</p>}
          </div>

          <fieldset className="fieldset mt-5">
            <label className="label">Name</label>
            <input
              {...register("name", { required: true })}
              type="text"
              className="input"
              placeholder="Name"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-500">Name is required</p>
            )}

            <label className="label">Email</label>
            <input
              {...register("email", { required: true })}
              type="email"
              className="input"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email is required</p>
            )}

            <label className="label">Password</label>
            <input
              {...register("password", { required: true, minLength: 6 })}
              type="password"
              className="input"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">
                Password must be at least 6 characters
              </p>
            )}

            <li>
              <Link className="link link-hover">Forgot password?</Link>
            </li>

            <button type="submit" className="btn btn-primary mt-4 w-80">
              Register
            </button>
          </fieldset>
        </form>

        <span>
          Already have an account?{" "}
          <Link to="/login" className="btn-link text-primary">
            Login
          </Link>
        </span>

        <div className="divider w-80">OR</div>
        <SocialBtn />
      </div>
    </>
  );
};

export default Register;
