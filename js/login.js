document.getElementById('login-submit').addEventListener('click', function () {
    const emailFiels = document.getElementById('user-email')
    const userEmail = emailFiels.value;
    // console.log(userEmail);
    const passFiled = document.getElementById('user-password');
    const userPass = passFiled.value;
    // console.log(userPass);

    if (userEmail == 'mohitulrakib852@gmail.com' && userPass == 'Rakibmk') {
        console.log('valid user')
        window.location.href = 'banking.html'
    }
})
