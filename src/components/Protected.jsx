import axios from "../service/axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Protected({ children }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [authorize, setAuthorize] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/users")
      .then(() => {
        setAuthorize(true);
      })
      .catch(() => {
        navigate("/login");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return authorize && children;
}

export default Protected;