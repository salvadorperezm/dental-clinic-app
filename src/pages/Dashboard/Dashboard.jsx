import { Heading } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

import { UserDashboard } from "../../components";

export const Dashboard = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const backendBaseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
      const response = await axios.get(`${backendBaseUrl}/auth/profile`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      localStorage.setItem("userInfo", JSON.stringify(response.data));
      setUserInfo(response.data);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <>
      {userInfo.role === "User" ? (
        <UserDashboard userInfo={userInfo} />
      ) : userInfo.role === "Personnel" ? (
        <Heading>
          {userInfo.firstName} {userInfo.lastName}. {userInfo.role}
        </Heading>
      ) : (
        <Heading>
          {userInfo.firstName} {userInfo.lastName}. {userInfo.role}
        </Heading>
      )}
    </>
  );
};
