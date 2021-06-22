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

  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');

  btnLogin.addEventListener('click', e => {
     
  const email = txtEmail.value;
  const password = txtPassword.value;
  const auth = firebase.auth();

  const promise = auth.signInWithEmailAndPassword(email, password);

  promise.catch(e => console.log(e.message));

  });

  btnSignUp.addEventListener('click', e => {
     
  const email = txtEmail.value;
  const password = txtPassword.value;
  const auth = firebase.auth();

  const promise = auth.createUserWithEmailAndPassword(email, password);

  promise.catch(e => console.log(e.message));

  });

  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });

  firebase.auth().onAuthStateChanged(firebaseUser => {
   if (firebaseUser) {
    console.log(firebaseUser);
    btnLogout.classList.remove('hide');
    location.href = '/index.html'
   }
   else {
    console.log("Not logged in");
   }
  });


