import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import querystring from 'querystring';
import RocketLaunchDetails from "../components/RocketLaunchDetails";
import FilterDetails from "../components/FilterDetails";

export default function Home() {

  const API_BASE_URL = "https://api.spaceXdata.com/v3/launches?limit=100";
  
  const [allLaunches,setAllLaunches] = useState([]);
  const [launch_year,setYear] = useState(0);
  const [launch_success,setLaunchSuccess] = useState(undefined);
  const [land_success,setLandSuccess] = useState(undefined);
  // const allYears = new Array(16).fill(0).map((_, index) => 2006 + index);


  async function fetchLaunches(API_BASE_URL_param)
  {
    const response = await fetch(API_BASE_URL_param);
    const allLaunchesData = await response.json();
    setAllLaunches(allLaunchesData);
  }

  useEffect(() => {
    const requiredURL =  (launch_year ||launch_success ||land_success ) ? API_BASE_URL +'&'+querystring.stringify({land_success,launch_success,launch_year}): API_BASE_URL;         
    fetchLaunches(requiredURL);
  },[launch_year,launch_success,land_success]);

  
   function setFilters(filter,value)
   {
    switch(filter)
    {
      case 'launch_year': launch_year == value ?  setYear(0) :  setYear(value);break;
      case 'launch_success':  value == "true" ? setLaunchSuccess(true) : setLaunchSuccess(undefined);break;
      case 'land_success' :  value == "true" ? setLandSuccess(true) : setLandSuccess(undefined);break;
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
      <FilterDetails setFilters={setFilters}/>
  
    <div className={styles.cards}>
     {allLaunches.map(launchDetails=> 
      {
        return (
      <RocketLaunchDetails launchDetails={launchDetails} />)
        })}
    </div>

    </div>
    <div className={styles.developer}><b>Developed by</b>:Shruti</div>
    </div>
     

    
  )
}
