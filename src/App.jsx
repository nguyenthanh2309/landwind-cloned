import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Customers from './components/Customers'
import Features from './components/Features'
import SocialProof from './components/SocialProof'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
        <Header />
        <Hero />
        <Customers />
        <Features />
        <SocialProof />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
        <Footer />
    </div>
  );
}

export default App;
