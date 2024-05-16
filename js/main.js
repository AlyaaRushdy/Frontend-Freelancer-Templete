const dir = "./images/portfolio-images/";
const headerHeight = document.getElementById("header").offsetHeight;
const imageContainer = document.getElementById("images-container");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav__a");
let imgNamesList = [
  "cabin.png",
  "cake.png",
  "circus.png",
  "game.png",
  "safe.png",
  "submarine.png",
];
let imageElements = "";

// adding images to portfolio section
imgNamesList.forEach((img) => {
  const imgElement = new Image();
  imgElement.setAttribute("src", dir + img);
  imgElement.setAttribute("alt", `${img.split(".")[0]} image`);
  imgElement.setAttribute("class", "portfolio__img");
  imageElements += imgElement.outerHTML;
});
imageContainer.innerHTML = imageElements;

// updating navbar based on current section
window.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY + headerHeight;
  sections.forEach((section) => {
    if (scrollPosition >= section.offsetTop) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (
          section.getAttribute("id") === link.getAttribute("href").substring(1)
        ) {
          link.classList.add("active");
        }
      });
    }
  });
});
