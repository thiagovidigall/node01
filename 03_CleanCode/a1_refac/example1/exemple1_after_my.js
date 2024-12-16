const OVERNIGHT_RATE = 3.90
const SUNDAY_RATE = 2.90
const NORMAL_RATE = 2.10

const isOverNight = (date) => { return date.getHours() >= 22 };
const isSunday = (date) => { return date.getDay() === 0 };

const calculateRide = (distance, date) => {
  if(typeof distance !== "number" || distance < 0) throw new Error("Invalid parameter distance");
  if (!(date instanceof Date)) throw new Error("Invalid parameter date");


  if (isOverNight(date)) {
    return distance * OVERNIGHT_RATE;
  }
  if (isSunday(date)) {
    return distance * SUNDAY_RATE;
  }
  return distance * NORMAL_RATE;
}

module.exports = {
  calculateRide,
  isOverNight,
  isSunday
}
