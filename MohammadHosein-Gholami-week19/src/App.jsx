import { Route, Routes, Navigate } from "react-router-dom";
import LoginForm from "./pages/loginForm/LoginForm";
import RegisterForm from "./pages/registerForm/RegisterForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/home/homepage/HomePage";
import SecurityPage from "./components/security/SecurityPage";


function App() {
  const queryClient = new QueryClient();


  return (
    <>
      <div>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Navigate to="/register" replace />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/homepage" element={<SecurityPage>
              <HomePage/>
            </SecurityPage>} />
          </Routes>
        </QueryClientProvider>
      </div>
    </>
  );
}

export default App;
