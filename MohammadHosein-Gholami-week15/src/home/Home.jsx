import React, { useEffect, useState } from "react";
import Input from "../input/Input";
import axios from "axios";

function Home() {
  const [city, setCity] = useState([]);
  const [searchCity, setSearchCity] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/cities")
      .then((res) => {
        setCity(res.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setFilteredCities(city.filter((c) => c.includes(searchCity)));
  }, [city, searchCity]);

  return (
    <div>
      <Input
        searchCity={searchCity}
        setSearchCity={setSearchCity}
        filteredCities={filteredCities}
      />
    </div>
  );
}

export default Home;
