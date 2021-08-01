//double slider
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const forgetPassword = document.getElementById('forgetPwd');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

forgetPwd.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signUpButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


//eye icon
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash');
});

//confirm pwd
function Validate() {
  var password = document.getElementById("1stPassword").value;
  var confirmPassword = document.getElementById("ConfirmPassword").value;
  if (password != confirmPassword) {
  alert("Please enter same password in both");
  return false;
  }
  return true;
  }

  