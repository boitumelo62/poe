const imageViewers = document.querySelectorAll(".short, .latest");
const imageViewerContainer = document.querySelector(".image-viewer");
const imageViewerImage = imageViewerContainer.querySelector("img");
const h1 = imageViewerContainer.querySelector(".image-viewer h1");
let currentIndex = 0;
const imageData = [
  { src: "images/content/subpages/limedog.png", alt: "Limedog" },
  { src: "images/content/subpages/sunshine_tours.png", alt: "Sunshine tours" },
  { src: "images/content/subpages/izitshalo.png", alt: "Izitshalo" },
  { src: "images/content/subpages/mellow.png", alt: "Mellow" },
  { src: "images/content/subpages/namastay.png", alt: "Namastay" },
  { src: "images/content/subpages/grit.png", alt: "Grit" },
  { src: "images/content/subpages/shutter_speed.png", alt: "Shutter Speed" },
  { src: "images/content/subpages/aetheros.png", alt: "Aetheros" },
  { src: "images/content/subpages/tag_markers.png", alt: "Tag Markers" },
  { src: "images/content/subpages/rabel_radiance.png", alt: "Rebel Radiance" },
];
const imageViewer = document.querySelector(".image-viewer");

imageViewers.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    const imageUrl = button.getAttribute("data-image");
    imageViewerImage.src = imageData[index].src;
    imageViewerContainer.style.display = "block";
    currentIndex = index;
    console.log(currentIndex);
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    currentIndex = (currentIndex - 1 + imageData.length) % imageData.length;
    imageViewerImage.src = imageData[currentIndex].src;
  } else if (e.key === "ArrowRight") {
    currentIndex = (currentIndex + 1) % imageData.length;
    imageViewerImage.src = imageData[currentIndex].src;
  } else if (e.key === "Escape") {
    imageViewerContainer.style.display = "none";
  }
});

imageViewerContainer.addEventListener("click", (e) => {
  if (e.target === imageViewerContainer) {
    imageViewerContainer.style.display = "none";
  }
  if (e.target === h1) {
    imageViewerContainer.style.display = "none";
  }
});
