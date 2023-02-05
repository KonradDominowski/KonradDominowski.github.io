const sessions = document.querySelectorAll('.session')
const sections = document.querySelectorAll('section')
const btnHeroScroll = document.querySelector('.hero-scroll')

window.onload = () => {
	setTimeout(() => {
		document.querySelector('.first-line').style.opacity = 1
	}, 500)
	setTimeout(() => {
		document.querySelector('.second-line').style.opacity = 1
	}, 1500)
}


// ============================
// Scroll past the hero section

btnHeroScroll.addEventListener('click', e => {
	e.preventDefault()

	document.querySelector('.our-courses').scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	})
})


// ============================
// Sections revealing on scroll

const revealSection = (entries, observer) => {
	const [entry] = entries

	if (!entry.isIntersecting) return
	entry.target.firstElementChild.classList.remove('section-hidden')
	observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(
	revealSection, {
	root: null,
	threshold: 0.1
}
)

sections.forEach(s => {
	s.firstElementChild.classList.add('section-hidden')
	sectionObserver.observe(s)
})


// ========================
// Session details on hover

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