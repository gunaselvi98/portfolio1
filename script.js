/*smooth js scroll starts*/
const scroll = new SmoothScroll('.nav-links a[href*="#"]',{speed: 1000} );
/*smooth js  scroll ends*/





/*hamburger js starts*/
const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});
/*hamburger js end*/
/*slider js starts*/
const t1 = gsap.timeline({ defaults: { ease: "power1.cut" } });

t1.to(".text",{y:"0%", duration: 1, stagger: 0.25});
t1.to(".slider", { y: "-100%",duration: 1.75, delay: 0.5});
t1.to(".intro", { y: "-100%", duration: 1},"-=1");
/*slider ends*/