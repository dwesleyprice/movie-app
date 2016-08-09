// DOCUMENT READY FUNCTION

$(document).ready(function(){
	
		// console.log(nowPlayingData);
	$.getJSON(apiBaseUrl + latest + apiKey, function(nowPlayingData){

		var userInput = $('.movie').val();

		// This is the base URL
		var apiBaseUrl = 'http://api.themoviedb.org/3';
		//the query string, including apikey
		var apiKey = '?api_key=a57d629c0189135ef18672bad05964ed';
		var query = '&query=';
		var latest = '/movie/now_playing';
		var imageBaseUrl = 'http://image.tmdb.org/t/p/';
		var kidsDisc = '/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc'
// After the / comes the width (w300+posterpath)
	

		});
	 // END DOC READY FUNC
	
		//loadCurrent();


//JSON LOAD CURRENT MOVIE FUNCTION

	
		var npHTML = '';
		for (var i = 0; i < nowPlayingData.results.length; i++) {
			npHTML += '<div class="col-sm-3">';
			npHTML += nowPlayingData.results[i].title;
			var posterUrl = imageBaseUrl + 'w300' + nowPlayingData.results[i].poster_path;
			var movieCaption = nowPlayingData.results[i].overview;
			npHTML += '<a href="#" data-toggle="popover" data-trigger="hover" data-placement="bottom" title="More Info" data-content="'+movieCaption+'">'
			npHTML += '<img src="' +posterUrl+ '">';
			npHTML += '</a>'
			// npHTML += '<div class="caption">'+movieCaption+'</div>'
			npHTML += '</div>';
		}
		$('.poster-grid').html(npHTML);
		$('[data-toggle="popover"]').popover();

		 //END LOAD CURRENT FUNCTION


//MOVIE FORM FUNCTION

			$('.movie-form').submit(function(){
			event.preventDefault();

			$.getJSON(apiBaseUrl + apiKey + query + userInput, function(nowPlayingClickedData){
				console.log(nowPlayingClickedData);


			});

		});


//MOVIE SEARCH DISPLAY FUNCTION

					var npHTML = '';
					for (var i = 0; i < nowPlayingClickedData.results.length; i++) {
						npHTML += '<div class="col-sm-3">';
						npHTML += nowPlayingClickedData.results[i].title;
						var posterUrl = imageBaseUrl + 'w300' + nowPlayingClickedData.results[i].poster_path;
						var movieCaption = nowPlayingClickedData.results[i].overview;
						npHTML += '<a href="#" data-toggle="popover" data-trigger="hover" data-placement="bottom" title="More Info" data-content="'+movieCaption+'">'
						npHTML += '<img src="' +posterUrl+ '">';
						npHTML += '</a>'
						// npHTML += '<div class="caption">'+movieCaption+'</div>'
						npHTML += '</div>';
					}
					$('.poster-grid').html(npHTML);
					$('[data-toggle="popover"]').popover();

});