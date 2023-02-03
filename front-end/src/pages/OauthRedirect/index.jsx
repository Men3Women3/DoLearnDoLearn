import React, { useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const OauthRedirect = () => {
  const params = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const search = params.search;
    const splitedSearch = search.split("&&");
    localStorage.setItem("accessToken", splitedSearch[1].slice(12));
    localStorage.setItem("refreshToken", splitedSearch[0].slice(14));
    localStorage.setItem(
      "id",
      splitedSearch[2].slice(splitedSearch[2].length - 1)
    );
    navigate("/");
  }, []);

  return <div></div>;
};

export default OauthRedirect;
