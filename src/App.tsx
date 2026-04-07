import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BestSellers from './components/BestSellers';
import AllProducts from './components/AllProducts';
import Philosophy from './components/Philosophy';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';

function App() {
  return (
    <div className="min-h-screen bg-page-bg flex flex-col font-sans relative overflow-x-hidden">
      <CartSidebar />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <BestSellers />
        <AllProducts />
        <Philosophy />
      </main>
      <Footer />
    </div>
  );
}

export default App;
