let userInfo = {
    name: '',
    email: '',
    password: ''
}
localStorage.setItem('USER_INFO', JSON.stringify(userInfo));

let globalSign = {
    state: 'unallowed'
}
localStorage.setItem('GLOBAL_LOG_STATE', JSON.stringify(globalSign));


const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    event.preventDefault();
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    event.preventDefault();
    container.classList.remove("active");
});

const form = document.getElementById('registration-form');
const loginForm = document.getElementById('login-form');
const fullNameInput = document.getElementById('full-name');
const mailInput = document.getElementById('mail');
const passInput = document.getElementById('pass');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const fullNameInputValue = fullNameInput.value;
    const mailInputValue = mailInput.value;
    const passInputValue = passInput.value;

    let valid = true;

    if (fullNameInputValue === '') {
        document.getElementById('full-name-error').textContent = "Username can't be blank.";
        valid = false;
    } else {
        document.getElementById('full-name-error').textContent = '';
    }

    if (mailInputValue === '') {
        document.getElementById('mail-error').textContent = "Email can't be blank.";
        valid = false;
    } else {
        document.getElementById('mail-error').textContent = '';
    }

    if (passInputValue === '') {
        document.getElementById('pass-error').textContent = "Password can't be blank.";
        valid = false;
    } else {
        document.getElementById('pass-error').textContent = '';
    }

    if (passInputValue.length < 8) {
        document.getElementById('pass-error').textContent = "Password must contain at least 8 characters.";
        valid = false;
    } else if (!/[A-Z]/.test(passInputValue)) {
        document.getElementById('pass-error').textContent = 'Password must contain at least 1 capital letter.';
        valid = false;
    } else if (!/\d/.test(passInputValue)) {
        document.getElementById('pass-error').textContent = 'Password must contain at least 1 digit';
        valid = false;
    } else if (!/[!@#$%^&*]/.test(passInputValue)) {
        document.getElementById('pass-error').textContent = 'Password must contain at least 1 symbol';
        valid = false;
    } else {
        document.getElementById('pass-error').textContent = '';
    }

    if (valid == true) {
        document.getElementById('pass-allowed').textContent = 'Register successfully!';
        let userInfo = {
            name: fullNameInputValue,
            email: mailInputValue,
            password: passInputValue
        }
        localStorage.setItem('USER_INFO', JSON.stringify(userInfo));

        let data = JSON.parse(localStorage.getItem('USER_INFO'));
        
        console.log(data);
    }
    if (!valid) {
        event.preventDefault();
    }
});

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const logMailInput = document.getElementById('log-mail');
    const logPassInput = document.getElementById('log-pass');
    const logMailError = document.getElementById('log-mail-error');
    const logPassError = document.getElementById('log-pass-error');

    const logMailValue = logMailInput.value.trim();
    const logPassValue = logPassInput.value;

    let valid = true;
    let data = JSON.parse(localStorage.getItem('USER_INFO'));

    logMailError.textContent = '';
    logPassError.textContent = '';

    if (logMailValue === '') {
        logMailError.textContent = "Email can't be blank.";
        valid = false;
    }

    if (logMailValue != data.email) {
        logMailError.textContent = 'Email does not exist';
        valid = false;
    }

    if (logPassValue === '') {
        logPassError.textContent = "Password can't be blank.";
        valid = false;
    }

    if (logPassValue != data.password) {
        logPassError.textContent = 'Uncorrect password';
        valid = false;
    }

    if (valid == true) {
        document.getElementById('log-allowed').textContent = 'Sign in successfully!';
        console.log('log in successful!');
        let globalSign = {
            state: 'allowed'
        }
        localStorage.setItem('GLOBAL_LOG_STATE', JSON.stringify(globalSign));
        console.log(globalSign);
    }

    if (!valid) {
        event.preventDefault();
    }
});



