document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("cookiesAccepted") !== "true") {
        document.getElementById("cookiesBar").style.display = "block";
        document.getElementById("cookiesBar").classList.add("active");
    }
});

function acceptCookies() {
    localStorage.setItem("cookiesAccepted", "true");
    document.getElementById("cookiesBar").style.display = "none";
}

function rejectCookies() {
    localStorage.setItem("cookiesAccepted", "false");
    document.getElementById("cookiesBar").style.display = "none";
}
