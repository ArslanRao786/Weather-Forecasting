export const weatherIcon = id => {
  switch (true) {
    case id >= 200 && id <= 232:
      return "wi wi-thunderstorm";
    case id === 800:
      return "wi wi-day-sunny";
    case id >= 300 && id <= 321:
      return "wi wi-sleet";
    case id >= 500 && id <= 531:
      return "wi wi-storm-showers";
    case id >= 600 && id <= 622:
      return "wi wi-snow";
    case id >= 701 && id <= 781:
      return "wi wi-fog";
    case id >= 801 && id <= 804:
      return "wi wi-day-fog";
    default:
      return "wi wi-day-fog";
  }
};

export const description = id => {
  switch (true) {
    case id >= 200 && id <= 232:
      return "Thunderstorm";
    case id === 800:
      return "Sunny";
    case id >= 300 && id <= 321:
      return "Sleet";
    case id >= 500 && id <= 531:
      return "Storm showers";
    case id >= 600 && id <= 622:
      return "Snow";
    case id >= 701 && id <= 781:
      return "Fog";
    case id >= 801 && id <= 804:
      return "Day fog";
    default:
      return "Day fog";
  }
};

export const convertDataInFarenheit = temperature => {
  return (9 * temperature + 32 * 5) / 5;
};
