import '../styles/App.scss';
import Header from './Header';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Footer from './Footer';
import ContactForm from './ContactForm';

function App() {
  return (
    <div>
      <Header />
      <Projects />
      <AboutMe />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
