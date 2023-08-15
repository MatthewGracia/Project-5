$(document).ready(function () {
  $('.saveBtn').on('click', function () {
    localStorage.setItem($(this).parent().attr('id'), $(this).siblings('.description').val());
    $('.notification').addClass('show').delay(4000).queue(function(next){
      $(this).removeClass('show');
      next();
    });
  });

  function updateHour() {
    var currentHour = dayjs().hour();
    $('.time-block').each(function () {
      var blockHour = parseInt($(this).attr('id').split('-')[1]);
      $(this).removeClass('past present future').addClass(blockHour < currentHour ? 'past' : blockHour === currentHour ? 'present' : 'future');
    });
  }

  updateHour();
  setInterval(updateHour, 15000);

  for (let i = 9; i <= 17; i++) {
    $('#hour-' + i + ' .description').val(localStorage.getItem('hour-' + i));
  }

  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
});