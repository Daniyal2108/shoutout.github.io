var x = document.getElementById("navbarContent");
document.getElementById("search-box").onclick = function(){
    x.style.display.none;
    var a = document.createElement("<input type='search' id='search-here'>");
    a.style["width"] = 100;
    x.appendChild(a);   
}