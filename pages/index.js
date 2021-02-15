import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import querystring from 'querystring';

export default function Home() {

  const API_BASE_URL = "https://api.spaceXdata.com/v3/launches?limit=100";
  
  const [allLaunches,setAllLaunches] = useState([]);
  const [launch_year,setYear] = useState(0);
  const [launch_success,setLaunchSuccess] = useState(undefined);
  const [land_success,setLandSuccess] = useState(undefined);
  const [allLaunchesDataList,setAllLaunchesDataList] = useState([]);
  
  async function fetchLaunches(API_BASE_URL_param)
  {
    console.log("--fetchLaunches");

    const response = await fetch(API_BASE_URL_param);
    const allLaunchesData = await response.json();
     setAllLaunches(allLaunchesData);
    // setAllLaunchesDataList(allLaunchesData);
  }

  useEffect(() => {
    console.log("--useEffect");
    fetchLaunches(API_BASE_URL);
  },[]);

   function filterYear(value)
  {
     setYear(value);
    // let launchedOnParticularYear = [];
    // allLaunchesDataList.map(launch => {
    //   if(launch.launch_year == value)
    //   {
    //     launchedOnParticularYear.push(launch);
    //   }      
    // })
    // setAllLaunches(launchedOnParticularYear);

  }
  
  async function setFilters(filter,value)
  {
    if(filter == "year")
    {
      launch_year == value ?  setYear(undefined) :  setYear(value);
      await fetchLaunches(API_BASE_URL +'&'+querystring.stringify({land_success,launch_success,launch_year}));
    }
  }
  
  return (
    <div>
      <Head>
        <title>SpaceX Launch Details</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.wholePageLayout}>
      <div>
        <div>Filters</div>
        <div><input type="text" name="getYear" id="getYear" className={styles.getYear}/></div>
        <div><button onClick={(e)=>setFilters("year",e.target.value)} value="2006">2006</button></div>
      </div>
      <div className={styles.cards}>
       {allLaunches.map((launch)=> 
      {
        return (<div className={styles.card} key={launch.flight_number}>
      <div className={styles.image}>
      <img
        src={launch.links.mission_patch_small}
        alt="Picture of the Rocket"
        />
      </div>
      <div className={styles.flightNameAndFlightNumber}>
        {launch.mission_name} #{launch.flight_number}
      </div>
      <div>
      Mission ids:{' '}
      <ul>
        {' '}
        <li>{launch.mission_id}</li>
      </ul>
      </div>
      <div>
        Launch Year:{launch.launch_year}
      </div>
      <div>
        Successful Launch:{launch.launch_success?"true":"false"}
      </div>
      <div>
        Successful Landing:{launch.launch_success?"true":"false"}
      </div>
      </div>
        )
      }    
      )
      }
    
    </div>
    </div>
    </div>
     

    
  )
}
