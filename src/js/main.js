/* eslint-disable no-inner-declarations */
$('[data-fancybox]').fancybox({
  touch: false,
  autoFocus: false,
  backFocus: false,
  closeExisting: true,
});

const maskPhone = () => {
  const maskedElements = [];
  const el = document.querySelectorAll('.masked');
  if (el.length > 0) {
    const mask = {mask: '+7 (000) 000-00-00'};
    el.forEach((item) => {
      maskedElements.push(new IMask(item, mask));
    });
  }
  $('.masked').click(function () {
    if ($(this).val() == '') $(this).val('+7 ');
  });
};

maskPhone();

$('.icon-copy').click(function(){
  const el = $('.header-contact__email a').text();
  const $tmp = $('<input>');
  $('body').append($tmp);
  $tmp.val(el).select();
  document.execCommand('copy');
  $tmp.remove();
});

const trendCarousel = '.trend-carousel';
if ($(trendCarousel).length) {
  const slider = new Swiper(trendCarousel, {
    observer: true,
    observeParents: true,
    watchSlidesProgress: true,
    spaceBetween: 10,
    slidesPerView: 3,
    loop: true,
    navigation: {
      nextEl: '.trend-next',
      prevEl: '.trend-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
}

const interiorCarousel = '.interior-carousel';
if ($(interiorCarousel).length) {
  const slider = new Swiper(interiorCarousel, {
    observer: true,
    observeParents: true,
    watchSlidesProgress: true,
    spaceBetween: 10,
    slidesPerView: 3,
    loop: true,
    navigation: {
      nextEl: '.interior-next',
      prevEl: '.interior-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
}

$('.item-tabs li').click(function(){
  $(this).siblings('li').removeClass('active');
  $(this).addClass('active');
});

const portfolioGallery = '.portfolio-gallery__main';
const portfolioGalleryThumb = '.portfolio-gallery__thumb';
if ($(portfolioGallery).length) {
  const thumb = new Swiper(portfolioGalleryThumb, {
    observer: true,
    observeParents: true,
    watchSlidesProgress: true,
    spaceBetween: 10,
    slidesPerView: 11,
    navigation: {
      nextEl: '.portfolio-next',
      prevEl: '.portfolio-prev',
    },
  });
  const slider = new Swiper(portfolioGallery, {
    observer: true,
    observeParents: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.portfolio-next',
      prevEl: '.portfolio-prev',
    },
    thumbs: {
      swiper: thumb,
    },
  });
}

$('.catalog-section__title .icon-arrow').click(function(){
  const main = $(this).closest('.catalog-section');
  main.toggleClass('hide');
  main.find('.grid').slideToggle(300);
  $(this).toggleClass('active');
});

$('.promo-list li').hover(function(){
  const id = $(this).attr('data-id');

  $('.promo-list li').removeClass('active');
  $(this).addClass('active');

  $('.promo-img img').removeClass('active');
  $('.promo-img img[data-id='+id+']').addClass('active');
});

$('.label-file input:file').change(function () {
  if (this.files && this.files.length >= 1) {
    const file = this.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      $('.label-file span').text('Файл прикреплен');
    },
    reader.readAsDataURL(file);
  } else {
    $('.label-file span').text('Выберите файл');
  }
});

$('.catalog-filter__title').click(function(){
  const thisDropdown = $(this).next();

  $('.catalog-filter__dropdown').slideUp(300);

  if (thisDropdown.is(':hidden')){
    thisDropdown.slideDown(300);
  }
});

$('.catalog-filter__subtitle').click(function(){
  $(this).next().slideToggle(300);
});

$('.catalog-filter__all').click(function(){
  const checkbox = $(this).closest('.catalog-filter__dropdown').find('input:checkbox');

  checkbox.prop('checked', true);
});

$('.catalog-filter__submit button').click(function(){
  const dropdown = $(this).closest('.catalog-filter__dropdown');

  dropdown.slideUp(300);

  if (dropdown.find('input:checkbox:checked').length > 0){
    dropdown.prev().addClass('active');
  } else {
    dropdown.prev().removeClass('active');
  }
});

$('.count').each(function (i, item) {
  let min = 1;
  const val = Number($('> input', item).val());
  $('> .count-btn__minus', item).click(function () {
    if (val >= min) return;
    min--;
    $('> input', item).val(min);
  });
  $('> .count-btn__plus', item).click(function () {
    min++;
    $('> input', item).val(min);
  });
});

card = document.querySelectorAll('.card-gallery');
if (card) {
  const second = new Swiper('.card-gallery__thumb', {
    spaceBetween: 20,
    slidesPerView: 5,
    direction: 'vertical',
    watchSlidesProgress: true,
    slideToClickedSlide: true,
  });

  const main = new Swiper('.card-gallery__main', {
    thumbs: {
      swiper: second,
    },
    navigation: {
      nextEl: '.card-gallery__arrow-next',
      prevEl: '.card-gallery__arrow-prev',
    },
  });

  function goToSlide(index){
    main.slideTo(index);
    second.slideTo(index);
  }
}

$('.card-label__color input').click(function(){
  const color = $(this).val();
  const colorThumb = $('.card-gallery__thumb').find('.swiper-slide[data-color='+ color +']').index();

  goToSlide(colorThumb);
});

tippy('[data-tippy-content]', {
  theme: 'thelight',
});

function declOfNum(number, words) {
  return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
}

$('.table-item').each(function(i){
  $('.order-count').text(i+1 + ' ' + declOfNum(i+1, ['товар', 'товара', 'товаров']));
});

$('.js-catalog').hover(function(){
  $('.header-catalog').slideDown(300);
  $(this).addClass('active');
});

$('.header-catalog__overlay').hover(function(){
  $('.header-catalog').slideUp(300);
  $('.js-catalog').removeClass('active');
});
