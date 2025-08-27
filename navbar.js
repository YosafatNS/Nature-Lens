// Dropdown Galeri
const dropdownButton = document.getElementById("dropdownButton");
const dropdownGaleri = document.getElementById("dropdownGaleri");

dropdownButton.addEventListener("click", () => {
  const isOpen = dropdownGaleri.classList.contains("opacity-100");

  if (isOpen) {
    // Tutup dropdown
    dropdownGaleri.classList.remove("opacity-100");
    dropdownGaleri.classList.add("opacity-0", "pointer-events-none");
  } else {
    // Buka dropdown
    dropdownGaleri.classList.remove("opacity-0", "pointer-events-none");
    dropdownGaleri.classList.add("opacity-100");
  }
});

const dropdownFoto = document.getElementById("dropdownFoto");
const menuFoto = document.getElementById("menuFoto");
const dropdownVideo = document.getElementById("dropdownVideo");
const menuVideo = document.getElementById("menuVideo");

dropdownFoto.addEventListener("click", (e) => {
  e.preventDefault();
  const isFotoOpen = menuFoto.classList.contains("opacity-100");

  const isVideoOpen = menuVideo.classList.contains("opacity-100");
  if (isVideoOpen) {
    menuVideo.classList.remove("opacity-100");
    menuVideo.classList.add("opacity-0", "pointer-events-none");
  }
  if (isFotoOpen) {
    // Tutup dropleft
    menuFoto.classList.remove("opacity-100");
    menuFoto.classList.add("opacity-0",  "pointer-events-none");
  } else {
    // Buka dropleft
    menuFoto.classList.remove("opacity-0",  "pointer-events-none");
    menuFoto.classList.add("opacity-100");
  }
  return;
});

dropdownVideo.addEventListener("click", (e) => {
  e.preventDefault();
  const isVideoOpen = menuVideo.classList.contains("opacity-100");

  const isFotoOpen = menuFoto.classList.contains("opacity-100");
  if (isFotoOpen) {
    menuFoto.classList.remove("opacity-100");
    menuFoto.classList.add("opacity-0", "pointer-events-none");
  }
  if (isVideoOpen) {
    // Tutup dropdown
    menuVideo.classList.remove("opacity-100");
    menuVideo.classList.add("opacity-0", "pointer-events-none");
  } else {
    // Buka dropdown
    menuVideo.classList.remove("opacity-0", "pointer-events-none");
    menuVideo.classList.add("opacity-100");
  }
  return;
});

// Tutup jika klik di luar dropdown Hewan
document.addEventListener("click", (e) => {
  if (!dropdownButton.contains(e.target) && !dropdownGaleri.contains(e.target)) {
    dropdownGaleri.classList.remove("opacity-100");
    dropdownGaleri.classList.add("opacity-0", "pointer-events-none");
  }
  if (!dropdownFoto.contains(e.target) && !menuFoto.contains(e.target)) {
    menuFoto.classList.remove("opacity-100");
    menuFoto.classList.add("opacity-0", "pointer-events-none");  
  }
  if (!dropdownVideo.contains(e.target) && !menuVideo.contains(e.target)) {
    menuVideo.classList.remove("opacity-100");
    menuVideo.classList.add("opacity-0",  "pointer-events-none");
  }
});


// MENU BURGER
const MenuBurger = document.querySelector("#MenuBurger");
const BurgerButton = document.querySelector("#BurgerButton");

BurgerButton.addEventListener("click", (e) => {
  e.stopPropagation();
  const isOpen = MenuBurger.classList.contains("opacity-100");

  if(isOpen) {
    MenuBurger.classList.remove("opacity-100");
    MenuBurger.classList.add("opacity-0","pointer-events-none"); 
  }else{
    MenuBurger.classList.remove("opacity-0","pointer-events-none");
    MenuBurger.classList.add("opacity-100");
  }
})

// MOBILE GALERI
const GaleriBurger = document.querySelector("#GaleriBurger");
const MenuGaleriBurger = document.querySelector("#MenuGaleriBurger");

GaleriBurger.addEventListener("click", (e) => {
  e.preventDefault();
  const isOpen = MenuGaleriBurger.classList.contains("opacity-100");

  if(isOpen){
    MenuGaleriBurger.classList.remove("opacity-100");
    MenuGaleriBurger.classList.add("opacity-0","pointer-events-none");
  } else {
    MenuGaleriBurger.classList.remove("opacity-0","pointer-events-none");
    MenuGaleriBurger.classList.add("opacity-100");
  }
})

const FotoBurger = document.querySelector("#FotoBurger");
const MenuFotoBurger = document.querySelector("#MenuFotoBurger");
const VideoBurger = document.querySelector("#VideoBurger");
const MenuVideoBurger = document.querySelector("#MenuVideoBurger");

FotoBurger.addEventListener("click", (e) => {
  e.preventDefault();
  const isFotoOpen = MenuFotoBurger.classList.contains("opacity-100");
  const isVideoOpen = MenuVideoBurger.classList.contains("opacity-100");

  if(isFotoOpen) {
    MenuFotoBurger.classList.remove("opacity-100");
    MenuFotoBurger.classList.add("opacity-0","pointer-events-none");
  } 
  if(isVideoOpen) {
    MenuVideoBurger.classList.remove("opacity-100");
    MenuVideoBurger.classList.add("opacity-0","pointer-events-none");
  } else {
    MenuVideoBurger.classList.remove("opacity-0","pointer-events-none");
    MenuVideoBurger.classList.add("opacity-100")
  }
})

VideoBurger.addEventListener("click", (e) => { 
  e.preventDefault();
  const isVideoOpen = MenuVideoBurger.classList.contains("opacity-100");
  const isFotoOpen = MenuFotoBurger.classList.contains("opacity-100");

  if (isVideoOpen) {
    MenuVideoBurger.classList.remove("opacity-100");
    MenuVideoBurger.classList.add("opacity-0","pointer-events-none");
  }
  if (isFotoOpen) {
    MenuFotoBurger.classList.remove("opacity-100");
    MenuFotoBurger.classList.add("opacity-0","pointer-events-none");
  } 
  else {
    MenuFotoBurger.classList.remove("opacity-0");
    MenuFotoBurger.classList.add("opacity-0","pointer-events-none");
  }
})

document.addEventListener("click", (e) => {
  if(!MenuBurger.contains(e.target) && !BurgerButton.contains(e.target)) {
    MenuBurger.classList.remove("opacity-100");
    MenuBurger.classList.add("opacity-0","pointer-events-none");
  }
  if(!GaleriBurger.contains(e.target) && !MenuGaleriBurger.contains(e.target)) {
    MenuGaleriBurger.classList.remove("opacity-100");
    MenuGaleriBurger.classList.add("opacity-0","pointer-events-none");
  }
  if(!FotoBurger.contains(e.target) && !MenuFotoBurger.contains(e.target)) {
    MenuFotoBurger.classList.remove("opacity-100");
    MenuFotoBurger.classList.add("opacity-0","pointer-events-none");
  }
  if(!VideoBurger.contains(e.target) && !MenuVideoBurger.contains(e.target)) {
    MenuVideoBurger.classList.remove("opacity-100");
    MenuVideoBurger.classList.add("opacity-0","pointer-events-none");
  }
});