import { useRef, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "../Styles/Nav.css"
function Nav() {

    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };
    const navigate = useNavigate();
    const handleAboutClick = () => {
        // navigate('/About');
    };
    const handleProductsClick = () => {
        // navigate('/ProductsPage');
    };
    const handleHomeClick = () => {
        navigate('/');
    };
    const handleBlogsClick = () => {
        navigate('/AllBlogs');
    };
    const handleContactClick = () => {
        // navigate('/Contact');
    };
    const [open, setOpen] = useState(true);
    useEffect(() => {
        if (!open) {
            document.getElementById("close-btn").click()
        }
    }, [open])
    return (
        <div className="app">
            <header>
                <div id="logo1">
                    <img src="canyfixlogo.png" alt="Logo" />
                </div>


                <nav ref={navRef}>

                    <a class="nav-link nav-link-ltr" onClick={() => {
                        handleHomeClick();
                        setOpen(false);
                    }}>Home</a>

                    <a class="nav-link nav-link-ltr" onClick={() => {
                        handleAboutClick();
                        setOpen(false);
                    }}>About</a>


                    <a class="nav-link nav-link-ltr" onClick={() => {
                        handleProductsClick();
                        setOpen(false);
                    }}>Produts</a>

                    <a class="nav-link nav-link-ltr" onClick={() => {
                        handleBlogsClick();
                        setOpen(false);
                    }}>Blogs</a>

                    <a class="nav-link nav-link-ltr" onClick={() => {
                        handleContactClick();
                        setOpen(false);
                    }}>Contact</a>
                    <a
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>

                        <img style={{ display: "none" }} src="cross.png" id="close-btn" onClick={() => setOpen(true)} className="hamberimg" />
                    </a>
                </nav>
                <a className="nav-btn" onClick={showNavbar}>
                    <img src="menu.png" className="hamberimg" />
                </a>

            </header>
        </div>

    );
}

export default Nav;