let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


document.addEventListener('DOMContentLoaded', function() {
        const track = document.getElementById('galleryTrack');

        let isDown = false;
        let startX;
        let scrollLeft;

        // Khi nhấn chuột xuống
        track.addEventListener('mousedown', (e) => {
            isDown = true;
            track.classList.add('active');
            startX = e.pageX - track.offsetLeft;
            scrollLeft = track.scrollLeft;
            track.style.scrollBehavior = 'auto'; // Tắt smooth để kéo thật tay hơn
        });

        // Khi chuột rời khỏi vùng gallery
        track.addEventListener('mouseleave', () => {
            isDown = false;
        });

        // Khi thả chuột ra
        track.addEventListener('mouseup', () => {
            isDown = false;
            track.style.scrollBehavior = 'smooth';
        });

        // Khi đang di chuyển chuột
        track.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - track.offsetLeft;
            const walk = (x - startX) * 1.5; // Tốc độ kéo
            track.scrollLeft = scrollLeft - walk;
        });
    });