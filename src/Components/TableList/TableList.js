import React from 'react';
import {Form, Table} from 'react-bootstrap'

const TableList = () => {

    let data = [
        {
            moduleName: 'Configuration',
            activityName: 'Item Category',
            isCreate: false,
            isView: false,
            isEdit: false,
            isDelete: false,
            isApprove: false,
        },
        {
            moduleName: 'Configuration',
            activityName: "Item",
            isCreate: false,
            isView: false,
            isEdit: false,
            isDelete: false,
            isApprove: false,
        }
    ]


    return (
        <div className="container mt-5">
            <h3 className="text-primary">#Task 2</h3>
            <Table striped bordered hover>
                <thead>
                    <tr className="bg-success text-white">
                        <th>Module Name</th>
                        <th> Activity Name</th>
                        <th className="w-10">Create</th>
                        <th className="w-10">View</th>
                        <th className="w-10">Edit</th>
                        <th className="w-10">Delete</th>
                        <th className="w-10">Approve</th>
                    </tr>
                </thead >
                <tbody>

                    {
                        data.map((data) => <tr>
                            <td >{data.moduleName}</td>
                            <td>{data.activityName}</td>
                            <td> <Form.Check type="checkbox" /> </td>
                            <td> <Form.Check type="checkbox" /> </td>
                            <td> <Form.Check type="checkbox" /> </td>
                            <td> <Form.Check type="checkbox" /> </td>
                            <td> <Form.Check type="checkbox" /> </td>
                           
                        </tr>)

                    }


                </tbody>
            </Table>
        </div>
    );
};

export default TableList;