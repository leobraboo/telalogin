
const accordion_item = document.querySelectorAll(".accordion_item");

accordion_item.forEach((item) => {
  const accordion_header_item = item.querySelector(".accordion_header");

  accordion_header_item.addEventListener("click", () => {
    const accordion_content_item = item.querySelector(".accordion_content");

    const item_actived = document.querySelector(".active");

    VerifyActive(item, accordion_content_item, item_actived);
  });
});

function VerifyActive(item, content, content_actived) {
  const icon_item = item.querySelector(".icon");
  const icons= document.querySelectorAll(".icon");

  icons.forEach((item) => (item.innerHTML = "+"));

  if (content_actived) {
    content_actived.style.height = 0;
    content_actived.classList.remove("active");
  }

  if (content !== content_actived) {
    icon_item.innerHTML = "-";
    content.classList.add("active");
    content.style.height = content.scrollHeight + 10 + "px";
  }
}

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
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3
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

