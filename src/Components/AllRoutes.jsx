import { Route,Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from "../Pages/Cart";
import ContactUs from "../Pages/ContactUs";
import INEN from "../Pages/INEN";
import SingIn from "../Pages/SingIn";
import Product from "../Pages/Product";

export default function AllRoutes(){
    return (<>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/card" element={<Card/>}/>
                <Route path="/contact" element={<ContactUs/>}/>
                <Route path="/inen" element={<INEN/>}/>
                <Route path="/singin" element={<SingIn/>}/>
                <Route path="/product" element={<Product/>}/>
                
            </Routes>
            <Footer/>
    </>)
}