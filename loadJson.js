function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("Area").innerHTML = xhttp.responseText;
            var text=xhttp.responseText;
            obj = JSON.parse(text);
            //var list = document.createElement("ul"); 
            //var node = document.createElement("li"); 
            //var t = document.createTextNode(obj[1].color + " " + obj[1].value);
            //node.appendChild(t);
            //list.appendChild(node);
         //   document.getElementById("scroll").appendChild(node);
            document.getElementById("Area").innerHTML =obj[1].color + " " + obj[1].value;


        }
    }
  
    xhttp.open("GET", "col.json", true);
    xhttp.send();
}