function reqListener () {
    var interface=JSON.parse(this.responseText)
    
     for(var i=0;i<interface.length;i++){
         var table=document.getElementById("interface")
         var row = table.insertRow(0);
         var cell1 = row.insertCell(0);
         var cell2 = row.insertCell(1);
         var cell3 = row.insertCell(2);
         var cell4 = row.insertCell(3);
         cell1.innerHTML = interface[i]._filesystem;
         cell2.innerHTML = interface[i]._capacity + "(" + Math.round(interface[i]._used/1000000) + " Gb" + ")";
         cell3.innerHTML = Math.round(interface[i]._available/1000000) + " Gb";
         cell4.innerHTML = interface[i]._mounted;
     }
 
 }
 
   var oReq = new XMLHttpRequest();
   oReq.addEventListener("load", reqListener);
   oReq.open("GET", "/drive");
   oReq.send();
   