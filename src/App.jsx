import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import JobCard from './components/JobCard'
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import {db} from "./firebase.config"

function App() {

  const [jobs, setJobs] = useState([]);

    const fetchPost = async () => {

        await getDocs(collection(db, "jobs"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setJobs(newData);                
                console.log(jobs, newData);
            })

    }
    const fetchJobsCustom = async (jobCriteria) => {
      const tempJobs =[]
      const jobsRef =query(collection(db,"jobs"));
      const q =query (jobsRef, where("type","==",jobCriteria.type),where("title","==",jobCriteria.title),where("experience","==",jobCriteria.experience),where("location","==",jobCriteria.location));
      const req = await getDocs(q)

      req.forEach((job)=>{
        tempJobs.push({
         ...job.data(),
         id:job.id,
        })
      });

      setJobs(tempJobs);
  }


    useEffect(()=>{
        fetchPost();
    }, [])

    
 
  return (
    <>
    <div>
      <Navbar/>
      <Header/>
      <SearchBar fetchJobsCustom={fetchJobsCustom}/>

      {
        jobs?.map((jobs,i)=>(
            <JobCard key={i}
                {...jobs}/>
            
        ))
    }
      
    </div>
        
    </>
  )
}

export default App
