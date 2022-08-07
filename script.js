const containerEl = document.querySelector(".search-bar-container")
const magEl = document.querySelector(".magnifier-icon")

magEl.addEventListener("click", ()=>{
    containerEl.classList.toggle("active")
})