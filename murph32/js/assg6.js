/**************************
    Date: 2019-02-26
    Author: Amber Murphy
    Class: CITW 165
    Exercise: Exercise #6
**************************/

// ADDING ITEMS TO START AND END OF LIST
var list = document.querySelectorAll('.custom-list')[0];

// ADD NEW ITEM TO END OF LIST
var newItemLast = document.createElement("li");
newItemLast.className = 'custom-list-item';
newItemLast.classList.add('custom-added-item');
var newTextLast = document.createTextNode('Alternity');
newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);

// ADD NEW ITEM START OF LIST
var newItemFirst = document.createElement('li');
newItemFirst.className = 'custom-list-item';
newItemFirst.classList.add('custom-added-item');
var newTextFirst = document.createTextNode('Shadowrunner');
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst, list.firstChild);

var listItems = document.querySelectorAll('.custom-list-item');

// ADD A CLASS OF SUBARASHII TO ALL LIST ITEMS
var i;
for (i = 0; i < listItems.length; i++) {
    listItems[i].classList.add('subarashii');
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('.list-sub-header');
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading = headingText + '<span>' + totalItems + '</span>';
heading.innerHTML = newHeading;
