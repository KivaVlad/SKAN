import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './pages/home_page/Home';
import RegisrationPage from './pages/registation page/Registration';



function App() {

  return (
    <div className='App'>
      <Header />
      <main>
        <Routes>
          <Route path='*' element={<HomePage />} />
          <Route path='/registration' element={<RegisrationPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
      
  )
}

export default App;
