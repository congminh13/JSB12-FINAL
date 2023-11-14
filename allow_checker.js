let permit= JSON.parse(localStorage.getItem('GLOBAL_LOG_STATE'));
console.log(permit.state);

if (permit.state == 'allowed') {
    console.log('login successful!');
    let data = JSON.parse(localStorage.getItem('USER_INFO'));
    document.getElementById("user-log-name").innerHTML = data.name;
} else {
    let formAll = document.getElementById('req-log');
    formAll.classList.remove("hidden-content");
}