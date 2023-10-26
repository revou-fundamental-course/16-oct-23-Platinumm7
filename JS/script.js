const nama1 = document.getElementById('nama');
const outnama1 = document.getElementById('out-nama1');

const tl1 = document.getElementById('tl');
const outtl1 = document.getElementById('out-tl1');

const jk = document.getElementsByName('kelamin');
const outjk1 = document.getElementById('out-jk1');

const pesan1 = document.getElementById('pesan');
const outpesan1 = document.getElementById('out-pesan1');


const btn1 = document.getElementById('btn1');
function tampilkan() {
   outnama1.innerHTML= nama1.value;
   outtl1.innerHTML= tl1.value;
   outjk1.innerHTML= jk.value;
   outpesan1.innerHTML = pesan1.value;
}

btn1.addEventListener('click', tampilkan);