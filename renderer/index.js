const electron = require('electron');

var test = document.getElementById('test')

test.addEventListener('click', function() {
  electron.remote.shell.openExternal("https://vizzlo.com");
})