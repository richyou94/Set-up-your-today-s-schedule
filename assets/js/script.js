var currentTime = moment().format("dddd, MMMM Do");

var todayEl = $('#currentDay');

todayEl.text(currentTime);

function testingAppendDivAndOthers() {
    var rowEl = $('<div>');
    var hourEl = $('<div>');
    var descriptionEl = $('<textarea>');
    var btnEl = $('<btn>');
    var timeBlockEl = $('#timeBlockEl');

    hourEl.text("testing hour");
    btnEl.text("save");

    rowEl.addClass('row');
    hourEl.addClass('hour');
    descriptionEl.addClass('description');
    btnEl.addClass('saveBtn');
    
    rowEl.append(hourEl);
    rowEl.append(descriptionEl);
    rowEl.append(btnEl);
    
    timeBlockEl.append(rowEl);
}

testingAppendDivAndOthers();

// Creating new element jQuery tag
// var titleEl = $('<h1>');
// ----------------------------
//Adding text
// titleEl.text('Hello friends');
// ----------------------------
// Adding class
// titleEl.addClass('p-5');
// ----------------------------
// adjusting css
// titleEl.css('border', 'rgb(122, 242, 242) 5px solid');
// ----------------------------
// appending new element
// rootEl.append(titleEl);
// ----------------------------
// addEventLIstener
// alertButtonEl.on('click', function () {
//   alert('Hello World');
// });
// ----------------------------

// function handleFormSubmit(event) {
//     // Prevent the default behavior
//     event.preventDefault();
  
//     console.log('First Name:', firstNameEl.val());
//     console.log('Last Name:', lastNameEl.val());
//     console.log('Email:', emailEl.val());
//     console.log('GitHub:', githubEl.val());
  
//     // Select all checked options
//     var checkedEl = $('input:checked');
//     var selected = [];
  
//     // Loop through checked options to store in array
//     $.each(checkedEl, function () {
//       selected.push($(this).val());
//     });
//     console.log('Toppings: ', selected.join(', '));
  
//     // Clear input fields
//     $('input[type="text"]').val('');
//     $('input[type="email"]').val('');
//     $('input[type="checkbox"]').prop('checked', false);
//   }
  
//   // Submit event on the form
//   formEl.on('submit', handleFormSubmit);
// ----------------------------

// rootEl.children('ul').children().css('background-color', 'white');

// Select the last `<ul>` or the third row.
// Long traverals can be segmented to provide better readability.
// var rowThree = rootEl.children('ul').eq(2);

// Select the children of the `<ul>`, then select the first box and add the 'O'.
// rowThree.children().eq(0).text('O');
// ----------------------------

// clearEl.on('click', function () {
//     displayEl.empty();
//   });
// ----------------------------
// var btnClicked = $(event.target);
// ----------------------------
