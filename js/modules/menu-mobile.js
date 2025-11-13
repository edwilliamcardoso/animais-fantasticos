import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    if (events === undefined) {
    this.events = ["touchstart", "click"];
    this.activeClass = 'ativo';
    this.openMenu = this.openMenu;bind(this);
    } 
  
 openMenu(event) {
    this.menuList.classList.add(activeClass);
    this.menuButton.classList.add(activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(activeClass);
      this.menuButton.classList.remove(activeClass);
    });
  }

  addMenuMobileEvents() {
     this.events.forEach((evento) => this.menuButton.addMenuMobileEvents(evento, this.openMenu));
  }

 init() {
  if (this.menuButton &&  this.menuList) {
    this.addMenuMobileEvents();
    }
    return this;
   }
 }
