var tableEL = $('#table');
var timeEL  = $('#1');
var activityEL = $('#2');
var hours = ['9AM', '10AM', '11AM', 'NOON', '1PM', '2PM', '3PM', '4PM','5PM',];
var position = 0;
var weekday = $('#currentDay');
var saveBtn = $('#saveBtn');
// let todayIs = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date().getDay()]
// document.write(weekday)

function insertActivityIntoStorage(hours, activity) {
    
}

saveBtn.on('click', function(event) {
    event.preventDefault();
    if (activityEL.value === "") {
        return
    }
    saveActivities();
})

function saveActivities() {
    var activityEL = activityEL.value.trim();
    var timeEL = timeEL.value.trim();
}




// hours.html(function() {
// time.val()
// });

// $(timeEL).
// $(timeEL) = hours.attr();

// $('ul li:first-child') = hours.length;

// timeEL.html = hours.length
// timeEL.select(hours);


// for (var i = 0; i < hours.length; i++) {
//     timeEL = append.li[0];

// }

// function displayImage() {
    // var imageEl = document.createElement('img');
    // var imageURL = './images/one.png'
    // imageEl.src = imageURL;
    // imageEl.alt = 'one';

// };