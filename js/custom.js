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
    // var acc = document.getElementsByClassName("accordion");
    // var i;

    // for (i = 0; i < acc.length; i++) {
    //     acc[i].addEventListener("click", function() {
    //         // this.classList.toggle("active");
    //         var panel = this.nextElementSibling;
    //         if (panel.style.opacity === "1") {
    //             panel.style.opacity = "0";
    //             // panel.style.visibility = "hidden";
    //             panel.style.contentVisibility = "hidden";
    //         } else {
    //             panel.style.opacity = "1";
    //             panel.style.contentVisibility = "visible";
    //         }
    //     });
    // }
});