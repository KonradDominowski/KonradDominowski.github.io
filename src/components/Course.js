import { useState } from 'react'
import styles from './Course.module.scss'

export default function Course({ course }) {
	const [showCourseDescription, setShowCourseDescription] = useState(false)

	const sessionDescriptionClasses = `${styles.sessionDescription} ${(showCourseDescription) ? styles.show : styles.hide}`

	return <div
		className={ styles.session }
		onMouseEnter={ () => setShowCourseDescription(state => !state) }
		onMouseLeave={ () => setShowCourseDescription(state => !state) }
	>
		<img src={ course.img.src } alt={ course.img.alt } className={ styles.sessionImg }></img>
		<p className={ styles.sessionTitle }>{ course.title }</p>
		<div className={ sessionDescriptionClasses }>
			<div>
				<div className={ styles.sessionTitleDiv }>
					<p className={ styles.sessionTitle }>{ course.title }</p>
				</div>
				<p>{ course.description }</p>
			</div>
			<div className={ styles.sessionLinkContainer }>
				<a href="" className={ styles.sessionLink }>Learn more...</a>
			</div>
		</div>
	</div >
}
