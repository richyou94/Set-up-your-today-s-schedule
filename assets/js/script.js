// setting initial var for current moment and 
// inputing the text to current Date
var currentDate = moment().format("dddd, MMMM Do");
var currentHour = moment().format("H")
var todayEl = $('#currentDay');

var rowEl = $('.row');
var containerEl = $('#timeBlockEl');

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
//initial function to bring local storage into the array
function init() {
    storedScheduleList = JSON.parse(localStorage.getItem("scheduleListUpdate"));

    if (storedScheduleList !== null) {
        scheduleList = storedScheduleList;
    }
    renderDescription();
}
// rendering the local storage items into the description
function renderDescription () {
    if (typeof scheduleList.length == "undefined") {
        let hourRowEl = rowEl.children('.hour');
        let descrRowEl = rowEl.children('.description');
        hourRowEl.text("");
        descrRowEl.text("");

        let hourParsed = scheduleList.hour;
        let descrParsed = scheduleList.description;
        hourRowEl.text(hourParsed);
        descrRowEl.text(descrParsed);

        renderColor();
    } else {
        for (var i=0; i < rowEl.length; i++) {
        let hourRowEl = rowEl.eq(i).children('.hour');
        let descrRowEl = rowEl.eq(i).children('.description');

        hourRowEl.text("");
        descrRowEl.text("");

        let hourParsed = scheduleList[i].hour;
        let descrParsed = scheduleList[i].description;

        hourRowEl.text(hourParsed)
        descrRowEl.text(descrParsed); 
        renderColor();
    } }
    // console.log(scheduleList);
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
            console.log("error???")
        }

    }
}


// function everytime hits save button
$('.saveBtn').on("click", function() {
    var scheduleDescr = $(this).siblings('textarea').val();
    // var clickedTime = $(this).siblings('div').text();
    var clickedIndex = $(this).parent().index();

    if (scheduleDescr === "") {
        return;
    }

    
    
    scheduleList[clickedIndex].description = scheduleDescr
    console.log(scheduleList);
    
    saveToLocalStorage();
    renderDescription();

})

function saveToLocalStorage() {
    localStorage.setItem("scheduleListUpdate", JSON.stringify(scheduleList))
}

init();
