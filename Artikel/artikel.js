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

// Data artikel (bisa diganti dengan data dari API)
const artikelData = {
    1: {
        judul: "Mengenal Keunikan Satwa Nokturnal",
        tanggal: "12 April 2023",
        kategori: "Satwa",
        gambar: "/gambar/hewan/musangmerah.jpg",
        isi: `
            <p class="mb-4">Satwa nokturnal adalah hewan yang aktif pada malam hari dan beristirahat di siang hari. Adaptasi ini membantu mereka menghindari predator, mengurangi persaingan untuk mendapatkan makanan, dan mengatasi suhu panas di siang hari.</p>
            
            <p class="mb-4">Beberapa adaptasi unik yang dimiliki satwa nokturnal termasuk:</p>
            
            <ul class="list-disc pl-5 mb-4">
                <li class="mb-2">Penglihatan yang sangat baik dalam kondisi cahaya rendah</li>
                <li class="mb-2">Pendengaran yang tajam untuk mendeteksi mangsa atau predator</li>
                <li class="mb-2">Indra penciuman yang berkembang baik untuk navigasi dan mencari makan</li>
                <li class="mb-2">Kemampuan ekolokasi pada beberapa spesies seperti kelelawar</li>
            </ul>
            
            <p class="mb-4">Contoh satwa nokturnal yang menarik untuk dipelajari termasuk burung hantu, kelelawar, rubah, musang, dan berbagai jenis serangga. Masing-masing memiliki strategi unik untuk bertahan hidup di malam hari.</p>
            
            <p>Dengan memahami kehidupan satwa nokturnal, kita dapat lebih menghargai keanekaragaman hayati dan pentingnya menjaga keseimbangan ekosistem baik siang maupun malam hari.</p>
        `
    },
    2: {
        judul: "5 Tumbuhan Langka Indonesia yang Perlu Dilestarikan",
        tanggal: "5 April 2023",
        kategori: "Tumbuhan",
        gambar: "/gambar/hewan/musangmerah.jpg",
        isi: `
            <p class="mb-4">Indonesia dikenal sebagai salah satu negara dengan keanekaragaman hayati tertinggi di dunia. Sayangnya, banyak tumbuhan asli Indonesia yang kini terancam punah akibat perusakan habitat, perubahan iklim, dan eksploitasi berlebihan.</p>
            
            <p class="mb-4">Berikut adalah 5 tumbuhan langka Indonesia yang perlu mendapat perhatian khusus:</p>
            
            <h3 class="font-bold text-lg mt-4 mb-2">1. Rafflesia Arnoldii</h3>
            <p class="mb-4">Dikenal sebagai bunga terbesar di dunia, Rafflesia Arnoldii hanya ditemukan di hutan Sumatera dan Kalimantan. Bunga ini merupakan parasit yang hidup di dalam tumbuhan inangnya dan mekar hanya selama 5-7 hari.</p>
            
            <h3 class="font-bold text-lg mt-4 mb-2">2. Kantong Semar (Nepenthes)</h3>
            <p class="mb-4">Tanaman karnivora ini memiliki bentuk yang unik dengan kantong sebagai perangkap serangga. Beberapa spesies Nepenthes endemik Indonesia seperti Nepenthes clipeata terancam punah.</p>
            
            <h3 class="font-bold text-lg mt-4 mb-2">3. Pohon Ulin (Eusideroxylon zwageri)</h3>
            <p class="mb-4">Disebut juga kayu besi, pohon ulin memiliki kayu yang sangat kuat dan tahan lama. Pohon ini tumbuh sangat lambat dan butuh puluhan tahun untuk mencapai ukuran dewasa.</p>
            
            <h3 class="font-bold text-lg mt-4 mb-2">4. Edelweiss Jawa (Anaphalis javanica)</h3>
            <p class="mb-4">Bunga abadi yang hanya tumbuh di daerah pegunungan tinggi. Meski dilindungi, masih banyak terjadi pemetikan liar yang mengancam populasinya.</p>
            
            <h3 class="font-bold text-lg mt-4 mb-2">5. Cendana (Santalum album)</h3>
            <p class="mb-4">Tanaman penghasil kayu dan minyak wangi yang bernilai tinggi. Eksploitasi berlebihan membuat populasi cendana menurun drastis.</p>
            
            <p class="mt-4">Pelestarian tumbuhan langka membutuhkan kesadaran dan partisipasi semua pihak. Dengan menjaga kelestariannya, kita turut melestarikan warisan alam Indonesia untuk generasi mendatang.</p>
        `
    },
    // Tambahkan data untuk artikel lainnya (3-6) dengan format yang sama
    3: {
        judul: "10 Tips Fotografi Alam untuk Pemula",
        tanggal: "28 Maret 2023",
        kategori: "Tips Fotografi",
        gambar: "/gambar/hewan/musangmerah.jpg",
        isi: `<p>Isi artikel tentang tips fotografi...</p>
                
        `
    },
    4: {
        judul: "Misteri di Balik Keindahan Aurora Borealis",
        tanggal: "20 Maret 2023",
        kategori: "Fenomena Alam",
        gambar: "/gambar/hewan/musangmerah.jpg",
        isi: `<p>Isi artikel tentang aurora borealis...</p>`
    },
    5: {
        judul: "Fenomena Migrasi Burung: Perjalanan Epik Mengelilingi Dunia",
        tanggal: "15 Maret 2023",
        kategori: "Satwa",
        gambar: "/gambar/hewan/musangmerah.jpg",
        isi: `<p>Isi artikel tentang migrasi burung...</p>`
    },
    6: {
        judul: "Perlengkapan Esensial untuk Fotografi Alam Liar",
        tanggal: "8 Maret 2023",
        kategori: "Tips Fotografi",
        gambar: "/gambar/hewan/musangmerah.jpg",
        isi: `<p>Isi artikel tentang perlengkapan fotografi...</p>`
    },
    7: {
        judul: "Perlengkapan Esensial untuk Fotografi Alam Liar",
        tanggal: "8 Maret 2023",
        kategori: "Tips Fotografi",
        gambar: "/gambar/hewan/musangmerah.jpg",
        isi: `<p>Isi artikel tentang perlengkapan fotografi...</p>`
    },
    8: {
        judul: "Perlengkapan Esensial untuk Fotografi Alam Liar",
        tanggal: "8 Maret 2023",
        kategori: "Tips Fotografi",
        gambar: "/gambar/hewan/musangmerah.jpg",
        isi: `<p>Isi artikel tentang perlengkapan fotografi...</p>`
    },
    9: {
        judul: "Perlengkapan Esensial untuk Fotografi Alam Liar",
        tanggal: "8 Maret 2023",
        kategori: "Tips Fotografi",
        gambar: "/gambar/hewan/musangmerah.jpg",
        isi: `<p>Isi artikel tentang perlengkapan fotografi...</p>`
    }
};

