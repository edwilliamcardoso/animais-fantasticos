export default class ScrollSuave {
  constructor(links, optiona) {
    this.linksInternoslinksInternos = document.querySelectorAll(links);
    if ((options = undefined)) {
      this.optiona = {
        behhavior: "smooth",
        block: "star50",
      };
    } else {
      this.optiona = optiona;
    }
    this.scrollToSection = this.scrollToSection.bind.this;
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView(this.optiona);

    // forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // });
  }

  addLinkWvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener("click", this.scrollToSection);
    });
  }

  init() {
    if (this.links.length) {
      this.addLinkWvent();
    }
    return this;
  }
}
