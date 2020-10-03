function openNav() {
  $("#myNav").show();
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  $("#myNav").hide();
  document.getElementById("myNav").style.width = "0%";
}

$(document).ready(function() {
  setTimeout(() => {
    $(".wrapper").css("position", "fixed");
    var marginTop =
      $("#pageBanner").height() + $("#bs-example-navbar-collapse-1").height();
    $(".wrapper").css("top", marginTop + "px");
    var height = $(window).height() - marginTop;
    $(".wrapper").height(height + "px");
    $(".wrapper").css("overflow", "auto");
    var bannerWidth = $("#pageBanner").width() + "px";
    $(".wrapper").width(bannerWidth);
    $(".wrapper").css("max-width", bannerWidth);
  }, 5);

  // click handlers
  $("button").click(function(e) {
    var MaharajSelected = $(e.target).attr("text");
    console.log("Clicked: " + MaharajSelected);
    var html = getCardViewHTML(MaharajSelected);
    $("#cardViewContainer").html(html);
    attachePhotoClickHandler();
  });

  attachePhotoClickHandler();

  $(document).keyup(function(e) {
    e = e || window.event;
    if (e.keyCode == 27) {
      closeNav();
    }
  });
});

var attachePhotoClickHandler = function() {
  $(document).on("click", "img[photogallery]", function(e) {
    var originalPath = $(e.target).attr("original");
    var rendition = ".rendition.800.600.png";
    var imgTag = "<img src='" + originalPath + rendition + "'/>";
    $(".overlay-content").html(imgTag);
    openNav();
  });
};

$(document).on("click", "a.closebtn[photogallery]", function() {
  $("#myNav[photogallery]").hide();
});
