chrome.action.onClicked.addListener((tab) => {
  if (!tab || tab.id == null) {
    return;
  }

  chrome.tabs.discard(tab.id, () => {
    if (chrome.runtime.lastError) {
      console.warn("Discard failed:", chrome.runtime.lastError.message);
    }
  });
});
