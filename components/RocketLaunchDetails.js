
import styles from "../styles/RocketLaunchDetails.module.css";

export default function RocketLaunchDetails({ launchDetails }) {

return (
<div className={styles.card} key={launchDetails.flight_number}>
      <div className={styles.image}>
      <img
        src={launchDetails.links.mission_patch_small}
        alt="Rocket Image"
        />
      </div>
      <div className={styles.flightNameAndFlightNumber}>
        {launchDetails.mission_name} #{launchDetails.flight_number}
      </div>
      <div>
      <p>Mission ids:</p>{' '}
      <ul>
        <li><span>{launchDetails.mission_id}</span></li>
      </ul>
      </div>
      <div>
      <p>Launch Year:</p><span>{launchDetails.launch_year}</span>
      </div>
      <div>
      <p>Successful Launch:</p><span>{launchDetails.launch_success?"true":"false"}</span>
      </div>
      <div>
      <p>Successful Landing:</p><span>{launchDetails.launch_success?"true":"false"}</span>
      </div>
      </div>
         
  
)
}