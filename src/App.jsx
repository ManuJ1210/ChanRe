import './index.css';
import Header from './components/Header';
import ScrollToTop from './components/topPage';
import Footer from './components/footer';
import AppRoutes from './Routers/Navigation';
import BackgroundAnimation from './pages/BackgroundAnimation';
function App() {
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
