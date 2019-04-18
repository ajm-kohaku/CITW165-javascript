/**************************
    Date: 2019-04-18
    Author: Amber Murphy
    Class: CITW 165
    Exercise: Exercise #9
    code modified from book example
**************************/

/****** ###### PHOTO VIEWER ##### ******/
var request;
var $current;
var cache = {};
var $frame = $('#image-viewer');
var $crumbs = $('.crumbs');

function crossfade($img) {
    if ($current) {
        $current.stop().fadeOut('slow');
    }

    $img.css({
        marginLeft: -$img.width() / 2,
        marginTop: -$img.height() / 2
    });

    $img.stop().fadeTo('slow', 1);
    $current = $img;

}

$(document).on('click', '.crumbs', function (e) {
    var $img,
        src = this.href;
    request = src;

    e.preventDefault();

    $crumbs.removeClass('active');
    $(this).addClass('active');

    if (cache.hasOwnProperty(src)) {
        if (cache[src].isLoading === false) {
            crossfade(cache[src].$img);
        }
    } else {
        $img = $('<img/>');
        cache[src] = {
            $img: $img,
            isLoading: true
        };

        $img.on('load', function () {
            $img.hide();
            $frame.removeClass('is-loading').append($img);
            cache[src].isLoading = false;
            if (request === src) {
                crossfade($img);
            }
        });

        $frame.addClass('is-loading');
        $img.attr({
            'src': src,
            'alt': this.title || ''
        });
    }

});

$('.crumbs').eq(0).click();

/****** ###### MODAL WINDOW ##### ******/

var modal = (function () {
    var $window = $(window);
    var $modal = $('<div class="modal"/>');
    var $content = $('<div class="modal-content"/>');
    var $close = $('<button role="button" class="modal-close button">close</button>');

    $modal.append($content, $close);

    $close.on('click', function (e) {
        e.stopPropagation();
        modal.close();
    });

    return {
        center: function () {
            var top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
            var left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;
            $modal.css({
                top: top + $window.scrollTop(),
                left: left + $window.scrollLeft()
            });
        },
        open: function (settings) {
            $content.empty().append(settings.content);

            $modal.css({
                width: settings.width || 'auto',
                height: settings.height || 'auto'
            }).appendTo('body');

            modal.center();
            $(window).on('resize', modal.center);
        },
        close: function () {
            $content.empty();
            $modal.detach();
            $(window).off('resize', modal.center);
        }
    };
}());

/****** ###### MODAL WINDOW INITIALIZER ##### ******/
(function () {
    var $content = $('#class-site-info').detach();

    $('#more-info').on('click', function () {
        modal.open({
            content: $content,
            width: 500,
            height: 300
        });
    });
}());
