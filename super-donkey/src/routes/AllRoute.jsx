import React from "react";
import { Route, Routes } from "react-router-dom";
import OfferPage from "../components/OfferPage";
import { PrivateRoute } from "../components/PrivateRoute";
import CartPage from "./CartPage";
import DealsPage from "./Deal";
import DepartmentPage from "./Department";
import ExclusivePage from "./Exclusive";
import HomePage from "./HomePage";
import LoginPage from "./loginPage";
import OrderPage from "./OrederPage";
import PaymentPage from "./Payment";
import ProductDetail from "./ProductDetails";
import ShopBuddyPage from "./ShopBuddy";
import ShopLocalPage from "./ShopLocal";
import ShopTravelPage from "./ShopTravel";
import SignUp from "./SignUp";
import StorePage from "./Stores";

export default function AllRoutes(){
return(
    <Routes>
        {/* <Route path="/" element={ <PrivateRoute><HomePage /></PrivateRoute>} /> */}
        <Route path="/" element={ <HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/deals" element={<DealsPage />} />
        {/* <Route path="/cart/:id" element={<PrivateRoute><CartPage /></PrivateRoute>} /> */}
        <Route path="/cart" element={<CartPage />} />
        <Route path="/cart/:id" element={<CartPage />} />
        <Route path="/orders" element={<PrivateRoute><OrderPage /></PrivateRoute>} />
        <Route path="/exclusive" element={<ExclusivePage />} />
        <Route path="/shopbuddy" element={<ShopBuddyPage />} />
        <Route path="/shoplocal" element={<ShopLocalPage />} />
        <Route path="/shoptravel" element={<ShopTravelPage />} />
        <Route path="/stores" element={<StorePage />} />
        <Route path="/department" element={<DepartmentPage />} /> 
        <Route path="/offer" element={<OfferPage />} /> 
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/payment" element={<PaymentPage />} />
       
    </Routes>
)

};