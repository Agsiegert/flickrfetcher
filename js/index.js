FlickrFetcher.fetchPhotos('a0cfc52727310dea5b7f672ac0f0e8db')
    .then(PhotoLister.photoListToHTML)
    .then(function(photosHTML) {
        PhotoLister.addPhotosToElement($, '#mydiv', photosHTML)
    });
