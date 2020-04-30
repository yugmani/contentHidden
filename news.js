let mlink = document.getElementById("morelink");
let mdiv = document.getElementById("morediv");

mlink.addEventListener("click", function(event){
    event.preventDefault();
    mdiv.style.display = (mdiv.style.display === "none") ? "block" : "none";
}, false);

//if this is defined in CSS, it is required here. 
// mdiv.style.display = "none";