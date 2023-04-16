import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherAction } from "../../features/weatherSlice";

const Form = () => {
  const [city, setCity] = useState('')
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  const { weather, loading, error } = state;
  
  
  useEffect(() => {
    dispatch(fetchWeatherAction("Johannesburg"))
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <form
      className=" py-4 ml-2 text-black"
      onSubmit={handleSubmit}
    >
        <input
        type='text'
        placeholder="Search City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="placeholder:italic placeholder:text-black block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        />
      <button
        className="disabled invisible"
        onClick={() => dispatch(fetchWeatherAction(city))}
      >
        click
      </button>
    </form>
  )
}

export default Form