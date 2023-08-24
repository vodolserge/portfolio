import gitHubIcon from './gitHub-black.svg';
import "./style.css"

const BtnGitHub = ({ link, name }) => {
	return (
		<a href={link} target="_blank" rel="noreferrer" className="btn-outline">
			<img src={gitHubIcon} alt="" />
			{name}
		</a>
	);
};

export default BtnGitHub;