const img = document.getElementById('userPhoto');

const placeholder = document.getElementById('photoPlaceholder');


img.onload = function() {

  img.style.display = 'block';

  placeholder.style.display = 'none';

};


img.onerror = function() {

  img.style.display = 'none';

  placeholder.style.display = 'flex';

};