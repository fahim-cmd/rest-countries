import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CountryDetails.css';

const CountryDetails = () => {
    const {countryName} = useParams();
    const [country, setCountry] = useState([])

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            const result = data.find( foo => foo)
            setCountry(result)
            console.log(result)
        })
        
    }, [])


const countryStyle = {
    fontFamily: 'Arial, Helvetica, sans-serif',
    borderLeft: '8px solid gray',
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '18px',
    margin: '150px 0px 0px 500px',
    boxShadow: '8px 8px 45px lightgray',
    width: '30%',    
    borderImage: 'linear-gradient(180deg, lightgrey, black)',
    borderImageSlice: '1'

}
const { name, capital, population, region, alpha2Code} = country;

    return (
        <div>            
            <div style={countryStyle}>
               <h3 className="makeup"> country: {name}</h3>
               <p className="sameStyle"> capital : {capital} </p>
               <p className="sameStyle"> population : {population} </p>
               <p className="sameStyle"> region : {region} </p>      
               <p> Alpha2 Code: {alpha2Code}</p>
              
            </div>
        </div>
    );
};

export default CountryDetails;