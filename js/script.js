$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active')
		$('body').toggleClass('lock')
	});
	$('li.phone .phone__btn').click(function(event) {
		$('.sub-phone,li.phone').toggleClass('active')
	});
	$('.filter-tab1').click(function(event) {
		if ($('.filter-tab2').hasClass('active')) {
			$('.filter-tab2').removeClass('active')
			$('.filter-tab1').addClass('active')
			$('.dropdown__questions').removeClass('active')
			$('.main__filter').addClass('active')
		}
	});
	$('.filter-tab2').click(function(event) {
		if ($('.filter-tab1').hasClass('active')) {
			$('.filter-tab1').removeClass('active')
			$('.filter-tab2').addClass('active')
			$('.main__filter').removeClass('active')
			$('.dropdown__questions').addClass('active')
		}
	});
	$('.services-tab1').click(function(event) {
		if ($('.services-tab2').hasClass('active')) {
			$('.services-tab2').removeClass('active')
			$('.services-tab1').addClass('active')
			$('.services__list2').removeClass('active')
			$('.services__list1').addClass('active')
		}
	});
	$('.services-tab2').click(function(event) {
		if ($('.services-tab1').hasClass('active')) {
			$('.services-tab1').removeClass('active')
			$('.services-tab2').addClass('active')
			$('.services__list1').removeClass('active')
			$('.services__list2').addClass('active')
		}
	});
});



ClassBtnSelect1 = '.deals'
ClassListSelect1 = '.deals__list'
ClassListSelectItem1 = '.deals__list-item'
ClassInputSelect1 = '.deal__input'

ClassBtnCheckbox1 = '.downbtn__room'
ClassListCheckbox1 = '.room__list'
ClassListCheckboxItem1 = '.room__list-item'
ClassInputCheckbox1 = '.room__input'

ClassBtnInput1 = '.downbtn__square'
ClassListInput1 = '.square__list'
ClassListInputItem1 = '.square__list-item'
ClassBtnInput2 = '.downbtn__price'
ClassListInput2 = '.price__list'
ClassListInputItem2 = '.price__list-item'

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

function CustomCheckbox(ClassBtnCheckbox, ClassListCheckbox, ClassListCheckboxItem, ClassInputCheckbox) {
	document.querySelector(ClassBtnCheckbox).addEventListener('click', function () {
		document.querySelector(ClassListCheckbox).classList.toggle('visible');
		document.querySelector(ClassBtnCheckbox).classList.toggle('open');
	});

	document.querySelectorAll(ClassListCheckboxItem).forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();
			this.classList.toggle('select');
			name = ClassInputCheckbox + this.dataset.value;
			chkInput = document.querySelector(name);
			chkInput.checked = !chkInput.checked;
		})
	});

	document.addEventListener('click', function (e) {
		if (e.target !== document.querySelector(ClassBtnCheckbox)) {
			document.querySelector(ClassListCheckbox).classList.remove('visible');
			document.querySelector(ClassBtnCheckbox).classList.remove('open');
		}
	})
};

function CustomInput(ClassBtnInput, ClassListInput, ClassListInputItem) {
	document.querySelector(ClassBtnInput).addEventListener('click', function () {
		document.querySelector(ClassListInput).classList.toggle('visible');
		document.querySelector(ClassBtnInput).classList.toggle('open');
	});

	document.querySelectorAll(ClassListInputItem).forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();
		})
	});

	document.addEventListener('click', function (e) {
		if (e.target !== document.querySelector(ClassBtnInput)) {
			document.querySelector(ClassListInput).classList.remove('visible');
			document.querySelector(ClassBtnInput).classList.remove('open');
		}
	})
};

CustomSelect(ClassBtnSelect1, ClassListSelect1, ClassListSelectItem1, ClassListSelectItem1);
CustomCheckbox(ClassBtnCheckbox1, ClassListCheckbox1, ClassListCheckboxItem1, ClassInputCheckbox1);
CustomInput(ClassBtnInput1, ClassListInput1, ClassListInputItem1);
CustomInput(ClassBtnInput2, ClassListInput2, ClassListInputItem2);


