import './index.css';
import Header from './components/Header';
import ScrollToTop from './components/topPage';
import Footer from './components/footer';
import AppRoutes from './Routers/Navigation';
import BackgroundAnimation from './pages/BackgroundAnimation';
import { useEffect } from "react";
import Lenis from '@studio-freight/lenis';

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>

      <Header />
      <ScrollToTop />
      <BackgroundAnimation />
      <AppRoutes />
      <Footer />

    </>


  );
}

export default App;
