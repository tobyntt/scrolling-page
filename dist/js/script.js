// ======================= Navbar Menu  ========================

const navbar = document.querySelector("nav");
const navbarHeight = navbar.offsetHeight;
const linkContainers = document.querySelectorAll("li a");

linkContainers.forEach((linkContainer) => {
  linkContainer.addEventListener("click", (event) => {
    event.preventDefault();

    // once clicked, remove all the active style on all menu items
    linkContainers.forEach((linkContainer) => {
      linkContainer.parentElement.classList.remove("link-container-active");
    });

    // then add the active style on the clicked menu item
    linkContainer.parentElement.classList.add("link-container-active");

    // get the href to find the id of the clicked section and scroll to it
    const targetId = linkContainer.getAttribute("href");
    const targetElement = document.getElementById(targetId);
    const topOffset = targetElement.offsetTop;

    window.scrollTo({
      // this needs to minus the heigh of navbar + 26
      top: topOffset - (navbarHeight + 26),
      behavior: "smooth",
    });
  });
});

// ======================= Scroll Up Button ========================
const scrollUpButton = document.getElementById("scroll-up-button");

// when clicked, moving up to the navbar position
scrollUpButton.addEventListener("click", (event) => {
  navTopoffset = navbar.offsetTop;
  window.scrollTo({ top: navTopoffset, behavior: "smooth" });
});

// dectect when the page reach to the end to show the button
window.onscroll = function () {
  if (
    window.innerHeight + Math.ceil(window.pageYOffset) >=
    document.body.offsetHeight
  ) {
    scrollUpButton.style.cssText = "opacity: 1; transition: all 250ms ease";
  } else {
    scrollUpButton.style.opacity = "0";
  }
};
