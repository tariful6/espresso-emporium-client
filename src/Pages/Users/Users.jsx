import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
    const usersData = useLoaderData();
    const [users, setUsers] = useState(usersData)
    
    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/users/${id}`,{
                    method : 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount){
                       Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                       });
                       const remaining = users.filter(user=> user._id !== id);
                       setUsers(remaining)

                    }
                })
            }
        });
    }
    
    return (
        <div className="container mx-auto mb-9">
            <Link to="/">
                <button className=" btn btn-secondary my-6">Back to Home</button>
            </Link>
            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Create At</th>
                    <th className=" pl-12">Action</th>
                </tr>
                </thead>

                <tbody>
                    {
                        users.map(user => <tr>
                            <th>1</th>
                            <td>{user?.name}</td>
                            <td>{user?.email}</td>
                            <td>{user?.createdAt}</td>
                            <td> 
                                <button onClick={()=> handleDelete(user._id)} className=" btn btn-primary">X</button>
                               <button className=" btn btn-secondary ml-3">E</button>
                            </td>
                        </tr>)
                    }
    
                </tbody>

            </table>
            </div>
        </div>
    );
};

export default Users;