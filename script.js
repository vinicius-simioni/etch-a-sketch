//adiciona divs no container principal
for(var i = 0; i< 25; i++){
    document.getElementById("container").innerHTML += "<div class='row'></div>";
    for(var j=0; j<25; j++){
        document.getElementsByClassName("row")[i].innerHTML += "<div class='column'></div>";
    }
}
