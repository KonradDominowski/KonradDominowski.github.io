import styles from './Footer.module.scss'

import logo from './../media/images/logo.jpeg'
import marker_light from './../media/icons/marker_light.png'
import mail from './../media/icons/mail.png'
import telephone from './../media/icons/telephone.png'

export default function Footer() {
	return <div className={ styles.footerBackground }>
		<div className={ styles.footer } id="contact">

			<div className={ `${styles.footerColumn} ${styles.logoContact}` }>
				<img src={ logo } alt="" className={ styles.footerLogo }></img>
				<div>
					<a href="https://goo.gl/maps/RYHnbkTihtvK9ton8" className={ styles.addressContainer }>
						<div className={ styles.addressIcon }>
							<img src={ marker_light } alt=""></img>
						</div>
						<p>
							ul. Jabłonna 5 <br></br>
							Jabłonna k. Warszawy
						</p>
					</a>

					<a href="mailto:example@example.com" className={ styles.addressContainer }>
						<div className={ styles.addressIcon }>
							<img src={ mail } alt=""></img>
						</div>
						example@example.com
					</a>

					<a href="tel:+48123456789" className={ styles.addressContainer }>
						<div className={ styles.addressIcon }>
							<img src={ telephone } alt=""></img>
						</div>
						+48 123 456 789
					</a>

				</div>
			</div>

			<div className={ `${styles.footerColumn} ${styles.footerCourses}` }>
				<h4>Courses</h4>
				<ul className={ styles.footerList }>
					<li><a href="#courses">One to One</a></li>
					<li><a href="#courses">One to Two</a></li>
					<li><a href="#courses">Peer to Peer</a></li>
				</ul>
			</div>

			<div className={ styles.footerColumn }>
				<h4>LINKS</h4>
				<ul className={ styles.footerList }>
					<li><a href="#about">About me</a></li>
				</ul>
			</div>
		</div>
	</div>
}
