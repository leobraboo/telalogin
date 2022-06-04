class MenuNavbar {
    constructor(menu, list, links) {
      this.mobileMenu = document.querySelector(menu);
      this.navList = document.querySelector(list);
      this.navLinks = document.querySelectorAll(links);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.links.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.list.classList.toggle(this.activeClass);
      this.menu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.menu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.menu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const menuNavbar = new menuNavbar(
    ".menuNavbar",
    ".nav-list",
    ".nav-list li",
  );
  menuNavbar.init();

