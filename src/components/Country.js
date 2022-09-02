import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/country.css';

function Country({
  id, country, countryCode,
}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/statistics/${country}`);
  };

  return (

    <li className="country">
      <p className="countryName">{country}</p>
      <p className="countryCode">{countryCode}</p>
      <button type="button" id={id} name={country} onClick={handleClick} className="forward">See details</button>
    </li>

  );
}

Country.propTypes = {
  id: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  countryCode: PropTypes.string.isRequired,
};

export default Country;
