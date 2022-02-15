function reqListener () {
   var interface=JSON.parse(this.responseText)
   
    for(var i=0;i<interface.length;i++){
        var table=document.getElementById("interface")
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = interface[i].interface;
        cell2.innerHTML = Math.round(interface[i].inputBytes/1000000) + " Mb";
        cell3.innerHTML = Math.round(interface[i].outputBytes/1000000) + " Mb";
    }

}

  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", "/net");
  oReq.send();
  