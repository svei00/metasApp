import './App.css';
import Header from './components/share/js/Header'
import Main from './components/share/js/Main'
import Footer from './components/share/js/Footer'
import List from './components/share/list/List'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main>
        <List></List>
      </Main>
      <Footer></Footer>      
    </div>
  );
}

export default App;
