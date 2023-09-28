import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import ContentCard from './components/content/ContentCard';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <ContentCard />
      <Footer/>
    </div>
  );
}

export default App;
