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
  

  //AOS instance
   AOS.init();

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
function Article2(){
location.href = 'Articles/article2.html'
}
function Article3(){
location.href = 'Articles/article3.html'
}
function Article4(){
location.href = 'Articles/article4.html'
}
function Blog1(){
location.href = 'Blogs/blog1.html'
}

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDQMSaC1fs-RBZEfoFUzWRTZRRShEQBQdg",
  authDomain: "gabys-awesome-and-sexy-blog.firebaseapp.com",
  databaseURL: "https://gabys-awesome-and-sexy-blog-default-rtdb.firebaseio.com",
  projectId: "gabys-awesome-and-sexy-blog",
  storageBucket: "gabys-awesome-and-sexy-blog.appspot.com",
  messagingSenderId: "467919383452",
  appId: "1:467919383452:web:4e53572394b4e0abb3b659",
  measurementId: "G-Z41WRW4TT1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Database shit
const preObject = document.getElementById('object');

const dbRef = firebase.database().ref().child('object');

dbRef.on("value", snap => console.log(snap.val()));

const welcomeBackText = document.getElementById('welcomebacktext');
const btnLogout2 = document.getElementById('btnLogout');


firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    const Displayname = document.getElementById('txtDisplayname');
    console.log(Displayname);
    welcomeBackText.innerHTML = "Welcome back " + Displayname.value;
    btnLogout2.addEventListener('click', e => {
      firebase.auth().signOut();
    });
  }
  else {
    location.href = './login/loginPage.html'
  }
})
