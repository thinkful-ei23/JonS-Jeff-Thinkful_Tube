'use strict';


/* Store
Exposes a videos array
Exposes a setVideos function that simply receives videos and sets it to this.videos
*/

const store = function() {
					const videos = [];
					const setVidoes = function(vid)	 {
							this.videos = vid;
							};
					return {
							videos,
							setVideos,
	}	;
}());