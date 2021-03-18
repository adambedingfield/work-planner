var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var day = new Date();
var displayDay = weekday[day.getDay()];
var currentDate = moment().format(' MMMM Do');
var showDate = $(currentDay).text(displayDay + ',' + currentDate);
var timeOfDay = [
    {
        time: "09",
        hour: "9",
        meridiem: "am",
        userInput: "",
        id: "0"
    },
    {
        time: "10",
        hour: "10",
        meridiem: "am",
        userInput: "",
        id: "1"
    },
    {
        time: "11",
        hour: "11",
        meridiem: "am",
        userInput: "",
        id: "2"
    },
    {
        time: "12",
        hour: "12",
        meridiem: "pm",
        userInput: "",
        id: "3"
    },
    {
        time: "13",
        hour: "1",
        meridiem: "pm",
        userInput: "",
        id: "4"
    },
    {
        time: "14",
        hour: "2",
        meridiem: "pm",
        userInput: "",
        id: "5"
    },
    {
        time: "15",
        hour: "3",
        meridiem: "pm",
        userInput: "",
        id: "6"
    },
    {
        time: "16",
        hour: "4",
        meridiem: "pm",
        userInput: "",
        id: "7"
    },
    {
        time: "17",
        hour: "5",
        meridiem: "pm",
        userInput: "",
        id: "8"
    },
    
]

timeOfDay.forEach(function(thisHour) {
    // time, task, and save row
    var hourRow = $("<div>").addClass("row");
    $(".container").append(hourRow);

    // creates time field
    hourContainer = $("<div>").addClass("col-1 time-block");
    var taskHour = $("<div>").text(thisHour.hour + thisHour.meridiem);
    taskHour.addClass("hour");
    hourContainer.append(taskHour);

    // task container
    var taskContainer = $("<div>").addClass("col-10")
    var taskInput = $("<textarea>");
    taskInput.addClass("col-12");
    taskInput.attr("id", this.id);
    taskContainer.append(taskInput);

    if (thisHour.time < moment().format("HH")) {
        taskInput.addClass("past");
    } else if (thisHour.time === moment().format("HH")) {
        taskInput.addClass("present");
    } else if (thisHour.time > moment().format("HH")) {
        taskInput.addClass("future");
    }

    // save button
    var saveContainer = $("<div>").addClass("saveBtn clipboard:hover col-1");
    var saveButton = $("<button>");
    saveButton.addClass("oi oi-clipboard clipboard");
    saveContainer.append(saveButton);




    hourRow.append(hourContainer, taskContainer, saveContainer);
})

