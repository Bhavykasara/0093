var firebaseConfig = {
    apiKey: "AIzaSyAB9N-LB8tHB070Av61F2TmWtozu2vXjnM",
    authDomain: "faq-of-school-osfd.firebaseapp.com",
    projectId: "faq-of-school-osfd",
    storageBucket: "faq-of-school-osfd.appspot.com",
    messagingSenderId: "105039666214",
    appId: "1:105039666214:web:3a526a18df0c23d7291ae7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

username=localStorage.getItem("username");

$(window).on('load',function(){
    username=localStorage.getItem("username");
    document.getElementById("welcome").innerHTML='Hello "'+username+'" !!! Welcome to Kwitter!!!';
});

function addRoom() {
    roomname=document.getElementById("roomname").value;
    console.log(roomname);
    firebase.database().ref("/").child(roomname).update({purpose:"adding room name"});
}