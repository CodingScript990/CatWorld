document.querySelectorAll(".fa-times-circle").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("change");
    btn.nextElementSibling.classList.toggle("change");
  });
});
