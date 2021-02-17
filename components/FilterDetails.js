import { useEffect, useState } from 'react';
import querystring from 'querystring';
import styles from '../styles/FilterDetails.module.css'

export default function FilterDetails({launch_success,land_success,launch_year,setFilters})
{

    const allYears = new Array(16).fill(0).map((_, index) => 2006 + index);
    console.log("--launch_success",launch_success);
    const launchSuccess = typeof launch_success == "undefined"? null:launch_success;
    const landSuccess = typeof land_success == "undefined"? null:land_success;
  return (
    <div className={styles.filters}>
    <div><h4 className={styles.filtersHeader}>Filters</h4></div>
    <div className={styles.filterHeading}>Launch Year</div>
    <div className={styles.years}>
    {allYears.map((year,index) =>
    {
     return ( <div><button key={index} className={launch_year == year  ? styles.btnSelected : styles.btnUnselected} onClick={(e)=>setFilters("launch_year",e.target.value)} value={year}>{year}</button></div>)
    })}
    </div>
    <div className={styles.filterHeading}>Successful Launch</div>
    <div className={styles.launchAndLandFilter}>
    {/* <div><button key="1" className={launch_success? styles.btnSelected : styles.btnUnselected} onClick={(e)=>setFilters("launch_success",e.target.value)} value="true">True</button></div>
    <div><button key="2" className={launch_success == undefined ? styles.btnSelected : styles.btnUnselected} onClick={(e)=>setFilters("launch_success",e.target.value)} value="false">False</button></div> */}

    <div><button key="1"  className={(launchSuccess)? styles.btnSelected : styles.btnUnselected} onClick={(e)=>setFilters("launch_success",e.target.value)} value="true">True</button></div>
    <div><button key="2"  className={(!launch_success && launch_success != null) ? styles.btnSelected : styles.btnUnselected} onClick={(e)=>setFilters("launch_success",e.target.value)} value="false">False</button></div>
    </div>
    <div className={styles.filterHeading}>Successful Landing</div>
    <div className={styles.launchAndLandFilter}>
    <div><button  key ="3"  className={(land_success)? styles.btnSelected : styles.btnUnselected} onClick={(e)=>setFilters("land_success",e.target.value)} value="true">True</button></div>
    <div><button  key="4"  className={(!land_success && land_success != null) ? styles.btnSelected : styles.btnUnselected} onClick={(e)=>setFilters("land_success",e.target.value)} value="false">False</button></div>
    </div>
  </div>
  );
}