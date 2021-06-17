import { useState } from 'react';
import { Form } from 'react-bootstrap';


function TableRow(props) {

  const [data,setData]=useState(props.data);

  const handleEvent =()=>{
    const updateData = {...data,isCreate:true}
        setData(updateData) 
    console.log(updateData);

  }

    return (
        <>
            <tr>
                <td >{data.moduleName}</td>
                <td>{data.activityName}</td>
                <td> <Form.Check onClick={handleEvent} type="checkbox" /> </td>
                <td> <Form.Check type="checkbox" /> </td>
                <td> <Form.Check type="checkbox" /> </td>
                <td> <Form.Check  type="checkbox" /> </td>
                <td> <Form.Check  type="checkbox" /> </td>
           

            </tr>

        </>
    );
}

export default TableRow;


