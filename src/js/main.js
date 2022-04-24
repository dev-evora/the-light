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
    spaceBetween: 30,
    slidesPerView: 4,
    loop: true,
    navigation: {
      nextEl: '.trend-next',
      prevEl: '.trend-prev',
    },
  });
}

const interiorCarousel = '.interior-carousel';
if ($(interiorCarousel).length) {
  const slider = new Swiper(interiorCarousel, {
    observer: true,
    observeParents: true,
    watchSlidesProgress: true,
    spaceBetween: 30,
    slidesPerView: 4,
    loop: true,
    navigation: {
      nextEl: '.interior-next',
      prevEl: '.interior-prev',
    },
  });
}

$('.item-tabs li').click(function(){
  $(this).siblings('li').removeClass('active');
  $(this).addClass('active');
});

$('.item-tabs li').first().click();
