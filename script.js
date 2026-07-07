function bukaPesan(){

document.getElementById("pesan").style.display="block";

confetti();

}

function confetti(){

for(let i=0;i<150;i++){

let love=document.createElement("div");

love.innerHTML="❤️";

love.style.position="fixed";

love.style.left=Math.random()*100+"vw";

love.style.top="-20px";

love.style.fontSize=Math.random()*25+15+"px";

love.style.animation="jatuh "+(Math.random()*3+2)+"s linear";

document.body.appendChild(love);

setTimeout(()=>{

love.remove();

},5000);

}

}

let style=document.createElement("style");

style.innerHTML=`

@keyframes jatuh{

to{

transform:translateY(110vh) rotate(360deg);

}

}

`;

document.head.appendChild(style);

const ulangTahun=new Date("July 10, 2026 00:00:00").getTime();

setInterval(()=>{

let sekarang=new Date().getTime();

let selisih=ulangTahun-sekarang;

let hari=Math.floor(selisih/(1000*60*60*24));

let jam=Math.floor((selisih%(1000*60*60*24))/(1000*60*60));

let menit=Math.floor((selisih%(1000*60*60))/60000);

let detik=Math.floor((selisih%(60000))/1000);

document.getElementById("countdown").innerHTML=

"Menuju ulang tahun: "+hari+" Hari "+jam+" Jam "+menit+" Menit "+detik+" Detik";

},1000);