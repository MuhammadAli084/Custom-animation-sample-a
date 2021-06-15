$(document).ready(function() {
    gsap.to(".logo", 1, { y: 0, duration: 15, });
    gsap.to("header ul a", 1, { y: 0, duration: 18, stagger: 0.1 });
    gsap.to(".green-border", 1, { x: 0, duration: 25, });
    gsap.to(".block", 1, { y: 0, duration: 1, stagger: 0.5 });
    gsap.to(".card", 1, { y: 0, duration: 10, stagger: 1 });
    gsap.to(".heading,.heading::after", 1, { x: -100, duration: 10, stagger: 1 });


    // let tls = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: '.favorites',
    //         start: '-30% 0%',
    //         markers: true,
    //         scrub: 1,
    //         toggleActions: "restart pause resume reverse",
    //         end: "300% 0%",
    //         pin: true,
    //     }
    // })
});