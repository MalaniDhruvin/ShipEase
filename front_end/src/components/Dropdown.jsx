import React from 'react'
import { useState, useEffect, useRef } from "react";

const Dropdown = () => {
    const [val, setVal] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [vis, setVis] = useState(false)
    const input = useRef();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all');
                const data = await response.json();
                console.log(data)
                const filteredData = data.filter((item) => item.name.common.toLowerCase().includes(searchTerm));
                setVal(filteredData)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
        

    }, [searchTerm]);

    const handleInput = () => {
        setVis(!vis);
    }
    const handlecon = (country) => {
        input.current.value = country.name.common;
        console.log(val[0].name.common)
        setVis(false)
    }
    return (
        <div className='ship-drop-container'>
            <input type="text" placeholder='Please start typing to select ' required onClick={handleInput} ref={input} onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} />
            {vis && (<div className="ship-drop">
                {val.map((country, index) => (
                    <div className='div-api' key={index} onClick={() => handlecon(country)} style={{'display':'flex','alignItems':'center','gap':'5px','fontSize':'1.05vw',padding:'8px 2px'}}>
                        <img src={country.flags.png} alt={country.flags.alt} style={{'width':'20px'}} />
                        {country.name.common}
                    </div>
                ))}
            </div>)}
        </div>

    );
};

export default Dropdown;