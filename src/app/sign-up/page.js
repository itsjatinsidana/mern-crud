'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
const Signup = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    // useEffect(() => {
    //  console.log(name,email,password)
    // }, [name,email,password])

    const signup = async (event) => {
        event.preventDefault();

        const formdata = new FormData();
        formdata.append("name", name);
        formdata.append("email", email);
        formdata.append("password", password);

        // for displaying form data
        for (const [key, value] of formdata.entries()) {
            console.log(key, value);
        }



        if (name === "" || email === "" || password === "") {
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
        else if (password !== confirmpassword) {
            Swal.fire({
                icon: 'error',
                title: 'Passwrd Not Matches',
                text: 'Password and confirm Password not same'
            });
        }

        else {

            try {
                const response = await axios.post('http://localhost:5000/signup', formdata, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                setMessage(response.data); // Set the message from the response

               
                if (response.status === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'signup Successful',
                        text: 'You have successfully Logged up!',
                        showConfirmButton: true,
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.href = "/log-in";
                        }
                    });

                }
                else if (response.status === 400) {
                    Swal.fire({
                        icon: 'error',
                        title: 'signup Failed',
                        text: 'You ARE ALREADY REGISTER, LOGIN NOW',
                    });

                }

                else {
                    alert("signup failed")
                }
            } catch (error) {

                console.error('Signup failed:', error.response.data);
                setMessage(error.response.data); // Set the error message
            }
        }

    }
    return (
        <>
            <div className="container mt-3">
                <h2>SignUp form</h2>
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
                        <label htmlFor="pwd">UserName:</label>
                        <input
                            type="text"
                            className="form-control"

                            placeholder="Enter Username"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
                    <div className="mb-3">
                        <label htmlFor="pwd"> Confirm Password:</label>
                        <input
                            type="password"
                            className="form-control"

                            placeholder="Enter password"
                            name="confirmpassword"
                            value={confirmpassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={signup}>
                        Submit
                    </button>
                    <br />

                    <div className="login-section">
                        <h4>Already have an account? </h4>
                        <h4>
                            {" "}
                            Log in here:{" "}
                            <a style={{ textDecoration: "underline", color: " #C19D60;" }} href="/log-in">
                                Login
                            </a>
                        </h4>
                    </div>
                </form>
                {message && <div className="alert alert-info mt-3">{message}</div>}
            </div>


        </>
    )
}

export default Signup