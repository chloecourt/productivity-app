import React, { useEffect, useState } from "react";
import Form from "./Form";
import Job from './Job';
import Filter from './Filter';

const ListContainer = () => {
  const [jobs, setJobs] = useState([]);
   

  // const getData = ()=> {

  //   const fakeData = {applicationId: 1, company: "google", role: "software engineer", url: "www.hello.com"}; 

  //   setJobs([...jobs, fakeData]);
    
  // }
  
  useEffect(()=> {
    // getData();
    setJobs([...jobs,{applicationId:0, company: "amazon", role: "senior software engineer", url: "www.yello.com"}]);
    
  },[]); 
  
  // need an array of JSX components 
  
  
  // get request func for fetching the jobs from the database
  // deconstruct {application_id, company, role, url } =data 
  // const jobsArray = jobs.map((job)=> { 
  //     return <Job key={job.applicationId} props = {job}/>
  // });
    // populate jobs with
    const arrayJobs = [];
    for (let i=0; i < jobs.length; i++) {
      arrayJobs.push(<Job key={jobs[i].applicationId} jobsObj={jobs[i]}/>)
    }
  return (
    <div>
    <Filter/>
    <Form/>
    {arrayJobs}
  </div>
  );
}
export default ListContainer; 
