https://sun-drag.github.io/CIT-384-HW9/

Built-in objects and methods used

Date: new Date(), getMonth(), getDate(), and getFullYear() to obtain the current date.

String(): converts the month and day into strings for formatting.

Number(): converts strings into numbers.

Number.isNaN(): checks whether a converted result is NaN.

Number.isInteger(): checks whether a converted result is an integer.

toFixed(2): formats the grade average with two decimal places.


The easiest part was calculating the total and average of the three grade scores. The hardest part was keeping the four conversion tests organized while displaying all the required results. I learned that the Date object starts counting months at zero, so I needed to add one and include leading zeros for single-digit months and days. I learned that Number() converts numeric strings into numbers, while Number.isNaN() and Number.isInteger() help check the results. I also learned that displaying results in the browser requires selecting HTML elements with document.querySelector() and updating their content using textContent or innerHTML.
