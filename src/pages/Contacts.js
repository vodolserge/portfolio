const Contacts = () => {
    return (
		<main className="section">
			<div className="container">
				<h3 className="title-1">Contacts</h3>

				<ul className="content-list">
					<li className="content-list__item">
						<h4 className="title-2">Location</h4>
						<p>Wisconsin, United States</p>
					</li>
					<li className="content-list__item">
						<h4 className="title-2">Phone</h4>
						<a href="tel:+19177763757">+1 (917) 776-37-57</a>
					</li>
					<li className="content-list__item">
						<h4 className="title-2">Email</h4>
						<a href="mailto:vodol.serg@gmail.com">
							vodol.serg@gmail.com
						</a>
					</li>
					<li className="content-list__item">
						<h4 className="title-2">Telegram</h4>
						<a href="https://t.me/Vodol_39" target="_blank">Text me in Telegram</a>
					</li>
				</ul>
			</div>
		</main>
	);
}

export default Contacts;