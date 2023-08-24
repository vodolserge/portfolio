import Header from './../components/header/Header'

const Home = () => {
    return (
		<>
			<Header />
			<main className="section">
				<div className="container">
					<ul className="content-list">
						<li className="content-list__item">
							<h2 className="title-2">Frontend</h2>
							<p className="skills">
								JavaScript <span>| </span>
								TypeScript <span>| </span>
								ReactJS <span>| </span>
								Redux <span>| </span>
								VueJS <span>| </span>
								VUEX <span>| </span>
								HTML <span>| </span>
								CSS <span>| </span>
								BootStrap <span>| </span>
								MaterialUI <span>| </span>
								TailwindCSS <span>| </span>
								Mocha/Chai/Cypress <span>| </span>
								StyledComponents
							</p>
						</li>
						<li className="content-list__item">
							<h2 className="title-2">Backend</h2>
							<p className="skills">
								PHP <span>| </span>
								PHPUnit <span>| </span>
								OOP: Strong knowledge <span>| </span>
								Symfony(3.4-6) <span>| </span>
								Laravel(7.x) <span>| </span>
								MySQL <span>| </span>
								AWS DynamoDB <span>| </span>
								MongoDB <span>| </span>
								Git <span>| </span>
								Docker <span>| </span>
								Postman <span>| </span>
							</p>
						</li>
					</ul>
				</div>
			</main>
		</>
	);
}

export default Home;