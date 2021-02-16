const play = document.querySelector(".play__button")
const video = document.querySelector(".modal__video")
const moda = document.querySelector(".moda")
const body = document.querySelector('.body')

window.addEventListener('click', (event) => {
	if (event.target.classList.contains("play__button")) {
		video.play()
		moda.classList.add("active")
		body.classList.add("lock")
	}
	if (event.target.classList.contains("moda")) {
		video.pause()
		moda.classList.remove("active")
		body.classList.remove("lock")
	}
})