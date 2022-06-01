// global variables with moment.js displaying day date and time
// refactoring to clean up variables that are no longer needed
var saveAllActivitiesAndTimes = [];
var saveBtn = $('.saveBtn');

// utilizing link to moment.js - changing format 
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))
var presentTime = moment().hours();

//  when saveBtn is clicked it saves hours and description key value pair into local storage 
saveBtn.click(function(event) {
    var clickedBtn = $(event.target);
    var description = clickedBtn.siblings('.description');
    var hours = clickedBtn.parent().attr("id");
    localStorage.setItem(hours, description.val());
    console.log(hours.val());
      });

// saving hours and texbox entry into local storage 
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));


// color-coding for past present future
function PastPresentFutureColorCoding() {
   var presentTime = moment().hours();
   console.log("Present Time" + presentTime);

    $(".description").each(function () {
        var time = parseInt($(this).parent().attr("id").substring(1, 4));
        console.log(presentTime, time);

        if (presentTime > time) {
            $(this).addClass("past")
        } else if (presentTime < time) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present")
        }
    });
    }

 PastPresentFutureColorCoding();


