
  var firebaseConfig = {
    apiKey: "AIzaSyAj8XtY-uUCt7QizTl-LEsxzx9d9U8Do9o",
    authDomain: "login-and-registration-5e266.firebaseapp.com",
    databaseURL: "https://login-and-registration-5e266.firebaseio.com",
    projectId: "login-and-registration-5e266",
    storageBucket: "login-and-registration-5e266.appspot.com",
    messagingSenderId: "45452621858",
    appId: "1:45452621858:web:0f73084e0d8821a8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
var database = firebase.database();

function getMessages(event) {

    document.getElementById('resultMessages').innerHTML = '<table id="resultTable">';

    var table = document.getElementById("resultTable");

    var header = table.createTHead();
    var row = header.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerText = "ID пользователя";
    cell2.innerText = "Email";
    cell3.innerText = "Имя пользователя";
    cell4.innerText = "Жалоба на ...";
    cell5.innerText = "Проблема";

    var i = 0;
    var body = table.createTBody();

    var usersRef = firebase.database().ref('messages/');
    usersRef.once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var row = body.insertRow(i);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);

            cell1.innerHTML = childSnapshot.key;
            childSnapshot.forEach(function(childValue) {
                var childKey = childValue.key;
                var childData = childValue.val();

                switch (childKey) {
                    case 'email':
                        cell2.innerText = childData;
                        break;
                    case 'username':
                        cell3.innerText = childData;
                        break;
                    case 'subject':
                        cell4.innerText = childData;
                        break;
                    case 'message':
                        cell5.innerText = childData;
                        break;
                    default:
                        break;
                }
            });
            i = i + 1;
        });
    });

};