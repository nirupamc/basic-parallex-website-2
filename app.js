$(function() {
    $(document).scroll(function() {
      var $nav = $(".fixed-top");
      //add background to nav when scrolled
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  
      // $(".heading").css("top", Math.max(180 - 0.2 * window.scrollY, 0) + "px");
      // $(".parallax1").css("opacity", Math.max(1 - 0.004 * window.scrollY, 0));
    });
  });
  
  // $(document).on('scroll', function () {
  //     // $(".heading").css("top", Math.max(180 - 0.2 * window.scrollY, 0) + "px");
  //     $(".parallax1").css("opacity", Math.max(1 - 0.004 * window.scrollY, 0));
  // })
  