const themeToggle=document.getElementById("theme-toggle");
themeToggle.addEventListener("click",()=>{
    document.body.classList.toggle("light-mode");
    themeToggle.textContent=document.body.classList.contains("light-mode")?"🌙":"☀️";
});
const mockup=document.getElementById("mockup");
window.addEventListener("scroll",()=>{
    let offset=window.scrollY*0.2;
    if(mockup) mockup.style.transform=`translateY(${offset}px) rotate(${offset/50}deg)`;
});
const sections=document.querySelectorAll(".features,.testimonials,.pricing,.cta");
const revealOnScroll=()=>{
    const triggerBottom=window.innerHeight*0.85;
    sections.forEach(section=>{
        const rect=section.getBoundingClientRect();
        if(rect.top<triggerBottom){
            section.style.opacity=1;
            section.style.transform='translateY(0)';
        }
    });
};
window.addEventListener("scroll",revealOnScroll);
revealOnScroll();
const priceCards=document.querySelectorAll(".price-card");
priceCards.forEach(card=>{
    card.addEventListener("click",()=>{
        priceCards.forEach(c=>c.classList.remove("highlight"));
        card.classList.add("highlight");
    });
});
const preorderBtns=document.querySelectorAll("#preorder-btn,#preorder-btn2");
const popup=document.getElementById("popup");
const closePopup=document.getElementById("close-popup");
preorderBtns.forEach(btn=>{
    btn.addEventListener("click",e=>{
        e.preventDefault();
        popup.style.display="flex";
    });
});
closePopup.addEventListener("click",()=>{popup.style.display="none"});
window.addEventListener("click",e=>{if(e.target===popup) popup.style.display="none"});
const featureMockups=document.querySelectorAll(".feature-mockup");
const animateMockups=()=>{
    const triggerBottom=window.innerHeight*0.85;
    featureMockups.forEach(img=>{
        const rect=img.getBoundingClientRect();
        if(rect.top<triggerBottom&&rect.bottom>0){
            img.style.opacity=1;
            img.style.transform="translateY(0) scale(1)";
        } else {
            img.style.opacity=0;
            img.style.transform="translateY(50px) scale(0.95)";
        }
    });
};
window.addEventListener("scroll",animateMockups);
animateMockups();
const hamburger=document.getElementById("hamburger");
const navLinks=document.getElementById("nav-links");
hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});
