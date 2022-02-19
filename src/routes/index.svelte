
<script>
	import { onMount } from 'svelte';

let MyComponent;
const port=":5000"
onMount(async () => {
	var host = location.protocol + '//' + location.hostname;
  fetch(host+ port+'/cpu')
  .then(response => response.json())
  .then(data => document.getElementById('cpu').textContent=data.model);
fetch(host+ port+ '/ram')
  .then(response => response.json())
  .then(data => document.getElementById('ram').textContent=data.totalMemMb/1000 + " Gb");
fetch(host+ port+'/misc')
  .then(response => response.json())
  .then(data => document.getElementById('hostname').textContent=data.user);
fetch(host+ port +'/misc')
  .then(response => response.json())
  .then(data => document.getElementById('uptime').textContent=parseInt(data.uptime/3600) +" h");
fetch(host+ port + '/misc')
  .then(response => response.json())
  .then(data => document.getElementById('ip').textContent=data.ip);
});
</script>
<svelte:head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <script src="script.js"></script>
    <link rel="stylesheet" href="style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <title>Graph</title>
</svelte:head>

<body>
    <nav class="navbar navbar-expand-lg " style="background-color: #e3f2fd;">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Controller</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="network">Network</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="drive">Drive</a>
              </li>
          </div>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        </div>
    </nav>
  <div class="info">
    <table class="table">
      <tbody>
        <tr>
          <th scope="row">CPU model</th>
          <td id="cpu"></td>
          <td id="barcpu"></td>
        </tr>
        <tr>
          <th scope="row">Total RAM</th>
          <td id="ram"></td>
          <td id="barram"></td>
        </tr>
        <tr>
          <th scope="row">Uptime</th>
          <td colspan="2" id="uptime"></td>
        </tr>
        <tr>
          <th scope="row">Hostname</th>
          <td colspan="2" id="hostname"></td>
        </tr>
        <tr>
          <th scope="row">Local IP</th>
          <td colspan="2" id="ip"></td>
        </tr>
      </tbody>
    </table>
  </div>

</body>

