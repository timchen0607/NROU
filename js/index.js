$(document).ready(function() {
  $("#aside_btn").click(function(e) {
    e.preventDefault();
    $("#aside").toggleClass("active");
    $("#navbar").removeClass("show");
    $("body").toggleClass("lock");
  });
  $("#nav_btn").click(function(e) {
    e.preventDefault();
    $("#aside").removeClass("active");
  });
});
