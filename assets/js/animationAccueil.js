

var containe = [document.getElementById('maquettePeinture'),document.getElementById('horizontalScroll')]
var firstsec = document.getElementById('fond');
var four = document.getElementById('horizontalScroll');
var three = document.getElementById('rutur');
var elementWrapper = document.querySelector(".element-wrapper")

let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

if(parseInt(window.location.hash.charAt(1)) >= 1) window.location.replace("")


function depart(el,hash){
	var nom = document.querySelector(".nom")
	if(el.textContent == undefined){
		nom.textContent = el
	}else{
		nom.textContent = el.textContent.toUpperCase()
	}
	
	for(var i = 0; i < divId.length; i++){
		divId[i].classList.toggle("divChargement"+i)
		
	}

	setTimeout(() => {
		if(el.textContent == undefined){
			if(hash == ""){
				hash = ""
			}
			window.location.href="./"+el.toLowerCase()+".html"+hash
		}else{
			window.location.href="./"+el.textContent.toLowerCase()+".html"
		}
		
	}, 900);
}


function scrollHorizontal(){
	var path = document.querySelector("path")
	path.style.stroke="none"

	document.onscroll = function(){
	


	 var distFromTop = document.querySelector(".horizontal-section").offsetTop;
	
	var scrollTop = window.pageYOffset;
	
	var calcule = (scrollTop - distFromTop)




	if(scrollTop + 500 >= containe[0].offsetTop || window.innerWidth <= 991.98){
		var imagePath = document.querySelector("#imagePath")
		var animePath = document.querySelector("#animePath2")
		path.style.stroke=""
		imagePath.classList.add("imagePath")
		animePath.classList.add("animePath2")
	}
		
	
	if (scrollTop >= distFromTop ) elementWrapper.style.transform = "translate3d("+(-calcule)+"px,0,0)";
		
		
		
		
	
	

	}

	
}



