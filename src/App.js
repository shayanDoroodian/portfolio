import Header from './components/header/Header';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Nav from './components/nav/Nav';
import Potrfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
	return (
		<div className='App'>
			<Header></Header>
			<Nav></Nav>
			<About></About>
			<Experience></Experience>
			<Services></Services>
			<Potrfolio></Potrfolio>
			<Testimonials></Testimonials>
			<Contact></Contact>
			<Footer></Footer>
		</div>
	);
}

export default App;
