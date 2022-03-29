let lista = document.getElementsByClassName('listaFilme')
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
              index / 1 + 0.2
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

  function todos(lista){
      res.innerHTML = 
                        `<li>
                            <figure>
                                <img src="image (1).png" alt="A filha do rei">
                                <h2>A filha do rei </h2>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src="image (10).png" alt="">
                                <h2>007 Sem tempo para morrer</h2>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src="image (13).png" alt="">
                                <h2>VENOM Tempo de carnificina </h2>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src="image (15).png" alt="">
                                <h2>Alerta Vermelho</h2>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src="image (16).png" alt="">
                                <h2>SHANG-CHI </h2>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src="image (18).png" alt="">
                                <h2>Army of Dead </h2>
                            </figure>
                        </li>

                        <li>
                            <figure>
                                <img src="image (21).png" alt="">
                                <h2>HALLOWEEN </h2>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src="image (22).png" alt="">
                                <h2>PÂNICO </h2>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src="image (3).png" alt="">
                                <h2>Ghostbusters </h2>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src="image (5).png" alt="">
                                <h2>Não olhe para cima </h2>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src="image (6).png" alt="">
                                <h2>MATRIX </h2>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src="image (7).png" alt="">
                                <h2>Resident Evil
                                </h2>
                            </figure>
                        </li>`
  }
function drama(lista){
    if (click){
            ul.innerHTML = 
                `
                    <li>
                        <figure>
                            <img src="image (1).png" alt="A filha do rei">
                            <h2>A filha do rei </h2>
                        </figure>
                    </li>
            }`
}