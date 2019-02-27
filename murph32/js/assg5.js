/**************************
    Date: 2019-02-22
    Author: Amber Murphy
    Class: CITW 165
    Exercise: Exercise #5
**************************/

var message = '';

function parseIntFromString(value) {
    'use strict';
    var parsed = parseInt(value, 10);
    if (isNaN(value)) {
        message = 'Invalid Integer Provided. Please try again.';
        return 0;
    }
    return parsed;
}

function calc() {
    'use strict';
    var entry, letterGrade;
    entry = parseIntFromString(document.getElementById('score').value);
    if (entry >= 90 && entry <= 100) {
        letterGrade = 'A';
    } else if (entry >= 80 && entry <= 89) {
        letterGrade = 'B';
    } else if (entry >= 68 && entry <= 79) {
        letterGrade = 'C';
    } else if (entry >= 60 && entry <= 67) {
        letterGrade = 'D';
    } else if (entry >= 0 && entry <= 60) {
        letterGrade = 'F';
    } else if (entry > 100) {
        letterGrade = 'INVALID';
        message = "Look at you overachiever! But you can't get a score over 100";
    } else if (entry < 0) {
        letterGrade = 'INVALID';
        message = "Do you really feel that bad about yourself? You can't get worse than a 0, so don't even try to enter something so low.";
    } else {
        letterGrade = 'INVALID';
        message = 'Come on! Type something! I dare ya!';
    }

    if (letterGrade !== 'INVALID' && message.length < 1) {
        message = 'Number grade = ' + entry + '\n Letter grade = ' + letterGrade;
    }

    alert(message);
}

document.getElementById('submit').onclick = calc();

var dropMenu = document.getElementById("navDropDown");
var dropState = dropMenu.style.display;
