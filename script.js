window.onload = () => {

    setTimeout(() => {

        document.getElementById("intro").style.display = "none";

        document.getElementById("main-content").style.opacity = "1";

        document.getElementById("main-content").style.transition =
        "opacity 0.8s ease";

    }, 1800);

};