import React, {useRef} from 'react';
import { useReactToPrint } from 'react-to-print';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table } from 'react-bootstrap';

const ReactPdfPrint = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'emp-data',
        onAfterPrint: () => alert('The document has been printed!')
    });

    const data = [
        { 
        "ID":"1",
        "JobTitle":"Health Educator",
        "EmailAddress":"Carl_Garcia6156@joiniaa.com",
        "FirstNameLastName":"Carl Garcia"
        },
        { 
        "ID":"2",
        "JobTitle":"Investment  Advisor",
        "EmailAddress":"Estrella_Hamilton662@guentu.biz",
        "FirstNameLastName":"Estrella Hamilton"
        },
        { 
        "ID":"3",
        "JobTitle":"Accountant",
        "EmailAddress":"Doris_Ashwell7567@zorer.org",
        "FirstNameLastName":"Doris Ashwell"
        },
        { 
        "ID":"4",
        "JobTitle":"Mobile Developer",
        "EmailAddress":"Phoebe_Shea4447@gompie.com",
        "FirstNameLastName":"Phoebe Shea"
        },
        { 
        "ID":"5",
        "JobTitle":"Biologist",
        "EmailAddress":"Eryn_Rogan8079@mafthy.com",
        "FirstNameLastName":"Eryn Rogan"
        }
        ];

  return (
    <>
        <div ref={componentRef} style={{width: '100%', height: window.innerHeight}}>
            <h1 className="text-center my-3 border py-2">Employee Data</h1>
            <Table className="w-75 mx-auto" bordered>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Job Title</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.FirstNameLastName}</td>
                                <td>{item.JobTitle}</td>
                                <td>{item.EmailAddress}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <Button variant='success' style={{marginLeft:'45%'}} onClick={handlePrint}>Print Data</Button>
        </div>
    </>
  )
}

export default ReactPdfPrint;
