var movementStrength = 25;

const hero = document.getElementById("section-hero");

var modal = document.getElementById("offerModal");

var closeButton = document.querySelector(".close-button");

closeButton.onclick = function () {
  modal.style.display = "none";
};

hero.addEventListener("mousemove", (e) => {
  const div = document.createElement("div");
  div.classList.add("hero-section-mouseClick");
  div.style.left = e.pageX + "px";
  div.style.top = e.pageY + "px";
  const box = document.getElementById("section-hero");
  box.appendChild(div);
  setTimeout(() => {
    box.removeChild(div);
    div.remove();
  }, 200);
});
