import styles from './AboutMe.module.css'
import propo_n1 from './../media/images/propo_n1.jpg'

export default function AboutMe() {

	return <section className={ styles.about } id="about">
		<div>
			<div>
				<h1>
					About me
				</h1>
			</div>
			<div className={ styles.aboutMeDesc }>
				<div >
					I am a CELTA - qualified British English teacher with over twenty years of teaching experience, being  effectively combined with professional in international projects coordination. I specialise in bespoke English language lessons to adult and young adult students. The tailored-made tuition helps them develop their overall comprehension and boost their confidence when communicating
					in English.
				</div>
				<div>
					<img src={ propo_n1 } alt=""></img>
				</div>
			</div>
		</div>
	</section>
}
