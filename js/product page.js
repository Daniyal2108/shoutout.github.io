/* function showMoreOne() {
   var showMoreBtn = document.getElementById("showMore3").innerHTML; 
   var showMoreHiddenBtn = document.getElementsByClassName("showMoreThree3");
   var CssProp = window.getComputedStyle(showMoreHiddenBtn).getPropertyValue('display');
   showMoreBtn = CssProp; 
} */

/* GRID AND LIST VIEW */

document.getElementById("list_icon").onclick = function() {
   var list = document.getElementById("list-view").style.display = "inherit";
   var grid = document.getElementById("grid-view").style.display = "none";
   return list;
}

document.getElementById("grid_icon").onclick = function() {
   var grid = document.getElementById("grid-view").style.display = "inherit";
   var list = document.getElementById("list-view").style.display = "none";
   return grid;
}

/* GRID AND LIST VIEW */


/* PRODUCT CATEGORIES DROPDOWN */


// #1

// Dropdown

var productCategoriesDropdownItems = document.getElementById("product-categories-dropdown-items");
productCategoriesDropdownItems.style.display = "none";
var productCategoriesDropdown = document.getElementById("product-categories-dropdown");
productCategoriesDropdown.onclick = function() {
   productCategoriesDropdown.style.display = "none";
   productCategoriesDropUp.style.display = "inherit";   
   productCategoriesDropdownItems.style.display = "inherit";
}

// Dropdown

// Drop Up

var productCategoriesDropUp = document.getElementById("product-categories-drop-up");
productCategoriesDropUp.style.display = "none";
productCategoriesDropUp.onclick = function() {
   productCategoriesDropUp.style.display = "none";
   productCategoriesDropdownItems.style.display = "none";
   productCategoriesDropdown.style.display = "inherit";
}



// Drop Up

// #2

// Dropdown

var filterPriceMenu = document.getElementById("filter-price-menu");
filterPriceMenu.style.display = "none";
var filterPriceDropUp = document.getElementById("filter-price-drop-up");
filterPriceDropUp.style.display = "none";
var filterPriceDropdown = document.getElementById("filter-price-dropdown");
filterPriceDropdown.onclick = function() {
   filterPriceDropdown.style.display = "none";
   filterPriceDropUp.style.display = "inherit";   
   filterPriceMenu.style.display = "inherit";
}

// DropUp

filterPriceDropUp.onclick = function() {
   filterPriceDropUp.style.display = "none";
   filterPriceMenu.style.display = "none";
   filterPriceDropdown.style.display = "inherit";
}

// #3

// Dropdown

var colorsMenu = document.getElementById("colors-menu");
colorsMenu.style.display = "none";
var colorsDropUp = document.getElementById("colors-drop-up");
colorsDropUp.style.display = "none";
var colorsDropDown = document.getElementById("colors-dropdown");
colorsDropDown.onclick = function() {
   colorsDropDown.style.display = "none";
   colorsDropUp.style.display = "inherit";   
   colorsMenu.style.display = "inherit";
}

// DropUp

colorsDropUp.onclick = function() {
   colorsDropUp.style.display = "none";
   colorsMenu.style.display = "none";
   colorsDropDown.style.display = "inherit";
}

// #4

// Dropdown

var brandsMenu = document.getElementById("brands-menu");
brandsMenu.style.display = "none";
var brandsDropUp = document.getElementById("brands-drop-up");
brandsDropUp.style.display = "none";
var brandsDropdown = document.getElementById("brands-dropdown");
brandsDropdown.onclick = function() {
   brandsDropdown.style.display = "none";
   brandsDropUp.style.display = "inherit";   
   brandsMenu.style.display = "inherit";
}

// DropUp

brandsDropUp.onclick = function() {
   brandsDropUp.style.display = "none";
   brandsMenu.style.display = "none";
   brandsDropdown.style.display = "inherit";
}





// Show More Button

// 1

// Dropdown

var showMoreItems1 = document.getElementById("show-more-items-1");
showMoreItems1.style.display = "none";
var showLess1 = document.getElementById("show-less-1");
showLess1.style.display = "none";
var showMore1 = document.getElementById("show-more-1");
showMore1.onclick = function() {
   showMore1.style.display = "none";
   showLess1.style.display = "inherit";   
   showMoreItems1.style.display = "inherit";
}

//Drop Up

showLess1.onclick = function() {
   showLess1.style.display = "none";
   showMoreItems1.style.display = "none";
   showMore1.style.display = "inherit";
}

// #2

// Dropdown

var showMoreItems2 = document.getElementById("show-more-items-2");
showMoreItems2.style.display = "none";
var showLess2 = document.getElementById("show-less-2");
showLess2.style.display = "none";
var showMore2 = document.getElementById("show-more-2");
showMore2.onclick = function() {
   showMore2.style.display = "none";
   showLess2.style.display = "inherit";   
   showMoreItems2.style.display = "inherit";
}

//Drop Up

showLess2.onclick = function() {
   showLess2.style.display = "none";
   showMoreItems2.style.display = "none";
   showMore2.style.display = "inherit";
}

// #3

// Dropdown

var showMoreItems3 = document.getElementById("show-more-items-3");
showMoreItems3.style.display = "none";
var showLess3 = document.getElementById("show-less-3");
showLess3.style.display = "none";
var showMore3 = document.getElementById("show-more-3");
showMore3.onclick = function() {
   showMore3.style.display = "none";
   showLess3.style.display = "inherit";   
   showMoreItems3.style.display = "inherit";
}

//Drop Up

showLess3.onclick = function() {
   showLess3.style.display = "none";
   showMoreItems3.style.display = "none";
   showMore3.style.display = "inherit";
}

// #4

// Dropdown

var showMoreItems4 = document.getElementById("show-more-items-4");
showMoreItems4.style.display = "none";
var showLess4 = document.getElementById("show-less-4");
showLess4.style.display = "none";
var showMore4 = document.getElementById("show-more-4");
showMore4.onclick = function() {
   showMore4.style.display = "none";
   showLess4.style.display = "inherit";   
   showMoreItems4.style.display = "inherit";
}

//Drop Up

showLess4.onclick = function() {
   showLess4.style.display = "none";
   showMoreItems4.style.display = "none";
   showMore4.style.display = "inherit";
}

/* PRODUCT CATEGORIES DROPDOWN */


/* product-categories-dropdown-items */
/* product-categories-dropdown */