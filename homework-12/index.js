function getAge() {
  //const birthdaydate = new Date (1997, 11, 03);
  let birthdayDate = new Date(1997, 5, 28);
  let today = new Date(2021, 5, 25);
  let ageDiff = today.getFullYear() - birthdayDate.getFullYear();
  let monthDiff = today.getMonth() - birthdayDate.getMonth();
  if (
    monthDiff < 0 ||
    monthDiff === 0 && today.getDate() < birthdayDate.getDate()
  ) {
    ageDiff -= 1;
  }
  return ageDiff;
}
console.log(getAge());

function getWeekDate() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let date = new Date(2021, 4, 28);

  return days[date.getDay()];
}
console.log(getWeekDate());

function getAmountDaysToNewYear() {
  let today = new Date("May 28 2021 00:00:00");
  let newYear = new Date("Jan 01 2022 00:00:00");
  let amountDays = Math.floor((newYear - today) / 1000 / 60 / 60 / 24);
  return amountDays;
}
console.log(getAmountDaysToNewYear());

function getProgrammersDay(year) {
  if (year % 4 === 0) {
    return `12 Sept ${year} (${getWeekDate(new Date(year, 8, 12))})`;
  } else {
    return `13 Sept ${year} (${getWeekDate(new Date(year, 8, 13))})`;
  }
}
console.log(getProgrammersDay(2020));

function howFarIs(specifiedWeekday) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  let weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  specifiedWeekday = capitalizeFirstLetter(specifiedWeekday);
  const todayIndex = new Date().getDay();
  const today = weekday[todayIndex];

  if (specifiedWeekday === today) {
    return `Hey, today is ${specifiedWeekday} =)`;
  } else {
    let number = 0;
    const weekdayIndex = weekday.indexOf(specifiedWeekday);
    if (todayIndex < weekdayIndex) {
      number = weekdayIndex - todayIndex;
      return `It's ${number} day(s) left till ${specifiedWeekday}`;
    } else {
      number = 7 - todayIndex + weekdayIndex;
      return `It's ${number} day(s) left till ${specifiedWeekday}`;
    }
  }
}
console.log(howFarIs("friday"));

function isValidIdentifier(str) {
  return /^\D\w+\d+.*$/i.test(str);
}
console.log(isValidIdentifier("myVar!"));
