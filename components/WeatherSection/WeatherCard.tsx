import Image from "next/image"
import { BiChevronRight } from "react-icons/bi"

interface Props {
  data: {
    name: string
    sys: {
      country: string
    }
    main: {
      temp: number
      feels_like: number
      temp_min: number
      temp_max: number
      pressure: number
      humidity: number
    }
    weather: {
      icon: string
      description: string
    }[]
    wind: {
      speed: number
    }
    visibility: number
    clouds: {
      all: number
    }
  }
}

export default function WeatherCard({ data }: Props) {
  const weather = data.weather[0]

  return (
    <div className='bg-secondary flex flex-col min-h-100 rounded-xl border border-primary w-full'>
      <div className='py-4 px-8 border-b border-primary flex items-center justify-between h-full'>
        <h1 className='uppercase tracking-tight text-sm'>
          Current Weather
        </h1>
        <h1 className='text-sm text-accent font-semibold'>
          {data.name}, {data.sys.country}
        </h1>
      </div>

      <div className='flex items-center justify-between p-8  flex-1'>
        <div className='flex flex-col gap-4'>
          <div className='flex gap-4 items-center'>
            <Image
              src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              width={100}
              height={120}
              alt="weather icon"
            />

            <div className='flex flex-col gap-0.5 tracking-tight'>
              <span className='font-semibold text-7xl flex items-end gap-1'>
                <h1>{Math.round(data.main.temp)}°</h1>
                <h1 className='text-3xl'>C</h1>
              </span>

              <span className='flex items-center text-[18px] gap-2'>
                <h1>Feels Like</h1>
                <h1>{Math.round(data.main.feels_like)}°C</h1>
              </span>

              <span className='text-sm text-accent'>
                {Math.round(data.main.temp_min)}° / {Math.round(data.main.temp_max)}°
              </span>
            </div>
          </div>

          <div className='flex flex-col capitalize'>
            <h1 className='font-semibold text-[18px]'>
              {weather.description}
            </h1>

            <a className='text-accent text-base underline-offset-4 gap-1 cursor-pointer flex items-center underline'>
              <h1>More Details</h1>
              <BiChevronRight />
            </a>
          </div>
        </div>

        <div>
          <WeatherInfoRow label="Wind" value={`${data.wind.speed} m/s`} />
          <WeatherInfoRow label="Pressure" value={`${data.main.pressure} hPa`} />
          <WeatherInfoRow label="Humidity" value={`${data.main.humidity}%`} />
          <WeatherInfoRow label="Visibility" value={`${data.visibility / 1000} km`} />
          <WeatherInfoRow label="Clouds" value={`${data.clouds.all}%`} border={false} />
        </div>
      </div>
    </div>
  )
}

const WeatherInfoRow = ({
  label,
  value,
  border = true,
}: {
  label: string
  value: string
  border?: boolean
}) => {
  return (
    <div
      className={`flex items-center justify-between w-70 p-3 ${
        border ? "border-b border-primary" : ""
      }`}
    >
      <h1 className='font-semibold'>{label}</h1>
      <h1>{value}</h1>
    </div>
  )
}