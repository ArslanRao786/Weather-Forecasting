const getFormattedData = list => {
  return list.map(item => {
    const {
      dt_txt,
      main: { temp, temp_min, pressure, humidity, temp_max },
      weather: {
        0: { id, desciption }
      },
      wind: { speed }
    } = item;
    const date = dt_txt.slice(0, -9);
    return {
      date,
      temp,
      temp_min,
      pressure,
      humidity,
      temp_max,
      id,
      speed,
      desciption
    };
  });
};

export default getFormattedData;
