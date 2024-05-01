document.addEventListener("DOMContentLoaded", function () {
    includeHTML("partials/carrucel.html", "carrucelContainer");
    includeHTML("partials/nav.html", "navContainer");
    includeHTML("partials/aside.html", "asideContainer");
    includeHTML("partials/footer.html", "footerContainer");
});

function includeHTML(url, containerId) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = this.responseText;
            } else {
                console.error("Container with id '" + containerId + "' not found.");
            }
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}