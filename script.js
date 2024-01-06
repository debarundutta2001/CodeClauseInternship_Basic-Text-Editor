function executeCommand(command) {
  document.execCommand(command, false, null);
}

function saveFile() {
  var content = document.getElementById('editor').innerHTML;
  var blob = new Blob([content], {type: 'text/html'});
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'document.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

