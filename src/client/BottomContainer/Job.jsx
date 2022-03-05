import React from "react";
import DeleteButton from "./DeleteButton";

const Job = ({ jobsObj }) => {
  // console.log("inside of job component", jobsObj); 
  // const {company, role, url} = props.props;
  // console.log("jobs component props", props);
  /*

  // if we want to use tables
  <tr>
      <td>{jobsObj.company}</td>
      <td>{jobsObj.role}</td>
      <td>{jobsObj.url}</td>
    </tr>
  */
 const deleteClick = (id)=> {
    console.log('delete: ', id); 
 } 

  return (
    <>
    <div>{jobsObj.company}</div>
    <div>{jobsObj.role}</div>
    <div>{jobsObj.url}</div>
    <DeleteButton onClick={deleteClick(jobsObj.applicationId)} />
    </>
  );
};

export default Job; 