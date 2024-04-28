import React from 'react';
import ReactDOM from 'react-dom/client';
import Coffee from './component/MainProduct/CoffeeSection/Coffee';
import Fertilizer from './component/Fertilizer/Fertilizer';
import Home from './component/Home/home';
import PhoneAuth from "./component/Auth/SignIn";
import ContactSalesResponse from './component/ContactSalesResponse/ContactSalesResponse';
import BecomeSupplier from './component/BecomeSupplier/BecomeSupplier';
import NotFound from './component/NotFound/NotFound';
import Pepper from './component/MainProduct/PepperSection/Pepper';
import Avacados from './component/MainProduct/Avocados/Avacados';
import Layout from './Layout';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path = "" element={<Home/>}/>
      <Route path = "/coffee" element={<Coffee/>}/>
      <Route path = "/avocados" element={<Avacados/>}/>
      <Route path = "/pepper" element={<Pepper/>}/>
      <Route path = "/fertilizer" element={<Fertilizer/>}/>
      <Route path = "/login" element={<PhoneAuth />} />
      <Route path = "/contactSales" element = {<ContactSalesResponse/>} />
      <Route path = "/become-supplier" element = {<BecomeSupplier />} />
      <Route path = "*" element = {<NotFound />} />
          
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);