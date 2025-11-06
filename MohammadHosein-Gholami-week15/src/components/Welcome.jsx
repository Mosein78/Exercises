import { Link } from "react-router-dom";
import styles from "./Welcome.module.css";
function Welcome() {
  return (
    <div className={styles.container}>
      <div className={styles.welcome}>
        <h1>WELCOME TO MY PAGE</h1>
        <p>Do you want to find your City ?</p>
        <li>
          <Link to="/">Click Here</Link>
        </li>
      </div>
    </div>
  );
}

export default Welcome;
