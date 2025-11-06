import { Link } from "react-router-dom";
import styles from "./Input.module.css";

function Input({ searchCity, setSearchCity, filteredCities }) {
  const handleChange = (event) => {
    setSearchCity(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <p>Type your City</p>
        <input
          type="text"
          id="input"
          list="cities"
          onChange={handleChange}
          value={searchCity}
        />
        <datalist id="cities">
          {filteredCities.map((c, index) => (
            <option key={index} value={c} />
          ))}
        </datalist>
        <li>
          <Link to="/welcome">Back</Link>
        </li>
      </div>
    </div>
  );
}

export default Input;
