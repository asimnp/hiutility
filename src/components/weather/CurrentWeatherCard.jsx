import { HiOutlineMapPin, HiOutlineEye } from "react-icons/hi2";
import { CiTempHigh } from "react-icons/ci";
import { PiWind } from "react-icons/pi";
import { LuDroplets } from "react-icons/lu";

export default function CurrentWeatherCard({ data }) {
  return (
    <section className="mb-24 w-full sm:w-6xl">
      <div className="flex flex-col items-center justify-between rounded-t-md bg-gray-800 px-10 py-4 text-white sm:flex-row">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-5">
            <HiOutlineMapPin size={40} />
            <div className="text-2xl font-medium">{data.name}</div>
            <div>{data.sys.country}</div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <p>Lat: {data.coord.lat}</p> &middot;
            <p>Lon: {data.coord.lon}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-10 bg-gray-50 px-10 py-20 sm:flex-row sm:gap-0">
        <div className="flex items-center justify-center gap-3">
          <img
            src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
            alt={`${data.weather[0].description} weather`}
            className="h-25 w-25"
          />
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="text-5xl font-bold">
              {data.main.temp}
              <sup>o</sup>C
            </div>
            <div className="text-xl text-gray-600">
              {data.weather[0].description}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="flex items-center gap-3">
            <CiTempHigh size={25} className="text-amber-500" />

            <div>
              <div className="text-sm text-gray-600">Feels like</div>
              <div className="font-bold">
                {data.main.feels_like}
                <sup>o</sup>C
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <PiWind size={25} className="text-blue-500" />

            <div>
              <div className="text-sm text-gray-600">Wind speed</div>
              <div className="font-bold">{data.wind.speed} mph</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <HiOutlineEye size={25} className="text-purple-600" />

            <div>
              <div className="text-sm text-gray-600">Visibility</div>
              <div className="font-bold">{data.visibility / 1000} km</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <LuDroplets size={25} className="text-blue-500" />

            <div>
              <div className="text-sm text-gray-600">Humidity</div>
              <div className="font-bold">{data.main.humidity}%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
