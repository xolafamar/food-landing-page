$(document).ready(function() {
  $(window).on("resize", function() {
    var wh = $(window).height();
    var upperbar = $("#banner").innerHeight();

    upperbar.height(wh);
  });
  $(function() {
    ("use strict");

    var wh = $(window).height();
    var upperbar = $("#banner").innerHeight();

    $("#banner").height(wh);
  });

  $(".countdown").dsCountDown({
    startDate: new Date(), // Date Object of starting time of count down, usualy now (whether client time or given php time)

    endDate: new Date("December 24, 2020 23:59:00"), //elemSelDays:'' Leave blank to use default value or provide a string selector if the lement already exist, Example: .ds-days

    elemSelHours: "", // Leave blank to use default value or provide a string selector if the lement already exist, Example: .ds-hours

    elemSelMinutes: "", // Leave blank to use default value or provide a string selector if the lement already exist, Example: .ds-minutes
    elemSelSeconds: "", // Leave blank to use default value or provide a string selector if the lement already exist, Example: .ds-seconds

    theme: "red", // Set the theme 'white', 'black', 'red', 'flat', 'custom'
    titleDays: "Days", // Set the title of days

    titleHours: "Hours", // Set the title of hours

    titleMinutes: "Minutes", // Set the title of minutes

    titleSeconds: "Seconds", // Set the title of seconds
    onBevoreStart: null, // callback before the count down starts

    onClocking: null, // callback after the timer just clocked

    onFinish: null // callback if the count down is finish or 0 timer defined
  });
});