window.onload = function(){


	var sliderCreation = document.querySelectorAll(".sliderCreation")
	var imgCreation = document.querySelectorAll(".imgCreation")
	var numberCreation = document.querySelectorAll(".numberCreation")
	var upLong = document.querySelector("#upLong")
	var downLong = document.querySelector("#downLong")
	var counter = 1
	var tailleBox = [numberCreation[0].clientHeight,imgCreation[0].clientHeight]

	var sliderPortfolio = document.querySelector("#sliderPortfolio")
var boxPortfolio = document.querySelectorAll(".boxPortfolio")
var counterPortfolio = 1
var taillePortfolio = boxPortfolio[0].clientWidth
	
	let page = 0;

	var vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);



	window.onresize = function() {

		function slideResize(){
			taillePortfolio = boxPortfolio[0].clientWidth
			sliderPortfolio.style.transition = "none"
			sliderPortfolio.style.transform = "translate3d("+(-taillePortfolio * counterPortfolio)+"px,0,0)"
		}
	
		if(window.innerHeight > window.innerWidth ){

			slideResize()
			
		}else{
			slideResize()
		}
		
		if(window.location.hash.charAt(1) >= 3 && window.location.hash.charAt(1) <= 6){
			window.location.hash = 3
			elementWrapper.style.transform = "translate3d(0,0,0)"
		
		}

		
		var elementResize = document.querySelector("section[data-resize=resize"+window.location.hash.charAt(1)+"]")
	
		
		if(window.location.hash == "" && window.innerWidth >= 991.98 || window.location.hash == "#0" ){
			elementResize = document.querySelector("#fond")
			
		}

		if(window.innerWidth > 1300){
			elementResize.scrollIntoView({block:'start'});
		}
		
		
		

		vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);



		
	
		
		 tailleBox = [numberCreation[0].clientHeight,imgCreation[0].clientHeight]

		 for (let index = 0; index < tailleBox.length; index++) {
			sliderCreation[index].style.transition = "none"
			sliderCreation[index].style.transform="translate3d(0,"+(-tailleBox[index]*counter)+"px,0)"
			
		}

		

		
		

		 	
	}
	let done = 8  //Math.round(limit/vh)-1;
	let clock = 0;
	
	

	function animationHorizontal(position,position2){
	
		console.log(elementWrapper.children[position].children[position2])
		elementWrapper.children[position].classList.add("animeHorizon")
		elementWrapper.children[position].children[1].classList.add("animeHorizon")
		setTimeout(() => {
	
			elementWrapper.children[position].children[position2].style.opacity="1"
			elementWrapper.children[position].children[1].classList.add("close")
		}, 1200);
	}

	if (window.innerWidth <= 1300){
		var a = document.querySelectorAll(".element")
		var c = document.querySelectorAll(".blElement")
		a.forEach(element => {
			element.classList.add("animeHorizon")
		
	
		});
	
		c.forEach(element => {
			
			element.style.opacity = "1"
	
		});
	}

	



	
		
 
	function scrollWindow(event){ 
		
		
		console.log(event)
		

		if(clock == 0){
	  	clock = 1;
	  
	
	  
		  let go = (event.deltaY < 0 || event < 0 ) ? -1 : +1;
		  var j = window.location.hash.charAt(1)
		
		  window.location.hash == "#NaN" || window.location.hash == "" ? page = page + go : page = parseInt(j)+go
			  
	
		 
		  //page = page + go;
		if(page < 0 )page = 0;
		if(page > done) page = done;
		
	
	
		window.location.hash = page
		

		
		var temps = 800
		var time = 800

	


		if(page <= 2 && event.deltaY < 0 || page <= 2 && event < 0){
		
		
				document.querySelectorAll(".element").forEach(element => {
		
					element.classList.remove("animeHorizon")
					element.children[1].classList.remove("animeHorizon")
					element.children[1].classList.remove("close")
					
					setTimeout(() => {
						element.children[0].style.opacity="0"
					}, 800);
				});
		
		
		}

		if(page == 3 && event.deltaY > 0 ||  page == 3 && event > 0 ){
			
		 	animationHorizontal(1,0)

			setTimeout(() => {
				animationHorizontal(2,0)
			}, 800);
		}
	
		
	
	
		if(page >= 4 && page < 7 || page == 3 && event.deltaY < 0 || page == 3 && event < 0 ){
			temps = 800
			time = 800
			

			switch(true){

				
				case page == 4 : 
				setTimeout(() => {
					animationHorizontal(4,0)
				}, 800);
				
				animationHorizontal(3,0)
				break;
				case page == 5 : 
				setTimeout(() => {
					animationHorizontal(6,0)
				}, 800);
			
				animationHorizontal(5,0)
				break
			}
		} 

		if(page == 6  && event.deltaY < 0 || page == 6  && event < 0)temps = 800;time = 800;
		
		
		$('html').animate({
			scrollTop: vh*page
	  	},{duration:temps},'linear');
		  
		
		 /* window.scrollTo({
			top: (vh*page) / 10,
			behavior: 'smooth'
		  });;*/

	
		  
			setTimeout(function(){clock = 0}, time);

	
	
			}
		
	}

	


 if(window.location.hash == "" || window.location.hash == "#0" ){
	 setTimeout(() => {
		window.onwheel = function(event){
			if(window.innerWidth <= 1200){
			

				document.querySelectorAll(".element").forEach(element => {
					element.classList.add("animeHorizon")
					element.classList.remove("close")
					element.style.transition = "none"
				});

				document.querySelectorAll(".blElement").forEach(element => {
					element.style.opacity = 1
				})
			}else{
				scrollWindow(event)
			}
			/*scrollWindow(event)*/
		}
			window.addEventListener('keyup', (e) => {
				if(e.key == "ArrowDown") scrollWindow(10);
				
				if(e.key == "ArrowUp") scrollWindow(-100);
				
				 
			 })
	 }, 4500);
	
 }else{
	window.onwheel = function(event){
		scrollWindow(event)}

		window.addEventListener('keyup', (e) => {
			if(e.key == "ArrowDown") scrollWindow(10);
			
			if(e.key == "ArrowUp")scrollWindow(-100);
			})
 }
	
 
	
