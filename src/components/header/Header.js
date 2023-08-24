import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					Hi, my name is <em>Serhii Vodolazhskyi</em>
					<br />a Frontend/Backend developer
				</h1>
				<div className="header__text">
					<p>with passion for learning and creating.</p>
				</div>
				<a href="https://drive.google.com/file/d/1hN3x8mL8FPZ4BHhvDyazGgXFc0Q7dLyK/view?usp=sharing"
				   target="_blank"
				   rel="noopener noreferrer"
				   className="btn"
				>
					Download CV
				</a>
			</div>
		</header>
	);
}

export default Header;