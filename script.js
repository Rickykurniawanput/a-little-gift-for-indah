// =========================================
// A Little Gift For Indah ❤️
// By Ricky
// =========================================

// Loading Screen
window.addEventListener("load", () => {

    setTimeout(() => {

        const loading = document.getElementById("loading");

        loading.style.opacity = "0";

        setTimeout(() => {

            loading.style.display = "none";

        }, 1000);

    }, 2800);

});

// ===============================
// Countdown
// ===============================

const birthday = new Date("July 10, 2026 00:00:00").getTime();

const countdown = setInterval(() => {

    const now = new Date().getTime();

    const distance = birthday - now;

    if(distance < 0){

        clearInterval(countdown);

        document.querySelector(".countdown-box").innerHTML=`

            <h2 style="width:100%;
            color:#ff8fd2;">
            🎉 Happy Birthday Indah ❤️
            </h2>

        `;

        return;

    }

    const days = Math.floor(distance / (1000*60*60*24));

    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

    const seconds = Math.floor((distance%(1000*60))/1000);

    document.getElementById("days").innerHTML=days;
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;

},1000);

// ===============================
// Surat
// ===============================

const text = `

Hai Indah ❤️

Selamat ulang tahun yaa.

Hari ini umur kamu genap 21 tahun.

Jujur aja...

Aku sempat bingung mau kasih hadiah apa.

Karena menurutku...

Hadiah paling indah bukan selalu sesuatu yang mahal.

Akhirnya aku memutuskan membuat website kecil ini.

Mungkin sederhana.

Tapi setiap baris kodenya aku tulis khusus buat kamu.

Terima kasih ya...

Walaupun kita baru kenal sekitar dua bulan.

Dan semuanya berawal dari Telegram.

Aku senang bisa mengenal seseorang seperti kamu.

Semoga di umurmu yang ke-21 ini,

✨ Kuliahnya lancar.

✨ Semua impianmu tercapai.

✨ Selalu sehat.

✨ Selalu bahagia.

Terima kasih sudah hadir di hari-hariku.

Semoga website kecil ini bisa bikin kamu tersenyum.

Happy Birthday ❤️

-Ricky

`;

const typing=document.getElementById("typing");

let i=0;

function typeWriter(){

    if(i<text.length){

        typing.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter,35);

    }

}

// ===============================
// Button
// ===============================

const btn=document.getElementById("openBtn");

const letter=document.getElementById("letterSection");

btn.addEventListener("click",()=>{

    const audio=document.getElementById("clickSound");

    if(audio){

        audio.play().catch(()=>{});

    }

    letter.style.display="block";

    letter.scrollIntoView({

        behavior:"smooth"

    });

    if(i===0){

        typeWriter();

    }

    createHearts();

});

// ===============================
// Floating Hearts
// ===============================

function createHearts(){

    for(let x=0;x<40;x++){

        let heart=document.createElement("div");

        heart.innerHTML=["❤️","💖","💕","💗","💜"][Math.floor(Math.random()*5)];

        heart.style.position="fixed";

        heart.style.left=Math.random()*100+"vw";

        heart.style.top="-20px";

        heart.style.fontSize=(18+Math.random()*20)+"px";

        heart.style.opacity=Math.random();

        heart.style.transition=(4+Math.random()*3)+"s linear";

        heart.style.pointerEvents="none";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.style.top="110vh";

            heart.style.transform="rotate(360deg)";

        },50);

        setTimeout(()=>{

            heart.remove();

        },7000);

    }

}

// ===============================
// Cursor Glow
// ===============================

const cursor=document.createElement("div");

cursor.className="cursor";

document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{

    cursor.style.left=e.clientX-10+"px";

    cursor.style.top=e.clientY-10+"px";

});

// ===============================
// Console Message
// ===============================

console.clear();

console.log("%c❤️ A Little Gift For Indah ❤️","font-size:24px;color:pink;font-weight:bold;");

console.log("Hai Indah 👋");

console.log("Kalau kamu lagi buka Inspect...");

console.log("Aku cuma mau bilang...");

console.log("Selamat Ulang Tahun ❤️");

console.log("Semoga selalu bahagia.");

console.log("- Ricky");

// ===============================
// Keyboard Easter Egg
// ===============================

document.addEventListener("keydown",(e)=>{

    if(e.key.toLowerCase()=="i"){

        alert("❤️ I Love You ❤️");

    }

});

// ===============================
// Smooth Reveal Animation
// ===============================

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0px)";

        }

    });

});

document.querySelectorAll("section").forEach(sec=>{

    sec.style.opacity="0";

    sec.style.transform="translateY(80px)";

    sec.style.transition="1s";

    observer.observe(sec);

});
