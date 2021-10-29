$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active')
		$('body').toggleClass('lock')
	});
	$('li.phone .phone__btn').click(function(event) {
		$('.sub-phone,li.phone').toggleClass('active')
	});
	$('.tab1').click(function(event) {
		if ($('.tab2').hasClass('active')) {
			$('.tab2').removeClass('active')
			$('.tab1').addClass('active')
		}
	});
	$('.tab2').click(function(event) {
		if ($('.tab1').hasClass('active')) {
			$('.tab1').removeClass('active')
			$('.tab2').addClass('active')
		}
	})
});



ClassBtnSelect1 = '.deals'
ClassListSelect1 = '.deals__list'
ClassListSelectItem1 = '.deals__list-item'
ClassInputSelect1 = '.deal__input'

function CustomSelect(ClassBtnSelect, ClassListSelect, ClassListSelectItem, ClassInputSelect) {
	document.querySelector(ClassBtnSelect).addEventListener('click', function () {
	document.querySelector(ClassListSelect).classList.toggle('visible');
	document.querySelector(ClassBtnSelect).classList.toggle('open');
	});


	document.querySelectorAll(ClassListSelectItem).forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();
			document.querySelector(ClassBtnSelect).innerText = this.innerText;
			document.querySelector(ClassInputSelect).value = this.dataset.value;
			document.querySelector(ClassListSelect).classList.remove('visible');
			document.querySelector(ClassBtnSelect).classList.remove('open');
		})
	});

	document.addEventListener('click', function (e) {
		if (e.target !== document.querySelector(ClassBtnSelect)) {
			document.querySelector(ClassListSelect).classList.remove('visible');
			document.querySelector(ClassBtnSelect).classList.remove('open');
		}
	})
};

CustomSelect(ClassBtnSelect1, ClassListSelect1, ClassListSelectItem1, ClassListSelectItem1);