import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/datacontext";
import CustomInput from "../components/custominput";
import CustomButton from "../components/custombutton";

const defaultformFields = {
  avatar: undefined,
  username: undefined,
  password: undefined,
  user: undefined,
};

const Homepage = () => {
  const navigate = useNavigate();
  const { setFields } = useContext(DataContext);

  const [formFields, setFormFields] = useState(defaultformFields);
  const { avatar, username, password, user } = formFields;

  const handleSubmit = () => {
    setFields({ ...formFields });
    navigate("/user");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center gap-5"
    >
      <p className="text-3xl font-bold text-center">Login Page</p>
      {/* <img
        className="h-40 aspect-square rounded-[50%] border-black border-2 cursor-pointer object-cover"
        ref={avatarSrc}
        id="imgTemplate"
        src={avatar}
        alt="avatar"
        onClick={(event) => {
          event.preventDefault();
          avatarInputRef.current.click();
        }}
      />

      <input
        type="file"
        accept="image/*"
        onChange={fileChange}
        className="hidden"
        ref={avatarInputRef}
      /> */}

      <CustomInput
        type="text"
        onChange={handleChange}
        name="username"
        placeholder="Username"
      />
      <CustomInput
        type="password"
        onChange={handleChange}
        name="password"
        placeholder="Password"
      />

      <div className="flex gap-3">
        <input
          type="radio"
          value="Student"
          name="user"
          onChange={handleChange}
        />
        <label>Student</label>
        <input type="radio" value="Staff" name="user" onChange={handleChange} />
        <label>Staff</label>
      </div>

      <CustomButton>Login</CustomButton>
    </form>
  );
};

export default Homepage;