/*-------------------------------------------*/
	
	function animationDecompte(next,prev,content){
	
		prev.textContent = content
		
		next.animate([
		// keyframes
			{ transform: 'translate3d(0,-100%,0)'},
			{ transform: 'translate3d(0,0%,0)'}
			
		],{
			// timing options
			duration:180,
			easing: "ease-in-out",
			
		});
	
		prev.animate([
			// keyframes
			{ transform: 'translate3d(0,-100%,0)'},
			{ transform: 'translate3d(0,0%,0)' }
		],{
			// timing options
			duration:180,
			easing: "ease-in-out"
		});
	
		setTimeout(() => {
			next.textContent = content
		}, 180);
	}
	
	var nombre = document.querySelector(".nombreNext")
	var number = document.querySelector(".nombrePrev")
	var liens = document.querySelectorAll(".lien")
	var motNext = document.querySelector(".motNext")
	var motPrev = document.querySelector(".motPrev")
	var delay2 
	
	liens.forEach(element => {
	
		element.onmouseover = function(){
			
			clearTimeout(delay2)
			var delay = setTimeout(function(){animationDecompte(motNext, motPrev,element.textContent.toUpperCase())
			animationDecompte(nombre, number,element.getAttribute("data-id"))},180)
	
			element.onmouseout = function(){
				clearTimeout(delay)
				delay2 = setTimeout(function(){animationDecompte(motNext,motPrev,"AGENCE")
				animationDecompte(nombre, number,"0")},180)
			}
		}
	})
	

	
	document.querySelector(".horizontal-section").style.height = 400+ "vmin";



	scrollHorizontal();
	
	var premiereSection = document.querySelector("#premiereSection")
	var fond = document.querySelector("#fond")
	var carreBlanc = document.querySelector("#carreBlanc")
	var premiereSectionDroite = document.querySelectorAll('.premiereSectionDroite')
	var animeOpac = document.querySelectorAll(".animeOpac")
	var titreChargement = document.querySelector(".titreChargement")
	var nav = document.querySelector(".navPc")
	var animeOpacBas = document.querySelectorAll(".animeOpacBas")
	
titreChargement.animate([
	
	{opacity:1,transform:'translate3d(0,0,0)'}
],{ fill:"forwards"})


	titreChargement.animate([
		

			{opacity:1,transform: 'translate3d(0,0,0)'},
			{opacity:0,transform: 'translate3d(0,-100%,0)'}
			
		],{
			// timing options
			delay:1000,
			duration:600,
			easing:"linear",
			fill: "forwards"
		});

		premiereSection.animate([
			// keyframes
				
				{ opacity: 1},
				{ opacity: 0}
				
			],{
				// timing options
				delay:1000,
				duration:1000,
				easing: "ease-in-out",
				fill: "forwards"
			});
	
		  fond.animate([
			// keyframes
			{backgroundSize:"150% 170%"},
			{backgroundSize:"110% 130%"}
				
			],{
			// timing options
			duration:800,
			delay:1000,
			easing: "ease-in-out",
			fill: "forwards"
		});
		
		carreBlanc.animate([
				// keyframes
			{width: "115vmin"},
			{width: "0%"}
			],{
				duration:800,
				delay:1900,
				easing: "ease-in-out",
				fill: "forwards"
			});
	
		premiereSectionDroite.forEach(element => {
			element.animate([
				// keyframes
				{ transform: 'translate3d(100%,0,0)'},
				{ transform: 'translate3d(0,0,0)'}
				],{
					// timing options
					duration:800,
					delay:2610,
					easing: "ease-in-out",
					fill:"forwards"
				});
		});
	
		var prums = document.querySelector(".prums")
		prums.animate([
			// keyframes
			{ opacity: '1'},
			{ opacity: '0'}
			],{
			// timing options
			duration:1000,
			delay:3200,
			easing: "ease-in-out",
			fill:"forwards"
		});
	
			
		var seconds = document.querySelector(".seconds")
					
		seconds.animate([
			// keyframes
			{ opacity: '0'},
			{ opacity: '1'}
			],{
			// timing options
			duration:1000,
			delay:3200,
			easing: "ease-in-out",
			fill:"forwards"
		});
	
		/* APPARITION DIAGONALE */
	
		animeOpac.forEach(element => {
			element.animate([
				// keyframes
				{ opacity: '0',transform: 'translate3d(5%, -5%,0)'},
				{ opacity: '1',transform: 'translate3d(0 , 0,0)'}
				],{
					// timing options
					duration:700,
					delay:4000,
					easing: "ease-in-out",
					fill:"forwards"
				});
		});
			
		nav.animate([
		// keyframes
			{ opacity: '0',transform: 'translate3d(-5%, -5%,0)'},
			{ opacity: '1',transform: 'translate3d(0 , 0,0)'}
		],{
			// timing options
			duration:700,
			delay:4000,
			easing: "ease-in-out",
			fill:"forwards"
		});
	
		animeOpacBas.forEach(element => {
			element.animate([
				// keyframes
				{ opacity: '0',transform: 'translate3d(0,20%,0)'},
				{ opacity: '1',transform: 'translate3d(0,0,0)'}
				],{
					// timing options
					duration:700,
					delay:4000,
					easing: "ease-in-out",
					fill:"forwards"
				});
		});
			
		setTimeout(() => {
			premiereSection.className="d-none"
		}, 4200);

	var h = 0
	document.querySelector('.burger').addEventListener('click', function() {
		var menuBurgerD = document.querySelector('#menuBurgerDesktop')
		menuBurgerD.style.zIndex = "2"
		this.classList.toggle('open');
		document.querySelector('#burgerSectionGauche').classList.toggle('open');
		document.querySelector('#burgerSectionDroite').classList.toggle('open');

		var unit = document.querySelectorAll(".unit")
		unit.forEach(element => {
			element.classList.toggle('apparition');
		});
		
		if(h%2 == 0){
			
			window.onwheel = null
			if(window.innerWidth <= 992){
				document.querySelector("body").style.overflow="hidden"
			
			}
		}
		else{
			setTimeout(() => {
				menuBurgerD.style.zIndex = "-1"
			}, 1000);

			if(window.innerWidth <= 992){
				document.querySelector("body").style.overflow="initial"
				
			}
			
			window.onwheel = function(event){
				scrollWindow(event)}
		
				window.addEventListener('keyup', (e) => {
					if(e.key == "ArrowDown") scrollWindow(10);
					
					if(e.key == "ArrowUp")scrollWindow(-100);
					})
		}
		
		
		
	
		h++	
	})


