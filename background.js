chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    if(req.action === "download") {

        req.data.forEach(obj => {
            if(obj.selected) {
                chrome.downloads.download({"url": obj.src});
            }
        });

        sendResponse({message: "Complete"});

    }
})