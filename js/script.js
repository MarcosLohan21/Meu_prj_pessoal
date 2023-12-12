window.addEventListener('scroll', function() {
    var image = document.querySelector('.moto');
    var imagePosition = image.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
  
    if (imagePosition < windowHeight * 0.75) {
      image.classList.add('visible');
    }
  });

window.addEventListener('scroll', function() {
    var images = document.querySelectorAll('.logo');
    images.forEach(function(image) {
    var imagePosition = image.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

      if (imagePosition < windowHeight * 0.75) {
        image.classList.add('visible');
    }
    });
});