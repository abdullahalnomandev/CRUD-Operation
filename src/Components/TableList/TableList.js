import React from 'react';
import { useState } from 'react';
import {Form, Table} from 'react-bootstrap';
import data from './FakeData';
import TableRow from './TableRow';



const TableList = () => {



    const [dataInfo,setInfoData]=useState(data)


    
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
                        dataInfo.map((data) => <TableRow data ={data} /> )

                    }


                </tbody>
            </Table>
        </div>
    );
};

export default TableList;