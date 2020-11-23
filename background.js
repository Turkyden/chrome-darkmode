chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.sendMessage(tab.id, { 
    action: "darkmode",
    keyword: 'hola'
  }, (response) => {
    console.log(response);
    // state.html(response.state)
    // this.setState({ msg: response.state })
  });
});
