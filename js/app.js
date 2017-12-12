$.ajax({
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
  success: function(data) {
    var userContainer = document.querySelectorAll(".user-container");
    $.each(data.results, function(i, user){
    	userContainer += user.name.first;
    });
    $('.user-container').html(userContainer);
  }
});