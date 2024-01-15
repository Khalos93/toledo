import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import HomePage from './component/HomePage/HomePage';
import MenuPage from './component/MenuPage/MenuPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/story" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
