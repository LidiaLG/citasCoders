import Footer from './Components/Footer/Footer';
import Router from './router/Router';
import Navbar from './Components/Navbar/Navbar';
import './Scss/reset.scss';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Router></Router>
      <Footer></Footer>
    </>
  );
}

export default App;
