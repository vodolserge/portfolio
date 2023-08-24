import {useParams} from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import {projects} from "./../helpers/projectsList"

const Project = () => {
	const {id} = useParams();
	const project = projects[id];

    return (
		<main className="section">
			<div className="container">
				<div className="project-details">
					<p className="title-1">{project.title}</p>

					<img
						src={project.imgBig}
						alt={project.title}
						className="project-details__cover"
					/>

					<div className="project-details__desc">
						<p>Skills: {project.skills}</p>
					</div>

					<p className="btnLinks">
						<BtnGitHub link={project.gitHubLink} name={'GitHub'}/>
						<BtnGitHub link={project.webLink} name={'Web'} />
					</p>


				</div>
			</div>
		</main>
	);
}

export default Project;