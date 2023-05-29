/* eslint-disable react/prop-types */
import { useState } from "react";

import { AdminDashboardLayout } from "../../../layout";

export const PersonnelDashboard = ({ userInfo }) => {
  const [currentComponent, setCurrentComponent] = useState("usuarios");

  const asideOptions = [
    {
      id: 1,
      title: "usuarios",
    },
    {
      id: 2,
      title: "citas",
    },
    {
      id: 3,
      title: "materiales",
    },
    {
      id: 4,
      title: "proveedores",
    },
  ];

  return (
    <AdminDashboardLayout
      userInfo={userInfo}
      asideOptions={asideOptions}
      currentComponent={currentComponent}
      setCurrentComponent={setCurrentComponent}
    />
  );
};
