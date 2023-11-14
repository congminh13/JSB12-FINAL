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
        document.getElementById('full-name-error').textContent = 'Tên đăng nhập không được để trống';
        valid = false;
    } else {
        document.getElementById('full-name-error').textContent = '';
    }

    if (mailInputValue === '') {
        document.getElementById('mail-error').textContent = 'Hộp thư điện tử không được để trống';
        valid = false;
    } else {
        document.getElementById('mail-error').textContent = '';
    }

    if (passInputValue === '') {
        document.getElementById('pass-error').textContent = 'Mật khẩu không được để trống';
        valid = false;
    } else {
        document.getElementById('pass-error').textContent = '';
    }

    if (passInputValue.length < 8) {
        document.getElementById('pass-error').textContent = 'Mật khẩu phải có ít nhất 8 ký tự.';
        valid = false;
    } else if (!/[A-Z]/.test(passInputValue)) {
        document.getElementById('pass-error').textContent = 'Mật khẩu phải chứa ít nhất 1 ký tự viết hoa.';
        valid = false;
    } else if (!/\d/.test(passInputValue)) {
        document.getElementById('pass-error').textContent = 'Mật khẩu phải chứa ít nhất 1 chữ số.';
        valid = false;
    } else if (!/[!@#$%^&*]/.test(passInputValue)) {
        document.getElementById('pass-error').textContent = 'Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt.';
        valid = false;
    } else {
        document.getElementById('pass-error').textContent = '';
    }

    if (valid == true) {
        document.getElementById('pass-allowed').textContent = 'Đã đăng ký thành công.';
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
        logMailError.textContent = 'Hộp thư điện tử không được để trống';
        valid = false;
    }

    if (logMailValue != data.email) {
        logMailError.textContent = 'Hộp thư điện tử không tồn tại';
        valid = false;
    }

    if (logPassValue === '') {
        logPassError.textContent = 'Mật khẩu không được để trống';
        valid = false;
    }

    if (logPassValue != data.password) {
        logPassError.textContent = 'Mật khẩu không đúng';
        valid = false;
    }

    if (valid == true) {
        document.getElementById('log-allowed').textContent = 'Đã đăng nhập thành công.';
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



