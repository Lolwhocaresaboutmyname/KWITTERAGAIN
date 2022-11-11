var firebaseConfig = {
  apiKey: "AIzaSyCjJBH4bv-OaAMoV_o7DLvnFQNGbNwO-4c",
  authDomain: "twi--quitt--kwitter.firebaseapp.com",
  databaseURL: "https://twi--quitt--kwitter-default-rtdb.firebaseio.com",
  projectId: "twi--quitt--kwitter",
  storageBucket: "twi--quitt--kwitter.appspot.com",
  messagingSenderId: "296827973601",
  appId: "1:296827973601:web:79d1c0e5774a7c7647eca0",
  measurementId: "G-GJBNN60ER1"
};



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

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}