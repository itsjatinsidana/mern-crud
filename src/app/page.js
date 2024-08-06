
'use client'
// import styles from "./styles.css";
// import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import { useState, useEffect } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";



export default function Home() {

  // const [users, setUsers] = useState([]);
  // const [editName, setEditName] = useState('');
  // const [editEmail, setEditEmail] = useState('');
  // const [editUserId, setEditUserId] = useState('');


  // const name = sessionStorage.getItem("name");

  // const fetchUsers = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:5000/getusers');
  //     setUsers(response.data);
  //   } catch (error) {
  //     console.error('Error fetching users:', error);
  //   }
  // };
  // useEffect(() => {


  //   fetchUsers();
  // }, []);
  // const deleteUser = async (email) => {

  //   try {

  //     const result = await Swal.fire({
  //       title: 'Are you sure?',
  //       text: "You won't be able to revert this!",
  //       icon: 'warning',
  //       showCancelButton: true,
  //       confirmButtonColor: '#3085d6',
  //       cancelButtonColor: '#d33',
  //       confirmButtonText: 'Yes, delete it!'
  //     });

  //     if (result.isConfirmed) {
  //       const response = await axios.post('http://localhost:5000/deleteuser', { email }

  //       );
  //       console.log('res', response);
  //       console.log(response.data); // Set the message from the response
  //       if (response.status === 200) {

  //         await Swal.fire({
  //           icon: 'success',
  //           title: 'deleteF Successful',
  //           text: 'You have successfully Deleted!',
  //           showConfirmButton: true,

  //         })

  //         fetchUsers();
  //       }
  //       else {
  //         Swal.fire({
  //           icon: 'error',
  //           title: 'delete failed',
  //           text: response.data
  //         });
  //       }
  //     }
  //   } catch (error) {

  //     console.error('Login failed:', error.response ? error.response.data : error.message);
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Login Failed',
  //       text: error.response ? error.response.data : 'An error occurred'
  //     });

  //   }

  // }
  // const handleEditUser = (user) => {
  //   setEditUserId(user._id);
  //   setEditName(user.name);
  //   setEditEmail(user.email);

  // };

  // const handleSaveChanges = async () => {
  //   try {
  //     const response = await axios.post(`http://localhost:5000/updateuser/${editUserId}`, {
  //       name: editName,
  //       email: editEmail,
  //     });
  //     if (response.status === 200) {
  //       await Swal.fire({
  //         icon: 'success',
  //         title: 'Update Successful',
  //         text: 'User has been updated!',
  //         showConfirmButton: true,
  //       });
  //       fetchUsers();
  //       // Close modal
  //       setEditUserId('');
  //     } else {
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Update Failed',
  //         text: response.data,
  //       });
  //     }
  //   } catch (error) {
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Update Failed',
  //       text: error.response ? error.response.data : 'An error occurred',
  //     });
  //   }
  // };
  return (
    <>
      {/* <Navbar /> */}
      {/* <div className="container mt-3">
        <h2>WELCOME {name}</h2>

        <table className="table table-hover">
          <thead>
            <tr>
              <th>NAME</th>
              <th>EMAIL</th>

            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>

                <td> <button
                  type="button"
                  className="btn btn-outline-warning"
                  data-bs-toggle="modal"
                  data-bs-target="#editUserModal"
                  onClick={() => handleEditUser(user)}
                >
                  Edit
                </button>
                </td>
                <td> <button type="button" class="btn btn-outline-danger" onClick={() => deleteUser(user.email)}>Delete</button></td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

      <div className="modal fade" id="editUserModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
           
            <div className="modal-header">
              <h4 className="modal-title">Edit User Data</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" />
            </div>
         
            <div className="modal-body">

              <form>
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Name"
                      name="name"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      name="email"
                      value={editEmail}
                      onChange={(e) => setEditEmail(e.target.value)}
                    />
                  </div>
                </div>
                <br />

              </form>

            </div>
         
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"

                onClick={handleSaveChanges}
              >
                Edit User
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <div className='container'>
        <div className="alert alert-success">
          Hello user ! To visit please &nbsp;<a href='/sign-up' style={{ textDecoration: "none" }}> SignUp</a> &nbsp;OR &nbsp;<a style={{ textDecoration: "none" }} href='/log-in'>Login</a>
        </div>
      </div>

    </>
  );
}
