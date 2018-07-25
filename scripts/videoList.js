'use strict';
/* global $ store api */

const videoList = (function() {
  const generateListItem = function(video) {
    return `
    <li data-video-id="${video.id}">
      <h3>${video.title}</h3>
      <img src="${video.thumbnail}" />
    </li>
    `;
  };

  const render = function() {
    const html = store.videos.map(video => generateListItem(video));
    $('.results').html(html);
  };

  const handleFormSubmit = function() {
    $('form').submit(event => {
      event.preventDefault();
      const searchTitle = $(event.currentTarget).find('#search-term');
      const searched = searchTitle.val();
      searchTitle.val('');
      api.fetchVideos(searched, (function(response) {
        store.setVideo(response);
        render();
      }));
    });
  };

  const bindEventListeners = function() {
    handleFormSubmit();
  };

  return {
    bindEventListeners,
    render
  };
}
()); 