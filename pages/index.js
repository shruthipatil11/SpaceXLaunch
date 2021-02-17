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
  const [launch_year,setYear] = useState(undefined);
  const [launch_success,setLaunchSuccess] = useState(undefined);
  const [land_success,setLandSuccess] = useState(undefined);
  const [loader,setLoader] = useState(false);
  // const allYears = new Array(16).fill(0).map((_, index) => 2006 + index);


  async function fetchLaunches(API_BASE_URL_param)
  {
    setAllLaunches([]);
    setLoader(true);
    const response = await fetch(API_BASE_URL_param);
    const allLaunchesData = await response.json();
    setLoader(false);
    setAllLaunches(allLaunchesData);
  }

  useEffect(() => {
    const requiredURL =  (launch_year ||(launch_success != undefined) ||land_success != undefined ) ? API_BASE_URL +'&'+querystring.stringify({land_success,launch_success,launch_year}): API_BASE_URL;         
    fetchLaunches(requiredURL);
  },[launch_year,launch_success,land_success]);

  
   function setFilters(filter,value)
   {
     const toBooleanOfFilterData = value == "true" ? true : false;
    switch(filter)
    {
      case 'launch_year': launch_year == value ?  setYear(undefined) :  setYear(value);break;
      case 'launch_success':  launch_success == toBooleanOfFilterData ? setLaunchSuccess(undefined) : toBooleanOfFilterData? setLaunchSuccess(true): setLaunchSuccess(false);break;
      case 'land_success' :  land_success == toBooleanOfFilterData ? setLandSuccess(undefined) : toBooleanOfFilterData? setLandSuccess(true) :setLandSuccess(false);break;
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
      <FilterDetails launch_success={launch_success} land_success={land_success} launch_year = {launch_year} setFilters={setFilters}/>
  
    <div className={styles.cards}>

      {loader ? <div className={styles.container}>
       <div className={styles.loader}></div>
      </div> : null} 

  
     {allLaunches.length>0 ? (allLaunches.map(launchDetails=> 
      {       
        return (
      <RocketLaunchDetails launchDetails={launchDetails} />)
        })) :null}
    </div>

    </div>
    <div className={styles.developer}><b>Developed by</b>:Shruti</div>
    </div>
     

    
  )
}
