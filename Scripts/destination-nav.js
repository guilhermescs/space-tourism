var a = document.getElementById("action-btn-moon");

a.addEventListener("click", function(){
    
    var moon = document.getElementById("moon");
    var mars = document.getElementById("mars");
    var europa = document.getElementById("europa");
    var titan = document.getElementById("titan");

    moon.style.display = "flex"
    mars.style.display = "none"
    europa.style.display = "none"
    titan.style.display = "none"
    
});

var a = document.getElementById("action-btn-mars");

a.addEventListener("click", function(){
    
    var moon = document.getElementById("moon");
    var mars = document.getElementById("mars");
    var europa = document.getElementById("europa");
    var titan = document.getElementById("titan");

    moon.style.display = "none"
    mars.style.display = "flex"
    europa.style.display = "none"
    titan.style.display = "none"
    
});

var a = document.getElementById("action-btn-europa");

a.addEventListener("click", function(){
    
    var moon = document.getElementById("moon");
    var mars = document.getElementById("mars");
    var europa = document.getElementById("europa");
    var titan = document.getElementById("titan");

    moon.style.display = "none"
    mars.style.display = "none"
    europa.style.display = "flex"
    titan.style.display = "none"
    
});

var a = document.getElementById("action-btn-titan");

a.addEventListener("click", function(){
    
    var moon = document.getElementById("moon");
    var mars = document.getElementById("mars");
    var europa = document.getElementById("europa");
    var titan = document.getElementById("titan");

    moon.style.display = "none"
    mars.style.display = "none"
    europa.style.display = "none"
    titan.style.display = "flex"
    
});