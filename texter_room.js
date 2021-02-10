var firebaseConfig = {
      apiKey: "AIzaSyB7dovZhQwLIIgqCO8qeRQmyUL-u4w4a1Q",
      authDomain: "texter-a4885.firebaseapp.com",
      databaseURL: "https://texter-a4885-default-rtdb.firebaseio.com",
      projectId: "texter-a4885",
      storageBucket: "texter-a4885.appspot.com",
      messagingSenderId: "432196829372",
      appId: "1:432196829372:web:43cc411e7326830944d0b9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("username");
document.getElementById("welcome").innerHTML="Welcome "+user_name

function addroom(){
roomname=document.getElementById("roomname").value;
firebase.database().ref("/").child(roomname).update({
      status:"updated"
});
localStorage.setItem("roomname", roomname);
window.location="texter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names)
row=`<div class="room_name" id=${Room_names} onclick="gotoroom(this.id)"> ${Room_names} </div> <hr> `
document.getElementById("output").innerHTML+=row
      //End code
      });});}
getData();
function gotoroom(room){
localStorage.setItem("roomname", room);
window.location="texter_page.html";
}

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}
