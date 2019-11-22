## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

# weather-api

## API [openweather](https://openweathermap.org/forecast5)
## Key
>key = 'c73aa228bfba692462f96e89080aa39a'   
>In case of key is not working or invalid, you can create your own key by subscribing [openweatherApi](https://openweathermap.org/price).

## Search By
> ### City Name
> http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${key}
> ###### Parameters
>* City Name e.g Islamabad
>* Key
>* Unit (optional)  

> ### Zip Code
> http://api.openweathermap.org/data/2.5/forecast?id=${zipCode}&units=metric&appid=${key}
> ###### Parameters
>* Zip Code e.g 44000,pk
>* Key
>* Unit (optional)  

> ### Geographic Coordinates
> http://api.openweathermap.org/data/2.5/forecast?lat={latitudes}&lon={longitudes}&units=metric&appid=${key}
> ###### Parameters
>* Latitudes
>* Longitudes
>* Key
>* Unit (optional)  

## Functionality

-		user can view temprature both in centigrade and farenhite  
-		user can switch between days to get detailed temprature of that day  
-		each section of per day temprature show min max temprature of day  
-		relavent images/icons will show the weather condition  
-		area chart will show the complete temprature of a day with an interval of 3 hour  
