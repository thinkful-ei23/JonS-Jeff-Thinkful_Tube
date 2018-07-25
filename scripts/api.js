'use strict';
/* global $ */

const api = (function() {
  const API_KEY = 'AIzaSyCHDtuZTezMXq5EnJTKdnlmiRQ0Ip9hdto';
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
  
  const fetchVideos = function(searchTerm, callback) {
    const query = {
      key: API_KEY,
      q: searchTerm,
      part: 'snippet',
    };
    $.getJSON(BASE_URL, query, function(response) {
      const decorateResponse = response.items.map(item => {
        return {
          id: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.default.url,
        };
      });
      callback(decorateResponse);
    });
  };

  return {
    fetchVideos
  };
}
());


