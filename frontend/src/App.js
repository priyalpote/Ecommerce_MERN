import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom'
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <Router>
    <Header />
    <main>  
      <Container className='py-3'> 
      <Routes>
        <Route path='/' element={<HomeScreen />} exact ></Route>
        <Route path='/product/:id' element={<ProductScreen />} ></Route>
      </Routes> 
        
      </Container>  
    </main>
    <Footer />
    </Router>
  );
}

export default App;
