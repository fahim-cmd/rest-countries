import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css';

const Country = (props) => {
    // console.log(props.country);
    const {name, flag} = props.country;

    return (
        <div className="country">
            
           <div>
               <h2>{name}</h2>
               <img style={{height:"50px"}} src={flag} alt=""/>
               <br/>
               <br/>
               <Link to={`/country/${name}`}><button >Show Details</button></Link>
           </div>
        </div>
    );
};

export default Country;