const responsive = {
    0 : {
        items: 1
      },
    320 : {
       items: 1
    },
    560 : {
       items: 2
      },
    560 : {
       items: 3
    },

  }


$(document).ready(function(){
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /*clickEvent on toggle menu*/
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse')
    })


    //owl carousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText:[$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });

});
  
function ClickFunction1(){
  location.href = 'github.com';
}

function ClickFunction2(){
    location.href = 'discord.com';
  }