var lienReseau = document.querySelectorAll(".lienReseau")

lienReseau.forEach(element => {

	element.onmousemove = function(e){
		var left = e.movementX*5
		var top = e.movementY*5
		element.children[0].style.transform = "translate3d("+left+"px,"+top+"px,0)"
	
	}

	element.onmouseout = function(){
		element.children[0].style.transform = "matrix(1,0,0,1,0,0)"
	}
});


var $body = $('body'),
	$pContent = $('.panel__content'),
	$img = $('.panel__img-col'),
	$portfolio = $('#portfolio')
function initTilt() {
	TweenMax.set([$pContent, $img], { transformStyle: "preserve-3d" });

	$portfolio.mousemove(function(e) {
		
		tilt(e.pageX, e.pageY) 
	});
};

function tilt(cx, cy) {
	
	var sxPos = (cx / $body.width()*100 - 50)*2 ;
	var syPos = (cy / $body.height()*100 - 50)*2;
	TweenMax.to($pContent, 2, {
		rotationY: -0.05 * sxPos,
		rotationX: 0.05 * syPos,
		transformPerspective: 500,
		transformOrigin: "center center ",
		ease: Expo.easeOut
	});
	TweenMax.to($img, 2, {
		rotationY: -0.05 * sxPos,
		rotationX: 0.05 * syPos,
		transformPerspective: 500,
		transformOrigin: "center center ",
		ease: Expo.easeOut
	});
}

$portfolio.mouseleave(function() {
	if(window.innerWidth >= 1301){
		tilt($body.width()/2, $body.height()/2);
	
	}
	
})

if(window.innerWidth >= 1301){
	initTilt();
}




var tabTitre = ["Site vitrine","E-commerce","Graphique","Refonte","Optimisation"]
var tabTexte = ["De nos jours, développer sa présence Web est essentiel pour accroitre son activité. Votre site Web est le fondement de cette croissance web, et il doit représenter au mieux votre entreprise et mettre en valeur la personnalité de votre marque et ses valeurs uniques. Nous créons pour vous un site web adapté à vos objectif tout en vous accompagnant dans votre insertion sur le web."
,"Faites évoluer votre entreprise en vendant vos produits sur internet. Nous créons un site e-commerce a l'image de votre entreprise à la fois esthétique mais aussi  pratique avec un moyen de gérer vos commandes simple et efficace. Le tout avec des moyens de paiement sécurisé pour garantir la sécurité de vos clients et la bonne santé de votre boutique e-commerce.",
"Création de webdesign, charte graphique, logo... Demander à notre équipe de créatifs de créer un univers graphique pour mettre en avant votre entreprise. Original impactant nos créations permettent à vos projets de se démarquer et d'attirer l'œil tout en restant fidèle à l'essence même de votre entreprise.","texte 4","texte 5"]
var tabBackground =["#1A1A1A","#41443E","#f6bd60","#84a59d","#2C3A47"]
//88837C
var titreCreation = document.querySelector("#titreCreation")
var paraCreation = document.querySelector("#paraCreation")
var prestaDroite = document.querySelector("#prestaDroite")
var counterTitre = 1
var btnPresta = document.querySelectorAll(".btnPresta")
var btnDecouvrirWork = document.querySelector("#worke")

