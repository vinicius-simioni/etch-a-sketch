//add div when opening page
function drawGrid(gridsize){
    for(var i = 0; i<gridsize; i++){
        document.getElementById("container").innerHTML += "<div class='row'></div>";
        for(var j=0; j<gridsize; j++){
            document.getElementsByClassName("row")[i].innerHTML += "<div class='column'></div>";
        }
    }
}
//call starting grid
drawGrid(20);

//change grid layout
function getInput(){
    //read input value
    var gridsize = document.getElementById("inputbox").value;
    //remove latest container
    document.getElementById("container").remove();
    //add a new container
    document.getElementById("body").innerHTML += "<div id='container'></div>";
    //draw the grid
    console.log(gridsize);
    for(var i = 0; i<gridsize; i++){
        document.getElementById("container").innerHTML += "<div class='row'></div>";
        for(var j=0; j<gridsize; j++){
            document.getElementsByClassName("row")[i].innerHTML += "<div class='column'></div>";
        }
    }
}

