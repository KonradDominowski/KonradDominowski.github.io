window.onload = () => {
	setTimeout(() => {
		document.querySelector('.learn-at-home').style.opacity = 1
	}, 250)
	setTimeout(() => {
		document.querySelector('.second-line').style.opacity = 1
	}, 1000)
	setTimeout(() => {
		document.querySelector('.third-line').style.opacity = 1
	}, 1750)
}

const sessions = document.querySelectorAll('.session')

sessions.forEach(session => {
	session.addEventListener('mouseenter', () => {
		session.lastElementChild.classList.toggle('hide')
		session.lastElementChild.classList.toggle('show')
	})
	session.addEventListener('mouseleave', () => {
		session.lastElementChild.classList.toggle('hide')
		session.lastElementChild.classList.toggle('show')
	})
})