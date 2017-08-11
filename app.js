var database = firebase.database().ref('/')
var getEmail = document.getElementById("emailId")
var getPassword = document.getElementById("password")
function signup() {
 var user = {
     email : getEmail.value,
     password : getPassword.value,
      }
      database.child('data').push(user)
  getEmail.focus()
  getPassword.focus()
  database.child('data').once("child_added", function(snap){
      var obj = snap.val()
      obj.key = snap.key 
      console.log(obj)
location.href="dua.html"     })

}