import { uniqBy } from "lodash";

const averageCalculator = requiredFormattedData => {
  const data = requiredFormattedData.formattedData;

  const dates = uniqBy(data, "date").map(item => item.date);

  return dates.map(date => {
    const dataForCurrentDate = data.filter(item => item.date === date);
    return dataForCurrentDate.reduce(
      (acc, curr, _, self) => {
        acc.date = curr.date;
        acc.temp += curr.temp / self.length;
        acc.temp_min += curr.temp_min / self.length;
        acc.pressure += curr.pressure / self.length;
        acc.humidity += curr.humidity / self.length;
        acc.speed += curr.speed / self.length;
        acc.temp_max += curr.temp_max / self.length;
        acc.id += curr.id / self.length;

        return acc;
      },
      {
        date: "",
        temp: 0,
        temp_min: 0,
        pressure: 0,
        humidity: 0,
        speed: 0,
        temp_max: 0,
        id: 0
      }
    );
  });
};

export default averageCalculator;
