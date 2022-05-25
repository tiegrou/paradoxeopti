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
nomPage.textContent = "CONTACT"
    
   
}

window.onload = function(){
    requestAnimationFrame(update)

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

    
    if(h%2 == 0 ){
        //window.onwheel = null
        document.querySelectorAll(".ligne").forEach(element => {
            element.style.backgroundColor = "white"
        });
        document.querySelector("body").style.overflow="hidden"

        document.querySelector(".boxAccueil").style.position="initial"

        if(h%2 == 0 && window.innerWidth <= 991){
            console.log("test")
            document.querySelectorAll(".ligne").forEach(element => {
                element.style.backgroundColor = "black"
            });}
    }
    
    else{

        document.querySelector(".boxAccueil").style.position="fixed"
        setTimeout(() => {
            document.querySelector('#menuBurgerDesktop').style.zIndex = "-1"
            document.querySelectorAll(".ligne").forEach(element => {
                element.style.backgroundColor = "white"
            });
            document.querySelector("body").style.overflow=""
        }, 1000);
        
       
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
