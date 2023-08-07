import React from "react";
import UserCheckCount from "@components/JoinPage/UserCheckCount";
import UserName from "@components/JoinPage/UserName";
import { useLocation } from "react-router-dom";

const JoinPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const state = query.get("state");

  switch (state) {
    case "name":
      return <UserName />;
    case "checkcount":
      return <UserCheckCount />;
    default:
      return null;
  }
};

export default JoinPage;
