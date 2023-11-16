let permit= JSON.parse(localStorage.getItem('GLOBAL_LOG_STATE'));
console.log(permit.state);

let formAll = document.getElementById('req-log');

if (permit.state == 'allowed') {
    console.log('login successful!');
    let data = JSON.parse(localStorage.getItem('USER_INFO'));
    document.getElementById("user-log-name").innerHTML = data.name;
    formAll.classList.add("hidden-content");
}
