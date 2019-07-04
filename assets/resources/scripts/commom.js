(function(){


	window.onload = function(){
		let newsletter = confirm('Deseja estar sempre informado de nossas novidades e atualizações?');
		if(newsletter){
			let email = prompt('Que ótimo! Por favor, digite seu email:');
			alert('Fique ligado no seu email para saber nossas novidades!');
		}
	}

	document.querySelector('.open-main-menu').onclick = function(){
		$('.main-menu').addClass('main-menu-active');
		$('body').addClass('stop-scroll');
	};	
	document.querySelector('.button-close-main-menu').onclick = function(){
		$('.main-menu').removeClass('main-menu-active');
		$('body').removeClass('stop-scroll');
	};

	if (window.location.href == "http://localhost/projeto-web-II/imobiliaria-flor-do-campo/"){
		window.addEventListener('load', function(){
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
		});
	}

	class Property{
		constructor(category,price,description,address,owner){
			this.category = category;
			this.price = price;
			this.description = description;
			this.address = address;
			this.owner = owner;
		}
	}

	let emailInput = document.getElementById('email-input');
	emailInput.addEventListener('invalid', function(e){
		if(emailInput.validity.typeMismatch){
			emailInput.setCustomValidity('Por favor, digite um email válido!');
		} else{
			emailInput.setCustomValidity('');
		}
	});

	let properties = [];
	document.querySelector('#close-deal-form').onsubmit = function(e){
		e.preventDefault();
		let price = document.forms[0].elements[8].value;
		let street = document.forms[0].elements[4].value;;
		let number = document.forms[0].elements[6].value;
		let city = document.forms[0].elements[5].value;
		let state = document.forms[0].elements[7].value;
		let owner = document.forms[0].elements[0].value;
		let address = street+', '+number+', '+city+', '+state;
		let description = document.forms[0].elements[12].value;
		let category = '';

		let categoryInputs = document.getElementsByName('category');
		for(i in categoryInputs){
			if(categoryInputs[i].checked){
				if(categoryInputs[i].value == "Sell"){
					category = "Vender";
				} else{
					if(categoryInputs[i].value == "Rent"){
						category = "Alugar";
					} else{
						category = "Vender ou alugar"
					}
				}
			}
		}
		
		properties.push(new Property(category,price,description,address,owner));

	};

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