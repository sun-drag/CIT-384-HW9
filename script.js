// ==========================
// Part 1: Date Display
// ==========================

// Create the current local date and extract its month, day, and full year.
const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();
const currentYear = currentDate.getFullYear();

// JavaScript months start at zero, so one is added above before formatting.
// Add leading zeros so the month and day always have two digits.
let formattedMonth = String(currentMonth);
let formattedDay = String(currentDay);

if (currentMonth < 10) {
  formattedMonth = "0" + currentMonth;
}

if (currentDay < 10) {
  formattedDay = "0" + currentDay;
}

const dateMessage = "Today is " + formattedMonth + "/" + formattedDay + "/" + currentYear;
document.querySelector("#dateOutput").textContent = dateMessage;

// ==========================
// Part 2: Number Conversion
// ==========================

// Use four separate starting strings, including a decimal and nonnumeric text.
// This part uses separate statements instead of arrays or loops.
const wholeNumberText = "64";
const decimalNumberText = "27.85";
const invalidNumberText = "notebook";
const negativeNumberText = "-12";

// Convert each string with Number(), then check for NaN and an integer result.
const wholeNumber = Number(wholeNumberText);
const wholeIsNaN = Number.isNaN(wholeNumber);
const wholeIsInteger = Number.isInteger(wholeNumber);

const decimalNumber = Number(decimalNumberText);
const decimalIsNaN = Number.isNaN(decimalNumber);
const decimalIsInteger = Number.isInteger(decimalNumber);

const invalidNumber = Number(invalidNumberText);
const invalidIsNaN = Number.isNaN(invalidNumber);
const invalidIsInteger = Number.isInteger(invalidNumber);

const negativeNumber = Number(negativeNumberText);
const negativeIsNaN = Number.isNaN(negativeNumber);
const negativeIsInteger = Number.isInteger(negativeNumber);

// Build one list item per value, showing its original string and all three results.
const wholeNumberResult =
  "<li>Original: <code>\"" + wholeNumberText + "\"</code>" +
  " &rarr; Converted: <code>" + wholeNumber + "</code><br>" +
  "isNaN: <code>" + wholeIsNaN + "</code>" +
  " &middot; isInteger: <code>" + wholeIsInteger + "</code></li>";

const decimalNumberResult =
  "<li>Original: <code>\"" + decimalNumberText + "\"</code>" +
  " &rarr; Converted: <code>" + decimalNumber + "</code><br>" +
  "isNaN: <code>" + decimalIsNaN + "</code>" +
  " &middot; isInteger: <code>" + decimalIsInteger + "</code></li>";

const invalidNumberResult =
  "<li>Original: <code>\"" + invalidNumberText + "\"</code>" +
  " &rarr; Converted: <code>" + invalidNumber + "</code><br>" +
  "isNaN: <code>" + invalidIsNaN + "</code>" +
  " &middot; isInteger: <code>" + invalidIsInteger + "</code></li>";

const negativeNumberResult =
  "<li>Original: <code>\"" + negativeNumberText + "\"</code>" +
  " &rarr; Converted: <code>" + negativeNumber + "</code><br>" +
  "isNaN: <code>" + negativeIsNaN + "</code>" +
  " &middot; isInteger: <code>" + negativeIsInteger + "</code></li>";

// Combine the four items into one string and display it on the page.
// Only fixed demo values from this file are inserted with innerHTML.
const conversionResults =
  "<ul class=\"conversionResults\">" +
  wholeNumberResult + decimalNumberResult + invalidNumberResult + negativeNumberResult +
  "</ul>";
document.querySelector("#numberConversionOutput").innerHTML = conversionResults;

// ==========================
// Part 3: Math & Formatting
// ==========================

// Option B: Grade score calculator. Each score is out of 100 and weighted equally.
const firstScore = 88;
const secondScore = 93;
const thirdScore = 79;

// Addition finds the total; division by the number of scores finds the average.
const totalScore = firstScore + secondScore + thirdScore;
const averageScore = totalScore / 3;

// toFixed(2) creates a display string with two decimal places.
// Keep averageScore numeric so Part 4 can compare the unrounded average.
const formattedAverage = averageScore.toFixed(2);
const mathResults =
  "<ul class=\"mathResults\">" +
  "<li>Scores: <strong>" + firstScore + ", " + secondScore + ", " + thirdScore + "</strong></li>" +
  "<li>Total: " + firstScore + " + " + secondScore + " + " + thirdScore +
  " = <strong>" + totalScore + "</strong> out of 300</li>" +
  "<li>Average: " + totalScore + " / 3 = <strong>" + formattedAverage +
  "</strong> out of 100</li>" +
  "</ul>";
document.querySelector("#mathOutput").innerHTML = mathResults;

// ==========================
// Part 4: Conditionals
// ==========================

// First if/else: explain whether the nonnumeric test value converted successfully.
let validationMessage;

if (invalidIsNaN) {
  validationMessage = '"' + invalidNumberText + '" is not a valid number.';
} else {
  validationMessage = '"' + invalidNumberText + '" converts to a valid number.';
}

document.querySelector("#validationOutput").textContent = validationMessage;

// Extra credit: use a ternary operator to choose the pass/fail label.
const gradeLabel = averageScore >= 70 ? "Passing" : "Not passing";

// Second if/else: explain the threshold associated with the chosen grade label.
let gradeStatusMessage;

if (gradeLabel === "Passing") {
  gradeStatusMessage = "Grade status: " + gradeLabel + " (average is at least 70).";
} else {
  gradeStatusMessage = "Grade status: " + gradeLabel + " (average is below 70).";
}

document.querySelector("#gradeStatusOutput").textContent = gradeStatusMessage;
