$(function () {

  const slide_con = new Swiper(".slide_con", {

    slidesPerView: 1,
    centeredSlides: true,
    speed: 1000,
    loop: true,
    
    // autoplay: {
    //   delay: 2000,
    //   disableOnIneraction: false,
    // },

    pagination: {
      el: ".swiper-pagination",
      type: "bullets", 
      clickable: true,
    },

  })

}); 
