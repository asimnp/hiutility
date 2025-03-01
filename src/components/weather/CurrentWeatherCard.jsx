import { HiOutlineMapPin, HiOutlineEye } from "react-icons/hi2";
import { CiTempHigh } from "react-icons/ci";
import { PiWind } from "react-icons/pi";
import { LuDroplets } from "react-icons/lu";

export default function CurrentWeatherCard({ data }) {
  return (
    <section className="w-6xl mb-24">
      <div className="flex justify-between items-center bg-gray-800 text-white px-10 py-4 rounded-t-md">
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 items-center">
            <HiOutlineMapPin size={40} />
            <div className="text-2xl font-medium">{data.name}</div>
            <div>{data.sys.country}</div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <p>Lat: {data.coord.lat}</p> &middot;
            <p>Lon: {data.coord.lon}</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 px-10 py-20 flex justify-between items-center">
        <div className="flex justify-center items-center gap-3">
          <img
            src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
            alt={`${data.weather[0].description} weather`}
            className="w-25 h-25"
          />
          <div className="flex flex-col justify-center items-center gap-3">
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
