import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ContactProvider from "./context/ContactContext";
import ContactApp from "./pages/ContactApp";
import ContactForm from "./pages/ContactForm";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <ContactProvider>
        <Header/>
        <Routes>
          <Route path="/" element={<ContactApp />} />
          <Route path="/form" element={<ContactForm />} />
        </Routes>
        <Footer/>
      </ContactProvider>
    </>
  );
}

export default App;
