
import styles from "../styles/RocketLaunchDetails.module.css";

export default function RocketLaunchDetails({ launchDetails }) {
  console.log(launchDetails.land_success,launchDetails.launch_success);
  const {
    flight_number,
    mission_name,
    mission_id,
    launch_year,
    launch_success,
    links,
    rocket,
  } = launchDetails;
  const imgSrc = links.mission_patch_small;
  const land_success = rocket.first_stage.cores[0].land_success;
return (
<div className={styles.card} key={flight_number}>
      <div className={styles.image}>
      <img
        src={imgSrc}
        alt="Rocket Image"
        />
      </div>
      <div className={styles.flightNameAndFlightNumber}>
        {mission_name} #{flight_number}
      </div>
      <div>
      <p>Mission ids:</p>{' '}
      {mission_id.length>0 ? (<ul>
          {mission_id.map(id => <li key={id}><span className={styles.missionId}>{mission_id}</span></li>)}         
      </ul>):null}
      </div>
      <div>
      <p>Launch Year:</p><span>{launch_year}</span>
      </div>
      <div>
      <p>Successful Launch:</p><span>{launch_success == null ?"Not Available":launch_success ? "true":"false"}</span>
      </div>
      <div>
      <p>Successful Landing:</p><span>{land_success == null ?"Not Available":land_success ? "true":"false"}</span>
      </div>
      </div>
         
  
)
}