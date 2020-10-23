let images = [];

chrome.tabs.query({
    active: true,
    currentWindow: true
}, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, {action: "get_images"}, response => {
        images = response;

        $(".gallery").html('');
        response.forEach((img, index) => {
            $('.gallery').append('<div class="row"><div class="img-container selected"><img src="' + img.src + '" data-index=' + index + ' alt=" image failed to load"></div></div>')
        });
    });
});


$("#download_all").on('click', (e) => {
    console.log("downloading all...");
    chrome.runtime.sendMessage({
        action: "download",
        data: images
    }, res => {
        console.log(res?.message);
    });
});


$(".gallery").on('click', '.img-container', (e) => {
    $(e.target).toggleClass("selected");
    let img = $(e.target).find('img');
    let index = img.data("index");
    if (images[index].selected) {
        images[index].selected = false;
    } else {
        images[index].selected = true;
    }
});