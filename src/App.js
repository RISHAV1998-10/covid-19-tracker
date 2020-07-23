import React,{useEffect,useState} from 'react';
import {
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core"
import './App.css';

function App() {

  const [countries, setCountries] = useState([]);


  useEffect(()=>{

    const getCountries = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response)=> response.json())
      .then((data)=>{
        const countries = data.map( (country)=> (
          {
            name: country.country,
            value: country.countryInfo.iso2,
          }
        ));
        setCountries(countries);
      })
    }

    getCountries();
  },[]);
  

  return (
    <div className="App">
      <div className="app_header">
          <h1> COVID-19 TRACKER </h1>
          <FormControl className="app_dropdown">
            <Select 
                variant="outlined"
                value="worldwide"
            >
              {
                countries.map((country)=> (
                  <MenuItem value={country.value}>{country.name}</MenuItem>
                ))
              }
            
            
            </Select>

          </FormControl>

      </div>
    </div>
  );
}

export default App;
