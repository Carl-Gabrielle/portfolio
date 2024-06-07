gsap.registerPlugin(ScrollTrigger);
    
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

    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#tech-stack", {
        scrollTrigger: {
            trigger: "#tech-stack",
            start: "top 80%",
            toggleActions: "play none none none",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out" 
    });
    gsap.from("#projectTitle", {
        scrollTrigger: {
            trigger: "#projectTitle",
            start: "top 80%",
            toggleActions: "play none none none",
        },
        opacity: 1,
        y: 40,
        duration: 1,
        ease: "power2.out" 
    });
    
    gsap.to("#projectText", {
        scrollTrigger: {
          trigger: ".project-container",
          start: "top 50%",
          end: "bottom   ",
          scrub: true,

        },
        x: function() {
          return window.innerWidth < 768 ? "-100%" : "100%";
        },
        y: function() {
          return window.innerWidth < 768 ? "10%" : "90%";
        },
        opacity: function() {
          return window.innerWidth < 768 ? 1 : 1;
        },
        duration: 1
      });


    gsap.from("#proj1", {
        scrollTrigger: {
            trigger: "#proj1",
            start: "top 80%",
            toggleActions: "play none none none",
        },
        opacity: 0,
        x: -40,
        duration: 2,
        ease: "power2.out" 
    });
    gsap.from("#bring", {
        scrollTrigger: {
            trigger: "#bring",
            start: "top 30%",
            toggleActions: "play none none none",
        },
        opacity: 0,
        x: -40,
        duration: 2,
        ease: "power2.out" 
    });
    gsap.from("#proj2", {
        scrollTrigger: {
            trigger: "#proj2",
            start: "top 80%",
            toggleActions: "play none none none",
        },
        opacity: 0,
        x: 40,
        duration: 2,
        ease: "power2.out" 
    });
    gsap.from("#contactDiv", {
        scrollTrigger: {
            trigger: "#contactDiv",
            start: "top 30%",
            toggleActions: "play none none none",
        },
        opacity: 0,
        x: 40,
        duration: 2,
        ease: "power2.out" 
    });
    gsap.from("#proj3", {
        scrollTrigger: {
            trigger: "#proj3",
            start: "top 80%",
            toggleActions: "play none none none",
        },
        opacity: 0,
        x: -40,
        duration: 2,
        ease: "power2.out" 
    });
    gsap.from("#proj4", {
        scrollTrigger: {
            trigger: "#proj4",
            start: "top 80%",
            toggleActions: "play none none none",
        },
        opacity: 0,
        x: 40,
        duration: 2,
        ease: "power2.out" 
    });
    gsap.from("#btnView", {
        scrollTrigger: {
            trigger: "#btnView",
            start: "top 90%", 
            toggleActions: "play none none none",
        },
        opacity: 0,
        y: -20,
        duration: 1,
        delay: 0.5,
        ease: "power1.out" 
    });
    
    gsap.from("#front", {
        scrollTrigger: {
            trigger: "#front",
            start: "top 80%", 
            toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2, 
        ease: "power2.out" 
    });
    gsap.from("#back", {
        scrollTrigger: {
            trigger: "#back",
            start: "top 80%", 
            toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2, 
        ease: "power2.out" 
    });
    gsap.from("#tools", {
        scrollTrigger: {
            trigger: "#tools",
            start: "top 80%", 
            toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2, 
        ease: "power2.out" 
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
    
    document.addEventListener("DOMContentLoaded", function() {
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const arrowIcons = document.querySelectorAll('.arrow-icon');
                arrowIcons.forEach(function(icon) {
                    icon.style.display = 'none';
                });
                const arrowIcon = this.querySelector('.arrow-icon');
                arrowIcon.style.display = 'inline';
            });
        });
    });


    $(document).ready(function() {
        $('#mobile-Div').hide();
        $('#menu-Bar').click(function() {
            $('#mobile-Div').fadeToggle(300);
        });
    });
    