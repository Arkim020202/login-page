import React from 'react'
import Protected from "../components/Protected";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Protected>
      <div>HomePage</div>
      <button onClick={handleLogout}>logout</button>
    </Protected>
  );
}

export default HomePage