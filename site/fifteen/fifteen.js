window.onload = function () {                                          // Fifteen Script by colleymj
    bId= "cell" + ( bRow= 4 ) + ( bCol= 4 );                           // This is the blank tile.
    links = document.getElementsByTagName("a");                        // Get all anchors.
    for (i=0; i < links.length; i++) links[i].onclick = function () {  // Assign handler function.
        if ((aId= this.id) == "heading") return toggleImage ();        // Toggles image if this is heading.
        if(!((Math.abs(bRow-(aRow=Number(aId.charAt(4))))+Math.abs(bCol-(aCol=Number(aId.charAt(5)))))==1))
            return alert ("Click a tile next to the blank one.");      // If hops > 1, popup help.
        document.getElementById(bId).className= this.className;        // Replace blank with clicked.
        this.className= "puzzletile empty";                            // Set clicked to blank.
        bId= "cell" + (bRow= aRow) + (bCol= aCol);                     // Set new blank location.
    }
}

function toggleImage () {                                              // For Thandi & Adam (the client).
    var grid= document.getElementById("puzzlegrid");                   // Toggles image
    grid.className=(grid.className=="family")?"numbers":"family";      // if heading is clicked.
}
