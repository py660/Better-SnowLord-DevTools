(function() {
    var x = document.createElement("script");
    x.src = "https://cdn.jsdelivr.net/gh/SnowLord7/devconsole@master/main.js";
    x.onerror = alert("Error Loading Developer Console!");
    document.head.appendChild(x);
})()
