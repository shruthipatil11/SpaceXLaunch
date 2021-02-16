import { useEffect, useState } from 'react';
import querystring from 'querystring';
import styles from '../styles/Home.module.css'

export default function FilterDetails({setFilters})
{

    const allYears = new Array(16).fill(0).map((_, index) => 2006 + index);

  return (
    <div className={styles.filters}>
    <div><h4 className={styles.filtersHeader}>Filters</h4></div>
    <div className={styles.filterHeading}>Launch Year</div>
    <div className={styles.years}>
    {allYears.map((year,index) =>
    {
     return ( <div><button key={index} onClick={(e)=>setFilters("launch_year",e.target.value)} value={year}>{year}</button></div>)
    })}
    </div>
    <div className={styles.filterHeading}>Successful Launch</div>
    <div className={styles.launchAndLandFilter}>
    <div><button onClick={(e)=>setFilters("launch_success",e.target.value)} value="true">True</button></div>
    <div><button onClick={(e)=>setFilters("launch_success",e.target.value)} value="false">False</button></div>
    </div>
    <div className={styles.filterHeading}>Successful Landing</div>
    <div className={styles.launchAndLandFilter}>
    <div><button onClick={(e)=>setFilters("land_success",e.target.value)} value="true">True</button></div>
    <div><button onClick={(e)=>setFilters("land_success",e.target.value)} value="false">False</button></div>
    </div>
  </div>
  );
}