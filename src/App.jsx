// App.jsx
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Overview, Navbar, Works, StarsCanvas, Footer } from './components';
import Intro from './components/Intro';
import Toast from './components/Toast';
import { useState, useEffect } from 'react';

function App() {
  const [display, setDisplay] = useState(false);
  const [toast, setToast] = useState({ isVisible: true, message: 'Click anywhere and press any key to continue' });

  const openLaptop = () => {
    setDisplay(true);
    closeToast();
  };

  const resetDisplay = () => {
    setDisplay(false);
    showToast('Click anywhere and press any key to continue');
  };

  const showToast = (message) => {
    setToast({ isVisible: true, message });
  };

  const closeToast = () => {
    setToast({ isVisible: false, message: '' });
  };

  useEffect(() => {
    document.addEventListener('click', openLaptop);
    document.addEventListener('keydown', openLaptop);

    return () => {
      document.removeEventListener('click', openLaptop);
      document.removeEventListener('keydown', openLaptop);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="app relative w-full z-0 bg-primary border-black outline-none scrollbar-none" tabIndex={0}>
        <Navbar display={display} setDisplay={setDisplay} />

        {!display && (
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Overview open={setDisplay} />
            <Toast message={toast.message} isVisible={toast.isVisible} onClose={closeToast} />
            </div>
        )}

        {display && (
          <div className="content">
            <About />
            <Works />
            <Intro />
            <div className="relative z-0">
              <Contact />
            </div>
            <Footer close={resetDisplay} />
            <StarsCanvas />
          </div>
        )}

      </div>
    </BrowserRouter>
  );
}

export default App;
