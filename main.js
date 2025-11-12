
  let currentSlide = 0;
  const slides = document.querySelectorAll(".banner-slider .slide");
  const totalSlides = slides.length;

  function showNextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add("active");
    document.querySelector(".banner-slider .slides").style.transform =
      `translateX(-${currentSlide * 100}%)`;
  }

  setInterval(showNextSlide, 4000); // đổi slide sau mỗi 4 giây

  
  window.addEventListener('scroll', function() {
    const callTop = document.getElementById('callTop');
    if (window.scrollY > 300) { // hiện khi cuộn xuống hơn 300px
      callTop.classList.add('show');
    } else {
      callTop.classList.remove('show');
    }
  });



