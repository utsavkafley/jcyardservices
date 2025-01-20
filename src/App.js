import "./App.css";
import {
  About,
  ContactForm,
  Footer,
  Gallery,
  Header,
  Services,
} from "./components";

function App() {
  return (
    <div class="container">
      <Header />
      <About />
      <Services />
      <Gallery />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
