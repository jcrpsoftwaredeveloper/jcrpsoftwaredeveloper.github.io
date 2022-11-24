
//ACTIVAR LIGHT EN BARRA DE NAVEGACIÓN
window.addEventListener("scroll", function(){
    if(window.scrollY>= 0 && window.scrollY < 850){
    document.getElementById("nav-home").style = "color: #e31b6d";
    document.getElementById("nav-about").style = "color: white";
    document.getElementById("nav-portfolio").style = "color: white";
    document.getElementById("nav-contact").style = "color: white";
    }else if(window.scrollY >= 850 && window.scrollY < 1700){
        document.getElementById("nav-about").style = "color: #e31b6d";
        document.getElementById("nav-portfolio").style = "color: white";
        document.getElementById("nav-contact").style = "color: white";
        document.getElementById("nav-home").style = "color: white";
    }else if(window.scrollY >= 1500 && window.scrollY < 3800){
        document.getElementById("nav-about").style = "color: white";
        document.getElementById("nav-portfolio").style = "color: #e31b6d";
        document.getElementById("nav-contact").style = "color: white";
        document.getElementById("nav-home").style = "color: white";
    }else if(window.scrollY >= 3800){
        document.getElementById("nav-about").style = "color: white";
        document.getElementById("nav-portfolio").style = "color: white";
        document.getElementById("nav-contact").style = "color: #e31b6d";
        document.getElementById("nav-home").style = "color: white";
    }
})

//BARRA NAVEGACIÓN FIJADA AL TOP
window.addEventListener("scroll", function(){
    var section = document.getElementById("menu");
    section.classList.toggle("abajo", window.scrollY>850);
})


//HABILIDAD 1 CSS
window.addEventListener("scroll", function(){
    var habilidad = document.getElementById("h1");
    habilidad.classList.toggle("conocimiento-total-h1", window.scrollY>1500);
})

//HABILIDAD 2 HTML
window.addEventListener("scroll", function(){
    var habilidad = document.getElementById("h2");
    habilidad.classList.toggle("conocimiento-total-h2", window.scrollY>1500);
})

//HABILIDAD 3 JAVA
window.addEventListener("scroll", function(){
    var habilidad = document.getElementById("h3");
    habilidad.classList.toggle("conocimiento-total-h3", window.scrollY>1500);
})

//HABILIDAD 4 PHP
window.addEventListener("scroll", function(){
    var habilidad = document.getElementById("h4");
    habilidad.classList.toggle("conocimiento-total-h4", window.scrollY>1500);
})

//HABILIDAD 5 JS 
window.addEventListener("scroll", function(){
    var habilidad = document.getElementById("h5");
    habilidad.classList.toggle("conocimiento-total-h5", window.scrollY>1500);
})

//HABILIDAD 6 TS
window.addEventListener("scroll", function(){
    var habilidad = document.getElementById("h6");
    habilidad.classList.toggle("conocimiento-total-h6", window.scrollY>1500);
})

//HABILIDAD 7 ANGULAR
window.addEventListener("scroll", function(){
    var habilidad = document.getElementById("h7");
    habilidad.classList.toggle("conocimiento-total-h7", window.scrollY>2500);
})

//HABILIDAD 8 LARAVEL
window.addEventListener("scroll", function(){
    var habilidad = document.getElementById("h8");
    habilidad.classList.toggle("conocimiento-total-h8", window.scrollY>2500);
})

//HABILIDAD 9 SPRINGBOOT
window.addEventListener("scroll", function(){
    var habilidad = document.getElementById("h9");
    habilidad.classList.toggle("conocimiento-total-h9", window.scrollY>2500);
})

//HABILIDAD 10 JSP
window.addEventListener("scroll", function(){
    var habilidad = document.getElementById("h10");
    habilidad.classList.toggle("conocimiento-total-h10", window.scrollY>2500);
})


//ANIMACIONES

