import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherAction } from "../../features/weatherSlice";

const Form = () => {
  const [city, setCity] = useState('')
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  const { weather, loading, error } = state;
  
  
  useEffect(() => {
    dispatch(fetchWeatherAction("bursa"))
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit} >
        <input
        type='text'
        placeholder="Search City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        />
      <button
        onClick={() => dispatch(fetchWeatherAction(city))}
      >
        click
      </button>
      <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="" /><h1>{  }</h1>
    </form>
  )
}

export default Form