for (let index = 0; index < tailleBox.length; index++) {
	
	sliderCreation[index].style.transform="translate3d(0,"+(-tailleBox[index]*counter)+"px,0)"
}






btnPresta.forEach(element => {

	
	element.onclick = function(){
		var hashNombre = parseInt(this.textContent.charAt(1))+1
		/*btnDecouvrirWork.href="./prestations.html"+"#"+ hashNombre*/
			btnDecouvrirWork.setAttribute("data-place","#"+hashNombre)
		 counter = this.getAttribute("data-position")
		 counterTitre = this.getAttribute("data-position")
		 titreCreation.textContent = tabTitre[counterTitre-1]
		 paraCreation.textContent = tabTexte[counterTitre-1]
		 titreCreation.animate([
			 // keyframes
			 { opacity: '0' },
			 { opacity: '1' }
		   ], {
			 // timing options
			 duration: 1000
		 
		   });

		   paraCreation.animate([
			// keyframes
			{ opacity: '0' },
			{ opacity: '1' }
		  ], {
			// timing options
			duration: 1000
		
		  });
		   prestaDroite.style.backgroundColor = tabBackground[counterTitre-1]
		   prestaDroite.style.transition = "background 1s linear"
		   

		   btnPresta.forEach(element => {
			element.textContent.slice(4) == tabTitre[counterTitre-1]? element.style.color="white" : element.style.color="darkgrey"
			
		});

for (let index = 0; index < tailleBox.length; index++) {

		
	sliderCreation[index].style.transition = "transform 1s ease-in-out"

	sliderCreation[index].style.transform="translate3d(0,"+(-tailleBox[index]*counter)+"px,0)"


}

	}
});

var y = 2
//btnDecouvrirWork.href="./prestations.html"+"#"+y
downLong.onclick = function(){
	y++
	if(y > 6) y = 2;
	
	btnDecouvrirWork.setAttribute("data-place","#"+y)
	this.disabled = true
	setTimeout(() => {
		this.disabled = false
	}, 1000);
	if(counter >= imgCreation.length-1) return
	if(counterTitre >= tabTitre.length) counterTitre = 0
	titreCreation.textContent = tabTitre[counterTitre]
	paraCreation.textContent = tabTexte[counterTitre]
	titreCreation.animate([
		// keyframes
		{ opacity: '0' },
		{ opacity: '1' }
	  ], {
		// timing options
		duration: 1000
	
	  });
	 paraCreation.animate([
		// keyframes
		{ opacity: '0' },
		{ opacity: '1' }
	  ], {
		// timing options
		duration: 1000
	
	  });
	  prestaDroite.style.backgroundColor = tabBackground[counterTitre]
	  prestaDroite.style.transition = "background 1s linear"


	  btnPresta.forEach(element => {
		element.textContent.slice(4) == tabTitre[counterTitre]?element.style.color="white": element.style.color="darkgrey"
		
	});
	

counter++
for (let index = 0; index < tailleBox.length; index++) {

	sliderCreation[index].style.transition = "transform 1s ease-in-out"
	sliderCreation[index].style.transform="translate3d(0,"+(-tailleBox[index]*counter)+"px,0)"
}

counterTitre++

}

var t = 6
upLong.onclick = function(){

	btnDecouvrirWork.setAttribute("data-place","#"+t)
	t--
	if(t < 2)t = 6;
	
	this.disabled = true
	setTimeout(() => {
		this.disabled = false
	}, 1000);
	if(counter <= 0) return
	if(counterTitre <= 1) counterTitre = 6
	counterTitre--
	paraCreation.textContent = tabTexte[counterTitre-1]
	titreCreation.textContent = tabTitre[counterTitre-1]
	titreCreation.animate([
		// keyframes
		{ opacity: '0' },
		{ opacity: '1' }
	  ], {
		// timing options
		duration: 1000
	
	  });

	  paraCreation.animate([
		// keyframes
		{ opacity: '0' },
		{ opacity: '1' }
	  ], {
		// timing options
		duration: 1000
	
	  });
	  prestaDroite.style.backgroundColor = tabBackground[counterTitre-1]
	  prestaDroite.style.transition = "background 1s linear"

	  btnPresta.forEach(element => {
		element.textContent.slice(4) == tabTitre[counterTitre-1] ? element.style.color="white": element.style.color="darkgrey"
		
	});
	counter--
	for (let index = 0; index < tailleBox.length; index++) {
	
		sliderCreation[index].style.transition = "transform 1s ease-in-out"
		sliderCreation[index].style.transform="translate3d(0,"+(-tailleBox[index]*counter)+"px,0)"
	}
	//counterTitre--
}

