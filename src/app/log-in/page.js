'use client'
import { useContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const {login} = useContext(AuthContext);
    console.log(useContext(AuthContext))

    const Login = async (event) => {
        event.preventDefault();

        const formdata = new FormData();

        formdata.append("email", email);
        formdata.append("password", password);

        // for displaying form data
        for (const [key, value] of formdata.entries()) {
            console.log(key, value);
        }

        if (email === "" || password === "") {
            Swal.fire({
                icon: 'error',
                title: 'oops...',
                text: 'Enter The Form Properly !'
            });
        }
        else if (!email.includes('@')) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Email',
                text: 'Email must include @ symbol!'
            });
        }
        else {

            try {
                const response = await axios.post('http://localhost:5000/login', { email, password }
                    // headers: {
                    //     'Content-Type': 'multipart/form-data'
                    // }
                );
                console.log('res', response);
                console.log(response.data); // Set the message from the response
                if (response.status === 200) {

                    Swal.fire({
                        icon: 'success',
                        title: 'login Successful',
                        text: 'You have successfully Logged IN!',
                        showConfirmButton: true,
                    }).then((result) => {
                        if (result.isConfirmed) {
                         router.push("/home") ;
                        }
                    });
                    sessionStorage.setItem("name", response.data);
                    localStorage.setItem("email", email);
                    login(email);


                }


                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Login Failed',
                        text: response.data
                    });
                }
            } catch (error) {

                console.error('Login failed:', error.response ? error.response.data : error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: error.response ? error.response.data : 'An error occurred'
                });

            }
        }
    }

    return (

        <>
            <div className="container mt-3">
                <h2>Login form</h2>
                <br />
                <form className='alert alert-dark'>
                    <div className="mb-3 mt-3">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="pwd">Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            id="pwd"
                            placeholder="Enter password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>


                    <button type="submit" className="btn btn-primary" onClick={Login}>
                        Submit
                    </button>
                    <br />

                    <div className="login-section">
                        <h4>Don't have an account? </h4>
                        <h4>
                            {" "}
                            Log in here:{" "}
                            <a style={{ textDecoration: "underline", color: " #C19D60;" }} href="/sign-up">
                                SignUp
                            </a>
                        </h4>
                    </div>
                </form>

            </div>
        </>)
}
export default Login;