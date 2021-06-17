$(function() {
    $(".toggle-btn").click(function() {
        $(this).toggleClass("cross-btn");
    });
    $(".toggle-btn").click(function() {
        $(".header-inner nav").toggleClass("active");
    });
    $(".toggle-btn").click(function() {
        $(".header-inner .grey-box").toggleClass("shadow");
    });
});