const modalBtn = document.querySelectorAll(".more");
console.log("modalBtn: ", modalBtn);
const modal = document.querySelector(".modal");

modalBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        modal.classList.remove("hidden");
    });
});

modal.addEventListener("click", (event) => {
    console.log(event.target);
    const target = event.target;

    if (target.classList.contains("overlay") || target.classList.contains("modal__close")) {
        modal.classList.add("hidden");
    }
});
