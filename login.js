
  function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username == '' || password == '') {
        alert('please enter a valid username and password');
        return;
    }

    // window.location.href = 'index.html';

    window.location.href = 'index.html?username=' + encodeURIComponent(username);


  }
