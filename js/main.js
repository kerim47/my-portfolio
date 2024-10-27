 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();



   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	var onePageClick = function() {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70
	    }, 500, function() {
	    	// window.location.hash = href;
	    });
		});

	};

	onePageClick();
	

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });





})(jQuery);


const projects = document.querySelectorAll('.project.img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxDesc = document.getElementById('lightboxDesc');
const lightboxText = document.getElementById('lightboxText');
const closeLightbox = document.getElementById('closeLightbox');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const spinner = document.getElementById('spinner');
const zoomInBtn = document.getElementById('zoomInBtn');
const zoomOutBtn = document.getElementById('zoomOutBtn');

let currentIndex = 0;
let currentScale = 1;
let isDragging = false;
let startPos = { x: 0, y: 0 };
let currentPos = { x: 0, y: 0 };
const projectsData = [];
let touchStartX = null;

// Proje verilerini topla
projects.forEach((project, index) => {
    const backgroundImage = project.style.backgroundImage.replace(/url\(['"](.+)['"]\)/, '$1');
    const title = project.querySelector('h3 a').textContent;
    const description = project.querySelector('span').textContent;
    
    projectsData.push({
        image: backgroundImage,
        title: title,
        description: description
    });

    project.addEventListener('click', () => {
        currentIndex = index;
        openLightbox(currentIndex);
    });
});

function openLightbox(index) {
    currentScale = 1;
    currentPos = { x: 0, y: 0 };
    updateImageTransform();
    
    spinner.style.display = 'block';
    lightboxImg.style.opacity = '0';
    
    const project = projectsData[index];
    lightboxImg.src = project.image;
    lightboxTitle.textContent = project.title;
    lightboxDesc.textContent = project.description;
    lightbox.classList.add('active');
    
    lightboxImg.onload = () => {
        spinner.style.display = 'none';
        lightboxImg.style.opacity = '1';
    };
    
    updateNavButtons();
}

function updateNavButtons() {
    prevBtn.style.display = currentIndex > 0 ? 'block' : 'none';
    nextBtn.style.display = currentIndex < projectsData.length - 1 ? 'block' : 'none';
}

function updateImageTransform() {
    lightboxImg.style.transform = `translate(${currentPos.x}px, ${currentPos.y}px) scale(${currentScale})`;
}

// Zoom functions
zoomInBtn.addEventListener('click', () => {
    if (currentScale < 3) {
        currentScale += 0.5;
        updateImageTransform();
        lightboxText.classList.add('hidden');
    }
});

zoomOutBtn.addEventListener('click', () => {
    if (currentScale > 1) {
        currentScale -= 0.5;
        updateImageTransform();
        if (currentScale === 1) {
            lightboxText.classList.remove('hidden');
            currentPos = { x: 0, y: 0 };
            updateImageTransform();
        }
    }
});

// Dragging functionality
lightboxImg.addEventListener('mousedown', startDragging);
lightboxImg.addEventListener('touchstart', handleTouchStart, { passive: true });

function startDragging(e) {
    if (currentScale > 1) {
        isDragging = true;
        startPos = {
            x: e.clientX - currentPos.x,
            y: e.clientY - currentPos.y
        };
        lightboxImg.style.cursor = 'grabbing';
    }
}

function handleTouchStart(e) {
    if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        if (currentScale > 1) {
            isDragging = true;
            startPos = {
                x: e.touches[0].clientX - currentPos.x,
                y: e.touches[0].clientY - currentPos.y
            };
        }
    }
}

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        currentPos = {
            x: e.clientX - startPos.x,
            y: e.clientY - startPos.y
        };
        updateImageTransform();
    }
});

document.addEventListener('touchmove', (e) => {
    if (e.touches.length === 1) {
        const touch = e.touches[0];
        
        if (isDragging && currentScale > 1) {
            currentPos = {
                x: touch.clientX - startPos.x,
                y: touch.clientY - startPos.y
            };
            updateImageTransform();
            e.preventDefault();
        } else {
            // Swipe detection
            const diffX = touchStartX - touch.clientX;
            if (Math.abs(diffX) > 50) {
                if (diffX > 0 && currentIndex < projectsData.length - 1) {
                    currentIndex++;
                    openLightbox(currentIndex);
                } else if (diffX < 0 && currentIndex > 0) {
                    currentIndex--;
                    openLightbox(currentIndex);
                }
                touchStartX = null;
            }
        }
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    lightboxImg.style.cursor = currentScale > 1 ? 'grab' : 'auto';
});

document.addEventListener('touchend', () => {
    isDragging = false;
    touchStartX = null;
});

// Navigation
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        openLightbox(currentIndex);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < projectsData.length - 1) {
        currentIndex++;
        openLightbox(currentIndex);
    }
});

// Closing functionality
closeLightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});

// Keyboard controls
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    switch(e.key) {
        case 'ArrowLeft':
            if (currentIndex > 0) {
                currentIndex--;
                openLightbox(currentIndex);
            }
            break;
        case 'ArrowRight':
            if (currentIndex < projectsData.length - 1) {
                currentIndex++;
                openLightbox(currentIndex);
            }
            break;
        case 'Escape':
            lightbox.classList.remove('active');
            break;
        case '+':
            zoomInBtn.click();
            break;
        case '-':
            zoomOutBtn.click();
            break;
    }
});