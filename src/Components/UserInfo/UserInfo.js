import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import UserData from './UserData';

const UserInfo = () => {

    const [user, setUser] = useState({
        name: '',
        email: ''
    })

    const handleBlur = (e) => {
        let isValid = true;

        if (e.target.name === "name") {
            isValid = e.target.value;
        }

        if (e.target.name === "email") {
            isValid = e.target.value
        }

        if (isValid) {
            const loginUser = { ...user };
            loginUser[e.target.name] = e.target.value;
            setUser(loginUser);
        }

    }


    const handleSubmit = (e) => {

        const postRequest = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };
        fetch('http://localhost:5000/users', postRequest)
            .then(response => response.json())
            .then(data => {
               console.log(data);
            })
    }


    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/userInfo')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    return (
        <>
            <div className="container mt-5">
                <form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <h5>Name</h5>
                            <Form.Control onBlur={handleBlur} name="name" placeholder="Enter Name *" required />
                        </Col>
                        <Col>
                            <h5>Email</h5>
                            <Form.Control type="email" onBlur={handleBlur} name="email" placeholder="Enter Email *" required />
                        </Col>
                        <Col>  <input className="btn-primary mt-4 px-4 py-2 rounded" type="submit" value="Add" /> </Col>

                    </Row>

                </form>
            </div>

        < UserData users={users}/>

        </>
    );
};

export default UserInfo;