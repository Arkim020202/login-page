import React, { useState } from "react";
import AppInput from "../components/AppInput";
import ReactLoading from "react-loading";
import axios from "../service/axios";
import { useNavigate } from "react-router-dom";
import image from "../assets/images/Night.svg";

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("testuser1");
  const [password, setPassword] = useState("testuser1_password");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = () => {
    if (username.length > 5 || password.length > 8) {
      setLoading(true);
      axios({
        method: "POST",
        url: "/auth/login",
        data: {
          username: username,
          password: password,
        },
      })
        .then((res) => {
          setStatus("you are logged in");
          localStorage.setItem("token", res.data.token);
          navigate("/");
        })
        .catch((error) => {
          setStatus(error.response.data.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
  return (
    <div
      className="h-[100%] w-[100%] bg-cover flex items-center justify-center "
      style={{
        backgroundImage: `url(${image})`,
        width: "screen",
        height: "screen",
      }}
    >
      <div className=" bg-transparent backdrop-blur-md w-[300px] h-[360px] flex items-center justify-center flex-col gap-6  border border-gray-400 rounded-[15px]">
        <div className="text-xl text-white pb-10">
          <strong>Login</strong>
        </div>
        <AppInput
          type="text"
          value={username}
          placeholder="UserName"
          onChange={handleChangeUsername}
        />

        <AppInput
          type="password"
          value={password}
          placeholder="Password"
          onChange={handleChangePassword}
        />

        <button
          className="bg-[#1a2650] p-2 rounded text-gray-300"
          onClick={handleSubmit}
        >
          Submit
        </button>
        {loading ? <ReactLoading color={"#1a2650"} /> : status}
      </div>
    </div>
  );
}

export default LoginPage;
