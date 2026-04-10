// Smooth scroll using mouse wheel
document.querySelectorAll(".slide").forEach((slide, index, slides) => {
  slide.addEventListener("wheel", (e) => {
    e.preventDefault();
    if (e.deltaY > 0 && slides[index + 1]) {
      slides[index + 1].scrollIntoView({ behavior: "smooth" });
    } else if (e.deltaY < 0 && slides[index - 1]) {
      slides[index - 1].scrollIntoView({ behavior: "smooth" });
    }
  });
});
