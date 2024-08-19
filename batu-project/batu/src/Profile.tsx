import React, { useEffect } from "react";
import Cookies from "universal-cookie";
import { instance } from "./api";

export default function Profile() {
  const cookies = new Cookies();

  useEffect(() => {
    const token = cookies.get("token");
    instance.post("/auth/profile", { token }).then(({ data }) => {
      console.log(data);
    });
  }, []);

  return <div>Profil</div>;
}
