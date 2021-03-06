/**************************
    Date: 2019-04-11
    Author: Amber Murphy
    Class: CITW 165
    Exercise: Exercise #8
    code modified from book example
**************************/
$(function () {

    // SETUP
    var $list, $newItemForm, $newItemButton;
    var item = '';
    $list = $('ul.custom-list');
    $newItemForm = $('#newItemForm');
    $newItemButton = $('#newItemButton');

    $('li.custom-list-item').hide().each(function (index) {
        $(this).delay(450 * index).fadeIn(1600);
    });

    // ITEM COUNTER
    function updateCount() {
        var items = $('li.custom-list-item').length;
        $('#counter').text(items);
    }
    updateCount();

    // SETUP FORM FOR NEW ITEMS
    $newItemButton.show();
    $newItemForm.hide();
    $('#showForm').on('click', function () {
        $newItemButton.hide();
        $newItemForm.show();
    });

    // ADDING A NEW LIST ITEM
    $newItemForm.on('submit', function (e) {
        e.preventDefault();
        var text = $('input:text').val();
        if (text.length !== 0) {
            $list.append('<li class=\"custom-list-item\">' + text + '</li>');
            $('input:text').val('');
            updateCount();
        }
    });

    // CLICK HANDLING - USES DELEGATION ON <ul> ELEMENT
    $list.on('click', 'li', function () {
        var $this = $(this);
        var complete = $this.hasClass('complete');

        if (complete === true) {
            $this.animate({
                opacity: 0.0,
                paddingLeft: '+=180'
            }, 500, 'swing', function () {
                $this.remove();
            });
        } else {
            item = $this.text();
            $this.remove();
            $list
                .append('<li class=\"complete\">' + item + '</li>')
                .hide().fadeIn(300);
            updateCount();
        }
    });

});
