const pagePath = chrome.extension.getURL('index.html');

chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.create({url: pagePath});
});
