// all functions ------------------
function initOutdoor() {
  "use strict";
  // css ------------------
  $(
    ".hero-title , .team-social , .srtp ul , .slide-title , .scroll-page-nav , .count-folio"
  ).addClass("cdc");
  function a() {
    $(" .fullheight-carousel .item").css({
      height: $(".fullheight-carousel").outerHeight(true),
    });
    $(".hero-slider .item").css({
      height: $(".hero-slider").outerHeight(true),
    });
    $(".slideshow-item .item").css({
      height: $(".slideshow-item ").outerHeight(true),
    });
    $("#content-sidebar").css({
      top: $("header").outerHeight(true),
    });
    $(".cdc").css({
      "margin-top": (-1 * $(".cdc").height()) / 2 + "px",
    });
    var a = $(window).height(),
      b = $("header").outerHeight(),
      c = $("footer").outerHeight(),
      d = $(".port-subtitle-holder").outerHeight(),
      e = $(".p_horizontal_wrap");
    e.css("height", a - b - c);
    $(
      " #portfolio_horizontal_container .portfolio_item img, #portfolio_horizontal_container .portfolio_item video , .port-desc-holder"
    ).css({
      height: $(".p_horizontal_wrap").outerHeight(true) - d,
    });
    $(".mm").css({
      "padding-top": $("header").outerHeight(true),
    });
  }
  a();
  $(window).resize(function () {
    a();
  });
  $(".show-hidden-info").on("click", function () {
    $(this).toggleClass("vhi");
    $(this).closest(".resume-box").find(".hidden-info").slideToggle(500);
  });
  function d() {
    var a = document.querySelectorAll(".intense");
    Intense(a);
  }
  d();
  // isotope  ------------------
  function n() {
    if ($(".gallery-items").length) {
      var a = $(".gallery-items").isotope({
        singleMode: true,
        columnWidth: ".grid-sizer, .grid-sizer-second, .grid-sizer-three",
        itemSelector:
          ".gallery-item, .gallery-item-second, .gallery-item-three",
        transformsEnabled: true,
        transitionDuration: "700ms",
      });
      a.imagesLoaded(function () {
        a.isotope("layout");
      });
      $(".gallery-filters").on("click", "a.gallery-filter", function (b) {
        b.preventDefault();
        var c = $(this).attr("data-filter");
        a.isotope({
          filter: c,
        });
        $(".gallery-filters a.gallery-filter").removeClass(
          "gallery-filter-active"
        );
        $(this).addClass("gallery-filter-active");
        return false;
      });
      a.isotope("on", "layoutComplete", function (a, b) {
        var c = b.length;
        $(".num-album").html(c);
      });
    }
    var b = {
      touchbehavior: true,
      cursoropacitymax: 1,
      cursorborderradius: "0",
      background: "#eee",
      cursorwidth: "10px",
      cursorborder: "0px",
      cursorcolor: "#292929",
      autohidemode: false,
      bouncescroll: false,
      scrollspeed: 120,
      mousescrollstep: 90,
      grabcursorenabled: true,
      horizrailenabled: true,
      preservenativescrolling: true,
      cursordragontouch: true,
      railpadding: {
        top: -15,
        right: 0,
        left: 0,
        bottom: 0,
      },
    };
    $(".p_horizontal_wrap").niceScroll(b);
    var c = $("#portfolio_horizontal_container");
    c.imagesLoaded(function (a, d, e) {
      var f = {
        itemSelector: ".portfolio_item",
        layoutMode: "packery",
        packery: {
          isHorizontal: true,
          gutter: 0,
        },
        resizable: true,
        transformsEnabled: true,
        transitionDuration: "700ms",
      };

      var g = {
        itemSelector: ".portfolio_item",
        layoutMode: "packery",
        packery: {
          isHorizontal: false,
          gutter: 0,
        },
        resizable: true,
        transformsEnabled: true,
        transitionDuration: "700ms",
      };
      if ($(window).width() < 768) {
        c.isotope(g);
        c.isotope("layout");
        if ($(".p_horizontal_wrap").getNiceScroll())
          $(".p_horizontal_wrap").getNiceScroll().remove();
      } else {
        c.isotope(f);
        c.isotope("layout");
        $(".p_horizontal_wrap").niceScroll(b);
      }
      $(".gallery-filters").on("click", "a", function (a) {
        a.preventDefault();
        var b = $(this).attr("data-filter");
        c.isotope({
          filter: b,
        });
        $(".gallery-filters a").removeClass("gallery-filter_active");
        $(this).addClass("gallery-filter_active");
      });
      c.isotope("on", "layoutComplete", function (a, b) {
        var c = b.length;
        $(".num-album").html(c);
      });
    });
  }
  var j = $(".portfolio_item , .gallery-item").length;
  $(".all-album , .num-album").html(j);
  n();
  $(window).load(function () {
    n();
  });
  $(".portfolio_item a").on("click", function () {
    var a = $(this).attr("href");
    window.location.href = a;
    return false;
  });
  $(".filter-button").on("click", function () {
    $(".hid-filter").slideToggle(500);
    $(".filter-button i").toggleClass("roticon");
  });
  //  Share  ------------------
  var shs = eval($(".share-container").attr("data-share"));
  $(".share-container").share({
    networks: shs,
  });
  function hideShare() {
    $(".show-share").addClass("isShare");
    $(".share-container a").each(function (a) {
      var b = $(this);
      setTimeout(function () {
        b.animate(
          {
            opacity: 0,
          },
          500
        );
      }, 120 * a);
    });
    setTimeout(function () {
      $(".share-container ").removeClass("visshare");
    }, 400);
  }
  function showShare() {
    $(".show-share").removeClass("isShare");
    $(".share-container ").addClass("visshare");
    setTimeout(function () {
      $(".share-container a").each(function (a) {
        var b = $(this);
        setTimeout(function () {
          b.animate(
            {
              opacity: 1,
            },
            500
          );
        }, 120 * a);
      });
    }, 400);
  }
  $(".show-share").on("click", function (a) {
    a.preventDefault();
    if ($(".show-share").hasClass("isShare")) showShare();
    else hideShare();
  });
  //  menu    ------------------
  var nb = $(".nav-button"),
    nh = $(".nav-holder"),
    an = $(".nav-holder ,.nav-button ");
  function showMenu() {
    nb.removeClass("vis-m");
    nh.slideDown(500);
  }
  function hideMenu() {
    nb.addClass("vis-m");
    nh.slideUp(500);
  }
  nb.on("click", function () {
    if ($(this).hasClass("vis-m")) showMenu();
    else hideMenu();
  });
}
function initgalheight() {
  var a = $(window).height(),
    b = $("header").outerHeight(),
    c = $("footer").outerHeight(),
    d = $(".port-subtitle-holder").outerHeight(),
    e = $(".p_horizontal_wrap");
  e.css("height", a - b - c - 15);
  $(
    " #portfolio_horizontal_container .portfolio_item img, #portfolio_horizontal_container .portfolio_item video , .port-desc-holder"
  ).css({
    height: $(".p_horizontal_wrap").outerHeight(true) - d,
  });
}
//   Init all fucntions  ------------------

function menuMovil() {
  if (mobileAndTabletcheck()) {
    //si Es es un dispositivo móvil
    $("h2").remove();
    $.each($(".portfolio_item"), function (i, l) {
      $(this).css({ top: $(this).position().top + i * 70 + "px" });
      var h3 = $(
        $($($($(l).children()[1]).children()[0]).children()[0]).children()[1]
      ).children()[0];
      var hre = $(l).children()[0];
      var enlace = $(hre).attr("href");
      var w = $(window).width();
      var fs = 30;
      if (w < 361) fs = 12;
      if (w > 360 && w < 721) fs = 22;
      $(l).append(
        '<h3>&nbsp;</h3><a href="' +
          enlace +
          '"><h2 style="position:relative;width:100%;font-size:' +
          fs +
          'px">' +
          h3.innerHTML +
          "</h2></a>"
      );
    });
  }
}
function mobileAndTabletcheck() {
  var check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
}

$(document).ready(function () {
  initOutdoor();
  // console.log('entra a función ');
  if (document.getElementById("portfolio_horizontal_container")) {
    setTimeout(function () {
      menuMovil();
    }, 3000);
    window.onresize = function () {
      menuMovil();
    };
  }
});