// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // console.log("Test connected script.js";

  /** This section describes global variables
   * currDate - current date value, string;
   * currDay - current day, string;
   * currTime - current time - integer;
   */
    var currDate = dayjs();
    var currDay = currDate.format('dddd, MMMM D')+'th';
    var currTime = parseInt(currDate.format('H'));


  /**
   * This funtion save all elements description from Local Storage 
   * by clicking Save All Events button
   * and re-load the page to clear events description from the html page
   * Note - validation to the blank description ws not added 
   * to cover cases when user delete description.
   */
  $('#save-all-btn').click(function() {
    $('.time-block').each(function() {
      let id = $(this).attr('id');
      let value = $(this).find('.description').val();
      console.log(value);
      localStorage.setItem(id, value);
    });
    location.reload();
    return;
  });

  /**
   * This funtion remove all elements description from Local Storage 
   * by clicking Clear All Events button
   * and re-load the page to clear events description from the html page
   */
  $('#delete-all-btn').click(function() {
    console.log('delete all');
    $('.time-block').each(function() {
      let id = $(this).attr('id');
      localStorage.removeItem(id);
    });
    location.reload();
    return;
  });

  /**
   * This function save the event descrition to the local storage 
   * by clicking related to this event Save button
   * the event value saved as id = to the event hour and value as event description
   */
  $('.saveBtn').click(function() {
    console.log('Save btn');
    let id = $(this).parent().attr('id');
    let value = $(this).siblings('textarea').val();
    localStorage.setItem(id, value);
  });
  //This code write the current date to the header
  $('#currentDay').text(currDay);
  /**
   * This code does cycle for all hours rows and do the following:
   *  - marks the current time block in red ('present' style);
   *  - marks all hour blocks before the current hour in gray ('past' style);
   *  - marks all hour blocks after the current hout in green ('future' style);
   * - reads local storage
   * - write events description  to the related hour
   */
  for (let i = 0; i <= 23; i++) {
    //validation for current time
    if ($(`#${i}`).attr('id') == currTime) {$(`#${i}`).addClass('present');
    //validation for future time
    }else if ($(`#${i}`).attr('id') > currTime) {$(`#${i}`).addClass('future');    
    //validation for past time  
    }else {$(`#${i}`).addClass('past');};
    let eventText = localStorage.getItem(i);
    if (eventText){
      $(`#${i}`).find('.description').val(eventText);
    }
  }

});
