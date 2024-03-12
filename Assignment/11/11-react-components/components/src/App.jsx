import { useState } from 'react'
import Header from './Header';
import Home from './Home';
import About from './About';
import Cats from './Cats';
import Footer from './Footer';
import Form from './Form';
import './css/App.css';


function App() {
  const [page, setPage] = useState('Home');

  return (
    <div className='container'>
      <Header setPage={setPage} />
      {page === 'Home' && <Home  setPage={setPage} />}
      {page === 'About' && <About  setPage={setPage} />}
      {page === 'Cats' && <Cats  setPage={setPage} />}
      {page === 'Form' && <Form  setPage={setPage} />}
      <Footer setPage={setPage}/>
    </div>
  )
}

export default App
