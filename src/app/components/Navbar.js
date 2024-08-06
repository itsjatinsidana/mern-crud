'use client'
import "../styles.css";
import styles from '../styles.css';
import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

const Navbar = () => {
    // window.onscroll = function () { scrollFunction() };

    // function scrollFunction() {
    //     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    //         document.getElementById("navbar").style.padding = "30px 10px";
    //         document.getElementById("logo").style.fontSize = "25px";
    //     } else {
    //         document.getElementById("navbar").style.padding = "80px 10px";
    //         document.getElementById("logo").style.fontSize = "35px";
    //     }
    // }
    const [isScrolled, setIsScrolled] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLogout = () => {
        // Clear sessionStorage
        localStorage.clear();

        // Redirect to the login page
        // window.location.href = '/'; // Directly navigate to login page
        router.replace('/')
    };
    return (
        <>
            <div id="navbar" className={isScrolled ? 'scrolled' : ''}>
                <a href="#default" id="logo">
                    UserData
                </a>
                <div className="navbar-section">
                    <div id="navbar-right">
                        <a className="active" href="/">
                            Home
                        </a>

                        <a href="/sign-up">Signup</a>

                        <a href="/log-in">Login</a>
                        <a href="/upload-img">File Store</a>




                    </div>
                    <div className="logout">
                        <button onClick={handleLogout} style={{ backgroundColor: "#9CAFAA", width: '100px' }}>Logout</button>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: 10, padding: "15px 15px 250px", fontSize: 30 }}>

            </div>
        </>

    )
}
export default Navbar;