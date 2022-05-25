


 
var img = document.querySelectorAll(".imgPresta")




function mooving(e){

    


    if(window.location.hash == "#1"){
        img.forEach(element => {
  
            x = Math.max(
        Math.min(
            e.movementX, 100
    ), -50);
    y = Math.max(
        Math.min(
            e.movementY, 100
    ), -50);
    
    
    
    
    element.style.transform = "translate3d("+x+"px,"+y+"px,0)"
  
          
         
          
        });
    }
 



   
}






   var nomPage = document.querySelector(".nomPage")
var update = function(){

    var divId = document.querySelectorAll("#divId")


  
        for(var i = 0; i < divId.length; i++){
            divId[i].classList.toggle("divChargement"+i)
            
        }
   

}

var slideContainer = document.querySelector(".slideContainer1")
var slideContainer2 = document.querySelector(".slideContainer2")
var box = document.querySelectorAll(".box")
var tailleBox = box[0].clientHeight
var counter = [0,1,2,3,4,5,6,7]
var p = 2
var a = 5

function placement(){

    if(window.location.hash !== ""){

     
        switch(true){
            case window.location.hash.charAt(1) == 2 : 
            slideContainer.style.transform = "translateY("+(-tailleBox * counter[2])+"px)"
            slideContainer2.style.transform = "translateY("+(-tailleBox * counter[5])+"px)"
            p = 3
            a = 4
            nomPage.textContent = "SITE VITRINE"
            break;
            case window.location.hash.charAt(1) == 3 : 
            slideContainer.style.transform = "translateY("+(-tailleBox * counter[3])+"px)"
            slideContainer2.style.transform = "translateY("+(-tailleBox * counter[4])+"px)"
            p = 4
            a = 3
            nomPage.textContent = "SITE E-COMMERCE"
            break;
            case window.location.hash.charAt(1) == 4 : 
            slideContainer.style.transform = "translateY("+(-tailleBox * counter[4])+"px)"
            slideContainer2.style.transform = "translateY("+(-tailleBox * counter[3])+"px)"
            p = 5
            a=2
            nomPage.textContent = "GRAPHISME"
            break;
            case window.location.hash.charAt(1) == 5 : 
            slideContainer.style.transform = "translateY("+(-tailleBox * counter[5])+"px)"
            slideContainer2.style.transform = "translateY("+(-tailleBox * counter[2])+"px)"
            p = 6
            a=1
            nomPage.textContent = "REFONTE"
            break;
            case window.location.hash.charAt(1) == 6 : 
            slideContainer.style.transform = "translateY("+(-tailleBox * counter[6])+"px)"
            slideContainer2.style.transform = "translateY("+(-tailleBox * counter[1])+"px)"
            p = 7
            a=0
            nomPage.textContent = "OPTIMISATION"
            break;
            default: slideContainer.style.transform = "translateY("+(-tailleBox * counter[1])+"px)"
            slideContainer2.style.transform = "translateY("+(-tailleBox * counter[6])+"px)"
            nomPage.textContent = "PRESTATIONS"
           
            break;
        }
    }else{
        window.location.hash = 1
        slideContainer.style.transform = "translateY("+(-tailleBox * counter[1])+"px)"
        slideContainer2.style.transform = "translateY("+(-tailleBox * counter[6])+"px)"
        nomPage.textContent = "PRESTATIONS"
       

    }
}


window.onload = function(){

    
    

 
requestAnimationFrame(update)




window.onresize = function(){
   
    tailleBox = box[0].clientHeight
    slideContainer.style.transition= "none"
    slideContainer2.style.transition = "none"
placement()
 
 }


placement()


var n = parseInt(window.location.hash.charAt(1))

window.onwheel = function test(event){
    
this.onwheel = null
slideContainer.style.transition = "-webkit-transform 0.5s linear"
slideContainer2.style.transition = "-webkit-transform 0.5s linear"

       
   
    if(event.deltaY > 1){
      
        n++

        if(n > 6){
            n = 1
        }
        window.location.hash = n

        if(p <= 1){
            
           p = 2
           a = 5
        }
        
       
        
        slideContainer.style.transform = "translate3d(0,"+(-tailleBox * counter[p] )+"px,0)"
        slideContainer2.style.transform = "translate3d(0,"+(-tailleBox * counter[a] )+"px,0)"
        slideContainer.ontransitionend = (e) => {
            

            console.log(e.srcElement.className)

            if(e.srcElement.className !== "imgPresta"){
                p++
                a--
               
          
               
                if(box[p-1].classList.contains("last")){
    
                    
                    slideContainer.style.transition = "none"
                    p -=7
                    slideContainer.style.transform = "translate3d(0,"+(-tailleBox * counter[p] )+"px,0)"
    
                    slideContainer2.style.transition = "none"
                    a +=7
                    slideContainer2.style.transform = "translate3d(0,"+(-tailleBox * counter[a] )+"px,0)"
    
                
            }

           
            }
            
            this.onwheel = function(event){
                test(event)
            }
         
            };
            
          

    }
   
    if(event.deltaY < 1){
    n--
    if(n < 1){
        n = 6
    }
    window.location.hash = n
     if(p == 1){
         p = 2
         a = 5
     }
          
            

        slideContainer.style.transform = "translate3d(0,"+(-tailleBox * counter[p-2] )+"px,0)"
        slideContainer2.style.transform = "translate3d(0,"+(-tailleBox * counter[a+2] )+"px,0)"
        slideContainer.ontransitionend = (e) => {
           
          
            if(e.srcElement.className !== "imgPresta"){
            p--
            a++

            if(box[p-1].classList.contains("first")){
                slideContainer.style.transition = "none"
                //p = box.length - 2
                slideContainer.style.transform = "translate3d(0,"+(-tailleBox * counter[6] )+"px,0)"
                p = 7
                slideContainer2.style.transition = "none"
                //a = box.length-5
                a = 0
                slideContainer2.style.transform = "translate3d(0,"+(-tailleBox * counter[1] )+"px,0)"
            }

        }
            this.onwheel = function(event){
                test(event)}
               
           
            };
        }
      
       
        
        /*setTimeout(() => {
                this.onwheel = function(event){
                    test(event)
                   
                }
            }, 1000);*/
   
}



}






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
		
		if(h%2 == 0){
			//window.onwheel = null
         
		}else{
			setTimeout(() => {
				document.querySelector('#menuBurgerDesktop').style.zIndex = "-1"
                
			}, 1000);
			
			
               
            
		}
	
		h++	
	})

	var reseauxAccueil = document.querySelectorAll(".reseauAccueil")
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




document.body.addEventListener('mouseout', function(e) {
    if (!e.relatedTarget && !e.toElement) {
        img.forEach(element => {
  element.style.transform = "translate3d("+0+"px,"+0+"px,0)"
  });
    }
});


window.onmousemove = function(e){

    mooving(e)
}






    
