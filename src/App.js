import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './component/Footer';
import Header from './component/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
