import { useState } from "react";

const Weather = ({ weatherInfo, cityWeather }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const kelvinToCelsius = (tempKelvin) => {
    return (tempKelvin - 273.15).toFixed(1);
  };

  const kelvinToFahrenheit = (tempKelvin) => {
    return (((tempKelvin - 273.15) * 9) / 5 + 32).toFixed(1);
  };

  const hanadleChangeUnitTemp = () => {
    setIsCelsius(!isCelsius);
  };

  const handleSearch = (e) => {
    setSearchCity(e.target.value);
  };

  const resultTempConversiion = isCelsius
    ? kelvinToCelsius(weatherInfo?.main.temp)
    : kelvinToFahrenheit(weatherInfo?.main.temp);

  return (
    <section>
      {/* <section>
        <input type="text" placeholder="Buscar ciudad" />
        <button type="submit">Buscar</button>
      </section> */}

      {/* <button {cityWeather?.weather}>ingrese</button> */}
      <h2 className="text-center text-3xl text-black font-lato font-semibold">{weatherInfo?.name}</h2>

      <section className="grid gap-4 sm:grid-cols-[auto_auto] py-35 mt-10 mb-5">
        {/* SECCION SUPERIOR */}
        <section className="bg-white/60 p-2 py-4 rounded-2xl grid grid-cols-2">
          <h4 className="col-span-2 items-center text-black ml-4">
            {weatherInfo?.weather[0].description}
          </h4>
          <span className="text-4xl text-black py-14 ml-4">
            {resultTempConversiion}°{isCelsius ? "C" : "F"}
          </span>
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`}
              alt=""
            />
          </div>
        </section>

        {/* SECCION INFERIOR */}
        <section className="bg-white/60 p-2 py-5 rounded-2xl grid grid-cols-3 items-center sm:grid-cols-1">
          <article className="flex gap-2 items-center">
            <div className="w-[18px]">
              <img src={"/images/wind.png"} alt="" />
            </div>
            <span className="text-black">{weatherInfo?.wind.speed}m/s </span>
          </article>

          <article className="flex gap-2 items-center">
            <div className="w-[18px]">
              <img src={"/images/humidity.png"} alt="" />
            </div>
            <span className="text-black">{weatherInfo?.main.humidity}%</span>
          </article>

          <article className="flex gap-2 items-center">
            <div className="w-[18px]">
              <img src={"/images/pressure.png"} alt="" />
            </div>
            <span className="text-black">{weatherInfo?.main.pressure}hPa</span>
          </article>
        </section>
      </section>

      <section className="text-center">
        <button
          onClick={hanadleChangeUnitTemp}
          className="mt-3 bg-white text-black px-7 py-3 rounded-full hover:bg-sky-700"
        >
          Change a F°
        </button>
      </section>
    </section>
  );
};

export default Weather;
