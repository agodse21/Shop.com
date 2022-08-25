// import logo from './logo.svg';
// import './App.css';

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AllRoutes from "./routes/AllRoute";
import Offers from "./routes/Offers";

function App() {
  return (
    <>
      <Offers />
      <Navbar />
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
