import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from '../contexts/AuthContext'
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Policy from "./pages/Policy";
import TermsCondition from "./pages/TermsCondition";
import PublicOutlet from "./PublicOutlet";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/" element={<PublicOutlet />}>
              <Route path="signup" element={<Signup />} />
              <Route path="login" element={<Login />} />
            </Route>

            <Route path="privacyPolicy" element={<Policy />} />
            <Route path="TermsCondition" element={<TermsCondition />} />
          </Routes>
        </Layout>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
