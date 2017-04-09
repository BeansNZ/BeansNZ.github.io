var token = '696845800.975527c.47f7440dcb1e4a8fbcee05a1dbe03612',
    userid = 696845800,
    num_photos = 10;

$.ajax({
	url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', // or /users/self/media/recent for Sandbox
	dataType: 'jsonp',
	type: 'GET',
	data: {access_token: token, count: num_photos},
	success: function(data){
      for( x in data.data ){
      $('#instaAttach').append( '<div class="card">' +
                                '<a href="'+ data.data[x].link + '" title="Instagram.com/bellimorelli">' +
                                '<div class="card-img">' +
                                '<img src="' + data.data[x].images.low_resolution.url + '">' +
                                '</div>' +
                                '</a>' +
                                '</div>');
		}
	},
	error: function(data){
		console.log(data); // send the error notifications to console
	}
});
