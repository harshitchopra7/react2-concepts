import "./App.css";
import ApiCalling from "./components/ApiCalling/ApiCalling";
import Form from "./components/Form/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/RoutingFolder/Home/Home";
import AboutMe from "./components/RoutingFolder/AboutMe/AboutMe";
import OrdersPage from "./components/RoutingFolder/OrdersPage/OrdersPage";
import AccountsPage from "./components/RoutingFolder/AccountsPage/AccountsPage";
import ContactUs from "./components/RoutingFolder/ContactUs/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Form /> */}
        {/* <ApiCalling /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/my-orders" element={<OrdersPage />} />
          <Route path="/my-account" element={<AccountsPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
