// global variables with moment.js displaying day date and time
var rootEl = $('#root');
var timeEL  = $('.hours');
var activityEL = $('.textarea');
var saveAllActivitiesAndTimes = [];
// var position = hours - 9;
var weekday = $('#currentDay');
var saveBtn = $('.saveBtn');
var hours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM','5PM',];


var today = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
console.log(today);
$("#currentDay").text(today);

// create functions 
function PastPresentFutureColorCoding() {
    today = moment().hours();

    $(".businesshours").each(function () {
        
    })
};

// ------------------------------------


//  on button click we want to store the activity into the timeslot object. and then immediately console.log(variable)
saveBtn.click(function(event) {
var clickedBtn = $(event.target);
var textarea = clickedBtn.siblings('.textarea');
console.log(textarea.val());
localStorage.setItem("value", textarea.val());
  })



// function enterActivitiesIntoLocalStorage(params) {
    
// };





// Criteria 
// GIVEN I am using a daily planner to create a schedule
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
























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


