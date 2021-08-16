//double slider
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
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

// registrationvalidation
$(document).ready(function () {
  $('#registrationForm').submit(function (event) {
    event.preventDefault();
    var Email = $('#mail').val();
    var passWord = $('#1stPassword').val();
    var cPassword = $("#ConfirmPassword").val();

    if (Email == "") {
      alert("please enter email");
      return;
    }

    if (passWord == "") {
      alert("please enter password");
      return;
    }

    if (passWord != cPassword) {
      alert("Please enter same password in both");
      return;
    }
    var inputObj = {
      Email,
      passWord,
      cPassword
    }
    $.ajax({
      url: "/api/admin",
      type: "POST",
      data: inputObj,
      success: function (data) {
        console.log("success", data);
        alert("Admin Saved Successfully");
        location.href = "/";
      },
      error: function (err) {
        console.log("error", err);
      }
    })

  });
  //login validation
  $('#loginBtn').click(function () {
    var userName = $('#userName').val();
    var passWord = $('#password').val();

    if (userName == "") {
      alert("please enter userName");
      return;
    }

    if (passWord == "") {
      alert("please enter password");
      return;
    }

  });
  //remember me
  var name = localStorage.getItem("userName");
  $("#userName").val(name);
  var pwd = localStorage.getItem("userPassword");
  $("#password").val(pwd);
  var remember = localStorage.getItem("rememberMe");
  if (remember) {
    $('#remember').prop('checked', true);
  }
  $("#show").click(function () {
    var show = $("#password");
    if (show.attr("type") == "password") {
      show.attr("type", "text");
    } else {
      show.attr("type", "password");
    }
  })
  $("#remember").click(function () {
    if ($(this).is(':checked')) {
      var name = $("#userName").val();
      var password = $("#password").val();
      var rememberMe = $(this).is(':checked');
      localStorage.setItem("rememberMe", rememberMe);
      localStorage.setItem("userName", name);
      localStorage.setItem("userPassword", password);
    } else {
      localStorage.clear();
    }
  })
})