//Titulo About
window.addEventListener('scroll', function() {  
    var slider = document.getElementById('slider');
    slider.classList.toggle("slide-in-titles", window.scrollY>300);
});
//Separador About
window.addEventListener('scroll', function() {
    var slider = document.getElementById('separador-about');
    slider.classList.toggle("slide-in-hr", window.scrollY>400);
    
});
//Propiedades About img
window.addEventListener('scroll', function() {
    var slider = this.document.querySelectorAll('#propiedad-img');
    slider.forEach(propiedad => {
        propiedad.classList.toggle("slide-in-img", window.scrollY>500);
    });
});
//Propiedades About title
window.addEventListener('scroll', function() {
    var slider = this.document.querySelectorAll('#propiedad-title');
    slider.forEach(propiedad => {
        propiedad.classList.toggle("slide-in-title", window.scrollY>500);
    });
});
//Propiedades About text
window.addEventListener('scroll', function() {
    var slider = this.document.querySelectorAll('#propiedad-text');
    slider.forEach(propiedad => {
        propiedad.classList.toggle("slide-in-text", window.scrollY>500);
    });
});
//Titulo Habilidades
window.addEventListener('scroll', function() {  
    var slider = document.getElementById('slider2');
    slider.classList.toggle("slide-in-titles-habilidades", window.scrollY>1100);
});
//Separador Habilidades
window.addEventListener('scroll', function() {
    var slider = document.getElementById('separador-about2');
    slider.classList.toggle("slide-in-hr-habilidades", window.scrollY>1100);
    
});
//Propiedades Habilidades text
window.addEventListener('scroll', function() {
    var slider = this.document.querySelectorAll('#propiedad-text-habilidades');
    slider.forEach(propiedad => {
        propiedad.classList.toggle("slide-in-text", window.scrollY>1100);
    });
});
//Titulo Frameworks
window.addEventListener('scroll', function() {  
    var slider = document.getElementById('slider4');
    slider.classList.toggle("slide-in-titles-frameworks", window.scrollY>2000);
});
//Separador Frameworks
window.addEventListener('scroll', function() {
    var slider = document.getElementById('separador-about4');
    slider.classList.toggle("slide-in-hr-framework", window.scrollY>2000); 
});
//Propiedades Framework text
window.addEventListener('scroll', function() {
    var slider = this.document.querySelectorAll('#propiedad-text-framework');
    slider.forEach(propiedad => {
        propiedad.classList.toggle("slide-in-text", window.scrollY>2000);
    });
});

//SLIDE HABILIDADES
window.addEventListener('scroll', function() {
    var slider = this.document.querySelectorAll('#slide-h');
    slider.forEach(propiedad => {
        propiedad.classList.toggle("slide-h", window.scrollY>1300);
    });
});
//SLIDE FRAMEWORK
window.addEventListener('scroll', function() {
    var slider = this.document.querySelectorAll('#slide-f');
    slider.forEach(propiedad => {
        propiedad.classList.toggle("slide-f", window.scrollY>2300);
    });
});
//SLIDE HABILIDADES RIGHT
window.addEventListener('scroll', function() {
    var slider = this.document.querySelectorAll('#slide-h-r');
    slider.forEach(propiedad => {
        propiedad.classList.toggle("slide-h-r", window.scrollY>1300);
    });
});

//SLIDE TITULO CONTACTO
window.addEventListener('scroll', function() {  
    var slider = document.getElementById('slider5');
    slider.classList.toggle("slide-in-title-contacto", window.scrollY>3400);
});
//Separador CONTACTO
window.addEventListener('scroll', function() {
    var slider = document.getElementById('separador-about5');
    slider.classList.toggle("slide-in-hr-contacto", window.scrollY>3400);
    
});
//Separador CONTACTO
window.addEventListener('scroll', function() {
    var slider = document.getElementById('question-form');
    slider.classList.toggle("slide-in-text-contacto", window.scrollY>3400);
    
});
//FORM CONTACTO
window.addEventListener('scroll', function() {
    var slider = this.document.querySelectorAll('#frm');
    slider.forEach(propiedad => {
        propiedad.classList.toggle("slide-in-frm-contacto", window.scrollY>3500);
    });
});
//FLECHA HOME FOOTER
window.addEventListener('scroll', function() {
    var slider = document.getElementById('flecha-home');
    slider.classList.toggle("slide-in-flecha-footer", window.scrollY>3750);
   
});
//REDES FOOTER
window.addEventListener('scroll', function() {
    var slider = this.document.querySelectorAll('#rs');
    slider.forEach(propiedad => {
        propiedad.classList.toggle("slide-in-rs-footer", window.scrollY>3800);
    });
});
//TEXT AUTHOR FOOTER
window.addEventListener('scroll', function() {
    var slider = document.getElementById('txt-footer');
    slider.classList.toggle("slide-in-txt-footer", window.scrollY>3800);
    
});

// SCROLL ANIMATIONS
function onScrollInit(items, elemTrigger) {
    var offset = $(window).height() / 1.6;
    items.each(function() {
      var elem = $(this),
        animationClass = elem.attr('data-animation'),
        animationDelay = elem.attr('data-delay');

      elem.css({
        '-webkit-animation-delay': animationDelay,
        '-moz-animation-delay': animationDelay,
        'animation-delay': animationDelay
      });

      var trigger = elemTrigger ? trigger : elem;

      trigger.waypoint(
        function() {
          elem.addClass('animated').addClass(animationClass);
          if (elem.get(0).id === 'gallery') mixClear(); //OPTIONAL
        },
        {
          triggerOnce: true,
          offset: offset
        }
      );
    });
  }
