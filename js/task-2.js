function calcAverageCalories(days) {
  let totalCalories = 0;
  if (days.length > 0) {
    for (const day of days) {
      totalCalories += day.calories;
    }
    return totalCalories / days.length;
  }
  return totalCalories;
}

console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 },
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 },
  ])
); // 2270

console.log(calcAverageCalories([])); // 0

// function calcAverageCalories(days) {
//   let totalCalories = 0;
//   let dayCount = 0;
//   if (days.length === 0) {
//     return totalCalories;
//   } else {
//     for (const day of days) {
//       const daysKeys = Object.keys(day);
//       if (
//         daysKeys.includes("calories") &&
//         !isNaN(day.calories) &&
//         Number(day.calories) !== 0
//       ) {
//         totalCalories += Number(day.calories);
//         dayCount++;
//       }
//     }
//   }

//   return Math.round(totalCalories / dayCount);
// }
// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 900 },
//     { day: "tuesday", calories: "string" },
//     { day: "wednesday", calories: {} },
//     { day: "thursday", calories: [2000] },
//     { day: "friday", calories: [] },
//     { day: "saturday", calories: 0 },
//     { day: "sunday", calories: "100" },
//   ])
// );
