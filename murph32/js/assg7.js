/**************************
    Date: 2019-03-26
    Author: Amber Murphy
    Class: CITW 165
    Exercise: Exercise #7
**************************/

var noteInput, listSubHeader, textEntered, target;

listSubHeader = document.getElementById('list-sub-header');
noteInput = document.getElementById('systemInput');

function writeLabel(e) {
    if (!e) {
        e = window.event;
    }
    target = e.target || e.srcElement;
    textEntered = target.value;
    listSubHeader.textContent = textEntered;
}

function record(target) {
    target.setAttribute('data-state', 'stop');
    target.textContent = 'stop';
}

function stop(target) {
    target.setAttribute('data-state', 'record');
    target.textContent = 'record';
}

function recorderControls(e) {
    if (!e) {
        e = window.event;
    }
    target = e.target || e.srcElement;
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }

    switch (target.getAttribute('data-state')) {
        case 'record':
            record(target);
            break;
        case 'stop':
            stop(target);
            break;
    }
}

if (document.addEventListener) {
    document.addEventListener('click', function (e) {
        recorderControls(e);
    }, false);
    noteInput.addEventListener('input', writeLabel, false);
} else {
    document.attachEvent('onclick', function (e) {
        recorderControls(e);
    });
    noteInput.attachEvent('onkeyup', writeLabel);
}
