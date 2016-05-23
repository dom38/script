function GetData()
{
    //Open the XML
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "vidya.xml", false);
    xmlHttp.send()
    var xmlDoc = xmlHttp.responseXML;
    
    //reserves space on the webpage
    
    var table = "<table><tr><th>Name</th><th>Genre</th><th>Platform</th></tr>";
    
    //Copy & Paste
    
    var element = xmlDoc.getElementsByTagName("film");
    
    for (var i = 0; i < element.length; i++) {
        table += "<tr>";
        table += "<td>";
        table += element[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
        table += "</td>";
        table += "<td>";
        table += element[i].getElementsByTagName("genre")[0].childNodes[0].nodeValue;
        table += "</td>";
        table += "<td>";
        table += element[i].getElementsByTagName("platform")[0].childNodes[0].nodeValue;
        table += "</td>";
    }

    table += "</table>";
    document.getElementById("data").innerHTML = table;
}

function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}