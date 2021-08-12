$(document).ready(function() {
    if (localStorage.getItem('a')) {
        $(":root").addClass("dark-mode");
        $("#switch-btn").attr('checked', '')
    }
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
        $(".slider").click(function() {
            if (localStorage.getItem('a')) {
                localStorage.removeItem('a');
            } else {
                localStorage.setItem('a', 'bc');
            }
            $(":root").toggleClass("dark-mode");
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

    var lastScrollTop = 0,
        delta = 15;
    $(window).scroll(function(event) {
        var st = $(this).scrollTop();

        if (Math.abs(lastScrollTop - st) <= delta)
            return;
        if ((st > lastScrollTop) && (lastScrollTop > 0)) {
            // downscroll code
            $("header").css("top", "-100px");

        } else {
            // upscroll code
            $("header").css(
                "top", "0px"
            );
        }
        lastScrollTop = st;
    });
});
$(window).on('load', function() {
    $('.loader').hide()
});