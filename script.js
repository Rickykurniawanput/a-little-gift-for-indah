// ======================================
// A Little Gift For Indah ❤️
// Made with ❤️ by Ricky
// ======================================

// ==============================
// Ambil Element
// ==============================

const opening = document.getElementById("opening");
const hero = document.getElementById("hero");
const startBtn = document.getElementById("startBtn");
const openBtn = document.getElementById("openBtn");
const letter = document.querySelector(".letter");
const typing = document.getElementById("typing");
const music = document.getElementById("bgMusic");

// Hero disembunyikan saat pertama kali
hero.style.display = "none";


// ==============================
// Opening Screen
// ==============================

startBtn.addEventListener("click", () => {

    opening.style.display = "none";

    hero.style.display = "flex";

    hero.scrollIntoView({
        behavior: "smooth"
    });

    music.volume = 0.5;

    music.play().catch(() => {});

});


// ==============================
// Countdown
// ==============================

const targetDate = new Date("July 10, 2026 00:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();

    const distance = targetDate - now;

    if (distance <= 0) {

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

        return;

    }

    document.getElementById("days").innerHTML =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("hours").innerHTML =
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("minutes").innerHTML =
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("seconds").innerHTML =
        Math.floor((distance % (1000 * 60)) / 1000);

}, 1000);


// ==============================
// Isi Surat
// ==============================

const message = `

Hai Indah ❤️

Selamat ulang tahun yang ke-21 yaa...

Semoga di umur yang baru ini,
semua doa dan impian kamu
pelan-pelan bisa terwujud.

Jujur...

Aku sempat bingung
mau kasih hadiah apa buat kamu😅.

Akhirnya aku memilih
membuat website kecil ini.

Mungkin hasilnya sederhana.

Tapi...

Setiap baris kodenya
aku tulis sendiri
khusus buat kamu.

Walaupun kita baru saling kenal
sekitar dua bulan.

Aku bersyukur
bisa mengenal seseorang
sebaik kamu.

Terima kasih ya...

Udah mau hadir
di hari-hariku.

Semoga kuliahnya lancar.

Semoga selalu sehat.

Semoga selalu bahagia.

Dan semoga
senyummu
nggak pernah hilang.

Happy Birthday ❤️

-Ricky

`;

let index = 0;
// ==============================
// Typing Effect
// ==============================

function typeWriter() {

    if (index < message.length) {

        typing.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter, 35);

    }

}


// ==============================
// Tombol Buka Surat
// ==============================

openBtn.addEventListener("click", () => {

    letter.style.display = "block";

    letter.scrollIntoView({

        behavior: "smooth"

    });

    if (index === 0) {

        typeWriter();

    }

    createHearts();

});


// ==============================
// Love Animation
// ==============================

function createHearts() {

    const icons = ["❤️","💕","💖","💗","💝"];

    for(let i = 0; i < 40; i++){

        const heart = document.createElement("div");

        heart.innerHTML = icons[Math.floor(Math.random()*icons.length)];

        heart.style.position = "fixed";

        heart.style.left = Math.random()*100 + "vw";

        heart.style.top = "-40px";

        heart.style.fontSize = (18 + Math.random()*20) + "px";

        heart.style.pointerEvents = "none";

        heart.style.zIndex = "9999";

        heart.style.transition = "6s linear";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.style.top = "110vh";

            heart.style.transform =
                `translateX(${Math.random()*200-100}px) rotate(360deg)`;

            heart.style.opacity = "0";

        },50);

        setTimeout(()=>{

            heart.remove();

        },6500);

    }

}


// ==============================
// Cursor Glow
// ==============================

const cursor = document.createElement("div");

cursor.classList.add("cursor");

document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{

    cursor.style.left = (e.clientX-10)+"px";

    cursor.style.top = (e.clientY-10)+"px";

});


// ==============================
// Scroll Animation
// ==============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0px)";

        }

    });

});

document.querySelectorAll("section").forEach(section=>{

    if(section.id !== "opening"){

        section.style.opacity="0";

        section.style.transform="translateY(60px)";

        section.style.transition="1s";

        observer.observe(section);

    }

});


// ==============================
// Console
// ==============================

console.clear();

console.log(
"%cHappy Birthday Indah ❤️",
"font-size:28px;color:#ff69b4;font-weight:bold;"
);

console.log("Website ini dibuat khusus oleh Ricky.");

console.log("Semoga kamu selalu bahagia.");

console.log("❤️");
