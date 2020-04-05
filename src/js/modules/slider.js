function slider() {  
		// slider
		let slides = document.querySelectorAll('.slider-item'),
		dots = document.querySelectorAll('.dot'),
		dotsBar = document.querySelector('.slider-dots'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		indexOfSLide = 0; 
	
		function showSlide() {
	
			if( indexOfSLide > slides.length-1) { indexOfSLide = 0;}
			if( indexOfSLide < 0) { indexOfSLide = slides.length-1;}
	
			console.log(indexOfSLide);
	
			slides.forEach( (e) => e.style.display = 'none'); 
			slides[indexOfSLide].style.display = 'block'; 
	
			dots.forEach( (e) => e.classList.remove('dot-active'));
			dots[indexOfSLide].classList.add('dot-active');
		}
		
		showSlide();
	
		function changeIndex(n = 1) {
			showSlide(indexOfSLide += n);
		}
	
		next.addEventListener('click', () => changeIndex());
	
		prev.addEventListener('click', () => changeIndex(-1));
	
		dotsBar.addEventListener('click', (e) =>{
			dots.forEach( (elem,i) => { 
			if (e.target == elem && e.target.classList.contains('dot') ) {
					elem.classList.add('dot-active');	
					showSlide(indexOfSLide = i );
				}
			
			});
		});
	}

	module.exports =  slider;