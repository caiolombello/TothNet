import React from 'react';
import './home.css';

function Home() {
	return (
		<body className="fundo">
			<div className="navbar">

				<img src="./Logo.png" className="logo" alt="TothNet Logo"></img>

				<div classname="login">
					<div className="loginButton">
						<p className="loginText">Já sou aluno</p>

					</div>
				</div>
			</div>

			<div>
				<h1 className="titulo">A melhor plataforma para sua escola.</h1>
				<p className="desc">O TothNet é o sistema de gestão escolar mais completo. Comece a criar seu ensino online em minutos!</p>
			</div>
		</body>
	);
}

export default Home;
