document.querySelectorAll("main#portfoliopage button").forEach((button) => {
  button.addEventListener("click", function () {
    // Remove "active" class from all buttons
    document.querySelectorAll("main#portfoliopage button").forEach((btn) => {
      btn.classList.remove("active");
    });

    // Add "active" class to the clicked button
    this.classList.add("active");
  });
});
