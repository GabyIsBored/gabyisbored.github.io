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
  
function Social1(){
  window.location.href = 'https://github.com/gabyisbored';
}

function Social2(){
    window.location.href = 'https://discord.com/users/GabyIsBored';
}

function Article1(){
  location.href = 'Articles/article1.html'
}