fetch('/cpu')
  .then(response => response.json())
  .then(data => document.getElementById('cpu').textContent=data.model);
fetch('/ram')
  .then(response => response.json())
  .then(data => document.getElementById('ram').textContent=data.totalMemMb/1000 + " Gb");
fetch('/misc')
  .then(response => response.json())
  .then(data => document.getElementById('hostname').textContent=data.user);
fetch('/misc')
  .then(response => response.json())
  .then(data => document.getElementById('uptime').textContent=parseInt(data.uptime/3600) +" h");
fetch('/misc')
  .then(response => response.json())
  .then(data => document.getElementById('ip').textContent=data.ip);