import HelloWorld from './HelloWorld';
import React from 'react'
import Button from "./Button";
import SayName from "./SayName";
import Perfil from "./Perfil";

function App() {

	return (
		<div>
			<HelloWorld />
			<Button cor="#00ff00" frase="Confirma"/>
			<Button cor="#ff0000" frase="Recusar" />
			<SayName nome="Jean" />
			<Perfil foto="https://picsum.photos/200" nome="Jean" idade={29} />
		</div>
	);
}

export default App;
