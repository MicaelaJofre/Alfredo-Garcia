//  menu    ------------------
var nb = $(".nav-button"), nh = $(".nav-holder"), an = $(".nav-holder ,.nav-button ");
function showMenu() {
    nb.removeClass("vis-m");
    nh.slideDown(500);
}
function hideMenu() {
    nb.addClass("vis-m");
    nh.slideUp(500);
}
nb.on("click", function() {
    if ($(this).hasClass("vis-m")) showMenu(); else hideMenu();
});