import './index.css'
import Header from './components/Header'
import ScrollToTop from './components/topPage'
import Footer from './components/footer'
import AppRoutes from './Routers/Navigation'




function App() {


  return (
    <>
      <Header />
      <ScrollToTop />
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App;
