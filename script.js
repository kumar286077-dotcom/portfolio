 /* =========================
   PHOTO
========================= */

const img =
  document.getElementById('userPhoto');

const placeholder =
  document.getElementById('photoPlaceholder');


img.onload = function () {

  img.style.display = 'block';

  placeholder.style.display = 'none';

};


img.onerror = function () {

  img.style.display = 'none';

  placeholder.style.display = 'flex';

};



/* =========================
   SIDE MENU
========================= */

const menuBtn =
  document.getElementById('menuBtn');

const closeBtn =
  document.getElementById('closeBtn');

const sideMenu =
  document.getElementById('sideMenu');

const menuOverlay =
  document.getElementById('menuOverlay');


menuBtn.addEventListener('click', function () {

  sideMenu.classList.add('active');

  menuOverlay.classList.add('active');

});


closeBtn.addEventListener('click', function () {

  sideMenu.classList.remove('active');

  menuOverlay.classList.remove('active');

});


menuOverlay.addEventListener('click', function () {

  sideMenu.classList.remove('active');

  menuOverlay.classList.remove('active');

});



/* =========================
   PHOTO FULL SCREEN
========================= */

const photoViewer =
  document.getElementById('photoViewer');

const photoClose =
  document.getElementById('photoClose');


img.addEventListener('click', function () {

  photoViewer.classList.add('active');

});


photoClose.addEventListener('click', function () {

  photoViewer.classList.remove('active');

});


photoViewer.addEventListener('click', function (event) {

  if (event.target === photoViewer) {

    photoViewer.classList.remove('active');

  }

});



/* =========================
   HEADER BADGES
========================= */

const badges =
  document.querySelectorAll('.badge');

const infoModal =
  document.getElementById('infoModal');

const infoClose =
  document.getElementById('infoClose');

const infoTitle =
  document.getElementById('infoTitle');

const infoContent =
  document.getElementById('infoContent');


badges.forEach(function (badge) {

  badge.addEventListener('click', function () {

    infoTitle.textContent =
      badge.dataset.title;

    infoContent.textContent =
      badge.dataset.content;

    infoModal.classList.add('active');

  });

});


infoClose.addEventListener('click', function () {

  infoModal.classList.remove('active');

});


infoModal.addEventListener('click', function (event) {

  if (event.target === infoModal) {

    infoModal.classList.remove('active');

  }

});



/* =========================
   EMAIL COMPOSER
========================= */

const openContactBtn =
  document.getElementById('openContactBtn');

const contactModal =
  document.getElementById('contactModal');

const contactClose =
  document.getElementById('contactClose');


openContactBtn.addEventListener('click', function () {

  contactModal.classList.add('active');

});


contactClose.addEventListener('click', function () {

  contactModal.classList.remove('active');

});


contactModal.addEventListener('click', function (event) {

  if (event.target === contactModal) {

    contactModal.classList.remove('active');

  }

});



/* =========================
   ESC KEY
========================= */

document.addEventListener('keydown', function (event) {

  if (event.key === 'Escape') {

    photoViewer.classList.remove('active');

    infoModal.classList.remove('active');

    contactModal.classList.remove('active');

    sideMenu.classList.remove('active');

    menuOverlay.classList.remove('active');

  }

});