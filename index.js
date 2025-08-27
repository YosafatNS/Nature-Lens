// FONT FAMILY
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        bebasneue: ['Bebas Neue', 'cursive'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      }
    }
  }
}





// membuat const untuk infodata = berisi data [galeri] dengan variabel desc, img dan galeri itu sendiri sebagai (primary key)
const infoData = {
  1: {
    title:`<h3 class="text-black text-center font-bold text-2xl mb-2">Musang</h3>`,
    desc: `
      Musang adalah hewan unik yang dikenal dengan kecerdasan dan kelincahannya.
      Aktif di malam hari, musang memiliki indera penciuman tajam.      
    `,
    img: "/gambar/hewan/musangmerah.jpg"
  },
  2: {
    title:`<h3 class="text-center text-black font-bold text-2xl mb-2">Rafflesia</h3>`,
    desc: `
      Bunga Rafflesia dikenal sebagai salah satu bunga terbesar di dunia dengan ukuran luar biasa
      Aromanya khas dan tajam, sering disamakan dengan bau bangkai.   
    `,
    img: "/gambar/tumbuhan/rafflesia.jpeg"
  },
  3: {
    title:`<h3 class="text-center text-black font-bold text-2xl mb-2">Aurora Borealis</h3>`,
    desc: `
      Aurora Borealis, atau cahaya utara, adalah fenomena alam menakjubkan di langit kutub utara.
      Fenomena ini terjadi akibat interaksi partikel bermuatan dari matahari dengan atmosfer bumi. 
     `,
    img: "/gambar/alam/auroraborealis.jpg"
  }
};


// mengambil fungsi showInfo di HTML dan  diisi dengan fungsi galeri 
function showInfo(data_ke) {
  const infoModalData = infoData [data_ke];
  if(!infoModalData) return;
  // ini isi dari fungsi galeri
  document.getElementById("modalTitle").innerHTML = infoModalData.title;
  document.getElementById("modalContent").innerHTML = infoModalData.desc;
  document.getElementById("modalImage").src = infoModalData.img;
  document.getElementById("infoModal").classList.remove("hidden");
  document.getElementById("infoModal").classList.add("flex");
}

function closeModal() {
  document.getElementById("infoModal").classList.remove("flex");
  document.getElementById("infoModal").classList.add("hidden");
}

const infoModal = document.getElementById("infoModal");
infoModal.addEventListener("click", (e) => {
  if (e.target === infoModal) {
    infoModal.classList.add("hidden");
    infoModal.classList.remove("flex");
  }
});
  // END MODAL












