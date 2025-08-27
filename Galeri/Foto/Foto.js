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


// MODAL FOTO
const FotoModal = document.querySelector("#FotoModal");
const Galeri = document.querySelectorAll("#Galeri img");
const ModalImage = document.querySelector("#ModalImage");
const ModalTitle = document.querySelector("#ModalTitle");
const ModalDesc = document.querySelector("#ModalDesc");

Galeri.forEach((img) => {
    img.addEventListener("click", () => {
        FotoModal.classList.remove("hidden");
        ModalImage.src = img.src;
        ModalImage.alt = img.alt;
        
        ModalTitle.textContent = img.getAttribute("data-title") || "Tidak ada";
        ModalDesc.textContent = img.getAttribute("data-desc") || "Tidak ada";
        
    })
})

function closeModal() {
    FotoModal.classList.add("hidden");
} 

FotoModal.addEventListener("click", (e) => {
    if (FotoModal === e.target) {
        closeModal();
    }
})
