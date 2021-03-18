var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var day = new Date();
var displayDay = weekday[day.getDay()];
var currentDate = moment().format(' MMMM Do');
var showDate = $(currentDay).text(displayDay + ',' + currentDate);
var timeOfDay = [
    {
        time: "09",
        hour: "09",
        meridiem: "am",
        reminder: "",
        id: "0"
    },
    {
        time: "10",
        hour: "10",
        meridiem: "am",
        reminder: "",
        id: "1"
    },
    {
        time: "11",
        hour: "11",
        meridiem: "am",
        reminder: "",
        id: "2"
    },
    {
        time: "12",
        hour: "12",
        meridiem: "pm",
        reminder: "",
        id: "3"
    },
    {
        time: "13",
        hour: "01",
        meridiem: "pm",
        reminder: "",
        id: "4"
    },
    {
        time: "14",
        hour: "02",
        meridiem: "pm",
        reminder: "",
        id: "5"
    },
    {
        time: "15",
        hour: "03",
        meridiem: "pm",
        reminder: "",
        id: "6"
    },
    {
        time: "16",
        hour: "04",
        meridiem: "pm",
        reminder: "",
        id: "7"
    },
    {
        time: "17",
        hour: "05",
        meridiem: "pm",
        reminder: "",
        id: "8"
    },
    
]

timeOfDay.forEach(function(thisHour) {
    // time, task, and save row
    var hourRow = $("<div>").addClass("row");
    $(".container").append(hourRow);

    // creates time field
    var taskHour = $("<div>").text(thisHour.hour + thisHour.meridiem);
    taskHour.addClass('hour');

    // task container
    var taskContainer = $("<div>").addClass("")
    var taskInput = $("<textarea>");
    taskContainer.append(taskInput);

    // save button
    var saveContainer = $("<div>").addClass("");
    var saveButton = $("<button>")
    saveButton.addClass("oi oi-clipboard")
    saveContainer.append(saveButton);



    hourRow.append(taskHour, taskContainer, saveContainer);
})

