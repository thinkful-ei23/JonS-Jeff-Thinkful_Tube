'use strict';

const store = (function() {
  const videos = [];
  const setVideo = function(vid) {
    this.videos = vid;
  };

  return {
    videos,
    setVideo
  };
}
());