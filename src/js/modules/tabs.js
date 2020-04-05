function tabs() {
	let info = document.querySelector('.info-header') ,
	tabs = document.querySelectorAll('.info-header-tab'),
	tabsContent = document.querySelectorAll('.info-tabcontent');

	tabsContent.forEach( function(e) {
			e.classList.add('hide');
	});


	function show(i = 0) {
		tabsContent.forEach( function(e) {
			e.classList.remove('show');
		});
		
		tabsContent[i].classList.add('show');
		}

	show();

	info.addEventListener('click' , function(e) {
		let targetE = e.target;
		
		if (targetE && targetE.classList.contains('info-header-tab')) {
			tabs.forEach( function(_elem, i) {
				if (targetE == tabs[i]) {
					show(i);
				}
			});
		}
	});
}

module.exports = tabs;
