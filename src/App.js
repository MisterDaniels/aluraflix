import React from 'react';
import Menu from './components/Menu';
import initialData from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carrousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
	return (
		<div>
			<Menu />

			<BannerMain
				videoTitle={ initialData.categorias[0].videos[0].titulo }
				url={ initialData.categorias[0].videos[0].url }
				videoDescription={ 'Caso esteja de saco cheio, tem essa compilação de "curb your" da hora, aqui.' }
			/>

			<Carrousel
				ignoreFirstVideo
				category={ initialData.categorias[0] }
			/>

			<Footer />
		</div>
	);
}

export default App;