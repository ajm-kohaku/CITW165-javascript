/**************************
    Date: 2019-02-09
    Author: Amber Murphy
    Class: CITW 165
    Exercise: Exercise #4
**************************/

(function () {

    // PART ONE: CREATE HOTEL OBJECT AND WRITE OUT THE OFFER DETAILS
    var eventLocation, eventRate, earlyBirdPrice,
        expiryMsg, today, elEnds,
        weekFromToday, day, date, month, year, dayNames, monthNames;

    var eventDetails = {
        eventLocation: 'Rosemont Convention Center',
        eventRate: 250, // Amount in dollars
        earlyBirdDiscount: 20, // Percentage discount
        earlyBirdPrice: function () {
            var earlyBirdRate = this.eventRate * ((100 - this.earlyBirdDiscount) / 100);
            return earlyBirdRate;
        }
    };

    eventLocation = document.getElementById('event-location');
    eventRate = document.getElementById('event-rate');
    earlyBirdPrice = document.getElementById('early-bird-price');
    eventLocation.textContent = eventDetails.eventLocation;
    eventRate.textContent = '$' + eventDetails.eventRate.toFixed(2);
    earlyBirdPrice.textContent = '$' + eventDetails.earlyBirdPrice();

    // PART TWO: CALCULATE AND WRITE OUT THE EXPIRY DETAILS FOR THE OFFER

    function offerExpires(today) {
        weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

        dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();

        expiryMsg = 'Offer expires next ';
        expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
        return expiryMsg;
    }

    today = new Date();
    elEnds = document.getElementById('early-bird-expire');
    elEnds.innerHTML = offerExpires(today);
}());

var dropMenu = document.getElementById("navDropDown");

function drop() {
    if (dropMenu.style.display == "none") {
        dropMenu.style.display = "block";
    } else {
        dropMenu.style.display = "none";
    }
}

document.getElementById("iconHolder").onclick = drop();
