import React from "react";
import DeleteButton from "./DeleteButton";

const Job = ({ jobsObj }) => {
  return (
    <>
    <tr>
      <td>{jobsObj.company}</td>
      <td>{jobsObj.role}</td>
      <td>{jobsObj.url}</td>
    </tr>
    <DeleteButton onClick={deleteClick(jobsObj.applicationId)} />
    </>
  );
};

export default Job; 