import React from 'react';
import { Table } from 'react-bootstrap';

const UserData = ({ users }) => {


    const deleteUser = (e, _id) => {

        fetch(`https://guarded-beach-06323.herokuapp.com/delete/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.text())
            .then(result =>{
                if(result){
                    e.target.parentNode.parentNode.style.display="none";
                }
            })
    }

    return (
        <div className="container mt-5">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th> Name</th>
                        <th>E-mail</th>
                        <th>Action</th>
                    </tr>
                </thead >
                <tbody>

                    {
                        users.map((user, index, Id) => <tr>
                            <td >{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td style={{width:'110px'}}> <button
                                className="btn-danger px-2 rounded py-2"
                                onClick={(e) => deleteUser(e,user._id)}

                            >Delete</button> </td>
                        </tr>)
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default UserData;