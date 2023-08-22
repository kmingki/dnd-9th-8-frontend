import React, { useEffect } from "react";
import { emailAuth } from "@api/emailAuth";
import { useLocation, useNavigate } from "react-router-dom";

const EmailAuthPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get("code") as string;

  useEffect(() => {
    const postCode = async () => {
      try {
        const res = await await emailAuth(code);
        if (res.message === "성공적으로 이메일이 인증되었습니다.") {
          navigate("/");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    postCode();
  }, []);

  return <></>;
};

export default EmailAuthPage;
