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

// card = document.querySelectorAll('.card');
// if(card){
// 	let second = new Swiper(".card-slider__second", {
// 		spaceBetween: 15,
// 		slidesPerView: 3,
// 		freeMode: true,
// 		watchSlidesProgress: true,
// 		direction: "vertical",
// 		breakpoints: {
// 			475: {
// 				slidesPerView: 5
// 			}
// 		}
// 	});

// 	let main = new Swiper(".card-slider__main", {
// 		thumbs: {
// 			swiper: second,
// 		},
// 	});
// }