import './index.css';
import Header from './components/Header';
import ScrollToTop from './components/topPage';
import Footer from './components/footer';
import AppRoutes from './Routers/Navigation';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
  {/* Bubble Backgrounds */}
  <div className="absolute top-[10%] left-[5%] w-80 h-80 bg-blue-300 rounded-full opacity-30 blur-[100px] z-0 animate-pulse" />
  <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-pink-300 rounded-full opacity-30 blur-[100px] z-0 animate-pulse" />
  <div className="absolute top-[45%] left-[30%] w-52 h-52 bg-yellow-300 rounded-full opacity-30 blur-[90px] z-0" />
  <div className="absolute bottom-[15%] left-[20%] w-64 h-64 bg-green-300 rounded-full opacity-25 blur-[80px] z-0" />
  <div className="absolute top-0 right-0 w-40 h-40 bg-purple-300 rounded-full opacity-25 blur-[80px] z-0" />

  {/* Your Main App */}
  <div className="relative z-10">
    <Header />
    <ScrollToTop />
    <AppRoutes />
    <Footer />
  </div>
</div>

  );
}

export default App;
