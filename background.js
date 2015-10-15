chrome.app.runtime.onLaunched.addListener(function(launchData) {
  chrome.app.window.create('main.html', {
    id: 'mainWindow',
    bounds: {
      width: 400,
      height: 600
    }
  }, onWindowCreated);
});

function onWindowCreated(win) {
  win.contentWindow.onload = function() {
    var appView = win.contentWindow.document.querySelector('#appView');
    appView.addEventListener('newwindow', function(e) {
      e.preventDefault();
      window.open(e.targetUrl);
    });
  };
}
