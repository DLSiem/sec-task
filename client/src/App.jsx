// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { Layout } from "./components/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
// import { AuthProvider } from "./provider/authProvider";
// import Routes from "./routes";

// function App() {
//   return (
//     <AuthProvider>
//       <Routes />
//     </AuthProvider>
//   );
// }
export default App;
