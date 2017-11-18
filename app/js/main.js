$(function() {
    var __window = $(window);
    var __mobileIcon = $(".header__mobileMenuIcon");

    // window resizing
    __window.on("resize", function() {
        if (__window.width() < 992) {
            $(".header__nav").appendTo($(".header__mobileMenu"));
            $(".header__mobileMenu").removeClass("open");
        } else {
            $(".header__nav").appendTo($(".header__desktopMenu"));
        }
    });

    __window.trigger("resize");

    __mobileIcon.on("click", function() {
        var el = $(this).data("toggle");
        $(el).toggleClass("open");
    });
});