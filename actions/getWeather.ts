"use server";

export default async function getWeather(city:string) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch weather");
    }

    return await res.json();

  } catch (err) {
    throw new Error("Something bad happened.");
  }
}