(function(){

	// window.onload = function(){
	// 	let newsletter = confirm('Deseja estar sempre informado de nossas novidades e atualizações?');
	// 	if(newsletter){
	// 		let email = prompt('Que ótimo! Por favor, digite seu email:');
	// 		alert('Fique ligado no seu email para saber nossas novidades!');
	// 	}
	// }

	document.querySelector('.open-main-menu').onclick = function(){
		$('.main-menu').addClass('main-menu-active');
		$('body').addClass('stop-scroll');
	};	
	document.querySelector('.button-close-main-menu').onclick = function(){
		$('.main-menu').removeClass('main-menu-active');
		$('body').removeClass('stop-scroll');
	};

	window.addEventListener('load', function(){
		// alert('opa');
		let red = 234;
		let green = 224;
		let blue = 195;
		let intervalColorButton = window.setInterval(function(){
			document.getElementById('button-announce-link').style.backgroundColor = 'rgb('+red+','+green+','+blue+')';

			if(blue <= 80 && red <= 80 && green <= 119){
				blue = 195;
				green = 224;
				red = 234;
			}

			red -= +7;
			green -= +5;
			blue -= +5;

		},60);
		// 80, 119, 80, 1 - verde
		// 234, 224, 195, 1 - bege
		// 154(7)22, 105(5)21, 115(5)23
	});

	class Property{
		constructor(category,price,description,address,owner){
			this.category = category;
			this.price = price;
			this.description = description;
			this.address = address;
			this.owner = owner;
		}
	}

	let properties = [];

	$('#close-deal-form').submit(function(e){
		e.preventDefault();
		let category = '';
		let price = '';
		let description = '';
		let address = '';
		let owner = '';

		properties.push(new Property(category,price,description,address,owner));

	});

	$('.main-initial .property-section .list-of-properties .property a figure img').mouseenter(function(){
		let that = $(this);

		let image0 = 'assets/resources/images/living-room.jpg';
		let image1 = 'assets/resources/images/kitchen.jpg';
		let image2 = 'assets/resources/images/bedroom.jpg';

		$(this).attr('src', image0);
		setTimeout(function(){
			that.attr('src', image1);

			setTimeout(function(){
				that.attr('src', image2);

				setTimeout(function(){
					that.attr('src', 'assets/resources/images/house.jpg');
				}, 1000);

			}, 1000);
			
		}, 1000);
	});

	$('.main-property .single-property-section .property-gallery .property-picture figure img').click(function(){
		let imageSource = $(this).attr('src');
		$('#main-property-image').children().attr('src', imageSource);
	});

}());