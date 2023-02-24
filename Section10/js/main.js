/* 
1. DEFAULT PARAMETERS
const bookings = [];
const createBookings = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum: flightNum,
    numPassengers: numPassengers,
    price: price,
  };
  console.log(booking);
  bookings.push(booking);
  console.log(bookings);
};
createBookings("LH123");
createBookings("LH123", 2, 800);
createBookings("LH123", 2);
createBookings("LH123", 5);
createBookings("LH123", undefined, 1000);
*/
/**  HOW PASSING ARGUMENTS WORKS: VALUE VS REFERENCE 
const flight = "LH123";
const phuong = {
  name: "Chu Tuan Phuong",
  passport: 18082003,
};
const checkIn = function (flightNumber, passenger) {
  flightNumber = "LH999";
  passenger.name = "Mr. " + passenger.name;
  if (passenger.passport === 18082003) {
    alert("Checked in");
  } else {
    alert("Wrong passport");
  }
};
// checkIn(flight, phuong);
// console.log(flight);
// console.log(phuong);
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
  console.log(person);
};
newPassport(phuong);
checkIn(flight, phuong);
*/

/**
FUNCTION ACCEPTING CALLBACK FUNCTIONS: 
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

//Higher-order functions
const transformer = function (str, fn) {
  console.log(`Orriginal string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer("JS is the best!", upperFirstWord);
transformer("JS is the best!", oneWord);

const high5 = function () {
  console.log("👋");
};
document.body.addEventListener("click", high5);
["Jonas", "Martha", "Adam"].forEach(high5);
 */
/**FUNCTION RETURNING FUNCTION
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet("Hey");
greeterHey("Phuong");
greeterHey("Béo");
greet("Hello")("Jonas");

//Challenge
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
 */

/** IMMEDIATELY INVOKED FUNCTION EXPRESSION(IIFE) */
const runOne = function () {
  console.log("This will never nun again!");
};
runOne();

//IIFE
(function () {
  console.log("This will never nun again!");
  const isPrivate = 23;
})();

(() => console.log("This will also never nun again!"))();
