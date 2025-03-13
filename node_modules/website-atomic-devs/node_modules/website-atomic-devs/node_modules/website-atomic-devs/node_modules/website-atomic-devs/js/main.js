(function($) {
  
  "use strict";
  
  /* Page Loader active
  ========================================================*/
  $('#preloader').fadeOut();

  /* Testimonials Carousel 
  ========================================================*/
  var owl = $("#client-testimonial");
    owl.owlCarousel({
      navigation: true,
      pagination: false,
      slideSpeed: 1000,
      stopOnHover: true,
      autoPlay: true,
      items: 1,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      addClassActive: true,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [980,1],
      itemsTablet: [768,1],
      itemsTablet: [767,1],
      itemsTabletSmall: [480,1],
      itemsMobile : [479,1],
    });   
    $('#client-testimonial').find('.owl-prev').html('<i class="lni-chevron-left"></i>');
    $('#client-testimonial').find('.owl-next').html('<i class="lni-chevron-right"></i>');


    /* showcase Slider
    =============================*/
     var owl = $(".showcase-slider");
      owl.owlCarousel({
        navigation: false,
        pagination: true,
        slideSpeed: 1000,
        margin:10,
        stopOnHover: true,
        autoPlay: true,
        items: 5,
        itemsDesktopSmall: [1024, 3],
        itemsTablet: [600, 1],
        itemsMobile: [479, 1]
      });



  /* 
   Sticky Nav
   ========================================================================== */
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 100) {
            $('.header-top-area').addClass('menu-bg');
        } else {
            $('.header-top-area').removeClass('menu-bg');
        }
    });

  /* 
 VIDEO POP-UP
 ========================================================================== */
  $('.video-popup').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
  });

  /* 
   Back Top Link
   ========================================================================== */
    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });

    $('.back-to-top').on('click',function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    })

  /* 
   One Page Navigation
   ========================================================================== */


    $(window).on('load', function() {
       
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });

        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 100) {
                $('.fixed-top').addClass('menu-bg');
            } else {
                $('.fixed-top').removeClass('menu-bg');
            }
        });

    });

  /* Auto Close Responsive Navbar on Click
  ========================================================*/
  function close_toggle() {
      if ($(window).width() <= 768) {
          $('.navbar-collapse a').on('click', function () {
              $('.navbar-collapse').collapse('hide');
          });
      }
      else {
          $('.navbar .navbar-inverse a').off('click');
      }
  }
  close_toggle();
  $(window).resize(close_toggle);

  /* Nivo Lightbox
  ========================================================*/   
   $('.lightbox').nivoLightbox({
    effect: 'fadeScale',
    keyboardNav: true,
  });

}(jQuery));

function toggleWhatsAppModal() {
  var modal = document.getElementById("whatsapp-modal");
  var content = document.querySelector(".whatsapp-modal-content");

  if (modal.style.display === "block") {
      modal.style.opacity = "0";
      modal.style.transform = "scale(0.9)";
      content.style.transform = "translateY(50px)";
      setTimeout(function() {
          modal.style.display = "none";
      }, 300); // El tiempo debe coincidir con la duración de la transición
  } else {
      modal.style.display = "block";
      setTimeout(function() {
          modal.style.opacity = "1";
          modal.style.transform = "scale(1)";
          content.style.transform = "translateY(0)";
      }, 10); // Pequeño delay para permitir que el cambio de estilos se registre
  }
}

function closeWhatsAppModal() {
  var modal = document.getElementById("whatsapp-modal");
  var content = document.querySelector(".whatsapp-modal-content");
  modal.style.opacity = "0";
  modal.style.transform = "scale(0.9)";
  content.style.transform = "translateY(50px)";
  setTimeout(function() {
      modal.style.display = "none";
  }, 300); // El tiempo debe coincidir con la duración de la transición
}

// Cierra la ventana modal si el usuario hace clic fuera de la misma
window.onclick = function(event) {
  var modal = document.getElementById("whatsapp-modal");
  if (event.target == modal) {
      closeWhatsAppModal();
  }
}

// const typedDescripcion1 = new Typed('#typedDescripcion1', {
//  strings:[
//   '<h2 data-aos="fade-right" class="head-title">Somos el inicio y el cambio de innovación tecnológica que necesitas.</h2><br>',
//   '<p data-aos="fade-right">Lidera tu negocio hacia la grandeza.</p>'       
//  ],
//  //stringsElement:'#descripcion-negocio', //ID del elemento que contiene cadenas de texto a mostrar.
//  typeSpeed:50,//Velocidad en milisegundos para colocar una letra.
//  startDelay:300,//Tiempo de retraso en iniciar la animación. Aplica también cuándo termina y vuelve a iniciar.
//  backSpeed:50,//Velocidad en milisegundos para eliminar una letra.
//  smartBackspace:true,//Eliminar solamente las palabras que sean nuevas en una cadena de texto.
//  shuffle:false,//Alterar el órden en el que escribe las palabras
//  backDelay:1500,//Tiempo de espera después de escribir cada palabra
//  loop:true,//Repetir el array de strings
//  loopCount:false,//Cantidad de veces a repetir el array, false = infinito
//  showCursor:true,//Mostrar cursor palpitando
//  cursorChar:'|', //Caracter para el cursor
//  contentType:'html'//'html' o null para texto sin formato
// });

const typedDescripcion2 = new Typed('#typed', {
  
  stringsElement:'#typed-strings', //ID del elemento que contiene cadenas de texto a mostrar.
  typeSpeed:30,//Velocidad en milisegundos para colocar una letra.
  startDelay:300,//Tiempo de retraso en iniciar la animación. Aplica también cuándo termina y vuelve a iniciar.
  backSpeed:20,//Velocidad en milisegundos para eliminar una letra.
  smartBackspace:true,//Eliminar solamente las palabras que sean nuevas en una cadena de texto.
  shuffle:false,//Alterar el órden en el que escribe las palabras
  backDelay:1500,//Tiempo de espera después de escribir cada palabra
  loop:true,//Repetir el array de strings
  loopCount:false,//Cantidad de veces a repetir el array, false = infinito
  showCursor:true,//Mostrar cursor palpitando
  cursorChar:'|', //Caracter para el cursor
  contentType:'html'//'html' o null para texto sin formato
 });

