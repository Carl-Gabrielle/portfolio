    gsap.registerPlugin(); 
    let text = new SplitType("#text");
    let characters = document.querySelectorAll('.char');
    var tl = gsap.timeline();
    for(i=0; i<characters.length; i++){
        characters[i].classList.add('translate-y-full');
    }
        gsap.to('.char',{
            y:0,
            stagger: 0.05,
            delay:0.04,
            duration:0.9
        })
        gsap.from(".btn-dark", {
    opacity: 0,
    y: -20,
    duration: 1, 
    delay: 0.5,
    ease: "power1.out" 
    });
    gsap.from(".social-link", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.5,
    ease: "power1.out", 
    stagger: 0.2
    });
    gsap.from("#name", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.5,
        ease: "power1.out"
    });

    gsap.from("#description", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.7, 
        ease: "power1.out"
    });
    gsap.from("#navs", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.7, 
        ease: "power1.out"
    });
    gsap.from(".modes", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.7, 
        ease: "power1.out"
    });
    gsap.from("#content1", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.7, 
        ease: "power1.out"
    });
    gsap.from("#profileImage", {
        opacity: 0,
        scale: 0.5,
        duration: 1.5,
        ease: "back.out(1.7)",
        delay: 0.5
    });
    document.addEventListener("DOMContentLoaded", function() {
    var isDarkMode = localStorage.getItem("darkMode");

    if (isDarkMode === "true") {
    document.body.classList.add("dark-mode");
    document.getElementById("icon").classList.remove("fa-moon");
    document.getElementById("icon").classList.add("fa-sun");
    }

    document.getElementById("toggleIcon").addEventListener("click", function() {
    var icon = document.getElementById("icon");
    document.body.classList.toggle("dark-mode");
    if (icon.classList.contains("fa-moon")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
    });
    });

  