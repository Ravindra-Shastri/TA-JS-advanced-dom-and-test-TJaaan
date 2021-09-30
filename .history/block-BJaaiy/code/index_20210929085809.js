// Print Date or Time in the following format:

// - `February 12th 2021, 12:54:12 pm`
// - `Friday`
// - `Feb 12th 21`

// Check if the following date is valid or not:

// - `2020-01-01`
// - `2020-14-01`

// Manipulating Dates

// - adds 7 days to current date
// - adds 7 months to current date
// - adds 7 years to current date

// - subtracts 7 days to current date
// - subtracts 7 months to current date
// - subtracts 7 years to current date

// Find the difference between the following 2 dates:

// 1.

// - date1: `2014-11-11`
// - date2: `2015-09-11`

// 2.

// - date1: `2014-11-27`
// - date2: `2015-09-16`

// - Check is `2020-01-01` date after `2018-01-01`
// - Check is `2010-01-01` date after `2018-01-01`
// - Check if the year `2019` is a leap year
// - Check if the year `2020` is a leap year

// #### Use lodash to do the following things:

// - Use five methods form the list of Array methods and five from Collection methods (Left side on this link https://lodash.com/docs/4.17.15)

const moment = require("moment");

let time = moment(1613068200000).format(`MMMM Do YYYY, h:mm:ss a`);
console.log(time);


// =============
const moment = require("moment");
const _ = require('lodash');


console.log("Hello NPM");

let longDate = moment().format('MMMM Do YYYY, h:mm:ss a');

console.log(longDate);

let day = moment().format('dddd');
console.log(day);


let dateShort = moment().format('MMM Do YY');
console.log(dateShort);

let dateElt = '2020-01-01';
var aDate   = moment(dateElt, 'YYYY-MM-DD', true);

var isValid = aDate.isValid();
console.log(isValid);

let anotherDate = "2020-14-01";

let bDate =moment(anotherDate, 'YYYY-MM-DD', true);

console.log(bDate.isValid());


let sevenDaysLater = moment().add(7, 'days').calendar();

console.log(sevenDaysLater);

let sevenMonthsLater = moment().add(7, 'months').calendar();

console.log(sevenMonthsLater);

let sevenYearsLater = moment().add(7, 'years').calendar();

console.log(sevenYearsLater);

let sevenDaysEarlier = moment().subtract(7, 'days').calendar();

console.log(sevenDaysEarlier);

let sevenMonthsEarlier = moment().subtract(7, 'months').calendar();

console.log(sevenMonthsEarlier);

let sevenYearsEarlier = moment().subtract(7, 'years').calendar();

console.log(sevenYearsEarlier);

var a = moment([2015, 09, 11]);
var b = moment([2014, 11, 11]);
console.log(a.diff(b, 'months'), "Difference in Months");

var c = moment([2015, 09, 16]);
var d = moment([2014, 11, 27]);
console.log(c.diff(d, 'days'), "Difference in days");


function checkIsBefore(date1, date2) {
    return moment(date1).isBefore(date2); 
}

function checkIsAfter(date1, date2) {
    return moment(date1).isAfter(date2); 
}

let date1 = "2020-01-01";

let date2 = "2010-09-16";

console.log(checkIsAfter(date1, date2));

let date3 = "2010-01-01";
let date4 = "2018-01-01";

console.log(checkIsAfter(date3, date4));

console.log(checkIsBefore(date1, date2));

console.log(checkIsBefore(date3, date4));


function isLeapYear (year) {
    return moment(year).isLeapYear();
}
console.log(isLeapYear("2019"));

console.log(isLeapYear("2020"));


let arr = [1, 2, 3, 4, 5, 6, 7];

let chunkedArr = _.chunk(arr, 2);

console.log(chunkedArr);

let arr2 = ["a", "b", "", 0, false, true, 1, "c"];

let compactedArr = _.compact(arr2);
console.log(compactedArr);

var array = [1];
var other = _.concat(array, 2, [3], [[4]]).flat();
 
console.log(other);


console.log(_.difference([2, 1], [2, 3]));

console.log(_.drop([1, 2, 3], 2));