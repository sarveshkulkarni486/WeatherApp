import axios from "axios";
export async function fetchWeather(city, setError) {
    const API_KEY = `2429dcc5576616ab187ca482351015ba`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    try {
        const response = await axios.get(url);
        setError("");
        return response.data;
    } catch (error) {
        setError("City Not Found!");
        return error;
    }
}