// slide show
document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('banner');
    const dotsContainer = document.querySelector('.banner-dots');
    const bannerImages = [
        './IMG/banner1.webp',
        './IMG/banner2.webp',
        './IMG/banner3.webp',
        './IMG/banner4.webp',
    ];
    let currentImageIndex = 0;
    let slideshowInterval;

    // tạo mảng ảnh
    bannerImages.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.style.opacity = index === 0 ? 1 : 0;
        banner.appendChild(img);
    });

    // bấm vào các dấu chấm để chuyển ảnh
    bannerImages.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => changeImage(index));
        dotsContainer.appendChild(dot);
    });

    // Function to change image
    function changeImage(index) {
        const images = banner.getElementsByTagName('img');
        const dots = dotsContainer.getElementsByClassName('dot');

        images[currentImageIndex].style.opacity = 0;
        dots[currentImageIndex].classList.remove('active');

        currentImageIndex = index;
        images[currentImageIndex].style.opacity = 1;
        dots[currentImageIndex].classList.add('active');
    }

    // Auto slideshow
    function startSlideshow() {
        slideshowInterval = setInterval(() => {
            const images = banner.getElementsByTagName('img');
            const dots = dotsContainer.getElementsByClassName('dot');

            images[currentImageIndex].style.opacity = 0;
            dots[currentImageIndex].classList.remove('active');

            currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
            images[currentImageIndex].style.opacity = 1;
            dots[currentImageIndex].classList.add('active');
        }, 5000); // 2000ms = 2 seconds
    }

    // bấm vào banner để chuyển ảnh
    banner.addEventListener('click', () => {
        clearInterval(slideshowInterval);
        const images = banner.getElementsByTagName('img');
        const dots = dotsContainer.getElementsByClassName('dot');

        images[currentImageIndex].style.opacity = 0;
        dots[currentImageIndex].classList.remove('active');

        currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
        images[currentImageIndex].style.opacity = 1;
        dots[currentImageIndex].classList.add('active');

        startSlideshow(); // Restart slideshow after manual click
    });

    // Start the slideshow
    startSlideshow();
});

document.addEventListener("DOMContentLoaded", function () {
  const cartButtons = document.querySelectorAll(".add-to-cart");

  cartButtons.forEach(button => {
    button.addEventListener("click", function () {
      // Create the notification
      const notification = document.createElement("div");
      notification.className = "cart-notification";
      notification.textContent = "Product added to cart successfully!";
      document.body.appendChild(notification);

      // Auto-remove after 2 seconds
      setTimeout(() => {
        notification.remove();
      }, 2000);
    });
  });
});
// Thêm sự kiện click vào các nút "Thêm vào giỏ hàng"