/* eslint-disable react/prop-types */

import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

export const AppointmentStatus = ({ status }) => {
  return (
    <>
      {status ? (
        <AiFillCheckCircle color={"green"} />
      ) : (
        <AiFillCloseCircle color={"red"} />
      )}
    </>
  );
};
