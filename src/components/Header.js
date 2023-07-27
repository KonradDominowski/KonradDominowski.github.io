import styles from './Header.module.css'

import logo from './../media/images/logo.jpeg'

export default function Header() {

	const scrollToSection = e => {
		e.preventDefault()

		const scrollTarget = e.target.dataset.to
		document.querySelector(`#${scrollTarget}`).scrollIntoView({ behavior: 'smooth' })
	}

	return <header>
		<div className={ styles.navDiv }>
			<nav className={ styles.nav }>
				<div className={ styles.navLogo }>
					<a href="#">
						<img className={ styles.navLogoImg } src={ logo }></img>
					</a>
				</div>
				<div className={ styles.navLinks } onClick={ scrollToSection }>
					<div className={ styles.navLink }>
						<a className={ styles.navLink } data-to="courses" href="">Kursy</a>
					</div>
					<div className={ styles.navLink }>
						<a className={ styles.navLink } data-to="about" href="">O mnie</a>
					</div>
					<div className={ styles.navLink }>
						<a className={ styles.navLink } data-to="contact" href="">Kontakt</a>
					</div>
				</div>
			</nav>
		</div >
	</header >
}
