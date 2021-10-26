const users = {    username: "Alex",    password: "butts"}

function validatePassword() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var message = document.getElementById('message');
  // console.log(users.password);
  // console.log(username.value);
  if(password === users.password && username === users.username) {
    message.innerHTML = "Correct info!";
    message.className = "correct";    }
    else if (password == "") {
       message.innerHTML = "";    }
       else if (password == users.password && username !== users.username)
       {
         message.innerHTML = "Incorrect Username";
         message.className = "wrong";
       }
       else {
         message.innerHTML = "Wrong password";
          message.className = "wrong";    }



  }
