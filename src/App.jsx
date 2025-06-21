import './index.css'
import Header from './components/Header'
import Homepage from './pages/Homepage'
import Footer from './components/footer'
import AppRoutes from './Routers/Navigation'


function App() {


  return (
    <>
      <Header />
      
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App;
