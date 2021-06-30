$(document).ready(function() {
    gsap.to(".logo span", 1, { y: 0, duration: 5, stagger: 0.2 });
    gsap.to("header ul a", 1, { y: 0, duration: 18, stagger: 0.1 });
    gsap.to(".black-border", 3, { scaleX: 1, duration: 25, });
    gsap.to(".block", 1, { y: 0, duration: 1, stagger: 0.5 });
    gsap.to(".card", 5, { y: 0, duration: 20, stagger: 1 });
    gsap.to(".border", 5, { scaleX: 1, duration: 30, });
    gsap.to("h2 span", 1, { y: 0, duration: 5, stagger: 0.2 });
    gsap.fromTo("line2", 1, { y: 0, opacity: 0, }, { y: 0, opacity: 1 });
    // gsap.to(".fade-in", 2, { opacity: 1 });
    // gsap.to(".zoom-in", 1, { opacity: 1, scale: 1 });
    gsap.to(".banner-inner .slide", 1, { 'background-position': 0, stagger: 1 });
    gsap.to(".zoom", 2, { x: 0, scale: 1, opacity: 1 });
    gsap.to(".text-big-cta span", 3, { x: 0, duration: 3, repeat: -1, yoyo: true });
    gsap.to(".scroll-up-btn", 1, { y: 20, duration: 0.1, repeat: -1, yoyo: true });

    let tls0 = gsap.timeline({
        scrollTrigger: {
            trigger: '.about-me',
            start: '-30% 70%',
            // markers: true,
            scrub: 1,
            toggleActions: "restart pause resume reverse",
            end: "30% 0%",
            // pin: true,
        }
    })
    tls0.to(".thumbnail", 5, { rotateZ: 100, duration: 5 });
    tls0.to(".thumbnail-dark", 5, { rotateZ: 100, duration: 5 });

    // let tls1 = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: '.portfolio',
    //         start: '0% 10%',
    //         // markers: true,
    //         toggleActions: "restart pause resume reverse",
    //         end: "0% 0%",
    //     }
    // })
    // tls1.to(".portfolio-item .item , .detail-row .col-right ", { scale: 1, duration: 1, opacity: 1, stagger: 3 });


    // let tls2 = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: '.about-me',
    //         start: '0% 10%',
    //         markers: true,
    //         toggleActions: "restart none resume reverse",
    //         end: "0% 0%",
    //     }
    // })
    // tls2.fromTo(".about-me .about-card , .about-me p , .about-me a, .about-me h2 ", { x: ' 50%', duration: 0.19, opacity: 0, stagger: 3 }, { x: '0', duration: 1, opacity: 1, stagger: 3 });
});