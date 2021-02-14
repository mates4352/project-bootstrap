const play = document.querySelector(".play__button")
const video = document.querySelector(".modal__video")
const moda = document.querySelector(".moda")

window.addEventListener('click', (event) => {
	if (event.target.classList.contains("play__button")) {
		video.play()
		moda.classList.add("active")
	}
	if (event.target.classList.contains("moda")) {
		video.pause()
		moda.classList.remove("active")
	}
})