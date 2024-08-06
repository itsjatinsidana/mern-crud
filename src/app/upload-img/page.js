'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';

const ImageUpload = () => {
    const [image, setImage] = useState(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState('');

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);

        try {
            const res = await axios.post('http://localhost:5000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setUploadedImageUrl(res.data.filePath);
            if (res.status === 200) {
                alert("image uploaded succesfully")
                fetchImage();



            }
        } catch (err) {
            console.error(err);
        }
    };

    const router = useRouter();
    useEffect(() => {
        // Example of session handling (you can use cookies or local storage for session)
        const user_email = sessionStorage.getItem('email');
        if (!user_email) {
            router.push('/log-in'); // Redirect to login if session is not available
        }
    }, []);



    const [photo, setPhoto] = useState([]);
    const fetchImage = async () => {
        try {
            const response = await axios.get('http://localhost:5000/getimage');
            setPhoto(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };
    useEffect(() => {
        fetchImage();
    }, []);

    return (
        <>

            <Navbar />

            <div className='container'>

                <h1>File Uploading Example</h1>
                <form onSubmit={handleSubmit} className='alert alert-danger'>
                    <input type="file" onChange={handleImageChange} />
                    <button type="submit">Upload</button>
                </form>
                {/* {uploadedImageUrl && (
                <div>
                    <h3>Uploaded Image:</h3>
                    <img src="http://localhost:5000"{uploadedImageUrl} alt="Uploaded" style={{ width: '300px' }} />
                
                    <img src={`http://localhost:5000${uploadedImageUrl}`} alt="Uploaded" style={{ width: '300px' }} />s
                </div>
            )} */}


                <div className="container mt-3" id='photo-card'>
                    {photo.map((photo, index) => (
                        <div key={index} className="card">
                            <img
                                className="card-img-top"
                                src={`http://localhost:5000${photo.filepath}`}
                                alt="Card image"
                                style={{ width: "400px", height: "500px" }}
                            />


                        </div>
                    ))}
                    <br />
                </div>

            </div>

        </>

    );
};


export default ImageUpload;
