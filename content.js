console.log("bulk image downloader running");

chrome.runtime.onMessage.addListener(function(req, sender, sendResponse){

    if (req.action === "get_images") {

        let images = $('img').map((i, img) => {

            if ($(img).data('src')) {
                return {
                    src: $(img).data('src'),
                    selected: true
                }

            } else if($(img).src) {
                return {
                    src: $(img.data('src')),
                    selected: true
                }
            } else {
                return null;
            }
        }).get();

        sendResponse(images);
    }

});