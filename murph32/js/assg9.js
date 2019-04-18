/**************************
    Date: 2019-04-11
    Author: Amber Murphy
    Class: CITW 165
    Exercise: Exercise #9
    code modified from book example
**************************/

$('.accordion').on('click', '.accordion-control', function(e){
  e.stopPropagation();
  $(this)
    .next('.accordion-panel')
    .not(':animated')
    .slideToggle();
});