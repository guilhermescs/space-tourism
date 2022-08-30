class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);

mobileNavbar.init();

// Destinatio > nav

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
