import ContactProvider from "./context/ContactContext";
import ContactApp from "./pages/ContactApp";
import ContactForm from "./pages/ContactForm";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <ContactProvider>
        <Routes>
          <Route path="/" element={<ContactApp />} />
          <Route path="/form" element={<ContactForm />} />
        </Routes>
      </ContactProvider>
    </>
  );
}

export default App;
