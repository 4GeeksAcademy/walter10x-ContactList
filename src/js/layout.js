import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

//import { Home } from "./views/home";
import { ContactForm } from "./views/ContactForm";
import { Single } from "./views/single";
import { Formulario } from "./views/Formulario";
import { UpdateForm } from "./views/UpdateForm";
import injectContext from "./store/appContext";

//import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                   
                    <Routes>
                        <Route path="/" element={<ContactForm />} />
                        <Route path="/contact" element={<ContactForm />} />
                        <Route path="/single/:theid" element={<Single />} />
                        <Route path="/formulario" element={<Formulario />} />
                        <Route path="/update/:contactId" element={<UpdateForm />} />
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
