// import LoginForm from "./pages/LoginForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
// import Login from "./pages/Login";
//import RegisterEvent from "./pages/RegisterEvent";
import Shop from "./pages/Shop";
import Women from "./pages/Women"
import Bantuan from "./pages/Bantuan";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import RegisterForm from "./pages/RegisterEvent";
import LoginForm from "./pages/LoginForm";
import Man from "./pages/Man"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/Bantuan" element={<Bantuan />} />
          <Route path="/Man" element={<Man />} />
        </Route>

        <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;