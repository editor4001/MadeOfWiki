alert("Type f11 to make fullscreen (recommended)")

function toggleDiv() {
  const main = document.getElementById("main");
  const second = document.getElementById("second");

  main.classList.toggle("active");
  second.classList.toggle("active");
}
