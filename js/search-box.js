var x = document.getElementById("navbarContent");
document.getElementById("search-box").onclick = function(){
    var x = document.getElementById("navbarContent");
    x.style.display.none;
    var a = document.createElement("<input type='search' id='search-here'>");
    a.style["width"] = 100;
    x.appendChild(a);   
}