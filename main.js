
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



  // Hàm hiển thị toàn bộ dịch vụ có trong products[]
  function showAllServices() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    productsGrid.innerHTML = ''; // Xóa nội dung cũ

    products.forEach(product => {
      const productCard = document.createElement('a');
      productCard.href = `chitiet.html?id=${product.id}`;
      productCard.className = 'product-card';

      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="product-image">
        <div class="product-info">
          <h3 class="product-title">${product.title}</h3>
          <p class="product-description">${product.description}</p>
          <span class="product-price">Liên hệ ngay</span>
        </div>
      `;

      productsGrid.appendChild(productCard);
    });
  }

  // Gọi hàm khi trang load
  window.onload = showAllServices;



  




