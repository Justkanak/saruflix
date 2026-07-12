// =========================
// SARUFLIX ❤️
// =========================

const intro = document.getElementById("intro");
const home = document.getElementById("home");
const profilePage = document.getElementById("profilePage");
const saruProfile = document.getElementById("saruProfile");
const playButton = document.getElementById("playButton");
const music = document.getElementById("bgMusic");
const tadum = document.getElementById("tadum");
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
const prevPhoto = document.getElementById("prevPhoto");
const nextPhoto = document.getElementById("nextPhoto");

const galleryImages = document.querySelectorAll(".gallery img");

let currentPhoto = 0;
const typedLetter = document.getElementById("typedLetter");
const signature = document.getElementById("signature");
let logoClicks = 0;
const logoSecret = document.getElementById("logoSecret");
const secretLogo = document.getElementById("secretLogo");
const secretPage = document.getElementById("secretPage");
const backSecret = document.getElementById("backSecret");

let logoTimer;

// ===========================
// FUNCTIONS
// ===========================

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
playButton.addEventListener("click", () => {

    loadingText.classList.remove("hidden");
    loadingText.textContent = "Loading memories... ❤️";

    playButton.textContent = "Loading...";
    playButton.disabled = true;
    playButton.style.opacity = "0.7";

    document.body.style.transition = "opacity .8s ease";

    setTimeout(() => {

        document.body.style.opacity = "0";

        setTimeout(() => {

            intro.style.display = "none";

            profilePage.classList.remove("hidden");
            photosPage.classList.add("hidden");
            videosPage.classList.add("hidden");
            letterPage.classList.add("hidden");


            document.body.style.opacity = "1";

        }, 800);

    }, 1000);

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

galleryImages.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        currentPhoto=index;

        showPhoto();

        lightbox.classList.remove("hidden");

    });

});

function showPhoto(){

    lightboxImage.src=galleryImages[currentPhoto].src;

}

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
// =========================
// LIGHTBOX NAVIGATION
// =========================

prevPhoto.addEventListener("click",()=>{

    currentPhoto--;

    if(currentPhoto<0){

        currentPhoto=galleryImages.length-1;

    }

    showPhoto();

});

nextPhoto.addEventListener("click",()=>{

    currentPhoto++;

    if(currentPhoto>=galleryImages.length){

        currentPhoto=0;

    }

    showPhoto();

});

// Keyboard navigation

document.addEventListener("keydown",(e)=>{

    if(lightbox.classList.contains("hidden")) return;

    if(e.key==="ArrowRight"){

        nextPhoto.click();

    }

    if(e.key==="ArrowLeft"){

        prevPhoto.click();

    }

    if(e.key==="Escape"){

        closeLightbox.click();

    }

});
// ==============================
// SECRET PAGE
// ==============================

// =========================
// SECRET LOGO
// =========================

backSecret.addEventListener("click", () => {
    hideAllPages();
    home.classList.remove("hidden");
    window.scrollTo(0, 0);
});

secretLogo.addEventListener("click", () => {

    logoClicks++;

    clearTimeout(logoTimer);

    logoTimer = setTimeout(() => {
        logoClicks = 0;
    }, 3000);

    if (logoClicks === 5) {

        logoClicks = 0;

        hideAllPages();
        secretPage.classList.remove("hidden");
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

});

backSecret.addEventListener("click", () => {
    document.querySelectorAll(".page").forEach(page => page.classList.add("hidden"));
    document.getElementById("homePage").classList.remove("hidden");
    window.scrollTo(0, 0);
});
logoSecret.addEventListener("click", () => {
    logoClicks++;

    if (logoClicks === 5) {
        logoClicks = 0;

        const unlockToast = document.getElementById("unlockToast");

        unlockToast.classList.add("show");

        setTimeout(() => {
            unlockToast.classList.remove("show");

            document.querySelectorAll(".page").forEach(page =>
                page.classList.add("hidden")
            );

            secretPage.classList.remove("hidden");
            window.scrollTo({ top: 0, behavior: "smooth" });

        }, 1200);
    }

    setTimeout(() => {
        if (logoClicks < 5) logoClicks = 0;
    }, 2500);
});
saruProfile.addEventListener("click", () => {

    // Play cinematic intro sound
    tadum.currentTime = 0;
    tadum.play().catch(() => {});

    // Fade out
    document.body.style.transition = "opacity .7s ease";
    document.body.style.opacity = "0";

    setTimeout(() => {

        profilePage.classList.add("hidden");

        home.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        // Fade back in
        document.body.style.opacity = "1";

        // Start background music slightly after the intro sound
        setTimeout(() => {
            music.volume = 0.4;
            music.play().catch(() => {});
        }, 800);

    }, 700);

});
// =========================
// VIDEO & MUSIC CONTROL
// =========================

document.querySelectorAll(".videoGrid video").forEach(video => {

    video.addEventListener("play", () => {

        music.pause();

    });

    video.addEventListener("ended", () => {

        music.play().catch(() => {});

    });

    video.addEventListener("pause", () => {

        if (video.currentTime < video.duration) {

            music.play().catch(() => {});

        }

    });

});