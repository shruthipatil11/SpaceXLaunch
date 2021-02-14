import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import { useEffect, useState } from 'react';

export default function Home() {

  const API_BASE_URL = "https://api.spacexdata.com/v3/launches?limit=100";
  
  const [allLaunches,setAllLaunches] = useState([]);

  useEffect(() => {
    fetch(API_BASE_URL).then(response => response.json()).then(data => {
      console.log(data);
      setAllLaunches(data);
    });
  },[]);
  
  
  return (
    <div>
      <Head>
        <title>SpaceX Launch Details</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
       {allLaunches.map((launch)=> 
      {
        return (<div>
      <img
        src={launch.links.mission_patch}
        alt="Picture of the author"
          />
      <div>
         <p>{launch.mission_name}</p>#<p>{launch.flight_number}</p>
      </div>
      <div>
        {launch.mission_id}
      </div>
      <div>
        <ul><li>Mission ids: </li><li>list Mission ids</li></ul>
      </div>
      <div>
        Launch Year:{launch.launch_year}
      </div>
      <div>
        Successful Launch:{launch.launch_success}
      </div>
      <div>
        Successful Landing: {launch.launch_success}
      </div>
      </div>
        )
      }
    
      )
      }
    
    </div>
     

    
  )
}
