const dir = "./images/portfolio-images/";
let imgNamesList = [
  "cabin.png",
  "cake.png",
  "circus.png",
  "game.png",
  "safe.png",
  "submarine.png",
];
let imageElements = "";

imgNamesList.forEach((img) => {
  const imgElement = new Image();
  imgElement.setAttribute("src", dir + img);
  imgElement.setAttribute("alt", `${img.split(".")[0]} image`);
  imgElement.setAttribute("class", "portfolio__img");
  imageElements += imgElement.outerHTML;
});

document.getElementById("images-container").innerHTML = imageElements;
