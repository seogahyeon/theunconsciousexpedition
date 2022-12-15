const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".closeBtn")

const handleClickOpen = () => {
  modal.style.display = "flex";
}

// const handleClickClose = () => {
// 	modal.classList.remove("flex");
// 	modal.classList.add("none");
// }

closeBtn.addEventListener("click", ()=>{
    modal.style.display = "none";
})