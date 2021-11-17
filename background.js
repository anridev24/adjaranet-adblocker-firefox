function blockRequest() {
  return { cancel: true }
}

function updateFilters(urls) {
  if (chrome.webRequest.onBeforeRequest.hasListener(blockRequest)) {
    chrome.webRequest.onBeforeRequest.removeListener(blockRequest)
  }
  chrome.webRequest.onBeforeRequest.addListener(blockRequest, { urls: urls }, ['blocking'])
}

fetch('https://steamboost.ge/ads.json')
  .then(r => r.json())
  .then(response => {
    console.log('IT WORKS')
    updateFilters(response.ads)
  })
