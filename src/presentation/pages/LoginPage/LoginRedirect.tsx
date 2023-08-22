import { getCookie, setCookie } from "@utils/cookie";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LoginRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const accessToken = searchParams.get("token") as string;
  const memberState = searchParams.get("member-status") as string;

  useEffect(() => {
    setCookie("accessToken", accessToken, 1);
    if (memberState === "NEW_MEMBER") {
      navigate("/login/complate");
    } else {
      navigate("/");
    }
  }, []);
  return <></>;
};

export default LoginRedirect;
