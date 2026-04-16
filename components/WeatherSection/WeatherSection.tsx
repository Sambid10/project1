"use client"

import { useQuery } from '@tanstack/react-query'
import getWeather from '@/actions/getWeather'
import WeatherCard from './WeatherCard'
import { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import LoadingCard from '../Loader/LoadingCard'
import ErrorLoadingCard from '../Loader/ErrorLoadingCard'

export default function WeatherSection() {

    const [city, setCity] = useState("")
    const [searchCity, setSearchCity] = useState("Kathmandu")
    const { data, isLoading, isError } = useQuery({
        queryKey: ["weather", searchCity],
        queryFn: () => getWeather(searchCity),
        enabled: !!searchCity,
       
    })

    return (
        <div className="w-full md:w-[90%] lg:w-[60%]  flex -mt-12 flex-col items-center gap-8">

            <div className='relative w-full h-14'>
                <input
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            setSearchCity(city)
                        }
                    }}
                    onChange={(e) => setCity(e.currentTarget.value)}
                    placeholder='Enter your city...'
                    className='w-full bg-primary rounded-xl text-black h-full px-8 border-3 border-gray-600 focus:border-blue-500'
                />

                <button
                    title='search'
                    onClick={() => setSearchCity(city)}
                    className='absolute cursor-pointer right-0 border-l-2 border-gray-600 px-4 z-20 h-full'
                >
                    <BiSearch className='text-black size-6' />
                </button>
            </div>

            {isLoading ? (
                <LoadingCard />
            ) : isError ? (
                <ErrorLoadingCard errormsg={"Failed to fetch weather."}/>
            ) : (
                <WeatherCard data={data} />
            )}
        </div>
    )
}