sliderCreation.forEach(element => {
	element.addEventListener('transitionend', () => {
		if(imgCreation[counter].classList.contains("firstBox")){
			
			counter = imgCreation.length-2
	
			for (let index = 0; index < tailleBox.length; index++) {
		
				sliderCreation[index].style.transition = "none"
				sliderCreation[index].style.transform="translate3d(0,"+(-tailleBox[index]*counter)+"px,0)"
			}
		
		}
		if(imgCreation[counter].classList.contains("lastBox")){
			
			counter = 1
			
			for (let index = 0; index < tailleBox.length; index++) {
		
				sliderCreation[index].style.transition = "none"
				sliderCreation[index].style.transform="translate3d(0,"+(-tailleBox[index]*counter)+"px,0)"
			}
		}
	  });
	
	
	
	
});





var btnPrecPort = document.querySelector("#btnPrecPort")
var btnSuiPort = document.querySelector("#btnSuiPort")
sliderPortfolio.style.transform = "translate3d("+(-taillePortfolio * counterPortfolio)+"px,0,0)"

btnSuiPort.onclick = function(){
	/*clearInterval(interne)*/
	if(counterPortfolio >= boxPortfolio.length-1)return
	counterPortfolio++
	sliderPortfolio.style.transform = "translate3d("+(-taillePortfolio * counterPortfolio)+"px,0,0)"
	sliderPortfolio.style.transition = "transform 1s ease-in-out"
}

btnPrecPort.onclick = function(){
	/*clearInterval(interne)*/
	if(counterPortfolio <= 0 )return
	counterPortfolio--
	sliderPortfolio.style.transform = "translate3d("+(-taillePortfolio * counterPortfolio)+"px,0,0)"
	sliderPortfolio.style.transition = "transform 1s ease-in-out"
}



	sliderPortfolio.addEventListener('transitionend', () => {
		
		if(boxPortfolio[counterPortfolio].classList.contains("first")){
			console.log("ok")
			counterPortfolio = boxPortfolio.length-2
	
		
				sliderPortfolio.style.transition = "none"
				sliderPortfolio.style.transform="translate3d("+(-taillePortfolio*counterPortfolio)+"px,0,0)"
			
		
		}
		if(boxPortfolio[counterPortfolio].classList.contains("last")){
			
			counterPortfolio = 1
			
			
		
			sliderPortfolio.style.transition = "none"
			sliderPortfolio.style.transform="translate3d("+(-taillePortfolio*counterPortfolio)+"px,0,0)"
			
		}
	  });
	

/*var interne = setInterval(() => {
		if(counterPortfolio >= boxPortfolio.length-1)return
	counterPortfolio++
	sliderPortfolio.style.transform = "translate3d("+(-taillePortfolio * counterPortfolio)+"px,0,0)"
	sliderPortfolio.style.transition = "transform 1s ease-in-out"
	}, 5000);*/


}


var liensNav = document.querySelectorAll(".lien") 
var liensBurger = document.querySelectorAll(".lienBurger")
var divId = document.querySelectorAll(".divId")


	

function envoyageDiv(argument){
	argument.forEach(element => {
		element.onclick = function(){
			
		depart(this)
		}
	});

	
	
}


var btnHist = document.querySelector("#refHist")

btnHist.onclick = function(){
	depart("HISTOIRE","")
}

var worke = document.querySelectorAll(".worke3")

worke.forEach(element => {
	element.onclick = function(){
		depart("PORTEFOLIO",this.getAttribute('data-ident'))
	}
});

var btnDecouvre = document.querySelector("#worke")

btnDecouvre.onclick = function(){
	depart("PRESTATIONS",this.getAttribute('data-place'))
}
envoyageDiv(liensNav)
envoyageDiv(liensBurger)



