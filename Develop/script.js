// displays current day at top
var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var day = new Date();
var displayDay = weekday[day.getDay()];
var currentDate = moment().format(' MMMM Do');
var showDate = $(currentDay).text(displayDay + ',' + currentDate);
// sets variable for determining time of day and getting html element
var time = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
var nine = document.getElementById('9');
var ten = document.getElementById('10');
var eleven = document.getElementById('11');
var twelve = document.getElementById('12');
var one = document.getElementById('13');
var two = document.getElementById('14');
var three = document.getElementById('15');
var four = document.getElementById('16');
var five = document.getElementById('17');

// check if time is in past, present, or future and change background color
updatetime();

function updatetime() {
    var checkTime = moment().format('H');
    for(var i = 0; i < time.length; i++) {
  
      if (parseInt(time[i]) > checkTime) {
        $("#" + time[i]).addClass("future");
  
  
      }
      else if (parseInt(time[i]) < checkTime) {
        $("#" + time[i]).addClass("past");
  
      }
      else if (parseInt(time[i]) == checkTime) {
        $("#" + time[i]).addClass("present");
      
      }
    }
};

// 9 AM save
var saveNine = document.getElementById('9Save');
var saveNineField = () => {
  let nineText = nine.value;
  localStorage.setItem("nine", nineText);
  console.log(localStorage.getItem("nine"));
}
saveNine.addEventListener("click", saveNineField);

// 10 AM save
var saveTen = document.getElementById('10Save');
var saveTenField = () => {
  let tenText = ten.value;
  localStorage.setItem("ten", tenText);
  console.log(localStorage.getItem("ten"));
}
saveTen.addEventListener("click", saveTenField);

// 11 AM save
var saveEleven = document.getElementById('11Save');
var saveElevenField = () => {
  let elevenText = eleven.value;
  localStorage.setItem("eleven", elevenText);
  console.log(localStorage.getItem("eleven"));
}
saveEleven.addEventListener("click", saveElevenField);

// 12 PM save
var saveTwelve = document.getElementById('12Save');
var saveTwelveField = () => {
  let twelveText = twelve.value;
  localStorage.setItem("twelve", twelveText);
  console.log(localStorage.getItem("twelve"));
}
saveTwelve.addEventListener("click", saveTwelveField);

// 1 PM save
var saveOne = document.getElementById('13Save');
var saveOneField = () => {
  let oneText = one.value;
  localStorage.setItem("one", oneText);
  console.log(localStorage.getItem("one"));
}
saveOne.addEventListener("click", saveOneField);

// 2 PM save
var saveTwo = document.getElementById('14Save');
var saveTwoField = () => {
  let twoText = two.value;
  localStorage.setItem("two", twoText);
  console.log(localStorage.getItem("two"));
}
saveTwo.addEventListener("click", saveTwoField);

// 3 PM save
var saveThree = document.getElementById('15Save');
var saveThreeField = () => {
  let threeText = three.value;
  localStorage.setItem("three", threeText);
  console.log(localStorage.getItem("three"));
}
saveThree.addEventListener("click", saveThreeField);

// 4 PM save
var saveFour = document.getElementById('16Save');
var saveFourField = () => {
  let fourText = four.value;
  localStorage.setItem("four", fourText);
  console.log(localStorage.getItem("four"));
}
saveFour.addEventListener("click", saveFourField);

// 5 PM save
var saveFive = document.getElementById('17Save');
var saveFiveField = () => {
  let fiveText = five.value;
  localStorage.setItem("five", fiveText);
  console.log(localStorage.getItem("five"));
}
saveFive.addEventListener("click", saveFiveField);

// loads saved task for each time
const updateContent = () => {
    nine.innerHTML = localStorage.getItem("nine");
    ten.innerHTML = localStorage.getItem("ten");
    eleven.innerHTML = localStorage.getItem("eleven");
    twelve.innerHTML = localStorage.getItem("twelve");
    one.innerHTML = localStorage.getItem("one");
    two.innerHTML = localStorage.getItem("two");
    three.innerHTML = localStorage.getItem("three");
    four.innerHTML = localStorage.getItem("four");
    five.innerHTML = localStorage.getItem("five");
  };

  // updates page every 30 minutes
  setInterval(function() {
    window.location.reload();
  }, 300000); 

  updateContent();