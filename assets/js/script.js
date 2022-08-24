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
var compareTime = function(selectedTime) {
    if (selectedTime - currentHour < 0) {
        return "past";
    } else if (selectedTime - currentHour == 0) {
        return "present";
    } else if (selectedTime - currentHour > 0) {
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
        let selectedHour = rowEl.eq(i).children('.hour').text();
        let newHour = moment(selectedHour, "hA").format("H");
        let descriptionColor = rowEl.eq(i).children('.description')
        console.log(descriptionColor);
    
        if (compareTime(newHour) == "past") {
            descriptionColor.attr("style", "background-color: lightgrey;")
        } else if (compareTime(newHour) == "present") {
            console.log("presentTesting");
            descriptionColor.attr("style", "background-color: lightcoral;")
        } else if (compareTime(newHour) == "future") {
            console.log("futureTesting");
            descriptionColor.attr("style", "background-color: lightgreen;")
        } else {
            console.log("error")
        }

    }
}

renderColor();