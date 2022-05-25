let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});


var update = function(){

    var divId = document.querySelectorAll("#divId")


  
        for(var i = 0; i < divId.length; i++){
            divId[i].classList.toggle("divChargement"+i)
            
        }
   
        
        var nomPage = document.querySelector(".nomPage")

        if(window.location.hash == ""){
          nomPage.textContent = "PORTEFOLIO"
        }else{
          nomPage.textContent = window.location.hash.replace(/#projet/, "projet ").toUpperCase()
        }

   
}

var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) {
      delta /= 2;
    }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function () {
      that.tick();
    }, delta);
  };



window.onload = function(){
 requestAnimationFrame(update)

 var elements = document.getElementsByClassName("txt-rotate");
 for (var i = 0; i < elements.length; i++) {
   var toRotate = elements[i].getAttribute("data-rotate");
   var period = elements[i].getAttribute("data-period");
   if (toRotate) {
     new TxtRotate(elements[i], JSON.parse(toRotate), period);
   }
 }
 // INJECT CSS
 var css = document.createElement("style");
 css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #101010 }";
 document.body.appendChild(css);

var h = 0
document.querySelector('.burger').addEventListener('click', function() {
    
    
    document.querySelector('#menuBurgerDesktop').style.zIndex = "2"
    this.classList.toggle('open');
    document.querySelector('#burgerSectionGauche').classList.toggle('open');
    document.querySelector('#burgerSectionDroite').classList.toggle('open');

    var unit = document.querySelectorAll(".unit")
    unit.forEach(element => {
        element.classList.toggle('apparition');
    });
    
    if(h%2 == 0 || window.location.pathname == "/contact.html"){
      //window.onwheel = null
      document.querySelector(".boxAccueil").style.position="initial"
      
      document.querySelector("body").style.overflow="hidden"

      if(window.innerWidth >= 992){
          document.querySelectorAll(".ligne").forEach(element => {
              element.style.backgroundColor = "white"
          });
  
      }

  }else{
     
      document.querySelectorAll(".ligne").forEach(element => {
          element.style.backgroundColor = "black"
      });
  
      setTimeout(() => {
          document.querySelector('#menuBurgerDesktop').style.zIndex = "-1"
         
      }, 1000);
      document.querySelector(".boxAccueil").style.position="fixed"
      document.querySelector("body").style.overflow=""
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

}

var liensBurger = document.querySelectorAll(".lienBurger")
var divId = document.querySelectorAll(".divIdDepart")

function envoyageDiv(argument){
	argument.forEach(element => {
		element.onclick = function(){
			
			var nom = document.querySelector(".nom")
            nom.textContent = this.textContent.toUpperCase()
			for(var i = 0; i < divId.length; i++){
				divId[i].classList.toggle("divChargementDepart"+i)
				
			}
		
			setTimeout(() => {
				window.location.href="./"+this.textContent.toLowerCase()+".html"
			}, 900);
		}
	});
	
}


envoyageDiv(liensBurger)
