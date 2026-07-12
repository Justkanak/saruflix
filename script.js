// =========================
// SARUFLIX ❤️
// =========================

const intro = document.getElementById("intro");
const home = document.getElementById("home");

const playButton = document.getElementById("playButton");
const music = document.getElementById("bgMusic");
const loadingText=document.getElementById("loadingText");

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
const typedLetter = document.getElementById("typedLetter");
const signature = document.getElementById("signature");
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
        
        startTyping();
        
        }
    // =========================
// PLAY BUTTON
// =========================

playButton.addEventListener("click",()=>{

    loadingText.classList.remove("hidden");
    
    playButton.style.display="none";
    
    setTimeout(()=>{
    
    intro.style.display="none";
    
    home.classList.remove("hidden");
    
    photosPage.classList.add("hidden");
    
    videosPage.classList.add("hidden");
    
    letterPage.classList.add("hidden");
    
    music.volume=.4;
    
    music.play().catch(()=>{});
    
    },1800);
    
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
// =========================
// FLOATING HEARTS
// =========================

const hearts = document.getElementById("hearts");

setInterval(() => {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = `${Math.random() * window.innerWidth}px`;

    heart.style.fontSize = (18 + Math.random()*20) + "px";

    heart.style.animationDuration = (6 + Math.random()*6) + "s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },12000);

},900);
// =========================
// TYPEWRITER LETTER
// =========================

const letterText = `

If you're reading this,

it means you've reached the most special part of this little website.

I wanted to create something that wasn't just another gift...

but a place where our memories could live forever.

Every photo reminds me of your smile.

Every video reminds me of the beautiful moments we shared.

And every second spent making this website was worth it,

if it brings even one smile to your face.

No matter where life takes us,

I hope whenever you open SARUFLIX,

you remember how special you are to me.

I love you ❤️

`;

let typingStarted = false;

function startTyping(){

if(typingStarted) return;

typingStarted = true;

let i = 0;

typedLetter.innerHTML = "";

function type(){

if(i < letterText.length){

typedLetter.innerHTML += letterText.charAt(i);

i++;

setTimeout(type,35);

}else{

signature.classList.remove("hidden");

}

}

type();

}