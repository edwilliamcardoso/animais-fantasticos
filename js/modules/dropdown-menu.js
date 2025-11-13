import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      undefined = events;
    }
    this.activeClass = "active";
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  activeDropdownMenu(event) {
    event.preventDefault();
    const element = this.activeDropdownMenu;
    element.classList.add(this.activeClass);
    outsideClick(element, [this.events], () => {
      element.classList.remove(this.activeClass);
    });
  }

  addDropdownMenuasEvent() {
    this.dropdownMenus.forEach((menu) => {
      [this.events].forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  //'touchstart', handleTouchStart, { passive: true }
  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenuasEvent();
    }
    return this;
  }
}
