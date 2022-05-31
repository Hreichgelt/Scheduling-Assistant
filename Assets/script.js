var rootEl = $('#root');
var tableEL = $('#table');
var timeEL  = $('.hours');
var activityEL = $('.activities');
var position = 0;
var weekday = $('#currentDay');
var saveBtn = $('#saveBtn');
var hours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM','5PM',];

var today = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(today);

// var dayWeek = today.format("[Today is] dddd")
// $("#2a").text(dayWeek);
































// let todayIs = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date().getDay()]
// document.write(weekday)
// leaving off on line 11 correlating to line 74 in code quiz
// for (var i = 0; i < hours.length; i++) {
//     var hoursEl = $('<li>');
//     hoursEl.text(hours[i]);
//     hoursEl.addClass('hours');
//     rootEl.append(hoursEl);
// };

// for (let i = 0; i < hours.length; i++) {
//     var ActivitiesEl = 
// }


// var saveActivitiesAndTimes = JSON.parse(localStorage.getItem(""));

// function insertActivityIntoStorage(hours, activity) {
//     var row = hour.insertRow();
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     cell1.html = hours;
//     cell2.html = activityEL;
// };

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// };

// saveBtn.on('click', function(event) {
//     event.preventDefault();
//     if (activityEL.text === "") {
//         return
//     }
//     saveActivities();
// });

// function saveActivities() {
//     var activityEL = activityEL.text.trim();
//     var timeEL = timeEL.value.trim();
// };


