document.addEventListener("DOMContentLoaded", function () {
    const sidebarLinks = document.querySelectorAll(".sidebar-link");
    sidebarLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            sidebarLinks.forEach(function (l) {
                l.classList.remove("active");
            });
            link.classList.add("active");
        });
    });
});
    