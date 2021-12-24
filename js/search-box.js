document.getElementById("search-icon").onclick = function(){
    // main menu display none
    document.getElementById("menu").style.display = "none";
    document.getElementById("style-none").style.display = "none";
    document.getElementById("buy-icon").style.display = "none";
    document.getElementById("heart-icon").style.display = "none";
    document.getElementById("bitcoin-icon").style.display = "none";

    // search box display show
    document.getElementById("search-bar").style.display = "initial";
    
    // click search box cancel icon
    document.getElementById("cancel").onclick = function(){
        // search box display none
        document.getElementById("search-bar").style.display = "none";

        // main menu display show
        document.getElementById("menu").style.display = "inherit";
        document.getElementById("style-none").style.display = "inherit";
        document.getElementById("buy-icon").style.display = "inherit";
        document.getElementById("heart-icon").style.display = "inherit";
        document.getElementById("bitcoin-icon").style.display = "inherit";
    }

}