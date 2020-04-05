function showForm() {
	let moreBtn = document.querySelector('.more'),
	overlay = document.querySelector('.overlay'),
	closeBtn = document.querySelector('.popup-close');

	moreBtn.addEventListener('click', function() {
		overlay.style.display ='block';
		document.body.style.overflow = 'hidden';
	});

	closeBtn.addEventListener('click', function () {
		overlay.style.display='none';
		document.body.style.overflow = '';
		
	});
}

module.exports =  showForm; 