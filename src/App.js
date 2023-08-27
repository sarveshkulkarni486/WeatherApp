import { useState } from 'react';
import { fetchWeather } from "./api";
import WeatherCard from './Components/WeatherCard';
import 'bootstrap/dist/css/bootstrap.css';
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBCol,
  MDBIcon,
  MDBRow,
  MDBInputGroup,
  MDBTypography,
} from "mdb-react-ui-kit";
import './style.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState('')
  
  const handleChange = (event)=> {
    setCity(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const weather = await fetchWeather(city, setError);
      setWeather(weather);
    }
    catch (error) {
      setError("City not Found");
    }
  };
  return (
      <div className="container">
        <div className="card">
        <h1>Weather App using React</h1>
          <form className="form-group" onSubmit={handleSubmit}>
            <MDBInputGroup className="mb-3">
              <input type="text" placeholder="Enter City" className="form-control rounded" value={city} onChange={handleChange} />{"\n"}
              <button type="submit" className="btn btn-primary">Search</button>
            </MDBInputGroup>
          </form>
          {error ? (
          <p className='text-center'>{error}</p>
          ) : (
          <WeatherCard weather={weather} />
          )}
      </div>
    </div>
  );
}
export default App;
