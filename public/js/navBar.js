class menuNavBar {
    constructor(menu , list , links){
        this.menu = document.querySelector(menu);
        this.list = document.querySelector(list);
        this.links = document.querySelector(links);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind (this);
    }

    animateLinks () {
        this.links.forEach ((link , index) =>{
            link.style.animation 
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards $ {
                    index / 7 + 0.3
                }s`);
        
        });
    }
}