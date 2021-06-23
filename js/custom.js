$(document).ready(function() {
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
    $(".accordion").click(function() {
        $(this).parent(".faq-item").toggleClass("open");
    });

    $('.scroll-up-btn').on("click", function() {
        $(window).scrollTop(0);
    });
    var mybutton = document.getElementById("top-btn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            mybutton.style.opacity = "1";
        } else {
            mybutton.style.opacity = "0";
        }
    }
});