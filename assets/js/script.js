// setting initial var for current moment and 
// inputing the text to current Date
var currentDate = moment().format("dddd, MMMM Do");
var currentHour = moment().format("H")
var todayEl = $('#currentDay');

var rowEl = $('.row');

var scheduleList = [
    {   hour : "9AM",
        description: ""},
    {   hour : "10AM",
        description: ""},
    {   hour : "11AM",
        description: ""},
    {   hour : "12PM",
        description: ""},
    {   hour : "1PM",
        description: ""},
    {   hour : "2PM",
        description: ""},
    {   hour : "3PM",
        description: ""},
    {   hour : "4PM",
        description: ""},
    {   hour : "5PM",
        description: ""}
];


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

// rendering the local storage items into the description
function renderDescription () {
    for (var i=0; i< rowEl.length; i++) {
        rowEl.eq(i).children('.description').text("");
    }
}
renderDescription();

// coloring the schedules with grey, red and green depends on 
// past, present and future
function renderColor () {
    for (var i = 0; i < rowEl.length; i++) {
        let selectedHour = rowEl.eq(i).children('.hour').text();
        let newHour = moment(selectedHour, "hA").format("H");
        let descriptionColor = rowEl.eq(i).children('.description')
    
        if (compareTime(newHour) == "past") {
            descriptionColor.attr("style", "background-color: lightgrey;")
        } else if (compareTime(newHour) == "present") {
            descriptionColor.attr("style", "background-color: lightcoral;")
        } else if (compareTime(newHour) == "future") {
            descriptionColor.attr("style", "background-color: lightgreen;")
        } else {
            console.log("error")
        }

    }
}



var containerEl = $('#timeBlockEl');
// function everytime hits save button
$('.saveBtn').on("click", function() {
    var scheduleDescr = $(this).siblings('textarea').val();
    var clickedTime = $(this).siblings('div').text();

    if (scheduleDescr === "") {
        return;
    }

    var scheduleLog = {
        time: clickedTime,
        description: scheduleDescr
    }; 
    console.log(scheduleLog);
})

renderColor();