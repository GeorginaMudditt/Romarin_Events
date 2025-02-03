async function fetchData() {
  try {
    const response = await fetch("./src/data.json");
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

async function init() {
  const swiperWrapper = document.querySelector(".swiper-wrapper");

  const images = await fetchData();

  images.forEach((image) => {
    swiperWrapper.innerHTML += `
      <div class="swiper-slide">
        <img src="${image.src}" alt="${image.alt}" />
      </div>
    `;
  });

  const swiper = new Swiper(".mySwiper", {
    centeredSlidesBounds: true,
    height: 600,
    spaceBetween: 30,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
}

init();
