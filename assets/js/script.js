// setting initial var for current moment and 
// inputing the text to current Date
var currentDate = moment().format("dddd, MMMM Do");
var currentHour = moment().format("H")
var todayEl = $('#currentDay');

var rowEl = $('.row');

var scheduleList = [];
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

// function handleSaveBtn(event) {
//     let btnClicked = $(event.target);
//     let scheduleDescr = btnClicked.siblings('textarea').val();
//     console.log("is this working?");
//     console.log(scheduleDescr);
// }

var containerEl = $('#timeBlockEl');
// testing save button
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