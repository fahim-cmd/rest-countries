import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Main.css';

const Main = () => {
    const [ countries, setCountries ] = useState([]);
    useEffect(()=> {
        fetch( "https://restcountries.eu/rest/v2/all" )
        .then(res => res.json())
        .then (data => {
            const value = data.slice(0, 20)
            setCountries(value);            
        })
    }, [])
    
    
    return (
        <div className="container">
           <h3 className="mainStyle"><span style={{fontSize:'50px', color:'tomato', fontWeight:'800'}}>Welcome</span> <br/> to the world best country information website</h3> 
           {
               countries.map( country => <Country  key={country.alpha3Code}  country={country}></Country>)
           }
            
        </div>
    );
};

export default Main;