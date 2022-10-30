function main () {
    var v = document.getElementById("grow-me");
        v.className += "big";

    var b = document.getElementById("shrink-me")
       b.classList.remove("big");

    console.log(document.getElementsByTagName("li"));
}

