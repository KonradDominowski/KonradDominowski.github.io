import styles from './Header.module.scss'

import logo from './../media/images/logo.jpeg'

export default function Header() {

	const scrollToSection = e => {
		e.preventDefault()
		const scrollTarget = e.target.dataset.to

		if (!scrollTarget) return

		document.querySelector(`#${scrollTarget}`).scrollIntoView({ behavior: 'smooth' })
	}

	return <header>
		<div className={ styles.navDiv }>
			<nav className={ styles.nav }>
				<div className={ styles.navLogo }>
					<a href="/">
						<img className={ styles.navLogoImg } src={ logo } alt='Maverick Language Studio Logo'></img>
					</a>
				</div>
				<div className={ styles.navLinks } onClick={ scrollToSection }>
					<div className={ styles.navLink }>
						<button className={ styles.navLink } data-to="courses">Kursy</button>
					</div>
					<div className={ styles.navLink }>
						<button className={ styles.navLink } data-to="about">O mnie</button>
					</div>
					<div className={ styles.navLink }>
						<button className={ styles.navLink } data-to="contact">Kontakt</button>
					</div>
				</div>
			</nav>
		</div >
	</header >
}
