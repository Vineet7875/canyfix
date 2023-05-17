import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Section1 from "./Components/Section1"
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";
import Section5 from "./Components/Section5";
import AllBlogs from "./Components/AllBlogs";
import BlogContent from "./Components/BlogContent";
import Footer from "./Components/Footer";
function LandingPage() {
    return (
        <>
            <Router>
                <Nav />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Section1 />
                                <Section2 />
                                <Section3 />
                                <Section4 />
                                <Section5 />
                            </>
                        }
                    />

                    <Route path="/AllBlogs" element={<AllBlogs filterKeyword=""/>} />
                    <Route path="/BlogContent" element={<BlogContent />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default LandingPage;