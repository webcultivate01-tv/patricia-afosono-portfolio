import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
