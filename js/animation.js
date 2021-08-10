$(document).ready(function() {
    gsap.from(".black-border", {
        scrollTrigger: {
            trigger: "header",
            toggleActions: "restart none resume reverse",
            // toggleActions: "play complete reverse reset"
        },
        scaleX: 0,
        duration: 10,
        repeat: -1,
        transformOrigin: "center",
        ease: "none"
    });
    gsap.to(".logo span", 1, { y: 0, duration: 5, stagger: 0.2 });
    gsap.to("header ul a", 1, { y: 0, duration: 18, stagger: 0.1 });
    // gsap.to(".black-border", 3, { scaleX: 1, duration: 25, });
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
    gsap.fromTo(".Fade-In", 10, { opacity: 0, }, { opacity: 1 });

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

    let tls1 = gsap.timeline({
        scrollTrigger: {
            trigger: '.section1',
            toggleActions: "restart none resume reverse",
            start: '-20% 60%',
            end: "120% 70%",
            // markers: true,
        }
    })
    tls1.fromTo(".fade-right", 1, { translateX: '-80%', opacity: 0 }, { translateX: 0, opacity: 1 });
    tls1.fromTo(".fade-left", 1, { translateX: '50%', opacity: 0 }, { translateX: 0, opacity: 1 });

    let tls2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.item1',
            toggleActions: "restart none resume reverse",
            start: '-40% 60%',
            end: "100% 70%",
            // markers: true,
        }
    })
    tls2.fromTo(".item1-fade-right", 0.8, { scale: 1.2, translateY: "-100%", opacity: 0 }, { scale: 1, translateY: "0", opacity: 1 });
    tls2.fromTo(".item1-fade-left", 0.8, { translateX: '50%', opacity: 0 }, { translateX: 0, opacity: 1 });

    let tls3 = gsap.timeline({
        scrollTrigger: {
            trigger: '.item2',
            toggleActions: "restart none resume reverse",
            start: '-40% 60%',
            end: "100% 70%",
            // markers: true,
        }
    })
    tls3.fromTo(".item2-fade-right", 0.8, { scale: 1.2, translateY: "-100%", opacity: 0 }, { scale: 1, translateY: "0", opacity: 1 });
    tls3.fromTo(".item2-fade-left", 0.8, { translateX: '50%', opacity: 0 }, { translateX: 0, opacity: 1 });

    let tls4 = gsap.timeline({
        scrollTrigger: {
            trigger: '.item3',
            toggleActions: "restart none resume reverse",
            start: '-40% 60%',
            end: "100% 70%",
            // markers: true,
        }
    })
    tls4.fromTo(".item3-fade-right", 0.8, { scale: 1.2, translateY: "-100%", opacity: 0 }, { scale: 1, translateY: "0", opacity: 1 });
    tls4.fromTo(".item3-fade-left", 0.8, { translateX: '50%', opacity: 0 }, { translateX: 0, opacity: 1 });
});