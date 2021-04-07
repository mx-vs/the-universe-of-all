import './App.css';
import Header from "./components/Header";
import Main from "./components/Main/Main";
import Aside from "./components/Aside";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Aside />
      <Footer />
    </div>
  );
}

export default App;
