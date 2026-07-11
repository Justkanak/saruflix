// ==========================
// SARUFLIX V2
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    const intro = document.getElementById("intro");
    const ticket = document.getElementById("ticketSection");
    const profile = document.getElementById("profileSection");
    const home = document.getElementById("home");

    const profileCard = document.querySelector(".profileCard");
    const playBtn = document.getElementById("playBtn");
    const letterBtn = document.getElementById("letterBtn");
    const navLogo = document.querySelector(".navLogo");

    const song = new Audio("music/song.mp3");
    song.loop = true;

    // ==========================
    // Intro → Ticket
    // ==========================

    setTimeout(() => {

        intro.classList.add("hidden");
        ticket.classList.remove("hidden");

    },4000);

    // ==========================
    // Ticket → Profile
    // ==========================

    setTimeout(() => {

        ticket.classList.add("hidden");
        profile.classList.remove("hidden");

    },8000);

    // ==========================
    // Enter Website
    // ==========================

    profileCard.addEventListener("click",()=>{

        profile.classList.add("hidden");
        home.classList.remove("hidden");

        home.classList.add("fade");

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

    // ==========================
    // Play Memories
    // ==========================

    playBtn.addEventListener("click",()=>{

        song.play();

        alert("🎬 Memories Gallery is coming in the next update ❤️");

    });

    // ==========================
    // Letter
    // ==========================

const letterModal = document.getElementById("letterModal");
const closeLetter = document.getElementById("closeLetter");

letterBtn.addEventListener("click",()=>{

    letterModal.classList.remove("hidden");

});

closeLetter.addEventListener("click",()=>{

    letterModal.classList.add("hidden");

});
    // ==========================
    // Secret Logo
    // ==========================

    let clicks = 0;
    let timer;

    navLogo.addEventListener("click",()=>{

        clicks++;

        clearTimeout(timer);

        timer = setTimeout(()=>{

            clicks=0;

        },2500);

        if(clicks>=5){

            clicks=0;

            alert("❤️ Secret Unlocked!\n\nWelcome to the hidden page.");

        }

    });

});
// ==========================
// PHOTO GALLERY
// ==========================

const galleryImages = document.querySelectorAll(".galleryImage");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

galleryImages.forEach((img) => {

    img.addEventListener("click", () => {

        lightbox.classList.remove("hidden");

        lightboxImage.src = img.src;

    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.classList.add("hidden");

});

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.classList.add("hidden");

    }

});
