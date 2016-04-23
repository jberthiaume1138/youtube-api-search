'use strict'

$(document).ready(function() {

});

// event handler for the button
$('#btnSearch').click(function() {
	getRequest(query.value);
});

function getRequest(searchString) {
	var params = {
		part: 'snippet',
		q: searchString,
		r: 'json',
		key: 'AIzaSyBvdTd6SJBWbM9AHytx3HBHfBK5FPXbwaA'
	};

	var endpointURL = 'https://www.googleapis.com/youtube/v3/search';

	$.getJSON(endpointURL, params, function(data) {
		//var myData = data.items[0].snippet.title;
		
		// console.log(myData.items);
		showResults(data.items);
	});
};

function showResults(results) {
	console.log(results);
	


	console.log(results[0].snippet);

	var html = '';
	$.each(results,function(index,value) {
		console.log(value.snippet.title);
		html += '<div>';
		html += '<p>' + value.snippet.title + '</p>';
		html += '<a href=https://www.youtube.com/watch?v=' + value.id.videoId + '>';
		html += '<img src=' + value.snippet.thumbnails.medium.url + '></a>';
		html += '</div>';

	});

	$('#search-results').html(html);
};