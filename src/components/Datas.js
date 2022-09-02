import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiSearch } from 'react-icons/bi';
import { fetchData } from '../redux/fetch/fetch';
import Country from './Country';
import '../styles/datas.css';

/* eslint-disable array-callback-return */

const Countries = () => {
  const countries = useSelector((state) => state.countries);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    if (countries.length === 0) {
      dispatch(fetchData());
    }
  }, [dispatch]);

  return (
    <div className="countries">
      <div className="headerContainer">
        <div className="colo">
          <header className="header">
            <h1 className="logo">COVID STATISTICS</h1>
            <div className="searchInput">
              <input
                type="textInput"
                placeholder="Search"
                aria-label="search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="searchIcon">
                <BiSearch />
              </div>
            </div>
          </header>
          <div className="text-cont">
            <p className="text">
              Coronavirus disease 2019 COVID-19 is a contagious disease caused
              by a virus, the severe acute respiratory syndrome coronavirus 2
              SARS-CoV-2. The first known case was identified in Wuhan, China,
              in December 2019.[7] The disease quickly spread worldwide,
              resulting in the COVID-19 pandemic. Symptoms of COVID-19 are
              variable, but often include fever, cough, headache,fatigue,
              breathing difficulties, loss of smell, and loss of taste. Symptoms
              may begin one to fourteen days after exposure to the virus. At
              least a third of people who are infected do not develop noticeable
              symptoms. Of those people who develop symptoms noticeable enough
              to be classed as patients, most (81%) develop mild to moderate
              symptoms up to mild pneumonia, while 14% develop severe symptoms
              dyspnoea, hypoxia, or more than 50% lung involvement on imaging,
              and 5% develop critical symptoms respiratory failure, shock, or
              multiorgan dysfunction. Older people are at a higher risk of
              developing severe symptoms. Some people continue to experience a
              range of effects long COVID for months after recovery, and damage
              to organs has been observed. Multi-year studies are underway to
              further investigate the long-term effects of the disease.15 Here
              is a website where you can check the statistics of how covid
              affetcted each country
            </p>
          </div>
        </div>
      </div>

      <div className="searchInput-one">
        <h2 className="countryheading">COUNTRIES</h2>
        <div className="cont">
          {' '}
          <input
            className="textInput-one"
            type="textInput"
            placeholder="Search countries"
            aria-label="search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="searchIcon-one">
            <BiSearch />
          </div>
        </div>
      </div>

      <ul className="countriesList">
        { // eslint-disable-next-line consistent-return
          countries.filter((element) => {
            if (search === '') {
              return element;
            }
            if (
              element.Country.toLowerCase().includes(search.toLowerCase())
            ) {
              return element;
            }
          })
            .map((country) => (
              <Country
                key={country.ID}
                id={country.ID}
                details={country}
                country={country.Country}
                countryCode={country.CountryCode}
              />
            ))
        }
      </ul>
    </div>
  );
};

export default Countries;
