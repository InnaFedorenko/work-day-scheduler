// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // console.log("Test connected script.js";
  $('#save-all-btn').click(function() {
    console.log('save all');
    $('.time-block').each(function() {
      let id = $(this).attr('id');
      let value = $(this).val();
      localStorage.setItem(id, value);
    });
  });
  $('#delete-all-btn').click(function() {
    console.log('delete all');
    $('.my-div').each(function() {
      const id = $(this).attr('id');
      localStorage.removeItem(id);
    });
  });
  //save the element
  $('.saveBtn').click(function() {
    console.log('Save btn');
    let id = $(this).parent().attr('id');
    console.log('Id value is '+ id);
    let value = $(this).siblings('textarea').val();
    console.log('Value value is '+ value);
    localStorage.setItem(id, value);
  });
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  /** This section describes global variables
   * currDate - current date value, string;
   * currDay - current day, string;
   * currTime - current time - integer;
   */
    var currDate = dayjs();
    var currDay = currDate.format('dddd, MMMM D')+'th';
    var currTime = parseInt(currDate.format('H'));
    // currDate+='th';
    $('#currentDay').text(currDay);
    /**This code validate the currennt hour and mark the hours blocks as following:
     *  - the current time block in red ('present' style);
     *  - all hour blocks before the current hour in gray ('past' style);
     *  - all hour blocks after the current hout in green ('future' style);
     */
    console.log('currTime - '+currTime);
    for (let i = 0; i <= 23; i++) {
      //validation for current time
      if ($(`#${i}`).attr('id') == currTime) {$(`#${i}`).addClass('present');
      //validation for future time
      }else if ($(`#${i}`).attr('id') > currTime) {$(`#${i}`).addClass('future');    
      //validation for past time  
      }else {$(`#${i}`).addClass('past');};
    }
});
