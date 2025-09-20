import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries}) => {

  console.log(handleVisitedCountries)

  // console.log(country.name.common);
  // console.log(country.flags.flags.png);
  // console.log(country.population.population);

  const [visited, setVisited] = useState(false)

  const handleVisited = () => {
    //console.log('btn clicked')
    //setVisited(true)


    // 1st way

    // if(visited) {
    //   setVisited(false)
    // }
    // else {
    //   setVisited(true)
    // }


    // 2nd way

    //setVisited(visited ? false : true)


    // 3rd way

    setVisited(!visited );
    handleVisitedCountries(country);

  };

  return (
    <div className={`country ${visited && 'country-visited'}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common}</h3>
      <p>Population: {country.population.population}</p>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 300000 ? "Big Country" : "Small Country"}
      </p>
      <button onClick={handleVisited}>
        {visited ? 'Visited' : 'Not Visited'}
      </button>
    </div>
  );
};

export default Country;
