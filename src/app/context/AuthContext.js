'use client'
import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation";

export const AuthContext = createContext();
// Create the provider component
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState(null);

    useEffect(() => {
        // Check if user is logged in on component mount
        const storedEmail = localStorage.getItem('email');
        console.log("hshjshx" ,storedEmail)
        if (storedEmail) {
            console.log("hshdsfgveyefveycevyehvyev")
            setEmail(storedEmail);
            setIsLoggedIn(true);
        }

        // Add event listener to handle session storage changes across tabs
        const handleStorageChange = (event) => {
            if (event.key === 'email') {
                if (event.newValue) {
                    setEmail(event.newValue);
                    setIsLoggedIn(true);
                } else {
                    setEmail(null);
                    setIsLoggedIn(false);
                }
            }
            console.log("heloo")
        };

        window.addEventListener('storage', handleStorageChange);


        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);
    const router = useRouter();
    useEffect(() => {
        // Redirect if not logged in
        if (isLoggedIn) {
          router.push('/home');
        }
        else{
            router.push('/log-in')
        }
      }, [isLoggedIn, router]);

    const login = (email) => {
        localStorage.getItem('email');
        setEmail(email);
        setIsLoggedIn(true);
    };

    const logout = () => {
        sessionStorage.removeItem('email');
        setEmail(null);
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, email, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
