import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
const WeatherCard = ({weather})=>{
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-12 col-md-4 col-sm-12 col-xs-12">
                    <div className="card p-4">
                        <div className="card-header">
                            <div className="d-flex">
                                <h6 className="flex-grow-1 weather-city">{weather ? weather .name + " " + weather.sys.country: "-"}</h6>
                                <p className="grey weather-description">{weather ? weather.weather[0].description : "-"}</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="weather-temp mb-3 font-weight-bold" id="heading">{weather ? Math.round(weather.main?.temp - 273.15): ""}&deg; C</h2>
                            <div className="weather-details">
                                <div className="parameters">
                                    <h3 className="param-label text-center">Details</h3>
                                </div>
                                <br/>
                                <div className="parameters">
                                    <h5 className="param-label">Feels Like:</h5>
                                    <p className="param-val">
                                        {weather ? (weather.main?.feels_like - 273.15).toFixed(2): "-"} C
                                    </p>
                                </div>
                                <div className="parameters">
                                    <h5 className="param-label">Humidity: </h5>
                                    <p className="param-val">
                                        {weather ? weather.main?.humidity: "-"} % </p>
                                </div>
                                 <div className="parameters">
                                    <h5 className="param-label">Pressure</h5>
                                    <p className="param-val">
                                        {weather ? weather.main?.pressure : "-"} hPs</p>
                                </div>
                            </div>
                       </div>
                    </div>    
                </div>
            </div>
        </div>
    );
};
export default WeatherCard;