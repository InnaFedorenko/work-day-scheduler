// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // console.log("Test connected script.js";
  // $('#save-all-btn').click(function() {
  //   console.log('save all');
  //   $('.time-block').each(function() {
  //     let id = $(this).attr('id');
  //     let value = $(this).val();
  //     localStorage.setItem(id, value);
  //   });
  // });
  // $('#delete-all-btn').click(function() {
  //   console.log('delete all');
  //   $('.my-div').each(function() {
  //     const id = $(this).attr('id');
  //     localStorage.removeItem(id);
  //   });
  // });
  /**
   * This function save the event descrition to the local storage 
   * by clicking related to this event Save button
   * the event value saved as id = to the event hour and value as event description
   */
  $('.saveBtn').click(function() {
    console.log('Save btn');
    let id = $(this).parent().attr('id');
    console.log('Id value is '+ id);
    let value = $(this).siblings('textarea').val();
    console.log('Value value is '+ value);
    localStorage.setItem(id, value);
  });

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
        console.log('Event test is ' +i +' : '+ eventText);
        $(`#${i}`).find('.description').val(eventText);
      }
    }

});
