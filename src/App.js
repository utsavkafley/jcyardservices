import './App.scss';
import { Header, Navbar, About, Services, ContactForm, Footer } from './components';

function App() {
  return (
    <div className="container mx-auto px-4 sm:px-24 md:px-32 lg:px-72">
      <Header />
      <Navbar />
      <About />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
