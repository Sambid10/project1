# Weather App (Lumen)

## Project Overview

The Weather App (Lumen) is an application that is built using Next that allows users to search for weather information by city name.

It fetches real-time weather data from a weather API (Open Weather) and displays important details such as:

- City name
- Temperature
- Weather condition
- Humidity
- Wind speed
- Pressure

---

## API Details

This project uses a Open Weather Api to fetch real-time data for each city.

`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`

The above api is the endpoint where we get our data based on city name.

---

## Design Decisions

### Using Nextjs
Since it is the default recommendation to starup a React Project i decided to use nextjs.

It comes with features such as:

- file based routing
- Client Components
- Server components
- server actions
- etc.

### Using ReactQuery
It is one of the mostly used library for managing API data fetching and state management.

It automatically handles states such as:

- loading state
- error state
- etc.

It also improves performance by caching previously fetched data, reducing unnecessary API calls & also prevents race conitions.

---

## Challenges Faced

Some of the main challenges faced during development were:

- Managing API loading and error states
- Handling city search input efficiently
- Designing a clean and responsive UI across Figma & in the codebase
- Adding Responsiveness across multiple screens
- Even simple quirks such as implementing DropDownMenu behaviour using custom hooks
- adding stagger animation using framermotion in the hero section

---

## Screenshots

### Home Page
![Home Page](/1.png)
![Home Page](/2.png)
![Home Page](/3.png)

### Weather Page
![Weather Page](/4.png)
![Weather Page](/5.png)