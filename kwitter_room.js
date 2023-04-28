const firebaseConfig = {
  apiKey: "AIzaSyDmM38eWgiJGiIfhUVzGF0nW9_-0aYKEs0",
  authDomain: "kitter1.firebaseapp.com",
  databaseURL: "https://kitter1-default-rtdb.firebaseio.com",
  projectId: "kitter1",
  storageBucket: "kitter1.appspot.com",
  messagingSenderId: "406050749674",
  appId: "1:406050749674:web:26d984bbea0667b041eb93",
  measurementId: "G-P96VMY6PKY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);




user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);
    
  window.location = "kwitter_page.html";
}

function getData() 
{  
  firebase.database().ref("/").on('value', function(snapshot) 
  { document.getElementById("output").innerHTML = ""; 
  snapshot.forEach(function(childSnapshot) 
  { childKey  = childSnapshot.key;
       Room_names = childKey;


    console.log("Room Name - " + Room_names);

  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'> # "+ Room_names +"</div> <hr>";
  document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";
}
