$.ajax({
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
  success: function(data) {
    	var userContainer = '';
    $.each(data.results, function(i, user){
    	userContainer += '<div class="user-container">';
    	userContainer += '<img src="' + user.picture.large + '">';
    	userContainer += '<div class="user-info"> <h3>' + user.name.first + ' ' + user.name.last + '</h3>';
    	userContainer += '<p>' + user.email + '</p>';
    	userContainer += '<p>' + user.login.username + '</p> </div>';
    	userContainer += '</div>';

    });
    $('#users').html(userContainer);
  }
});

$(document).on('click', '.user-container', function (event) {
    event.preventDefault();
    $('#modal').iziModal('open');
});
