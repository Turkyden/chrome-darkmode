var darkmode = new Darkmode({
  bottom: "32px", // default: '32px'
  right: "32px", // default: '32px'
  left: "unset", // default: 'unset'
  time: "0.3s", // default: '0.3s'
  mixColor: "#fff", // default: '#fff's
  backgroundColor: "#fff", // default: '#fff'
  buttonColorDark: "#100f2c", // default: '#100f2c'
  buttonColorLight: "#fff", // default: '#fff'
  saveInCookies: true, // default: true,
  label: "🌓", // default: ''
  autoMatchOsTheme: true, // default: true
});

document.querySelector(".darkmode-layer").style.zIndex = 2147483647;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action == "darkmode") {
    // darkmode.showWidget();
    darkmode.toggle();
    // darkmode.toggle();
    sendResponse({state: "set darkmode"});
  }
});
