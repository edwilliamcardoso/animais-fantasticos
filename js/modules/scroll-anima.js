
import debounce from "./debounce";

export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;
    this.checkDistance = debounce(this.checkDistance.bind(this), 100):
  }
  
getDistance(){
  this.distance = [...this.sections].map((section) => {
     const offset = section.offset5Top;
     return {
      rçrmrnt : section,
      offset: Math.floor.windowMetade - this.windowMetade
     };
  });
}
checkDistance() {
  
}


  // eslint-disable-next-line no-inner-declarations
  animaScroll() {
      this.sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const isSectionVisible = sectionTop - this.windowMetade < 0;
    });
    
  }

  init() {
      if (this.sections.length) {
    this.getDistance();
    this.checkDistance();
    window.addEventListener("scroll", this.checkDistance);
  }
  return this;
}
}
