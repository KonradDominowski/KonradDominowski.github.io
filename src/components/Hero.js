import styles from './Hero.module.scss'
import warsaw720p from './../media/videos/warsaw720p.mp4'
import warsaw1080p from './../media/videos/warsaw1080p.mp4'

export default function Hero() {
	const scrollPastHeroSection = e => {
		e.preventDefault()

		document.querySelector('#courses').scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	}

	return (<>
		<div class={ styles.hero }>
			<video autoPlay muted loop className={ styles.video } poster="images/videos/london-stock-poster.jpg"
				src={ warsaw1080p }></video>
			<div>
				<h1>
					<span class={ styles.firstLine }>Hands-on-learning online <br></br></span>
					<span class={ styles.secondLine }>make it real and comfy</span>
				</h1>
			</div>
			<div class={ styles.heroLearnMore }>
				<button class={ styles.heroScroll } onClick={ scrollPastHeroSection }>Learn more <span>↓</span></button>
			</div>
		</div>
	</>)
}
