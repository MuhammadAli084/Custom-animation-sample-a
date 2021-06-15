$(document).ready(function() {
    gsap.to(".logo", 1, { y: 0, duration: 15, });
    gsap.to("header ul a", 1, { y: 0, duration: 18, stagger: 0.1 });
    gsap.to(".green-border", 1, { x: 0, duration: 25, });
    gsap.to(".block", 1, { y: 0, duration: 1, stagger: 0.5 });
    gsap.to(".card", 5, { y: 0, duration: 20, stagger: 1 });
    gsap.to(".border", 5, { scaleX: 1, duration: 30, });
    gsap.to("h2 span", 1, { y: 0, duration: 5, stagger: 0.2 });



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