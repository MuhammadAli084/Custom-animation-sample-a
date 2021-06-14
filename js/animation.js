$(document).ready(function() {
    gsap.to(".logo", 2, { y: 0, duration: 25, });
    gsap.to("header ul a", 1, { y: 0, duration: 18, stagger: 0.1 });
    gsap.to(".white-border", 1, { x: 0, duration: 25, });
    gsap.to(".banner-card", 5, { y: 0, duration: 25, });
    gsap.from(".block", 1, { y: 0, duration: 1, stagger: 0.3 });
});