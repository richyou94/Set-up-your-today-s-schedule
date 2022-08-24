// setting initial var for current moment and 
// inputing the text to current Date
var currentDate = moment().format("dddd, MMMM Do");
var currentHour = moment().format("H")
var todayEl = $('#currentDay');

// var testingPast = moment("8AM", "hA").format("H");
// var testingPresent = moment("9AM", "hA").format("H");
// var testingFuture = moment("5PM", "hA").format("H");

// setting today's date in the text
todayEl.text(currentDate);

// finding time status
function compareTime(selectedTime) {
    if (selectedTime - currentHour < 0) {
        console.log("past");
        return "past";
    } else if (selectedTime - currentHour == 0) {
        console.log("present")
        return "present";
    } else if (selectedTime - currentHour > 0) {
        console.log("future");
        return "future";
    } else {
        console.log("error");
    }
}

var rowEl = $('.row');
console.log(rowEl.length);

// coloring the schedules with grey, red and green depends on 
// past, present and future
function renderColor () {
    for (var i = 0; i < rowEl.length; i++) {
        console.log(rowEl[i]);
    }
}

renderColor();