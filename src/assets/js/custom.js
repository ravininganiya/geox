const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    document.querySelector('.header-inner_list').classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    document.querySelector('.header-inner_list').classList.remove('open');
    menuOpen = false;
  }
});

var swiper = new Swiper('.swiper-promo-2', {
  slidesPerView: 4,
pagination: {
  el: '.swiper-pagination',
},
breakpoints: {
  320: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  480: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 50,
  },
}
});

var swiper = new Swiper('.swiper-containers', {
  slidesPerView: 3,
pagination: {
  el: '.swiper-pagination',
},
breakpoints: {
  320: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  480: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 50,
  },
}
});
var swiper = new Swiper('.pro-profile_slide-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

function clickfunction(cache_fun){
  var cach_data = cache_fun;
  if($('#'+cach_data+'.pro-profile_nav')){
      $('.collapse_box').removeClass('show');
      $('.'+cach_data+'.collapse_box').addClass('show');
  }else{
      $('.'+cach_data+'.collapse_box').removeClass('show');
  }
};