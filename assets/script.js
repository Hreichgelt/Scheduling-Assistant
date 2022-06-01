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
      });

// saving hours and textbox entry into local storage 
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));


// color-coding for past present future
function PastPresentFutureColorCoding() {
   var presentTime = moment().hour();

    $(".time-block").each(function () {
        var time = parseInt($(this).attr("id"));

        // help from TA's to target the right element to get color coding to work
        if (presentTime > time) {
            $(this).children(".description").addClass("past")
            $(this).children(".description").removeClass("present");
            $(this).children(".description").removeClass("future");
        } else if (presentTime < time) {
            $(this).children(".description").addClass("future");
            $(this).children(".description").removeClass("present");
            $(this).children(".description").removeClass("past");
        } else {
            $(this).children(".description").addClass("present");
            $(this).children(".description").removeClass("past");
            $(this).children(".description").removeClass("future");
        }
    });
    }

 PastPresentFutureColorCoding();
