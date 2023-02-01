import Home from './Components/Home';
import About from './Components/About';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ReactLoading from 'react-loading';
import { useEffect } from 'react';
import { useState } from 'react';


function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  })

  return (
    <>
      {loading ? (
        <div className='flex h-screen justify-center items-center stroke-black text-xl' ><strong>Loading</strong> 
        <ReactLoading type='bars' color='white' width={64} height={64} className="m-2 "/>
        </div>
      ) : (
        <>
          <Header />
          <main>
            <Home />
            <About />
            <Menu />
            <Contact />
          </main>
          <footer>
            <Footer />
          </footer>
        </>
      )}
    </>
  );
}

export default App;
