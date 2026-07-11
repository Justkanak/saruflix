// ================================
// SARUFLIX v2.0
// Part 1
// ================================

const intro = document.getElementById("intro");
const ticketSection = document.getElementById("ticketSection");
const profileSection = document.getElementById("profileSection");
const home = document.getElementById("home");

const photosPage = document.getElementById("photosPage");
const videosPage = document.getElementById("videosPage");
const letterPage = document.getElementById("letterPage");

const enterProfile = document.getElementById("enterProfile");

const navHome = document.getElementById("navHome");
const navPhotos = document.getElementById("navPhotos");
const navVideos = document.getElementById("navVideos");
const navLetter = document.getElementById("navLetter");

const photosCard = document.getElementById("photosCard");
const videosCard = document.getElementById("videosCard");
const letterCard = document.getElementById("letterCard");

const playBtn = document.getElementById("playBtn");
const watchNow = document.getElementById("watchNow");
const letterBtn = document.getElementById("letterBtn");

const backFromPhotos = document.getElementById("backFromPhotos");
const backFromVideos = document.getElementById("backFromVideos");
const backFromLetter = document.getElementById("backFromLetter");

// -------------------------------
// Intro Animation
// -------------------------------

setTimeout(() => {
    intro.classList.add("hidden");
    ticketSection.classList.remove("hidden");

    setTimeout(() => {
        ticketSection.classList.add("hidden");
        profileSection.classList.remove("hidden");
    }, 2500);

}, 2500);

// -------------------------------
// Profile Selection
// -------------------------------

enterProfile.addEventListener("click", () => {

    profileSection.classList.add("hidden");
    home.classList.remove("hidden");

});

// -------------------------------
// Helper Functions
// -------------------------------

function hideAllPages() {

    home.classList.add("hidden");
    photosPage.classList.add("hidden");
    videosPage.classList.add("hidden");
    letterPage.classList.add("hidden");

}

function openHome() {

    hideAllPages();
    home.classList.remove("hidden");

}

function openPhotos() {

    hideAllPages();
    photosPage.classList.remove("hidden");

}

function openVideos() {

    hideAllPages();
    videosPage.classList.remove("hidden");

}

function openLetter() {

    hideAllPages();
    letterPage.classList.remove("hidden");

}
// ================================
// Part 2
// Navigation & Buttons
// ================================

// Navbar

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

// Continue Watching Cards

photosCard.addEventListener("click", openPhotos);

videosCard.addEventListener("click", openVideos);

letterCard.addEventListener("click", openLetter);

// Hero Buttons

playBtn.addEventListener("click", openPhotos);

watchNow.addEventListener("click", openVideos);

letterBtn.addEventListener("click", openLetter);

// Back Buttons

backFromPhotos.addEventListener("click", openHome);

backFromVideos.addEventListener("click", openHome);

backFromLetter.addEventListener("click", openHome);
// ================================
// Part 3
// Auto Photo & Video Gallery
// ================================

const photoGallery = document.getElementById("photoGallery");
const videoGallery = document.getElementById("videoGallery");

// ---------- Photos ----------

for (let i = 1; i <= 11; i++) {

    const img = document.createElement("img");

    img.src = `images/photo${i}.jpg`;

    img.className = "galleryImage";

    img.alt = `Photo ${i}`;

    img.addEventListener("click", () => {

        lightbox.classList.remove("hidden");

        lightboxImage.src = img.src;

    });

    photoGallery.appendChild(img);

}

// ---------- Videos ----------

for (let i = 1; i <= 17; i++) {

    const video = document.createElement("video");

    video.controls = true;

    video.className = "memoryVideo";

    video.poster = `images/photo${Math.min(i,11)}.jpg`;

    video.innerHTML = `
        <source src="videos/video${i}.mp4" type="video/mp4">
        Your browser does not support videos.
    `;

    videoGallery.appendChild(video);

}
// ================================
// Lightbox
// ================================

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const closeLightbox = document.getElementById("closeLightbox");

closeLightbox.addEventListener("click", () => {

    lightbox.classList.add("hidden");

});

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.classList.add("hidden");

    }

});
// ================================
// Part 4
// Smooth Scrolling & Active Navigation
// ================================

// Highlight active navigation item
function setActiveNav(activeId) {

    document.querySelectorAll("nav a").forEach(link => {
        link.classList.remove("active");
    });

    const active = document.getElementById(activeId);

    if (active) {
        active.classList.add("active");
    }

}

// Update active nav when opening pages

function openHome() {

    hideAllPages();
    home.classList.remove("hidden");
    setActiveNav("navHome");

}

function openPhotos() {

    hideAllPages();
    photosPage.classList.remove("hidden");
    setActiveNav("navPhotos");

}

function openVideos() {

    hideAllPages();
    videosPage.classList.remove("hidden");
    setActiveNav("navVideos");

}

function openLetter() {

    hideAllPages();
    letterPage.classList.remove("hidden");
    setActiveNav("navLetter");

}

// Set Home as active initially
setActiveNav("navHome");
// ================================
// Part 5
// Welcome Message & Finish
// ================================

console.log("❤️ Welcome to SARUFLIX ❤️");

// Pause all videos when leaving the Videos page
function pauseAllVideos() {

    document.querySelectorAll("#videoGallery video").forEach(video => {

        video.pause();

    });

}

// Override page switches to stop playback
const originalOpenHome = openHome;
openHome = function () {
    pauseAllVideos();
    originalOpenHome();
};

const originalOpenPhotos = openPhotos;
openPhotos = function () {
    pauseAllVideos();
    originalOpenPhotos();
};

const originalOpenLetter = openLetter;
openLetter = function () {
    pauseAllVideos();
    originalOpenLetter();
};