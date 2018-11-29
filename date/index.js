const JapaneseHolidays = require('japanese-holidays');

let today = new Date(2018, 11, 23);
let isHoliday = JapaneseHolidays.isHoliday(today);
let holidays = JapaneseHolidays.getHolidaysOf( today.getFullYear() );

console.log(today);
console.log(today.getHours());
console.log(today.getDay());
if(isHoliday) {
  console.log(isHoliday);
}
console.log(holidays);
