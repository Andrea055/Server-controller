<script>
    import { onMount } from 'svelte';
    function reqListener () {
    var interfac=JSON.parse(this.responseText)
    
    console.log("Worko")
    for(var i=0;i<interfac.length;i++){
        var table=document.getElementById("interface")
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = interfac[i].interface;
        cell2.innerHTML = Math.round(interfac[i].inputBytes/1000000) + " Mb";
        cell3.innerHTML = Math.round(interfac[i].outputBytes/1000000) + " Mb";
    }
  }
onMount(async () => {
	var host = location.protocol + '//' + location.hostname;
  const port=":5000"
    var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", host+ port+"/net");
  oReq.send();

});

</script>
<svelte:head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <title>Graph</title>
</svelte:head>

<body>
    <nav class="navbar navbar-expand-lg " style="background-color: #e3f2fd;">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Controller</a>
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
    <h1>&nbsp;</h1>
    <div class="nomi">
      <table class="table" >
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col"> </th>
            <th scope="col">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Incoming</th>
            <th scope="col"> </th>
            <th scope="col">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Outcoming</th>
          </tr>
        </thead>
      </table>
    </div>
  <div class="info">
    <table class="table" id="interface">
    </table>
  </div>

</body>

