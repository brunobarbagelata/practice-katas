// Write a function that receives two strings as parameter. This strings are in the following format of date: YYYY/MM/DD. Your job is: Take the years and calculate the difference between them.

// Examples:
// '1997/10/10' and '2015/10/10' -> 2015 - 1997 = returns 18
// '2015/10/10' and '1997/10/10' -> 2015 - 1997 = returns 18
// At this level, you don't need validate months and days to calculate the difference.

var howManyYears = function (date1, date2) {
  let arr = Number(date1.slice(0, 4)) - Number(date2.slice(0, 4));

  return arr < 0 ? arr * -1 : arr;
};

//little change
