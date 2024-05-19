import { useEffect , useState } from "react";
import "./App.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempertureAndDetails from "./components/TempertureAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";

function App() {

const [query, setQuery] = useState({q: 'berlin'})
const [units, setUnits] = useState({q: 'metric'})
const [weather, setWeather] = useState(null)

useEffect(() => {
  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({...query, units}).then((data) => {
      setWeather(data);
    });
  };

  fetchWeather();

}, [query, units]);

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />
      
      {weather && (
        <div>
            <TimeAndLocation weather={weather} />
            <TempertureAndDetails weather={weather}/>

            <Forecast title="hourly forecast" />
            <Forecast title="daily forecast" />
        </div>
      )}

     
    </div>
  );
}

export default App;
