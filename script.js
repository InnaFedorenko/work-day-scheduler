// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // console.log("Test connected script.js";

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?



  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page - Done
    /*** This code will display the current date in th third line of the header*/
    var currDate = dayjs();
    var currDay = currDate.format('dddd, MMMM D')+'th';
    var currTime = currDate.format('H');
    // currDate+='th';
    $('#currentDay').text(currDay);
    /**This code validate the currennt hour and mark the hours blocks as following:
     *  - the current time block in red ('present' style);
     *  - all hour blocks before the current hour in gray ('past' style);
     *  - all hour blocks after the current hout in green ('future' style);
     */
    // $('div').addClass('past');
    console.log('currTime - '+currTime);
    for (let i = 0; i <= 23; i++) {
      if ($(`#${i}`).attr('id') === currTime) {
        console.log(`The div element with id ${i} is `+  currTime);
        $(`#${i}`).addClass('present');
      }else if ($(`#${i}`).attr('id') > currTime) {
        console.log(`Time after current ${i} is `+  currTime);
        $(`#${i}`).addClass('future');      
      }
      else {
        console.log(`Time before current ${i} is `+  currTime);
        $(`#${i}`).addClass('past');
      };
    }

    // $('#0').addClass('present');
    // $('#1').addClass('past');
    // $('#2').addClass('future');
});
