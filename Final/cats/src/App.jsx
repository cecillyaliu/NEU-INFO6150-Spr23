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
      <Header setPage={setPage}/>
      {page === 'Home' && <Home/>}
      {page === 'About' && <About/>}
      {page === 'Cats' && <Cats/>}
      {page === 'Form' && <Form/>}
      <Footer/>
    </div>
  )
}

export default App
