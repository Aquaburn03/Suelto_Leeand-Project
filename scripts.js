function highlight(field) {
  document.getElementById(field).style.backgroundColor = "#f2f2f2";
}

function unhighlight(field) {
  document.getElementById(field).style.backgroundColor = "";
}

function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var errorMessage = document.getElementById("error-message");
  if (username == "" && password == "") {
    errorMessage.innerHTML = "Please enter your username and password.";
  } else if (username == "") {
    errorMessage.innerHTML = "Please enter your username.";
  } else if (password == "") {
    errorMessage.innerHTML = "Please enter your password.";
  } else {
    // Assume login is successful and redirect to another page
    window.location.href = "ur_in.html";
    return false;
  }
}

function forgotPassword() {
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  return false;
}
