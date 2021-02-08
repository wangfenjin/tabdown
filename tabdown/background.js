var extension_url = chrome.extension.getURL("markdown-editor/index.html");

// chrome.tabs.onCreated.addListener(function(newTab) {
//   console.log(newTab)
//   if (newTab.url === "chrome://newtab/"  // chrome
//       || newTab.url === "about:newtab") { // firefox
//     chrome.tabs.update(newTab.id, {url: extension_url});
//   }
// });

chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.create({url: extension_url});
});
