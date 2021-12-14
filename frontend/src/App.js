import logo from './logo.svg';
import './App.css';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Home from './home/Home';



function App() {

  const features = [
    {
      feature_title: 'True/ False',
      feature_desc: `Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Purus in massa tempor nec
      feugiat nisl pretium fusce. Nec feugiat nisl pretium
      fusce id velit.`
    },
    {
      feature_title: 'Multiple choice',
      feature_desc: `Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Purus in massa tempor nec
      feugiat nisl pretium fusce. Nec feugiat nisl pretium
      fusce id velit.`
    },
    {
      feature_title: 'Flashcards',
      feature_desc: `Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Purus in massa tempor nec
      feugiat nisl pretium fusce. Nec feugiat nisl pretium
      fusce id velit.`
    },
  ]
  return (
    <div className="App">
      <main>
        <Navbar />
        <Home features = {features}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
