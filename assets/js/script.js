// ======Materialize======

// Parallax
$(document).ready(function(){
    $('.parallax').parallax();
  });

// Navbar
$(document).ready(function(){
    $('.sidenav').sidenav();
  });

// Scrollspy
$(document).ready(function(){
  $('.scrollspy').scrollSpy({
    scrollOffset: 50
  });
});

// Modals
$(document).ready(function(){
  $('.modal').modal();
});
     
// =======Waypoints=======

// Sticky
var sticky = new Waypoint.Sticky({
    element: $('.navbar')[0]
  })