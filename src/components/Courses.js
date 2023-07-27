import blindMan from './../media/images/blindMan.jpeg'
import styles from './Courses.module.css'
import oneToOne from './../media/images/oneToOne.jpg'
import oneToTwo from './../media/images/oneToTwo.jpeg'
import peerToPeer from './../media/images/peerToPeer.jpeg'
import Course from './Course'

const courses = [
	{
		title: 'One To One',
		description: 'Students will have their individual level assessed and then classes are customized to fit their specific requirements.',
		img: {
			src: oneToOne,
			alt: 'Teacher teaching a student'
		}
	},
	{
		title: 'One To Two',
		description: 'Two students with no other language in common than English - set in pairs attend a tailor-made course with the teacher who equips them with the necessary tools to improve their communication in English.',
		img: {
			src: oneToTwo,
			alt: 'Teacher teaching two students',
		}
	},
	{
		title: 'Peer To Peer',
		description: `Peer-to-peer teaching: natives to different languages can teach each other their mother's tongue in a specifically designed course with the tutor's help. Such course is prepared individually to the student's needs upon request.`,
		img: {
			src: peerToPeer,
			alt: 'Friends learning together'
		}
	},
]

export default function Courses() {
	return <>
		<section id="courses">
			<div className={ styles.courses }>
				<div className={ styles.coursesHeader }>
					<h1>My Courses</h1>
					<p>
						Check out my courses and pick one that best suits your needs
					</p>
				</div>
				<div className={ styles.coursesPhoto }>
					<img src={ blindMan } alt=""></img>
				</div>
			</div>
		</section>

		<section>
			<div className={ styles.sessions }>
				{ courses.map(course => <Course course={ course } />) }
			</div>
		</section>
	</>
}
