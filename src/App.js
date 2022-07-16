import './App.css';
import Header from './components/share/js/Header'
import Main from './components/share/js/Main'
import Footer from './components/share/js/Footer'
import Goal from './components/share/list/Goals'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main>
        <Goal></Goal>
      </Main>
      <Footer></Footer>      
    </div>
  );
}

export default App;
