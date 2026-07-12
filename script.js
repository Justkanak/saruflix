// =========================
// SARUFLIX ❤️
// =========================

const intro = document.getElementById("intro");
const home = document.getElementById("home");

const playButton = document.getElementById("playButton");
const music = document.getElementById("bgMusic");

const photosPage = document.getElementById("photosPage");
const videosPage = document.getElementById("videosPage");
const letterPage = document.getElementById("letterPage");

const navHome = document.getElementById("navHome");
const navPhotos = document.getElementById("navPhotos");
const navVideos = document.getElementById("navVideos");
const navLetter = document.getElementById("navLetter");

const photosCard = document.getElementById("photosCard");
const videosCard = document.getElementById("videosCard");
const letterCard = document.getElementById("letterCard");

const watchBtn = document.getElementById("watchBtn");
const letterBtn = document.getElementById("letterBtn");

const backPhotos = document.getElementById("backPhotos");
const backVideos = document.getElementById("backVideos");
const backLetter = document.getElementById("backLetter");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");
// =========================
// FUNCTIONS
// =========================

function hideAllPages(){

    home.classList.add("hidden");
    
    photosPage.classList.add("hidden");
    
    videosPage.classList.add("hidden");
    
    letterPage.classList.add("hidden");
    
    }
    
    function openHome(){

        hideAllPages();
        
        home.classList.remove("hidden");
        
        }
    
    function openPhotos(){
    
    hideAllPages();
    
    photosPage.classList.remove("hidden");
    
    }
    
    function openVideos(){
    
    hideAllPages();
    
    videosPage.classList.remove("hidden");
    
    }
    
    function openLetter(){
    
    hideAllPages();
    
    letterPage.classList.remove("hidden");
    
    }
    // =========================
// PLAY BUTTON
// =========================

playButton.addEventListener("click", () => {

    intro.style.display = "none";

    home.classList.remove("hidden");

    photosPage.classList.add("hidden");

    videosPage.classList.add("hidden");

    letterPage.classList.add("hidden");

    music.volume = 0.4;

    music.play().catch(() => {});

});

// =========================
// NAVIGATION
// =========================

navHome.addEventListener("click", (e) => {
    e.preventDefault();
    openHome();
});

navPhotos.addEventListener("click", (e) => {
    e.preventDefault();
    openPhotos();
});

navVideos.addEventListener("click", (e) => {
    e.preventDefault();
    openVideos();
});

navLetter.addEventListener("click", (e) => {
    e.preventDefault();
    openLetter();
});

photosCard.addEventListener("click", openPhotos);

videosCard.addEventListener("click", openVideos);

letterCard.addEventListener("click", openLetter);

watchBtn.addEventListener("click", openVideos);

letterBtn.addEventListener("click", openLetter);

backPhotos.addEventListener("click", openHome);

backVideos.addEventListener("click", openHome);

backLetter.addEventListener("click", openHome);
// =========================
// PHOTO LIGHTBOX
// =========================

document.querySelectorAll(".gallery img").forEach(img => {

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

// =========================
// PAUSE VIDEOS
// =========================

function pauseVideos() {

    document.querySelectorAll(".videoGrid video").forEach(video => {

        video.pause();

    });

}

backVideos.addEventListener("click", pauseVideos);

navHome.addEventListener("click", pauseVideos);

navPhotos.addEventListener("click", pauseVideos);

navLetter.addEventListener("click", pauseVideos);

console.log("❤️ SARUFLIX Loaded Successfully ❤️");