// Fungsi klik untuk membuka artikel
function bacaArtikel(id) {
    const artikel = artikelData[id];
    if (!artikel) return;
    
    document.getElementById('modal-artikel-judul').innerHTML = artikel.judul;
    document.getElementById('modal-artikel-tanggal').innerHTML = artikel.tanggal;
    document.getElementById('modal-artikel-kategori').innerHTML = artikel.kategori;
    document.getElementById('modal-artikel-gambar').src = artikel.gambar;
    document.getElementById('modal-artikel-isi').innerHTML = artikel.isi;
    
    document.getElementById('modal-artikel').classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Mencegah scroll latar belakang
  }

// Fungsi untuk menutup modal artikel
  function tutupModalArtikel() {
    document.getElementById('modal-artikel').classList.add('hidden');
    document.body.style.overflow = 'auto'; // Mengembalikan scroll
  }

  document.addEventListener("click", (e) => {
    const closeModal = document.querySelector("#modal-artikel");
    if (e.target === closeModal) {
     tutupModalArtikel();
    }
  })

// Filter artikel berdasarkan kategori
  document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const artikelItems = document.querySelectorAll('.artikel-item');
    const loadMoreBtn = document.getElementById('load-more');

    let currentItems = 3; // Jumlah artikel awal yang ditampilkan
    let activeFilter = 'all'; // Filter aktif default
    const totalItems = artikelItems.length;

  // Fungsi untuk menampilkan artikel sesuai filter dan jumlah currentItems
  function updateArtikelDisplay() {
    let visibleCount = 0;

    artikelItems.forEach(item => {
      const kategori = item.getAttribute('data-kategori');

      if (activeFilter === 'all' || kategori === activeFilter) {
        if (visibleCount < currentItems) {
          item.style.display = 'block';
          visibleCount++;
        } else {
          item.style.display = 'none';
        }
      } else {
        item.style.display = 'none';
      }
    });

    // Cek apakah tombol Load More harus disembunyikan
    const filteredTotal = Array.from(artikelItems).filter(item => activeFilter === 'all' || item.getAttribute('data-kategori') === activeFilter).length;
    if (currentItems >= filteredTotal) {
      loadMoreBtn.style.display = 'none';
    } else {
      loadMoreBtn.style.display = 'block';
    }
  }

  // Inisialisasi tampilan awal
  updateArtikelDisplay();

  // Event filter button
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active', 'bg-stone-700'));
      this.classList.add('active', 'bg-stone-700');
      filterButtons.forEach(btn => {
        if (!btn.classList.contains('active')) {
          btn.classList.add('bg-stone-500');
        }
      });

      // Update filter aktif
      activeFilter = this.getAttribute('data-filter');
      currentItems = 3; // Reset jumlah artikel ditampilkan saat filter berubah

      // Update tampilan artikel
      updateArtikelDisplay();
    });
  });

  // Event Load More
  loadMoreBtn.addEventListener('click', function() {
    currentItems += 3; // Tambah jumlah artikel ditampilkan
    updateArtikelDisplay();
  });
  

});
