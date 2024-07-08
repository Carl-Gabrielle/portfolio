$(document).ready(function() {
    gsap.from("#abouts", {
        scrollTrigger: {
            trigger: "#abouts",
            start: "top 90%",
            toggleActions: "play none none none",
        },
        opacity: 0,
        x: -40,
        duration: 2,
        ease: "power2.out" 
    });
});